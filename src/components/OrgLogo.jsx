// Logos for workplaces and schools. Add a file to src/assets/orgs/<slug>.(svg|png|webp|jpg)
// and it replaces the monogram for that organisation.
const files = import.meta.glob('../assets/orgs/*.{svg,png,webp,jpg}', { eager: true, import: 'default' })

const bySlug = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.split('/').pop().replace(/\.\w+$/, ''), url]),
)

export default function OrgLogo({ slug, name, monogram, wide, size = 'md' }) {
  const src = bySlug[slug]
  if (src) {
    return (
      <span className={`org-logo org-logo--${size}${wide ? ' org-logo--wide' : ''}`}>
        <img src={src} alt={`${name} logo`} loading="lazy" />
      </span>
    )
  }
  return (
    <span className={`org-logo org-logo--${size} org-logo--mono`} aria-hidden="true">
      {monogram}
    </span>
  )
}
