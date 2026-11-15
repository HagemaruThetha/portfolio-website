import { Award, BadgeCheck, Flag, Layers, ListChecks, Trophy } from 'lucide-react'
import { TechIcon, TechTile } from '../components/TechIcon.jsx'
import { PageHeader, Points, SectionTitle } from '../components/ui.jsx'
import { accomplishments, certifications, skills, techStack } from '../data/cv.js'

export default function Skills() {
  return (
    <>
      <PageHeader
        tag="04"
        title="Skills"
        intro="Tools I use, courses I completed and competitions I entered"
        meta={`${skills.length} skill areas · ${certifications.length} certifications · ${accomplishments.length} CTF competitions`}
      />

      <section className="band">
        <div className="container">
          <SectionTitle title="Stack" icon={Layers} />
          <div className="stack-groups">
            {techStack.map((g) => (
              <div key={g.group} className="stack-group">
                <h3>{g.group}</h3>
                <ul className="tech-tiles">
                  {g.items.map((name) => (
                    <TechTile key={name} name={name} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container split">
          <SectionTitle title="Skills" icon={ListChecks} />
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

      <section className="band">
        <div className="container split">
          <SectionTitle title="Certifications" icon={BadgeCheck} count={certifications.length} />
          <ol className="split__body rows">
            {certifications.map((c) => (
              <li key={c.title} className="row">
                <div className="row__main">
                  <h3 className="with-logo">
                    <TechIcon name={c.issuer} size="md" />
                    {c.title}
                  </h3>
                  <Points items={c.points} />
                </div>
                <div className="row__meta">
                  <span className="mono">{c.issuer}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band">
        <div className="container split">
          <SectionTitle title="Accomplishments" icon={Award} count={accomplishments.length} />
          <div className="split__body wins">
            {accomplishments.map((a) => (
              <article key={a.title} className="card win">
                <div className="win__head">
                  <h3 className="with-symbol">
                    {a.result === '2nd place' ? (
                      <Trophy size={18} strokeWidth={1.5} aria-hidden="true" />
                    ) : (
                      <Flag size={18} strokeWidth={1.5} aria-hidden="true" />
                    )}
                    {a.title}
                  </h3>
                  <span className="mono">{a.period}</span>
                </div>
                <p className={`win__result${a.result === '2nd place' ? ' is-key' : ''}`}>{a.result}</p>
                <p className="muted-line">{a.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
