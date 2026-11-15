import { Mail, MapPin, Phone } from 'lucide-react'
import { PageHeader } from '../components/ui.jsx'
import { profile } from '../data/cv.js'

export default function Contact() {
  return (
    <>
      <PageHeader
        tag="05"
        title="Contact"
        intro="Open to cloud engineering and infrastructure roles. Email is the fastest way to reach me."
      />

      <section className="band band--tight">
        <div className="container">
          <ul className="contact-cards">
            <li>
              <a className="card contact-card" href={`mailto:${profile.email}`}>
                <Mail size={18} strokeWidth={1.5} aria-hidden="true" />
                <span className="muted-line">Email</span>
                <span className="contact-card__value">{profile.email}</span>
              </a>
            </li>
            <li>
              <a className="card contact-card" href={profile.phoneHref}>
                <Phone size={18} strokeWidth={1.5} aria-hidden="true" />
                <span className="muted-line">Phone</span>
                <span className="contact-card__value">{profile.phone}</span>
              </a>
            </li>
            <li>
              <div className="card contact-card">
                <MapPin size={18} strokeWidth={1.5} aria-hidden="true" />
                <span className="muted-line">Location</span>
                <span className="contact-card__value">{profile.location}</span>
              </div>
            </li>
          </ul>
          <p className="muted-line contact-note">References available on request</p>
        </div>
      </section>
    </>
  )
}
