import { Coffee, Flag, Languages } from 'lucide-react'
import StadiumView from './StadiumView.jsx'
import { SectionTitle } from './ui.jsx'
import { personal, profile } from '../data/cv.js'

// Drop a crest image at src/assets/man-utd-crest.(svg|png|webp) and it shows on the ticket
const crestFiles = import.meta.glob('../assets/man-utd-crest.{svg,png,webp,jpg}', {
  eager: true,
  import: 'default',
})
const crest = Object.values(crestFiles)[0]

// Decorative barcode, derived from the text so it stays the same on every render
function Barcode({ text }) {
  const bars = []
  let x = 0
  for (const ch of text.repeat(2)) {
    const code = ch.charCodeAt(0)
    const w = 1 + (code % 3)
    bars.push(<rect key={bars.length} x={x} y="0" width={w} height="40" />)
    x += w + 1 + ((code >> 2) % 3)
  }
  return (
    <svg className="mticket__barcode" viewBox={`0 0 ${x} 40`} preserveAspectRatio="none" aria-hidden="true">
      <g fill="currentColor">{bars}</g>
    </svg>
  )
}

function MatchTicket() {
  const { club } = personal
  return (
    <article className="mticket" aria-label={`${club.name} home match supporter ticket`}>
      <div className="mticket__main">
        <header className="mticket__head">
          {crest ? (
            <img className="mticket__crest" src={crest} alt="" width="40" height="40" />
          ) : (
            <span className="mticket__badge" aria-hidden="true">
              MU
            </span>
          )}
          <div className="mticket__title">
            <span className="mticket__club">{club.name}</span>
            <span className="mticket__type">Home match · Supporter ticket</span>
          </div>
          <span className="mticket__season">{club.season}</span>
        </header>

        <div className="mticket__view">
          <StadiumView />
          <span className="mticket__view-label">{club.ground}</span>
        </div>

        <dl className="mticket__fields">
          <div>
            <dt>Ground</dt>
            <dd>{club.ground}</dd>
          </div>
          <div>
            <dt>Address</dt>
            <dd>{club.address}</dd>
          </div>
          <div>
            <dt>Supporter</dt>
            <dd>{profile.shortName}</dd>
          </div>
          <div>
            <dt>Watching from</dt>
            <dd>{club.watchingFrom}</dd>
          </div>
        </dl>
        <p className="mticket__note">{club.text}</p>
      </div>

      <div className="mticket__stub">
        <div className="mticket__stub-row">
          <span className="mticket__label">Admit</span>
          <span className="mticket__admit">One</span>
        </div>
        <div className="mticket__stub-row">
          <span className="mticket__label">Ground</span>
          <span className="mticket__stub-value">{club.ground}</span>
        </div>
        <Barcode text={`${club.name}${profile.shortName}`} />
        <span className="mticket__chant">{club.chant}</span>
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
          <MatchTicket />
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
