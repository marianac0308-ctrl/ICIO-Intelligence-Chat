import { useState } from 'react'
import { ACTING_COUNTRY, intelligenceTypes, purposePresets, initialRegistry } from '../registryData.js'
import StampBadge from './StampBadge.jsx'

function todayISO() {
  return new Date().toISOString().slice(0, 10)
}

function randomStamp() {
  const r = Math.random()
  if (r < 0.5) return 'prevention'
  if (r < 0.8) return 'review'
  return 'rejected'
}

export default function PassportScreen({ onGoToReferee }) {
  const [registry, setRegistry] = useState(initialRegistry)
  const [type, setType] = useState(intelligenceTypes[0])
  const [purpose, setPurpose] = useState('')
  const [lastId, setLastId] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = purpose.trim()
    if (!trimmed) return
    const entry = {
      id: `local-${Date.now()}`,
      country: ACTING_COUNTRY,
      type,
      purpose: trimmed,
      stamp: randomStamp(),
      date: todayISO(),
    }
    setRegistry((prev) => [entry, ...prev])
    setLastId(entry.id)
    setPurpose('')
  }

  const swedenRows = registry.filter((r) => r.country === ACTING_COUNTRY)
  const preventionCount = swedenRows.filter((r) => r.stamp === 'prevention').length

  return (
    <div className="panel passport-panel">
      <div className="panel-header">
        <div className="panel-header-left">
          <span className="panel-title">Passport · request and stamp registry</span>
        </div>
        <div className="status-pill status-pill-secure">
          <span>Open to all members</span>
        </div>
      </div>

      <div className="passport-body">
        <form className="request-form" onSubmit={handleSubmit}>
          <div className="request-form-title">New request &middot; submitted as {ACTING_COUNTRY}</div>

          <div className="form-grid">
            <div className="form-row">
              <label className="form-label" htmlFor="intel-type">
                Intelligence type
              </label>
              <select
                id="intel-type"
                className="form-select"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                {intelligenceTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-row form-row-wide">
              <label className="form-label" htmlFor="purpose">
                Purpose
              </label>
              <input
                id="purpose"
                className="form-input"
                list="purpose-presets"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                placeholder="e.g. Critical infrastructure threat"
                autoComplete="off"
              />
              <datalist id="purpose-presets">
                {purposePresets.map((p) => (
                  <option key={p} value={p} />
                ))}
              </datalist>
            </div>
          </div>

          <button type="submit" className="form-submit" disabled={!purpose.trim()}>
            Submit request
          </button>
        </form>

        <div className="registry-note">
          Every request is logged &mdash; even rejections &mdash; and visible to all participating
          countries.
        </div>

        <div className="registry-table-wrap">
          <table className="registry-table">
            <thead>
              <tr>
                <th>Country</th>
                <th>Intelligence type</th>
                <th>Purpose</th>
                <th>Stamp</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {registry.map((row) => (
                <tr key={row.id} className={row.id === lastId ? 'registry-row-new' : undefined}>
                  <td>{row.country}</td>
                  <td>{row.type}</td>
                  <td>{row.purpose}</td>
                  <td>
                    <StampBadge stamp={row.stamp} />
                  </td>
                  <td>{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bridge-card">
        <div className="bridge-card-text">
          <div className="bridge-card-title">Track record &middot; {ACTING_COUNTRY}</div>
          <div className="bridge-card-stats">
            {swedenRows.length} requests logged &middot; {preventionCount} prevention stamps
          </div>
          <div className="bridge-card-line">Clean record &rarr; eligible for certification.</div>
        </div>
        <button type="button" className="bridge-card-cta" onClick={onGoToReferee}>
          Go to Floor 2 &middot; Referee
        </button>
      </div>
    </div>
  )
}
