import { useEffect, useState } from 'react'
import { fetchRecords } from '../api.js'

function displayValue(value) {
  if (value == null || value === '') return '-'
  if (typeof value === 'object') return value.name || value.username || value._id || JSON.stringify(value)
  return String(value)
}

export default function DataPage({ resource, endpoint, title, description, columns }) {
  const [records, setRecords] = useState([])
  const [state, setState] = useState({ loading: true, error: '' })

  useEffect(() => {
    let active = true
    fetchRecords(resource, endpoint)
      .then((data) => active && (setRecords(data), setState({ loading: false, error: '' })))
      .catch((error) => active && setState({ loading: false, error: error.message }))
    return () => { active = false }
  }, [resource, endpoint])

  return (
    <section className="data-page">
      <div className="page-heading">
        <div><p className="eyebrow">Octofit / {resource}</p><h1>{title}</h1></div>
        <span className="record-count">{records.length} records</span>
      </div>
      <p className="page-description">{description}</p>
      <div className="data-panel">
        {state.loading && <p className="empty-state">Loading your data...</p>}
        {state.error && <p className="empty-state error-state">{state.error}. Check the API connection and try again.</p>}
        {!state.loading && !state.error && records.length === 0 && <p className="empty-state">Nothing here yet.</p>}
        {!state.loading && !state.error && records.length > 0 && (
          <div className="table-responsive"><table className="table align-middle mb-0"><thead><tr>{columns.map(([key, label]) => <th key={key}>{label}</th>)}</tr></thead><tbody>{records.map((record, index) => <tr key={record._id || record.id || index}>{columns.map(([key]) => <td key={key}>{displayValue(record[key])}</td>)}</tr>)}</tbody></table></div>
        )}
      </div>
    </section>
  )
}
