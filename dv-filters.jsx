// dv-filters.jsx
var { useState, useRef, useEffect, useLayoutEffect, useMemo } = React;

// ── Shared styles ────────────────────────────────────────────────────
const DD_ITEM = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  gap: 8, height: 38, padding: '0 12px', borderRadius: 6, cursor: 'pointer',
  fontFamily: "'Source Sans 3', sans-serif",
  fontSize: 14, letterSpacing: '-0.01em',
  transition: 'background 0.1s', userSelect: 'none'
};
const DD_PANEL = {
  background: '#fff', borderRadius: 8,
  boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.04)',
  padding: 6,
  fontFamily: "'Source Sans 3', sans-serif"
};

// ── Quick filter data ────────────────────────────────────────────────
const QUICK_FILTER_MENU = {
  Faults: [{ key: 'sys', label: 'System' }, { key: 'phase', label: 'Phase' }, { key: 'loc', label: 'Location' }],
  Logs: [{ key: 'sys', label: 'System' }, { key: 'sub2', label: 'Type' }, { key: 'status', label: 'Status' }, { key: 'loc', label: 'Location' }],
  Reports: [{ key: 'sub2', label: 'Type' }, { key: 'loc', label: 'Location' }],
  Components: [{ key: 'comp', label: 'Component' }]
};
// Categories whose values are shown immediately (no attribute step)
const FLAT_CATS = { Components: { key: 'comp', label: 'Component' } };
const CAT_TO_TYPE = { Faults: 'Fault', Logs: 'Log', Reports: 'Report', Components: 'Component' };

function getFieldValues(category, fieldKey) {
  // Components are parameters, not events — list their names directly
  if (category === 'Components' && fieldKey === 'comp') {
    return (window.DVData?.components || []).map((c) => c.name);
  }
  const evType = CAT_TO_TYPE[category];
  const vals = new Set();
  (window.DVData?.events || []).forEach((ev) => {
    if (ev.type !== evType) return;
    const v = ev[fieldKey];
    if (v !== null && v !== undefined && String(v).trim() !== '') vals.add(String(v));
  });
  return [...vals].sort();
}

