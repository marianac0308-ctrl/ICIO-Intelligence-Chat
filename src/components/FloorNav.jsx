import { LockIcon, UnlockIcon, ArrowRightIcon } from '../icons.jsx'

export default function FloorNav({ floor, onSelect, isEligible, preventionCount, threshold, attemptedLocked }) {
  const progressPct = Math.min(100, Math.round((preventionCount / threshold) * 100))

  return (
    <div className="floor-nav-wrap">
      <div className="floor-nav" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={floor === 'passport'}
          className={floor === 'passport' ? 'floor-step floor-step-active' : 'floor-step'}
          onClick={() => onSelect('passport')}
        >
          <span className="floor-step-index">1</span>
          <span className="floor-step-body">
            <span className="floor-step-label">Floor 1 &middot; Passport</span>
          </span>
        </button>

        <span className="floor-connector" aria-hidden="true">
          <ArrowRightIcon width={14} height={14} />
        </span>

        <button
          type="button"
          role="tab"
          aria-selected={floor === 'takeoff'}
          className={
            'floor-step floor-step-takeoff' +
            (floor === 'takeoff' ? ' floor-step-active' : '') +
            (isEligible ? ' floor-step-unlocked' : ' floor-step-locked')
          }
          onClick={() => onSelect('takeoff')}
        >
          {isEligible ? <UnlockIcon width={14} height={14} /> : <LockIcon width={14} height={14} />}
          <span className="floor-step-body">
            <span className="floor-step-label">Floor 2 &middot; Cleared for takeoff</span>
            {isEligible ? (
              <span className="floor-step-badge">Eligible for certification</span>
            ) : (
              <span className="floor-step-sublabel">Locked &mdash; build your record on Floor 1 first.</span>
            )}
          </span>
        </button>
      </div>

      {!isEligible && (
        <div className="floor-progress">
          <div className="floor-progress-track">
            <div className="floor-progress-fill" style={{ width: `${progressPct}%` }} />
          </div>
          <span className="floor-progress-text">
            {preventionCount} / {threshold} clean stamps &mdash; keep building your record
          </span>
        </div>
      )}

      {attemptedLocked && !isEligible && (
        <div className="floor-locked-hint">
          Clear customs first. Floor 2 unlocks once your record is clean.
        </div>
      )}
    </div>
  )
}
