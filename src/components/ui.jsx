import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { usePageTitle } from '../lib/site.js'

export function CableTag({ children }) {
  return (
    <span className="cable-tag" aria-hidden="true">
      {children}
    </span>
  )
}

export function PageHeader({ tag, title, intro, meta, action }) {
  usePageTitle(title)
  return (
    <header className="page-header">
      <div className="container page-header__inner">
        <div>
          <CableTag>{tag}</CableTag>
          <h1>{title}</h1>
          {intro && <p className="page-header__intro">{intro}</p>}
          {meta && <p className="page-header__meta mono">{meta}</p>}
        </div>
        {action}
      </div>
    </header>
  )
}

export function SectionTitle({ title, count, link }) {
  return (
    <div className="section-title">
      <h2>
        {title}
        {count != null && <span className="mono section-title__count">{count}</span>}
      </h2>
      {link && (
        <Link className="text-link" to={link.to}>
          {link.label}
          <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
        </Link>
      )}
    </div>
  )
}

export function Stack({ items }) {
  return (
    <ul className="stack" aria-label="Tools">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export function Points({ items }) {
  return (
    <ul className="points">
      {items.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  )
}
