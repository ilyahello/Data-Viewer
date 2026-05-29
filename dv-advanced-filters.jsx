// dv-advanced-filters.jsx — Advanced Filters panel
var { useState, useEffect, useMemo, useRef } = React;

// ── uid ──────────────────────────────────────────────────────────────
let _auid = 0;
const auid = () => `af${++_auid}`;

// ── Field definitions ────────────────────────────────────────────────
const ADV_FIELDS = [
{ key: 'type', label: 'Event Type' },
{ key: 'aircraft', label: 'Aircraft' },
{ key: 'fleet', label: 'Fleet' },
{ key: 'loc', label: 'Location' },
{ key: 'sys', label: 'System' },
{ key: 'phase', label: 'Phase' },
{ key: 'status', label: 'Status' },
{ key: 'tags', label: 'Tags' },
{ key: 'desc', label: 'Description', freeText: true }];

const FIELD_MAP = Object.fromEntries(ADV_FIELDS.map((f) => [f.key, f]));

function getFieldVals(key) {
  if (key === 'type') return ['Fault', 'Log', 'Report', 'Component'];
  if (key === 'status') return ['Open', 'Closed', 'Worked', 'Hold', 'Deferred'];
  if (key === 'tags') return ['ETOPS', 'CHRONIC', 'OIL', 'RVSM', 'CUSTOM ALERT', 'LLM'];
  const s = new Set();
  (window.DVData?.events || []).forEach((ev) => {
    const v = ev[key];
    if (v != null && String(v).trim()) s.add(String(v));
  });
  return [...s].sort();
}

const OPS_SELECT = ['is', 'is not', 'is any of'];
const OPS_TEXT = ['contains', 'does not contain'];
const OPS_TAGS = ['includes', 'does not include'];

function getOps(key) {
  if (FIELD_MAP[key]?.freeText) return OPS_TEXT;
  if (key === 'tags') return OPS_TAGS;
  return OPS_SELECT;
}
const isMultiOp = (op) => ['is any of', 'includes', 'does not include'].includes(op);

// ── State factories ──────────────────────────────────────────────────
const makeRow = (f = 'type') => ({ id: auid(), field: f, operator: getOps(f)[0], values: [], text: '' });
const makeGroup = () => ({ id: auid(), rows: [makeRow()], logic: 'and' });
const EMPTY_ADV = { groups: [] };

// ── Apply function (used by dv-app) ──────────────────────────────────
function matchRow(ev, row) {
  const fDef = FIELD_MAP[row.field];
  if (fDef?.freeText) {
    const t = (row.text || '').toLowerCase();
    if (!t) return true;
    const s = String(ev[row.field] ?? '').toLowerCase();
    return row.operator === 'contains' ? s.includes(t) : !s.includes(t);
  }
  if (row.field === 'tags') {
    const evTags = ev.tags || [];
    const has = row.values.some((v) => evTags.includes(v));
    return row.operator === 'includes' ? has : !has;
  }
  if (!row.values.length) return true;
  const evVal = String(ev[row.field] ?? '');
  if (row.operator === 'is') return evVal === row.values[0];
  if (row.operator === 'is not') return evVal !== row.values[0];
  if (row.operator === 'is any of') return row.values.includes(evVal);
  return true;
}

function matchGroup(ev, group) {
  const logic = group.logic || 'and';
  return logic === 'and' ? group.rows.every((r) => matchRow(ev, r)) : group.rows.some((r) => matchRow(ev, r));
}

function applyAdvancedFilters(events, adv) {
  const groups = adv?.groups || [];
  if (!groups.length) return events;
  return events.filter((ev) => {
    let result = matchGroup(ev, groups[0]);
    for (let i = 1; i < groups.length; i++) {
      const conn = groups[i].connectorBefore || 'or';
      const g = matchGroup(ev, groups[i]);
      result = conn === 'and' ? result && g : result || g;
    }
    return result;
  });
}

