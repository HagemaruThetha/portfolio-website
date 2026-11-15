import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Cloud,
  FolderGit2,
  GraduationCap,
  Layers,
  Mail,
  Server,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import photo1200 from '../assets/zharif-aws-1200.webp'
import photo640 from '../assets/zharif-aws-640.webp'
import OffTheClock from '../components/OffTheClock.jsx'
import StackBoard from '../components/StackBoard.jsx'
import { TechIcon } from '../components/TechIcon.jsx'
import { SectionTitle } from '../components/ui.jsx'
import { experience, stackLayers, focusAreas, languages, profile, projects, stats } from '../data/cv.js'

// Cloud and servers on the top row, security and network on the bottom
const boardRows = [
  [...stackLayers[0].items, ...stackLayers[1].items],
  [...stackLayers[2].items, ...stackLayers[3].items],
]
const toolCount = stackLayers.reduce((n, l) => n + l.items.length, 0)

const statIcons = [Briefcase, FolderGit2, BadgeCheck, GraduationCap]
const focusIcons = [Cloud, Server, ShieldCheck]
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
            <h1>
              {profile.firstNames} <span className="hero__surname">{profile.surname}</span>
            </h1>
            <div className="hero__bio">
              {profile.bio.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <dl className="hero__facts">
              <div>
                <dt>Now</dt>
                <dd>{experience[0].role}, {experience[0].company}</dd>
              </div>
              <div>
                <dt>Studied</dt>
                <dd>Computer Networks, UiTM</dd>
              </div>
              <div>
                <dt>Speaks</dt>
                <dd>{languages.map((l) => (l.level === 'Beginner' ? `basic ${l.name}` : l.name)).join(', ')}</dd>
              </div>
            </dl>
            <div className="hero__actions">
              <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                <Mail size={16} strokeWidth={1.5} aria-hidden="true" />
                Email me
              </a>
              <Link className="btn btn--secondary" to="/about">
                More about me
              </Link>
            </div>
          </div>
          <figure className="hero__photo">
            <img
              src={photo640}
              srcSet={`${photo640} 640w, ${photo1200} 1200w`}
              sizes="(max-width: 1024px) 100vw, 480px"
              width="1200"
              height="1500"
              fetchPriority="high"
              alt="Zharif smiling with a thumbs up in front of an AWS logo on a wooden wall"
            />
          </figure>
        </div>
      </section>

      <section className="band band--red" aria-label="At a glance">
        <div className="container">
          <dl className="stats">
            {stats.map((s, i) => {
              const Icon = statIcons[i]
              return (
                <div key={s.label}>
                  <dt>{s.label}</dt>
                  <dd>{s.value}</dd>
                  <Icon className="stats__icon" size={20} strokeWidth={1.5} aria-hidden="true" />
                </div>
              )
            })}
          </dl>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <SectionTitle title="My stack" icon={Layers} />
          <StackBoard rows={boardRows} />
          <div className="board__footer">
            <p className="muted-line">
              {toolCount} tools across {stackLayers.length} layers, from AWS down to the server rack
            </p>
            <Link className="btn btn--secondary" to="/skills">
              See the full stack
              <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <SectionTitle title="Recent roles" icon={Briefcase} link={{ to: '/career', label: 'Full career' }} />
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
          <SectionTitle title="Selected projects" icon={FolderGit2} link={{ to: '/projects', label: 'All projects' }} />
          <div className="project-grid">
            {projects.map((p) => (
              <Link key={p.id} to={`/projects#${p.id}`} className="card project-tile">
                <span className="project__area">{p.area}</span>
                <span className="project-tile__title">{p.title}</span>
                <span className="project-tile__logos" aria-hidden="true">
                  {p.stack.slice(0, 5).map((t) => (
                    <TechIcon key={t} name={t} />
                  ))}
                </span>
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

      <OffTheClock link={{ to: '/about', label: 'More about me' }} />

      <section className="band">
        <div className="container">
          <SectionTitle title="What I work on" icon={Wrench} link={{ to: '/skills', label: 'All skills' }} />
          <div className="focus-grid">
            {focusAreas.map((f, i) => {
              const Icon = focusIcons[i]
              return (
              <article key={f.title} className="focus">
                <span className="focus__head">
                  <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                  <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
