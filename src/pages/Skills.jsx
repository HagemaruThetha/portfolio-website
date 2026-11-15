import { PageHeader, Points, SectionTitle } from '../components/ui.jsx'
import { accomplishments, certifications, skills } from '../data/cv.js'

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
        <div className="container split">
          <SectionTitle title="Skills" />
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
          <SectionTitle title="Certifications" count={certifications.length} />
          <ol className="split__body rows">
            {certifications.map((c) => (
              <li key={c.title} className="row">
                <div className="row__main">
                  <h3>{c.title}</h3>
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
          <SectionTitle title="Accomplishments" count={accomplishments.length} />
          <div className="split__body wins">
            {accomplishments.map((a) => (
              <article key={a.title} className="card win">
                <div className="win__head">
                  <h3>{a.title}</h3>
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
