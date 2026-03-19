import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

function Chat() {
  return (
    <div className="page">
      <Navbar />

      <section className="page-hero">
        <div>
          <p className="pill">Networking Chat</p>
          <h1>Event chat rooms and private messaging.</h1>
          <p className="lead">
            Connect with attendees in real time using Socket.io or Firebase realtime.
          </p>
        </div>
        <div className="panel">
          <h3>Active channels</h3>
          <div className="channel-list">
            <div>
              <strong>Summit on Applied AI</strong>
              <p className="muted">421 online</p>
            </div>
            <div>
              <strong>Web Future Conf</strong>
              <p className="muted">318 online</p>
            </div>
            <div>
              <strong>Data Science Week</strong>
              <p className="muted">204 online</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="chat-grid">
          <div className="chat-card">
            <div className="chat-header">
              <h3>Summit on Applied AI</h3>
              <span className="tag">421 online</span>
            </div>
            <div className="chat-body">
              <div className="message">
                <span className="avatar" />
                <div>
                  <h4>Navin</h4>
                  <p>Anyone building agentic workflows? Looking to team up.</p>
                </div>
              </div>
              <div className="message">
                <span className="avatar" />
                <div>
                  <h4>Aisha</h4>
                  <p>We are hosting a lightning talk on deployment at 4 PM.</p>
                </div>
              </div>
              <div className="message">
                <span className="avatar" />
                <div>
                  <h4>Samir</h4>
                  <p>Check the resources channel for sponsor APIs.</p>
                </div>
              </div>
            </div>
            <div className="chat-footer">
              <input placeholder="Send message" />
              <button className="btn primary">Send</button>
            </div>
          </div>
          <div className="profile-card">
            <h3>Developer profile</h3>
            <div className="profile-header">
              <div className="profile-avatar">AV</div>
              <div>
                <h4>Aditi Varma</h4>
                <p>Full-stack engineer, Web3 builder</p>
              </div>
            </div>
            <div className="profile-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>Solidity</span>
              <span>LLMs</span>
            </div>
            <div className="profile-stats">
              <div>
                <h4>Events</h4>
                <p>18 attended</p>
              </div>
              <div>
                <h4>Connections</h4>
                <p>132</p>
              </div>
            </div>
            <button className="btn dark full">Message</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Chat
