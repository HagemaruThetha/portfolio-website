import { useEffect } from 'react'

export const pages = [
  { to: '/', label: 'The Keep', end: true },
  { to: '/about', label: 'Lineage' },
  { to: '/career', label: 'The Journey' },
  { to: '/projects', label: 'Deeds' },
  { to: '/skills', label: 'The Armoury' },
]

export const allPages = [...pages, { to: '/contact', label: 'Send a Raven' }]

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · House Zhafran` : 'Zharif Zhafran of House Zhafran · Junior Cloud Engineer'
  }, [title])
}
