import { Link } from 'react-router-dom'
import { PageHeader } from '../components/ui.jsx'

export default function NotFound() {
  return (
    <>
      <PageHeader tag="404" title="Page not found" intro="This address does not match any page on the site" />
      <section className="band band--tight">
        <div className="container">
          <Link className="btn btn--secondary" to="/">
            Back to home
          </Link>
        </div>
      </section>
    </>
  )
}
