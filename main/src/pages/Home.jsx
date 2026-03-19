import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import EventCard from '../components/EventCard/EventCard'
import SearchBar from '../components/SearchBar/SearchBar'
import { AuthContext } from '../context/AuthContext'

const trendingEvents = [
  {
    title: 'Global AI Summit 2026',
    date: 'Jun 18, 2026',
    location: 'Berlin, Germany',
    category: 'AI',
    attendees: '4.2k',
    image:
      'https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Web Future Conf',
    date: 'Jul 02, 2026',
    location: 'San Francisco, USA',
    category: 'Web Dev',
    attendees: '3.1k',
    image:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Data Science Week',
    date: 'Aug 11, 2026',
    location: 'Toronto, Canada',
    category: 'Data Science',
    attendees: '2.6k',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'SecureWorld Live',
    date: 'Sep 05, 2026',
    location: 'Tokyo, Japan',
    category: 'Cyber Security',
    attendees: '1.9k',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
  },
]

const hackathons = [
  {
    name: 'Frontier Build Hack',
    prize: '$120k',
    timeline: 'May 10 - May 22',
    mode: 'Hybrid',
  },
  {
    name: 'ChainLab Sprint',
    prize: '$80k',
    timeline: 'Jun 01 - Jun 14',
    mode: 'Online',
  },
  {
    name: 'HealthTech Catalyst',
    prize: '$95k',
    timeline: 'Jul 09 - Jul 23',
    mode: 'Onsite',
  },
]

const meetups = [
  {
    city: 'Bengaluru',
    next: 'Apr 06, 2026',
    focus: 'Cloud + DevOps',
  },
  {
    city: 'New York',
    next: 'Apr 14, 2026',
    focus: 'React + UI',
  },
  {
    city: 'London',
    next: 'Apr 21, 2026',
    focus: 'AI Builders',
  },
]

const testimonials = [
  {
    quote:
      'TechSphere replaced five different tools for our community. The discovery experience is on another level.',
    name: 'Riya Kapoor',
    role: 'Community Lead, DevHive',
  },
  {
    quote:
      'We doubled hackathon applications in two weeks. The analytics finally tell us what is working.',
    name: 'James Liu',
    role: 'Organizer, CodeFront',
  },
  {
    quote:
      'The chat and networking layer keeps our attendees active well after the event ends.',
    name: 'Marta Silva',
    role: 'Founder, MeetCloud',
  },
]

function Home() {
  const { isAuthenticated } = useContext(AuthContext)
  const authLink = (to) =>
    isAuthenticated ? to : `/login?next=${encodeURIComponent(to)}`

  return (
    <div className="app">
      <div className="bg-blur one" />
      <div className="bg-blur two" />
      <div className="bg-grid" />

      <Navbar />

      <section className="hero" id="discover">
        <div className="hero-content">
          <p className="pill">Global Tech Event Platform</p>
          <h1>
            Discover global tech events,{' '}
            <span className="text-gradient">connect with developers</span>, and
            launch your next project.
          </h1>
          <p className="lead">
            TechSphere unifies conferences, hackathons, and meetups into one living
            map. Search, register, and connect with talent worldwide in minutes.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" to={authLink('/dashboard')}>
              Get Started
            </Link>
            <Link className="btn ghost" to={authLink('/events')}>
              Explore Events
            </Link>
          </div>
          <SearchBar />
          <div className="stats">
            <div>
              <h3>12k+</h3>
              <p>Events indexed</p>
            </div>
            <div>
              <h3>520k</h3>
              <p>Builders connected</p>
            </div>
            <div>
              <h3>92</h3>
              <p>Countries active</p>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-header">
            <span>Featured Event</span>
            <span className="tag">Live now</span>
          </div>
          <div className="hero-card-body">
            <h2>Summit on Applied AI</h2>
            <p>
              A 3-day global experience featuring product leaders, applied research, and
              a matchmaking lounge.
            </p>
            <div className="hero-meta">
              <div>
                <h4>Location</h4>
                <p>Singapore</p>
              </div>
              <div>
                <h4>Date</h4>
                <p>May 24, 2026</p>
              </div>
              <div>
                <h4>Seats</h4>
                <p>120 left</p>
              </div>
            </div>
            <Link className="btn primary full" to={authLink('/register?event=Summit%20on%20Applied%20AI')}>
              Register and get QR
            </Link>
          </div>
          <div className="hero-card-footer">
            <div>
              <h4>Event chat</h4>
              <p>421 online</p>
            </div>
            <div>
              <h4>Speakers</h4>
              <p>42 industry leaders</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="trending">
        <div className="section-title">
          <h2>Trending Events</h2>
          <p>Hand-picked experiences trending this season across the globe.</p>
        </div>
        <div className="event-grid">
          {trendingEvents.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </section>

      <section className="section" id="hackathons">
        <div className="section-title">
          <h2>Hackathons</h2>
          <p>Build fast, win big, and find collaborators for ambitious ideas.</p>
        </div>
        <div className="hackathon-grid">
          {hackathons.map((hack) => (
            <div key={hack.name} className="hackathon-card">
              <div className="hackathon-header">
                <h3>{hack.name}</h3>
                <span className="tag success">{hack.prize} prize pool</span>
              </div>
              <div className="hackathon-body">
                <div>
                  <h4>Timeline</h4>
                  <p>{hack.timeline}</p>
                </div>
                <div>
                  <h4>Mode</h4>
                  <p>{hack.mode}</p>
                </div>
                <div>
                  <h4>Teams</h4>
                  <p>Team registration</p>
                </div>
              </div>
              <Link className="btn primary" to={authLink('/team-apply')}>
                Apply with team
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="meetups">
        <div className="section-title">
          <h2>Upcoming Meetups</h2>
          <p>Find local communities and city-based gatherings instantly.</p>
        </div>
        <div className="meetup-grid">
          <div className="map-card">
            <div className="map-overlay">
              <h3>Live meetup map</h3>
              <p>Google Maps integration ready</p>
              <Link className="btn ghost" to={authLink('/map')}>
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
                <Link
                  className="btn dark"
                  to={authLink(`/meetups/${encodeURIComponent(meetup.city)}`)}
                >
                  Join community
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Platform Features</h2>
          <p>Everything you need to discover, register, and collaborate.</p>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Event discovery</h3>
            <p>Search, filter, and save the best events worldwide.</p>
          </div>
          <div className="feature-card">
            <h3>Smart registration</h3>
            <p>One-tap tickets with QR codes and calendar sync.</p>
          </div>
          <div className="feature-card">
            <h3>Networking chat</h3>
            <p>Event-based rooms and private messaging.</p>
          </div>
          <div className="feature-card">
            <h3>Organizer analytics</h3>
            <p>Track registrations, engagement, and ROI.</p>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="section-title">
          <h2>Trusted by global communities</h2>
          <p>Teams scaling developer engagement rely on TechSphere.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div key={item.name} className="testimonial-card">
              <p>"{item.quote}"</p>
              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home










