import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const meetups = [
  {
    city: 'Bengaluru',
    next: 'Apr 06, 2026',
    focus: 'Cloud + DevOps',
    members: '6.2k',
  },
  {
    city: 'New York',
    next: 'Apr 14, 2026',
    focus: 'React + UI',
    members: '8.4k',
  },
  {
    city: 'London',
    next: 'Apr 21, 2026',
    focus: 'AI Builders',
    members: '7.1k',
  },
]

function Meetups() {
  return (
    <div className="page">
      <Navbar />

      <section className="page-hero">
        <div>
          <p className="pill">Tech Meetup Finder</p>
          <h1>Find local communities and city-based events.</h1>
          <p className="lead">
            Search by city, explore community events, and jump into local chat rooms.
          </p>
        </div>
        <div className="panel">
          <h3>City-based search</h3>
          <div className="location-fields">
            <input placeholder="Enter city" />
            <button className="btn ghost">Search</button>
          </div>
          <p className="muted">Google Maps integration ready.</p>
        </div>
      </section>

      <section className="section">
        <div className="meetup-grid">
          <div className="map-card">
            <div className="map-overlay">
              <h3>Live meetup map</h3>
              <p>Explore community events around you.</p>
              <Link className="btn ghost" to="/map">
                Open map view
              </Link>
            </div>
          </div>
          <div className="meetup-list">
            {meetups.map((meetup) => (
              <div key={meetup.city} className="meetup-item">
                <div>
                  <h3>{meetup.city}</h3>
                  <p>{meetup.focus}</p>
                </div>
                <div>
                  <h4>Next meetup</h4>
                  <p>{meetup.next}</p>
                </div>
                <div>
                  <h4>Members</h4>
                  <p>{meetup.members}</p>
                </div>
                <Link
                  className="btn dark"
                  to={`/meetups/${encodeURIComponent(meetup.city)}`}
                >
                  Join community
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Meetups


