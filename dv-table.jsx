// dv-table.jsx — Full-width events table matching design spec
var { useState, useRef, useEffect } = React;

// ── Helpers ──────────────────────────────────────────────────────────
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function fmtDate(dt) {
  const m = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})$/.exec(dt);
  if (!m) return dt;
  const [,,mm,dd,hh,mi] = m;
  return `${MONTHS[+mm-1]} ${dd}, ${m[1]} ${hh}:${mi}`;
}

function isRoute(loc) {
  // e.g. "JFK-SFO-7632"
  return /[A-Z]{2,}-/.test(loc);
}

// ── Tooltip ──────────────────────────────────────────────────────────
const Tip = ({ text, children }) => {
  const [vis, setVis] = useState(false);
  const [pos, setPos] = useState({ top:0, left:0 });
  const ref = useRef();
  return (
    <span ref={ref}
      onMouseEnter={() => {
        const r = ref.current?.getBoundingClientRect() || {};
        setPos({ top:(r.bottom||0)+5, left:(r.left||0)+(r.width||0)/2 });
        setVis(true);
      }}
      onMouseLeave={() => setVis(false)}
      style={{ display:'inline-flex', alignItems:'center', cursor:'default' }}>
      {children}
      {vis && ReactDOM.createPortal(
        <div style={{
          position:'fixed', top:pos.top, left:pos.left,
          transform:'translateX(-50%)', zIndex:9999,
          background:'#fff', borderRadius:6, padding:'6px 10px',
          fontSize:13, letterSpacing:'-0.01em', color:'#000',
          boxShadow:'0 4px 16px rgba(0,0,0,0.12)', border:'1px solid #EBEBEB',
          pointerEvents:'none', whiteSpace:'nowrap',
          fontFamily:"'Source Sans 3',sans-serif",
        }}>{text}</div>, document.body
      )}
    </span>
  );
};

// ── Type column ──────────────────────────────────────────────────────
const TYPE_DOT = { Fault:'#C07050', Log:'#2BB3E5', Report:'#FF8554', Component:'#008A61' };

// Context icons for Logs
const IcWrenchSm = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <path d="M9 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM2 12l5-5" stroke="#999" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);
const IcGearSm = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="2" stroke="#999" strokeWidth="1.2"/>
    <path d="M7 1.5v2M7 10.5v2M1.5 7h2M10.5 7h2M3 3l1.4 1.4M9.6 9.6L11 11M11 3L9.6 4.4M4.4 9.6L3 11"
      stroke="#999" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);
