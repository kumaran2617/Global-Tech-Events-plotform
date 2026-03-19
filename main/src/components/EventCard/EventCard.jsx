import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

function EventCard({ event }) {
  const { savedEvents, toggleSaveEvent, isAuthenticated } = useContext(AuthContext)
  const isSaved = savedEvents.some((item) => item.title === event.title)

  const authLink = (to) =>
    isAuthenticated ? to : `/login?next=${encodeURIComponent(to)}`

  return (
    <article className="event-card">
      <div
        className="event-image"
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <span className="tag">{event.category}</span>
        <button
          className={`save-btn ${isSaved ? 'saved' : ''}`}
          type="button"
          onClick={() => toggleSaveEvent(event)}
        >
          {isSaved ? 'Saved' : 'Save'}
        </button>
      </div>
      <div className="event-body">
        <h3>{event.title}</h3>
        <p>{event.location}</p>
        <div className="event-meta">
          <span>{event.date}</span>
          <span>{event.attendees} attending</span>
        </div>
        <Link
          className="btn ghost"
          to={authLink(`/register?event=${encodeURIComponent(event.title)}`)}
        >
          Register
        </Link>
      </div>
    </article>
  )
}

export default EventCard
