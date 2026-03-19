import { useContext, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const eventTopics = [
  { title: 'Global AI Summit 2026', topic: 'AI' },
  { title: 'Web Future Conf', topic: 'Web Development' },
  { title: 'Data Science Week', topic: 'Data Science' },
  { title: 'SecureWorld Live', topic: 'Cyber Security' },
  { title: 'AI Product Summit', topic: 'AI' },
  { title: 'Cloud Next Meetup', topic: 'Cloud' },
  { title: 'Serverless Days', topic: 'Serverless' },
  { title: 'Blockchain Builder Camp', topic: 'Blockchain' },
]

const filterOptions = [
  'All',
  'AI',
  'Web Development',
  'Blockchain',
  'Data Science',
  'Cyber Security',
  'Remote',
]

function SearchBar() {
  const { isAuthenticated } = useContext(AuthContext)
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  const authLink = (to) =>
    isAuthenticated ? to : `/login?next=${encodeURIComponent(to)}`

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase()
    return eventTopics.filter((item) => {
      const matchesQuery =
        trimmed.length === 0 ||
        `${item.title} ${item.topic}`.toLowerCase().includes(trimmed)
      const matchesFilter =
        activeFilter === 'All' || item.topic === activeFilter
      return matchesQuery && matchesFilter
    })
  }, [query, activeFilter])

  const showResults = query.trim().length > 0 || activeFilter !== 'All'

  return (
    <div className="search-panel">
      <div className="search-bar">
        <input
          placeholder="Search by event, skill, or organizer"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button className="btn primary" type="button">
          Search
        </button>
      </div>
      {showResults && (
        <div className="search-results">
          {results.length === 0 ? (
            <p className="muted">No matching events found.</p>
          ) : (
            results.map((item) => (
              <Link
                key={item.title}
                className="result-item"
                to={authLink(`/events/${encodeURIComponent(item.title)}`)}
              >
                <strong>{item.title}</strong>
                <span className="tag">{item.topic}</span>
              </Link>
            ))
          )}
        </div>
      )}
      <div className="filters">
        {filterOptions.map((label) => (
          <button
            key={label}
            className={`chip ${activeFilter === label ? 'active' : ''}`}
            type="button"
            onClick={() => setActiveFilter(label)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchBar
