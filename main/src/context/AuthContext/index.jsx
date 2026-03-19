import { createContext, useMemo, useState } from 'react'

const AuthContext = createContext({
  user: null,
  token: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  savedEvents: [],
  toggleSaveEvent: () => {},
  notifications: [],
  calendarEvents: [],
})

const initialNotifications = [
  { id: 1, type: 'Upcoming event', text: 'AI Product Summit starts in 3 days.' },
  { id: 2, type: 'New hackathon', text: 'ChainLab Sprint applications are open.' },
  { id: 3, type: 'Message', text: 'Aditi invited you to Summit on Applied AI.' },
]

const initialCalendar = [
  { id: 1, title: 'AI Product Summit', date: 'Apr 22, 2026' },
  { id: 2, title: 'Cloud Next Meetup', date: 'Apr 29, 2026' },
  { id: 3, title: 'Web Future Conf', date: 'Jul 02, 2026' },
]

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [savedEvents, setSavedEvents] = useState([])
  const [notifications] = useState(initialNotifications)
  const [calendarEvents] = useState(initialCalendar)

  const login = (nextUser) => {
    setUser(nextUser)
    setToken('mock-jwt-token')
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    setSavedEvents([])
  }

  const toggleSaveEvent = (event) => {
    setSavedEvents((prev) => {
      const exists = prev.find((item) => item.title === event.title)
      if (exists) {
        return prev.filter((item) => item.title !== event.title)
      }
      return [...prev, event]
    })
  }

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated: Boolean(user),
      login,
      logout,
      savedEvents,
      toggleSaveEvent,
      notifications,
      calendarEvents,
    }),
    [user, token, savedEvents, notifications, calendarEvents]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
