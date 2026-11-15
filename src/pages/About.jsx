import { PageHeader, SectionTitle } from '../components/ui.jsx'
import { education, languages, profile } from '../data/cv.js'

export default function About() {
  return (
    <>
      <PageHeader
        tag="01"
        title="About"
        intro="Who I am, where I studied and the languages I work in"
        meta={`${profile.role} · ${profile.location}`}
      />

      <section className="band">
        <div className="container split">
          <SectionTitle title="Summary" />
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

      <section className="band">
        <div className="container split">
          <SectionTitle title="Education" count={education.length} />
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

      <section className="band">
        <div className="container split">
          <SectionTitle title="Languages" count={languages.length} />
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
    </>
  )
}
