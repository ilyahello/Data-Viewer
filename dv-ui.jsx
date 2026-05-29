// dv-ui.jsx — Icons + base UI primitives
var { useState, useRef, useEffect } = React;

// ── SVG Icons ──────────────────────────────────────────────────────
const IcGrid = ({s=20,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
    <rect x="3" y="3" width="6" height="6" rx="1.2" stroke={c} strokeWidth="1.5"/>
    <rect x="11" y="3" width="6" height="6" rx="1.2" stroke={c} strokeWidth="1.5"/>
    <rect x="3" y="11" width="6" height="6" rx="1.2" stroke={c} strokeWidth="1.5"/>
    <rect x="11" y="11" width="6" height="6" rx="1.2" stroke={c} strokeWidth="1.5"/>
  </svg>
);
const IcLayers = ({s=20,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
    <path d="M10 2L2.5 6L10 10L17.5 6L10 2Z" stroke={c} strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M2.5 10L10 14L17.5 10" stroke={c} strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M2.5 14L10 18L17.5 14" stroke={c} strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);
const IcHeart = ({s=20,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
    <path d="M10 16.5C10 16.5 3 12.5 3 7.5C3 5 5 3 7.5 3C9 3 10 4 10 4C10 4 11 3 12.5 3C15 3 17 5 17 7.5C17 12.5 10 16.5 10 16.5Z" stroke={c} strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);
const IcLogList = ({s=20,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
    <line x1="6" y1="5" x2="16" y2="5"  stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="6" y1="10" x2="16" y2="10" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="6" y1="15" x2="16" y2="15" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="3.5" cy="5" r="1"  fill={c}/>
    <circle cx="3.5" cy="10" r="1" fill={c}/>
    <circle cx="3.5" cy="15" r="1" fill={c}/>
  </svg>
);
const IcClipboard = ({s=20,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
    <rect x="4.5" y="4" width="11" height="13.5" rx="1.5" stroke={c} strokeWidth="1.5"/>
    <rect x="7" y="2.5" width="6" height="3" rx="0.6" stroke={c} strokeWidth="1.5"/>
    <line x1="7.5" y1="9"  x2="12.5" y2="9"  stroke={c} strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="7.5" y1="12" x2="12.5" y2="12" stroke={c} strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);
const IcDatabase = ({s=20,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
    <ellipse cx="10" cy="5" rx="6" ry="2.2" stroke={c} strokeWidth="1.5"/>
    <path d="M4 5v4c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2V5" stroke={c} strokeWidth="1.5"/>
    <path d="M4 9v4c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2V9" stroke={c} strokeWidth="1.5"/>
    <path d="M4 13v2c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2v-2" stroke={c} strokeWidth="1.5"/>
  </svg>
);
const IcWarnTri = ({s=20,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
    <path d="M10 3L17.5 16.5H2.5L10 3Z" stroke={c} strokeWidth="1.5" strokeLinejoin="round"/>
    <line x1="10" y1="8" x2="10" y2="12" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="10" cy="14.5" r="0.8" fill={c}/>
  </svg>
);
const IcPlane = ({s=20,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
    <path d="M10 2.5L11.5 9L18 11L11.5 12L10 18L8.5 12L2 11L8.5 9L10 2.5Z" stroke={c} strokeWidth="1.4" strokeLinejoin="round"/>
  </svg>
);
const IcEngine = ({s=20,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="6.5" stroke={c} strokeWidth="1.5"/>
    <circle cx="10" cy="10" r="1.5" fill={c}/>
    <path d="M10 3.5v3M10 13.5v3M3.5 10h3M13.5 10h3M5.5 5.5l2 2M12.5 12.5l2 2M5.5 14.5l2-2M12.5 7.5l2-2" stroke={c} strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const IcWrench = ({s=20,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
    <path d="M13 2.5a4 4 0 1 0 4 4 4 4 0 0 0-1 .25L13.5 4.25l-1.5 1.5L14 8.25a4 4 0 0 0-1-5.75ZM12.5 7.5L4 16l2 2 8.5-8.5" stroke={c} strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round"/>
  </svg>
);
const IcBars = ({s=20,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
    <rect x="3" y="11" width="3" height="6"  rx="0.5" stroke={c} strokeWidth="1.4"/>
    <rect x="8.5" y="7" width="3" height="10" rx="0.5" stroke={c} strokeWidth="1.4"/>
    <rect x="14" y="4" width="3" height="13" rx="0.5" stroke={c} strokeWidth="1.4"/>
  </svg>
);
const IcHand = ({s=20,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
    <path d="M8 4v6M11 4v6M14 6v4M8 10v5a3 3 0 0 0 6 0v-5" stroke={c} strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const IcAOG = ({s=20,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
    <path d="M11 2.5L12 8L17.5 9L13 10L14 16L10 12L6 16L7 10L2.5 9L8 8L11 2.5Z" stroke={c} strokeWidth="1.3" strokeLinejoin="round"/>
    <circle cx="15" cy="14" r="2.2" fill={c}/>
  </svg>
);
const IcPanelCollapse = ({s=20,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
    <rect x="2.5" y="3.5" width="15" height="13" rx="1.5" stroke={c} strokeWidth="1.5"/>
    <line x1="8" y1="3.5" x2="8" y2="16.5" stroke={c} strokeWidth="1.5"/>
    <path d="M14 8L11.5 10L14 12" stroke={c} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IcLogo = ({s=24,c='#000'}) => (
  // Stylised airline wing / chevron
  <svg width={s*1.2} height={s} viewBox="0 0 30 24" fill="none">
    <path d="M2 18 C 6 14, 11 11, 17 9 L 28 6 L 17 12 C 11 14, 6 16, 2 18 Z" fill={c}/>
    <path d="M5 21 C 9 18, 14 15, 20 13 L 26 11 L 20 15 C 14 16, 9 19, 5 21 Z" fill={c} opacity="0.55"/>
  </svg>
);
const IcChevDown = ({s=16,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
    <path d="M4 6l4 4 4-4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IcChevRight = ({s=16,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
    <path d="M6 4l4 4-4 4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IcChevLeft = ({s=16,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
    <path d="M10 4l-4 4 4 4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IcX = ({s=16,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
    <path d="M4 4l8 8M12 4l-8 8" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const IcPlus = ({s=16,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
    <path d="M8 3v10M3 8h10" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const IcSearch = ({s=16,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
    <circle cx="7" cy="7" r="4.5" stroke={c} strokeWidth="1.4"/>
    <path d="M10.5 10.5L14 14" stroke={c} strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const IcFilterLines = ({s=16,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
    <line x1="2" y1="5"  x2="14" y2="5"  stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="4" y1="8"  x2="12" y2="8"  stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="6" y1="11" x2="10" y2="11" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IcDots = ({s=16,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
    <circle cx="4" cy="8" r="1.3" fill={c}/>
    <circle cx="8" cy="8" r="1.3" fill={c}/>
    <circle cx="12" cy="8" r="1.3" fill={c}/>
  </svg>
);
const IcDotsVert = ({s=16,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="3.5" r="1.3" fill={c}/>
    <circle cx="8" cy="8" r="1.3" fill={c}/>
    <circle cx="8" cy="12.5" r="1.3" fill={c}/>
  </svg>
);
const IcBell = ({s=20,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
    <path d="M10 2.5a5 5 0 0 0-5 5V12l-1.4 1.7a.5.5 0 0 0 .4.8h12a.5.5 0 0 0 .4-.8L15 12V7.5a5 5 0 0 0-5-5Z" stroke={c} strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M8 16.5a2 2 0 0 0 4 0" stroke={c} strokeWidth="1.5"/>
  </svg>
);
const IcCaretUp = ({s=14,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 14 14" fill="none">
    <path d="M3 9l4-4 4 4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IcCaretDown = ({s=14,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 14 14" fill="none">
    <path d="M3 5l4 4 4-4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IcTrendUp = ({s=14,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 14 14" fill="none">
    <path d="M3 9.5L6 6.5L8 8L11 4.5" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.5 4.5H11.5V7.5" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IcTrendDown = ({s=14,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 14 14" fill="none">
    <path d="M3 4.5L6 7.5L8 6L11 9.5" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.5 9.5H11.5V6.5" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IcSortUpDown = ({s=12,c='#BBBBBB'}) => (
  <svg width={s} height={s} viewBox="0 0 12 12" fill="none">
    <path d="M6 2L8.5 5H3.5L6 2Z" fill={c}/>
    <path d="M6 10L3.5 7H8.5L6 10Z" fill={c}/>
  </svg>
);
const IcStarFill = ({s=15,c='#FFB81F'}) => (
  <svg width={s} height={s} viewBox="0 0 15 15" fill="none">
    <path d="M7.5 1.5L9.4 5.4L13.5 6L10.5 8.9L11.3 13L7.5 11L3.7 13L4.5 8.9L1.5 6L5.6 5.4L7.5 1.5Z" fill={c}/>
  </svg>
);
const IcStarOutline = ({s=15,c='#CCCCCC'}) => (
  <svg width={s} height={s} viewBox="0 0 15 15" fill="none">
    <path d="M7.5 1.5L9.4 5.4L13.5 6L10.5 8.9L11.3 13L7.5 11L3.7 13L4.5 8.9L1.5 6L5.6 5.4L7.5 1.5Z" stroke={c} strokeWidth="1.2" strokeLinejoin="round"/>
  </svg>
);
const IcDoc = ({s=15,c='#BBBBBB'}) => (
  <svg width={s} height={s} viewBox="0 0 15 15" fill="none">
    <path d="M4 2h5l3 3v8H4V2Z" stroke={c} strokeWidth="1.2"/>
    <path d="M9 2v3h3" stroke={c} strokeWidth="1.2"/>
  </svg>
);
const IcExtLink = ({s=14,c='#888'}) => (
  <svg width={s} height={s} viewBox="0 0 14 14" fill="none">
    <path d="M5 2H2v10h10V9" stroke={c} strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M8 2h4v4" stroke={c} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 7l5-5" stroke={c} strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);
const IcDownload = ({s=14,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 14 14" fill="none">
    <path d="M7 2v7M4 6l3 3 3-3" stroke={c} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.5 11h9" stroke={c} strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);
const IcSliders = ({s=14,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 14 14" fill="none">
    <line x1="2" y1="4"  x2="12" y2="4"  stroke={c} strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="2" y1="10" x2="12" y2="10" stroke={c} strokeWidth="1.3" strokeLinecap="round"/>
    <circle cx="9" cy="4" r="1.4" fill="#fff" stroke={c} strokeWidth="1.3"/>
    <circle cx="5" cy="10" r="1.4" fill="#fff" stroke={c} strokeWidth="1.3"/>
  </svg>
);
const IcRows = ({s=14,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 14 14" fill="none">
    <rect x="2" y="3" width="10" height="2.2" rx="0.6" stroke={c} strokeWidth="1.2"/>
    <rect x="2" y="8.8" width="10" height="2.2" rx="0.6" stroke={c} strokeWidth="1.2"/>
  </svg>
);
const IcCollapseChart = ({s=16,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
    <path d="M3 7L7 7L7 3M13 9L9 9L9 13" stroke={c} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IcCog = ({s=14,c='currentColor'}) => (
  <svg width={s} height={s} viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="2" stroke={c} strokeWidth="1.2"/>
    <path d="M7 1.5v1.8M7 10.7v1.8M1.5 7h1.8M10.7 7h1.8M3 3l1.3 1.3M9.7 9.7L11 11M11 3L9.7 4.3M4.3 9.7L3 11" stroke={c} strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// ── Toggle switch ──────────────────────────────────────────────────
const DVSwitch = ({ on, onClick, color }) => (
  <button onClick={onClick} style={{
    width: 32, height: 18, borderRadius: 999, border: 'none', cursor: 'pointer',
    background: on ? (color || 'var(--dv-accent)') : '#E6E6E6',
    position: 'relative', padding: 0, transition: 'background 0.15s ease', flexShrink: 0,
  }}>
    <span style={{
      position:'absolute', top:2, left: on ? 16 : 2,
      width:14, height:14, borderRadius:'50%', background:'#fff',
      transition:'left 0.15s ease', boxShadow:'0 1px 2px rgba(0,0,0,0.15)',
    }}/>
  </button>
);

// ── Button ─────────────────────────────────────────────────────────
const DVBtn = ({ variant='secondary', size='m', children, onClick, icon, active, disabled, style={} }) => {
  const [hov, setHov] = useState(false);
  const base = {
    display:'inline-flex', alignItems:'center', gap:6, cursor: disabled ? 'default' : 'pointer',
    borderRadius:4, fontFamily:'inherit', letterSpacing:'-0.01em',
    outline:'none', whiteSpace:'nowrap', flexShrink:0,
    opacity: disabled ? 0.5 : 1, transition:'background 0.1s, border-color 0.1s',
  };
  const variants = {
    primary:   { background: hov ? 'var(--dv-accent-dark)' : 'var(--dv-accent)', color:'#fff', border:'1px solid var(--dv-accent)',
                 fontFamily:"'Source Sans 3', sans-serif", fontWeight:700 },
    secondary: { background: active ? 'var(--dv-accent-bg)' : hov ? '#F5F5FF' : '#fff',
                 color: active ? 'var(--dv-accent)' : '#000', border: active ? '1px solid var(--dv-accent-bg)' : '1px solid #E6E6E6' },
    ghost:     { background: active ? '#F2F2F2' : hov ? '#F7F7F7' : 'transparent',
                 color:'#000', border:'1px solid transparent' },
    inline:    { background:'transparent', color: active ? '#4547FF' : '#555555',
                 border:'1px solid transparent', padding:0 },
    danger:    { background: hov ? '#c9003d' : '#EB0052', color:'#fff', border:'1px solid #EB0052' },
  };
  const sizes = {
    l:  { height:40, padding:'0 20px', fontSize:14 },
    m:  { height:32, padding:'0 12px', fontSize:14 },
    s:  { height:26, padding:'0 8px',  fontSize:12 },
    xs: { height:22, padding:'0 6px',  fontSize:11 },
  };
  const v = variants[variant] || variants.secondary;
  const sz = sizes[size] || sizes.m;
  return (
    <button onClick={disabled ? null : onClick} disabled={disabled}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{...base,...v,...sz,...style}}>
      {icon && icon}{children}
    </button>
  );
};

// ── Chip with optional inline value pill ────────────────────────────
const DVChip = ({ label, value, onClick, onClear }) => {
  const [hov, setHov] = useState(false);
  const selected = !!value;
  return (
    <button onClick={onClick} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        display:'inline-flex', alignItems:'center', gap:6, height:32, borderRadius:6,
        cursor:'pointer', border:'1px solid #E6E6E6',
        padding: selected ? '3px 4px 3px 10px' : '0 12px',
        background: hov ? '#FAFAFA' : '#fff',
        fontFamily:'inherit', letterSpacing:'-0.01em',
        flexShrink:0,
      }}>
      <span style={{ color:'#000', fontSize:14, whiteSpace:'nowrap' }}>{label}</span>
      {selected && (
        <span style={{
          display:'inline-flex', alignItems:'center', gap:3,
          height:24, padding:'0 8px', borderRadius:4,
          background:'var(--dv-accent-bg)', color:'var(--dv-accent)',
          fontSize:13, fontWeight:500,
        }}>
          {value}
          {onClear && (
            <span onClick={e=>{e.stopPropagation(); onClear();}}
              style={{display:'flex', cursor:'pointer', marginLeft:2}}>
              <IcX s={11} c="var(--dv-accent)"/>
            </span>
          )}
        </span>
      )}
    </button>
  );
};

// ── Status / Type / Tag ────────────────────────────────────────────
const DVStatus = ({ status }) => {
  const cfg = {
    Open:     { c:'#000',    bg:'#F5F5F5', b:'#E6E6E6' },
    Worked:   { c:'#008A61', bg:'#E0F5EC', b:'#7DCFB0' },
    Hold:     { c:'#916B4F', bg:'#EAE3DE', b:'#CEB9A8' },
    Closed:   { c:'#AAA',    bg:'transparent', b:'transparent' },
    Deferred: { c:'#916B4F', bg:'#EAE3DE', b:'#CEB9A8' },
  };
  const s = cfg[status] || cfg.Closed;
  return (
    <span style={{
      display:'inline-block', fontSize:12, letterSpacing:'-0.01em',
      padding:'2px 8px', borderRadius:4, whiteSpace:'nowrap',
      color:s.c, background:s.bg, border:`1px solid ${s.b}`,
    }}>{status}</span>
  );
};

// Solid colour dots used in type labels & cards
const TYPE_DOTS = {
  Fault:     '#7A5440', // brown
  Log:       '#2BB3E5', // cyan
  Report:    '#FF8554', // orange
  Component: '#008A61', // green
};

const DVTypeLabel = ({ type, sub, subColor }) => (
  <span style={{ display:'inline-flex', alignItems:'center', gap:6, whiteSpace:'nowrap' }}>
    <span style={{ width:7, height:7, borderRadius:'50%', background: TYPE_DOTS[type] || '#888' }}/>
    <span style={{ fontSize:13, color:'#000', letterSpacing:'-0.01em' }}>{type}</span>
    {sub && (
      <span style={{
        fontSize:11, fontWeight:700, color: subColor || '#888', letterSpacing:0,
        textTransform:'uppercase', marginLeft:1,
      }}>{sub}</span>
    )}
  </span>
);

const DVTag = ({ tag }) => {
  const cfg = {
    ETOPS:          { c:'#4547FF', bg:'#ECEDFF' },
    CHRONIC:        { c:'#EB0052', bg:'#FEE8EE' },
    OIL:            { c:'#916B4F', bg:'#EAE3DE' },
    RVSM:           { c:'#008A61', bg:'#E0F5EC' },
    'CUSTOM ALERT': { c:'#B06800', bg:'#FFF3D9' },
    LLM:            { c:'#7747CC', bg:'#F3EBFF' },
  };
  const t = cfg[tag] || { c:'#555', bg:'#F2F2F2' };
  return (
    <span style={{
      display:'inline-block', fontSize:11, letterSpacing:'-0.01em', fontWeight:500,
      padding:'2px 6px', borderRadius:3, color:t.c, background:t.bg, whiteSpace:'nowrap',
    }}>{tag}</span>
  );
};

// ── Simple dropdown ─────────────────────────────────────────────────
const DVDropdown = ({ items, onSelect, selected=[], multi=false }) => (
  <div style={{
    position:'absolute', top:'calc(100% + 4px)', left:0, zIndex:400,
    background:'#fff', border:'1px solid #E6E6E6', borderRadius:4,
    boxShadow:'0 4px 20px rgba(0,0,0,0.12)', minWidth:160,
    maxHeight:240, overflowY:'auto', padding:'4px 0',
  }}>
    {items.map(item => {
      const sel = selected.includes(item);
      return (
        <div key={item} onClick={()=>onSelect(item)}
          style={{
            padding:'7px 12px', cursor:'pointer', fontSize:14, letterSpacing:'-0.01em',
            color: sel ? 'var(--dv-accent)' : '#000', background: sel ? 'var(--dv-accent-bg)' : 'transparent',
            display:'flex', alignItems:'center', gap:8,
          }}>
          {multi && (
            <div style={{
              width:13, height:13, borderRadius:3, flexShrink:0,
              border:`1.5px solid ${sel ? '#4547FF' : '#CCC'}`,
              background: sel ? '#4547FF' : 'transparent',
              display:'flex', alignItems:'center', justifyContent:'center',
            }}>
              {sel && <IcX s={9} c="#fff"/>}
            </div>
          )}
          {item}
        </div>
      );
    })}
  </div>
);

// ── Sidebar nav ─────────────────────────────────────────────────────
const NAV_ITEMS = [
  { id:'dashboard',         label:'Dashboard',         Icon: IcGrid },
  { id:'active-cases',      label:'Active Cases',      Icon: IcLayers, badge:'5000+' },
  { id:'fleet-health',      label:'Fleet Health',      Icon: IcHeart },
  { id:'log-viewer',        label:'Log Viewer',        Icon: IcLogList },
  { id:'detail-viewer',     label:'Detail Viewer',     Icon: IcClipboard },
  { id:'data-viewer',       label:'Data Viewer',       Icon: IcDatabase },
  { id:'fault-profiles',    label:'Fault Profiles',    Icon: IcWarnTri,  dim:true },
  { id:'aircraft-profiles', label:'Aircraft Profiles', Icon: IcPlane,    dim:true },
  { id:'engine-profiles',   label:'Engine Profiles',   Icon: IcEngine },
  { id:'part-profiles',     label:'Part Profiles',     Icon: IcWrench },
  { id:'metrics',           label:'Metrics',           Icon: IcBars,     dim:true },
];

const DVSidebar = ({ activePage='data-viewer', collapsed=false }) => {
  const [spotlight, setSpotlight] = useState(false);
  return (
    <div style={{
      width: collapsed ? 60 : 240, background:'#fff', borderRight:'1px solid #EEEEEE',
      display:'flex', flexDirection:'column', flexShrink:0, height:'100%', overflow:'hidden',
      transition:'width 0.15s ease',
    }}>
      <div style={{ flex:1, padding:'14px 12px', overflowY:'auto' }}>
        {NAV_ITEMS.map(({ id, label, Icon, badge, dim }) => {
          const active = id === activePage;
          const baseColor = dim ? '#C8C8C8' : active ? '#000' : '#666';
          return (
            <div key={id} style={{
              display:'flex', alignItems:'center', gap:12, height:40, padding:'0 12px',
              borderRadius:6, cursor:'pointer', marginBottom:2,
              background: active ? '#F5F5F5' : 'transparent',
              color: baseColor,
            }}>
              <Icon s={18} c={baseColor}/>
              <span style={{
                fontFamily:"'Source Sans 3', sans-serif",
                fontWeight: active ? 600 : 500,
                fontSize: 14, letterSpacing:'-0.005em',
                color: baseColor, flex:1,
              }}>{label}</span>
              {badge && (
                <span style={{
                  fontSize:10, fontWeight:700,
                  padding:'2px 7px', borderRadius:99,
                  background:'#EB0052', color:'#fff',
                  fontFamily:"'Source Sans 3', sans-serif",
                  letterSpacing:0,
                }}>{badge}</span>
              )}
            </div>
          );
        })}

        {/* Divider */}
        <div style={{ height:1, background:'#F2F2F2', margin:'12px 8px' }}/>

        {/* Spotlight with toggle */}
        <div style={{
          display:'flex', alignItems:'center', gap:12, height:40, padding:'0 12px',
          borderRadius:6, cursor:'pointer', marginBottom:2, color:'#666',
        }}>
          <IcHand s={18} c="#666"/>
          <span style={{
            fontFamily:"'Source Sans 3', sans-serif", fontWeight:500, fontSize:14,
            color:'#666', flex:1, letterSpacing:'-0.005em',
          }}>Spotlight</span>
          <DVSwitch on={spotlight} onClick={() => setSpotlight(s => !s)}/>
        </div>

        {/* AOG */}
        <div style={{
          display:'flex', alignItems:'center', gap:12, height:40, padding:'0 12px',
          borderRadius:6, cursor:'pointer', color:'#666',
        }}>
          <IcAOG s={18} c="#666"/>
          <span style={{
            fontFamily:"'Source Sans 3', sans-serif", fontWeight:500, fontSize:14,
            color:'#666', letterSpacing:'-0.005em',
          }}>AOG</span>
        </div>
      </div>

      {/* Add Case button */}
      <div style={{ padding:'12px 12px 16px' }}>
        <button style={{
          width:'100%', height:44, borderRadius:8, border:'none',
          background:'var(--dv-accent)', color:'#fff',
          fontFamily:"'Source Sans 3', sans-serif", fontWeight:600, fontSize:14,
          display:'inline-flex', alignItems:'center', justifyContent:'center', gap:8,
          cursor:'pointer', letterSpacing:'-0.005em',
          boxShadow:'0 1px 2px rgba(69,71,255,0.2)',
        }}>
          <span style={{
            width:18, height:18, borderRadius:'50%',
            background:'rgba(255,255,255,0.2)',
            display:'inline-flex', alignItems:'center', justifyContent:'center',
          }}>
            <IcPlus s={12} c="#fff"/>
          </span>
          Add Case
        </button>
      </div>
    </div>
  );
};

// ── App header ──────────────────────────────────────────────────────
const DVHeader = ({ onToggleSidebar }) => (
  <div style={{
    height:56, background:'#fff', borderBottom:'1px solid #EEEEEE',
    display:'flex', alignItems:'center', padding:'0 20px', gap:16, flexShrink:0,
  }}>
    <div style={{ display:'flex', alignItems:'center', gap:14 }}>
      <button onClick={onToggleSidebar} style={{
        width:32, height:32, border:'none', background:'transparent', cursor:'pointer',
        display:'flex', alignItems:'center', justifyContent:'center', borderRadius:6,
      }}>
        <IcPanelCollapse s={20} c="#000"/>
      </button>
      <span style={{
        fontFamily:"'Source Sans 3', sans-serif",
        fontWeight:600, fontSize:17, letterSpacing:'-0.01em', color:'#000',
        whiteSpace:'nowrap',
      }}>Data Viewer</span>
    </div>

    <div style={{ flex:1 }}/>

    <div style={{ display:'flex', alignItems:'center', gap:14 }}>
      {/* Bell with red dot */}
      <button style={{
        width:36, height:36, border:'none', background:'transparent', cursor:'pointer',
        display:'flex', alignItems:'center', justifyContent:'center', borderRadius:6,
        position:'relative',
      }}>
        <IcBell s={20} c="#000"/>
        <span style={{
          position:'absolute', top:7, right:8, width:8, height:8,
          borderRadius:'50%', background:'#EB0052', border:'1.5px solid #fff',
        }}/>
      </button>

      {/* Avatar with status */}
      <div style={{ position:'relative' }}>
        <div style={{
          width:32, height:32, borderRadius:'50%', background:'#1F2937', color:'#fff',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontSize:12, fontWeight:600, fontFamily:"'Source Sans 3', sans-serif",
          cursor:'pointer', letterSpacing:0,
        }}>WS</div>
        <span style={{
          position:'absolute', bottom:-1, right:-1, width:10, height:10,
          borderRadius:'50%', background:'#10B981', border:'2px solid #fff',
        }}/>
      </div>
    </div>
  </div>
);

Object.assign(window, {
  // Icons
  IcGrid, IcLayers, IcHeart, IcLogList, IcClipboard, IcDatabase,
  IcWarnTri, IcPlane, IcEngine, IcWrench, IcBars, IcHand, IcAOG,
  IcPanelCollapse, IcLogo,
  IcChevDown, IcChevRight, IcChevLeft, IcX, IcPlus, IcSearch, IcFilterLines,
  IcDots, IcDotsVert, IcBell, IcCaretUp, IcCaretDown,
  IcTrendUp, IcTrendDown, IcSortUpDown,
  IcStarFill, IcStarOutline, IcDoc, IcExtLink,
  IcDownload, IcSliders, IcRows, IcCollapseChart, IcCog,
  // Components
  DVSwitch, DVBtn, DVChip,
  DVStatus, DVTypeLabel, DVTag, DVDropdown,
  DVSidebar, DVHeader,
  TYPE_DOTS,
});
