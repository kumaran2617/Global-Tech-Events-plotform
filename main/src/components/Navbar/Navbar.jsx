import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

function Navbar() {
  const { notifications, isAuthenticated } = useContext(AuthContext)

  return (
    <header className="nav">
      <div className="nav-top">
        <Link className="logo" to="/">
          <span className="logo-dot" />
          TechSphere
        </Link>
        <div className="nav-mobile-top" aria-label="Top actions">
          <Link className="icon-btn" to="/dashboard" aria-label="Notifications">
            <span className="bell" />
            <span className="badge">{notifications.length}</span>
          </Link>
          <Link className="avatar-btn" to={isAuthenticated ? '/profile' : '/login'} aria-label="Profile">
            <span className="avatar-dot" />
          </Link>
        </div>
      </div>

      <nav className="nav-links">
        <Link to="/events">Discover</Link>
        <Link to="/hackathons">Hackathons</Link>
        <Link to="/meetups">Meetups</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/chat">Network</Link>
      </nav>

      <div className="nav-actions">
        {isAuthenticated ? (
          <Link className="btn ghost" to="/dashboard">
            Dashboard
          </Link>
        ) : (
          <Link className="btn ghost" to="/login">
            Login
          </Link>
        )}
        <Link className="btn primary" to="/signup">
          Join Now
        </Link>
        <Link className="notif" to="/dashboard">
          Notifications
          <span>{notifications.length}</span>
        </Link>
      </div>

      <nav className="nav-bottom" aria-label="Mobile">
        <Link to="/events">Discover</Link>
        <Link to="/hackathons">Hackathons</Link>
        <Link to="/meetups">Meetups</Link>
        <Link to="/analytics">Analytics</Link>
      </nav>
    </header>
  )
}

export default Navbar
