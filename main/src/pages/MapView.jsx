import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

function MapView() {
  return (
    <div className="page">
      <Navbar />

      <section className="page-hero">
        <div>
          <p className="pill">Meetup Map</p>
          <h1>Explore meetups on the live map.</h1>
          <p className="lead">
            Browse community events by city and zoom into what is happening near you.
          </p>
          <Link className="btn ghost" to="/meetups">
            Back to meetups
          </Link>
        </div>
        <div className="panel">
          <h3>Map status</h3>
          <p className="muted">Google Maps integration ready.</p>
        </div>
      </section>

      <section className="section">
        <div className="map-card">
          <div className="map-overlay">
            <h3>Live meetup map</h3>
            <p>Map view placeholder (connect API when ready).</p>
            <button className="btn ghost">Open directions</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MapView
