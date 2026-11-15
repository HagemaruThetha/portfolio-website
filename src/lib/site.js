import { useEffect } from 'react'

export const pages = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/career', label: 'Career' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
]

export const allPages = [...pages, { to: '/contact', label: 'Contact' }]

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · Zharif Zhafran` : 'Zharif Zhafran · Junior Cloud Engineer'
  }, [title])
}
