import { GraduationCap, Languages, User } from 'lucide-react'
import OffTheClock from '../components/OffTheClock.jsx'
import OrgLogo from '../components/OrgLogo.jsx'
import { PageHeader, SectionTitle } from '../components/ui.jsx'
import { education, experience, languages, profile } from '../data/cv.js'

export default function About() {
  return (
    <>
      <PageHeader
        tag="I"
        kicker="About me"
        title="Lineage"
        intro="Who I am, the halls where I studied, the tongues I speak and what I do when the watch ends"
        meta={`${profile.role} · ${experience[0].company}`}
      />

      <section className="band">
        <div className="container split">
          <SectionTitle title="The Tale" icon={User} />
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
                <dt>Find me on</dt>
                <dd>
                  <a className="inline-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container split">
          <SectionTitle title="Halls of Learning" icon={GraduationCap} count={education.length} />
          <ol className="split__body rows">
            {education.map((e) => (
              <li key={e.title} className="row">
                <div className="row__main row__main--logo">
                  <OrgLogo slug={e.logo.slug} monogram={e.logo.monogram} name={e.title} size="lg" />
                  <div>
                    <h3>{e.title}</h3>
                    <p className="muted-line">{e.school}</p>
                  </div>
                </div>
                <div className="row__meta">
                  <span className="mono">{e.period}</span>
                  {e.cgpa && (
                    <span className="mono">
                      CGPA <strong>{e.cgpa}</strong>/4.00
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band">
        <div className="container split">
          <SectionTitle title="Tongues Spoken" icon={Languages} count={languages.length} />
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
      <OffTheClock />
    </>
  )
}
