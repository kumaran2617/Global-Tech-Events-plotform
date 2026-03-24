import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { apiRequest } from '../services/api'

const ticketOptions = [
  { id: 'general', label: 'General', price: '$129' },
  { id: 'pro', label: 'Pro', price: '$249' },
  { id: 'vip', label: 'VIP', price: '$399' },
]

function Register() {
  const [searchParams] = useSearchParams()
  const eventName = useMemo(
    () => searchParams.get('event') || 'Selected Event',
    [searchParams]
  )

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    city: '',
    ticket: 'general',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      await apiRequest('/api/registrations', {
        method: 'POST',
        body: JSON.stringify({ eventName, ...formData }),
      })
      setSubmitted(true)
    } catch (submitError) {
      setError(submitError.message || 'Failed to submit registration.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="page">
      <Navbar />

      <section className="section register-hero">
        <div className="section-title">
          <p className="pill">Event Registration</p>
          <h2>{eventName}</h2>
          <p className="lead">
            Share your details to reserve a seat and receive the confirmation QR.
          </p>
        </div>
      </section>

      <section className="section register-grid">
        <form className="register-card" onSubmit={handleSubmit}>
          <h3>Attendee details</h3>
          <div className="register-fields">
            <label>
              Full name
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              Phone number
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 555 012 3456"
                required
              />
            </label>
            <label>
              Company
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Organization"
              />
            </label>
            <label>
              Role / Title
              <input
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Product Manager"
              />
            </label>
            <label>
              City
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
              />
            </label>
          </div>

          <div className="register-actions">
            <button className="btn primary" type="submit">
              {submitting ? 'Submitting...' : 'Confirm registration'}
            </button>
            {error && <p className="form-error">{error}</p>}
            {submitted && (
              <p className="register-success">
                Registration confirmed for {eventName}. We will email your QR to{' '}
                {formData.email || 'your inbox'} shortly.
              </p>
            )}
          </div>
        </form>

        <aside className="register-summary">
          <h3>Ticket selection</h3>
          <p className="muted">Choose your access level for {eventName}.</p>
          <div className="ticket-grid">
            {ticketOptions.map((ticket) => (
              <label key={ticket.id} className="ticket-card">
                <input
                  type="radio"
                  name="ticket"
                  value={ticket.id}
                  checked={formData.ticket === ticket.id}
                  onChange={handleChange}
                />
                <div>
                  <h4>{ticket.label}</h4>
                  <p className="muted">{ticket.price}</p>
                </div>
              </label>
            ))}
          </div>
          <div className="register-note">
            <h4>What you get</h4>
            <ul>
              <li>Session access + workshops</li>
              <li>Event chat and networking</li>
              <li>Calendar invite + QR ticket</li>
            </ul>
          </div>
        </aside>
      </section>

      <Footer />
    </div>
  )
}

export default Register
