import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Mail, Menu, X } from 'lucide-react'
import { profile } from '../data/cv.js'
import { allPages, pages } from '../lib/site.js'

function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (!open) return
    const close = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [open])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="wordmark" to="/">
          {profile.shortName}
        </Link>
        <nav className="site-nav" aria-label="Primary">
          {pages.map((p) => (
            <NavLink key={p.to} to={p.to} end={p.end}>
              {p.label}
            </NavLink>
          ))}
        </nav>
        <Link className="btn btn--small btn--secondary site-header__cta" to="/contact">
          Contact
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Primary">
          {allPages.map((p) => (
            <NavLink key={p.to} to={p.to} end={p.end} onClick={() => setOpen(false)}>
              {p.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <div>
            <p className="footer-cta__title">Hiring for a cloud or infrastructure role?</p>
            <p className="muted-line">Email is the fastest way to reach me</p>
          </div>
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            <Mail size={16} strokeWidth={1.5} aria-hidden="true" />
            Email me
          </a>
        </div>
        <div className="site-footer__bottom">
          <span>{profile.name}</span>
          <nav className="footer-nav" aria-label="Footer">
            {allPages.map((p) => (
              <Link key={p.to} to={p.to}>
                {p.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  const { pathname, hash } = useLocation()

  // New page starts at the top, unless the link points at a section
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" key={pathname} className="page">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
