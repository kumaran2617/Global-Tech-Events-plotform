import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Events from './pages/Events'
import EventDetails from './pages/EventDetails'
import Register from './pages/Register'
import Hackathons from './pages/Hackathons'
import TeamApply from './pages/TeamApply'
import Meetups from './pages/Meetups'
import MeetupDetails from './pages/MeetupDetails'
import MapView from './pages/MapView'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Analytics from './pages/Analytics'
import Chat from './pages/Chat'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

function NotFound() {
  return (
    <div className="page-shell">
      <h1>Page not found</h1>
      <p>We could not find what you were looking for.</p>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/register" element={<Register />} />
      <Route path="/hackathons" element={<Hackathons />} />
      <Route path="/team-apply" element={<TeamApply />} />
      <Route path="/meetups" element={<Meetups />} />
      <Route path="/meetups/:city" element={<MeetupDetails />} />
      <Route path="/map" element={<MapView />} />
      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <Chat />
          </ProtectedRoute>
        }
      />
      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
