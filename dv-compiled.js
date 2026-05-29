// dv-bundle

;
(function () {
  // dv-ui.jsx — Icons + base UI primitives
  var {
    useState,
    useRef,
    useEffect
  } = React;

  // ── SVG Icons ──────────────────────────────────────────────────────
  const IcGrid = ({
    s = 20,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "6",
    height: "6",
    rx: "1.2",
    stroke: c,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "11",
    y: "3",
    width: "6",
    height: "6",
    rx: "1.2",
    stroke: c,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "11",
    width: "6",
    height: "6",
    rx: "1.2",
    stroke: c,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "11",
    y: "11",
    width: "6",
    height: "6",
    rx: "1.2",
    stroke: c,
    strokeWidth: "1.5"
  }));
  const IcLayers = ({
    s = 20,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2.5 6L10 10L17.5 6L10 2Z",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 10L10 14L17.5 10",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 14L10 18L17.5 14",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }));
  const IcHeart = ({
    s = 20,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 16.5C10 16.5 3 12.5 3 7.5C3 5 5 3 7.5 3C9 3 10 4 10 4C10 4 11 3 12.5 3C15 3 17 5 17 7.5C17 12.5 10 16.5 10 16.5Z",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }));
  const IcLogList = ({
    s = 20,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "5",
    x2: "16",
    y2: "5",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "10",
    x2: "16",
    y2: "10",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "15",
    x2: "16",
    y2: "15",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "3.5",
    cy: "5",
    r: "1",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "3.5",
    cy: "10",
    r: "1",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "3.5",
    cy: "15",
    r: "1",
    fill: c
  }));
  const IcClipboard = ({
    s = 20,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4.5",
    y: "4",
    width: "11",
    height: "13.5",
    rx: "1.5",
    stroke: c,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "7",
    y: "2.5",
    width: "6",
    height: "3",
    rx: "0.6",
    stroke: c,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "7.5",
    y1: "9",
    x2: "12.5",
    y2: "9",
    stroke: c,
    strokeWidth: "1.3",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "7.5",
    y1: "12",
    x2: "12.5",
    y2: "12",
    stroke: c,
    strokeWidth: "1.3",
    strokeLinecap: "round"
  }));
  const IcDatabase = ({
    s = 20,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "10",
    cy: "5",
    rx: "6",
    ry: "2.2",
    stroke: c,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 5v4c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2V5",
    stroke: c,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 9v4c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2V9",
    stroke: c,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 13v2c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2v-2",
    stroke: c,
    strokeWidth: "1.5"
  }));
  const IcWarnTri = ({
    s = 20,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 3L17.5 16.5H2.5L10 3Z",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "8",
    x2: "10",
    y2: "12",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "14.5",
    r: "0.8",
    fill: c
  }));
  const IcPlane = ({
    s = 20,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2.5L11.5 9L18 11L11.5 12L10 18L8.5 12L2 11L8.5 9L10 2.5Z",
    stroke: c,
    strokeWidth: "1.4",
    strokeLinejoin: "round"
  }));
  const IcEngine = ({
    s = 20,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "6.5",
    stroke: c,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "1.5",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 3.5v3M10 13.5v3M3.5 10h3M13.5 10h3M5.5 5.5l2 2M12.5 12.5l2 2M5.5 14.5l2-2M12.5 7.5l2-2",
    stroke: c,
    strokeWidth: "1.4",
    strokeLinecap: "round"
  }));
  const IcWrench = ({
    s = 20,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13 2.5a4 4 0 1 0 4 4 4 4 0 0 0-1 .25L13.5 4.25l-1.5 1.5L14 8.25a4 4 0 0 0-1-5.75ZM12.5 7.5L4 16l2 2 8.5-8.5",
    stroke: c,
    strokeWidth: "1.4",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }));
  const IcBars = ({
    s = 20,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "11",
    width: "3",
    height: "6",
    rx: "0.5",
    stroke: c,
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8.5",
    y: "7",
    width: "3",
    height: "10",
    rx: "0.5",
    stroke: c,
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "4",
    width: "3",
    height: "13",
    rx: "0.5",
    stroke: c,
    strokeWidth: "1.4"
  }));
  const IcHand = ({
    s = 20,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 4v6M11 4v6M14 6v4M8 10v5a3 3 0 0 0 6 0v-5",
    stroke: c,
    strokeWidth: "1.4",
    strokeLinecap: "round"
  }));
  const IcAOG = ({
    s = 20,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 2.5L12 8L17.5 9L13 10L14 16L10 12L6 16L7 10L2.5 9L8 8L11 2.5Z",
    stroke: c,
    strokeWidth: "1.3",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "14",
    r: "2.2",
    fill: c
  }));
  const IcPanelCollapse = ({
    s = 20,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "3.5",
    width: "15",
    height: "13",
    rx: "1.5",
    stroke: c,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "3.5",
    x2: "8",
    y2: "16.5",
    stroke: c,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 8L11.5 10L14 12",
    stroke: c,
    strokeWidth: "1.3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  const IcLogo = ({
    s = 24,
    c = '#000'
  }) =>
  /*#__PURE__*/
  // Stylised airline wing / chevron
  React.createElement("svg", {
    width: s * 1.2,
    height: s,
    viewBox: "0 0 30 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 18 C 6 14, 11 11, 17 9 L 28 6 L 17 12 C 11 14, 6 16, 2 18 Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 21 C 9 18, 14 15, 20 13 L 26 11 L 20 15 C 14 16, 9 19, 5 21 Z",
    fill: c,
    opacity: "0.55"
  }));
  const IcChevDown = ({
    s = 16,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 6l4 4 4-4",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  const IcChevRight = ({
    s = 16,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 4l4 4-4 4",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  const IcChevLeft = ({
    s = 16,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 4l-4 4 4 4",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  const IcX = ({
    s = 16,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l8 8M12 4l-8 8",
    stroke: c,
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }));
  const IcPlus = ({
    s = 16,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 3v10M3 8h10",
    stroke: c,
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }));
  const IcSearch = ({
    s = 16,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "4.5",
    stroke: c,
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 10.5L14 14",
    stroke: c,
    strokeWidth: "1.4",
    strokeLinecap: "round"
  }));
  const IcFilterLines = ({
    s = 16,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "5",
    x2: "14",
    y2: "5",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "8",
    x2: "12",
    y2: "8",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "11",
    x2: "10",
    y2: "11",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }));
  const IcDots = ({
    s = 16,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "4",
    cy: "8",
    r: "1.3",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "1.3",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "1.3",
    fill: c
  }));
  const IcDotsVert = ({
    s = 16,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "3.5",
    r: "1.3",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "1.3",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "12.5",
    r: "1.3",
    fill: c
  }));
  const IcBell = ({
    s = 20,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2.5a5 5 0 0 0-5 5V12l-1.4 1.7a.5.5 0 0 0 .4.8h12a.5.5 0 0 0 .4-.8L15 12V7.5a5 5 0 0 0-5-5Z",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 16.5a2 2 0 0 0 4 0",
    stroke: c,
    strokeWidth: "1.5"
  }));
  const IcCaretUp = ({
    s = 14,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 9l4-4 4 4",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  const IcCaretDown = ({
    s = 14,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 5l4 4 4-4",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  const IcTrendUp = ({
    s = 14,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 9.5L6 6.5L8 8L11 4.5",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 4.5H11.5V7.5",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  const IcTrendDown = ({
    s = 14,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 4.5L6 7.5L8 6L11 9.5",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 9.5H11.5V6.5",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  const IcSortUpDown = ({
    s = 12,
    c = '#BBBBBB'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 2L8.5 5H3.5L6 2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 10L3.5 7H8.5L6 10Z",
    fill: c
  }));
  const IcStarFill = ({
    s = 15,
    c = '#FFB81F'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 15 15",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7.5 1.5L9.4 5.4L13.5 6L10.5 8.9L11.3 13L7.5 11L3.7 13L4.5 8.9L1.5 6L5.6 5.4L7.5 1.5Z",
    fill: c
  }));
  const IcStarOutline = ({
    s = 15,
    c = '#CCCCCC'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 15 15",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7.5 1.5L9.4 5.4L13.5 6L10.5 8.9L11.3 13L7.5 11L3.7 13L4.5 8.9L1.5 6L5.6 5.4L7.5 1.5Z",
    stroke: c,
    strokeWidth: "1.2",
    strokeLinejoin: "round"
  }));
  const IcDoc = ({
    s = 15,
    c = '#BBBBBB'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 15 15",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 2h5l3 3v8H4V2Z",
    stroke: c,
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 2v3h3",
    stroke: c,
    strokeWidth: "1.2"
  }));
  const IcExtLink = ({
    s = 14,
    c = '#888'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 2H2v10h10V9",
    stroke: c,
    strokeWidth: "1.3",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 2h4v4",
    stroke: c,
    strokeWidth: "1.3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 7l5-5",
    stroke: c,
    strokeWidth: "1.3",
    strokeLinecap: "round"
  }));
  const IcDownload = ({
    s = 14,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 2v7M4 6l3 3 3-3",
    stroke: c,
    strokeWidth: "1.3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 11h9",
    stroke: c,
    strokeWidth: "1.3",
    strokeLinecap: "round"
  }));
  const IcSliders = ({
    s = 14,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "4",
    x2: "12",
    y2: "4",
    stroke: c,
    strokeWidth: "1.3",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "10",
    x2: "12",
    y2: "10",
    stroke: c,
    strokeWidth: "1.3",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "4",
    r: "1.4",
    fill: "#fff",
    stroke: c,
    strokeWidth: "1.3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "10",
    r: "1.4",
    fill: "#fff",
    stroke: c,
    strokeWidth: "1.3"
  }));
  const IcRows = ({
    s = 14,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "3",
    width: "10",
    height: "2.2",
    rx: "0.6",
    stroke: c,
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "8.8",
    width: "10",
    height: "2.2",
    rx: "0.6",
    stroke: c,
    strokeWidth: "1.2"
  }));
  const IcCollapseChart = ({
    s = 16,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 7L7 7L7 3M13 9L9 9L9 13",
    stroke: c,
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  const IcCog = ({
    s = 14,
    c = 'currentColor'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "2",
    stroke: c,
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 1.5v1.8M7 10.7v1.8M1.5 7h1.8M10.7 7h1.8M3 3l1.3 1.3M9.7 9.7L11 11M11 3L9.7 4.3M4.3 9.7L3 11",
    stroke: c,
    strokeWidth: "1.2",
    strokeLinecap: "round"
  }));

  // ── Toggle switch ──────────────────────────────────────────────────
  const DVSwitch = ({
    on,
    onClick,
    color
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      width: 32,
      height: 18,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      background: on ? color || 'var(--dv-accent)' : '#E6E6E6',
      position: 'relative',
      padding: 0,
      transition: 'background 0.15s ease',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 16 : 2,
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: '#fff',
      transition: 'left 0.15s ease',
      boxShadow: '0 1px 2px rgba(0,0,0,0.15)'
    }
  }));

  // ── Button ─────────────────────────────────────────────────────────
  const DVBtn = ({
    variant = 'secondary',
    size = 'm',
    children,
    onClick,
    icon,
    active,
    disabled,
    style = {}
  }) => {
    const [hov, setHov] = useState(false);
    const base = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      cursor: disabled ? 'default' : 'pointer',
      borderRadius: 4,
      fontFamily: 'inherit',
      letterSpacing: '-0.01em',
      outline: 'none',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      opacity: disabled ? 0.5 : 1,
      transition: 'background 0.1s, border-color 0.1s'
    };
    const variants = {
      primary: {
        background: hov ? 'var(--dv-accent-dark)' : 'var(--dv-accent)',
        color: '#fff',
        border: '1px solid var(--dv-accent)',
        fontFamily: "'Source Sans 3', sans-serif",
        fontWeight: 700
      },
      secondary: {
        background: active ? 'var(--dv-accent-bg)' : hov ? '#F5F5FF' : '#fff',
        color: active ? 'var(--dv-accent)' : '#000',
        border: active ? '1px solid var(--dv-accent-bg)' : '1px solid #E6E6E6'
      },
      ghost: {
        background: active ? '#F2F2F2' : hov ? '#F7F7F7' : 'transparent',
        color: '#000',
        border: '1px solid transparent'
      },
      inline: {
        background: 'transparent',
        color: active ? '#4547FF' : '#555555',
        border: '1px solid transparent',
        padding: 0
      },
      danger: {
        background: hov ? '#c9003d' : '#EB0052',
        color: '#fff',
        border: '1px solid #EB0052'
      }
    };
    const sizes = {
      l: {
        height: 40,
        padding: '0 20px',
        fontSize: 14
      },
      m: {
        height: 32,
        padding: '0 12px',
        fontSize: 14
      },
      s: {
        height: 26,
        padding: '0 8px',
        fontSize: 12
      },
      xs: {
        height: 22,
        padding: '0 6px',
        fontSize: 11
      }
    };
    const v = variants[variant] || variants.secondary;
    const sz = sizes[size] || sizes.m;
    return /*#__PURE__*/React.createElement("button", {
      onClick: disabled ? null : onClick,
      disabled: disabled,
      onMouseEnter: () => setHov(true),
      onMouseLeave: () => setHov(false),
      style: {
        ...base,
        ...v,
        ...sz,
        ...style
      }
    }, icon && icon, children);
  };

  // ── Chip with optional inline value pill ────────────────────────────
  const DVChip = ({
    label,
    value,
    onClick,
    onClear
  }) => {
    const [hov, setHov] = useState(false);
    const selected = !!value;
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      onMouseEnter: () => setHov(true),
      onMouseLeave: () => setHov(false),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 32,
        borderRadius: 6,
        cursor: 'pointer',
        border: '1px solid #E6E6E6',
        padding: selected ? '3px 4px 3px 10px' : '0 12px',
        background: hov ? '#FAFAFA' : '#fff',
        fontFamily: 'inherit',
        letterSpacing: '-0.01em',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#000',
        fontSize: 14,
        whiteSpace: 'nowrap'
      }
    }, label), selected && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 3,
        height: 24,
        padding: '0 8px',
        borderRadius: 4,
        background: 'var(--dv-accent-bg)',
        color: 'var(--dv-accent)',
        fontSize: 13,
        fontWeight: 500
      }
    }, value, onClear && /*#__PURE__*/React.createElement("span", {
      onClick: e => {
        e.stopPropagation();
        onClear();
      },
      style: {
        display: 'flex',
        cursor: 'pointer',
        marginLeft: 2
      }
    }, /*#__PURE__*/React.createElement(IcX, {
      s: 11,
      c: "var(--dv-accent)"
    }))));
  };

  // ── Status / Type / Tag ────────────────────────────────────────────
  const DVStatus = ({
    status
  }) => {
    const cfg = {
      Open: {
        c: '#000',
        bg: '#F5F5F5',
        b: '#E6E6E6'
      },
      Worked: {
        c: '#008A61',
        bg: '#E0F5EC',
        b: '#7DCFB0'
      },
      Hold: {
        c: '#916B4F',
        bg: '#EAE3DE',
        b: '#CEB9A8'
      },
      Closed: {
        c: '#AAA',
        bg: 'transparent',
        b: 'transparent'
      },
      Deferred: {
        c: '#916B4F',
        bg: '#EAE3DE',
        b: '#CEB9A8'
      }
    };
    const s = cfg[status] || cfg.Closed;
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        fontSize: 12,
        letterSpacing: '-0.01em',
        padding: '2px 8px',
        borderRadius: 4,
        whiteSpace: 'nowrap',
        color: s.c,
        background: s.bg,
        border: `1px solid ${s.b}`
      }
    }, status);
  };

  // Solid colour dots used in type labels & cards
  const TYPE_DOTS = {
    Fault: '#7A5440',
    // brown
    Log: '#2BB3E5',
    // cyan
    Report: '#FF8554',
    // orange
    Component: '#008A61' // green
  };
  const DVTypeLabel = ({
    type,
    sub,
    subColor
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: TYPE_DOTS[type] || '#888'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: '#000',
      letterSpacing: '-0.01em'
    }
  }, type), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: subColor || '#888',
      letterSpacing: 0,
      textTransform: 'uppercase',
      marginLeft: 1
    }
  }, sub));
  const DVTag = ({
    tag
  }) => {
    const cfg = {
      ETOPS: {
        c: '#4547FF',
        bg: '#ECEDFF'
      },
      CHRONIC: {
        c: '#EB0052',
        bg: '#FEE8EE'
      },
      OIL: {
        c: '#916B4F',
        bg: '#EAE3DE'
      },
      RVSM: {
        c: '#008A61',
        bg: '#E0F5EC'
      },
      'CUSTOM ALERT': {
        c: '#B06800',
        bg: '#FFF3D9'
      },
      LLM: {
        c: '#7747CC',
        bg: '#F3EBFF'
      }
    };
    const t = cfg[tag] || {
      c: '#555',
      bg: '#F2F2F2'
    };
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        fontSize: 11,
        letterSpacing: '-0.01em',
        fontWeight: 500,
        padding: '2px 6px',
        borderRadius: 3,
        color: t.c,
        background: t.bg,
        whiteSpace: 'nowrap'
      }
    }, tag);
  };

  // ── Simple dropdown ─────────────────────────────────────────────────
  const DVDropdown = ({
    items,
    onSelect,
    selected = [],
    multi = false
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 4px)',
      left: 0,
      zIndex: 400,
      background: '#fff',
      border: '1px solid #E6E6E6',
      borderRadius: 4,
      boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
      minWidth: 160,
      maxHeight: 240,
      overflowY: 'auto',
      padding: '4px 0'
    }
  }, items.map(item => {
    const sel = selected.includes(item);
    return /*#__PURE__*/React.createElement("div", {
      key: item,
      onClick: () => onSelect(item),
      style: {
        padding: '7px 12px',
        cursor: 'pointer',
        fontSize: 14,
        letterSpacing: '-0.01em',
        color: sel ? 'var(--dv-accent)' : '#000',
        background: sel ? 'var(--dv-accent-bg)' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, multi && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 13,
        height: 13,
        borderRadius: 3,
        flexShrink: 0,
        border: `1.5px solid ${sel ? '#4547FF' : '#CCC'}`,
        background: sel ? '#4547FF' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, sel && /*#__PURE__*/React.createElement(IcX, {
      s: 9,
      c: "#fff"
    })), item);
  }));

  // ── Sidebar nav ─────────────────────────────────────────────────────
  const NAV_ITEMS = [{
    id: 'dashboard',
    label: 'Dashboard',
    Icon: IcGrid
  }, {
    id: 'active-cases',
    label: 'Active Cases',
    Icon: IcLayers,
    badge: '5000+'
  }, {
    id: 'fleet-health',
    label: 'Fleet Health',
    Icon: IcHeart
  }, {
    id: 'log-viewer',
    label: 'Log Viewer',
    Icon: IcLogList
  }, {
    id: 'detail-viewer',
    label: 'Detail Viewer',
    Icon: IcClipboard
  }, {
    id: 'data-viewer',
    label: 'Data Viewer',
    Icon: IcDatabase
  }, {
    id: 'fault-profiles',
    label: 'Fault Profiles',
    Icon: IcWarnTri,
    dim: true
  }, {
    id: 'aircraft-profiles',
    label: 'Aircraft Profiles',
    Icon: IcPlane,
    dim: true
  }, {
    id: 'engine-profiles',
    label: 'Engine Profiles',
    Icon: IcEngine
  }, {
    id: 'part-profiles',
    label: 'Part Profiles',
    Icon: IcWrench
  }, {
    id: 'metrics',
    label: 'Metrics',
    Icon: IcBars,
    dim: true
  }];
  const DVSidebar = ({
    activePage = 'data-viewer',
    collapsed = false
  }) => {
    const [spotlight, setSpotlight] = useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: collapsed ? 60 : 240,
        background: '#fff',
        borderRight: '1px solid #EEEEEE',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        height: '100%',
        overflow: 'hidden',
        transition: 'width 0.15s ease'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        padding: '14px 12px',
        overflowY: 'auto'
      }
    }, NAV_ITEMS.map(({
      id,
      label,
      Icon,
      badge,
      dim
    }) => {
      const active = id === activePage;
      const baseColor = dim ? '#C8C8C8' : active ? '#000' : '#666';
      return /*#__PURE__*/React.createElement("div", {
        key: id,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          height: 40,
          padding: '0 12px',
          borderRadius: 6,
          cursor: 'pointer',
          marginBottom: 2,
          background: active ? '#F5F5F5' : 'transparent',
          color: baseColor
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        s: 18,
        c: baseColor
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "'Source Sans 3', sans-serif",
          fontWeight: active ? 600 : 500,
          fontSize: 14,
          letterSpacing: '-0.005em',
          color: baseColor,
          flex: 1
        }
      }, label), badge && /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 10,
          fontWeight: 700,
          padding: '2px 7px',
          borderRadius: 99,
          background: '#EB0052',
          color: '#fff',
          fontFamily: "'Source Sans 3', sans-serif",
          letterSpacing: 0
        }
      }, badge));
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: '#F2F2F2',
        margin: '12px 8px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        height: 40,
        padding: '0 12px',
        borderRadius: 6,
        cursor: 'pointer',
        marginBottom: 2,
        color: '#666'
      }
    }, /*#__PURE__*/React.createElement(IcHand, {
      s: 18,
      c: "#666"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Source Sans 3', sans-serif",
        fontWeight: 500,
        fontSize: 14,
        color: '#666',
        flex: 1,
        letterSpacing: '-0.005em'
      }
    }, "Spotlight"), /*#__PURE__*/React.createElement(DVSwitch, {
      on: spotlight,
      onClick: () => setSpotlight(s => !s)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        height: 40,
        padding: '0 12px',
        borderRadius: 6,
        cursor: 'pointer',
        color: '#666'
      }
    }, /*#__PURE__*/React.createElement(IcAOG, {
      s: 18,
      c: "#666"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Source Sans 3', sans-serif",
        fontWeight: 500,
        fontSize: 14,
        color: '#666',
        letterSpacing: '-0.005em'
      }
    }, "AOG"))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 12px 16px'
      }
    }, /*#__PURE__*/React.createElement("button", {
      style: {
        width: '100%',
        height: 44,
        borderRadius: 8,
        border: 'none',
        background: 'var(--dv-accent)',
        color: '#fff',
        fontFamily: "'Source Sans 3', sans-serif",
        fontWeight: 600,
        fontSize: 14,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        cursor: 'pointer',
        letterSpacing: '-0.005em',
        boxShadow: '0 1px 2px rgba(69,71,255,0.2)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.2)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(IcPlus, {
      s: 12,
      c: "#fff"
    })), "Add Case")));
  };

  // ── App header ──────────────────────────────────────────────────────
  const DVHeader = ({
    onToggleSidebar
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      background: '#fff',
      borderBottom: '1px solid #EEEEEE',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      gap: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggleSidebar,
    style: {
      width: 32,
      height: 32,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement(IcPanelCollapse, {
    s: 20,
    c: "#000"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Source Sans 3', sans-serif",
      fontWeight: 600,
      fontSize: 17,
      letterSpacing: '-0.01em',
      color: '#000',
      whiteSpace: 'nowrap'
    }
  }, "Data Viewer")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: 36,
      height: 36,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(IcBell, {
    s: 20,
    c: "#000"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 7,
      right: 8,
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: '#EB0052',
      border: '1.5px solid #fff'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: '#1F2937',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: "'Source Sans 3', sans-serif",
      cursor: 'pointer',
      letterSpacing: 0
    }
  }, "WS"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: -1,
      right: -1,
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: '#10B981',
      border: '2px solid #fff'
    }
  }))));
  Object.assign(window, {
    // Icons
    IcGrid,
    IcLayers,
    IcHeart,
    IcLogList,
    IcClipboard,
    IcDatabase,
    IcWarnTri,
    IcPlane,
    IcEngine,
    IcWrench,
    IcBars,
    IcHand,
    IcAOG,
    IcPanelCollapse,
    IcLogo,
    IcChevDown,
    IcChevRight,
    IcChevLeft,
    IcX,
    IcPlus,
    IcSearch,
    IcFilterLines,
    IcDots,
    IcDotsVert,
    IcBell,
    IcCaretUp,
    IcCaretDown,
    IcTrendUp,
    IcTrendDown,
    IcSortUpDown,
    IcStarFill,
    IcStarOutline,
    IcDoc,
    IcExtLink,
    IcDownload,
    IcSliders,
    IcRows,
    IcCollapseChart,
    IcCog,
    // Components
    DVSwitch,
    DVBtn,
    DVChip,
    DVStatus,
    DVTypeLabel,
    DVTag,
    DVDropdown,
    DVSidebar,
    DVHeader,
    TYPE_DOTS
  });
})();
;
(function () {
  // dv-datepicker.jsx — Period chip with dual-calendar date picker
  var {
    useState,
    useEffect,
    useRef
  } = React;

  // ── Constants ────────────────────────────────────────────────────────
  const DP_PRESETS = [{
    k: 'today',
    v: 'Today'
  }, {
    k: 'week',
    v: 'Last Week'
  }, {
    k: 'month',
    v: 'Last Month'
  }, {
    k: 'year',
    v: 'Last Year'
  }];
  const DP_DEFAULT = 'today';
  const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const DAY_HEADS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  // ── Date helpers ─────────────────────────────────────────────────────
  function toDay(d) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }
  function sameDay(a, b) {
    if (!a || !b) return false;
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
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
    const last = new Date(year, month + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < first; i++) cells.push(null);
    for (let d = 1; d <= last; d++) cells.push(d);
    return cells;
  }
  function getPresetRange(key) {
    const today = toDay(new Date());
    if (key === 'today') {
      return {
        s: today,
        e: today
      };
    }
    if (key === 'week') {
      const s = toDay(new Date());
      s.setDate(s.getDate() - 6);
      return {
        s,
        e: today
      };
    }
    if (key === 'month') {
      const s = toDay(new Date());
      s.setDate(s.getDate() - 29);
      return {
        s,
        e: today
      };
    }
    if (key === 'year') {
      const s = toDay(new Date());
      s.setDate(s.getDate() - 364);
      return {
        s,
        e: today
      };
    }
    return null;
  }
  function dpFmtDate(d) {
    if (!d) return '';
    return String(MONTH_NAMES[d.getMonth()].slice(0, 3)) + ' ' + String(d.getDate());
  }

  // ── Single month calendar ─────────────────────────────────────────────
  const CalGrid = ({
    year,
    month,
    rangeS,
    rangeE,
    hover,
    onDay,
    onHover
  }) => {
    const cells = monthCells(Number(year), Number(month));
    // effective end: use hover only when a start is selected and end isn't yet
    const effE = rangeS && !rangeE && hover ? hover : rangeE || null;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 188
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Source Sans 3', sans-serif",
        fontWeight: 600,
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 8,
        color: '#000',
        letterSpacing: '-0.01em'
      }
    }, String(MONTH_NAMES[month]), " ", String(year)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(7,1fr)',
        rowGap: '2px'
      }
    }, DAY_HEADS.map(h => /*#__PURE__*/React.createElement("div", {
      key: h,
      style: {
        textAlign: 'center',
        fontSize: 11,
        color: '#BBB',
        fontWeight: 600,
        fontFamily: "'Source Sans 3', sans-serif",
        paddingBottom: 4
      }
    }, String(h))), cells.map((d, i) => {
      if (d === null) return /*#__PURE__*/React.createElement("div", {
        key: 'e' + i
      });
      const date = new Date(year, month, d);
      const edge = isEdge(date, rangeS, effE);
      const mid = !edge && inRange(date, rangeS, effE);

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
      return /*#__PURE__*/React.createElement("div", {
        key: String(year) + '-' + String(month) + '-' + String(d),
        onClick: () => onDay(toDay(date)),
        onMouseEnter: () => onHover(toDay(date)),
        onMouseLeave: () => onHover(null),
        style: {
          textAlign: 'center',
          padding: '5px 0',
          cursor: 'pointer',
          borderRadius: br,
          background: bg,
          color: fg,
          fontWeight: fw,
          fontSize: 13,
          fontFamily: "'Source Sans 3', sans-serif",
          userSelect: 'none'
        }
      }, String(d));
    })));
  };

  // ── Date picker popup ─────────────────────────────────────────────────
  const DatePickerPopup = ({
    anchorPos,
    presetKey,
    onPreset,
    onRange,
    onClose
  }) => {
    const now = new Date();
    const initLm = now.getMonth() > 0 ? now.getMonth() - 1 : 11;
    const initLy = now.getMonth() > 0 ? now.getFullYear() : now.getFullYear() - 1;
    const [lm, setLm] = useState(initLm);
    const [ly, setLy] = useState(initLy);
    const [rangeS, setRangeS] = useState(null);
    const [rangeE, setRangeE] = useState(null);
    const [hover, setHover] = useState(null);
    const [active, setActive] = useState(presetKey && presetKey !== 'custom' ? presetKey : 'today');
    const popRef = useRef();
    const rm = lm === 11 ? 0 : lm + 1;
    const ry = lm === 11 ? ly + 1 : ly;
    const prevMo = () => {
      if (lm === 0) {
        setLm(11);
        setLy(y => y - 1);
      } else setLm(m => m - 1);
    };
    const nextMo = () => {
      if (lm === 11) {
        setLm(0);
        setLy(y => y + 1);
      } else setLm(m => m + 1);
    };

    // Determine displayed range
    const pr = active !== 'custom' ? getPresetRange(active) : null;
    const displayS = rangeS ? rangeS : pr ? pr.s : null;
    const displayE = rangeE ? rangeE : pr ? pr.e : null;
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
    const hintText = showingHint ? String(MONTH_NAMES[rangeS.getMonth()].slice(0, 3)) + ' ' + String(rangeS.getDate()) + ' — pick end date' : '';
    return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
      ref: popRef,
      style: {
        position: 'fixed',
        top: anchorPos.top,
        left: anchorPos.left,
        zIndex: 9999,
        background: '#fff',
        border: '1px solid #E6E6E6',
        borderRadius: 10,
        boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
        padding: '12px 14px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 4,
        marginBottom: 14,
        paddingBottom: 12,
        borderBottom: '1px solid #F0F0F0'
      }
    }, DP_PRESETS.map(({
      k,
      v
    }) => {
      const act = active === k;
      return /*#__PURE__*/React.createElement("button", {
        key: k,
        onClick: () => pickPreset(k),
        style: {
          flex: 1,
          height: 30,
          border: '1px solid ' + (act ? 'var(--dv-accent)' : '#E6E6E6'),
          borderRadius: 6,
          cursor: 'pointer',
          fontFamily: "'Source Sans 3', sans-serif",
          fontSize: 13,
          fontWeight: act ? 600 : 500,
          letterSpacing: '-0.01em',
          background: act ? 'var(--dv-accent-bg)' : '#fff',
          color: act ? 'var(--dv-accent)' : '#555',
          transition: 'all 0.1s',
          whiteSpace: 'nowrap'
        }
      }, String(v));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: prevMo,
      style: {
        width: 28,
        height: 28,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        flexShrink: 0,
        marginTop: 22
      },
      onMouseEnter: e => e.currentTarget.style.background = '#F2F2F2',
      onMouseLeave: e => e.currentTarget.style.background = 'transparent'
    }, /*#__PURE__*/React.createElement(IcChevLeft, {
      s: 16,
      c: "#555"
    })), /*#__PURE__*/React.createElement(CalGrid, {
      year: ly,
      month: lm,
      rangeS: displayS,
      rangeE: displayE,
      hover: hover,
      onDay: pickDay,
      onHover: setHover
    }), /*#__PURE__*/React.createElement(CalGrid, {
      year: ry,
      month: rm,
      rangeS: displayS,
      rangeE: displayE,
      hover: hover,
      onDay: pickDay,
      onHover: setHover
    }), /*#__PURE__*/React.createElement("button", {
      onClick: nextMo,
      style: {
        width: 28,
        height: 28,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        flexShrink: 0,
        marginTop: 22
      },
      onMouseEnter: e => e.currentTarget.style.background = '#F2F2F2',
      onMouseLeave: e => e.currentTarget.style.background = 'transparent'
    }, /*#__PURE__*/React.createElement(IcChevRight, {
      s: 16,
      c: "#555"
    }))), showingHint ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        fontSize: 12,
        color: '#AAA',
        textAlign: 'center',
        fontFamily: "'Source Sans 3', sans-serif",
        letterSpacing: '-0.01em'
      }
    }, hintText) : null), document.body);
  };

  // ── Period chip ───────────────────────────────────────────────────────
  const PeriodChip = ({
    value,
    onChange
  }) => {
    const [open, setOpen] = useState(false);
    const [pos, setPos] = useState({
      top: 0,
      left: 0
    });
    const [customLabel, setCustomLabel] = useState(null);
    const ref = useRef();
    const isDefault = (!value || value === DP_DEFAULT) && !customLabel;
    const presetLabel = (DP_PRESETS.find(p => p.k === value) || {}).v;
    const chipVal = customLabel || presetLabel || 'Today';
    const handleOpen = () => {
      if (ref.current) {
        const r = ref.current.getBoundingClientRect();
        setPos({
          top: r.bottom + 4,
          left: r.left
        });
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
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      style: {
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(DVChip, {
      label: "Period",
      value: String(chipVal),
      onClick: handleOpen,
      onClear: isDefault ? null : handleClear
    }), open ? /*#__PURE__*/React.createElement(DatePickerPopup, {
      anchorPos: pos,
      presetKey: value,
      onPreset: handlePreset,
      onRange: handleRange,
      onClose: () => setOpen(false)
    }) : null);
  };
  Object.assign(window, {
    PeriodChip
  });
})();
;
(function () {
  // dv-filters.jsx
  var {
    useState,
    useRef,
    useEffect,
    useLayoutEffect,
    useMemo
  } = React;

  // ── Shared styles ────────────────────────────────────────────────────
  const DD_ITEM = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    height: 38,
    padding: '0 12px',
    borderRadius: 6,
    cursor: 'pointer',
    fontFamily: "'Source Sans 3', sans-serif",
    fontSize: 14,
    letterSpacing: '-0.01em',
    transition: 'background 0.1s',
    userSelect: 'none'
  };
  const DD_PANEL = {
    background: '#fff',
    borderRadius: 8,
    boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.04)',
    padding: 6,
    fontFamily: "'Source Sans 3', sans-serif"
  };

  // ── Quick filter data ────────────────────────────────────────────────
  const QUICK_FILTER_MENU = {
    Faults: [{
      key: 'sys',
      label: 'System'
    }, {
      key: 'phase',
      label: 'Phase'
    }, {
      key: 'loc',
      label: 'Location'
    }],
    Logs: [{
      key: 'sys',
      label: 'System'
    }, {
      key: 'sub2',
      label: 'Type'
    }, {
      key: 'status',
      label: 'Status'
    }, {
      key: 'loc',
      label: 'Location'
    }],
    Reports: [{
      key: 'sub2',
      label: 'Type'
    }, {
      key: 'loc',
      label: 'Location'
    }],
    Components: [{
      key: 'comp',
      label: 'Component'
    }]
  };
  // Categories whose values are shown immediately (no attribute step)
  const FLAT_CATS = {
    Components: {
      key: 'comp',
      label: 'Component'
    }
  };
  const CAT_TO_TYPE = {
    Faults: 'Fault',
    Logs: 'Log',
    Reports: 'Report',
    Components: 'Component'
  };
  function getFieldValues(category, fieldKey) {
    // Components are parameters, not events — list their names directly
    if (category === 'Components' && fieldKey === 'comp') {
      return (window.DVData?.components || []).map(c => c.name);
    }
    const evType = CAT_TO_TYPE[category];
    const vals = new Set();
    (window.DVData?.events || []).forEach(ev => {
      if (ev.type !== evType) return;
      const v = ev[fieldKey];
      if (v !== null && v !== undefined && String(v).trim() !== '') vals.add(String(v));
    });
    return [...vals].sort();
  }

  // ── Cascading quick-filter menu (3 panels, flush positioning) ────────
  const QuickFilterMenu = ({
    anchorPos,
    onClose,
    onPickImmediate,
    currentFilters,
    initialCat = null,
    initialAttr = null
  }) => {
    const [activeCat, setActiveCat] = useState(initialCat);
    const [activeAttr, setActiveAttr] = useState(initialAttr || (initialCat ? FLAT_CATS[initialCat] || null : null));
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
      const fn = e => {
        if (!e.target.closest('[data-dv-qfm]')) onClose();
      };
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
    const availVals = useMemo(() => activeCat && activeAttr ? getFieldValues(activeCat, activeAttr.key) : [], [activeCat, activeAttr]);
    const existingChecked = useMemo(() => {
      if (!activeCat || !activeAttr) return [];
      const f = (currentFilters || []).find(f => f.category === activeCat && f.attr.key === activeAttr.key);
      return f ? f.values || [] : [];
    }, [activeCat, activeAttr, currentFilters]);
    const toggleVal = val => {
      if (!activeCat || !activeAttr) return;
      const next = existingChecked.includes(val) ? existingChecked.filter(v => v !== val) : [...existingChecked, val];
      onPickImmediate(activeCat, activeAttr, next);
    };
    const enterCat = cat => {
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
    const enterAttr = attr => {
      clearTimeout(attrTimer.current);
      setActiveAttr(attr);
      const el = attrItemRefs.current[attr.key];
      if (el) setP3Top(el.getBoundingClientRect().top);
    };
    const cats = Object.keys(QUICK_FILTER_MENU);
    const attrs = activeCat ? QUICK_FILTER_MENU[activeCat] : [];
    const isFlat = !!FLAT_CATS[activeCat];
    const panelStyle = {
      ...DD_PANEL,
      position: 'fixed',
      zIndex: 9999,
      minWidth: 188
    };

    // Shared checkbox value row (used for the value panel and flat categories)
    const ValueRow = val => {
      const on = existingChecked.includes(val);
      return /*#__PURE__*/React.createElement("div", {
        key: val,
        onClick: () => toggleVal(val),
        onMouseEnter: e => e.currentTarget.style.background = '#F4F4F4',
        onMouseLeave: e => e.currentTarget.style.background = on ? '#F4F5FF' : 'transparent',
        style: {
          ...DD_ITEM,
          justifyContent: 'flex-start',
          gap: 10,
          background: on ? '#F4F5FF' : 'transparent'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 15,
          height: 15,
          borderRadius: 3,
          flexShrink: 0,
          border: `1.5px solid ${on ? 'var(--dv-accent)' : '#D0D0D0'}`,
          background: on ? 'var(--dv-accent)' : '#fff',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.1s'
        }
      }, on && /*#__PURE__*/React.createElement("svg", {
        width: "9",
        height: "7",
        viewBox: "0 0 9 7",
        fill: "none"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M1 3.5L3.5 6L8 1",
        stroke: "#fff",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }))), /*#__PURE__*/React.createElement("span", {
        style: {
          color: '#000',
          fontWeight: on ? 600 : 500
        }
      }, val));
    };

    // Values-only mode: opened from an existing chip → jump straight to that
    // attribute's value list (e.g. "Logs: System" → System values).
    if (initialAttr) {
      const left = Math.min(anchorPos.left, window.innerWidth - 232);
      return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
        "data-dv-qfm": true,
        style: {
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: 'none'
        }
      }, /*#__PURE__*/React.createElement("div", {
        "data-dv-qfm": true,
        style: {
          ...panelStyle,
          top: anchorPos.top,
          left: Math.max(8, left),
          minWidth: 224,
          maxHeight: 360,
          overflowY: 'auto',
          pointerEvents: 'auto'
        }
      }, availVals.length === 0 ? /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '10px 14px',
          fontSize: 13,
          color: '#AAA',
          letterSpacing: '-0.01em'
        }
      }, "No values in data") : availVals.map(ValueRow))), document.body);
    }
    return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
      "data-dv-qfm": true,
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      ref: p1Ref,
      "data-dv-qfm": true,
      style: {
        ...panelStyle,
        top: anchorPos.top,
        left: anchorPos.left,
        pointerEvents: 'auto'
      },
      onMouseEnter: () => clearTimeout(catTimer.current),
      onMouseLeave: () => leavePanel(setActiveCat, null)
    }, cats.map(cat => {
      const active = activeCat === cat;
      return /*#__PURE__*/React.createElement("div", {
        key: cat,
        ref: el => {
          catItemRefs.current[cat] = el;
        },
        onMouseEnter: () => enterCat(cat),
        style: {
          ...DD_ITEM,
          background: active ? '#F4F4F4' : 'transparent',
          fontWeight: active ? 600 : 500,
          color: '#000'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          textAlign: 'left'
        }
      }, cat), /*#__PURE__*/React.createElement(IcChevRight, {
        s: 13,
        c: active ? '#555' : '#CCC'
      }));
    })), activeCat && (isFlat ? /*#__PURE__*/React.createElement("div", {
      ref: p2Ref,
      "data-dv-qfm": true,
      style: {
        ...panelStyle,
        top: p2Top,
        left: p2Left,
        minWidth: 224,
        maxHeight: 360,
        overflowY: 'auto',
        pointerEvents: 'auto'
      },
      onMouseEnter: () => {
        clearTimeout(catTimer.current);
        clearTimeout(attrTimer.current);
      }
    }, availVals.length === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '10px 14px',
        fontSize: 13,
        color: '#AAA',
        letterSpacing: '-0.01em'
      }
    }, "No values in data") : availVals.map(ValueRow)) : attrs.length > 0 && /*#__PURE__*/React.createElement("div", {
      ref: p2Ref,
      "data-dv-qfm": true,
      style: {
        ...panelStyle,
        top: p2Top,
        left: p2Left,
        pointerEvents: 'auto'
      },
      onMouseEnter: () => {
        clearTimeout(catTimer.current);
        clearTimeout(attrTimer.current);
      },
      onMouseLeave: () => {
        clearTimeout(attrTimer.current);
        attrTimer.current = setTimeout(() => setActiveAttr(null), 140);
      }
    }, attrs.map(attr => {
      const active = activeAttr?.key === attr.key;
      const hasVals = (currentFilters || []).some(f => f.category === activeCat && f.attr.key === attr.key && f.values.length > 0);
      return /*#__PURE__*/React.createElement("div", {
        key: attr.key,
        ref: el => {
          attrItemRefs.current[attr.key] = el;
        },
        onMouseEnter: () => {
          clearTimeout(attrTimer.current);
          enterAttr(attr);
        },
        style: {
          ...DD_ITEM,
          background: active ? '#F4F4F4' : 'transparent',
          fontWeight: active ? 600 : 500,
          color: '#000'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          textAlign: 'left'
        }
      }, attr.label), hasVals && /*#__PURE__*/React.createElement("span", {
        style: {
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'var(--dv-accent)',
          flexShrink: 0,
          marginRight: 3
        }
      }), /*#__PURE__*/React.createElement(IcChevRight, {
        s: 13,
        c: active ? '#555' : '#CCC'
      }));
    }))), activeAttr && !isFlat && /*#__PURE__*/React.createElement("div", {
      "data-dv-qfm": true,
      style: {
        ...panelStyle,
        top: p3Top,
        left: p3Left,
        minWidth: 200,
        maxHeight: 360,
        overflowY: 'auto',
        pointerEvents: 'auto'
      },
      onMouseEnter: () => {
        clearTimeout(catTimer.current);
        clearTimeout(attrTimer.current);
      }
    }, availVals.length === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '10px 14px',
        fontSize: 13,
        color: '#AAA',
        letterSpacing: '-0.01em'
      }
    }, "No values in data") : availVals.map(ValueRow))), document.body);
  };

  // ── Chip dropdown (multi-select) ─────────────────────────────────────
  const ChipDropdown = ({
    label,
    options,
    selected,
    onChange
  }) => {
    const [open, setOpen] = useState(false);
    const [pos, setPos] = useState({
      top: 0,
      left: 0,
      width: 160
    });
    const chipRef = useRef();
    const sel = Array.isArray(selected) ? selected : selected ? [selected] : [];
    useEffect(() => {
      if (!open) return;
      const fn = e => {
        if (!chipRef.current?.contains(e.target) && !e.target.closest('[data-dv-portal]')) setOpen(false);
      };
      document.addEventListener('mousedown', fn);
      return () => document.removeEventListener('mousedown', fn);
    }, [open]);
    const handleOpen = () => {
      if (chipRef.current) {
        const r = chipRef.current.getBoundingClientRect();
        setPos({
          top: r.bottom + 4,
          left: r.left,
          width: Math.max(r.width, 160)
        });
      }
      setOpen(o => !o);
    };

    // De-dupe option keys, normalise to { k, v }
    const rawOpts = Array.isArray(options) && typeof options[0] === 'string' ? options.map(o => ({
      k: o,
      v: o
    })) : options || [];
    const labelOpts = rawOpts.filter((o, i) => rawOpts.findIndex(x => x.k === o.k) === i);
    const toggle = k => {
      onChange(sel.includes(k) ? sel.filter(x => x !== k) : [...sel, k]);
    };
    const firstLabel = sel.length ? labelOpts.find(o => o.k === sel[0])?.v || sel[0] : null;
    const displayVal = sel.length === 0 ? null : sel.length === 1 ? firstLabel : `${firstLabel} +${sel.length - 1}`;
    return /*#__PURE__*/React.createElement("div", {
      ref: chipRef,
      style: {
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(DVChip, {
      label: label,
      value: displayVal,
      onClick: handleOpen,
      onClear: sel.length ? () => onChange([]) : null
    }), open && ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
      "data-dv-portal": true,
      style: {
        ...DD_PANEL,
        position: 'fixed',
        top: pos.top,
        left: pos.left,
        minWidth: Math.max(pos.width, 188),
        maxHeight: 320,
        overflowY: 'auto',
        zIndex: 9999
      }
    }, labelOpts.map(({
      k,
      v
    }) => {
      const on = sel.includes(k);
      return /*#__PURE__*/React.createElement("div", {
        key: k,
        onClick: () => toggle(k),
        onMouseEnter: e => e.currentTarget.style.background = '#F4F4F4',
        onMouseLeave: e => e.currentTarget.style.background = on ? '#F4F5FF' : 'transparent',
        style: {
          ...DD_ITEM,
          justifyContent: 'flex-start',
          gap: 10,
          background: on ? '#F4F5FF' : 'transparent'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 15,
          height: 15,
          borderRadius: 3,
          flexShrink: 0,
          border: `1.5px solid ${on ? 'var(--dv-accent)' : '#D0D0D0'}`,
          background: on ? 'var(--dv-accent)' : '#fff',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.1s'
        }
      }, on && /*#__PURE__*/React.createElement("svg", {
        width: "9",
        height: "7",
        viewBox: "0 0 9 7",
        fill: "none"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M1 3.5L3.5 6L8 1",
        stroke: "#fff",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }))), /*#__PURE__*/React.createElement("span", {
        style: {
          color: '#000',
          fontWeight: on ? 600 : 500
        }
      }, v));
    })), document.body));
  };

  // ── View tabs ────────────────────────────────────────────────────────
  const DVViewTabs = ({
    views,
    activeIdx,
    onSelect,
    onAdd
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      padding: '14px 24px 12px',
      borderBottom: '1px solid #F2F2F2'
    }
  }, views.map((v, i) => {
    const active = i === activeIdx;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 12px',
        borderRadius: 6,
        cursor: 'default'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Source Sans 3', sans-serif",
        fontWeight: active ? 600 : 500,
        fontSize: 15,
        color: active ? '#000' : '#999',
        letterSpacing: '-0.01em'
      }
    }, v.label), active && v.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        padding: '2px 8px',
        borderRadius: 99,
        background: '#D7F5DD',
        color: '#08612D',
        fontFamily: "'Source Sans 3', sans-serif"
      }
    }, v.count), active && /*#__PURE__*/React.createElement("button", {
      style: {
        width: 24,
        height: 24,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginLeft: 2
      }
    }, /*#__PURE__*/React.createElement(IcDotsVert, {
      s: 14,
      c: "#999"
    })));
  }), /*#__PURE__*/React.createElement("div", {
    onClick: onAdd,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 10px',
      cursor: 'pointer',
      color: '#999',
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement(IcPlus, {
    s: 14,
    c: "#999"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Source Sans 3', sans-serif",
      fontWeight: 500,
      fontSize: 15,
      letterSpacing: '-0.01em'
    }
  }, "View")));

  // ── Plus button with hover/active states ────────────────────────────
  const PlusBtn = React.forwardRef(({
    onClick,
    active
  }, ref) => {
    const [hov, setHov] = useState(false);
    return /*#__PURE__*/React.createElement("button", {
      ref: ref,
      onClick: onClick,
      title: "Add filter",
      onMouseEnter: () => setHov(true),
      onMouseLeave: () => setHov(false),
      style: {
        width: 32,
        height: 32,
        borderRadius: 6,
        cursor: 'pointer',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: active ? '1px solid var(--dv-accent)' : `1px solid ${hov ? '#C8C8C8' : '#E6E6E6'}`,
        background: active ? 'var(--dv-accent-bg)' : hov ? '#F5F5F5' : '#fff',
        transition: 'background 0.12s, border-color 0.12s'
      }
    }, /*#__PURE__*/React.createElement(IcPlus, {
      s: 15,
      c: active ? 'var(--dv-accent)' : hov ? '#333' : '#555'
    }));
  });

  // ── Advanced filter icon button ──────────────────────────────────────
  const AdvFilterBtn = ({
    active,
    count,
    onClick,
    open
  }) => {
    const [hov, setHov] = useState(false);
    const highlight = active || open;
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      title: "Advanced Filters",
      onMouseEnter: () => setHov(true),
      onMouseLeave: () => setHov(false),
      style: {
        width: 32,
        height: 32,
        padding: 0,
        borderRadius: 6,
        cursor: 'pointer',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: highlight ? '1px solid var(--dv-accent)' : `1px solid ${hov ? '#C8C8C8' : '#E6E6E6'}`,
        background: highlight ? 'var(--dv-accent-bg)' : hov ? '#F5F5F5' : '#fff',
        transition: 'background 0.12s, border-color 0.12s',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(IcFilterLines, {
      s: 14,
      c: highlight ? 'var(--dv-accent)' : hov ? '#333' : '#555'
    }), active && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 5,
        right: 5,
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: 'var(--dv-accent)',
        border: '1.5px solid #fff'
      }
    }));
  };

  // ── Filter bar ───────────────────────────────────────────────────────
  const PERIOD_LABELS = {
    today: 'Today',
    week: 'Week',
    month: 'Month',
    year: 'Year',
    custom: 'Custom'
  };
  const periodOpts = Object.entries(PERIOD_LABELS).map(([k, v]) => ({
    k,
    v
  }));
  const DVFilterBar = ({
    period,
    onPeriod,
    fleet,
    onFleet,
    subfleet,
    onSubfleet,
    aircraft,
    onAircraft,
    quickFilters,
    onPickImmediate,
    onRemoveQuickFilter,
    isDirty,
    hasAnyFilter,
    onApply,
    onReset,
    externalMenuCat,
    onExternalMenuClose,
    advActiveCount = 0,
    onOpenAdvanced,
    advPanelOpen = false
  }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuPos, setMenuPos] = useState({
      top: 0,
      left: 0
    });
    const [menuInitCat, setMenuInitCat] = useState(null);
    const [menuInitAttr, setMenuInitAttr] = useState(null);
    const plusRef = useRef();
    const barRef = useRef();

    // Handle externally-triggered menu (from "Setup filter first")
    useEffect(() => {
      if (externalMenuCat && plusRef.current) {
        const r = plusRef.current.getBoundingClientRect();
        setMenuPos({
          top: r.bottom + 6,
          left: r.left
        });
        setMenuInitCat(externalMenuCat);
        setMenuInitAttr(null);
        setMenuOpen(true);
      }
    }, [externalMenuCat]);
    const openMenu = () => {
      if (plusRef.current) {
        const r = plusRef.current.getBoundingClientRect();
        setMenuPos({
          top: r.bottom + 6,
          left: r.left
        });
      }
      setMenuInitCat(null);
      setMenuInitAttr(null);
      setMenuOpen(true);
    };

    // Reopen the menu straight to a chip's values (e.g. "Logs: System" → System values)
    const openChipMenu = (e, qf) => {
      const r = e.currentTarget.getBoundingClientRect();
      setMenuPos({
        top: r.bottom + 6,
        left: r.left
      });
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
    return /*#__PURE__*/React.createElement("div", {
      ref: barRef,
      "data-filter-bar": true,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '12px 24px 12px',
        flexWrap: 'nowrap',
        borderColor: "rgb(242, 242, 242)",
        borderWidth: "0px 0px 1px",
        borderStyle: "solid"
      }
    }, /*#__PURE__*/React.createElement(AdvFilterBtn, {
      active: advActiveCount > 0,
      count: advActiveCount,
      onClick: onOpenAdvanced,
      open: advPanelOpen
    }), /*#__PURE__*/React.createElement(PeriodChip, {
      value: period,
      onChange: onPeriod
    }), /*#__PURE__*/React.createElement(ChipDropdown, {
      label: "Fleet",
      options: DVData.opts.fleet,
      selected: fleet,
      onChange: onFleet
    }), /*#__PURE__*/React.createElement(ChipDropdown, {
      label: "Sub Fleet",
      options: DVData.opts.sub,
      selected: subfleet,
      onChange: onSubfleet
    }), /*#__PURE__*/React.createElement(ChipDropdown, {
      label: "Aircraft",
      options: DVData.opts.aircraft,
      selected: aircraft,
      onChange: onAircraft
    }), (quickFilters || []).filter(qf => qf.values?.length > 0).map((qf, i) => {
      const v = qf.values;
      const disp = v.length <= 2 ? v.join(', ') : `${v.slice(0, 2).join(', ')} +${v.length - 2}`;
      return /*#__PURE__*/React.createElement(DVChip, {
        key: i,
        label: FLAT_CATS[qf.category] ? qf.category : `${qf.category}: ${qf.attr.label}`,
        value: disp,
        onClick: e => openChipMenu(e, qf),
        onClear: () => onRemoveQuickFilter(i)
      });
    }), /*#__PURE__*/React.createElement(PlusBtn, {
      ref: plusRef,
      onClick: openMenu,
      active: menuOpen
    }), menuOpen && /*#__PURE__*/React.createElement(QuickFilterMenu, {
      anchorPos: menuPos,
      initialCat: menuInitCat,
      initialAttr: menuInitAttr,
      onClose: closeMenu,
      onPickImmediate: onPickImmediate,
      currentFilters: quickFilters
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), hasAnyFilter && /*#__PURE__*/React.createElement("button", {
      onClick: onReset,
      style: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: 13,
        color: '#888',
        fontFamily: 'inherit',
        letterSpacing: '-0.01em',
        padding: '0 6px',
        whiteSpace: 'nowrap'
      }
    }, "Clear"), /*#__PURE__*/React.createElement("button", {
      onClick: isDirty ? onApply : undefined,
      style: {
        height: 34,
        padding: '0 16px',
        borderRadius: 6,
        border: 'none',
        background: isDirty ? 'var(--dv-accent)' : '#F0F0F0',
        color: isDirty ? '#fff' : '#CCC',
        cursor: isDirty ? 'pointer' : 'default',
        fontSize: 13,
        fontWeight: 600,
        fontFamily: "'Source Sans 3', sans-serif",
        letterSpacing: '-0.01em',
        whiteSpace: 'nowrap',
        flexShrink: 0,
        transition: 'background 0.15s, color 0.15s',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }
    }, "Apply", isDirty && /*#__PURE__*/React.createElement("span", {
      style: {
        background: 'rgba(255,255,255,0.22)',
        borderRadius: 4,
        padding: '1px 5px',
        fontSize: 11,
        fontWeight: 700
      }
    }, "\u21B5")));
  };
  Object.assign(window, {
    DVFilterBar,
    DVViewTabs,
    QuickFilterMenu,
    QUICK_FILTER_MENU,
    CAT_TO_TYPE
  });
})();
;
(function () {
  // dv-content.jsx — MetricsRow + TimelineChart
  var {
    useState,
    useRef,
    useEffect,
    useMemo
  } = React;

  // ── Metric card ──────────────────────────────────────────────────────
  const MetricCard = ({
    title,
    value,
    valueLabel = 'events',
    trend,
    trendDir,
    hasToggle = false,
    toggleOn = false,
    onToggle,
    dotColor,
    locked = false,
    // true = "setup filter first" state (Reports/Components)
    onSetupFilter // callback → opens filter menu for this category
  }) => {
    const [hov, setHov] = useState(false);
    const isEmpty = hasToggle && !toggleOn;
    return /*#__PURE__*/React.createElement("div", {
      onMouseEnter: () => setHov(true),
      onMouseLeave: () => setHov(false),
      style: {
        flex: '1 1 0',
        minWidth: 200,
        background: '#fff',
        borderRadius: 8,
        border: `1px solid ${hov ? '#D8D8D8' : '#EAEAEA'}`,
        padding: '14px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        transition: 'border-color 0.15s, box-shadow 0.15s',
        boxShadow: hov ? '0 2px 8px rgba(0,0,0,0.04)' : 'none',
        minHeight: 120
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 7
      }
    }, dotColor && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        flexShrink: 0,
        background: isEmpty || locked ? '#CCCCCC' : dotColor
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        letterSpacing: '-0.01em',
        whiteSpace: 'nowrap',
        fontFamily: "'Source Sans 3', sans-serif",
        fontWeight: 500,
        color: isEmpty || locked ? '#AAAAAA' : '#000'
      }
    }, title)), hasToggle && /*#__PURE__*/React.createElement("div", {
      style: {
        opacity: locked ? 0.35 : 1,
        pointerEvents: locked ? 'none' : 'auto'
      }
    }, /*#__PURE__*/React.createElement(DVSwitch, {
      on: toggleOn,
      onClick: onToggle
    }))), locked ?
    /*#__PURE__*/
    /* Locked state: no applied filters yet */
    React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginTop: 'auto'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 28,
        color: '#CCCCCC',
        fontWeight: 300,
        fontFamily: "'Source Sans 3', sans-serif",
        lineHeight: 1
      }
    }, "\u2014"), /*#__PURE__*/React.createElement("button", {
      onClick: onSetupFilter,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: '#555',
        fontSize: 13,
        letterSpacing: '-0.01em',
        fontFamily: 'inherit',
        padding: 0,
        whiteSpace: 'nowrap',
        fontWeight: 500,
        paddingBottom: 1
      }
    }, "Setup filter first", /*#__PURE__*/React.createElement(IcChevRight, {
      s: 13,
      c: "#555"
    }))) : isEmpty ?
    /*#__PURE__*/
    /* Toggle is off */
    React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginTop: 'auto'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 28,
        color: '#CCCCCC',
        fontWeight: 300,
        fontFamily: "'Source Sans 3', sans-serif",
        lineHeight: 1
      }
    }, "\u2014")) :
    /*#__PURE__*/
    /* Normal: value + trend */
    React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 8,
        marginTop: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 32,
        fontWeight: 600,
        color: '#000',
        fontFamily: "'Source Sans 3', sans-serif",
        letterSpacing: '-0.02em',
        lineHeight: 1
      }
    }, value != null ? value.toLocaleString() : '—'), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: '#999',
        letterSpacing: '-0.01em',
        marginTop: 4
      }
    }, valueLabel)), trend != null && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        paddingBottom: 0
      }
    }, trendDir === 'up' ? /*#__PURE__*/React.createElement(IcTrendUp, {
      s: 13,
      c: "#EB0052"
    }) : /*#__PURE__*/React.createElement(IcTrendDown, {
      s: 13,
      c: "#008A61"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: trendDir === 'up' ? '#EB0052' : '#008A61',
        fontWeight: 500,
        letterSpacing: '-0.01em'
      }
    }, trendDir === 'up' ? '+' : '-', Math.abs(trend), "%"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: '#AAA',
        letterSpacing: '-0.01em',
        marginLeft: 2
      }
    }, "vs prev period"))));
  };

  // ── Metrics row ──────────────────────────────────────────────────────
  const DVMetricsRow = ({
    events,
    eventTypes,
    onActivateType,
    appliedQuickFilters = [],
    onSetupFilter
  }) => {
    const SCALE = 11;
    const total = Math.max(events.length * SCALE, 281);
    const faults = events.filter(e => e.type === 'Fault').length * SCALE || 128;
    const logs = events.filter(e => e.type === 'Log').length * SCALE || 153;
    const reports = events.filter(e => e.type === 'Report').length * SCALE;
    const comps = events.filter(e => e.type === 'Report' && e.comps && Object.keys(e.comps).length > 0).length * SCALE;

    // Reports/Components are "locked" until their quick filters are applied
    const reportsUnlocked = appliedQuickFilters.some(f => f.category === 'Reports' && f.values.length > 0);
    const compsUnlocked = appliedQuickFilters.some(f => f.category === 'Components' && f.values.length > 0);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(MetricCard, {
      title: "Total Events",
      value: total,
      trend: 12,
      trendDir: "up"
    }), /*#__PURE__*/React.createElement(MetricCard, {
      title: "Faults",
      value: faults,
      dotColor: TYPE_DOTS.Fault,
      trend: 7,
      trendDir: "down",
      hasToggle: true,
      toggleOn: eventTypes.has('Fault'),
      onToggle: () => onActivateType('Fault')
    }), /*#__PURE__*/React.createElement(MetricCard, {
      title: "Logs",
      value: logs,
      dotColor: TYPE_DOTS.Log,
      trend: 5,
      trendDir: "up",
      hasToggle: true,
      toggleOn: eventTypes.has('Log'),
      onToggle: () => onActivateType('Log')
    }), /*#__PURE__*/React.createElement(MetricCard, {
      title: "Reports",
      value: reportsUnlocked ? reports : null,
      dotColor: TYPE_DOTS.Report,
      hasToggle: true,
      toggleOn: eventTypes.has('Report'),
      onToggle: () => onActivateType('Report'),
      locked: !reportsUnlocked,
      onSetupFilter: () => onSetupFilter('Reports')
    }), /*#__PURE__*/React.createElement(MetricCard, {
      title: "Components",
      value: compsUnlocked ? comps : null,
      dotColor: TYPE_DOTS.Component,
      hasToggle: true,
      toggleOn: eventTypes.has('Component'),
      onToggle: () => onActivateType('Component'),
      locked: !compsUnlocked,
      onSetupFilter: () => onSetupFilter('Components')
    }));
  };

  // ── Timeline placeholder ─────────────────────────────────────────────
  const TimelineHeader = ({
    onToggle,
    right
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 18px 10px',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: '#000',
      letterSpacing: '-0.01em',
      fontFamily: "'Source Sans 3', sans-serif",
      fontWeight: 600
    }
  }, "Timeline"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, right, /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    style: {
      width: 28,
      height: 28,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5
    }
  }, /*#__PURE__*/React.createElement(IcCollapseChart, {
    s: 16,
    c: "#666"
  }))));

  // ── Component picker (add up to 4, max 2 units) ──────────────────────
  const MAX_COMPS = 4,
    MAX_UNITS = 2;
  const DVComponentPicker = ({
    chartComps,
    onChange
  }) => {
    const [open, setOpen] = useState(false);
    const [pos, setPos] = useState({
      top: 0,
      left: 0
    });
    const btnRef = useRef();
    const all = window.DVData.components;
    const selectedUnits = [...new Set(chartComps.map(id => all.find(c => c.id === id)?.unit))];
    const atMax = chartComps.length >= MAX_COMPS;
    useEffect(() => {
      if (!open) return;
      const fn = e => {
        if (!btnRef.current?.contains(e.target) && !e.target.closest('[data-dv-cpick]')) setOpen(false);
      };
      document.addEventListener('mousedown', fn);
      return () => document.removeEventListener('mousedown', fn);
    }, [open]);
    const handleOpen = () => {
      if (btnRef.current) {
        const r = btnRef.current.getBoundingClientRect();
        setPos({
          top: r.bottom + 6,
          left: Math.max(8, r.right - 280)
        });
      }
      setOpen(o => !o);
    };
    const toggle = c => {
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
    all.forEach(c => {
      (byUnit[c.unit] = byUnit[c.unit] || []).push(c);
    });
    return /*#__PURE__*/React.createElement("div", {
      ref: btnRef,
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: handleOpen,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        height: 30,
        padding: '0 10px 0 11px',
        borderRadius: 6,
        cursor: 'pointer',
        border: open ? '1px solid var(--dv-accent)' : '1px solid #E6E6E6',
        background: open ? 'var(--dv-accent-bg)' : '#fff',
        fontFamily: "'Source Sans 3', sans-serif",
        fontSize: 13,
        fontWeight: 600,
        color: open ? 'var(--dv-accent)' : '#333',
        letterSpacing: '-0.01em',
        transition: 'background 0.12s, border-color 0.12s'
      }
    }, /*#__PURE__*/React.createElement(IcPlus, {
      s: 13,
      c: open ? 'var(--dv-accent)' : '#555'
    }), "Component", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        padding: '1px 6px',
        borderRadius: 99,
        background: chartComps.length ? 'var(--dv-accent)' : '#EDEDED',
        color: chartComps.length ? '#fff' : '#999'
      }
    }, chartComps.length, "/", MAX_COMPS)), open && ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
      "data-dv-cpick": true,
      style: {
        position: 'fixed',
        top: pos.top,
        left: pos.left,
        width: 288,
        zIndex: 9999,
        background: '#fff',
        borderRadius: 8,
        padding: 6,
        boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)',
        fontFamily: "'Source Sans 3', sans-serif",
        maxHeight: 380,
        overflowY: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '6px 10px 8px',
        fontSize: 12,
        color: '#999',
        letterSpacing: '-0.01em',
        lineHeight: 1.4
      }
    }, "Plot up to ", MAX_COMPS, " parameters, max ", MAX_UNITS, " units (one per axis)."), Object.entries(byUnit).map(([unit, list]) => {
      const unitAvailable = selectedUnits.includes(unit) || selectedUnits.length < MAX_UNITS;
      return /*#__PURE__*/React.createElement("div", {
        key: unit
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '6px 10px 3px',
          fontSize: 11,
          fontWeight: 700,
          color: '#BBB',
          textTransform: 'uppercase',
          letterSpacing: '0.03em'
        }
      }, unit), list.map(c => {
        const on = chartComps.includes(c.id);
        const disabled = !on && (atMax || !unitAvailable);
        return /*#__PURE__*/React.createElement("div", {
          key: c.id,
          onClick: () => !disabled && toggle(c),
          onMouseEnter: e => {
            if (!disabled) e.currentTarget.style.background = '#F4F4F4';
          },
          onMouseLeave: e => e.currentTarget.style.background = on ? '#F4F5FF' : 'transparent',
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            height: 36,
            padding: '0 10px',
            borderRadius: 6,
            cursor: disabled ? 'not-allowed' : 'pointer',
            background: on ? '#F4F5FF' : 'transparent',
            opacity: disabled ? 0.4 : 1
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 15,
            height: 15,
            borderRadius: 3,
            flexShrink: 0,
            border: `1.5px solid ${on ? 'var(--dv-accent)' : '#D0D0D0'}`,
            background: on ? 'var(--dv-accent)' : '#fff',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }, on && /*#__PURE__*/React.createElement("svg", {
          width: "9",
          height: "7",
          viewBox: "0 0 9 7",
          fill: "none"
        }, /*#__PURE__*/React.createElement("path", {
          d: "M1 3.5L3.5 6L8 1",
          stroke: "#fff",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }))), /*#__PURE__*/React.createElement("span", {
          style: {
            width: 9,
            height: 9,
            borderRadius: '50%',
            background: c.color,
            flexShrink: 0
          }
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 1,
            fontSize: 13,
            color: '#000',
            letterSpacing: '-0.01em',
            fontWeight: on ? 600 : 500
          }
        }, c.name));
      }));
    })), document.body));
  };

  // Legend chip for a selected component
  const CompLegendChip = ({
    comp,
    axis,
    onRemove
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      height: 26,
      padding: '0 6px 0 9px',
      borderRadius: 6,
      background: '#F7F7F7',
      border: '1px solid #EEE',
      flexShrink: 0,
      fontFamily: "'Source Sans 3', sans-serif"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: comp.color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: '#000',
      letterSpacing: '-0.01em',
      whiteSpace: 'nowrap'
    }
  }, comp.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#999',
      letterSpacing: '-0.01em',
      whiteSpace: 'nowrap'
    }
  }, comp.unit, " \xB7 ", axis), /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    title: "Remove",
    style: {
      width: 18,
      height: 18,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      padding: 0,
      marginLeft: 1
    }
  }, /*#__PURE__*/React.createElement(IcX, {
    s: 10,
    c: "#999"
  })));
  const DVTimelinePlaceholder = ({
    onLoad
  }) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TimelineHeader, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 16px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onLoad,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 40,
      padding: '0 18px',
      borderRadius: 99,
      background: '#F2F2F2',
      border: 'none',
      cursor: 'pointer',
      fontFamily: "'Source Sans 3', sans-serif",
      fontWeight: 500,
      fontSize: 14,
      color: '#000',
      letterSpacing: '-0.01em',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(IcBars, {
    s: 16,
    c: "#000"
  }), "Load Timeline")));

  // ── Timeline chart ───────────────────────────────────────────────────
  const DVTimelineChart = ({
    timeSeries,
    showFaults,
    showLogs,
    showReports,
    chartComps = [],
    onChangeChartComps
  }) => {
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
    const leftUnit = units[0] || null;
    const rightUnit = units[1] || null;

    // Range per unit (with headroom)
    const unitRange = {};
    units.forEach(u => {
      let lo = Infinity,
        hi = -Infinity;
      comps.filter(c => c.unit === u).forEach(c => compSeries[c.id].forEach(v => {
        lo = Math.min(lo, v);
        hi = Math.max(hi, v);
      }));
      const pad = (hi - lo) * 0.18 || Math.abs(hi) * 0.1 || 1;
      unitRange[u] = {
        lo: lo - pad,
        hi: hi + pad
      };
    });
    const N = (compMode ? compSeries[comps[0].id] : timeSeries).length;
    const pad = {
      top: compMode ? 26 : 16,
      right: rightUnit ? 50 : 20,
      bottom: 28,
      left: 46
    };
    const svgH = compMode ? 230 : 190;
    const cW = width - pad.left - pad.right;
    const cH = svgH - pad.top - pad.bottom;
    const xS = i => pad.left + i / (N - 1) * cW;

    // Count-mode (faults/logs) scaling
    const countVals = timeSeries.flatMap(d => [showFaults ? d.f : 0, showLogs ? d.l : 0, showReports ? d.r || 0 : 0]);
    const countMax = Math.max(...countVals, 5) + 2;
    const fmtTick = (v, u) => {
      if (u === 'PPH') return Math.round(v).toLocaleString();
      if (Math.abs(v) >= 100) return Math.round(v);
      return Math.round(v * 10) / 10;
    };

    // 5 gridline fractions
    const fracs = [0, .25, .5, .75, 1];
    const yPos = f => pad.top + cH - f * cH;
    const yForUnit = (unit, v) => {
      const {
        lo,
        hi
      } = unitRange[unit];
      return pad.top + cH - (v - lo) / (hi - lo) * cH;
    };
    const yForCount = v => pad.top + cH - v / countMax * cH;
    const mkPath = (series, yfn) => series.map((v, i) => `${i === 0 ? 'M' : 'L'}${xS(i).toFixed(1)},${yfn(v).toFixed(1)}`).join(' ');
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TimelineHeader, {
      right: /*#__PURE__*/React.createElement(DVComponentPicker, {
        chartComps: chartComps,
        onChange: onChangeChartComps
      })
    }), compMode && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        padding: '0 18px 10px'
      }
    }, comps.map(c => /*#__PURE__*/React.createElement(CompLegendChip, {
      key: c.id,
      comp: c,
      axis: c.unit === leftUnit ? 'L' : 'R',
      onRemove: () => onChangeChartComps(chartComps.filter(id => id !== c.id))
    }))), /*#__PURE__*/React.createElement("div", {
      ref: containerRef,
      style: {
        width: '100%',
        paddingBottom: 12,
        paddingLeft: 8,
        paddingRight: 8
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: width,
      height: svgH,
      style: {
        display: 'block',
        overflow: 'visible'
      }
    }, compMode ? /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("text", {
      x: pad.left,
      y: pad.top - 10,
      textAnchor: "start",
      style: {
        fontSize: 11,
        fontWeight: 700,
        fill: '#999',
        letterSpacing: '0.02em'
      }
    }, leftUnit), rightUnit && /*#__PURE__*/React.createElement("text", {
      x: pad.left + cW,
      y: pad.top - 10,
      textAnchor: "end",
      style: {
        fontSize: 11,
        fontWeight: 700,
        fill: '#999',
        letterSpacing: '0.02em'
      }
    }, rightUnit), fracs.map((f, i) => {
      const lv = unitRange[leftUnit].lo + f * (unitRange[leftUnit].hi - unitRange[leftUnit].lo);
      const rv = rightUnit ? unitRange[rightUnit].lo + f * (unitRange[rightUnit].hi - unitRange[rightUnit].lo) : null;
      return /*#__PURE__*/React.createElement("g", {
        key: i
      }, /*#__PURE__*/React.createElement("line", {
        x1: pad.left,
        y1: yPos(f),
        x2: pad.left + cW,
        y2: yPos(f),
        stroke: "#F0F0F0",
        strokeWidth: "1"
      }), /*#__PURE__*/React.createElement("text", {
        x: pad.left - 7,
        y: yPos(f) + 4,
        textAnchor: "end",
        style: {
          fontSize: 11,
          fill: '#BBB'
        }
      }, fmtTick(lv, leftUnit)), rightUnit && /*#__PURE__*/React.createElement("text", {
        x: pad.left + cW + 8,
        y: yPos(f) + 4,
        textAnchor: "start",
        style: {
          fontSize: 11,
          fill: '#BBB'
        }
      }, fmtTick(rv, rightUnit)));
    })) : /*#__PURE__*/React.createElement("g", null, fracs.map(f => {
      const v = Math.round(countMax * f);
      return /*#__PURE__*/React.createElement("g", {
        key: f
      }, /*#__PURE__*/React.createElement("line", {
        x1: pad.left,
        y1: yForCount(v),
        x2: pad.left + cW,
        y2: yForCount(v),
        stroke: "#F0F0F0",
        strokeWidth: "1"
      }), /*#__PURE__*/React.createElement("text", {
        x: pad.left - 6,
        y: yForCount(v) + 4,
        textAnchor: "end",
        style: {
          fontSize: 11,
          fill: '#BBB'
        }
      }, v));
    })), compMode ? /*#__PURE__*/React.createElement("g", null, comps.map(c => /*#__PURE__*/React.createElement("path", {
      key: c.id,
      d: mkPath(compSeries[c.id], v => yForUnit(c.unit, v)),
      stroke: c.color,
      strokeWidth: "2",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })), comps.map(c => compSeries[c.id].map((v, i) => i % 3 === 0 && /*#__PURE__*/React.createElement("circle", {
      key: c.id + i,
      cx: xS(i),
      cy: yForUnit(c.unit, v),
      r: "3",
      fill: c.color
    })))) : /*#__PURE__*/React.createElement("g", null, timeSeries.map((d, i) => /*#__PURE__*/React.createElement("g", {
      key: i
    }, showFaults && /*#__PURE__*/React.createElement("circle", {
      cx: xS(i),
      cy: yForCount(d.f),
      r: "3.5",
      fill: TYPE_DOTS.Fault,
      opacity: "0.85"
    }), showLogs && /*#__PURE__*/React.createElement("circle", {
      cx: xS(i),
      cy: yForCount(d.l),
      r: "3.5",
      fill: TYPE_DOTS.Log,
      opacity: "0.85"
    }), showReports && (d.r || 0) > 0 && /*#__PURE__*/React.createElement("circle", {
      cx: xS(i),
      cy: yForCount(d.r || 0),
      r: "3.5",
      fill: TYPE_DOTS.Report,
      opacity: "0.85"
    })))))));
  };
  Object.assign(window, {
    DVMetricsRow,
    DVTimelineChart,
    DVTimelinePlaceholder
  });
})();
;
(function () {
  // dv-table.jsx — Full-width events table matching design spec
  var {
    useState,
    useRef,
    useEffect
  } = React;

  // ── Helpers ──────────────────────────────────────────────────────────
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function fmtDate(dt) {
    const m = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})$/.exec(dt);
    if (!m) return dt;
    const [,, mm, dd, hh, mi] = m;
    return `${MONTHS[+mm - 1]} ${dd}, ${m[1]} ${hh}:${mi}`;
  }
  function isRoute(loc) {
    // e.g. "JFK-SFO-7632"
    return /[A-Z]{2,}-/.test(loc);
  }

  // ── Tooltip ──────────────────────────────────────────────────────────
  const Tip = ({
    text,
    children
  }) => {
    const [vis, setVis] = useState(false);
    const [pos, setPos] = useState({
      top: 0,
      left: 0
    });
    const ref = useRef();
    return /*#__PURE__*/React.createElement("span", {
      ref: ref,
      onMouseEnter: () => {
        const r = ref.current?.getBoundingClientRect() || {};
        setPos({
          top: (r.bottom || 0) + 5,
          left: (r.left || 0) + (r.width || 0) / 2
        });
        setVis(true);
      },
      onMouseLeave: () => setVis(false),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'default'
      }
    }, children, vis && ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        top: pos.top,
        left: pos.left,
        transform: 'translateX(-50%)',
        zIndex: 9999,
        background: '#fff',
        borderRadius: 6,
        padding: '6px 10px',
        fontSize: 13,
        letterSpacing: '-0.01em',
        color: '#000',
        boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
        border: '1px solid #EBEBEB',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        fontFamily: "'Source Sans 3',sans-serif"
      }
    }, text), document.body));
  };

  // ── Type column ──────────────────────────────────────────────────────
  const TYPE_DOT = {
    Fault: '#C07050',
    Log: '#2BB3E5',
    Report: '#FF8554',
    Component: '#008A61'
  };

  // Context icons for Logs
  const IcWrenchSm = () => /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM2 12l5-5",
    stroke: "#999",
    strokeWidth: "1.3",
    strokeLinecap: "round"
  }));
  const IcGearSm = () => /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "2",
    stroke: "#999",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 1.5v2M7 10.5v2M1.5 7h2M10.5 7h2M3 3l1.4 1.4M9.6 9.6L11 11M11 3L9.6 4.4M4.4 9.6L3 11",
    stroke: "#999",
    strokeWidth: "1.2",
    strokeLinecap: "round"
  }));
  const IcPencilSm = ({
    c = '#999'
  }) => /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 9.5L3.5 10 10 3.5 8.5 2 2 8.5z",
    stroke: c,
    strokeWidth: "1.2",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2L10 3.5",
    stroke: c,
    strokeWidth: "1.2",
    strokeLinecap: "round"
  }));
  const TypeCell = ({
    ev
  }) => {
    const dot = TYPE_DOT[ev.type] || '#888';
    const isFault = ev.type === 'Fault';
    const isLog = ev.type === 'Log';
    const isReport = ev.type === 'Report';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        flexShrink: 0,
        background: dot
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: '#000',
        letterSpacing: '-0.01em'
      }
    }, ev.type), ev.sub2 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 0,
        marginLeft: 1,
        color: isFault ? '#E87A3A' : isReport ? '#999' : '#999',
        textTransform: 'uppercase'
      }
    }, ev.sub2), isFault && ev.flr && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: '#EB0052',
        letterSpacing: 0
      }
    }, "FLR"), ev.tooltip && /*#__PURE__*/React.createElement(Tip, {
      text: ev.tooltip
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        borderRadius: 4,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F5F5F5',
        cursor: 'help'
      }
    }, ev.tooltip === 'Component Change' ? /*#__PURE__*/React.createElement(IcWrenchSm, null) : ev.tooltip === 'Deferral' ? /*#__PURE__*/React.createElement(IcGearSm, null) : ev.tooltip === 'Troubleshooting' ? /*#__PURE__*/React.createElement(IcGearSm, null) : null)), isLog && (ev.icons || []).map((ic, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 18,
        height: 18,
        borderRadius: 4,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F5F5F5'
      }
    }, ic === 'wrench' ? /*#__PURE__*/React.createElement(IcWrenchSm, null) : /*#__PURE__*/React.createElement(IcGearSm, null))));
  };

  // ── Location badge ────────────────────────────────────────────────────
  const LocBadge = ({
    loc
  }) => {
    const route = isRoute(loc);
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        padding: '3px 9px',
        borderRadius: 5,
        fontSize: 13,
        letterSpacing: '-0.01em',
        fontWeight: 500,
        whiteSpace: 'nowrap',
        fontFamily: "'Source Sans 3',sans-serif",
        background: route ? 'var(--dv-accent-bg)' : '#F5F5F5',
        color: route ? 'var(--dv-accent)' : '#000'
      }
    }, loc);
  };

  // ── Log page number cell ──────────────────────────────────────────────
  const LogPageCell = ({
    logPage,
    type
  }) => {
    if (!logPage || !logPage.num) return /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#CCC',
        fontSize: 13
      }
    }, "\u2014");
    const {
      prefix,
      num
    } = logPage;
    const isFault = type === 'Fault';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        whiteSpace: 'nowrap'
      }
    }, prefix && isFault && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        borderRadius: 3,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F5F5F5',
        color: '#555',
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: 0,
        fontFamily: "'Source Sans 3',sans-serif",
        flexShrink: 0
      }
    }, prefix), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: '#000',
        letterSpacing: '-0.005em'
      }
    }, num));
  };

  // ── Corrected system cell (Logs) ──────────────────────────────────────
  const CorrSysCell = ({
    corrSys,
    ci
  }) => {
    if (!corrSys) return null;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: '#000',
        letterSpacing: '-0.005em'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#888'
      }
    }, "CS: "), corrSys, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#CCC',
        margin: '0 4px'
      }
    }, "\xB7"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#888'
      }
    }, "CI: "), ci), /*#__PURE__*/React.createElement("button", {
      style: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 18,
        height: 18,
        borderRadius: 3,
        padding: 0,
        color: '#AAA'
      }
    }, /*#__PURE__*/React.createElement(IcPencilSm, null)));
  };

  // ── Report details cell (Reports) ────────────────────────────────────
  // Shows the values of the components currently plotted on the Timeline.
  const ReportDetailsCell = ({
    ev,
    chartComps = []
  }) => {
    const all = window.DVData.components;
    const comps = chartComps.map(id => all.find(c => c.id === id)).filter(c => c && ev.comps && ev.comps[c.id] != null);
    if (!comps.length) {
      return /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13,
          color: '#CCC'
        }
      }, "\u2014");
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, comps.map(c => /*#__PURE__*/React.createElement("span", {
      key: c.id,
      title: `${c.name} · ${c.unit}`,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: c.color,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: '#000',
        letterSpacing: '-0.005em',
        fontVariantNumeric: 'tabular-nums'
      }
    }, ev.comps[c.id]))));
  };

  // ── Phase cell (can be multiple for Reports) ─────────────────────────
  const PhaseCell = ({
    phase,
    phases,
    extraCount
  }) => {
    const list = phases && phases.length > 0 ? phases : phase ? [phase] : [];
    const show = list.slice(0, 2);
    const extra = list.length > 2 ? list.length - 2 : 0;
    if (!list.length) return /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: '#CCC'
      }
    }, "N/A");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        flexWrap: 'nowrap'
      }
    }, show.map((p, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        fontSize: 13,
        color: '#000',
        letterSpacing: '-0.01em'
      }
    }, p)), extra > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        padding: '1px 5px',
        borderRadius: 99,
        background: '#F0F0F0',
        color: '#666'
      }
    }, "+", extra));
  };

  // ── Tags cell ────────────────────────────────────────────────────────
  const TAG_CFG = {
    ETOPS: {
      c: '#4547FF',
      bg: '#ECEDFF'
    },
    CHRONIC: {
      c: '#EB0052',
      bg: '#FEE8EE'
    },
    OIL: {
      c: '#916B4F',
      bg: '#EAE3DE'
    },
    RVSM: {
      c: '#008A61',
      bg: '#E0F5EC'
    },
    'CUSTOM ALERT': {
      c: '#fff',
      bg: '#EB0052'
    },
    LLM: {
      c: '#7747CC',
      bg: '#F3EBFF'
    }
  };
  const TagPill = ({
    tag
  }) => {
    const t = TAG_CFG[tag] || {
      c: '#555',
      bg: '#F0F0F0'
    };
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        fontSize: 11,
        letterSpacing: 0,
        fontWeight: 600,
        padding: '2px 6px',
        borderRadius: 4,
        color: t.c,
        background: t.bg,
        whiteSpace: 'nowrap',
        fontFamily: "'Source Sans 3',sans-serif"
      }
    }, tag);
  };
  const TagsCell = ({
    tags = []
  }) => {
    const show = tags.slice(0, 2);
    const extra = tags.length > 2 ? tags.length - 2 : 0;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4
      }
    }, show.map((t, i) => /*#__PURE__*/React.createElement(TagPill, {
      key: i,
      tag: t
    })), extra > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        padding: '1px 5px',
        borderRadius: 99,
        background: '#F0F0F0',
        color: '#666',
        cursor: 'default',
        fontFamily: "'Source Sans 3',sans-serif"
      }
    }, "+", extra));
  };

  // ── Status badge ─────────────────────────────────────────────────────
  const StatusBadge = ({
    status
  }) => {
    if (!status) return null;
    const cfg = {
      Open: {
        c: '#000',
        bg: 'transparent',
        b: '#D0D0D0'
      },
      Closed: {
        c: '#008A61',
        bg: 'transparent',
        b: '#7DC8A8'
      }
    };
    const s = cfg[status] || cfg.Open;
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        fontSize: 13,
        letterSpacing: '-0.01em',
        fontWeight: 500,
        padding: '3px 10px',
        borderRadius: 5,
        whiteSpace: 'nowrap',
        color: s.c,
        background: s.bg,
        border: `1px solid ${s.b}`,
        fontFamily: "'Source Sans 3',sans-serif"
      }
    }, status);
  };

  // ── Table cell / header styles ────────────────────────────────────────
  const TH = {
    fontSize: 12,
    color: '#999',
    fontWeight: 500,
    fontFamily: "'Source Sans 3',sans-serif",
    letterSpacing: '-0.01em',
    padding: '9px 12px',
    background: '#fff',
    borderBottom: '1px solid #EFEFEF',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    userSelect: 'none'
  };
  const TD = {
    padding: '11px 12px',
    fontSize: 13,
    color: '#000',
    fontFamily: "'Source Sans 3',sans-serif",
    verticalAlign: 'middle',
    background: '#fff',
    whiteSpace: 'nowrap'
  };
  const TD_NAR = {
    ...TD,
    padding: '8px 6px',
    textAlign: 'center',
    width: 30
  };

  // ── Icon helpers ──────────────────────────────────────────────────────
  const IBtn = ({
    onClick,
    title,
    children
  }) => {
    const [h, setH] = useState(false);
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      title: title,
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        width: 26,
        height: 26,
        border: 'none',
        cursor: 'pointer',
        borderRadius: 4,
        background: h ? '#F5F5F5' : 'transparent',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, children);
  };

  // ── Main table ────────────────────────────────────────────────────────
  const DVEventsTable = ({
    events,
    allTotal = 875,
    chartComps = []
  }) => {
    const [sortDir, setSortDir] = useState('desc');
    const [search, setSearch] = useState('');
    const [starred, setStarred] = useState(new Set([1, 2, 3]));
    const [page, setPage] = useState(1);
    const PER_PAGE = 100;
    const toggleStar = id => setStarred(prev => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
    const visible = [...events].filter(ev => {
      if (!search) return true;
      const q = search.toLowerCase();
      return [ev.desc, ev.aircraft, ev.loc, ev.sys, ev.type, ev.corrAction || ''].some(v => v && v.toLowerCase().includes(q));
    }).sort((a, b) => {
      const c = String(a.dt).localeCompare(String(b.dt));
      return sortDir === 'asc' ? c : -c;
    });
    const total = allTotal;
    const pages = Math.ceil(total / PER_PAGE);
    const from = (page - 1) * PER_PAGE + 1;
    const to = Math.min(page * PER_PAGE, total);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        borderRadius: 8,
        border: '1px solid #EAEAEA',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 18px 10px',
        borderBottom: '1px solid #F5F5F5'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Source Sans 3',sans-serif",
        fontWeight: 600,
        fontSize: 15,
        color: '#000',
        letterSpacing: '-0.01em',
        whiteSpace: 'nowrap'
      }
    }, "Events"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: '#AAA',
        letterSpacing: '-0.01em',
        whiteSpace: 'nowrap'
      }
    }, from, "\u2013", to, " of ", total.toLocaleString()), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        height: 30,
        padding: '0 10px',
        borderRadius: 6,
        border: '1px solid #EBEBEB',
        background: '#FAFAFA',
        minWidth: 200,
        maxWidth: 280
      }
    }, /*#__PURE__*/React.createElement(IcSearch, {
      s: 13,
      c: "#BBBBBB"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: search,
      onChange: e => setSearch(e.target.value),
      placeholder: "Search by any keyword...",
      style: {
        flex: 1,
        border: 'none',
        outline: 'none',
        background: 'transparent',
        fontSize: 13,
        color: '#000',
        letterSpacing: '-0.01em',
        fontFamily: "'Source Sans 3',sans-serif"
      }
    }), search && /*#__PURE__*/React.createElement("button", {
      onClick: () => setSearch(''),
      style: {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        padding: 0,
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(IcX, {
      s: 11,
      c: "#AAA"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement(IBtn, {
      title: "Row density"
    }, /*#__PURE__*/React.createElement(IcRows, {
      s: 14,
      c: "#666"
    })), /*#__PURE__*/React.createElement(IBtn, {
      title: "Sort"
    }, /*#__PURE__*/React.createElement(IcSliders, {
      s: 14,
      c: "#666"
    })), /*#__PURE__*/React.createElement(IBtn, {
      title: "Download"
    }, /*#__PURE__*/React.createElement(IcDownload, {
      s: 14,
      c: "#666"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        height: 16,
        background: '#EBEBEB',
        margin: '0 6px'
      }
    }), /*#__PURE__*/React.createElement(IBtn, {
      onClick: () => setPage(p => Math.max(1, p - 1))
    }, /*#__PURE__*/React.createElement(IcChevLeft, {
      s: 13,
      c: "#666"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        height: 26,
        padding: '0 8px',
        borderRadius: 5,
        border: '1px solid #EBEBEB',
        fontSize: 13,
        color: '#000',
        letterSpacing: '-0.01em',
        userSelect: 'none',
        fontFamily: "'Source Sans 3',sans-serif"
      }
    }, "Page ", page), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: '#AAA',
        padding: '0 4px',
        letterSpacing: '-0.01em'
      }
    }, "of ", pages), /*#__PURE__*/React.createElement(IBtn, {
      onClick: () => setPage(p => Math.min(pages, p + 1))
    }, /*#__PURE__*/React.createElement(IcChevRight, {
      s: 13,
      c: "#666"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        overflowX: 'auto',
        overflowY: 'auto',
        maxHeight: 'calc(100vh - 260px)'
      }
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        borderCollapse: 'collapse',
        width: '100%',
        tableLayout: 'fixed',
        minWidth: 1700
      }
    }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
      style: {
        width: 32
      }
    }), /*#__PURE__*/React.createElement("col", {
      style: {
        width: 32
      }
    }), /*#__PURE__*/React.createElement("col", {
      style: {
        width: 32
      }
    }), /*#__PURE__*/React.createElement("col", {
      style: {
        width: 155
      }
    }), /*#__PURE__*/React.createElement("col", {
      style: {
        width: 165
      }
    }), /*#__PURE__*/React.createElement("col", {
      style: {
        width: 175
      }
    }), /*#__PURE__*/React.createElement("col", {
      style: {
        width: 130
      }
    }), /*#__PURE__*/React.createElement("col", {
      style: {
        width: 220
      }
    }), /*#__PURE__*/React.createElement("col", {
      style: {
        width: 155
      }
    }), /*#__PURE__*/React.createElement("col", {
      style: {
        width: 90
      }
    }), /*#__PURE__*/React.createElement("col", {
      style: {
        width: 175
      }
    }), /*#__PURE__*/React.createElement("col", {
      style: {
        width: 165
      }
    }), /*#__PURE__*/React.createElement("col", {
      style: {
        width: 145
      }
    }), /*#__PURE__*/React.createElement("col", {
      style: {
        width: 65
      }
    }), /*#__PURE__*/React.createElement("col", {
      style: {
        width: 130
      }
    }), /*#__PURE__*/React.createElement("col", null)), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      style: TH
    }), /*#__PURE__*/React.createElement("th", {
      style: TH
    }), /*#__PURE__*/React.createElement("th", {
      style: TH
    }), /*#__PURE__*/React.createElement("th", {
      style: TH
    }, /*#__PURE__*/React.createElement("span", {
      onClick: () => setSortDir(d => d === 'asc' ? 'desc' : 'asc'),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        cursor: 'pointer'
      }
    }, "Date/Time", /*#__PURE__*/React.createElement(SortArrows, {
      dir: sortDir
    }))), /*#__PURE__*/React.createElement("th", {
      style: TH
    }, "Aircraft"), /*#__PURE__*/React.createElement("th", {
      style: TH
    }, "Type"), /*#__PURE__*/React.createElement("th", {
      style: TH
    }, "Location"), /*#__PURE__*/React.createElement("th", {
      style: TH
    }, "Defect Description / Fault Name / Report Na\u2026"), /*#__PURE__*/React.createElement("th", {
      style: TH
    }, "Corrective Action"), /*#__PURE__*/React.createElement("th", {
      style: TH
    }, "Status"), /*#__PURE__*/React.createElement("th", {
      style: TH
    }, "Report Details"), /*#__PURE__*/React.createElement("th", {
      style: TH
    }, "Corrected System"), /*#__PURE__*/React.createElement("th", {
      style: TH
    }, "Log Page Number / Messag\u2026"), /*#__PURE__*/React.createElement("th", {
      style: TH
    }, "System"), /*#__PURE__*/React.createElement("th", {
      style: TH
    }, "Phase"), /*#__PURE__*/React.createElement("th", {
      style: TH
    }, "Tags"))), /*#__PURE__*/React.createElement("tbody", null, visible.map(ev => {
      const isLog = ev.type === 'Log';
      const isReport = ev.type === 'Report';
      return /*#__PURE__*/React.createElement(TableRow, {
        key: ev.id,
        ev: ev,
        isLog: isLog,
        isReport: isReport,
        starred: starred.has(ev.id),
        onStar: () => toggleStar(ev.id),
        chartComps: chartComps
      });
    })))));
  };

  // ── Row ───────────────────────────────────────────────────────────────
  const TableRow = React.memo(({
    ev,
    isLog,
    isReport,
    starred,
    onStar,
    chartComps
  }) => {
    const [hov, setHov] = useState(false);
    const bg = hov ? '#FAFAFA' : '#fff';
    const td = {
      ...TD,
      background: bg
    };
    const tdn = {
      ...TD_NAR,
      background: bg
    };
    return /*#__PURE__*/React.createElement("tr", {
      onMouseEnter: () => setHov(true),
      onMouseLeave: () => setHov(false),
      style: {
        borderTop: '1px solid #F5F5F5',
        cursor: 'default'
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: tdn
    }, /*#__PURE__*/React.createElement(IBtn, null, /*#__PURE__*/React.createElement(IcChevDown, {
      s: 12,
      c: "#CCC"
    }))), /*#__PURE__*/React.createElement("td", {
      style: tdn
    }, /*#__PURE__*/React.createElement(IBtn, {
      onClick: onStar
    }, starred ? /*#__PURE__*/React.createElement(IcStarFill, {
      s: 14
    }) : /*#__PURE__*/React.createElement(IcStarOutline, {
      s: 14
    }))), /*#__PURE__*/React.createElement("td", {
      style: tdn
    }, /*#__PURE__*/React.createElement(IBtn, null, /*#__PURE__*/React.createElement(IcDoc, {
      s: 13,
      c: "#CCC"
    }))), /*#__PURE__*/React.createElement("td", {
      style: td
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: '#000',
        letterSpacing: '-0.01em',
        fontVariantNumeric: 'tabular-nums'
      }
    }, fmtDate(ev.dt))), /*#__PURE__*/React.createElement("td", {
      style: td
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: '#000',
        letterSpacing: '-0.01em',
        fontFamily: "'Source Sans 3',sans-serif"
      }
    }, ev.aircraft), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: '#888',
        letterSpacing: '-0.01em'
      }
    }, ev.fleet, " \xB7 ", ev.sub))), /*#__PURE__*/React.createElement("td", {
      style: td
    }, /*#__PURE__*/React.createElement(TypeCell, {
      ev: ev
    })), /*#__PURE__*/React.createElement("td", {
      style: td
    }, /*#__PURE__*/React.createElement(LocBadge, {
      loc: ev.loc
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: '#000',
        letterSpacing: 0,
        textTransform: 'uppercase',
        fontWeight: 500,
        display: 'block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },
      title: ev.desc
    }, ev.desc)), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, isLog && ev.corrAction ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: '#000',
        letterSpacing: '-0.01em',
        display: 'block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, ev.corrAction) : null), /*#__PURE__*/React.createElement("td", {
      style: td
    }, isLog && ev.status ? /*#__PURE__*/React.createElement(StatusBadge, {
      status: ev.status
    }) : null), /*#__PURE__*/React.createElement("td", {
      style: td
    }, isReport ? /*#__PURE__*/React.createElement(ReportDetailsCell, {
      ev: ev,
      chartComps: chartComps
    }) : null), /*#__PURE__*/React.createElement("td", {
      style: td
    }, isLog ? /*#__PURE__*/React.createElement(CorrSysCell, {
      corrSys: ev.corrSys,
      ci: ev.ci
    }) : null), /*#__PURE__*/React.createElement("td", {
      style: td
    }, /*#__PURE__*/React.createElement(LogPageCell, {
      logPage: ev.logPage,
      type: ev.type
    })), /*#__PURE__*/React.createElement("td", {
      style: td
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: '#000',
        letterSpacing: '-0.005em'
      }
    }, ev.sys || '')), /*#__PURE__*/React.createElement("td", {
      style: td
    }, /*#__PURE__*/React.createElement(PhaseCell, {
      phase: ev.phase,
      phases: ev.phases
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        paddingRight: 18
      }
    }, /*#__PURE__*/React.createElement(TagsCell, {
      tags: ev.tags || []
    })));
  });

  // ── Sort arrows ───────────────────────────────────────────────────────
  const SortArrows = ({
    dir
  }) => /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "12",
    viewBox: "0 0 9 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.5 1L7 4.5H2L4.5 1Z",
    fill: dir === 'asc' ? '#000' : '#CCC'
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 11L2 7.5H7L4.5 11Z",
    fill: dir === 'desc' ? '#000' : '#CCC'
  }));
  Object.assign(window, {
    DVEventsTable
  });
})();
;
(function () {
  // tweaks-panel.jsx
  // Reusable Tweaks shell + form-control helpers.
  //
  // Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
  // posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
  // individual prototypes don't re-roll it. Ships a consistent set of controls so you
  // don't hand-draw <input type="range">, segmented radios, steppers, etc.
  //
  // Usage (in an HTML file that loads React + Babel):
  //
  //   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  //     "primaryColor": "#D97757",
  //     "palette": ["#D97757", "#29261b", "#f6f4ef"],
  //     "fontSize": 16,
  //     "density": "regular",
  //     "dark": false
  //   }/*EDITMODE-END*/;
  //
  //   function App() {
  //     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  //     return (
  //       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
  //         Hello
  //         <TweaksPanel>
  //           <TweakSection label="Typography" />
  //           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
  //                        onChange={(v) => setTweak('fontSize', v)} />
  //           <TweakRadio  label="Density" value={t.density}
  //                        options={['compact', 'regular', 'comfy']}
  //                        onChange={(v) => setTweak('density', v)} />
  //           <TweakSection label="Theme" />
  //           <TweakColor  label="Primary" value={t.primaryColor}
  //                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
  //                        onChange={(v) => setTweak('primaryColor', v)} />
  //           <TweakColor  label="Palette" value={t.palette}
  //                        options={[['#D97757', '#29261b', '#f6f4ef'],
  //                                  ['#475569', '#0f172a', '#f1f5f9']]}
  //                        onChange={(v) => setTweak('palette', v)} />
  //           <TweakToggle label="Dark mode" value={t.dark}
  //                        onChange={(v) => setTweak('dark', v)} />
  //         </TweaksPanel>
  //       </div>
  //     );
  //   }
  //
  // ─────────────────────────────────────────────────────────────────────────────

  const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

  // ── useTweaks ───────────────────────────────────────────────────────────────
  // Single source of truth for tweak values. setTweak persists via the host
  // (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
  function useTweaks(defaults) {
    const [values, setValues] = React.useState(defaults);
    // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
    // useState-style call doesn't write a "[object Object]" key into the persisted
    // JSON block.
    const setTweak = React.useCallback((keyOrEdits, val) => {
      const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
        [keyOrEdits]: val
      };
      setValues(prev => ({
        ...prev,
        ...edits
      }));
      window.parent.postMessage({
        type: '__edit_mode_set_keys',
        edits
      }, '*');
      // Same-window signal so in-page listeners (deck-stage rail thumbnails)
      // can react — the parent message only reaches the host, not peers.
      window.dispatchEvent(new CustomEvent('tweakchange', {
        detail: edits
      }));
    }, []);
    return [values, setTweak];
  }

  // ── TweaksPanel ─────────────────────────────────────────────────────────────
  // Floating shell. Registers the protocol listener BEFORE announcing
  // availability — if the announce ran first, the host's activate could land
  // before our handler exists and the toolbar toggle would silently no-op.
  // The close button posts __edit_mode_dismissed so the host's toolbar toggle
  // flips off in lockstep; the host echoes __deactivate_edit_mode back which
  // is what actually hides the panel.
  function TweaksPanel({
    title = 'Tweaks',
    children
  }) {
    const [open, setOpen] = React.useState(false);
    const dragRef = React.useRef(null);
    const offsetRef = React.useRef({
      x: 16,
      y: 16
    });
    const PAD = 16;
    const clampToViewport = React.useCallback(() => {
      const panel = dragRef.current;
      if (!panel) return;
      const w = panel.offsetWidth,
        h = panel.offsetHeight;
      const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
      const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
      offsetRef.current = {
        x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
        y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
      };
      panel.style.right = offsetRef.current.x + 'px';
      panel.style.bottom = offsetRef.current.y + 'px';
    }, []);
    React.useEffect(() => {
      if (!open) return;
      clampToViewport();
      if (typeof ResizeObserver === 'undefined') {
        window.addEventListener('resize', clampToViewport);
        return () => window.removeEventListener('resize', clampToViewport);
      }
      const ro = new ResizeObserver(clampToViewport);
      ro.observe(document.documentElement);
      return () => ro.disconnect();
    }, [open, clampToViewport]);
    React.useEffect(() => {
      const onMsg = e => {
        const t = e?.data?.type;
        if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
      };
      window.addEventListener('message', onMsg);
      window.parent.postMessage({
        type: '__edit_mode_available'
      }, '*');
      return () => window.removeEventListener('message', onMsg);
    }, []);
    const dismiss = () => {
      setOpen(false);
      window.parent.postMessage({
        type: '__edit_mode_dismissed'
      }, '*');
    };
    const onDragStart = e => {
      const panel = dragRef.current;
      if (!panel) return;
      const r = panel.getBoundingClientRect();
      const sx = e.clientX,
        sy = e.clientY;
      const startRight = window.innerWidth - r.right;
      const startBottom = window.innerHeight - r.bottom;
      const move = ev => {
        offsetRef.current = {
          x: startRight - (ev.clientX - sx),
          y: startBottom - (ev.clientY - sy)
        };
        clampToViewport();
      };
      const up = () => {
        window.removeEventListener('mousemove', move);
        window.removeEventListener('mouseup', up);
      };
      window.addEventListener('mousemove', move);
      window.addEventListener('mouseup', up);
    };
    if (!open) return null;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
      ref: dragRef,
      className: "twk-panel",
      "data-omelette-chrome": "",
      style: {
        right: offsetRef.current.x,
        bottom: offsetRef.current.y
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-hd",
      onMouseDown: onDragStart
    }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
      className: "twk-x",
      "aria-label": "Close tweaks",
      onMouseDown: e => e.stopPropagation(),
      onClick: dismiss
    }, "\u2715")), /*#__PURE__*/React.createElement("div", {
      className: "twk-body"
    }, children)));
  }

  // ── Layout helpers ──────────────────────────────────────────────────────────

  function TweakSection({
    label,
    children
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "twk-sect"
    }, label), children);
  }
  function TweakRow({
    label,
    value,
    children,
    inline = false
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: inline ? 'twk-row twk-row-h' : 'twk-row'
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
      className: "twk-val"
    }, value)), children);
  }

  // ── Controls ────────────────────────────────────────────────────────────────

  function TweakSlider({
    label,
    value,
    min = 0,
    max = 100,
    step = 1,
    unit = '',
    onChange
  }) {
    return /*#__PURE__*/React.createElement(TweakRow, {
      label: label,
      value: `${value}${unit}`
    }, /*#__PURE__*/React.createElement("input", {
      type: "range",
      className: "twk-slider",
      min: min,
      max: max,
      step: step,
      value: value,
      onChange: e => onChange(Number(e.target.value))
    }));
  }
  function TweakToggle({
    label,
    value,
    onChange
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "twk-toggle",
      "data-on": value ? '1' : '0',
      role: "switch",
      "aria-checked": !!value,
      onClick: () => onChange(!value)
    }, /*#__PURE__*/React.createElement("i", null)));
  }
  function TweakRadio({
    label,
    value,
    options,
    onChange
  }) {
    const trackRef = React.useRef(null);
    const [dragging, setDragging] = React.useState(false);
    // The active value is read by pointer-move handlers attached for the lifetime
    // of a drag — ref it so a stale closure doesn't fire onChange for every move.
    const valueRef = React.useRef(value);
    valueRef.current = value;

    // Segments wrap mid-word once per-segment width runs out. The track is
    // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
    // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
    // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
    // back to a dropdown rather than wrap.
    const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
    const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
    const fitsAsSegments = maxLen <= ({
      2: 16,
      3: 10
    }[options.length] ?? 0);
    if (!fitsAsSegments) {
      // <select> emits strings — map back to the original option value so the
      // fallback stays type-preserving (numbers, booleans) like the segment path.
      const resolve = s => {
        const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
        return m === undefined ? s : typeof m === 'object' ? m.value : m;
      };
      return /*#__PURE__*/React.createElement(TweakSelect, {
        label: label,
        value: value,
        options: options,
        onChange: s => onChange(resolve(s))
      });
    }
    const opts = options.map(o => typeof o === 'object' ? o : {
      value: o,
      label: o
    });
    const idx = Math.max(0, opts.findIndex(o => o.value === value));
    const n = opts.length;
    const segAt = clientX => {
      const r = trackRef.current.getBoundingClientRect();
      const inner = r.width - 4;
      const i = Math.floor((clientX - r.left - 2) / inner * n);
      return opts[Math.max(0, Math.min(n - 1, i))].value;
    };
    const onPointerDown = e => {
      setDragging(true);
      const v0 = segAt(e.clientX);
      if (v0 !== valueRef.current) onChange(v0);
      const move = ev => {
        if (!trackRef.current) return;
        const v = segAt(ev.clientX);
        if (v !== valueRef.current) onChange(v);
      };
      const up = () => {
        setDragging(false);
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', up);
      };
      window.addEventListener('pointermove', move);
      window.addEventListener('pointerup', up);
    };
    return /*#__PURE__*/React.createElement(TweakRow, {
      label: label
    }, /*#__PURE__*/React.createElement("div", {
      ref: trackRef,
      role: "radiogroup",
      onPointerDown: onPointerDown,
      className: dragging ? 'twk-seg dragging' : 'twk-seg'
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-seg-thumb",
      style: {
        left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
        width: `calc((100% - 4px) / ${n})`
      }
    }), opts.map(o => /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      role: "radio",
      "aria-checked": o.value === value
    }, o.label))));
  }
  function TweakSelect({
    label,
    value,
    options,
    onChange
  }) {
    return /*#__PURE__*/React.createElement(TweakRow, {
      label: label
    }, /*#__PURE__*/React.createElement("select", {
      className: "twk-field",
      value: value,
      onChange: e => onChange(e.target.value)
    }, options.map(o => {
      const v = typeof o === 'object' ? o.value : o;
      const l = typeof o === 'object' ? o.label : o;
      return /*#__PURE__*/React.createElement("option", {
        key: v,
        value: v
      }, l);
    })));
  }
  function TweakText({
    label,
    value,
    placeholder,
    onChange
  }) {
    return /*#__PURE__*/React.createElement(TweakRow, {
      label: label
    }, /*#__PURE__*/React.createElement("input", {
      className: "twk-field",
      type: "text",
      value: value,
      placeholder: placeholder,
      onChange: e => onChange(e.target.value)
    }));
  }
  function TweakNumber({
    label,
    value,
    min,
    max,
    step = 1,
    unit = '',
    onChange
  }) {
    const clamp = n => {
      if (min != null && n < min) return min;
      if (max != null && n > max) return max;
      return n;
    };
    const startRef = React.useRef({
      x: 0,
      val: 0
    });
    const onScrubStart = e => {
      e.preventDefault();
      startRef.current = {
        x: e.clientX,
        val: value
      };
      const decimals = (String(step).split('.')[1] || '').length;
      const move = ev => {
        const dx = ev.clientX - startRef.current.x;
        const raw = startRef.current.val + dx * step;
        const snapped = Math.round(raw / step) * step;
        onChange(clamp(Number(snapped.toFixed(decimals))));
      };
      const up = () => {
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', up);
      };
      window.addEventListener('pointermove', move);
      window.addEventListener('pointerup', up);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-num"
    }, /*#__PURE__*/React.createElement("span", {
      className: "twk-num-lbl",
      onPointerDown: onScrubStart
    }, label), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: value,
      min: min,
      max: max,
      step: step,
      onChange: e => onChange(clamp(Number(e.target.value)))
    }), unit && /*#__PURE__*/React.createElement("span", {
      className: "twk-num-unit"
    }, unit));
  }

  // Relative-luminance contrast pick — checkmarks drawn over a swatch need to
  // read on both #111 and #fafafa without per-option configuration. Hex input
  // only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
  function __twkIsLight(hex) {
    const h = String(hex).replace('#', '');
    const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
    const n = parseInt(x.slice(0, 6), 16);
    if (Number.isNaN(n)) return true;
    const r = n >> 16 & 255,
      g = n >> 8 & 255,
      b = n & 255;
    return r * 299 + g * 587 + b * 114 > 148000;
  }
  const __TwkCheck = ({
    light
  }) => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 14 14",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 7.2 5.8 10 11 4.2",
    fill: "none",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
  }));

  // TweakColor — curated color/palette picker. Each option is either a single
  // hex string or an array of 1-5 hex strings; the card adapts — a lone color
  // renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
  // rest stacked in a sharp column on the right. onChange emits the
  // option in the shape it was passed (string stays string, array stays array).
  // Without options it falls back to the native color input for back-compat.
  function TweakColor({
    label,
    value,
    options,
    onChange
  }) {
    if (!options || !options.length) {
      return /*#__PURE__*/React.createElement("div", {
        className: "twk-row twk-row-h"
      }, /*#__PURE__*/React.createElement("div", {
        className: "twk-lbl"
      }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
        type: "color",
        className: "twk-swatch",
        value: value,
        onChange: e => onChange(e.target.value)
      }));
    }
    // Native <input type=color> emits lowercase hex per the HTML spec, so
    // compare case-insensitively. String() guards JSON.stringify(undefined),
    // which returns the primitive undefined (no .toLowerCase).
    const key = o => String(JSON.stringify(o)).toLowerCase();
    const cur = key(value);
    return /*#__PURE__*/React.createElement(TweakRow, {
      label: label
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-chips",
      role: "radiogroup"
    }, options.map((o, i) => {
      const colors = Array.isArray(o) ? o : [o];
      const [hero, ...rest] = colors;
      const sup = rest.slice(0, 4);
      const on = key(o) === cur;
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        type: "button",
        className: "twk-chip",
        role: "radio",
        "aria-checked": on,
        "data-on": on ? '1' : '0',
        "aria-label": colors.join(', '),
        title: colors.join(' · '),
        style: {
          background: hero
        },
        onClick: () => onChange(o)
      }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
        key: j,
        style: {
          background: c
        }
      }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
        light: __twkIsLight(hero)
      }));
    })));
  }
  function TweakButton({
    label,
    onClick,
    secondary = false
  }) {
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: secondary ? 'twk-btn secondary' : 'twk-btn',
      onClick: onClick
    }, label);
  }
  Object.assign(window, {
    useTweaks,
    TweaksPanel,
    TweakSection,
    TweakRow,
    TweakSlider,
    TweakToggle,
    TweakRadio,
    TweakSelect,
    TweakText,
    TweakNumber,
    TweakColor,
    TweakButton
  });
})();
;
(function () {
  // dv-advanced-filters.jsx — Advanced Filters panel
  var {
    useState,
    useEffect,
    useMemo,
    useRef
  } = React;

  // ── uid ──────────────────────────────────────────────────────────────
  let _auid = 0;
  const auid = () => `af${++_auid}`;

  // ── Field definitions ────────────────────────────────────────────────
  const ADV_FIELDS = [{
    key: 'type',
    label: 'Event Type'
  }, {
    key: 'aircraft',
    label: 'Aircraft'
  }, {
    key: 'fleet',
    label: 'Fleet'
  }, {
    key: 'loc',
    label: 'Location'
  }, {
    key: 'sys',
    label: 'System'
  }, {
    key: 'phase',
    label: 'Phase'
  }, {
    key: 'status',
    label: 'Status'
  }, {
    key: 'tags',
    label: 'Tags'
  }, {
    key: 'desc',
    label: 'Description',
    freeText: true
  }];
  const FIELD_MAP = Object.fromEntries(ADV_FIELDS.map(f => [f.key, f]));
  function getFieldVals(key) {
    if (key === 'type') return ['Fault', 'Log', 'Report', 'Component'];
    if (key === 'status') return ['Open', 'Closed', 'Worked', 'Hold', 'Deferred'];
    if (key === 'tags') return ['ETOPS', 'CHRONIC', 'OIL', 'RVSM', 'CUSTOM ALERT', 'LLM'];
    const s = new Set();
    (window.DVData?.events || []).forEach(ev => {
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
  const isMultiOp = op => ['is any of', 'includes', 'does not include'].includes(op);

  // ── State factories ──────────────────────────────────────────────────
  const makeRow = (f = 'type') => ({
    id: auid(),
    field: f,
    operator: getOps(f)[0],
    values: [],
    text: ''
  });
  const makeGroup = () => ({
    id: auid(),
    rows: [makeRow()],
    logic: 'and'
  });
  const EMPTY_ADV = {
    groups: []
  };

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
      const has = row.values.some(v => evTags.includes(v));
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
    return logic === 'and' ? group.rows.every(r => matchRow(ev, r)) : group.rows.some(r => matchRow(ev, r));
  }
  function applyAdvancedFilters(events, adv) {
    const groups = adv?.groups || [];
    if (!groups.length) return events;
    return events.filter(ev => {
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
  const AFSel = ({
    value,
    options,
    onChange,
    width = 120
  }) => {
    const [open, setOpen] = useState(false);
    const [pos, setPos] = useState({
      top: 0,
      left: 0
    });
    const ref = useRef();
    const norm = options.map(o => typeof o === 'string' ? {
      k: o,
      v: o
    } : o);
    const label = norm.find(o => o.k === value)?.v || value || '—';
    useEffect(() => {
      if (!open) return;
      const fn = e => {
        if (!e.target.closest('[data-af-s]')) setOpen(false);
      };
      document.addEventListener('mousedown', fn);
      return () => document.removeEventListener('mousedown', fn);
    }, [open]);
    const toggle = () => {
      if (ref.current) {
        const r = ref.current.getBoundingClientRect();
        setPos({
          top: r.bottom + 4,
          left: r.left
        });
      }
      setOpen(o => !o);
    };
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      "data-af-s": true,
      style: {
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: toggle,
      style: {
        height: 30,
        minWidth: width,
        maxWidth: width,
        padding: '0 8px 0 10px',
        borderRadius: 5,
        border: `1px solid ${open ? 'var(--dv-accent)' : '#E0E0E0'}`,
        background: open ? 'var(--dv-accent-bg)' : '#fff',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        fontFamily: "'Source Sans 3', sans-serif",
        fontSize: 13,
        color: open ? 'var(--dv-accent)' : '#000',
        letterSpacing: '-0.01em',
        transition: 'border-color 0.1s, background 0.1s',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        textAlign: 'left',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, label), /*#__PURE__*/React.createElement(IcChevDown, {
      s: 12,
      c: open ? 'var(--dv-accent)' : '#AAA'
    })), open && ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
      "data-af-s": true,
      style: {
        position: 'fixed',
        top: pos.top,
        left: pos.left,
        zIndex: 10001,
        background: '#fff',
        border: '1px solid #E0E0E0',
        borderRadius: 6,
        boxShadow: '0 6px 24px rgba(0,0,0,0.10)',
        minWidth: width,
        padding: '4px 0',
        maxHeight: 240,
        overflowY: 'auto'
      }
    }, norm.map(({
      k,
      v
    }) => {
      const sel = k === value;
      return /*#__PURE__*/React.createElement("div", {
        key: k,
        onClick: () => {
          onChange(k);
          setOpen(false);
        },
        onMouseEnter: e => {
          if (!sel) e.currentTarget.style.background = '#F4F4F4';
        },
        onMouseLeave: e => {
          if (!sel) e.currentTarget.style.background = 'transparent';
        },
        style: {
          padding: '7px 12px',
          cursor: 'pointer',
          fontSize: 13,
          letterSpacing: '-0.01em',
          fontFamily: "'Source Sans 3', sans-serif",
          color: sel ? 'var(--dv-accent)' : '#000',
          background: sel ? 'var(--dv-accent-bg)' : 'transparent',
          fontWeight: sel ? 600 : 400
        }
      }, v);
    })), document.body));
  };

  // ── Multi-select dropdown ────────────────────────────────────────────
  const AFMulti = ({
    values,
    options,
    onChange,
    width = 152
  }) => {
    const [open, setOpen] = useState(false);
    const [pos, setPos] = useState({
      top: 0,
      left: 0
    });
    const ref = useRef();
    useEffect(() => {
      if (!open) return;
      const fn = e => {
        if (!e.target.closest('[data-af-m]')) setOpen(false);
      };
      document.addEventListener('mousedown', fn);
      return () => document.removeEventListener('mousedown', fn);
    }, [open]);
    const toggle = () => {
      if (ref.current) {
        const r = ref.current.getBoundingClientRect();
        setPos({
          top: r.bottom + 4,
          left: r.left
        });
      }
      setOpen(o => !o);
    };
    const toggleVal = v => onChange(values.includes(v) ? values.filter(x => x !== v) : [...values, v]);
    const label = values.length === 0 ? 'Select…' : values.length <= 2 ? values.join(', ') : `${values.slice(0, 2).join(', ')} +${values.length - 2}`;
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      "data-af-m": true,
      style: {
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: toggle,
      style: {
        height: 30,
        minWidth: width,
        maxWidth: width,
        padding: '0 8px 0 10px',
        borderRadius: 5,
        border: `1px solid ${open ? 'var(--dv-accent)' : '#E0E0E0'}`,
        background: open ? 'var(--dv-accent-bg)' : '#fff',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        fontFamily: "'Source Sans 3', sans-serif",
        fontSize: 13,
        color: open ? 'var(--dv-accent)' : values.length ? '#000' : '#AAA',
        letterSpacing: '-0.01em',
        overflow: 'hidden',
        transition: 'border-color 0.1s, background 0.1s'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        textAlign: 'left',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, label), /*#__PURE__*/React.createElement(IcChevDown, {
      s: 12,
      c: open ? 'var(--dv-accent)' : '#AAA'
    })), open && ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
      "data-af-m": true,
      style: {
        position: 'fixed',
        top: pos.top,
        left: pos.left,
        zIndex: 10001,
        background: '#fff',
        border: '1px solid #E0E0E0',
        borderRadius: 6,
        boxShadow: '0 6px 24px rgba(0,0,0,0.10)',
        minWidth: width,
        padding: '4px 0',
        maxHeight: 240,
        overflowY: 'auto'
      }
    }, options.map(v => {
      const on = values.includes(v);
      return /*#__PURE__*/React.createElement("div", {
        key: v,
        onClick: () => toggleVal(v),
        onMouseEnter: e => {
          e.currentTarget.style.background = on ? '#EEF0FF' : '#F4F4F4';
        },
        onMouseLeave: e => {
          e.currentTarget.style.background = on ? 'var(--dv-accent-bg)' : 'transparent';
        },
        style: {
          padding: '7px 12px',
          cursor: 'pointer',
          fontSize: 13,
          fontFamily: "'Source Sans 3', sans-serif",
          letterSpacing: '-0.01em',
          background: on ? 'var(--dv-accent-bg)' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 14,
          height: 14,
          borderRadius: 3,
          flexShrink: 0,
          border: `1.5px solid ${on ? 'var(--dv-accent)' : '#D0D0D0'}`,
          background: on ? 'var(--dv-accent)' : '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.1s'
        }
      }, on && /*#__PURE__*/React.createElement("svg", {
        width: "8",
        height: "6",
        viewBox: "0 0 8 6",
        fill: "none"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M1 3L3 5.5L7 1",
        stroke: "#fff",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }))), /*#__PURE__*/React.createElement("span", {
        style: {
          color: on ? 'var(--dv-accent)' : '#000',
          fontWeight: on ? 600 : 400
        }
      }, v));
    })), document.body));
  };

  // ── Filter row ────────────────────────────────────────────────────────
  const FilterRow = ({
    row,
    isFirst,
    logic = 'and',
    onToggleLogic,
    onChange,
    onDelete
  }) => {
    const fDef = FIELD_MAP[row.field] || {};
    const ops = getOps(row.field);
    const multi = isMultiOp(row.operator);
    const avVals = useMemo(() => getFieldVals(row.field), [row.field]);
    const setField = f => {
      const newOp = getOps(f)[0];
      onChange({
        ...row,
        field: f,
        operator: newOp,
        values: [],
        text: ''
      });
    };
    const setOp = op => {
      const wasMulti = isMultiOp(row.operator),
        nowMulti = isMultiOp(op);
      onChange({
        ...row,
        operator: op,
        values: wasMulti !== nowMulti ? [] : row.values
      });
    };
    const setVals = v => onChange({
      ...row,
      values: v
    });
    const setText = t => onChange({
      ...row,
      text: t
    });
    const setSingle = v => onChange({
      ...row,
      values: v ? [v] : []
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '3px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 50,
        flexShrink: 0,
        textAlign: 'right',
        paddingRight: 2
      }
    }, isFirst ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: '#999',
        letterSpacing: '-0.01em',
        fontFamily: "'Source Sans 3', sans-serif",
        fontWeight: 400
      }
    }, "Where:") : /*#__PURE__*/React.createElement("button", {
      onClick: onToggleLogic,
      style: {
        padding: '2px 6px',
        borderRadius: 4,
        border: 'none',
        cursor: 'pointer',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
        fontFamily: "'Source Sans 3', sans-serif",
        background: logic === 'and' ? 'var(--dv-accent-bg)' : '#FFF0E6',
        color: logic === 'and' ? 'var(--dv-accent)' : '#D4580A',
        transition: 'all 0.12s'
      }
    }, logic)), /*#__PURE__*/React.createElement(AFSel, {
      value: row.field,
      options: ADV_FIELDS.map(f => ({
        k: f.key,
        v: f.label
      })),
      onChange: setField,
      width: 118
    }), /*#__PURE__*/React.createElement(AFSel, {
      value: row.operator,
      options: ops,
      onChange: setOp,
      width: 104
    }), fDef.freeText ? /*#__PURE__*/React.createElement("input", {
      value: row.text,
      onChange: e => setText(e.target.value),
      placeholder: "Type value\u2026",
      style: {
        height: 30,
        padding: '0 10px',
        border: '1px solid #E0E0E0',
        borderRadius: 5,
        fontFamily: "'Source Sans 3', sans-serif",
        fontSize: 13,
        color: '#000',
        letterSpacing: '-0.01em',
        flex: 1,
        minWidth: 80,
        outline: 'none',
        background: '#fff',
        transition: 'border-color 0.1s'
      },
      onFocus: e => e.target.style.borderColor = 'var(--dv-accent)',
      onBlur: e => e.target.style.borderColor = '#E0E0E0'
    }) : multi ? /*#__PURE__*/React.createElement(AFMulti, {
      values: row.values,
      options: avVals,
      onChange: setVals,
      width: 152
    }) : /*#__PURE__*/React.createElement(AFSel, {
      value: row.values[0] || '',
      options: [{
        k: '',
        v: 'Select…'
      }, ...avVals.map(v => ({
        k: v,
        v
      }))],
      onChange: setSingle,
      width: 152
    }), /*#__PURE__*/React.createElement("button", {
      onClick: onDelete,
      title: "Remove condition",
      style: {
        width: 26,
        height: 26,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        color: '#CCC',
        transition: 'color 0.1s'
      },
      onMouseEnter: e => e.currentTarget.style.color = '#EB0052',
      onMouseLeave: e => e.currentTarget.style.color = '#CCC'
    }, /*#__PURE__*/React.createElement("svg", {
      width: "13",
      height: "14",
      viewBox: "0 0 13 14",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M1.5 3.5h10M4 3.5V2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1M5 6v4.5M8 6v4.5M2.5 3.5l.7 8a.5.5 0 0 0 .5.5h5.6a.5.5 0 0 0 .5-.5l.7-8",
      stroke: "currentColor",
      strokeWidth: "1.3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))));
  };

  // ── Filter group ──────────────────────────────────────────────────────
  const FilterGroup = ({
    group,
    onChange,
    onDelete
  }) => {
    const upd = (rid, nr) => onChange({
      ...group,
      rows: group.rows.map(r => r.id === rid ? nr : r)
    });
    const del = rid => onChange({
      ...group,
      rows: group.rows.filter(r => r.id !== rid)
    });
    const add = () => onChange({
      ...group,
      rows: [...group.rows, makeRow()]
    });
    const toggleLogic = () => onChange({
      ...group,
      logic: group.logic === 'and' ? 'or' : 'and'
    });
    const logic = group.logic || 'and';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid #EBEBEB',
        borderRadius: 8,
        padding: '10px 10px 8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, group.rows.map((row, i) => /*#__PURE__*/React.createElement(FilterRow, {
      key: row.id,
      row: row,
      isFirst: i === 0,
      logic: logic,
      onToggleLogic: toggleLogic,
      onChange: nr => upd(row.id, nr),
      onDelete: () => group.rows.length > 1 ? del(row.id) : onDelete()
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 4,
        paddingLeft: 2
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: add,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontFamily: "'Source Sans 3', sans-serif",
        fontSize: 12,
        color: 'var(--dv-accent)',
        letterSpacing: '-0.01em',
        padding: '4px 0 2px 52px'
      }
    }, /*#__PURE__*/React.createElement(IcPlus, {
      s: 11,
      c: "var(--dv-accent)"
    }), "Add Filter"), /*#__PURE__*/React.createElement("button", {
      onClick: onDelete,
      title: "Remove group",
      style: {
        width: 24,
        height: 24,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        borderRadius: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#CCC',
        transition: 'color 0.1s',
        flexShrink: 0
      },
      onMouseEnter: e => e.currentTarget.style.color = '#EB0052',
      onMouseLeave: e => e.currentTarget.style.color = '#CCC'
    }, /*#__PURE__*/React.createElement(IcX, {
      s: 11,
      c: "currentColor"
    }))));
  };

  // ── OR / AND separator between groups ───────────────────────────────
  const GroupSep = ({
    connector = 'or',
    onToggle
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '5px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: '#EFEFEF'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    style: {
      padding: '3px 10px',
      borderRadius: 4,
      border: 'none',
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      fontFamily: "'Source Sans 3', sans-serif",
      background: connector === 'and' ? 'var(--dv-accent-bg)' : '#FFF0E6',
      color: connector === 'and' ? 'var(--dv-accent)' : '#D4580A',
      transition: 'all 0.12s'
    }
  }, connector), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: '#EFEFEF'
    }
  }));

  // ── Advanced Filters panel ────────────────────────────────────────────
  const AdvancedFiltersPanel = ({
    initialAdv,
    onApply,
    onClose
  }) => {
    const [adv, setAdv] = useState(() => {
      const init = initialAdv || EMPTY_ADV;
      return init.groups.length ? init : EMPTY_ADV;
    });
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      requestAnimationFrame(() => setVisible(true));
    }, []);
    useEffect(() => {
      const fn = e => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', fn);
      return () => document.removeEventListener('keydown', fn);
    }, [onClose]);
    const groups = adv.groups || [];
    const updGroup = (gid, ng) => setAdv(a => ({
      ...a,
      groups: a.groups.map(g => g.id === gid ? ng : g)
    }));
    const delGroup = gid => setAdv(a => ({
      ...a,
      groups: a.groups.filter(g => g.id !== gid)
    }));
    const addGroup = () => setAdv(a => ({
      ...a,
      groups: [...a.groups, {
        ...makeGroup(),
        connectorBefore: 'or'
      }]
    }));
    const toggleConnector = gid => setAdv(a => ({
      ...a,
      groups: a.groups.map(g => g.id === gid ? {
        ...g,
        connectorBefore: g.connectorBefore === 'and' ? 'or' : 'and'
      } : g)
    }));
    const clearAll = () => setAdv(EMPTY_ADV);
    const activeCount = groups.reduce((n, g) => n + g.rows.filter(r => r.values.length > 0 || r.text).length, 0);
    return ReactDOM.createPortal(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        top: 12,
        right: 12,
        bottom: 12,
        zIndex: 8001,
        width: 520,
        background: '#F5F5F5',
        borderRadius: 12,
        boxShadow: '0 8px 48px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transform: visible ? 'translateX(0)' : 'translateX(24px)',
        opacity: visible ? 1 : 0,
        transition: 'transform 0.2s ease, opacity 0.18s ease'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 52,
        background: '#fff',
        borderBottom: '1px solid #EEEEEE',
        display: 'flex',
        alignItems: 'center',
        padding: '0 18px',
        gap: 10,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Source Sans 3', sans-serif",
        fontWeight: 600,
        fontSize: 15,
        letterSpacing: '-0.01em',
        flex: 1,
        color: '#000'
      }
    }, "Advanced Filters"), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        width: 28,
        height: 28,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#888',
        transition: 'background 0.1s'
      },
      onMouseEnter: e => e.currentTarget.style.background = '#F2F2F2',
      onMouseLeave: e => e.currentTarget.style.background = 'transparent'
    }, /*#__PURE__*/React.createElement(IcX, {
      s: 14,
      c: "currentColor"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '14px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 0
      }
    }, groups.length === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "40",
      height: "40",
      viewBox: "0 0 40 40",
      fill: "none"
    }, /*#__PURE__*/React.createElement("rect", {
      width: "40",
      height: "40",
      rx: "10",
      fill: "#EFEFEF"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11",
      y1: "14",
      x2: "29",
      y2: "14",
      stroke: "#999",
      strokeWidth: "1.8",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "14",
      y1: "20",
      x2: "26",
      y2: "20",
      stroke: "#999",
      strokeWidth: "1.8",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "17",
      y1: "26",
      x2: "23",
      y2: "26",
      stroke: "#999",
      strokeWidth: "1.8",
      strokeLinecap: "round"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        color: '#444',
        margin: 0,
        fontWeight: 600,
        fontFamily: "'Source Sans 3', sans-serif",
        letterSpacing: '-0.01em'
      }
    }, "No filters yet"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: '#999',
        margin: '6px 0 0',
        fontFamily: "'Source Sans 3', sans-serif",
        letterSpacing: '-0.01em'
      }
    }, "Add a group to start filtering your data"))), /*#__PURE__*/React.createElement("button", {
      onClick: addGroup,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        padding: '11px 24px',
        borderRadius: 8,
        background: 'var(--dv-accent)',
        border: 'none',
        cursor: 'pointer',
        fontFamily: "'Source Sans 3', sans-serif",
        fontSize: 14,
        fontWeight: 600,
        color: '#fff',
        letterSpacing: '-0.01em',
        boxShadow: 'none',
        transition: 'background 0.12s, box-shadow 0.12s'
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = 'var(--dv-accent-dark)';
        e.currentTarget.style.boxShadow = 'none';
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'var(--dv-accent)';
        e.currentTarget.style.boxShadow = '0 2px 12px rgba(69,71,255,0.28)';
      }
    }, /*#__PURE__*/React.createElement(IcPlus, {
      s: 14,
      c: "#fff"
    }), "Add Filter Group")), groups.map((group, gi) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: group.id
    }, gi > 0 && /*#__PURE__*/React.createElement(GroupSep, {
      connector: group.connectorBefore || 'or',
      onToggle: () => toggleConnector(group.id)
    }), /*#__PURE__*/React.createElement(FilterGroup, {
      group: group,
      onChange: ng => updGroup(group.id, ng),
      onDelete: () => delGroup(group.id)
    }))), groups.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: addGroup,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        width: '100%',
        padding: '9px 0',
        borderRadius: 7,
        border: '1.5px dashed #BBBBBB',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: "'Source Sans 3', sans-serif",
        fontSize: 13,
        color: '#555',
        letterSpacing: '-0.01em',
        transition: 'all 0.12s'
      },
      onMouseEnter: e => {
        e.currentTarget.style.borderColor = 'var(--dv-accent)';
        e.currentTarget.style.color = 'var(--dv-accent)';
        e.currentTarget.style.background = 'rgba(69,71,255,0.03)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.borderColor = '#BBBBBB';
        e.currentTarget.style.color = '#999';
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(IcPlus, {
      s: 13,
      c: "currentColor"
    }), "Add Filter Group"))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 16px',
        background: '#fff',
        borderTop: '1px solid #EEEEEE',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, groups.length > 0 && /*#__PURE__*/React.createElement("button", {
      onClick: clearAll,
      style: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: 13,
        color: '#AAA',
        fontFamily: "'Source Sans 3', sans-serif",
        letterSpacing: '-0.01em',
        padding: 0,
        transition: 'color 0.1s'
      },
      onMouseEnter: e => e.currentTarget.style.color = '#EB0052',
      onMouseLeave: e => e.currentTarget.style.color = '#AAA'
    }, "Clear All")), /*#__PURE__*/React.createElement(DVBtn, {
      variant: "secondary",
      size: "m",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(DVBtn, {
      variant: "primary",
      size: "m",
      onClick: () => {
        onApply(adv);
        onClose();
      }
    }, "Apply Filters")))), document.body);
  };

  // ── Active filter indicator bar ──────────────────────────────────────
  const AdvFilterIndicator = ({
    adv,
    onEdit,
    onClear
  }) => {
    const groups = (adv?.groups || []).filter(g => g.rows.some(r => r.values.length > 0 || r.text));
    if (!groups.length) return null;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 24px',
        flexShrink: 0,
        flexWrap: 'wrap',
        borderBottom: "1px solid rgb(242, 242, 242)",
        borderTopColor: "rgb(242, 242, 242)",
        borderRightColor: "rgb(242, 242, 242)",
        borderLeftColor: "rgb(242, 242, 242)",
        background: "rgb(255, 255, 255)",
        borderBottomStyle: "solid",
        borderColor: "rgb(242, 242, 242)",
        borderWidth: "0px 0px 1px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: '#666',
        letterSpacing: '-0.01em',
        fontFamily: "'Source Sans 3', sans-serif",
        whiteSpace: 'nowrap',
        flexShrink: 0
      }
    }, "Advanced Filters:"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        flexWrap: 'wrap'
      }
    }, groups.map((g, gi) => {
      const activeRows = g.rows.filter(r => r.values.length > 0 || r.text);
      const conn = g.connectorBefore || 'or';
      const logic = g.logic || 'and';
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: g.id
      }, gi > 0 && /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 10,
          fontWeight: 700,
          padding: '2px 6px',
          borderRadius: 3,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          fontFamily: "'Source Sans 3', sans-serif",
          background: conn === 'and' ? 'var(--dv-accent-bg)' : '#FFF0E6',
          color: conn === 'and' ? 'var(--dv-accent)' : '#D4580A'
        }
      }, conn), activeRows.map((r, ri) => {
        const fieldLabel = FIELD_MAP[r.field]?.label || r.field;
        const val = r.text || (r.values.length <= 2 ? r.values.join(', ') : `${r.values.slice(0, 2).join(', ')} +${r.values.length - 2}`);
        return /*#__PURE__*/React.createElement(React.Fragment, {
          key: r.id
        }, ri > 0 && /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 10,
            fontWeight: 700,
            padding: '1px 5px',
            borderRadius: 3,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            fontFamily: "'Source Sans 3', sans-serif",
            background: logic === 'and' ? 'var(--dv-accent-bg)' : '#FFF0E6',
            color: logic === 'and' ? 'var(--dv-accent)' : '#D4580A'
          }
        }, logic), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12,
            letterSpacing: '-0.01em',
            fontFamily: "'Source Sans 3', sans-serif",
            background: '#fff',
            border: '1px solid #E0E2FF',
            padding: '2px 8px',
            borderRadius: "4px"
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            color: '#888'
          }
        }, fieldLabel), ' ', /*#__PURE__*/React.createElement("span", {
          style: {
            color: '#666'
          }
        }, r.operator), ' ', /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 600,
            color: '#000'
          }
        }, val)));
      }));
    })));
  };
  Object.assign(window, {
    AdvancedFiltersPanel,
    AdvFilterIndicator,
    applyAdvancedFilters,
    makeGroup,
    EMPTY_ADV,
    ADV_FIELDS
  });
})();
;
(function () {
  // dv-app.jsx — Main DataViewer app
  var {
    useState,
    useMemo,
    useCallback,
    useEffect
  } = React;
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "accent": ["#4547FF", "#ECEDFF"]
  } /*EDITMODE-END*/;
  const VIEWS = [{
    label: 'Default View',
    count: 143
  }, {
    label: 'Secondary View'
  }];
  const INIT_FILTERS = {
    period: 'today',
    fleet: [],
    subfleet: [],
    aircraft: [],
    eventTypes: ['Fault', 'Log'],
    quickFilters: []
  };
  function filtersEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  function applyQuickFilters(evs, quickFilters) {
    if (!quickFilters?.length) return evs;
    const nameToId = {};
    (window.DVData?.components || []).forEach(c => {
      nameToId[c.name] = c.id;
    });
    quickFilters.forEach(qf => {
      if (!qf.values?.length) return;
      // Components: narrow reports to those that actually carry a selected component
      if (qf.category === 'Components') {
        const ids = qf.values.map(n => nameToId[n]).filter(Boolean);
        evs = evs.filter(ev => ev.type !== 'Report' || ev.comps && ids.some(id => ev.comps[id] != null));
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
      const [primary, bg] = Array.isArray(t.accent) ? t.accent : ['#4547FF', '#ECEDFF'];
      document.documentElement.style.setProperty('--dv-accent', primary);
      document.documentElement.style.setProperty('--dv-accent-bg', bg);
      document.documentElement.style.setProperty('--dv-accent-dark', primary);
    }, [t.accent]);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [activeView, setActiveView] = useState(0);
    const [timelineLoaded, setTimelineLoaded] = useState(false);

    // Components plotted on the timeline + shown in Report Details (max 4, 2 per unit)
    const [chartComps, setChartComps] = useState([]);

    // ── Draft & Applied ───────────────────────────────────────────────
    const [draft, setDraft] = useState({
      ...INIT_FILTERS
    });
    const [applied, setApplied] = useState({
      ...INIT_FILTERS
    });
    const isDirty = !filtersEqual(draft, applied);

    // ── Draft setters ─────────────────────────────────────────────────
    const setPeriod = useCallback(v => setDraft(d => ({
      ...d,
      period: v
    })), []);
    const setFleet = useCallback(v => setDraft(d => ({
      ...d,
      fleet: v
    })), []);
    const setSubfleet = useCallback(v => setDraft(d => ({
      ...d,
      subfleet: v
    })), []);
    const setAircraft = useCallback(v => setDraft(d => ({
      ...d,
      aircraft: v
    })), []);

    // Toggle type immediately (both draft + applied)
    const toggleType = useCallback(type => {
      const upd = d => {
        const next = d.eventTypes.includes(type) ? d.eventTypes.filter(t => t !== type) : [...d.eventTypes, type];
        return {
          ...d,
          eventTypes: next
        };
      };
      setDraft(upd);
      setApplied(upd);
    }, []);

    // Quick filter: update draft immediately (chip appears right away)
    const pickImmediate = useCallback((category, attr, values) => {
      setDraft(d => {
        const idx = d.quickFilters.findIndex(f => f.category === category && f.attr.key === attr.key);
        let next;
        if (values.length === 0) {
          next = d.quickFilters.filter((_, i) => i !== idx);
        } else if (idx >= 0) {
          next = d.quickFilters.map((f, i) => i === idx ? {
            ...f,
            values
          } : f);
        } else {
          next = [...d.quickFilters, {
            category,
            attr,
            values
          }];
        }
        return {
          ...d,
          quickFilters: next
        };
      });
    }, []);
    const removeQuickFilter = useCallback(idx => {
      setDraft(d => ({
        ...d,
        quickFilters: d.quickFilters.filter((_, i) => i !== idx)
      }));
    }, []);

    // ── Apply: commit draft → applied, auto-enable types ─────────────
    const applyFilters = useCallback(() => {
      setDraft(prev => {
        let etypes = [...prev.eventTypes];
        if (prev.quickFilters.some(f => f.category === 'Reports' && f.values.length > 0) && !etypes.includes('Report')) etypes.push('Report');
        if (prev.quickFilters.some(f => f.category === 'Components' && f.values.length > 0) && !etypes.includes('Component')) etypes.push('Component');
        const next = {
          ...prev,
          eventTypes: etypes
        };
        setApplied(next);
        return next;
      });
    }, []);

    // ── Reset: clear everything back to defaults ──────────────────────
    const resetFilters = useCallback(() => {
      if (!window.confirm('Clear all filters? This will reset the filter bar and all advanced filter conditions.')) return;
      setDraft({
        ...INIT_FILTERS
      });
      setApplied({
        ...INIT_FILTERS
      });
      setAdvApplied(EMPTY_ADV);
    }, []);

    // Enter → apply
    useEffect(() => {
      const fn = e => {
        if (isDirty && e.key === 'Enter' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') applyFilters();
      };
      document.addEventListener('keydown', fn);
      return () => document.removeEventListener('keydown', fn);
    }, [isDirty, applyFilters]);

    // ── Advanced filters ──────────────────────────────────────────────
    const [advApplied, setAdvApplied] = useState(EMPTY_ADV);
    const [advPanelOpen, setAdvPanelOpen] = useState(false);
    const advActiveCount = (advApplied.groups || []).reduce((n, g) => n + g.rows.filter(r => r.values.length > 0 || r.text).length, 0);
    const hasAnyFilter = applied.period !== 'today' || applied.fleet.length || applied.subfleet.length || applied.aircraft.length || applied.quickFilters.some(f => f.values?.length > 0) || advActiveCount > 0;

    // ── External filter menu (from "Setup filter first") ─────────────
    const [externalMenuCat, setExternalMenuCat] = useState(null);
    const openFilterForCat = useCallback(cat => setExternalMenuCat(cat), []);

    // ── Filtered events (APPLIED state) ──────────────────────────────
    const filteredEvents = useMemo(() => {
      let evs = DVData.events;
      if (applied.eventTypes.length > 0) {
        // "Component" is a facet of reports: a report matches it when it carries component data
        const showComp = applied.eventTypes.includes('Component');
        evs = evs.filter(e => applied.eventTypes.includes(e.type) || showComp && e.type === 'Report' && e.comps && Object.keys(e.comps).length > 0);
      }
      if (applied.fleet.length) evs = evs.filter(e => applied.fleet.includes(e.fleet));
      if (applied.subfleet.length) evs = evs.filter(e => applied.subfleet.includes(e.sub));
      if (applied.aircraft.length) evs = evs.filter(e => applied.aircraft.includes(e.aircraft));
      evs = applyQuickFilters(evs, applied.quickFilters);
      evs = applyAdvancedFilters(evs, advApplied);
      return evs;
    }, [applied, advApplied]);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflow: 'hidden',
        background: '#FAFAFA'
      }
    }, /*#__PURE__*/React.createElement(DVHeader, {
      onToggleSidebar: () => setSidebarCollapsed(c => !c)
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flex: 1,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(DVSidebar, {
      activePage: "data-viewer",
      collapsed: sidebarCollapsed
    }), /*#__PURE__*/React.createElement("main", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        background: '#FAFAFA'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        borderBottom: '1px solid #EEEEEE',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(DVViewTabs, {
      views: VIEWS,
      activeIdx: activeView,
      onSelect: setActiveView,
      onAdd: () => {}
    }), /*#__PURE__*/React.createElement(DVFilterBar, {
      period: draft.period,
      onPeriod: setPeriod,
      fleet: draft.fleet,
      onFleet: setFleet,
      subfleet: draft.subfleet,
      onSubfleet: setSubfleet,
      aircraft: draft.aircraft,
      onAircraft: setAircraft,
      quickFilters: draft.quickFilters,
      onPickImmediate: pickImmediate,
      onRemoveQuickFilter: removeQuickFilter,
      isDirty: isDirty,
      hasAnyFilter: hasAnyFilter,
      onApply: applyFilters,
      onReset: resetFilters,
      externalMenuCat: externalMenuCat,
      onExternalMenuClose: () => setExternalMenuCat(null),
      advActiveCount: advActiveCount,
      onOpenAdvanced: () => setAdvPanelOpen(o => !o),
      advPanelOpen: advPanelOpen
    }), /*#__PURE__*/React.createElement(AdvFilterIndicator, {
      adv: advApplied,
      onEdit: () => setAdvPanelOpen(true),
      onClear: () => setAdvApplied(EMPTY_ADV)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        overflowX: 'auto',
        padding: '18px 24px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 1100
      }
    }, /*#__PURE__*/React.createElement(DVMetricsRow, {
      events: filteredEvents,
      eventTypes: new Set(applied.eventTypes),
      onActivateType: toggleType,
      appliedQuickFilters: applied.quickFilters,
      onSetupFilter: openFilterForCat
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid #EAEAEA',
        borderRadius: 8,
        minWidth: 1100
      }
    }, timelineLoaded ? /*#__PURE__*/React.createElement(DVTimelineChart, {
      timeSeries: DVData.ts,
      showFaults: applied.eventTypes.includes('Fault'),
      showLogs: applied.eventTypes.includes('Log'),
      showReports: applied.eventTypes.includes('Report'),
      chartComps: chartComps,
      onChangeChartComps: setChartComps
    }) : /*#__PURE__*/React.createElement(DVTimelinePlaceholder, {
      onLoad: () => setTimelineLoaded(true)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 1100
      }
    }, /*#__PURE__*/React.createElement(DVEventsTable, {
      events: filteredEvents,
      allTotal: 875,
      chartComps: chartComps
    }))))), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
      label: "Color"
    }), /*#__PURE__*/React.createElement(TweakColor, {
      label: "Accent",
      value: t.accent,
      options: [['#4547FF', '#ECEDFF'], ['#B86A00', '#FFF3D9'], ['#1E3A5F', '#E8EFF7']],
      onChange: v => setTweak('accent', v)
    })), advPanelOpen && /*#__PURE__*/React.createElement(AdvancedFiltersPanel, {
      initialAdv: advApplied,
      onApply: setAdvApplied,
      onClose: () => setAdvPanelOpen(false)
    }));
  }
  const dvRoot = ReactDOM.createRoot(document.getElementById('root'));
  dvRoot.render(/*#__PURE__*/React.createElement(DataViewerApp, null));
})();