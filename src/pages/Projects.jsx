import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ArchitectureDiagram from '../components/ArchitectureDiagram.jsx'
import { PageHeader, Points, Stack } from '../components/ui.jsx'
import { projects } from '../data/cv.js'

export default function Projects() {
  const { hash } = useLocation()

  // Jump to a project when arriving from a home page link
  useEffect(() => {
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash])

  const [main, ...rest] = projects

  return (
    <>
      <PageHeader
        tag="III"
        kicker="Projects"
        title="Deeds"
        intro="Works of cloud architecture, network security and data analysis"
        meta={`${projects.length} projects · 1 cloud architecture · 2 security analysis`}
      />

      <section className="band band--tight">
        <div className="container project-list">
          <article id={main.id} className="card project-feature">
            <div className="project-feature__text">
              <p className="project__area">{main.area}</p>
              <h2>{main.title}</h2>
              <Points items={main.points} />
              <Stack items={main.stack} />
            </div>
            <div className="project-feature__visual">
              <ArchitectureDiagram />
            </div>
          </article>

          <div className="project-grid project-grid--two">
            {rest.map((p) => (
              <article key={p.id} id={p.id} className="card project">
                <p className="project__area">{p.area}</p>
                <h2>{p.title}</h2>
                <Points items={p.points} />
                <Stack items={p.stack} />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
