import { SectionTitle } from './ui.jsx'
import { personal } from '../data/cv.js'

function SupporterTicket() {
  const { club } = personal
  return (
    <article className="ticket" aria-label={`${club.name} supporter`}>
      <div className="ticket__main">
        <span className="ticket__eyebrow">Supporter card</span>
        <h3 className="ticket__club">{club.name}</h3>
        <p className="ticket__text">{club.text}</p>
        <dl className="ticket__fields">
          {club.fields.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="ticket__stub" aria-hidden="true">
        <span className="ticket__stub-label">Admit</span>
        <span className="ticket__stub-value">One</span>
        <span className="ticket__chant">{club.chant}</span>
      </div>
    </article>
  )
}

export default function OffTheClock({ link }) {
  const { ctf, japanese } = personal
  return (
    <section className="band">
      <div className="container">
        <SectionTitle title="Off the clock" link={link} />
        <div className="personal-grid">
          <SupporterTicket />
          <div className="personal-side">
            <article className="card personal-card">
              <span className="project__area">Competitions</span>
              <h3>{ctf.title}</h3>
              <span className="personal-card__figure">{ctf.figure}</span>
              <p>{ctf.text}</p>
            </article>
            <article className="card personal-card">
              <span className="project__area">Languages</span>
              <h3>{japanese.title}</h3>
              <span className="personal-card__jp" lang="ja">
                {japanese.phrase}
              </span>
              <p>{japanese.text}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
