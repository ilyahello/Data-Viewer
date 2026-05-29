// dv-data.js — Mock data for AER 2.0 Data Viewer
(function () {
  // Log page prefixes: A = Alert, I = Intermittent
  const LP = (prefix, num) => ({ prefix, num });

  window.DVData = {
    events: [
      // ── Faults ────────────────────────────────────────────────────
      { id:1,  dt:'2023-06-20 12:30', aircraft:'437AM',  fleet:'B737NG', sub:'800',  type:'Fault',     loc:'JFK',          desc:'34-57901 MORE THAN ONE SYSTEM HAS FAILED',            sys:'1200', phase:'Cruise',                  tags:[],                  sub2:'WRN', flr:true,  logPage: LP('A','34-230131') },
      { id:5,  dt:'2023-06-05 09:30', aircraft:'572AM',  fleet:'B737M',  sub:'MAX8', type:'Fault',     loc:'JFK-SFO-7632', desc:'34-57901 MORE THAN ONE SYSTEM HAS FAILED',            sys:'4613', phase:'N/A',                     tags:[],                  sub2:'WRN', flr:true,  logPage: LP('A','36-145242') },
      { id:9,  dt:'2023-05-19 08:40', aircraft:'548AM',  fleet:'B737M',  sub:'MAX9', type:'Fault',     loc:'JFK',          desc:'77-44640 ENGINE N2 VIBRATION IS APPROACHING LIMIT',   sys:'1200', phase:'N/A',                     tags:['CHRONIC'],         sub2:'WRN', flr:true,  logPage: LP('I','34-230131') },
      { id:12, dt:'2023-05-10 10:20', aircraft:'346AM',  fleet:'B737NG', sub:'800',  type:'Fault',     loc:'JFK',          desc:'27-02160 RADIO ALTIMETER 1 ALTITUDE DISAGREE',        sys:'1200', phase:'N/A',                     tags:['CHRONIC'],         sub2:'WRN', flr:false, logPage: LP('I','34-230131') },
      { id:15, dt:'2023-05-07 11:30', aircraft:'238AM',  fleet:'B737M',  sub:'MAX9', type:'Fault',     loc:'SEA',          desc:'34-57901 MORE THAN ONE SYSTEM HAS FAILED',            sys:'4652', phase:'N/A',                     tags:[],                  sub2:'WRN', flr:true,  logPage: LP('A','36-145242'), tooltip:'Troubleshooting' },

      // ── Logs ──────────────────────────────────────────────────────
      { id:2,  dt:'2023-06-19 12:25', aircraft:'154AM',  fleet:'B737M',  sub:'MAX9', type:'Log',       loc:'SEA',          desc:'RON OIL SERVICE DUE',                                 sys:'3611', phase:'',                        tags:['ETOPS'],           sub2:'PILOT', corrAction:'ETOPS ENG OILS SERVIC...', status:'Closed', corrSys:'0550', ci:'>90%', logPage: LP('','61020599'),  icons:['wrench'] },
      { id:6,  dt:'2023-06-09 10:30', aircraft:'328AM',  fleet:'B737NG', sub:'9ER',  type:'Log',       loc:'SFO',          desc:'SEAT 23B LIFE VEST SEAL BROKEN',                      sys:'1200', phase:'',                        tags:['RVSM','OIL'],      sub2:'LINE',  corrAction:'',                  status:'Open',   corrSys:'1200', ci:'>90%', logPage: LP('','61271973'),  icons:['gear'] },
      { id:10, dt:'2023-05-19 08:40', aircraft:'548AM',  fleet:'B737M',  sub:'MAX9', type:'Log',       loc:'JFK',          desc:'RAMP REPORTED AFT CARGO PIT DOOR OPEN',               sys:'1200', phase:'',                        tags:['CHRONIC'],         sub2:'PILOT', corrAction:'',                  status:'Open',   corrSys:'4652', ci:'>90%', logPage: LP('','61271972'),  icons:['gear'] },
      { id:13, dt:'2023-05-12 07:15', aircraft:'495AM',  fleet:'B737M',  sub:'9ER',  type:'Log',       loc:'SEA',          desc:'PERFORMED ALTERNATE DEACTIVATION OF EMERGENCY EQUIP', sys:'1200', phase:'',                        tags:['CUSTOM ALERT'],    sub2:'PILOT', corrAction:'REVERSED PROCEDURE...',status:'Closed', corrSys:'3220', ci:'>90%', logPage: LP('','61271972'),  icons:['gear'] },
      { id:16, dt:'2023-05-06 10:15', aircraft:'384AM',  fleet:'B737NG', sub:'MAX9', type:'Log',       loc:'SEA',          desc:'AFT LEFT LAV D SINK DRAIN CLOGGED',                   sys:'1200', phase:'',                        tags:['RVSM','OIL'],      sub2:'PILOT', corrAction:'CLEANED LAV D SINK DR...', status:'Open', corrSys:'1200', ci:'>90%', logPage: LP('','61172436'),  icons:[] },

      // ── Reports ───────────────────────────────────────────────────
      { id:3,  dt:'2023-06-17 12:20', aircraft:'437AM',  fleet:'B737NG', sub:'700',  type:'Report',    loc:'JFK-SFO-7632', desc:'APU ON AND OFF REPORT',                               sys:'', phase:'Climb Cruise',             tags:['CHRONIC'],         sub2:'RTM1LOW', reportDetails:[79.13,38.50], logPage: LP('','R04'), phases:['Climb','Cruise'] },
      { id:4,  dt:'2023-06-15 12:15', aircraft:'231AM',  fleet:'B737M',  sub:'MAX9', type:'Report',    loc:'JFK-SFO-7632', desc:'AIRPLANE PERFORMANCE MONITORING REPORT',               sys:'', phase:'N/A',                     tags:[],                  sub2:'RTM1LOW', reportDetails:null,          logPage: LP('','R34'), phases:[] },
      { id:7,  dt:'2023-05-30 12:45', aircraft:'195AM',  fleet:'B737M',  sub:'MAX9', type:'Report',    loc:'JFK-SFO-7632', desc:'PRESSURE AND TM EXCEEDANCE REPORT',                    sys:'', phase:'Cruise',                  tags:[],                  sub2:'RTM1LOW', reportDetails:null,          logPage: LP('','R40'), phases:['Cruise'] },
      { id:8,  dt:'2023-05-25 10:20', aircraft:'149AM',  fleet:'B737M',  sub:'MAX9', type:'Report',    loc:'JFK-SFO-7632', desc:'APU START REPORT',                                    sys:'', phase:'N/A',                     tags:[],                  sub2:'RTM1LOW', reportDetails:null,          logPage: LP('','B07'), phases:[] },
      { id:11, dt:'2023-05-21 09:25', aircraft:'435AM',  fleet:'B737M',  sub:'MAX9', type:'Report',    loc:'JFK-SFO-7632', desc:'ENGINE TAKE-OFF REPORT',                              sys:'', phase:'Climb Cruise',             tags:[],                  sub2:'RTM1LOW', reportDetails:null,          logPage: LP('','R13'), phases:['Climb','Cruise'], ci:'>90%', tooltip:'Deferral' },
      { id:14, dt:'2023-05-18 07:30', aircraft:'127AM',  fleet:'B737M',  sub:'MAX9', type:'Report',    loc:'JFK-SFO-7632', desc:'CLIMB REPORT',                                        sys:'', phase:'N/A',                     tags:[],                  sub2:'RTM1LOW', reportDetails:null,          logPage: LP('','R34'), phases:[] },
      { id:17, dt:'2023-05-17 10:25', aircraft:'239AM',  fleet:'B737M',  sub:'MAX9', type:'Report',    loc:'JFK-SFO-7632', desc:'APU START REPORT',                                    sys:'', phase:'N/A',                     tags:['ETOPS'],           sub2:'RTM1LOW', reportDetails:null,          logPage: LP('','R34'), phases:[] },
      { id:18, dt:'2023-05-10 07:45', aircraft:'756AM',  fleet:'B737M',  sub:'MAX8', type:'Report',    loc:'JFK-SFO-7632', desc:'ENG 1 HP VALVE',                                      sys:'', phase:'Climb Cruise',             tags:['ETOPS','LLM'],     sub2:'RTM1LOW', reportDetails:null,          logPage: LP('','R13'), phases:['Climb','Cruise'] },
      { id:19, dt:'2023-05-05 09:20', aircraft:'547AM',  fleet:'B737NG', sub:'9ER',  type:'Report',    loc:'JFK-SFO-7632', desc:'APU START REPORT',                                    sys:'', phase:'N/A',                     tags:['CHRONIC'],         sub2:'RTM1LOW', reportDetails:null,          logPage: LP('','B40'), phases:[] },
      { id:20, dt:'2023-05-03 12:45', aircraft:'435AM',  fleet:'B737NG', sub:'9ER',  type:'Report',    loc:'JFK-SFO-7632', desc:'ENG 1 HP VALVE',                                      sys:'', phase:'N/A',                     tags:[],                  sub2:'RTM1LOW', reportDetails:null,          logPage: LP('','B07'), phases:[] },

      // ── Fault with Component Change tooltip ───────────────────────
      { id:21, dt:'2023-06-12 11:10', aircraft:'983AM',  fleet:'B737M',  sub:'MAX9', type:'Fault',     loc:'JFK',          desc:'77-44640 ENGINE N2 VIBRATION IS APPROACHING LIMIT',   sys:'4652', phase:'N/A',                     tags:['OIL'],             sub2:'',    flr:false, logPage: LP('I','34-230131'), tooltip:'Component Change', corrSys:'', ci:'' },
    ],

    opts: {
      fleet:    ['B737NG','B737M'],
      sub:      ['700','800','9ER','MAX8','MAX9'],
      aircraft: ['437AM','154AM','231AM','435AM','149AM','572AM','328AM','195AM','548AM','346AM','756AM','239AM','238AM','384AM','547AM','495AM','435AM'],
      advFields: [
        { key:'aircraft', label:'Aircraft',    type:'text' },
        { key:'fleet',    label:'Fleet',       type:'text' },
        { key:'type',     label:'Event Type',  type:'text' },
        { key:'loc',      label:'Location',    type:'text' },
        { key:'sys',      label:'System',      type:'text' },
        { key:'phase',    label:'Phase',       type:'text' },
        { key:'status',   label:'Status',      type:'text' },
        { key:'tags',     label:'Tags',        type:'text' },
        { key:'desc',     label:'Description', type:'text' },
      ],
    },

    // Time series for timeline chart (24 points = last 24 days)
    ts: Array.from({length:24}, (_,i) => ({
      d: i,
      f: Math.round(4 + Math.sin(i/3)*3 + Math.random()*2),
      l: Math.round(6 + Math.cos(i/4)*4 + Math.random()*3),
      r: Math.round(3 + Math.sin(i/5+1)*2 + Math.random()*1.5),
    })),

    // ── Components (parameters measured & reported) ─────────────────
    // Each lives only on Reports; values render in the Report Details
    // column and can be plotted on the Timeline (up to 4, 2 per unit).
    components: [
      { id:'eoql', name:'Engine Oil Quantity Left',  unit:'Quarts', color:'#2BB3E5', base:12.6, amp:1.3, dec:1 },
      { id:'eoqr', name:'Engine Oil Quantity Right', unit:'Quarts', color:'#0E6FA8', base:11.7, amp:1.1, dec:1 },
      { id:'ppe1', name:'PNEUMATIC PRESSURE ENG 1',   unit:'psi',    color:'#FF8554', base:32.0, amp:2.8, dec:1 },
      { id:'ppe2', name:'PNEUMATIC PRESSURE ENG 2',   unit:'psi',    color:'#C7502A', base:30.2, amp:3.4, dec:1 },
      { id:'egtm', name:'EGT MARGIN ENG 1',           unit:'°C',     color:'#7747CC', base:52,   amp:6,   dec:0 },
      { id:'n1v1', name:'N1 VIBRATION ENG 1',         unit:'IPS',    color:'#916B4F', base:1.1,  amp:0.45,dec:2 },
      { id:'ffr1', name:'FUEL FLOW RATE ENG 1',       unit:'PPH',    color:'#EB0052', base:2300, amp:210, dec:0 },
      { id:'hydq', name:'HYDRAULIC QUANTITY SYS A',   unit:'%',      color:'#08612D', base:86,   amp:5,   dec:0 },
    ],
  };

  // Per-component 24-point time series for the chart
  const round = (v, d) => { const f = Math.pow(10, d); return Math.round(v * f) / f; };
  window.DVData.compSeries = {};
  window.DVData.components.forEach((c, ci) => {
    window.DVData.compSeries[c.id] = Array.from({ length: 24 }, (_, i) =>
      round(c.base + Math.sin(i / 3.2 + ci) * c.amp + (Math.random() - 0.5) * c.amp * 0.5, c.dec)
    );
  });

  // Per-report component readings (shown in Report Details).
  // Reports carry a VARIED subset of components — and some carry none —
  // so filtering by a component meaningfully narrows the report list.
  window.DVData.events.forEach((ev, idx) => {
    if (ev.type !== 'Report') return;
    ev.comps = {};
    if (idx % 4 === 1) return; // ~1 in 4 reports has no component data
    window.DVData.components.forEach((c, ci) => {
      const include = c.id === 'eoql' || c.id === 'eoqr' || (idx + ci) % 2 === 0;
      if (include) ev.comps[c.id] = round(c.base + (Math.random() - 0.5) * c.amp * 1.6, c.dec);
    });
  });
})();
