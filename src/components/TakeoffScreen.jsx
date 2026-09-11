import { useState } from 'react'
import CertificationScreen from './CertificationScreen.jsx'
import ExchangeScreen from './ExchangeScreen.jsx'
import { CertificateIcon } from '../icons.jsx'

export default function TakeoffScreen({ isEligible }) {
  const [previewDismissed, setPreviewDismissed] = useState(false)

  return (
    <div className="takeoff-screen">
      {!isEligible && !previewDismissed && (
        <div className="preview-banner">
          <span>Preview &mdash; normally unlocked after a clean Checkpoint 1 record.</span>
          <button
            type="button"
            className="preview-banner-dismiss"
            onClick={() => setPreviewDismissed(true)}
            aria-label="Dismiss preview notice"
          >
            &times;
          </button>
        </div>
      )}

      <div className="takeoff-lead-note">
        Access earned at Checkpoint 1. The court reviews your legal system, backed by your
        Passport record &mdash; never the intelligence.
      </div>

      <CertificationScreen />

      <div className="unlock-divider">
        <CertificateIcon width={14} height={14} />
        <span>Certification granted &rarr; secure channel unlocked</span>
      </div>

      <ExchangeScreen />
    </div>
  )
}
