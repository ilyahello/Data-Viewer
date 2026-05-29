// dv-datepicker.jsx — Period chip with dual-calendar date picker
var { useState, useEffect, useRef } = React;

// ── Constants ────────────────────────────────────────────────────────
const DP_PRESETS = [
  { k:'today', v:'Today'     },
  { k:'week',  v:'Last Week' },
  { k:'month', v:'Last Month'},
  { k:'year',  v:'Last Year' },
];
const DP_DEFAULT = 'today';

const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];
const DAY_HEADS = ['Su','Mo','Tu','We','Th','Fr','Sa'];

// ── Date helpers ─────────────────────────────────────────────────────
function toDay(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}
function sameDay(a, b) {
  if (!a || !b) return false;
  return a.getFullYear()===b.getFullYear()
      && a.getMonth()===b.getMonth()
      && a.getDate()===b.getDate();
}
function inRange(d, s, e) {
  if (!d || !s || !e) return false;
  const t = d.getTime();
  const lo = Math.min(s.getTime(), e.getTime());
  const hi = Math.max(s.getTime(), e.getTime());
  return t > lo && t < hi;
}
function isEdge(d, s, e) {
  if (!d || !s) return false;
  if (!e) return sameDay(d, s);
  return sameDay(d, s) || sameDay(d, e);
}
function monthCells(year, month) {
  const first = new Date(year, month, 1).getDay();
  const last  = new Date(year, month+1, 0).getDate();
  const cells = [];
  for (let i=0; i<first; i++) cells.push(null);
  for (let d=1; d<=last; d++) cells.push(d);
  return cells;
}
function getPresetRange(key) {
  const today = toDay(new Date());
  if (key==='today') { return { s:today, e:today }; }
  if (key==='week')  { const s=toDay(new Date()); s.setDate(s.getDate()-6);  return {s,e:today}; }
  if (key==='month') { const s=toDay(new Date()); s.setDate(s.getDate()-29); return {s,e:today}; }
  if (key==='year')  { const s=toDay(new Date()); s.setDate(s.getDate()-364);return {s,e:today}; }
  return null;
}
function dpFmtDate(d) {
  if (!d) return '';
  return String(MONTH_NAMES[d.getMonth()].slice(0,3)) + ' ' + String(d.getDate());
}

// ── Single month calendar ─────────────────────────────────────────────
const CalGrid = ({ year, month, rangeS, rangeE, hover, onDay, onHover }) => {
  const cells = monthCells(Number(year), Number(month));
  // effective end: use hover only when a start is selected and end isn't yet
  const effE = (rangeS && !rangeE && hover) ? hover : (rangeE || null);

  return (
    <div style={{width:188}}>
      <div style={{
        fontFamily:"'Source Sans 3', sans-serif", fontWeight:600, fontSize:14,
        textAlign:'center', marginBottom:8, color:'#000', letterSpacing:'-0.01em',
      }}>
        {String(MONTH_NAMES[month])} {String(year)}
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(7,1fr)', rowGap:'2px'}}>
        {DAY_HEADS.map(h => (
          <div key={h} style={{
            textAlign:'center', fontSize:11, color:'#BBB', fontWeight:600,
            fontFamily:"'Source Sans 3', sans-serif", paddingBottom:4,
          }}>{String(h)}</div>
        ))}

        {cells.map((d, i) => {
          if (d === null) return <div key={'e'+i}/>;

          const date  = new Date(year, month, d);
          const edge  = isEdge(date, rangeS, effE);
          const mid   = !edge && inRange(date, rangeS, effE);

          // Border radius: square edges for range endpoints, round for single/none
          let br = '6px';
          if (edge && rangeS && effE && !sameDay(rangeS, effE)) {
            // Part of a range — flat side facing the range interior
            const loDate = rangeS.getTime() <= effE.getTime() ? rangeS : effE;
            br = sameDay(date, loDate) ? '6px 0 0 6px' : '0 6px 6px 0';
          }
          if (mid) br = '0';

          const bg = edge ? 'var(--dv-accent)' : mid ? 'var(--dv-accent-bg)' : 'transparent';
          const fg = edge ? '#fff' : mid ? 'var(--dv-accent)' : '#000';
          const fw = edge ? 700 : 400;

          return (
            <div
              key={String(year)+'-'+String(month)+'-'+String(d)}
              onClick={() => onDay(toDay(date))}
              onMouseEnter={() => onHover(toDay(date))}
              onMouseLeave={() => onHover(null)}
              style={{
                textAlign:'center', padding:'5px 0', cursor:'pointer',
                borderRadius:br, background:bg, color:fg, fontWeight:fw,
                fontSize:13, fontFamily:"'Source Sans 3', sans-serif",
                userSelect:'none',
              }}
            >{String(d)}</div>
          );
        })}
      </div>
    </div>
  );
};

