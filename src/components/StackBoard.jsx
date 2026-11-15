import { TechIcon } from './TechIcon.jsx'

// One scrolling row of a pitchside LED board. The items are rendered twice so
// the loop is seamless; the second copy is hidden from screen readers.
function BoardRow({ items, reverse }) {
  const duration = `${items.length * 3.2}s`
  const renderItems = (copy) =>
    items.map((name) => (
      <li key={`${copy}-${name}`} className="board__item" aria-hidden={copy === 1 || undefined}>
        <TechIcon name={name} size="md" />
        <span>{name}</span>
      </li>
    ))
  return (
    <div className="board__row">
      <ul className={`board__track${reverse ? ' is-reverse' : ''}`} style={{ '--duration': duration }}>
        {renderItems(0)}
        {renderItems(1)}
      </ul>
    </div>
  )
}

export default function StackBoard({ rows }) {
  return (
    <div className="board" aria-label="Tools I use">
      {rows.map((items, i) => (
        <BoardRow key={i} items={items} reverse={i % 2 === 1} />
      ))}
    </div>
  )
}
