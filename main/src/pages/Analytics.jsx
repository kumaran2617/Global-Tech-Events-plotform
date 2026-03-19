import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const analytics = [
  { label: 'User growth', value: 72 },
  { label: 'Event popularity', value: 86 },
  { label: 'Registrations', value: 64 },
  { label: 'Engagement', value: 58 },
]

function Analytics() {
  return (
    <div className="page">
      <Navbar />

      <section className="page-hero">
        <div>
          <p className="pill">Admin Dashboard</p>
          <h1>Organizer command center.</h1>
          <p className="lead">
            Create events, manage registrations, and track performance across
            campaigns.
          </p>
        </div>
        <div className="panel">
          <h3>Admin actions</h3>
          <div className="quick-actions">
            <button className="btn primary">Create event</button>
            <button className="btn ghost">Manage events</button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="analytics-grid">
          <div className="chart-card">
            <h3>User growth</h3>
            <div className="chart">
              {analytics.map((item) => (
                <div key={item.label} className="bar">
                  <div className="bar-fill" style={{ height: `${item.value}%` }} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="chart-card">
            <h3>Event popularity</h3>
            <div className="category-grid">
              <div className="panel">
                <h4>AI</h4>
                <p>32% share</p>
              </div>
              <div className="panel">
                <h4>Web Dev</h4>
                <p>21% share</p>
              </div>
              <div className="panel">
                <h4>Blockchain</h4>
                <p>18% share</p>
              </div>
              <div className="panel">
                <h4>Data Science</h4>
                <p>16% share</p>
              </div>
              <div className="panel">
                <h4>Cyber Security</h4>
                <p>13% share</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Operations</h2>
          <p>Manage events and view registrations in one place.</p>
        </div>
        <div className="dashboard-grid">
          <div className="panel">
            <h3>Create event</h3>
            <p className="muted">Launch new conferences, hackathons, and meetups.</p>
            <button className="btn ghost">Create event</button>
          </div>
          <div className="panel">
            <h3>Manage events</h3>
            <p className="muted">Edit schedules, speakers, and ticket inventory.</p>
            <button className="btn ghost">Manage</button>
          </div>
          <div className="panel">
            <h3>View registrations</h3>
            <p className="muted">Track attendee lists and export reports.</p>
            <button className="btn ghost">View</button>
          </div>
          <div className="panel">
            <h3>Analytics</h3>
            <p className="muted">Review traffic, engagement, and conversion rate.</p>
            <button className="btn ghost">Open analytics</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Analytics
