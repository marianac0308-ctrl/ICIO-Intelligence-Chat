import { useState } from 'react'
import { ACTING_COUNTRY, intelligenceTypes, purposePresets } from '../registryData.js'
import StampBadge from './StampBadge.jsx'

export default function PassportScreen({
  registry,
  lastAddedId,
  onSubmitRequest,
  isEligible,
  preventionCount,
  threshold,
  onGoToTakeoff,
}) {
  const [type, setType] = useState(intelligenceTypes[0])
  const [purpose, setPurpose] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = purpose.trim()
    if (!trimmed) return
    onSubmitRequest({ type, purpose: trimmed })
    setPurpose('')
  }

  const swedenRows = registry.filter((r) => r.country === ACTING_COUNTRY)

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
                <tr key={row.id} className={row.id === lastAddedId ? 'registry-row-new' : undefined}>
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

      <div className={isEligible ? 'bridge-card' : 'bridge-card bridge-card-locked'}>
        <div className="bridge-card-text">
          <div className="bridge-card-title">Track record &middot; {ACTING_COUNTRY}</div>
          <div className="bridge-card-stats">
            {swedenRows.length} requests logged &middot; {preventionCount} prevention stamps
          </div>
          <div className="bridge-card-line">
            {isEligible
              ? 'Clean record — eligible for certification.'
              : `Clean record → eligible for certification (${preventionCount}/${threshold} clean stamps).`}
          </div>
        </div>
        <button
          type="button"
          className={isEligible ? 'bridge-card-cta' : 'bridge-card-cta bridge-card-cta-locked'}
          onClick={onGoToTakeoff}
        >
          {isEligible ? 'Go to Floor 2 · Cleared for takeoff' : `Floor 2 locked · ${preventionCount}/${threshold}`}
        </button>
      </div>
    </div>
  )
}