const IcPencilSm = ({ c='#999' }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 9.5L3.5 10 10 3.5 8.5 2 2 8.5z" stroke={c} strokeWidth="1.2" strokeLinejoin="round"/>
    <path d="M8.5 2L10 3.5" stroke={c} strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const TypeCell = ({ ev }) => {
  const dot = TYPE_DOT[ev.type] || '#888';
  const isFault   = ev.type === 'Fault';
  const isLog     = ev.type === 'Log';
  const isReport  = ev.type === 'Report';

  return (
    <div style={{ display:'flex', alignItems:'center', gap:5, whiteSpace:'nowrap' }}>
      <span style={{ width:7, height:7, borderRadius:'50%', flexShrink:0, background:dot }}/>
      <span style={{ fontSize:13, color:'#000', letterSpacing:'-0.01em' }}>{ev.type}</span>

      {/* sub label */}
      {ev.sub2 && (
        <span style={{
          fontSize:11, fontWeight:700, letterSpacing:0, marginLeft:1,
          color: isFault ? '#E87A3A' : isReport ? '#999' : '#999',
          textTransform:'uppercase',
        }}>{ev.sub2}</span>
      )}

      {/* FLR badge for faults */}
      {isFault && ev.flr && (
        <span style={{ fontSize:11, fontWeight:700, color:'#EB0052', letterSpacing:0 }}>FLR</span>
      )}

      {/* Tooltip labels for component change / deferral / troubleshooting */}
      {ev.tooltip && (
        <Tip text={ev.tooltip}>
          <span style={{
            width:18, height:18, borderRadius:4,
            display:'inline-flex', alignItems:'center', justifyContent:'center',
            background:'#F5F5F5', cursor:'help',
          }}>
            {ev.tooltip === 'Component Change' ? <IcWrenchSm/> :
             ev.tooltip === 'Deferral'          ? <IcGearSm/>   :
             ev.tooltip === 'Troubleshooting'   ? <IcGearSm/>   : null}
          </span>
        </Tip>
      )}

      {/* Log icons */}
      {isLog && (ev.icons||[]).map((ic,i) => (
        <span key={i} style={{
          width:18, height:18, borderRadius:4,
          display:'inline-flex', alignItems:'center', justifyContent:'center',
          background:'#F5F5F5',
        }}>
          {ic === 'wrench' ? <IcWrenchSm/> : <IcGearSm/>}
        </span>
      ))}
    </div>
  );
};

// ── Location badge ────────────────────────────────────────────────────
const LocBadge = ({ loc }) => {
  const route = isRoute(loc);
  return (
    <span style={{
      display:'inline-block', padding:'3px 9px', borderRadius:5,
      fontSize:13, letterSpacing:'-0.01em', fontWeight:500, whiteSpace:'nowrap',
      fontFamily:"'Source Sans 3',sans-serif",
      background: route ? 'var(--dv-accent-bg)' : '#F5F5F5',
      color:       route ? 'var(--dv-accent)'    : '#000',
    }}>{loc}</span>
  );
};

// ── Log page number cell ──────────────────────────────────────────────
const LogPageCell = ({ logPage, type }) => {
  if (!logPage || !logPage.num) return <span style={{ color:'#CCC', fontSize:13 }}>—</span>;
  const { prefix, num } = logPage;
  const isFault = type === 'Fault';
  return (
    <div style={{ display:'flex', alignItems:'center', gap:5, whiteSpace:'nowrap' }}>
      {prefix && isFault && (
        <span style={{
          width:18, height:18, borderRadius:3,
          display:'inline-flex', alignItems:'center', justifyContent:'center',
          background:'#F5F5F5', color:'#555',
          fontSize:10, fontWeight:700, letterSpacing:0,
          fontFamily:"'Source Sans 3',sans-serif",
          flexShrink:0,
        }}>{prefix}</span>
      )}
      <span style={{ fontSize:13, color:'#000', letterSpacing:'-0.005em' }}>{num}</span>
    </div>
  );
};

// ── Corrected system cell (Logs) ──────────────────────────────────────
const CorrSysCell = ({ corrSys, ci }) => {
  if (!corrSys) return null;
  return (
    <div style={{ display:'flex', alignItems:'center', gap:5, whiteSpace:'nowrap' }}>
      <span style={{ fontSize:13, color:'#000', letterSpacing:'-0.005em' }}>
        <span style={{ color:'#888' }}>CS: </span>{corrSys}
        <span style={{ color:'#CCC', margin:'0 4px' }}>·</span>
        <span style={{ color:'#888' }}>CI: </span>{ci}
      </span>
      <button style={{ background:'transparent', border:'none', cursor:'pointer',
        display:'inline-flex', alignItems:'center', justifyContent:'center',
        width:18, height:18, borderRadius:3, padding:0, color:'#AAA' }}>
        <IcPencilSm/>
      </button>
    </div>
  );
};

// ── Report details cell (Reports) ────────────────────────────────────
// Shows the values of the components currently plotted on the Timeline.
const ReportDetailsCell = ({ ev, chartComps = [] }) => {
  const all = window.DVData.components;
  const comps = chartComps
    .map(id => all.find(c => c.id === id))
    .filter(c => c && ev.comps && ev.comps[c.id] != null);
  if (!comps.length) {
    return <span style={{ fontSize:13, color:'#CCC' }}>—</span>;
  }
  return (
    <div style={{ display:'flex', alignItems:'center', gap:8, flexWrap:'wrap' }}>
      {comps.map(c => (
        <span key={c.id} title={`${c.name} · ${c.unit}`}
          style={{ display:'inline-flex', alignItems:'center', gap:4 }}>
          <span style={{ width:7, height:7, borderRadius:'50%', background:c.color, flexShrink:0 }}/>
          <span style={{ fontSize:13, color:'#000', letterSpacing:'-0.005em', fontVariantNumeric:'tabular-nums' }}>
            {ev.comps[c.id]}
          </span>
        </span>
      ))}
    </div>
  );
};

// ── Phase cell (can be multiple for Reports) ─────────────────────────
const PhaseCell = ({ phase, phases, extraCount }) => {
  const list = phases && phases.length > 0 ? phases : (phase ? [phase] : []);
  const show  = list.slice(0, 2);
  const extra = list.length > 2 ? list.length - 2 : 0;
  if (!list.length) return <span style={{ fontSize:13, color:'#CCC' }}>N/A</span>;
  return (
    <div style={{ display:'flex', alignItems:'center', gap:4, flexWrap:'nowrap' }}>
      {show.map((p,i) => (
        <span key={i} style={{ fontSize:13, color:'#000', letterSpacing:'-0.01em' }}>{p}</span>
      ))}
      {extra > 0 && (
        <span style={{
          fontSize:11, fontWeight:700, padding:'1px 5px', borderRadius:99,
          background:'#F0F0F0', color:'#666',
        }}>+{extra}</span>
      )}
    </div>
  );
};

// ── Tags cell ────────────────────────────────────────────────────────
const TAG_CFG = {
  ETOPS:          { c:'#4547FF', bg:'#ECEDFF' },
  CHRONIC:        { c:'#EB0052', bg:'#FEE8EE' },
  OIL:            { c:'#916B4F', bg:'#EAE3DE' },
  RVSM:           { c:'#008A61', bg:'#E0F5EC' },
  'CUSTOM ALERT': { c:'#fff',    bg:'#EB0052' },
  LLM:            { c:'#7747CC', bg:'#F3EBFF' },
};
const TagPill = ({ tag }) => {
  const t = TAG_CFG[tag] || { c:'#555', bg:'#F0F0F0' };
  return (
    <span style={{
      display:'inline-block', fontSize:11, letterSpacing:0, fontWeight:600,
      padding:'2px 6px', borderRadius:4,
      color:t.c, background:t.bg, whiteSpace:'nowrap',
      fontFamily:"'Source Sans 3',sans-serif",
    }}>{tag}</span>
  );
};
const TagsCell = ({ tags=[] }) => {
  const show  = tags.slice(0, 2);
  const extra = tags.length > 2 ? tags.length - 2 : 0;
  return (
    <div style={{ display:'flex', alignItems:'center', gap:4 }}>
      {show.map((t,i) => <TagPill key={i} tag={t}/>)}
      {extra > 0 && (
        <span style={{
          fontSize:11, fontWeight:700, padding:'1px 5px', borderRadius:99,
          background:'#F0F0F0', color:'#666', cursor:'default',
          fontFamily:"'Source Sans 3',sans-serif",
        }}>+{extra}</span>
      )}
    </div>
  );
};

// ── Status badge ─────────────────────────────────────────────────────
const StatusBadge = ({ status }) => {
  if (!status) return null;
  const cfg = {
    Open:   { c:'#000',    bg:'transparent', b:'#D0D0D0' },
    Closed: { c:'#008A61', bg:'transparent', b:'#7DC8A8' },
  };
  const s = cfg[status] || cfg.Open;
  return (
    <span style={{
      display:'inline-block', fontSize:13, letterSpacing:'-0.01em', fontWeight:500,
      padding:'3px 10px', borderRadius:5, whiteSpace:'nowrap',
      color:s.c, background:s.bg, border:`1px solid ${s.b}`,
      fontFamily:"'Source Sans 3',sans-serif",
    }}>{status}</span>
  );
};

// ── Table cell / header styles ────────────────────────────────────────
const TH = {
  fontSize:12, color:'#999', fontWeight:500,
  fontFamily:"'Source Sans 3',sans-serif",
  letterSpacing:'-0.01em', padding:'9px 12px',
  background:'#fff', borderBottom:'1px solid #EFEFEF',
  textAlign:'left', whiteSpace:'nowrap', userSelect:'none',
};
const TD = {
  padding:'11px 12px', fontSize:13, color:'#000',
  fontFamily:"'Source Sans 3',sans-serif",
  verticalAlign:'middle', background:'#fff', whiteSpace:'nowrap',
};
const TD_NAR = { ...TD, padding:'8px 6px', textAlign:'center', width:30 };

// ── Icon helpers ──────────────────────────────────────────────────────
const IBtn = ({ onClick, title, children }) => {
  const [h, setH] = useState(false);
  return (
    <button onClick={onClick} title={title}
      onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      style={{ width:26, height:26, border:'none', cursor:'pointer', borderRadius:4,
        background:h?'#F5F5F5':'transparent',
        display:'inline-flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
      {children}
    </button>
  );
};

// ── Main table ────────────────────────────────────────────────────────
const DVEventsTable = ({ events, allTotal=875, chartComps=[] }) => {
  const [sortDir, setSortDir]   = useState('desc');
  const [search,  setSearch]    = useState('');
  const [starred, setStarred]   = useState(new Set([1,2,3]));
  const [page,    setPage]      = useState(1);
  const PER_PAGE = 100;

  const toggleStar = id => setStarred(prev => {
    const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n;
  });

  const visible = [...events]
    .filter(ev => {
      if (!search) return true;
      const q = search.toLowerCase();
      return [ev.desc, ev.aircraft, ev.loc, ev.sys, ev.type, (ev.corrAction||'')]
        .some(v => v && v.toLowerCase().includes(q));
    })
    .sort((a,b) => {
      const c = String(a.dt).localeCompare(String(b.dt));
      return sortDir === 'asc' ? c : -c;
    });

  const total = allTotal;
  const pages = Math.ceil(total / PER_PAGE);
  const from  = (page-1)*PER_PAGE + 1;
  const to    = Math.min(page*PER_PAGE, total);

  return (
    <div style={{ background:'#fff', borderRadius:8, border:'1px solid #EAEAEA', overflow:'hidden' }}>

      {/* Table header toolbar */}
      <div style={{
        display:'flex', alignItems:'center', gap:12,
        padding:'12px 18px 10px', borderBottom:'1px solid #F5F5F5',
      }}>
        {/* Left: label + count + search */}
        <div style={{ display:'flex', alignItems:'center', gap:12, flex:1 }}>
          <span style={{
            fontFamily:"'Source Sans 3',sans-serif", fontWeight:600, fontSize:15,
            color:'#000', letterSpacing:'-0.01em', whiteSpace:'nowrap',
          }}>Events</span>
          <span style={{ fontSize:13, color:'#AAA', letterSpacing:'-0.01em', whiteSpace:'nowrap' }}>
            {from}–{to} of {total.toLocaleString()}
          </span>
          {/* Search */}
          <div style={{
            display:'flex', alignItems:'center', gap:6,
            height:30, padding:'0 10px', borderRadius:6,
            border:'1px solid #EBEBEB', background:'#FAFAFA',
            minWidth:200, maxWidth:280,
          }}>
            <IcSearch s={13} c="#BBBBBB"/>
            <input
              type="text" value={search} onChange={e=>setSearch(e.target.value)}
              placeholder="Search by any keyword..."
              style={{
                flex:1, border:'none', outline:'none', background:'transparent',
                fontSize:13, color:'#000', letterSpacing:'-0.01em',
                fontFamily:"'Source Sans 3',sans-serif",
              }}/>
            {search && (
              <button onClick={()=>setSearch('')} style={{ border:'none', background:'transparent', cursor:'pointer', padding:0, display:'flex' }}>
                <IcX s={11} c="#AAA"/>
              </button>
            )}
          </div>
        </div>

        {/* Right: toolbar icons + pagination */}
        <div style={{ display:'flex', alignItems:'center', gap:2 }}>
          <IBtn title="Row density"><IcRows s={14} c="#666"/></IBtn>
          <IBtn title="Sort"><IcSliders s={14} c="#666"/></IBtn>
          <IBtn title="Download"><IcDownload s={14} c="#666"/></IBtn>
          <div style={{ width:1, height:16, background:'#EBEBEB', margin:'0 6px' }}/>
          <IBtn onClick={()=>setPage(p=>Math.max(1,p-1))}><IcChevLeft s={13} c="#666"/></IBtn>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:4,
            height:26, padding:'0 8px', borderRadius:5, border:'1px solid #EBEBEB',
            fontSize:13, color:'#000', letterSpacing:'-0.01em', userSelect:'none',
            fontFamily:"'Source Sans 3',sans-serif",
          }}>
            Page {page}
          </div>
          <span style={{ fontSize:13, color:'#AAA', padding:'0 4px', letterSpacing:'-0.01em' }}>of {pages}</span>
          <IBtn onClick={()=>setPage(p=>Math.min(pages,p+1))}><IcChevRight s={13} c="#666"/></IBtn>
        </div>
      </div>

      {/* Scrollable table */}
      <div style={{ overflowX:'auto', overflowY:'auto', maxHeight:'calc(100vh - 260px)' }}>
        <table style={{ borderCollapse:'collapse', width:'100%', tableLayout:'fixed', minWidth:1700 }}>
          <colgroup>
            <col style={{width:32}}/><col style={{width:32}}/><col style={{width:32}}/>
            <col style={{width:155}}/><col style={{width:165}}/><col style={{width:175}}/>
            <col style={{width:130}}/><col style={{width:220}}/><col style={{width:155}}/>
            <col style={{width:90}}/><col style={{width:175}}/><col style={{width:165}}/>
            <col style={{width:145}}/><col style={{width:65}}/><col style={{width:130}}/><col/>
          </colgroup>
          <thead>
            <tr>
              <th style={TH}/>
              <th style={TH}/>
              <th style={TH}/>
              <th style={TH}>
                <span onClick={()=>setSortDir(d=>d==='asc'?'desc':'asc')}
                  style={{ display:'inline-flex', alignItems:'center', gap:5, cursor:'pointer' }}>
                  Date/Time
                  <SortArrows dir={sortDir}/>
                </span>
              </th>
              <th style={TH}>Aircraft</th>
              <th style={TH}>Type</th>
              <th style={TH}>Location</th>
              <th style={TH}>Defect Description / Fault Name / Report Na…</th>
              <th style={TH}>Corrective Action</th>
              <th style={TH}>Status</th>
              <th style={TH}>Report Details</th>
              <th style={TH}>Corrected System</th>
              <th style={TH}>Log Page Number / Messag…</th>
              <th style={TH}>System</th>
              <th style={TH}>Phase</th>
              <th style={TH}>Tags</th>
            </tr>
          </thead>
          <tbody>
            {visible.map(ev => {
              const isLog    = ev.type === 'Log';
              const isReport = ev.type === 'Report';
              return (
                <TableRow key={ev.id} ev={ev} isLog={isLog} isReport={isReport}
                  starred={starred.has(ev.id)} onStar={()=>toggleStar(ev.id)} chartComps={chartComps}/>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ── Row ───────────────────────────────────────────────────────────────
const TableRow = React.memo(({ ev, isLog, isReport, starred, onStar, chartComps }) => {
  const [hov, setHov] = useState(false);
  const bg = hov ? '#FAFAFA' : '#fff';
  const td = { ...TD, background:bg };
  const tdn = { ...TD_NAR, background:bg };

  return (
    <tr onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{ borderTop:'1px solid #F5F5F5', cursor:'default' }}>

      {/* Expand */}
      <td style={tdn}>
        <IBtn><IcChevDown s={12} c="#CCC"/></IBtn>
      </td>

      {/* Star */}
      <td style={tdn}>
        <IBtn onClick={onStar}>
          {starred ? <IcStarFill s={14}/> : <IcStarOutline s={14}/>}
        </IBtn>
      </td>

      {/* Doc */}
      <td style={tdn}>
        <IBtn><IcDoc s={13} c="#CCC"/></IBtn>
      </td>

      {/* Date */}
      <td style={td}>
        <span style={{ fontSize:13, color:'#000', letterSpacing:'-0.01em', fontVariantNumeric:'tabular-nums' }}>
          {fmtDate(ev.dt)}
        </span>
      </td>

      {/* Aircraft: tail · fleet · variant */}
      <td style={td}>
        <span style={{ display:'inline-flex', alignItems:'baseline', gap:6 }}>
          <span style={{ fontSize:13, fontWeight:600, color:'#000', letterSpacing:'-0.01em',
            fontFamily:"'Source Sans 3',sans-serif" }}>{ev.aircraft}</span>
          <span style={{ fontSize:13, color:'#888', letterSpacing:'-0.01em' }}>
            {ev.fleet} · {ev.sub}
          </span>
        </span>
      </td>

      {/* Type */}
      <td style={td}><TypeCell ev={ev}/></td>

      {/* Location */}
      <td style={td}><LocBadge loc={ev.loc}/></td>

      {/* Description */}
      <td style={{ ...td, overflow:'hidden', textOverflow:'ellipsis' }}>
        <span style={{
          fontSize:13, color:'#000', letterSpacing:0,
          textTransform:'uppercase', fontWeight:500, display:'block',
          overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
        }} title={ev.desc}>{ev.desc}</span>
      </td>

      {/* Corrective Action (Logs only) */}
      <td style={{ ...td, overflow:'hidden', textOverflow:'ellipsis' }}>
        {isLog && ev.corrAction ? (
          <span style={{ fontSize:13, color:'#000', letterSpacing:'-0.01em', display:'block',
            overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
            {ev.corrAction}
          </span>
        ) : null}
      </td>

      {/* Status (Logs only) */}
      <td style={td}>
        {isLog && ev.status ? <StatusBadge status={ev.status}/> : null}
      </td>

      {/* Report Details (Reports only) */}
      <td style={td}>
        {isReport ? <ReportDetailsCell ev={ev} chartComps={chartComps}/> : null}
      </td>

      {/* Corrected System (Logs only) */}
      <td style={td}>
        {isLog ? <CorrSysCell corrSys={ev.corrSys} ci={ev.ci}/> : null}
      </td>

      {/* Log Page Number */}
      <td style={td}><LogPageCell logPage={ev.logPage} type={ev.type}/></td>

      {/* System */}
      <td style={td}>
        <span style={{ fontSize:13, color:'#000', letterSpacing:'-0.005em' }}>{ev.sys||''}</span>
      </td>

      {/* Phase */}
      <td style={td}>
        <PhaseCell phase={ev.phase} phases={ev.phases}/>
      </td>

      {/* Tags */}
      <td style={{ ...td, paddingRight:18 }}>
        <TagsCell tags={ev.tags||[]}/>
      </td>
    </tr>
  );
});

// ── Sort arrows ───────────────────────────────────────────────────────
const SortArrows = ({ dir }) => (
  <svg width="9" height="12" viewBox="0 0 9 12" fill="none">
    <path d="M4.5 1L7 4.5H2L4.5 1Z" fill={dir==='asc'?'#000':'#CCC'}/>
    <path d="M4.5 11L2 7.5H7L4.5 11Z" fill={dir==='desc'?'#000':'#CCC'}/>
  </svg>
);

Object.assign(window, { DVEventsTable });
