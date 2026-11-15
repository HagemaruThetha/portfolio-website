import { useEffect, useState } from 'react'
import { ArrowUpRight, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import ArchitectureDiagram from './components/ArchitectureDiagram.jsx'
import {
  accomplishments,
  certifications,
  education,
  experience,
  languages,
  profile,
  projects,
  skills,
} from './data/cv.js'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const close = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [open])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="wordmark" href="#top">
          {profile.shortName}
        </a>
        <nav className="site-nav" aria-label="Primary">
          {nav.slice(0, -1).map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn btn--small btn--secondary site-header__cta" href="#contact">
          Contact
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

function SectionHead({ index, title, id }) {
  return (
    <div className="section-head">
      <span className="cable-tag" aria-hidden="true">
        {String(index).padStart(2, '0')}
      </span>
      <h2 id={id}>{title}</h2>
    </div>
  )
}

function Stack({ items }) {
  return (
    <ul className="stack" aria-label="Tools">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
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
            <a className="btn btn--secondary" href="#experience">
              View experience
            </a>
          </div>
        </div>
        <div className="hero__visual">
          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" aria-labelledby="about-title" id="about">
      <div className="container split">
        <SectionHead index={1} title="Summary" id="about-title" />
        <div className="split__body">
          {profile.summary.map((p) => (
            <p key={p.slice(0, 24)} className="lead">
              {p}
            </p>
          ))}
          <dl className="facts">
            <div>
              <dt>Focus</dt>
              <dd>{profile.focus.join(', ')}</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="section" aria-labelledby="education-title">
      <div className="container split">
        <SectionHead index={2} title="Education" id="education-title" />
        <ol className="split__body rows">
          {education.map((e) => (
            <li key={e.title} className="row">
              <div className="row__main">
                <h3>{e.title}</h3>
                <p className="muted-line">{e.school}</p>
              </div>
              <div className="row__meta">
                <span className="mono">{e.period}</span>
                <span className="mono">
                  CGPA <strong>{e.cgpa}</strong>/4.00
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" aria-labelledby="experience-title" id="experience">
      <div className="container split">
        <SectionHead index={3} title="Experience" id="experience-title" />
        <ol className="split__body timeline">
          {experience.map((job) => (
            <li key={job.role + job.company} className="job">
              <div className="job__head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="muted-line">
                    {job.company}
                    {job.note && <span className="job__note"> · {job.note}</span>}
                  </p>
                </div>
                <span className={`mono job__period${job.current ? ' is-current' : ''}`}>
                  {job.current && <span className="status-dot" aria-hidden="true" />}
                  {job.period}
                </span>
              </div>
              <ul className="points">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Stack items={job.stack} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Projects() {
  const [main, ...rest] = projects
  return (
    <section className="section" aria-labelledby="projects-title" id="projects">
      <div className="container">
        <SectionHead index={4} title="Projects" id="projects-title" />
        <div className="projects">
          <article className="card project project--main">
            <p className="project__area">{main.area}</p>
            <h3>{main.title}</h3>
            <ul className="points">
              {main.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <Stack items={main.stack} />
            <a className="text-link" href="#top">
              See the diagram
              <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </article>
          {rest.map((project) => (
            <article key={project.id} className="card project">
              <p className="project__area">{project.area}</p>
              <h3>{project.title}</h3>
              <ul className="points">
                {project.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Stack items={project.stack} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section" aria-labelledby="skills-title" id="skills">
      <div className="container split">
        <SectionHead index={5} title="Skills" id="skills-title" />
        <div className="split__body skill-groups">
          {skills.map((g) => (
            <div key={g.group} className="skill-group">
              <h3>{g.group}</h3>
              <dl className="skill-list">
                {g.items.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Credentials() {
  return (
    <section className="section" aria-labelledby="certs-title">
      <div className="container split">
        <SectionHead index={6} title="Certifications" id="certs-title" />
        <ol className="split__body rows">
          {certifications.map((c) => (
            <li key={c.title} className="row row--stacked">
              <div className="row__main">
                <h3>{c.title}</h3>
                <ul className="points">
                  {c.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="row__meta">
                <span className="mono">{c.issuer}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Accomplishments() {
  return (
    <section className="section" aria-labelledby="wins-title">
      <div className="container split">
        <SectionHead index={7} title="Accomplishments" id="wins-title" />
        <div className="split__body wins">
          {accomplishments.map((a) => (
            <article key={a.title} className="card win">
              <div className="win__head">
                <h3>{a.title}</h3>
                <span className="mono">{a.period}</span>
              </div>
              <p className={`win__result${a.result === '2nd place' ? ' is-key' : ''}`}>
                {a.result}
              </p>
              <p className="muted-line">{a.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Languages() {
  return (
    <section className="section" aria-labelledby="lang-title">
      <div className="container split">
        <SectionHead index={8} title="Languages" id="lang-title" />
        <dl className="split__body langs">
          {languages.map((l) => (
            <div key={l.name}>
              <dt>{l.name}</dt>
              <dd className="mono">{l.level}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section contact" aria-labelledby="contact-title" id="contact">
      <div className="container split">
        <SectionHead index={9} title="Contact" id="contact-title" />
        <div className="split__body">
          <p className="contact__lead">
            Open to cloud engineering and infrastructure roles. Email is the fastest way to reach me.
          </p>
          <ul className="contact__list">
            <li>
              <Mail size={16} strokeWidth={1.5} aria-hidden="true" />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <Phone size={16} strokeWidth={1.5} aria-hidden="true" />
              <a href={profile.phoneHref}>{profile.phone}</a>
            </li>
            <li>
              <MapPin size={16} strokeWidth={1.5} aria-hidden="true" />
              <span>{profile.location}</span>
            </li>
          </ul>
          <p className="muted-line">References available on request</p>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
        <Accomplishments />
        <Languages />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="container site-footer__inner">
          <span>{profile.name}</span>
          <span className="mono">{new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  )
}
