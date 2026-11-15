// Old Trafford seen from a seat in the stand, drawn in SVG.
// Pitch geometry: the touchline runs from x 40..600 at the far side (y 132)
// to x 0..640 at the near side (y 204), so the pitch reads in perspective.

const W = 640
const FAR_Y = 132
const NEAR_Y = 204
const leftX = (y) => 40 - ((y - FAR_Y) * 40) / (NEAR_Y - FAR_Y)
const rightX = (y) => 600 + ((y - FAR_Y) * 40) / (NEAR_Y - FAR_Y)

function stripes() {
  const n = 12
  return Array.from({ length: n }, (_, i) => {
    const t0 = i / n
    const t1 = (i + 1) / n
    const top0 = 40 + 560 * t0
    const top1 = 40 + 560 * t1
    const bot0 = W * t0
    const bot1 = W * t1
    return (
      <polygon
        key={i}
        points={`${top0},${FAR_Y} ${top1},${FAR_Y} ${bot1},${NEAR_Y} ${bot0},${NEAR_Y}`}
        fill={i % 2 ? '#2f7a33' : '#36883a'}
      />
    )
  })
}

function seatRows(y0, y1, step = 4) {
  const rows = []
  for (let y = y0 + step; y < y1; y += step) {
    rows.push(<line key={y} x1="0" x2={W} y1={y} y2={y} stroke="#6e0000" strokeWidth="1" />)
  }
  return rows
}

function box(side, y0, y1, depth) {
  const xa = side === 'left' ? leftX(y0) : rightX(y0)
  const xb = side === 'left' ? leftX(y1) : rightX(y1)
  const d = side === 'left' ? depth : -depth
  return `${xa},${y0} ${xa + d},${y0} ${xb + d * 1.1},${y1} ${xb},${y1}`
}

export default function StadiumView() {
  return (
    <svg
      className="stadium"
      viewBox={`0 0 ${W} 240`}
      role="img"
      aria-label="Illustration of Old Trafford from a seat in the stand, with red seats spelling Manchester United"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="st-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0a1124" />
          <stop offset="1" stopColor="#1d2a4d" />
        </linearGradient>
        <radialGradient id="st-glow" cx="0.5" cy="0" r="0.8">
          <stop offset="0" stopColor="#fff6dc" stopOpacity="0.35" />
          <stop offset="1" stopColor="#fff6dc" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="st-seat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c40a0a" />
          <stop offset="1" stopColor="#8a0000" />
        </linearGradient>
      </defs>

      {/* Night sky and floodlight haze */}
      <rect width={W} height="240" fill="url(#st-sky)" />
      <rect width={W} height="140" fill="url(#st-glow)" />

      {/* Roof with its truss and a strip of lights */}
      <polygon points={`0,10 ${W},10 ${W},30 0,30`} fill="#2b2d33" />
      {Array.from({ length: 16 }, (_, i) => (
        <line key={i} x1={i * 40 + 20} y1="10" x2={i * 40} y2="30" stroke="#3d4048" strokeWidth="2" />
      ))}
      {Array.from({ length: 32 }, (_, i) => (
        <rect key={i} x={i * 20 + 6} y="30" width="8" height="2" fill="#fff4cc" />
      ))}

      {/* Upper tier with the lettering in the seats */}
      <rect x="0" y="32" width={W} height="54" fill="url(#st-seat)" />
      {seatRows(32, 86)}
      <text
        x={W / 2}
        y="66"
        textAnchor="middle"
        fill="#f6efe6"
        fontFamily="IBM Plex Sans, system-ui, sans-serif"
        fontWeight="600"
        fontSize="22"
        letterSpacing="6"
      >
        MANCHESTER UNITED
      </text>

      {/* Concourse, lower tier and pitchside boards */}
      <rect x="0" y="86" width={W} height="6" fill="#141414" />
      <rect x="0" y="92" width={W} height="32" fill="url(#st-seat)" />
      {seatRows(92, 124)}
      <rect x="0" y="124" width={W} height="8" fill="#111111" />
      <rect x="0" y="126" width={W} height="2" fill="#bc0202" />

      {/* Pitch */}
      {stripes()}
      <g fill="none" stroke="#f4f4f0" strokeWidth="1.4" strokeOpacity="0.9">
        <polygon points={`40,${FAR_Y} 600,${FAR_Y} ${W},${NEAR_Y} 0,${NEAR_Y}`} />
        <line x1="320" y1={FAR_Y} x2="320" y2={NEAR_Y} />
        <ellipse cx="320" cy="167" rx="44" ry="14" />
        <polygon points={box('left', 146, 190, 74)} />
        <polygon points={box('right', 146, 190, 74)} />
        <polygon points={box('left', 158, 178, 26)} />
        <polygon points={box('right', 158, 178, 26)} />
      </g>
      <circle cx="320" cy="167" r="1.8" fill="#f4f4f0" />
      {/* Goals */}
      <rect x={leftX(168) - 6} y="160" width="6" height="16" fill="none" stroke="#ffffff" strokeWidth="1.4" />
      <rect x={rightX(168)} y="160" width="6" height="16" fill="none" stroke="#ffffff" strokeWidth="1.4" />

      {/* Seat backs in front of the viewer */}
      <rect x="0" y="206" width={W} height="34" fill="#140404" />
      {Array.from({ length: 21 }, (_, i) => (
        <g key={i}>
          <rect x={i * 31 - 4} y="212" width="26" height="30" rx="6" fill="#8a0000" />
          <rect x={i * 31 - 4} y="212" width="26" height="4" rx="2" fill="#c40a0a" />
        </g>
      ))}
    </svg>
  )
}
