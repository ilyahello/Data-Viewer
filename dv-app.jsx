// dv-app.jsx — Main DataViewer app
var { useState, useMemo, useCallback, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": ["#4547FF", "#ECEDFF"]
}/*EDITMODE-END*/;

const VIEWS = [
  { label:'Default View', count:143 },
  { label:'Secondary View' },
];

const INIT_FILTERS = {
  period:'today', fleet:[], subfleet:[], aircraft:[],
  eventTypes:['Fault','Log'], quickFilters:[],
};

function filtersEqual(a, b) { return JSON.stringify(a) === JSON.stringify(b); }

function applyQuickFilters(evs, quickFilters) {
  if (!quickFilters?.length) return evs;
  const nameToId = {};
  (window.DVData?.components || []).forEach(c => { nameToId[c.name] = c.id; });
  quickFilters.forEach(qf => {
    if (!qf.values?.length) return;
    // Components: narrow reports to those that actually carry a selected component
    if (qf.category === 'Components') {
      const ids = qf.values.map(n => nameToId[n]).filter(Boolean);
      evs = evs.filter(ev => ev.type !== 'Report' || (ev.comps && ids.some(id => ev.comps[id] != null)));
      return;
    }
    const evType = CAT_TO_TYPE[qf.category];
    evs = evs.filter(ev => ev.type !== evType || qf.values.includes(String(ev[qf.attr.key] || '')));
  });
  return evs;
}

function DataViewerApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const [primary, bg] = Array.isArray(t.accent) ? t.accent : ['#4547FF','#ECEDFF'];
    document.documentElement.style.setProperty('--dv-accent',      primary);
    document.documentElement.style.setProperty('--dv-accent-bg',   bg);
    document.documentElement.style.setProperty('--dv-accent-dark', primary);
  }, [t.accent]);

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeView,       setActiveView]       = useState(0);
  const [timelineLoaded,   setTimelineLoaded]   = useState(false);

  // Components plotted on the timeline + shown in Report Details (max 4, 2 per unit)
  const [chartComps, setChartComps] = useState([]);

  // ── Draft & Applied ───────────────────────────────────────────────
  const [draft,   setDraft]   = useState({ ...INIT_FILTERS });
  const [applied, setApplied] = useState({ ...INIT_FILTERS });

  const isDirty = !filtersEqual(draft, applied);

  // ── Draft setters ─────────────────────────────────────────────────
  const setPeriod   = useCallback(v => setDraft(d => ({ ...d, period:   v })), []);
  const setFleet    = useCallback(v => setDraft(d => ({ ...d, fleet:    v })), []);
  const setSubfleet = useCallback(v => setDraft(d => ({ ...d, subfleet: v })), []);
  const setAircraft = useCallback(v => setDraft(d => ({ ...d, aircraft: v })), []);

  // Toggle type immediately (both draft + applied)
  const toggleType = useCallback((type) => {
    const upd = d => {
      const next = d.eventTypes.includes(type)
        ? d.eventTypes.filter(t => t !== type)
        : [...d.eventTypes, type];
      return { ...d, eventTypes: next };
    };
    setDraft(upd);
    setApplied(upd);
  }, []);

  // Quick filter: update draft immediately (chip appears right away)
  const pickImmediate = useCallback((category, attr, values) => {
    setDraft(d => {
      const idx = d.quickFilters.findIndex(f => f.category===category && f.attr.key===attr.key);
      let next;
      if (values.length === 0) {
        next = d.quickFilters.filter((_, i) => i !== idx);
      } else if (idx >= 0) {
        next = d.quickFilters.map((f, i) => i===idx ? { ...f, values } : f);
      } else {
        next = [...d.quickFilters, { category, attr, values }];
      }
      return { ...d, quickFilters: next };
    });
  }, []);

  const removeQuickFilter = useCallback(idx => {
    setDraft(d => ({ ...d, quickFilters: d.quickFilters.filter((_,i) => i!==idx) }));
  }, []);

  // ── Apply: commit draft → applied, auto-enable types ─────────────
  const applyFilters = useCallback(() => {
    setDraft(prev => {
      let etypes = [...prev.eventTypes];
      if (prev.quickFilters.some(f => f.category==='Reports'    && f.values.length>0) && !etypes.includes('Report'))    etypes.push('Report');
      if (prev.quickFilters.some(f => f.category==='Components' && f.values.length>0) && !etypes.includes('Component')) etypes.push('Component');
      const next = { ...prev, eventTypes: etypes };
      setApplied(next);
      return next;
    });
  }, []);

  // ── Reset: clear everything back to defaults ──────────────────────
  const resetFilters = useCallback(() => {
    if (!window.confirm('Clear all filters? This will reset the filter bar and all advanced filter conditions.')) return;
    setDraft({ ...INIT_FILTERS });
    setApplied({ ...INIT_FILTERS });
    setAdvApplied(EMPTY_ADV);
  }, []);

  // Enter → apply
  useEffect(() => {
    const fn = e => {
      if (isDirty && e.key==='Enter' && e.target.tagName!=='INPUT' && e.target.tagName!=='TEXTAREA')
        applyFilters();
    };
    document.addEventListener('keydown', fn);
    return () => document.removeEventListener('keydown', fn);
  }, [isDirty, applyFilters]);

  // ── Advanced filters ──────────────────────────────────────────────
  const [advApplied,   setAdvApplied]   = useState(EMPTY_ADV);
  const [advPanelOpen, setAdvPanelOpen] = useState(false);
  const advActiveCount = (advApplied.groups||[]).reduce(
    (n,g) => n + g.rows.filter(r=>r.values.length>0||r.text).length, 0);

  const hasAnyFilter = applied.period !== 'today'
    || applied.fleet.length || applied.subfleet.length || applied.aircraft.length
    || applied.quickFilters.some(f => f.values?.length > 0)
    || advActiveCount > 0;

  // ── External filter menu (from "Setup filter first") ─────────────
  const [externalMenuCat, setExternalMenuCat] = useState(null);
  const openFilterForCat = useCallback(cat => setExternalMenuCat(cat), []);

  // ── Filtered events (APPLIED state) ──────────────────────────────
  const filteredEvents = useMemo(() => {
    let evs = DVData.events;
    if (applied.eventTypes.length > 0) {
      // "Component" is a facet of reports: a report matches it when it carries component data
      const showComp = applied.eventTypes.includes('Component');
      evs = evs.filter(e =>
        applied.eventTypes.includes(e.type)
        || (showComp && e.type === 'Report' && e.comps && Object.keys(e.comps).length > 0)
      );
    }
    if (applied.fleet.length)    evs = evs.filter(e => applied.fleet.includes(e.fleet));
    if (applied.subfleet.length) evs = evs.filter(e => applied.subfleet.includes(e.sub));
    if (applied.aircraft.length) evs = evs.filter(e => applied.aircraft.includes(e.aircraft));
    evs = applyQuickFilters(evs, applied.quickFilters);
    evs = applyAdvancedFilters(evs, advApplied);
    return evs;
  }, [applied, advApplied]);

  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100vh', overflow:'hidden', background:'#FAFAFA' }}>
      <DVHeader onToggleSidebar={() => setSidebarCollapsed(c => !c)}/>

      <div style={{ display:'flex', flex:1, overflow:'hidden' }}>
        <DVSidebar activePage="data-viewer" collapsed={sidebarCollapsed}/>

        <main style={{ flex:1, display:'flex', flexDirection:'column', overflow:'hidden', background:'#FAFAFA' }}>

          <div style={{ background:'#fff', borderBottom:'1px solid #EEEEEE', flexShrink:0 }}>
            <DVViewTabs views={VIEWS} activeIdx={activeView} onSelect={setActiveView} onAdd={() => {}}/>
            <DVFilterBar
              period={draft.period}       onPeriod={setPeriod}
              fleet={draft.fleet}         onFleet={setFleet}
              subfleet={draft.subfleet}   onSubfleet={setSubfleet}
              aircraft={draft.aircraft}   onAircraft={setAircraft}
              quickFilters={draft.quickFilters}
              onPickImmediate={pickImmediate}
              onRemoveQuickFilter={removeQuickFilter}
              isDirty={isDirty}
              hasAnyFilter={hasAnyFilter}
              onApply={applyFilters}
              onReset={resetFilters}
              externalMenuCat={externalMenuCat}
              onExternalMenuClose={() => setExternalMenuCat(null)}
              advActiveCount={advActiveCount}
              onOpenAdvanced={() => setAdvPanelOpen(o => !o)}
              advPanelOpen={advPanelOpen}
            />
            <AdvFilterIndicator
              adv={advApplied}
              onEdit={() => setAdvPanelOpen(true)}
              onClear={() => setAdvApplied(EMPTY_ADV)}
            />
          </div>

          <div style={{
            flex:1, overflowY:'auto', overflowX:'auto',
            padding:'18px 24px 32px',
            display:'flex', flexDirection:'column', gap:14, minWidth:0,
          }}>
            <div style={{ minWidth:1100 }}>
              <DVMetricsRow
                events={filteredEvents}
                eventTypes={new Set(applied.eventTypes)}
                onActivateType={toggleType}
                appliedQuickFilters={applied.quickFilters}
                onSetupFilter={openFilterForCat}
              />
            </div>

            <div style={{ background:'#fff', border:'1px solid #EAEAEA', borderRadius:8, minWidth:1100 }}>
              {timelineLoaded
                ? <DVTimelineChart timeSeries={DVData.ts}
                    showFaults={applied.eventTypes.includes('Fault')}
                    showLogs={applied.eventTypes.includes('Log')}
                    showReports={applied.eventTypes.includes('Report')}
                    chartComps={chartComps}
                    onChangeChartComps={setChartComps}/>
                : <DVTimelinePlaceholder onLoad={() => setTimelineLoaded(true)}/>}
            </div>

            <div style={{ minWidth:1100 }}>
              <DVEventsTable events={filteredEvents} allTotal={875} chartComps={chartComps}/>
            </div>
          </div>
        </main>
      </div>

      <TweaksPanel>
        <TweakSection label="Color"/>
        <TweakColor label="Accent" value={t.accent}
          options={[['#4547FF','#ECEDFF'],['#B86A00','#FFF3D9'],['#1E3A5F','#E8EFF7']]}
          onChange={v => setTweak('accent', v)}/>
      </TweaksPanel>

      {advPanelOpen && (
        <AdvancedFiltersPanel
          initialAdv={advApplied}
          onApply={setAdvApplied}
          onClose={() => setAdvPanelOpen(false)}
        />
      )}
    </div>
  );
}

const dvRoot = ReactDOM.createRoot(document.getElementById('root'));
dvRoot.render(<DataViewerApp />);
