import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { AuthContext } from '../context/AuthContext'

const upcoming = [
  { title: 'AI Product Summit', date: 'Apr 22, 2026', location: 'Mumbai' },
  { title: 'Cloud Next Meetup', date: 'Apr 29, 2026', location: 'London' },
  { title: 'Serverless Days', date: 'May 05, 2026', location: 'Austin' },
]

const recommended = [
  { title: 'SecureWorld Live', date: 'Sep 05, 2026' },
  { title: 'Blockchain Builder Camp', date: 'Jun 18, 2026' },
]

const messages = [
  { from: 'Aditi', text: 'Ready for the demo review?' },
  { from: 'Navin', text: 'Join the AI summit chat room.' },
]

function Dashboard() {
  const { savedEvents, notifications, calendarEvents } = useContext(AuthContext)

  return (
    <div className="page">
      <Navbar />

      <section className="page-hero">
        <div>
          <p className="pill">Dashboard</p>
          <h1>Your event workspace.</h1>
          <p className="lead">
            Track upcoming events, saved experiences, and new recommendations.
          </p>
        </div>
        <div className="panel">
          <h3>Quick actions</h3>
          <div className="quick-actions">
            <button className="btn primary">Explore events</button>
            <button className="btn ghost">Create event</button>
          </div>
        </div>
      </section>

      <section className="dashboard-grid">
        <div className="panel">
          <h3>Upcoming events</h3>
          <div className="list">
            {upcoming.map((item) => (
              <div key={item.title} className="list-item">
                <div>
                  <strong>{item.title}</strong>
                  <p className="muted">
                    {item.date} · {item.location}
                  </p>
                </div>
                <Link
                  className="btn ghost"
                  to={`/events/${encodeURIComponent(item.title)}`}
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="panel">
          <h3>Saved events</h3>
          <div className="list">
            {savedEvents.length === 0 ? (
              <p className="muted">No saved events yet.</p>
            ) : (
              savedEvents.map((item) => (
                <div key={item.title} className="list-item">
                  <div>
                    <strong>{item.title}</strong>
                    <p className="muted">{item.date}</p>
                  </div>
                  <Link
                    className="btn ghost"
                    to={`/events/${encodeURIComponent(item.title)}`}
                  >
                    Open
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="panel">
          <h3>Recommended for you</h3>
          <div className="list">
            {recommended.map((item) => (
              <div key={item.title} className="list-item">
                <div>
                  <strong>{item.title}</strong>
                  <p className="muted">{item.date}</p>
                </div>
                <Link
                  className="btn ghost"
                  to={`/events/${encodeURIComponent(item.title)}`}
                >
                  Register
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="panel">
          <h3>Recent messages</h3>
          <div className="list">
            {messages.map((item) => (
              <div key={item.from} className="list-item">
                <div>
                  <strong>{item.from}</strong>
                  <p className="muted">{item.text}</p>
                </div>
                <Link
                  className="btn ghost"
                  to={`/chat?to=${encodeURIComponent(item.from)}`}
                >
                  Reply
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dashboard-grid">
        <div className="panel">
          <h3>Notifications</h3>
          <div className="list">
            {notifications.map((item) => (
              <div key={item.id} className="list-item">
                <div>
                  <strong>{item.type}</strong>
                  <p className="muted">{item.text}</p>
                </div>
                <Link className="btn ghost" to="/chat">
                  View
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="panel">
          <h3>Personal calendar</h3>
          <div className="list">
            {calendarEvents.map((item) => (
              <div key={item.id} className="list-item">
                <div>
                  <strong>{item.title}</strong>
                  <p className="muted">{item.date}</p>
                </div>
                <button className="btn ghost">Sync</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Dashboard

