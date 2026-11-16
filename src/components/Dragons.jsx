// Faint red dragons gliding across a fixed layer behind the page.
// Each one flaps, bobs and crosses the screen at its own size, height and pace.

const flight = [
  { size: 220, top: '14%', duration: 46, delay: -8, dir: 'right', opacity: 0.14 },
  { size: 140, top: '46%', duration: 62, delay: -40, dir: 'left', opacity: 0.1 },
  { size: 300, top: '70%', duration: 80, delay: -22, dir: 'right', opacity: 0.08 },
  { size: 110, top: '30%', duration: 54, delay: -52, dir: 'left', opacity: 0.12 },
]

function Dragon() {
  return (
    <svg className="dragon__svg" viewBox="0 0 240 140" aria-hidden="true">
      <g className="dragon__wing dragon__wing--far">
        <path
          opacity="0.6"
          d="M128 74 C132 54 140 34 152 14 C152 26 156 34 164 38 C164 46 170 52 178 54 C174 60 176 66 182 70 C166 72 148 76 134 80 Z"
        />
      </g>
      <path d="M112 84 C88 90 66 100 46 104 C34 107 24 106 16 100 C22 108 30 112 40 112 C58 112 80 104 114 94 Z" />
      <path d="M18 100 L4 92 L8 104 L2 112 L16 108 L22 104 Z" />
      <path d="M96 84 C104 74 118 68 134 66 C148 64 160 64 170 60 C178 56 184 48 190 44 L194 34 L196 44 L204 38 L202 46 C210 46 218 50 226 54 L216 56 L224 60 C214 62 206 60 200 58 C194 62 188 68 180 74 C168 82 152 88 136 92 C120 96 104 96 96 84 Z" />
      <path d="M120 92 C118 98 114 102 108 104 L112 106 C120 104 126 100 128 94 Z M150 86 C150 94 148 98 142 102 L146 104 C154 100 158 94 158 86 Z" />
      <g className="dragon__wing dragon__wing--near">
        <path d="M120 80 C118 58 112 34 98 10 C104 22 112 28 122 28 C120 38 126 46 136 48 C134 56 138 62 146 66 C140 72 132 76 126 82 Z" />
      </g>
    </svg>
  )
}

export default function Dragons() {
  return (
    <div className="sky" aria-hidden="true">
      {flight.map((d, i) => (
        <div
          key={i}
          className={`dragon dragon--${d.dir}`}
          style={{
            '--size': `${d.size}px`,
            '--duration': `${d.duration}s`,
            '--delay': `${d.delay}s`,
            '--rest-x': `${15 + i * 22}vw`,
            top: d.top,
            opacity: d.opacity,
          }}
        >
          <div className="dragon__bob">
            <Dragon />
          </div>
        </div>
      ))}
    </div>
  )
}
