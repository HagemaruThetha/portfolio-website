import { TechIcon } from './TechIcon.jsx'
import { stackLayers } from '../data/cv.js'

// The full stack, cloud at the top down to network hardware
export default function StackLayers() {
  return (
    <ol className="layers">
      {stackLayers.map((l) => (
        <li key={l.layer} className="layer">
          <div className="layer__meta">
            <span className="layer__tag mono">{l.layer}</span>
            <h3>{l.title}</h3>
            <p className="muted-line">{l.usedAt}</p>
          </div>
          <ul className="layer__tools">
            {l.items.map((name) => (
              <li key={name} className="tool">
                <TechIcon name={name} size="md" />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )
}
