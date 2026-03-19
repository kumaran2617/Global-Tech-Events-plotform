import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import EventCard from '../components/EventCard/EventCard'
import SearchBar from '../components/SearchBar/SearchBar'

const events = [
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

function Events() {
  return (
    <div className="page">
      <Navbar />

      <section className="page-hero">
        <div>
          <p className="pill">Event Discovery System</p>
          <h1>Search global events by skill, category, or location.</h1>
          <p className="lead">
            Find conferences, hackathons, and community sessions with intelligent
            filters and trending signals.
          </p>
        </div>
        <div className="filters-panel">
          <SearchBar />
          <div className="location-filter">
            <label>Location filter</label>
            <div className="location-fields">
              <input placeholder="City" />
              <input placeholder="Country" />
              <button className="btn ghost">Apply</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="trending">
        <div className="section-title">
          <h2>Trending events</h2>
          <p>What the community is registering for right now.</p>
        </div>
        <div className="event-grid">
          {events.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Events
