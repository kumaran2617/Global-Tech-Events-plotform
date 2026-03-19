import { Link, useParams } from 'react-router-dom'
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

function MeetupDetails() {
  const { city } = useParams()
  const decodedCity = city ? decodeURIComponent(city) : ''
  const meetup = meetups.find((item) => item.city === decodedCity) ?? meetups[0]

  return (
    <div className="page">
      <Navbar />

      <section className="page-hero">
        <div>
          <p className="pill">Meetup Community</p>
          <h1>{meetup.city}</h1>
          <p className="lead">{meetup.focus}</p>
          <Link className="btn ghost" to="/meetups">
            Back to meetups
          </Link>
        </div>
        <div className="panel">
          <h3>Next meetup</h3>
          <p>{meetup.next}</p>
          <p className="muted">{meetup.members} members</p>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Join this community</h2>
          <p>
            Get updates, attend local sessions, and connect with builders in your
            city.
          </p>
        </div>
        <div className="panel">
          <button className="btn primary">Request to join</button>
          <button className="btn ghost">Join chat room</button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MeetupDetails
