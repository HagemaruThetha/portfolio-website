import { useState } from 'react'
import { Briefcase, GraduationCap, Plus } from 'lucide-react'
import OrgLogo from '../components/OrgLogo.jsx'
import { PageHeader, Points, SectionTitle, Stack } from '../components/ui.jsx'
import { education, experience } from '../data/cv.js'

const entries = [
  ...experience.map((job) => ({
    id: job.role + job.company,
    kind: job.kind,
    period: job.period,
    current: job.current,
    title: job.role,
    org: job.note ? `${job.company} · ${job.note}` : job.company,
    orgName: job.company,
    logo: job.logo,
    points: job.points,
    stack: job.stack,
  })),
  ...education.map((e) => ({
    id: e.title,
    kind: 'Education',
    period: e.period,
    title: e.title,
    org: e.school,
    orgName: e.title,
    logo: e.logo,
    points: e.cgpa ? [`CGPA ${e.cgpa} out of 4.00`] : [],
  })),
]

const filters = ['All', 'Work', 'Internship', 'Education']

const groups = [
  { title: 'Professional', kinds: ['Work', 'Internship'], icon: Briefcase },
  { title: 'Education', kinds: ['Education'], icon: GraduationCap },
]

const hasDetails = (entry) => entry.points.length > 0 || Boolean(entry.stack)

function Entry({ entry, open, onToggle }) {
  const panelId = `entry-${entry.id.replace(/\W+/g, '-')}`
  const expandable = hasDetails(entry)
  const Head = expandable ? 'button' : 'div'
  const headProps = expandable
    ? { type: 'button', 'aria-expanded': open, 'aria-controls': panelId, onClick: onToggle }
    : {}
  return (
    <li className={`entry${open && expandable ? ' is-open' : ''}`}>
      <Head className={`entry__head${expandable ? '' : ' is-static'}`} {...headProps}>
        <span className={`mono entry__period${entry.current ? ' is-current' : ''}`}>
          {entry.current && <span className="status-dot" aria-hidden="true" />}
          {entry.period}
        </span>
        <span className="entry__main">
          <OrgLogo slug={entry.logo?.slug} monogram={entry.logo?.monogram} name={entry.orgName} />
          <span className="entry__text">
            <span className="entry__title">{entry.title}</span>
            <span className="muted-line">{entry.org}</span>
          </span>
        </span>
        <span className="mono entry__kind">{entry.kind}</span>
        {expandable ? (
          <Plus className="entry__icon" size={16} strokeWidth={1.5} aria-hidden="true" />
        ) : (
          <span aria-hidden="true" />
        )}
      </Head>
      {open && expandable && (
        <div id={panelId} className="entry__body">
          <Points items={entry.points} />
          {entry.stack && <Stack items={entry.stack} />}
        </div>
      )}
    </li>
  )
}

export default function Career() {
  const [filter, setFilter] = useState('All')
  const [openIds, setOpenIds] = useState(() => new Set([entries[0].id]))

  const counts = Object.fromEntries(
    filters.map((f) => [f, f === 'All' ? entries.length : entries.filter((e) => e.kind === f).length]),
  )
  const visible = entries.filter((e) => filter === 'All' || e.kind === filter)
  const allOpen = visible.filter(hasDetails).every((e) => openIds.has(e.id))

  const toggle = (id) =>
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  const toggleAll = () =>
    setOpenIds((prev) => {
      const next = new Set(prev)
      visible.filter(hasDetails).forEach((e) => (allOpen ? next.delete(e.id) : next.add(e.id)))
      return next
    })

  return (
    <>
      <PageHeader
        tag="02"
        title="Career"
        intro="Work, internships and education, newest first"
        meta={`${counts.Work} work roles · ${counts.Internship} internships · ${counts.Education} schools and universities`}
      />

      <section className="band band--tight">
        <div className="container">
          <div className="toolbar">
            <div className="chips" role="group" aria-label="Filter entries">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  className="chip"
                  aria-pressed={filter === f}
                  onClick={() => setFilter(f)}
                >
                  {f}
                  <span className="chip__count">{counts[f]}</span>
                </button>
              ))}
            </div>
            <button type="button" className="text-button" onClick={toggleAll}>
              {allOpen ? 'Collapse all' : 'Expand all'}
            </button>
          </div>

          {groups.map((g) => {
            const items = visible.filter((e) => g.kinds.includes(e.kind))
            if (!items.length) return null
            return (
              <div key={g.title} className="entry-group">
                <SectionTitle title={g.title} icon={g.icon} count={items.length} />
                <ol className="entries">
                  {items.map((e) => (
                    <Entry key={e.id} entry={e} open={openIds.has(e.id)} onToggle={() => toggle(e.id)} />
                  ))}
                </ol>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
