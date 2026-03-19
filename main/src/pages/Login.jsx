import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import { AuthContext } from '../context/AuthContext'

function Login() {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const handleSubmit = (event) => {
    event.preventDefault()
    login({ name: 'Aditi Varma', email: 'aditi@techsphere.io' })

    const params = new URLSearchParams(location.search)
    const next = params.get('next')
    const safeNext = next && next.startsWith('/') ? next : '/dashboard'

    navigate(safeNext)
  }

  return (
    <div className="auth-page">
      <Navbar />
      <div className="auth-card">
        <div>
          <h1>Welcome back</h1>
          <p>Login to manage events, join chats, and track your tickets.</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input type="email" placeholder="you@techsphere.io" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button className="btn primary" type="submit">
            Login
          </button>
        </form>
        <div className="auth-divider">or continue with</div>
        <div className="auth-social">
          <button className="btn ghost" type="button" onClick={handleSubmit}>
            Google Login
          </button>
          <button className="btn ghost" type="button" onClick={handleSubmit}>
            GitHub Login
          </button>
        </div>
        <div className="auth-links">
          <a href="/signup">Sign up</a>
          <a href="/forgot">Forgot password?</a>
        </div>
      </div>
    </div>
  )
}

export default Login
