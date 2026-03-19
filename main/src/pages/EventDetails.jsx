import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const events = [
  {
    title: 'Summit on Applied AI',
    date: 'May 24, 2026',
    location: 'Singapore',
    seats: '120 left',
    summary:
      'A 3-day global experience featuring product leaders, applied research, and a matchmaking lounge.',
  },
  {
    title: 'AI Product Summit',
    date: 'Apr 22, 2026',
    location: 'Mumbai',
    seats: '240 left',
    summary:
      'Deep dives on product-led AI, go-to-market playbooks, and live builds with top teams.',
  },
  {
    title: 'Cloud Next Meetup',
    date: 'Apr 29, 2026',
    location: 'London',
    seats: '180 left',
    summary:
      'A community-first meetup focused on cloud architecture, reliability, and FinOps best practices.',
  },
  {
    title: 'Serverless Days',
    date: 'May 05, 2026',
    location: 'Austin',
    seats: '150 left',
    summary:
      'Serverless patterns, platform engineering, and hands-on workshops with the ecosystem.',
  },
]

const speakers = [
  { name: 'Dr. Lina Patel', role: 'AI Researcher, Horizon Labs' },
  { name: 'Marco Ruiz', role: 'Head of ML, CloudScale' },
  { name: 'Sara Ahmed', role: 'Founder, Productive AI' },
]

const schedule = [
  { time: '09:30', title: 'Opening keynote: Applied AI at scale' },
  { time: '11:00', title: 'Breakout: Building copilots for teams' },
  { time: '14:00', title: 'Panel: Responsible AI in production' },
]

function EventDetails() {
  const { id } = useParams()
  const requestedTitle = id ? decodeURIComponent(id) : ''
  const event = events.find((item) => item.title === requestedTitle) ?? events[0]
  const registerLink = `/register?event=${encodeURIComponent(event.title)}`

  return (
    <div className="page">
      <Navbar />

      <section className="event-banner">
        <div className="event-banner-content">
          <p className="pill">Event Details</p>
          <h1>{event.title}</h1>
          <p className="lead">{event.summary}</p>
          <div className="event-actions">
            <Link className="btn primary" to={registerLink}>
              Register
            </Link>
            <button className="btn ghost">Join chat room</button>
          </div>
        </div>
        <div className="event-banner-card">
          <h3>Event info</h3>
          <div className="event-meta-block">
            <div>
              <h4>Location</h4>
              <p>{event.location}</p>
            </div>
            <div>
              <h4>Date</h4>
              <p>{event.date}</p>
            </div>
            <div>
              <h4>Seats</h4>
              <p>{event.seats}</p>
            </div>
          </div>
          <Link className="btn primary full" to={registerLink}>
            Register and get QR
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Description</h2>
          <p>
            Dive into workshops, mentoring sessions, and global networking with teams
            building the next generation of AI products.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Speakers</h2>
          <p>Meet the leaders shaping applied AI globally.</p>
        </div>
        <div className="speaker-grid">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="panel">
              <div className="speaker-avatar" />
              <div>
                <h3>{speaker.name}</h3>
                <p className="muted">{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Schedule</h2>
          <p>Plan your experience across three days of sessions.</p>
        </div>
        <div className="schedule-list">
          {schedule.map((slot) => (
            <div key={slot.time} className="panel schedule-item">
              <strong>{slot.time}</strong>
              <p>{slot.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Location map</h2>
          <p>Venue details and nearby recommendations.</p>
        </div>
        <div className="map-card">
          <div className="map-overlay">
            <h3>Marina Bay Sands, Singapore</h3>
            <p>Map integration ready for Google Maps.</p>
            <button className="btn ghost">Open directions</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default EventDetails
