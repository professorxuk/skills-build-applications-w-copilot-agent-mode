import { NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <img src="/octofit-logo.png" alt="Octofit" />
          <span>Octofit Tracker</span>
        </div>
        <span className="status-dot">Live workspace</span>
      </header>
      <div className="app-body">
        <aside className="sidebar">
          <p className="eyebrow">Your movement, measured</p>
          <nav aria-label="Main navigation">
            {[
              ['/', 'Overview'],
              ['/activities', 'Activities'],
              ['/leaderboard', 'Leaderboard'],
              ['/teams', 'Teams'],
              ['/users', 'Members'],
              ['/workouts', 'Workouts'],
            ].map(([to, label]) => (
              <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>
            ))}
          </nav>
          <div className="sidebar-note">Small steps. Serious momentum.</div>
        </aside>
        <main className="content">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

function Overview() {
  return (
    <section className="welcome">
      <p className="eyebrow">Wednesday, August 19</p>
      <h1>Make today count.</h1>
      <p className="intro">Track the work, find your people, and keep your next session close.</p>
      <div className="overview-links">
        <NavLink to="/activities" className="feature-link"><strong>Log activity</strong><span>Record the effort that moves you forward.</span></NavLink>
        <NavLink to="/workouts" className="feature-link"><strong>Find a workout</strong><span>Browse suggestions for your next session.</span></NavLink>
      </div>
    </section>
  )
}

export default App