// ── Small inline dropdown ────────────────────────────────────────────
const AFSel = ({ value, options, onChange, width = 120 }) => {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const ref = useRef();
  const norm = options.map((o) => typeof o === 'string' ? { k: o, v: o } : o);
  const label = norm.find((o) => o.k === value)?.v || value || '—';

  useEffect(() => {
    if (!open) return;
    const fn = (e) => {if (!e.target.closest('[data-af-s]')) setOpen(false);};
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, [open]);

  const toggle = () => {
    if (ref.current) {const r = ref.current.getBoundingClientRect();setPos({ top: r.bottom + 4, left: r.left });}
    setOpen((o) => !o);
  };

  return (
    <div ref={ref} data-af-s style={{ flexShrink: 0 }}>
      <button onClick={toggle} style={{
        height: 30, minWidth: width, maxWidth: width, padding: '0 8px 0 10px', borderRadius: 5,
        border: `1px solid ${open ? 'var(--dv-accent)' : '#E0E0E0'}`,
        background: open ? 'var(--dv-accent-bg)' : '#fff',
        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4,
        fontFamily: "'Source Sans 3', sans-serif", fontSize: 13,
        color: open ? 'var(--dv-accent)' : '#000', letterSpacing: '-0.01em',
        transition: 'border-color 0.1s, background 0.1s', overflow: 'hidden'
      }}>
        <span style={{ flex: 1, textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
        <IcChevDown s={12} c={open ? 'var(--dv-accent)' : '#AAA'} />
      </button>
      {open && ReactDOM.createPortal(
        <div data-af-s style={{
          position: 'fixed', top: pos.top, left: pos.left, zIndex: 10001,
          background: '#fff', border: '1px solid #E0E0E0', borderRadius: 6,
          boxShadow: '0 6px 24px rgba(0,0,0,0.10)', minWidth: width, padding: '4px 0',
          maxHeight: 240, overflowY: 'auto'
        }}>
          {norm.map(({ k, v }) => {
            const sel = k === value;
            return (
              <div key={k} onClick={() => {onChange(k);setOpen(false);}}
              onMouseEnter={(e) => {if (!sel) e.currentTarget.style.background = '#F4F4F4';}}
              onMouseLeave={(e) => {if (!sel) e.currentTarget.style.background = 'transparent';}}
              style={{
                padding: '7px 12px', cursor: 'pointer', fontSize: 13, letterSpacing: '-0.01em',
                fontFamily: "'Source Sans 3', sans-serif",
                color: sel ? 'var(--dv-accent)' : '#000',
                background: sel ? 'var(--dv-accent-bg)' : 'transparent',
                fontWeight: sel ? 600 : 400
              }}>
                {v}
              </div>);

          })}
        </div>, document.body
      )}
    </div>);

};

// ── Multi-select dropdown ────────────────────────────────────────────
const AFMulti = ({ values, options, onChange, width = 152 }) => {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const ref = useRef();

  useEffect(() => {
    if (!open) return;
    const fn = (e) => {if (!e.target.closest('[data-af-m]')) setOpen(false);};
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, [open]);

  const toggle = () => {
    if (ref.current) {const r = ref.current.getBoundingClientRect();setPos({ top: r.bottom + 4, left: r.left });}
    setOpen((o) => !o);
  };
  const toggleVal = (v) => onChange(values.includes(v) ? values.filter((x) => x !== v) : [...values, v]);
  const label = values.length === 0 ? 'Select…' :
  values.length <= 2 ? values.join(', ') :
  `${values.slice(0, 2).join(', ')} +${values.length - 2}`;

  return (
    <div ref={ref} data-af-m style={{ flexShrink: 0 }}>
      <button onClick={toggle} style={{
        height: 30, minWidth: width, maxWidth: width, padding: '0 8px 0 10px', borderRadius: 5,
        border: `1px solid ${open ? 'var(--dv-accent)' : '#E0E0E0'}`,
        background: open ? 'var(--dv-accent-bg)' : '#fff',
        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4,
        fontFamily: "'Source Sans 3', sans-serif", fontSize: 13,
        color: open ? 'var(--dv-accent)' : values.length ? '#000' : '#AAA',
        letterSpacing: '-0.01em', overflow: 'hidden',
        transition: 'border-color 0.1s, background 0.1s'
      }}>
        <span style={{ flex: 1, textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
        <IcChevDown s={12} c={open ? 'var(--dv-accent)' : '#AAA'} />
      </button>
      {open && ReactDOM.createPortal(
        <div data-af-m style={{
          position: 'fixed', top: pos.top, left: pos.left, zIndex: 10001,
          background: '#fff', border: '1px solid #E0E0E0', borderRadius: 6,
          boxShadow: '0 6px 24px rgba(0,0,0,0.10)', minWidth: width, padding: '4px 0',
          maxHeight: 240, overflowY: 'auto'
        }}>
          {options.map((v) => {
            const on = values.includes(v);
            return (
              <div key={v} onClick={() => toggleVal(v)}
              onMouseEnter={(e) => {e.currentTarget.style.background = on ? '#EEF0FF' : '#F4F4F4';}}
              onMouseLeave={(e) => {e.currentTarget.style.background = on ? 'var(--dv-accent-bg)' : 'transparent';}}
              style={{
                padding: '7px 12px', cursor: 'pointer', fontSize: 13,
                fontFamily: "'Source Sans 3', sans-serif", letterSpacing: '-0.01em',
                background: on ? 'var(--dv-accent-bg)' : 'transparent',
                display: 'flex', alignItems: 'center', gap: 8
              }}>
                <div style={{
                  width: 14, height: 14, borderRadius: 3, flexShrink: 0,
                  border: `1.5px solid ${on ? 'var(--dv-accent)' : '#D0D0D0'}`,
                  background: on ? 'var(--dv-accent)' : '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.1s'
                }}>
                  {on && <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path d="M1 3L3 5.5L7 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>}
                </div>
                <span style={{ color: on ? 'var(--dv-accent)' : '#000', fontWeight: on ? 600 : 400 }}>{v}</span>
              </div>);

          })}
        </div>, document.body
      )}
    </div>);

};

// ── Filter row ────────────────────────────────────────────────────────
const FilterRow = ({ row, isFirst, logic = 'and', onToggleLogic, onChange, onDelete }) => {
  const fDef = FIELD_MAP[row.field] || {};
  const ops = getOps(row.field);
  const multi = isMultiOp(row.operator);
  const avVals = useMemo(() => getFieldVals(row.field), [row.field]);

  const setField = (f) => {
    const newOp = getOps(f)[0];
    onChange({ ...row, field: f, operator: newOp, values: [], text: '' });
  };
  const setOp = (op) => {
    const wasMulti = isMultiOp(row.operator),nowMulti = isMultiOp(op);
    onChange({ ...row, operator: op, values: wasMulti !== nowMulti ? [] : row.values });
  };
  const setVals = (v) => onChange({ ...row, values: v });
  const setText = (t) => onChange({ ...row, text: t });
  const setSingle = (v) => onChange({ ...row, values: v ? [v] : [] });

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '3px 0' }}>
      {/* Where / and·or toggle */}
      <div style={{ width: 50, flexShrink: 0, textAlign: 'right', paddingRight: 2 }}>
        {isFirst ?
        <span style={{
          fontSize: 12, color: '#999', letterSpacing: '-0.01em',
          fontFamily: "'Source Sans 3', sans-serif", fontWeight: 400
        }}>Where:</span> :

        <button onClick={onToggleLogic} style={{
          padding: '2px 6px', borderRadius: 4, border: 'none', cursor: 'pointer',
          fontSize: 11, fontWeight: 700, letterSpacing: '0.02em', textTransform: 'uppercase',
          fontFamily: "'Source Sans 3', sans-serif",
          background: logic === 'and' ? 'var(--dv-accent-bg)' : '#FFF0E6',
          color: logic === 'and' ? 'var(--dv-accent)' : '#D4580A',
          transition: 'all 0.12s'
        }}>{logic}</button>
        }
      </div>

      {/* Field selector */}
      <AFSel
        value={row.field}
        options={ADV_FIELDS.map((f) => ({ k: f.key, v: f.label }))}
        onChange={setField}
        width={118} />
      

      {/* Operator selector */}
      <AFSel value={row.operator} options={ops} onChange={setOp} width={104} />

      {/* Value picker */}
      {fDef.freeText ?
      <input value={row.text} onChange={(e) => setText(e.target.value)}
      placeholder="Type value…"
      style={{
        height: 30, padding: '0 10px', border: '1px solid #E0E0E0', borderRadius: 5,
        fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, color: '#000',
        letterSpacing: '-0.01em', flex: 1, minWidth: 80, outline: 'none',
        background: '#fff', transition: 'border-color 0.1s'
      }}
      onFocus={(e) => e.target.style.borderColor = 'var(--dv-accent)'}
      onBlur={(e) => e.target.style.borderColor = '#E0E0E0'} /> :

      multi ?
      <AFMulti values={row.values} options={avVals} onChange={setVals} width={152} /> :

      <AFSel
        value={row.values[0] || ''}
        options={[{ k: '', v: 'Select…' }, ...avVals.map((v) => ({ k: v, v }))]}
        onChange={setSingle}
        width={152} />

      }

      {/* Delete row */}
      <button onClick={onDelete} title="Remove condition"
      style={{
        width: 26, height: 26, border: 'none', background: 'transparent', cursor: 'pointer',
        borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, color: '#CCC', transition: 'color 0.1s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.color = '#EB0052'}
      onMouseLeave={(e) => e.currentTarget.style.color = '#CCC'}>
        <svg width="13" height="14" viewBox="0 0 13 14" fill="none">
          <path d="M1.5 3.5h10M4 3.5V2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1M5 6v4.5M8 6v4.5M2.5 3.5l.7 8a.5.5 0 0 0 .5.5h5.6a.5.5 0 0 0 .5-.5l.7-8"
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>);

};

// ── Filter group ──────────────────────────────────────────────────────
const FilterGroup = ({ group, onChange, onDelete }) => {
  const upd = (rid, nr) => onChange({ ...group, rows: group.rows.map((r) => r.id === rid ? nr : r) });
  const del = (rid) => onChange({ ...group, rows: group.rows.filter((r) => r.id !== rid) });
  const add = () => onChange({ ...group, rows: [...group.rows, makeRow()] });
  const toggleLogic = () => onChange({ ...group, logic: group.logic === 'and' ? 'or' : 'and' });
  const logic = group.logic || 'and';

  return (
    <div style={{
      background: '#fff', border: '1px solid #EBEBEB', borderRadius: 8,
      padding: '10px 10px 8px'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {group.rows.map((row, i) =>
        <FilterRow key={row.id} row={row} isFirst={i === 0}
        logic={logic} onToggleLogic={toggleLogic}
        onChange={(nr) => upd(row.id, nr)}
        onDelete={() => group.rows.length > 1 ? del(row.id) : onDelete()} />

        )}
      </div>

      {/* Footer: Add Filter + delete group */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4, paddingLeft: 2 }}>
        <button onClick={add} style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          background: 'transparent', border: 'none', cursor: 'pointer',
          fontFamily: "'Source Sans 3', sans-serif", fontSize: 12,
          color: 'var(--dv-accent)', letterSpacing: '-0.01em', padding: '4px 0 2px 52px'
        }}>
          <IcPlus s={11} c="var(--dv-accent)" />
          Add Filter
        </button>
        <button onClick={onDelete} title="Remove group" style={{
          width: 24, height: 24, border: 'none', background: 'transparent',
          cursor: 'pointer', borderRadius: 3, display: 'flex',
          alignItems: 'center', justifyContent: 'center', color: '#CCC',
          transition: 'color 0.1s', flexShrink: 0
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#EB0052'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#CCC'}>
          <IcX s={11} c="currentColor" />
        </button>
      </div>
    </div>);

};

// ── OR / AND separator between groups ───────────────────────────────
const GroupSep = ({ connector = 'or', onToggle }) =>
<div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '5px 0' }}>
    <div style={{ flex: 1, height: 1, background: '#EFEFEF' }} />
    <button onClick={onToggle} style={{
    padding: '3px 10px', borderRadius: 4, border: 'none', cursor: 'pointer',
    fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
    fontFamily: "'Source Sans 3', sans-serif",
    background: connector === 'and' ? 'var(--dv-accent-bg)' : '#FFF0E6',
    color: connector === 'and' ? 'var(--dv-accent)' : '#D4580A',
    transition: 'all 0.12s'
  }}>{connector}</button>
    <div style={{ flex: 1, height: 1, background: '#EFEFEF' }} />
  </div>;


// ── Advanced Filters panel ────────────────────────────────────────────
const AdvancedFiltersPanel = ({ initialAdv, onApply, onClose }) => {
  const [adv, setAdv] = useState(() => {
    const init = initialAdv || EMPTY_ADV;
    return init.groups.length ? init : EMPTY_ADV;
  });
  const [visible, setVisible] = useState(false);
  useEffect(() => {requestAnimationFrame(() => setVisible(true));}, []);

  useEffect(() => {
    const fn = (e) => {if (e.key === 'Escape') onClose();};
    document.addEventListener('keydown', fn);
    return () => document.removeEventListener('keydown', fn);
  }, [onClose]);

  const groups = adv.groups || [];
  const updGroup = (gid, ng) => setAdv((a) => ({ ...a, groups: a.groups.map((g) => g.id === gid ? ng : g) }));
  const delGroup = (gid) => setAdv((a) => ({ ...a, groups: a.groups.filter((g) => g.id !== gid) }));
  const addGroup = () => setAdv((a) => ({ ...a, groups: [...a.groups, { ...makeGroup(), connectorBefore: 'or' }] }));
  const toggleConnector = (gid) => setAdv((a) => ({ ...a, groups: a.groups.map((g) =>
    g.id === gid ? { ...g, connectorBefore: g.connectorBefore === 'and' ? 'or' : 'and' } : g
    ) }));
  const clearAll = () => setAdv(EMPTY_ADV);

  const activeCount = groups.reduce((n, g) =>
  n + g.rows.filter((r) => r.values.length > 0 || r.text).length, 0);

  return ReactDOM.createPortal(
    <>
      {/* Floating panel — no backdrop */}
      <div style={{
        position: 'fixed', top: 12, right: 12, bottom: 12, zIndex: 8001,
        width: 520, background: '#F5F5F5',
        borderRadius: 12,
        boxShadow: '0 8px 48px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.06)',
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
        transform: visible ? 'translateX(0)' : 'translateX(24px)',
        opacity: visible ? 1 : 0,
        transition: 'transform 0.2s ease, opacity 0.18s ease'
      }}>

        {/* Header */}
        <div style={{
          height: 52, background: '#fff', borderBottom: '1px solid #EEEEEE',
          display: 'flex', alignItems: 'center', padding: '0 18px', gap: 10, flexShrink: 0
        }}>
          <span style={{
            fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600,
            fontSize: 15, letterSpacing: '-0.01em', flex: 1, color: '#000'
          }}>Advanced Filters</span>
          <button onClick={onClose} style={{
            width: 28, height: 28, border: 'none', background: 'transparent',
            cursor: 'pointer', borderRadius: 4, display: 'flex',
            alignItems: 'center', justifyContent: 'center', color: '#888',
            transition: 'background 0.1s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#F2F2F2'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
            <IcX s={14} c="currentColor" />
          </button>
        </div>

        {/* Body */}
        <div style={{
          flex: 1, overflowY: 'auto', padding: '14px 16px',
          display: 'flex', flexDirection: 'column', gap: 0
        }}>
          {groups.length === 0 &&
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', flex: 1, gap: 24
          }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="10" fill="#EFEFEF" />
                  <line x1="11" y1="14" x2="29" y2="14" stroke="#999" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="14" y1="20" x2="26" y2="20" stroke="#999" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="17" y1="26" x2="23" y2="26" stroke="#999" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                <div style={{ textAlign: 'center' }}>
                  <p style={{
                  fontSize: 15, color: '#444', margin: 0, fontWeight: 600,
                  fontFamily: "'Source Sans 3', sans-serif", letterSpacing: '-0.01em'
                }}>No filters yet</p>
                  <p style={{
                  fontSize: 13, color: '#999', margin: '6px 0 0',
                  fontFamily: "'Source Sans 3', sans-serif", letterSpacing: '-0.01em'
                }}>Add a group to start filtering your data</p>
                </div>
              </div>
              <button onClick={addGroup} style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '11px 24px', borderRadius: 8,
              background: 'var(--dv-accent)', border: 'none', cursor: 'pointer',
              fontFamily: "'Source Sans 3', sans-serif", fontSize: 14, fontWeight: 600,
              color: '#fff', letterSpacing: '-0.01em',
              boxShadow: 'none',
              transition: 'background 0.12s, box-shadow 0.12s'
            }}
            onMouseEnter={(e) => {e.currentTarget.style.background = 'var(--dv-accent-dark)';e.currentTarget.style.boxShadow = 'none';}}
            onMouseLeave={(e) => {e.currentTarget.style.background = 'var(--dv-accent)';e.currentTarget.style.boxShadow = '0 2px 12px rgba(69,71,255,0.28)';}}>
                <IcPlus s={14} c="#fff" />
                Add Filter Group
              </button>
            </div>
          }

          {groups.map((group, gi) =>
          <React.Fragment key={group.id}>
              {gi > 0 &&
            <GroupSep
              connector={group.connectorBefore || 'or'}
              onToggle={() => toggleConnector(group.id)} />

            }
              <FilterGroup
              group={group}
              onChange={(ng) => updGroup(group.id, ng)}
              onDelete={() => delGroup(group.id)} />
            
            </React.Fragment>
          )}

          {/* Add group button — only shown when groups exist */}
          {groups.length > 0 &&
          <div style={{ marginTop: 10 }}>
              <button onClick={addGroup}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              width: '100%', padding: '9px 0', borderRadius: 7,
              border: '1.5px dashed #BBBBBB', background: 'transparent', cursor: 'pointer',
              fontFamily: "'Source Sans 3', sans-serif", fontSize: 13,
              color: '#555', letterSpacing: '-0.01em', transition: 'all 0.12s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--dv-accent)';
              e.currentTarget.style.color = 'var(--dv-accent)';
              e.currentTarget.style.background = 'rgba(69,71,255,0.03)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#BBBBBB';
              e.currentTarget.style.color = '#999';
              e.currentTarget.style.background = 'transparent';
            }}>
                <IcPlus s={13} c="currentColor" />
                Add Filter Group
              </button>
            </div>
          }
        </div>

        {/* Footer */}
        <div style={{
          padding: '12px 16px', background: '#fff', borderTop: '1px solid #EEEEEE',
          display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0
        }}>
          <div style={{ flex: 1 }}>
            {groups.length > 0 &&
            <button onClick={clearAll} style={{
              background: 'transparent', border: 'none', cursor: 'pointer',
              fontSize: 13, color: '#AAA', fontFamily: "'Source Sans 3', sans-serif",
              letterSpacing: '-0.01em', padding: 0, transition: 'color 0.1s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#EB0052'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#AAA'}>
                Clear All
              </button>
            }
          </div>
          <DVBtn variant="secondary" size="m" onClick={onClose}>Cancel</DVBtn>
          <DVBtn variant="primary" size="m" onClick={() => {onApply(adv);onClose();}}>
            Apply Filters
          </DVBtn>
        </div>
      </div>
    </>,
    document.body
  );

};

// ── Active filter indicator bar ──────────────────────────────────────
const AdvFilterIndicator = ({ adv, onEdit, onClear }) => {
  const groups = (adv?.groups || []).filter((g) => g.rows.some((r) => r.values.length > 0 || r.text));
  if (!groups.length) return null;

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      padding: '6px 24px',
      flexShrink: 0, flexWrap: 'wrap', borderBottom: "1px solid rgb(242, 242, 242)", borderTopColor: "rgb(242, 242, 242)", borderRightColor: "rgb(242, 242, 242)", borderLeftColor: "rgb(242, 242, 242)", background: "rgb(255, 255, 255)", borderBottomStyle: "solid", borderColor: "rgb(242, 242, 242)", borderWidth: "0px 0px 1px"
    }}>
      <span style={{
        fontSize: 12, fontWeight: 600, color: '#666', letterSpacing: '-0.01em',
        fontFamily: "'Source Sans 3', sans-serif", whiteSpace: 'nowrap', flexShrink: 0
      }}>Advanced Filters:</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexWrap: 'wrap' }}>
        {groups.map((g, gi) => {
          const activeRows = g.rows.filter((r) => r.values.length > 0 || r.text);
          const conn = g.connectorBefore || 'or';
          const logic = g.logic || 'and';
          return (
            <React.Fragment key={g.id}>
              {gi > 0 &&
              <span style={{
                fontSize: 10, fontWeight: 700, padding: '2px 6px', borderRadius: 3,
                textTransform: 'uppercase', letterSpacing: '0.06em',
                fontFamily: "'Source Sans 3', sans-serif",
                background: conn === 'and' ? 'var(--dv-accent-bg)' : '#FFF0E6',
                color: conn === 'and' ? 'var(--dv-accent)' : '#D4580A'
              }}>{conn}</span>
              }
              {activeRows.map((r, ri) => {
                const fieldLabel = FIELD_MAP[r.field]?.label || r.field;
                const val = r.text || (r.values.length <= 2 ? r.values.join(', ') : `${r.values.slice(0, 2).join(', ')} +${r.values.length - 2}`);
                return (
                  <React.Fragment key={r.id}>
                    {ri > 0 &&
                    <span style={{
                      fontSize: 10, fontWeight: 700, padding: '1px 5px', borderRadius: 3,
                      textTransform: 'uppercase', letterSpacing: '0.06em',
                      fontFamily: "'Source Sans 3', sans-serif",
                      background: logic === 'and' ? 'var(--dv-accent-bg)' : '#FFF0E6',
                      color: logic === 'and' ? 'var(--dv-accent)' : '#D4580A'
                    }}>{logic}</span>
                    }
                    <span style={{
                      fontSize: 12, letterSpacing: '-0.01em',
                      fontFamily: "'Source Sans 3', sans-serif",
                      background: '#fff', border: '1px solid #E0E2FF',
                      padding: '2px 8px', borderRadius: "4px"
                    }}>
                      <span style={{ color: '#888' }}>{fieldLabel}</span>
                      {' '}<span style={{ color: '#666' }}>{r.operator}</span>{' '}
                      <span style={{ fontWeight: 600, color: '#000' }}>{val}</span>
                    </span>
                  </React.Fragment>);

              })}
            </React.Fragment>);

        })}
      </div>
    </div>);

};

Object.assign(window, {
  AdvancedFiltersPanel, AdvFilterIndicator, applyAdvancedFilters,
  makeGroup, EMPTY_ADV, ADV_FIELDS
});