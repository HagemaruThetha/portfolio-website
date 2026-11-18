import { ArrowUpRight, Bird } from 'lucide-react'
import { TechIcon } from '../components/TechIcon.jsx'
import { PageHeader } from '../components/ui.jsx'
import { profile } from '../data/cv.js'

export default function Contact() {
  return (
    <>
      <PageHeader
        tag="V"
        kicker="Contact"
        title="Send a Raven"
        intro="Open to cloud engineering and infrastructure roles. My ravens fly by email and LinkedIn."
      />

      <section className="band band--tight">
        <div className="container">
          <ul className="contact-cards contact-cards--two">
            <li>
              <a className="card contact-card" href={`mailto:${profile.email}`}>
                <span className="contact-card__head">
                  <span className="contact-card__icon">
                    <Bird size={18} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                </span>
                <span className="muted-line">Raven by email</span>
                <span className="contact-card__value">{profile.email}</span>
              </a>
            </li>
            <li>
              <a className="card contact-card" href={profile.linkedin} target="_blank" rel="noreferrer">
                <span className="contact-card__head">
                  <TechIcon name="LinkedIn" size="md" />
                  <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span className="muted-line">LinkedIn</span>
                <span className="contact-card__value">{profile.linkedinLabel}</span>
              </a>
            </li>
          </ul>
          <p className="muted-line contact-note">References available on request, sealed and sent by raven</p>
        </div>
      </section>
    </>
  )
}