// ── Cascading quick-filter menu (3 panels, flush positioning) ────────
const QuickFilterMenu = ({ anchorPos, onClose, onPickImmediate, currentFilters, initialCat = null, initialAttr = null }) => {
  const [activeCat, setActiveCat] = useState(initialCat);
  const [activeAttr, setActiveAttr] = useState(initialAttr || (initialCat ? (FLAT_CATS[initialCat] || null) : null));
  // Top positions for panels 2 & 3 (aligned to hovered item)
  const [p2Top, setP2Top] = useState(anchorPos.top);
  const [p3Top, setP3Top] = useState(anchorPos.top);
  // Left positions measured from panel widths
  const [p2Left, setP2Left] = useState(anchorPos.left + 192);
  const [p3Left, setP3Left] = useState(anchorPos.left + 384);

  const p1Ref = useRef();
  const p2Ref = useRef();
  const catItemRefs = useRef({});
  const attrItemRefs = useRef({});
  const catTimer = useRef();
  const attrTimer = useRef();

  // Outside click
  useEffect(() => {
    const fn = (e) => {if (!e.target.closest('[data-dv-qfm]')) onClose();};
    setTimeout(() => document.addEventListener('mousedown', fn), 50);
    return () => document.removeEventListener('mousedown', fn);
  }, [onClose]);

  // Measure panel 1 width → place panel 2 (flip left if it would overflow the viewport)
  useLayoutEffect(() => {
    if (p1Ref.current && p2Ref.current) {
      const r1 = p1Ref.current.getBoundingClientRect();
      const w2 = p2Ref.current.offsetWidth;
      setP2Left(r1.right + w2 > window.innerWidth - 8 ? Math.max(8, r1.left - w2 - 6) : r1.right);
    } else if (p1Ref.current) {
      setP2Left(p1Ref.current.getBoundingClientRect().right);
    }
    // If initialCat given, align panel 2 to that item immediately
    if (initialCat && catItemRefs.current[initialCat]) {
      const r = catItemRefs.current[initialCat].getBoundingClientRect();
      setP2Top(r.top);
    }
  }, [activeCat]);

  // Measure panel 2 width → place panel 3 (flip left if it would overflow)
  useLayoutEffect(() => {
    if (p2Ref.current) {
      const r2 = p2Ref.current.getBoundingClientRect();
      const w3 = 208;
      setP3Left(r2.right + w3 > window.innerWidth - 8 ? Math.max(8, r2.left - w3 - 6) : r2.right);
    }
  }, [activeCat, activeAttr]);

  const availVals = useMemo(() =>
  activeCat && activeAttr ? getFieldValues(activeCat, activeAttr.key) : [],
  [activeCat, activeAttr]
  );

  const existingChecked = useMemo(() => {
    if (!activeCat || !activeAttr) return [];
    const f = (currentFilters || []).find((f) => f.category === activeCat && f.attr.key === activeAttr.key);
    return f ? f.values || [] : [];
  }, [activeCat, activeAttr, currentFilters]);

  const toggleVal = (val) => {
    if (!activeCat || !activeAttr) return;
    const next = existingChecked.includes(val) ?
    existingChecked.filter((v) => v !== val) :
    [...existingChecked, val];
    onPickImmediate(activeCat, activeAttr, next);
  };

  const enterCat = (cat) => {
    clearTimeout(catTimer.current);
    setActiveCat(cat);
    // Flat categories (e.g. Components) skip the attribute step and show values directly
    setActiveAttr(FLAT_CATS[cat] || null);
    const el = catItemRefs.current[cat];
    if (el) setP2Top(el.getBoundingClientRect().top);
  };
  const leavePanel = (setFn, val, delay = 140) => {
    catTimer.current = setTimeout(() => setFn(val), delay);
  };
  const enterAttr = (attr) => {
    clearTimeout(attrTimer.current);
    setActiveAttr(attr);
    const el = attrItemRefs.current[attr.key];
    if (el) setP3Top(el.getBoundingClientRect().top);
  };

  const cats = Object.keys(QUICK_FILTER_MENU);
  const attrs = activeCat ? QUICK_FILTER_MENU[activeCat] : [];
  const isFlat = !!FLAT_CATS[activeCat];
  const panelStyle = { ...DD_PANEL, position: 'fixed', zIndex: 9999, minWidth: 188 };

  // Shared checkbox value row (used for the value panel and flat categories)
  const ValueRow = (val) => {
    const on = existingChecked.includes(val);
    return (
      <div key={val} onClick={() => toggleVal(val)}
      onMouseEnter={(e) => e.currentTarget.style.background = '#F4F4F4'}
      onMouseLeave={(e) => e.currentTarget.style.background = on ? '#F4F5FF' : 'transparent'}
      style={{ ...DD_ITEM, justifyContent: 'flex-start', gap: 10, background: on ? '#F4F5FF' : 'transparent' }}>
        <div style={{
          width: 15, height: 15, borderRadius: 3, flexShrink: 0,
          border: `1.5px solid ${on ? 'var(--dv-accent)' : '#D0D0D0'}`,
          background: on ? 'var(--dv-accent)' : '#fff',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.1s'
        }}>
          {on && <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
            <path d="M1 3.5L3.5 6L8 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>}
        </div>
        <span style={{ color: '#000', fontWeight: on ? 600 : 500 }}>{val}</span>
      </div>);
  };

  // Values-only mode: opened from an existing chip → jump straight to that
  // attribute's value list (e.g. "Logs: System" → System values).
  if (initialAttr) {
    const left = Math.min(anchorPos.left, window.innerWidth - 232);
    return ReactDOM.createPortal(
      <div data-dv-qfm style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, pointerEvents: 'none' }}>
        <div data-dv-qfm style={{ ...panelStyle, top: anchorPos.top, left: Math.max(8, left),
          minWidth: 224, maxHeight: 360, overflowY: 'auto', pointerEvents: 'auto' }}>
          {availVals.length === 0 ?
            <div style={{ padding: '10px 14px', fontSize: 13, color: '#AAA', letterSpacing: '-0.01em' }}>No values in data</div> :
            availVals.map(ValueRow)}
        </div>
      </div>,
      document.body
    );
  }

  return ReactDOM.createPortal(
    <div data-dv-qfm style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, pointerEvents: 'none' }}>

      {/* Panel 1 — Categories */}
      <div ref={p1Ref} data-dv-qfm style={{ ...panelStyle, top: anchorPos.top, left: anchorPos.left, pointerEvents: 'auto' }}
      onMouseEnter={() => clearTimeout(catTimer.current)}
      onMouseLeave={() => leavePanel(setActiveCat, null)}>
        {cats.map((cat) => {
          const active = activeCat === cat;
          return (
            <div key={cat}
            ref={(el) => {catItemRefs.current[cat] = el;}}
            onMouseEnter={() => enterCat(cat)}
            style={{ ...DD_ITEM, background: active ? '#F4F4F4' : 'transparent',
              fontWeight: active ? 600 : 500, color: '#000' }}>
              <span style={{ flex: 1, textAlign: 'left' }}>{cat}</span>
              <IcChevRight s={13} c={active ? '#555' : '#CCC'} />
            </div>);

        })}
      </div>

      {/* Panel 2 — Attributes, OR values directly for flat categories */}
      {activeCat && (isFlat
      ?
      <div ref={p2Ref} data-dv-qfm style={{ ...panelStyle, top: p2Top, left: p2Left, minWidth: 224, maxHeight: 360, overflowY: 'auto', pointerEvents: 'auto' }}
      onMouseEnter={() => {clearTimeout(catTimer.current);clearTimeout(attrTimer.current);}}>
          {availVals.length === 0 ?
        <div style={{ padding: '10px 14px', fontSize: 13, color: '#AAA', letterSpacing: '-0.01em' }}>No values in data</div> :
        availVals.map(ValueRow)}
        </div>
      :
      attrs.length > 0 &&
      <div ref={p2Ref} data-dv-qfm style={{ ...panelStyle, top: p2Top, left: p2Left, pointerEvents: 'auto' }}
      onMouseEnter={() => {clearTimeout(catTimer.current);clearTimeout(attrTimer.current);}}
      onMouseLeave={() => {clearTimeout(attrTimer.current);attrTimer.current = setTimeout(() => setActiveAttr(null), 140);}}>
          {attrs.map((attr) => {
          const active = activeAttr?.key === attr.key;
          const hasVals = (currentFilters || []).some((f) => f.category === activeCat && f.attr.key === attr.key && f.values.length > 0);
          return (
            <div key={attr.key}
            ref={(el) => {attrItemRefs.current[attr.key] = el;}}
            onMouseEnter={() => {clearTimeout(attrTimer.current);enterAttr(attr);}}
            style={{ ...DD_ITEM, background: active ? '#F4F4F4' : 'transparent',
              fontWeight: active ? 600 : 500, color: '#000' }}>
                <span style={{ flex: 1, textAlign: 'left' }}>{attr.label}</span>
                {hasVals && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--dv-accent)', flexShrink: 0, marginRight: 3 }} />}
                <IcChevRight s={13} c={active ? '#555' : '#CCC'} />
              </div>);

        })}
        </div>
      )}

      {/* Panel 3 — Values (top aligned to hovered attr item) */}
      {activeAttr && !isFlat &&
      <div data-dv-qfm style={{ ...panelStyle, top: p3Top, left: p3Left, minWidth: 200, maxHeight: 360, overflowY: 'auto', pointerEvents: 'auto' }}
      onMouseEnter={() => {clearTimeout(catTimer.current);clearTimeout(attrTimer.current);}}>
          {availVals.length === 0 ?
        <div style={{ padding: '10px 14px', fontSize: 13, color: '#AAA', letterSpacing: '-0.01em' }}>No values in data</div> :
        availVals.map(ValueRow)}
        </div>
      }
    </div>,
    document.body
  );
};

