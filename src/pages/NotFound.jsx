import { Link } from 'react-router-dom'
import { PageHeader } from '../components/ui.jsx'

export default function NotFound() {
  return (
    <>
      <PageHeader tag="404" kicker="Page not found" title="Lost in the Wilds" intro="This road leads nowhere. No page lives at this address" />
      <section className="band band--tight">
        <div className="container">
          <Link className="btn btn--secondary" to="/">
            Return to the Keep
          </Link>
        </div>
      </section>
    </>
  )
}
