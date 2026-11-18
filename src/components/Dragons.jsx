// Faint red dragons gliding across a fixed layer behind the page.
// The dragon is drawn flying right: horned head, spined S-neck, clawed legs,
// spade tail and bat wings that flap from the shoulder.

import { dragonShape as shape } from '../data/dragonShape.js'


const flight = [
  { size: 260, top: '12%', duration: 48, delay: -8, dir: 'right', opacity: 0.26 },
  { size: 170, top: '44%', duration: 64, delay: -40, dir: 'left', opacity: 0.2 },
  { size: 340, top: '68%', duration: 82, delay: -22, dir: 'right', opacity: 0.16 },
  { size: 140, top: '28%', duration: 56, delay: -52, dir: 'left', opacity: 0.22 },
]

function Dragon() {
  return (
    <svg className="dragon__svg" viewBox="0 -16 400 236" aria-hidden="true">
      <g className="dragon__wing dragon__wing--far">
        <path d={shape.wingFar} opacity="0.38" />
        <path className="dragon__bones" d={shape.wingFarBones} opacity="0.5" />
      </g>
      <path d={shape.tail} />
      <path d={shape.spade} />
      <path d={shape.leg} />
      <path d={shape.torso} />
      <path d={shape.neck} />
      <path d={shape.spines} />
      <path d={shape.horns} />
      <path d={shape.head} />
      <path d={shape.arm} />
      <ellipse className="dragon__eye" cx="356" cy="66" rx="3" ry="1.6" />
      <g className="dragon__wing dragon__wing--near">
        <path d={shape.wingNear} opacity="0.62" />
        <path className="dragon__bones dragon__bones--near" d={shape.wingNearBones} />
        <path className="dragon__claw" d={shape.thumb} />
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
            '--rest-x': `${10 + i * 22}vw`,
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