// ── Chip dropdown (multi-select) ─────────────────────────────────────
const ChipDropdown = ({ label, options, selected, onChange }) => {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0, width: 160 });
  const chipRef = useRef();

  const sel = Array.isArray(selected) ? selected : (selected ? [selected] : []);

  useEffect(() => {
    if (!open) return;
    const fn = (e) => {
      if (!chipRef.current?.contains(e.target) && !e.target.closest('[data-dv-portal]')) setOpen(false);
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, [open]);

  const handleOpen = () => {
    if (chipRef.current) {
      const r = chipRef.current.getBoundingClientRect();
      setPos({ top: r.bottom + 4, left: r.left, width: Math.max(r.width, 160) });
    }
    setOpen((o) => !o);
  };

  // De-dupe option keys, normalise to { k, v }
  const rawOpts = Array.isArray(options) && typeof options[0] === 'string'
    ? options.map((o) => ({ k: o, v: o })) : options || [];
  const labelOpts = rawOpts.filter((o, i) => rawOpts.findIndex((x) => x.k === o.k) === i);

  const toggle = (k) => {
    onChange(sel.includes(k) ? sel.filter((x) => x !== k) : [...sel, k]);
  };

  const firstLabel = sel.length ? (labelOpts.find((o) => o.k === sel[0])?.v || sel[0]) : null;
  const displayVal = sel.length === 0 ? null
    : sel.length === 1 ? firstLabel
    : `${firstLabel} +${sel.length - 1}`;

  return (
    <div ref={chipRef} style={{ flexShrink: 0 }}>
      <DVChip label={label} value={displayVal} onClick={handleOpen}
      onClear={sel.length ? () => onChange([]) : null} />
      {open && ReactDOM.createPortal(
        <div data-dv-portal style={{
          ...DD_PANEL, position: 'fixed', top: pos.top, left: pos.left,
          minWidth: Math.max(pos.width, 188), maxHeight: 320, overflowY: 'auto', zIndex: 9999
        }}>
          {labelOpts.map(({ k, v }) => {
            const on = sel.includes(k);
            return (
              <div key={k}
              onClick={() => toggle(k)}
              onMouseEnter={(e) => e.currentTarget.style.background = '#F4F4F4'}
              onMouseLeave={(e) => e.currentTarget.style.background = on ? '#F4F5FF' : 'transparent'}
              style={{ ...DD_ITEM, justifyContent: 'flex-start', gap: 10,
                background: on ? '#F4F5FF' : 'transparent' }}>
                <div style={{
                  width: 15, height: 15, borderRadius: 3, flexShrink: 0,
                  border: `1.5px solid ${on ? 'var(--dv-accent)' : '#D0D0D0'}`,
                  background: on ? 'var(--dv-accent)' : '#fff',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.1s'
                }}>
                  {on && <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                    <path d="M1 3.5L3.5 6L8 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>}
                </div>
                <span style={{ color: '#000', fontWeight: on ? 600 : 500 }}>{v}</span>
              </div>);

          })}
        </div>, document.body
      )}
    </div>);

};

// ── View tabs ────────────────────────────────────────────────────────
const DVViewTabs = ({ views, activeIdx, onSelect, onAdd }) =>
<div style={{
  display: 'flex', alignItems: 'center', gap: 4,
  padding: '14px 24px 12px', borderBottom: '1px solid #F2F2F2'
}}>
    {views.map((v, i) => {
    const active = i === activeIdx;
    return (
      <div key={i} style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '6px 12px', borderRadius: 6, cursor: 'default'
      }}>
          <span style={{
          fontFamily: "'Source Sans 3', sans-serif", fontWeight: active ? 600 : 500,
          fontSize: 15, color: active ? '#000' : '#999', letterSpacing: '-0.01em'
        }}>{v.label}</span>
          {active && v.count != null &&
        <span style={{
          fontSize: 12, fontWeight: 600, padding: '2px 8px', borderRadius: 99,
          background: '#D7F5DD', color: '#08612D',
          fontFamily: "'Source Sans 3', sans-serif"
        }}>{v.count}</span>
        }
          {active &&
        <button style={{ width: 24, height: 24, border: 'none', background: 'transparent',
          cursor: 'pointer', display: 'flex', alignItems: 'center',
          justifyContent: 'center', borderRadius: 4, marginLeft: 2 }}>
              <IcDotsVert s={14} c="#999" />
            </button>
        }
        </div>);

  })}
    <div onClick={onAdd} style={{
    display: 'inline-flex', alignItems: 'center', gap: 6,
    padding: '6px 10px', cursor: 'pointer', color: '#999', borderRadius: 6
  }}>
      <IcPlus s={14} c="#999" />
      <span style={{
      fontFamily: "'Source Sans 3', sans-serif", fontWeight: 500, fontSize: 15,
      letterSpacing: '-0.01em'
    }}>View</span>
    </div>
  </div>;


