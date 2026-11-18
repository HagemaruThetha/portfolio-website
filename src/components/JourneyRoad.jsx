import OrgLogo from './OrgLogo.jsx'
import { education, experience } from '../data/cv.js'

// Every school and job as a waystone on one winding road, oldest first
const stops = [
  ...education.map((e) => ({ ...e.road, logo: e.logo, name: e.title, kind: 'Study' })),
  ...experience.map((j) => ({ ...j.road, logo: j.logo, name: j.company, kind: j.kind })),
]
  .filter((s) => s.year)
  .sort((a, b) => Number(a.year) - Number(b.year))

// Order within 2026 follows the CV: Kenanga, Exabytes, then Stampede
const order = ['Kenanga', 'Exabytes', 'Stampede Solutions']
stops.sort((a, b) => a.year - b.year || order.indexOf(a.label) - order.indexOf(b.label))

export default function JourneyRoad() {
  const n = stops.length
  // A gentle wave through the stops, drawn behind them
  const points = stops.map((_, i) => [((i + 0.5) / n) * 1000, i % 2 ? 150 : 70])
  const path = points.reduce((d, [x, y], i) => {
    if (i === 0) return `M0 110 C${x / 2} 110 ${x / 2} ${y} ${x} ${y}`
    const [px, py] = points[i - 1]
    const mx = (px + x) / 2
    return `${d} C${mx} ${py} ${mx} ${y} ${x} ${y}`
  }, '')

  return (
    <figure className="road" aria-label="My journey from school to work, oldest first">
      <svg className="road__path" viewBox="0 0 1000 220" preserveAspectRatio="none" aria-hidden="true">
        <path d={`${path} C${1000 - 30} ${points[n - 1][1]} 970 110 1000 110`} />
      </svg>
      <ol className="road__stops" style={{ '--n': n }}>
        {stops.map((s, i) => (
          <li key={s.label} className={`road__stop${i % 2 ? ' is-low' : ''}${i === n - 1 ? ' is-now' : ''}`}>
            <span className="road__stone">
              <OrgLogo slug={s.logo?.slug} monogram={s.logo?.monogram} wide={s.logo?.wide} name={s.name} />
            </span>
            <span className="road__year">{s.year}</span>
            <span className="road__label">{s.label}</span>
            <span className="road__kind">{s.kind}</span>
          </li>
        ))}
      </ol>
    </figure>
  )
}
