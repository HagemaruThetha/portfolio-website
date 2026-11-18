import { ArrowUpRight, Mail } from 'lucide-react'
import { TechIcon } from '../components/TechIcon.jsx'
import { PageHeader } from '../components/ui.jsx'
import { profile } from '../data/cv.js'

export default function Contact() {
  return (
    <>
      <PageHeader
        tag="05"
        title="Contact"
        intro="Open to cloud engineering and infrastructure roles. Email or LinkedIn are the best ways to reach me."
      />

      <section className="band band--tight">
        <div className="container">
          <ul className="contact-cards contact-cards--two">
            <li>
              <a className="card contact-card" href={`mailto:${profile.email}`}>
                <span className="contact-card__head">
                  <span className="contact-card__icon">
                    <Mail size={18} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                </span>
                <span className="muted-line">Email</span>
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
          <p className="muted-line contact-note">References available on request</p>
        </div>
      </section>
    </>
  )
}
