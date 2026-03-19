import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import { AuthContext } from '../context/AuthContext'

function Signup() {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    login({ name: 'New Member', email: 'new@techsphere.io' })
    navigate('/dashboard')
  }

  return (
    <div className="auth-page">
      <Navbar />
      <div className="auth-card">
        <div>
          <h1>Create your account</h1>
          <p>Join TechSphere to discover events and meet builders worldwide.</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@techsphere.io" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Create a password" />
          </label>
          <button className="btn primary" type="submit">
            Create account
          </button>
        </form>
        <div className="auth-divider">or sign up with</div>
        <div className="auth-social">
          <button className="btn ghost" type="button" onClick={handleSubmit}>
            Google Login
          </button>
          <button className="btn ghost" type="button" onClick={handleSubmit}>
            GitHub Login
          </button>
        </div>
        <div className="auth-links">
          <a href="/login">Already have an account?</a>
          <a href="/forgot">Forgot password?</a>
        </div>
      </div>
    </div>
  )
}

export default Signup