// ── Plus button with hover/active states ────────────────────────────
const PlusBtn = React.forwardRef(({ onClick, active }, ref) => {
  const [hov, setHov] = useState(false);
  return (
    <button ref={ref} onClick={onClick} title="Add filter"
    onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    style={{
      width: 32, height: 32, borderRadius: 6, cursor: 'pointer', flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      border: active ? '1px solid var(--dv-accent)' : `1px solid ${hov ? '#C8C8C8' : '#E6E6E6'}`,
      background: active ? 'var(--dv-accent-bg)' : hov ? '#F5F5F5' : '#fff',
      transition: 'background 0.12s, border-color 0.12s'
    }}>
      <IcPlus s={15} c={active ? 'var(--dv-accent)' : hov ? '#333' : '#555'} />
    </button>);

});

// ── Advanced filter icon button ──────────────────────────────────────
const AdvFilterBtn = ({ active, count, onClick, open }) => {
  const [hov, setHov] = useState(false);
  const highlight = active || open;
  return (
    <button onClick={onClick} title="Advanced Filters"
    onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    style={{
      width: 32, height: 32, padding: 0, borderRadius: 6, cursor: 'pointer', flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      border: highlight ? '1px solid var(--dv-accent)' : `1px solid ${hov ? '#C8C8C8' : '#E6E6E6'}`,
      background: highlight ? 'var(--dv-accent-bg)' : hov ? '#F5F5F5' : '#fff',
      transition: 'background 0.12s, border-color 0.12s',
      position: 'relative'
    }}>
      <IcFilterLines s={14} c={highlight ? 'var(--dv-accent)' : hov ? '#333' : '#555'} />
      {active &&
      <span style={{
        position: 'absolute', top: 5, right: 5,
        width: 6, height: 6, borderRadius: '50%',
        background: 'var(--dv-accent)',
        border: '1.5px solid #fff'
      }} />
      }
    </button>);
};

