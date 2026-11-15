import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'
import ArchitectureDiagram from '../components/ArchitectureDiagram.jsx'
import { SectionTitle } from '../components/ui.jsx'
import { experience, focusAreas, profile, projects, stats } from '../data/cv.js'
import { usePageTitle } from '../lib/site.js'

export default function Home() {
  usePageTitle()
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <p className="hero__role">
              <span className="status-dot" aria-hidden="true" />
              {profile.role} · {profile.location}
            </p>
            <h1>{profile.headline}</h1>
            <p className="hero__intro">{profile.intro}</p>
            <div className="hero__actions">
              <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                <Mail size={16} strokeWidth={1.5} aria-hidden="true" />
                Email me
              </a>
              <Link className="btn btn--secondary" to="/career">
                View career
              </Link>
            </div>
          </div>
          <div className="hero__visual">
            <ArchitectureDiagram />
          </div>
        </div>
      </section>

      <section className="band" aria-label="At a glance">
        <div className="container">
          <dl className="stats">
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <SectionTitle title="Recent roles" link={{ to: '/career', label: 'Full career' }} />
          <ol className="role-list">
            {experience.slice(0, 3).map((job) => (
              <li key={job.role + job.company}>
                <Link to="/career" className="role-link">
                  <span className={`mono role-link__period${job.current ? ' is-current' : ''}`}>
                    {job.current && <span className="status-dot" aria-hidden="true" />}
                    {job.period}
                  </span>
                  <span className="role-link__main">
                    <span className="role-link__title">{job.role}</span>
                    <span className="muted-line">{job.company}</span>
                  </span>
                  <span className="mono role-link__kind">{job.kind}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <SectionTitle title="Selected projects" link={{ to: '/projects', label: 'All projects' }} />
          <div className="project-grid">
            {projects.map((p) => (
              <Link key={p.id} to={`/projects#${p.id}`} className="card project-tile">
                <span className="project__area">{p.area}</span>
                <span className="project-tile__title">{p.title}</span>
                <span className="muted-line">{p.summary}</span>
                <span className="project-tile__more">
                  Read more
                  <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <SectionTitle title="What I work on" link={{ to: '/skills', label: 'All skills' }} />
          <div className="focus-grid">
            {focusAreas.map((f, i) => (
              <article key={f.title} className="focus">
                <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
