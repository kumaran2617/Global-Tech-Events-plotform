import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

function Profile() {
  return (
    <div className="page">
      <Navbar />

      <section className="page-hero">
        <div>
          <p className="pill">Developer Profile</p>
          <h1>Aditi Varma</h1>
          <p className="lead">Full-stack engineer · Web3 builder · AI mentor</p>
        </div>
        <div className="panel profile-panel">
          <div className="profile-avatar">AV</div>
          <div>
            <h3>Bio</h3>
            <p>
              Building developer communities, shipping product-led growth for new
              tools, and mentoring early founders.
            </p>
            <a className="profile-link" href="https://github.com/aditi-varma">
              GitHub: @aditi-varma
            </a>
          </div>
        </div>
      </section>

      <section className="profile-grid">
        <div className="panel">
          <h3>Skills</h3>
          <div className="profile-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>Solidity</span>
            <span>LLMs</span>
            <span>Design Systems</span>
          </div>
        </div>
        <div className="panel">
          <h3>Events attended</h3>
          <div className="list">
            <div className="list-item">
              <strong>Summit on Applied AI</strong>
              <p className="muted">Singapore · May 24, 2026</p>
            </div>
            <div className="list-item">
              <strong>Web Future Conf</strong>
              <p className="muted">San Francisco · Jul 02, 2026</p>
            </div>
          </div>
        </div>
        <div className="panel">
          <h3>Network connections</h3>
          <div className="list">
            <div className="list-item">
              <strong>132</strong>
              <p className="muted">Global builders</p>
            </div>
            <div className="list-item">
              <strong>24</strong>
              <p className="muted">Core collaborators</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Profile
