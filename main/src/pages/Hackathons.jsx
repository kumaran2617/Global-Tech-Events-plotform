import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const hackathons = [
  {
    name: 'Frontier Build Hack',
    prize: '$120k',
    timeline: 'May 10 - May 22',
    mode: 'Hybrid',
    teams: '210 teams',
  },
  {
    name: 'ChainLab Sprint',
    prize: '$80k',
    timeline: 'Jun 01 - Jun 14',
    mode: 'Online',
    teams: '160 teams',
  },
  {
    name: 'HealthTech Catalyst',
    prize: '$95k',
    timeline: 'Jul 09 - Jul 23',
    mode: 'Onsite',
    teams: '140 teams',
  },
]

function Hackathons() {
  return (
    <div className="page">
      <Navbar />

      <section className="page-hero">
        <div>
          <p className="pill">Hackathon Listings</p>
          <h1>Join build sprints with real prize pools and team matching.</h1>
          <p className="lead">
            Browse curated hackathons, track timelines, and apply with your team in
            minutes.
          </p>
        </div>
        <div className="panel">
          <h3>Hackathon timeline</h3>
          <ul className="timeline">
            <li>
              <span>1</span>
              Register and get challenge brief
            </li>
            <li>
              <span>2</span>
              Form teams and submit proposal
            </li>
            <li>
              <span>3</span>
              Build, mentor sessions, and demos
            </li>
            <li>
              <span>4</span>
              Final pitch, awards, and hiring day
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Active hackathons</h2>
          <p>Find the right format, prize pool, and timeline.</p>
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
                  <p>{hack.teams}</p>
                </div>
              </div>
              <Link
                className="btn primary"
                to={`/team-apply?hackathon=${encodeURIComponent(hack.name)}`}
              >
                Apply with team
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Hackathons