// ── Filter bar ───────────────────────────────────────────────────────
const PERIOD_LABELS = { today: 'Today', week: 'Week', month: 'Month', year: 'Year', custom: 'Custom' };
const periodOpts = Object.entries(PERIOD_LABELS).map(([k, v]) => ({ k, v }));

const DVFilterBar = ({
  period, onPeriod, fleet, onFleet, subfleet, onSubfleet, aircraft, onAircraft,
  quickFilters, onPickImmediate, onRemoveQuickFilter,
  isDirty, hasAnyFilter, onApply, onReset,
  externalMenuCat, onExternalMenuClose,
  advActiveCount = 0, onOpenAdvanced, advPanelOpen = false,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  const [menuInitCat, setMenuInitCat] = useState(null);
  const [menuInitAttr, setMenuInitAttr] = useState(null);
  const plusRef = useRef();
  const barRef = useRef();

  // Handle externally-triggered menu (from "Setup filter first")
  useEffect(() => {
    if (externalMenuCat && plusRef.current) {
      const r = plusRef.current.getBoundingClientRect();
      setMenuPos({ top: r.bottom + 6, left: r.left });
      setMenuInitCat(externalMenuCat);
      setMenuInitAttr(null);
      setMenuOpen(true);
    }
  }, [externalMenuCat]);

  const openMenu = () => {
    if (plusRef.current) {
      const r = plusRef.current.getBoundingClientRect();
      setMenuPos({ top: r.bottom + 6, left: r.left });
    }
    setMenuInitCat(null);
    setMenuInitAttr(null);
    setMenuOpen(true);
  };

  // Reopen the menu straight to a chip's values (e.g. "Logs: System" → System values)
  const openChipMenu = (e, qf) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMenuPos({ top: r.bottom + 6, left: r.left });
    setMenuInitCat(qf.category);
    setMenuInitAttr(qf.attr);
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setMenuInitCat(null);
    setMenuInitAttr(null);
    onExternalMenuClose?.();
  };

  return (
    <div ref={barRef} data-filter-bar style={{
      display: 'flex', alignItems: 'center', gap: 8,
      padding: '12px 24px 12px', flexWrap: 'nowrap', borderColor: "rgb(242, 242, 242)", borderWidth: "0px 0px 1px", borderStyle: "solid"
    }}>
      <AdvFilterBtn active={advActiveCount>0} count={advActiveCount} onClick={onOpenAdvanced} open={advPanelOpen}/>
      <PeriodChip value={period} onChange={onPeriod} />
      <ChipDropdown label="Fleet" options={DVData.opts.fleet} selected={fleet} onChange={onFleet} />
      <ChipDropdown label="Sub Fleet" options={DVData.opts.sub} selected={subfleet} onChange={onSubfleet} />
      <ChipDropdown label="Aircraft" options={DVData.opts.aircraft} selected={aircraft} onChange={onAircraft} />

      {/* Quick filter chips */}
      {(quickFilters || []).filter((qf) => qf.values?.length > 0).map((qf, i) => {
        const v = qf.values;
        const disp = v.length <= 2 ? v.join(', ') : `${v.slice(0, 2).join(', ')} +${v.length - 2}`;
        return (
          <DVChip key={i}
          label={FLAT_CATS[qf.category] ? qf.category : `${qf.category}: ${qf.attr.label}`}
          value={disp} onClick={(e) => openChipMenu(e, qf)}
          onClear={() => onRemoveQuickFilter(i)} />);

      })}

      {/* + button */}
      <PlusBtn ref={plusRef} onClick={openMenu} active={menuOpen} />

      {menuOpen &&
      <QuickFilterMenu
        anchorPos={menuPos}
        initialCat={menuInitCat}
        initialAttr={menuInitAttr}
        onClose={closeMenu}
        onPickImmediate={onPickImmediate}
        currentFilters={quickFilters} />
      }

      <div style={{ flex: 1 }} />

      {/* Reset — clears all filters to default */}
      {hasAnyFilter &&
      <button onClick={onReset} style={{
        background: 'transparent', border: 'none', cursor: 'pointer',
        fontSize: 13, color: '#888', fontFamily: 'inherit', letterSpacing: '-0.01em',
        padding: '0 6px', whiteSpace: 'nowrap'
      }}>
          Clear
        </button>
      }

      {/* Apply */}
      <button onClick={isDirty ? onApply : undefined} style={{
        height: 34, padding: '0 16px', borderRadius: 6, border: 'none',
        background: isDirty ? 'var(--dv-accent)' : '#F0F0F0',
        color: isDirty ? '#fff' : '#CCC',
        cursor: isDirty ? 'pointer' : 'default',
        fontSize: 13, fontWeight: 600,
        fontFamily: "'Source Sans 3', sans-serif",
        letterSpacing: '-0.01em', whiteSpace: 'nowrap', flexShrink: 0,
        transition: 'background 0.15s, color 0.15s',
        display: 'inline-flex', alignItems: 'center', gap: 6
      }}>
        Apply
        {isDirty &&
        <span style={{
          background: 'rgba(255,255,255,0.22)', borderRadius: 4,
          padding: '1px 5px', fontSize: 11, fontWeight: 700
        }}>↵</span>
        }
      </button>
    </div>);

};

Object.assign(window, {
  DVFilterBar, DVViewTabs, QuickFilterMenu,
  QUICK_FILTER_MENU, CAT_TO_TYPE
});