// ── Date picker popup ─────────────────────────────────────────────────
const DatePickerPopup = ({ anchorPos, presetKey, onPreset, onRange, onClose }) => {
  const now    = new Date();
  const initLm = now.getMonth() > 0 ? now.getMonth()-1 : 11;
  const initLy = now.getMonth() > 0 ? now.getFullYear() : now.getFullYear()-1;

  const [lm,     setLm]     = useState(initLm);
  const [ly,     setLy]     = useState(initLy);
  const [rangeS, setRangeS] = useState(null);
  const [rangeE, setRangeE] = useState(null);
  const [hover,  setHover]  = useState(null);
  const [active, setActive] = useState(
    (presetKey && presetKey !== 'custom') ? presetKey : 'today'
  );

  const popRef = useRef();

  const rm = lm === 11 ? 0  : lm+1;
  const ry = lm === 11 ? ly+1 : ly;

  const prevMo = () => {
    if (lm===0) { setLm(11); setLy(y => y-1); } else setLm(m => m-1);
  };
  const nextMo = () => {
    if (lm===11) { setLm(0); setLy(y => y+1); } else setLm(m => m+1);
  };

  // Determine displayed range
  const pr = (active !== 'custom') ? getPresetRange(active) : null;
  const displayS = rangeS ? rangeS : (pr ? pr.s : null);
  const displayE = rangeE ? rangeE : (pr ? pr.e : null);

  const pickPreset = k => {
    setActive(k);
    setRangeS(null);
    setRangeE(null);
    onPreset(k);
  };

  const pickDay = d => {
    if (!rangeS || rangeE) {
      setRangeS(d);
      setRangeE(null);
      setActive('custom');
    } else {
      const lo = rangeS.getTime() <= d.getTime() ? rangeS : d;
      const hi = rangeS.getTime() <= d.getTime() ? d : rangeS;
      setRangeE(d);
      onRange(lo, hi);
    }
  };

  // Outside-click close using ref
  useEffect(() => {
    const fn = e => {
      if (popRef.current && !popRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, [onClose]);

  const showingHint = !!(rangeS && !rangeE);
  const hintText = showingHint ? (String(MONTH_NAMES[rangeS.getMonth()].slice(0,3)) + ' ' + String(rangeS.getDate()) + ' — pick end date') : '';

  return ReactDOM.createPortal(
    <div ref={popRef} style={{
      position:'fixed', top:anchorPos.top, left:anchorPos.left, zIndex:9999,
      background:'#fff', border:'1px solid #E6E6E6', borderRadius:10,
      boxShadow:'0 8px 32px rgba(0,0,0,0.10)', padding:'12px 14px 16px',
    }}>
      {/* Preset tabs */}
      <div style={{display:'flex', gap:4, marginBottom:14, paddingBottom:12, borderBottom:'1px solid #F0F0F0'}}>
        {DP_PRESETS.map(({k,v}) => {
          const act = (active===k);
          return (
            <button key={k} onClick={() => pickPreset(k)} style={{
              flex:1, height:30,
              border:'1px solid ' + (act ? 'var(--dv-accent)' : '#E6E6E6'),
              borderRadius:6, cursor:'pointer',
              fontFamily:"'Source Sans 3', sans-serif", fontSize:13,
              fontWeight: act ? 600 : 500, letterSpacing:'-0.01em',
              background: act ? 'var(--dv-accent-bg)' : '#fff',
              color: act ? 'var(--dv-accent)' : '#555',
              transition:'all 0.1s', whiteSpace:'nowrap',
            }}>{String(v)}</button>
          );
        })}
      </div>

      {/* Calendars */}
      <div style={{display:'flex', alignItems:'flex-start', gap:8}}>
        <button onClick={prevMo} style={{
          width:28, height:28, border:'none', background:'transparent', cursor:'pointer',
          display:'flex', alignItems:'center', justifyContent:'center',
          borderRadius:4, flexShrink:0, marginTop:22,
        }}
          onMouseEnter={e=>e.currentTarget.style.background='#F2F2F2'}
          onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
          <IcChevLeft s={16} c="#555"/>
        </button>

        <CalGrid
          year={ly} month={lm}
          rangeS={displayS} rangeE={displayE} hover={hover}
          onDay={pickDay} onHover={setHover}
        />

        <CalGrid
          year={ry} month={rm}
          rangeS={displayS} rangeE={displayE} hover={hover}
          onDay={pickDay} onHover={setHover}
        />

        <button onClick={nextMo} style={{
          width:28, height:28, border:'none', background:'transparent', cursor:'pointer',
          display:'flex', alignItems:'center', justifyContent:'center',
          borderRadius:4, flexShrink:0, marginTop:22,
        }}
          onMouseEnter={e=>e.currentTarget.style.background='#F2F2F2'}
          onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
          <IcChevRight s={16} c="#555"/>
        </button>
      </div>

      {/* Picking hint — explicit ternary, never a Date in JSX */}
      {showingHint ? (
        <div style={{
          marginTop:10, fontSize:12, color:'#AAA', textAlign:'center',
          fontFamily:"'Source Sans 3', sans-serif", letterSpacing:'-0.01em',
        }}>
          {hintText}
        </div>
      ) : null}
    </div>,
    document.body
  );
};

// ── Period chip ───────────────────────────────────────────────────────
const PeriodChip = ({ value, onChange }) => {
  const [open,        setOpen]        = useState(false);
  const [pos,         setPos]         = useState({top:0, left:0});
  const [customLabel, setCustomLabel] = useState(null);
  const ref = useRef();

  const isDefault   = (!value || value === DP_DEFAULT) && !customLabel;
  const presetLabel = (DP_PRESETS.find(p => p.k === value) || {}).v;
  const chipVal     = customLabel || presetLabel || 'Today';

  const handleOpen = () => {
    if (ref.current) {
      const r = ref.current.getBoundingClientRect();
      setPos({ top: r.bottom+4, left: r.left });
    }
    setOpen(o => !o);
  };

  const handlePreset = k => {
    onChange(k);
    setCustomLabel(null);
    setOpen(false);
  };

  const handleRange = (lo, hi) => {
    onChange('custom');
    setCustomLabel(dpFmtDate(lo) + ' – ' + dpFmtDate(hi));
    setOpen(false);
  };

  const handleClear = () => {
    onChange(DP_DEFAULT);
    setCustomLabel(null);
  };

  return (
    <div ref={ref} style={{flexShrink:0}}>
      <DVChip
        label="Period"
        value={String(chipVal)}
        onClick={handleOpen}
        onClear={isDefault ? null : handleClear}
      />
      {open ? (
        <DatePickerPopup
          anchorPos={pos}
          presetKey={value}
          onPreset={handlePreset}
          onRange={handleRange}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </div>
  );
};

Object.assign(window, { PeriodChip });
