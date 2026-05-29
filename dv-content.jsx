// dv-content.jsx — MetricsRow + TimelineChart
var { useState, useRef, useEffect, useMemo } = React;

// ── Metric card ──────────────────────────────────────────────────────
const MetricCard = ({
  title, value, valueLabel='events', trend, trendDir,
  hasToggle=false, toggleOn=false, onToggle,
  dotColor,
  locked=false,        // true = "setup filter first" state (Reports/Components)
  onSetupFilter,       // callback → opens filter menu for this category
}) => {
  const [hov, setHov] = useState(false);
  const isEmpty = hasToggle && !toggleOn;

  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        flex:'1 1 0', minWidth:200, background:'#fff', borderRadius:8,
        border:`1px solid ${hov ? '#D8D8D8' : '#EAEAEA'}`,
        padding:'14px 16px', display:'flex', flexDirection:'column', gap:10,
        transition:'border-color 0.15s, box-shadow 0.15s',
        boxShadow: hov ? '0 2px 8px rgba(0,0,0,0.04)' : 'none',
        minHeight:120,
      }}>

      {/* Top row: title + toggle */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div style={{ display:'flex', alignItems:'center', gap:7 }}>
          {dotColor && (
            <span style={{ width:7, height:7, borderRadius:'50%', flexShrink:0,
              background: (isEmpty || locked) ? '#CCCCCC' : dotColor }}/>
          )}
          <span style={{
            fontSize:13, letterSpacing:'-0.01em', whiteSpace:'nowrap',
            fontFamily:"'Source Sans 3', sans-serif", fontWeight:500,
            color: (isEmpty || locked) ? '#AAAAAA' : '#000',
          }}>{title}</span>
        </div>
        {hasToggle && (
          <div style={{ opacity: locked ? 0.35 : 1, pointerEvents: locked ? 'none' : 'auto' }}>
            <DVSwitch on={toggleOn} onClick={onToggle}/>
          </div>
        )}
      </div>

      {/* Body */}
      {locked ? (
        /* Locked state: no applied filters yet */
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginTop:'auto' }}>
          <span style={{ fontSize:28, color:'#CCCCCC', fontWeight:300,
            fontFamily:"'Source Sans 3', sans-serif", lineHeight:1 }}>—</span>
          <button onClick={onSetupFilter} style={{
            display:'inline-flex', alignItems:'center', gap:4,
            background:'transparent', border:'none', cursor:'pointer',
            color:'#555', fontSize:13, letterSpacing:'-0.01em', fontFamily:'inherit',
            padding:0, whiteSpace:'nowrap', fontWeight:500, paddingBottom:1,
          }}>
            Setup filter first
            <IcChevRight s={13} c="#555"/>
          </button>
        </div>
      ) : isEmpty ? (
        /* Toggle is off */
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginTop:'auto' }}>
          <span style={{ fontSize:28, color:'#CCCCCC', fontWeight:300,
            fontFamily:"'Source Sans 3', sans-serif", lineHeight:1 }}>—</span>
        </div>
      ) : (
        /* Normal: value + trend */
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:8, marginTop:'auto' }}>
          <div style={{ display:'flex', flexDirection:'column' }}>
            <span style={{
              fontSize:32, fontWeight:600, color:'#000',
              fontFamily:"'Source Sans 3', sans-serif", letterSpacing:'-0.02em', lineHeight:1,
            }}>
              {value != null ? value.toLocaleString() : '—'}
            </span>
            <span style={{ fontSize:12, color:'#999', letterSpacing:'-0.01em', marginTop:4 }}>
              {valueLabel}
            </span>
          </div>
          {trend != null && (
            <div style={{ display:'flex', alignItems:'center', gap:4, paddingBottom:0 }}>
              {trendDir === 'up' ? <IcTrendUp s={13} c="#EB0052"/> : <IcTrendDown s={13} c="#008A61"/>}
              <span style={{ fontSize:12, color: trendDir==='up' ? '#EB0052' : '#008A61',
                fontWeight:500, letterSpacing:'-0.01em' }}>
                {trendDir === 'up' ? '+' : '-'}{Math.abs(trend)}%
              </span>
              <span style={{ fontSize:12, color:'#AAA', letterSpacing:'-0.01em', marginLeft:2 }}>
                vs prev period
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ── Metrics row ──────────────────────────────────────────────────────
const DVMetricsRow = ({ events, eventTypes, onActivateType, appliedQuickFilters=[], onSetupFilter }) => {
  const SCALE  = 11;
  const total   = Math.max(events.length  * SCALE, 281);
  const faults  = events.filter(e => e.type==='Fault').length    * SCALE || 128;
  const logs    = events.filter(e => e.type==='Log').length      * SCALE || 153;
  const reports = events.filter(e => e.type==='Report').length   * SCALE;
  const comps   = events.filter(e => e.type==='Report' && e.comps && Object.keys(e.comps).length>0).length * SCALE;

  // Reports/Components are "locked" until their quick filters are applied
  const reportsUnlocked = appliedQuickFilters.some(f => f.category==='Reports'    && f.values.length > 0);
  const compsUnlocked   = appliedQuickFilters.some(f => f.category==='Components' && f.values.length > 0);

  return (
    <div style={{ display:'flex', gap:12 }}>
      <MetricCard title="Total Events" value={total}
        trend={12} trendDir="up"/>

      <MetricCard title="Faults" value={faults}
        dotColor={TYPE_DOTS.Fault} trend={7} trendDir="down"
        hasToggle toggleOn={eventTypes.has('Fault')}
        onToggle={() => onActivateType('Fault')}/>

      <MetricCard title="Logs" value={logs}
        dotColor={TYPE_DOTS.Log} trend={5} trendDir="up"
        hasToggle toggleOn={eventTypes.has('Log')}
        onToggle={() => onActivateType('Log')}/>

      <MetricCard title="Reports" value={reportsUnlocked ? reports : null}
        dotColor={TYPE_DOTS.Report}
        hasToggle toggleOn={eventTypes.has('Report')}
        onToggle={() => onActivateType('Report')}
        locked={!reportsUnlocked}
        onSetupFilter={() => onSetupFilter('Reports')}/>

      <MetricCard title="Components" value={compsUnlocked ? comps : null}
        dotColor={TYPE_DOTS.Component}
        hasToggle toggleOn={eventTypes.has('Component')}
        onToggle={() => onActivateType('Component')}
        locked={!compsUnlocked}
        onSetupFilter={() => onSetupFilter('Components')}/>
    </div>
  );
};

// ── Timeline placeholder ─────────────────────────────────────────────
const TimelineHeader = ({ onToggle, right }) => (
  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 18px 10px', gap:12 }}>
    <span style={{ fontSize:15, color:'#000', letterSpacing:'-0.01em',
      fontFamily:"'Source Sans 3', sans-serif", fontWeight:600 }}>Timeline</span>
    <div style={{ display:'flex', alignItems:'center', gap:8 }}>
      {right}
      <button onClick={onToggle} style={{ width:28, height:28, border:'none', background:'transparent',
        cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', borderRadius:5 }}>
        <IcCollapseChart s={16} c="#666"/>
      </button>
    </div>
  </div>
);

// ── Component picker (add up to 4, max 2 units) ──────────────────────
const MAX_COMPS = 4, MAX_UNITS = 2;

const DVComponentPicker = ({ chartComps, onChange }) => {
  const [open, setOpen] = useState(false);
  const [pos, setPos]   = useState({ top:0, left:0 });
  const btnRef = useRef();
  const all = window.DVData.components;

  const selectedUnits = [...new Set(chartComps.map(id => all.find(c=>c.id===id)?.unit))];
  const atMax = chartComps.length >= MAX_COMPS;

  useEffect(() => {
    if (!open) return;
    const fn = e => { if (!btnRef.current?.contains(e.target) && !e.target.closest('[data-dv-cpick]')) setOpen(false); };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, [open]);

  const handleOpen = () => {
    if (btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      setPos({ top: r.bottom + 6, left: Math.max(8, r.right - 280) });
    }
    setOpen(o => !o);
  };

  const toggle = (c) => {
    if (chartComps.includes(c.id)) {
      onChange(chartComps.filter(id => id !== c.id));
    } else {
      const wouldAddUnit = !selectedUnits.includes(c.unit);
      if (atMax) return;
      if (wouldAddUnit && selectedUnits.length >= MAX_UNITS) return;
      onChange([...chartComps, c.id]);
    }
  };

  // Group by unit for the menu
  const byUnit = {};
  all.forEach(c => { (byUnit[c.unit] = byUnit[c.unit] || []).push(c); });

  return (
    <div ref={btnRef} style={{ position:'relative' }}>
      <button onClick={handleOpen} style={{
        display:'inline-flex', alignItems:'center', gap:7, height:30, padding:'0 10px 0 11px',
        borderRadius:6, cursor:'pointer',
        border: open ? '1px solid var(--dv-accent)' : '1px solid #E6E6E6',
        background: open ? 'var(--dv-accent-bg)' : '#fff',
        fontFamily:"'Source Sans 3', sans-serif", fontSize:13, fontWeight:600,
        color: open ? 'var(--dv-accent)' : '#333', letterSpacing:'-0.01em',
        transition:'background 0.12s, border-color 0.12s',
      }}>
        <IcPlus s={13} c={open ? 'var(--dv-accent)' : '#555'}/>
        Component
        <span style={{
          fontSize:11, fontWeight:700, padding:'1px 6px', borderRadius:99,
          background: chartComps.length ? 'var(--dv-accent)' : '#EDEDED',
          color: chartComps.length ? '#fff' : '#999',
        }}>{chartComps.length}/{MAX_COMPS}</span>
      </button>

      {open && ReactDOM.createPortal(
        <div data-dv-cpick style={{
          position:'fixed', top:pos.top, left:pos.left, width:288, zIndex:9999,
          background:'#fff', borderRadius:8, padding:6,
          boxShadow:'0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)',
          fontFamily:"'Source Sans 3', sans-serif", maxHeight:380, overflowY:'auto',
        }}>
          <div style={{ padding:'6px 10px 8px', fontSize:12, color:'#999', letterSpacing:'-0.01em', lineHeight:1.4 }}>
            Plot up to {MAX_COMPS} parameters, max {MAX_UNITS} units (one per axis).
          </div>
          {Object.entries(byUnit).map(([unit, list]) => {
            const unitAvailable = selectedUnits.includes(unit) || selectedUnits.length < MAX_UNITS;
            return (
              <div key={unit}>
                <div style={{ padding:'6px 10px 3px', fontSize:11, fontWeight:700, color:'#BBB',
                  textTransform:'uppercase', letterSpacing:'0.03em' }}>{unit}</div>
                {list.map(c => {
                  const on = chartComps.includes(c.id);
                  const disabled = !on && (atMax || !unitAvailable);
                  return (
                    <div key={c.id} onClick={() => !disabled && toggle(c)}
                      onMouseEnter={e => { if (!disabled) e.currentTarget.style.background = '#F4F4F4'; }}
                      onMouseLeave={e => e.currentTarget.style.background = on ? '#F4F5FF' : 'transparent'}
                      style={{
                        display:'flex', alignItems:'center', gap:10, height:36, padding:'0 10px',
                        borderRadius:6, cursor: disabled ? 'not-allowed' : 'pointer',
                        background: on ? '#F4F5FF' : 'transparent', opacity: disabled ? 0.4 : 1,
                      }}>
                      <div style={{
                        width:15, height:15, borderRadius:3, flexShrink:0,
                        border:`1.5px solid ${on ? 'var(--dv-accent)' : '#D0D0D0'}`,
                        background: on ? 'var(--dv-accent)' : '#fff',
                        display:'inline-flex', alignItems:'center', justifyContent:'center',
                      }}>
                        {on && <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                          <path d="M1 3.5L3.5 6L8 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>}
                      </div>
                      <span style={{ width:9, height:9, borderRadius:'50%', background:c.color, flexShrink:0 }}/>
                      <span style={{ flex:1, fontSize:13, color:'#000', letterSpacing:'-0.01em', fontWeight: on ? 600 : 500 }}>{c.name}</span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>, document.body
      )}
    </div>
  );
};

// Legend chip for a selected component
const CompLegendChip = ({ comp, axis, onRemove }) => (
  <div style={{
    display:'inline-flex', alignItems:'center', gap:7, height:26, padding:'0 6px 0 9px',
    borderRadius:6, background:'#F7F7F7', border:'1px solid #EEE', flexShrink:0,
    fontFamily:"'Source Sans 3', sans-serif",
  }}>
    <span style={{ width:9, height:9, borderRadius:'50%', background:comp.color, flexShrink:0 }}/>
    <span style={{ fontSize:12, fontWeight:600, color:'#000', letterSpacing:'-0.01em', whiteSpace:'nowrap' }}>{comp.name}</span>
    <span style={{ fontSize:11, color:'#999', letterSpacing:'-0.01em', whiteSpace:'nowrap' }}>
      {comp.unit} · {axis}
    </span>
    <button onClick={onRemove} title="Remove"
      style={{ width:18, height:18, border:'none', background:'transparent', cursor:'pointer',
        display:'inline-flex', alignItems:'center', justifyContent:'center', borderRadius:4, padding:0, marginLeft:1 }}>
      <IcX s={10} c="#999"/>
    </button>
  </div>
);

const DVTimelinePlaceholder = ({ onLoad }) => (
  <div>
    <TimelineHeader/>
    <div style={{ padding:'24px 16px 32px', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <button onClick={onLoad} style={{
        display:'inline-flex', alignItems:'center', gap:8, height:40, padding:'0 18px',
        borderRadius:99, background:'#F2F2F2', border:'none', cursor:'pointer',
        fontFamily:"'Source Sans 3', sans-serif", fontWeight:500, fontSize:14,
        color:'#000', letterSpacing:'-0.01em', whiteSpace:'nowrap',
      }}>
        <IcBars s={16} c="#000"/>
        Load Timeline
      </button>
    </div>
  </div>
);

// ── Timeline chart ───────────────────────────────────────────────────
const DVTimelineChart = ({ timeSeries, showFaults, showLogs, showReports, chartComps = [], onChangeChartComps }) => {
  const containerRef = useRef();
  const [width, setWidth] = useState(900);

  useEffect(() => {
    const ro = new ResizeObserver(entries => {
      if (entries[0]) setWidth(entries[0].contentRect.width);
    });
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const allComps = window.DVData.components;
  const compSeries = window.DVData.compSeries;
  const comps = chartComps.map(id => allComps.find(c => c.id === id)).filter(Boolean);
  const compMode = comps.length > 0;

  // Unit → axis assignment (first unit = left, second = right)
  const units = [...new Set(comps.map(c => c.unit))];
  const leftUnit  = units[0] || null;
  const rightUnit = units[1] || null;

  // Range per unit (with headroom)
  const unitRange = {};
  units.forEach(u => {
    let lo = Infinity, hi = -Infinity;
    comps.filter(c => c.unit === u).forEach(c =>
      compSeries[c.id].forEach(v => { lo = Math.min(lo, v); hi = Math.max(hi, v); }));
    const pad = (hi - lo) * 0.18 || Math.abs(hi) * 0.1 || 1;
    unitRange[u] = { lo: lo - pad, hi: hi + pad };
  });

  const N = (compMode ? compSeries[comps[0].id] : timeSeries).length;
  const pad = { top: compMode ? 26 : 16, right: rightUnit ? 50 : 20, bottom: 28, left: 46 };
  const svgH = compMode ? 230 : 190;
  const cW = width - pad.left - pad.right;
  const cH = svgH - pad.top - pad.bottom;
  const xS = i => pad.left + (i / (N - 1)) * cW;

  // Count-mode (faults/logs) scaling
  const countVals = timeSeries.flatMap(d => [showFaults ? d.f : 0, showLogs ? d.l : 0, showReports ? (d.r||0) : 0]);
  const countMax  = Math.max(...countVals, 5) + 2;

  const fmtTick = (v, u) => {
    if (u === 'PPH') return Math.round(v).toLocaleString();
    if (Math.abs(v) >= 100) return Math.round(v);
    return Math.round(v * 10) / 10;
  };

  // 5 gridline fractions
  const fracs = [0, .25, .5, .75, 1];
  const yPos = f => pad.top + cH - f * cH;
  const yForUnit = (unit, v) => {
    const { lo, hi } = unitRange[unit];
    return pad.top + cH - ((v - lo) / (hi - lo)) * cH;
  };
  const yForCount = v => pad.top + cH - (v / countMax) * cH;
  const mkPath = (series, yfn) =>
    series.map((v, i) => `${i === 0 ? 'M' : 'L'}${xS(i).toFixed(1)},${yfn(v).toFixed(1)}`).join(' ');

  return (
    <div>
      <TimelineHeader right={
        <DVComponentPicker chartComps={chartComps} onChange={onChangeChartComps}/>
      }/>

      {/* Legend of selected components */}
      {compMode && (
        <div style={{ display:'flex', flexWrap:'wrap', gap:8, padding:'0 18px 10px' }}>
          {comps.map(c => (
            <CompLegendChip key={c.id} comp={c}
              axis={c.unit === leftUnit ? 'L' : 'R'}
              onRemove={() => onChangeChartComps(chartComps.filter(id => id !== c.id))}/>
          ))}
        </div>
      )}

      <div ref={containerRef} style={{ width:'100%', paddingBottom:12, paddingLeft:8, paddingRight:8 }}>
        <svg width={width} height={svgH} style={{ display:'block', overflow:'visible' }}>

          {/* Gridlines + axis ticks */}
          {compMode ? (
            <g>
              {/* axis unit captions */}
              <text x={pad.left} y={pad.top - 10} textAnchor="start"
                style={{ fontSize:11, fontWeight:700, fill:'#999', letterSpacing:'0.02em' }}>{leftUnit}</text>
              {rightUnit && (
                <text x={pad.left + cW} y={pad.top - 10} textAnchor="end"
                  style={{ fontSize:11, fontWeight:700, fill:'#999', letterSpacing:'0.02em' }}>{rightUnit}</text>
              )}
              {fracs.map((f, i) => {
                const lv = unitRange[leftUnit].lo + f * (unitRange[leftUnit].hi - unitRange[leftUnit].lo);
                const rv = rightUnit ? unitRange[rightUnit].lo + f * (unitRange[rightUnit].hi - unitRange[rightUnit].lo) : null;
                return (
                  <g key={i}>
                    <line x1={pad.left} y1={yPos(f)} x2={pad.left + cW} y2={yPos(f)} stroke="#F0F0F0" strokeWidth="1"/>
                    <text x={pad.left - 7} y={yPos(f) + 4} textAnchor="end" style={{ fontSize:11, fill:'#BBB' }}>{fmtTick(lv, leftUnit)}</text>
                    {rightUnit && (
                      <text x={pad.left + cW + 8} y={yPos(f) + 4} textAnchor="start" style={{ fontSize:11, fill:'#BBB' }}>{fmtTick(rv, rightUnit)}</text>
                    )}
                  </g>
                );
              })}
            </g>
          ) : (
            <g>
              {fracs.map(f => {
                const v = Math.round(countMax * f);
                return (
                  <g key={f}>
                    <line x1={pad.left} y1={yForCount(v)} x2={pad.left + cW} y2={yForCount(v)} stroke="#F0F0F0" strokeWidth="1"/>
                    <text x={pad.left - 6} y={yForCount(v) + 4} textAnchor="end" style={{ fontSize:11, fill:'#BBB' }}>{v}</text>
                  </g>
                );
              })}
            </g>
          )}

          {/* Series */}
          {compMode ? (
            <g>
              {comps.map(c => (
                <path key={c.id} d={mkPath(compSeries[c.id], v => yForUnit(c.unit, v))}
                  stroke={c.color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              ))}
              {comps.map(c =>
                compSeries[c.id].map((v, i) => i % 3 === 0 && (
                  <circle key={c.id + i} cx={xS(i)} cy={yForUnit(c.unit, v)} r="3" fill={c.color}/>
                ))
              )}
            </g>
          ) : (
            <g>
              {timeSeries.map((d,i) => (
                <g key={i}>
                  {showFaults  && <circle cx={xS(i)} cy={yForCount(d.f)} r="3.5" fill={TYPE_DOTS.Fault}  opacity="0.85"/>}
                  {showLogs    && <circle cx={xS(i)} cy={yForCount(d.l)} r="3.5" fill={TYPE_DOTS.Log}    opacity="0.85"/>}
                  {showReports && (d.r||0) > 0 && <circle cx={xS(i)} cy={yForCount(d.r||0)} r="3.5" fill={TYPE_DOTS.Report} opacity="0.85"/>}
                </g>
              ))}
            </g>
          )}
        </svg>
      </div>
    </div>
  );
};

Object.assign(window, { DVMetricsRow, DVTimelineChart, DVTimelinePlaceholder });
