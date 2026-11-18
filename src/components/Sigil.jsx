import { dragonShape as d } from '../data/dragonShape.js'

// House Zhafran: a red dragon flying over a cloud, on a black shield with a gold border,
// above a ribbon with the house words. Original art, drawn in SVG.
export default function Sigil({ size = 120, ribbon = true, className = '' }) {
  const height = ribbon ? size * 1.25 : size * 1.12
  return (
    <svg
      className={`sigil ${className}`}
      viewBox={ribbon ? '0 0 200 250' : '0 0 200 224'}
      width={size}
      height={height}
      role="img"
      aria-label="House Zhafran sigil: a red dragon over a cloud on a black shield"
    >
      <defs>
        <linearGradient id="sigil-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f1d27a" />
          <stop offset="0.5" stopColor="#c9a24a" />
          <stop offset="1" stopColor="#8a6a24" />
        </linearGradient>
      </defs>
      {/* Shield */}
      <path
        d="M16 14H184V104C184 162 144 196 100 218C56 196 16 162 16 104Z"
        fill="#0b0908"
        stroke="url(#sigil-gold)"
        strokeWidth="7"
      />
      <path
        d="M28 26H172V104C172 154 138 184 100 204C62 184 28 154 28 104Z"
        fill="none"
        stroke="#c9a24a"
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />
      {/* Cloud */}
      <path
        d="M52 166C40 166 34 156 40 148C38 136 52 128 64 134C68 118 90 114 100 128C110 116 132 120 134 136C148 132 160 144 154 156C160 162 154 170 146 170H58C55 170 53 168 52 166Z"
        fill="#efe4cc"
      />
      {/* Dragon over the cloud */}
      <g transform="translate(18 52) scale(0.42)" fill="#d10a0a">
        <path d={d.wingFar} opacity="0.55" />
        <path d={d.tail} />
        <path d={d.spade} />
        <path d={d.leg} />
        <path d={d.torso} />
        <path d={d.neck} />
        <path d={d.spines} />
        <path d={d.horns} />
        <path d={d.head} />
        <path d={d.arm} />
        <path d={d.wingNear} />
        <path d={d.wingNearBones} fill="none" stroke="#f1d27a" strokeWidth="4" strokeLinecap="round" />
      </g>
      {ribbon && (
        <g>
          <path d="M2 214L20 206V238L2 246L10 230Z" fill="#830000" />
          <path d="M198 214L180 206V238L198 246L190 230Z" fill="#830000" />
          <path d="M14 204H186V236H14Z" fill="#bc0202" stroke="url(#sigil-gold)" strokeWidth="2" />
          <text
            x="100"
            y="225"
            textAnchor="middle"
            fill="#f1d27a"
            fontFamily="Cinzel, serif"
            fontSize="10.5"
            fontWeight="600"
            letterSpacing="0.4"
          >
            WE BUILD IN THE CLOUDS
          </text>
        </g>
      )}
    </svg>
  )
}
