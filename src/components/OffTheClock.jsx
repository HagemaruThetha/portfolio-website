import { Coffee, Flag, Languages } from 'lucide-react'
import { SectionTitle } from './ui.jsx'
import { personal } from '../data/cv.js'

// Drop a crest image at src/assets/man-utd-crest.(svg|png|webp) and it shows on the ticket
const crestFiles = import.meta.glob('../assets/man-utd-crest.{svg,png,webp,jpg}', {
  eager: true,
  import: 'default',
})
const crest = Object.values(crestFiles)[0]

function SupporterTicket() {
  const { club } = personal
  return (
    <article className="ticket" aria-label={`${club.name} supporter`}>
      <div className="ticket__main">
        <div className="ticket__top">
          {crest && <img className="ticket__crest" src={crest} alt="" width="56" height="56" />}
          <div>
            <span className="ticket__eyebrow">Supporter card</span>
            <h3 className="ticket__club">{club.name}</h3>
          </div>
        </div>
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
        <SectionTitle title="Off the clock" icon={Coffee} link={link} />
        <div className="personal-grid">
          <SupporterTicket />
          <div className="personal-side">
            <article className="card personal-card">
              <span className="project__area with-symbol">
                <Flag size={14} strokeWidth={1.5} aria-hidden="true" />
                Competitions
              </span>
              <h3>{ctf.title}</h3>
              <span className="personal-card__figure">{ctf.figure}</span>
              <p>{ctf.text}</p>
            </article>
            <article className="card personal-card">
              <span className="project__area with-symbol">
                <Languages size={14} strokeWidth={1.5} aria-hidden="true" />
                Languages
              </span>
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
