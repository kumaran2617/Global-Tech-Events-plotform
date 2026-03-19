import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { apiRequest } from '../services/api'

const defaultMember = { name: '', email: '', role: '' }

function TeamApply() {
  const [searchParams] = useSearchParams()
  const hackathonName = useMemo(
    () => searchParams.get('hackathon') || 'Selected Hackathon',
    [searchParams]
  )

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [teamData, setTeamData] = useState({
    teamName: '',
    idea: '',
    track: '',
    members: [
      { ...defaultMember },
      { ...defaultMember },
      { ...defaultMember },
    ],
  })

  const updateTeamField = (event) => {
    const { name, value } = event.target
    setTeamData((prev) => ({ ...prev, [name]: value }))
  }

  const updateMemberField = (index, field, value) => {
    setTeamData((prev) => {
      const updated = prev.members.map((member, memberIndex) =>
        memberIndex === index ? { ...member, [field]: value } : member
      )
      return { ...prev, members: updated }
    })
  }

  const addMember = () => {
    setTeamData((prev) => ({
      ...prev,
      members: [...prev.members, { ...defaultMember }],
    }))
  }

  const removeMember = (index) => {
    setTeamData((prev) => {
      if (prev.members.length <= 1) {
        return prev
      }
      return {
        ...prev,
        members: prev.members.filter((_, memberIndex) => memberIndex !== index),
      }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      await apiRequest('/api/team-applications', {
        method: 'POST',
        body: JSON.stringify({
          hackathonName,
          teamName: teamData.teamName,
          track: teamData.track,
          idea: teamData.idea,
          members: teamData.members,
        }),
      })
      setSubmitted(true)
    } catch (submitError) {
      setError(submitError.message || 'Failed to submit application.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="page">
      <Navbar />

      <section className="section register-hero">
        <div className="section-title">
          <p className="pill">Team Application</p>
          <h2>{hackathonName}</h2>
          <p className="lead">
            Tell us about your team and idea. We will confirm your application by
            email.
          </p>
        </div>
      </section>

      <section className="section team-grid">
        <form className="team-card" onSubmit={handleSubmit}>
          <h3>Team details</h3>
          <div className="team-fields">
            <label>
              Team name
              <input
                name="teamName"
                value={teamData.teamName}
                onChange={updateTeamField}
                placeholder="Enter team name"
                required
              />
            </label>
            <label>
              Hackathon track
              <input
                name="track"
                value={teamData.track}
                onChange={updateTeamField}
                placeholder="AI, Web3, HealthTech"
              />
            </label>
          </div>
          <label className="team-idea">
            Project idea
            <textarea
              name="idea"
              value={teamData.idea}
              onChange={updateTeamField}
              placeholder="Share your project idea"
              rows="4"
              required
            />
          </label>

          <div className="team-members">
            <div className="team-members-header">
              <h4>Team members</h4>
              <button className="btn ghost" type="button" onClick={addMember}>
                Add member
              </button>
            </div>
            <div className="member-list">
              {teamData.members.map((member, index) => (
                <div key={`member-${index}`} className="member-card">
                  <div className="member-fields">
                    <label>
                      Name
                      <input
                        value={member.name}
                        onChange={(event) =>
                          updateMemberField(index, 'name', event.target.value)
                        }
                        placeholder="Member name"
                        required
                      />
                    </label>
                    <label>
                      Email
                      <input
                        type="email"
                        value={member.email}
                        onChange={(event) =>
                          updateMemberField(index, 'email', event.target.value)
                        }
                        placeholder="member@email.com"
                        required
                      />
                    </label>
                    <label>
                      Role
                      <input
                        value={member.role}
                        onChange={(event) =>
                          updateMemberField(index, 'role', event.target.value)
                        }
                        placeholder="Frontend, Backend, Design"
                        required
                      />
                    </label>
                  </div>
                  <button
                    className="btn dark"
                    type="button"
                    onClick={() => removeMember(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="register-actions">
            <button className="btn primary" type="submit">
              {submitting ? 'Submitting...' : 'Submit team application'}
            </button>
            {error && <p className="form-error">{error}</p>}
            {submitted && (
              <p className="register-success">
                Application submitted. We will reach out to your team shortly.
              </p>
            )}
          </div>
        </form>

        <aside className="register-summary">
          <h3>Application checklist</h3>
          <p className="muted">Make sure every teammate is included.</p>
          <div className="register-note">
            <h4>What to prepare</h4>
            <ul>
              <li>Team name and project focus</li>
              <li>Member emails for updates</li>
              <li>One clear problem statement</li>
            </ul>
          </div>
        </aside>
      </section>

      <Footer />
    </div>
  )
}

export default TeamApply
