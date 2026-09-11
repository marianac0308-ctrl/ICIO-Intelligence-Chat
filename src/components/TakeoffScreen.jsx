import CertificationScreen from './CertificationScreen.jsx'
import ExchangeScreen from './ExchangeScreen.jsx'
import { CertificateIcon } from '../icons.jsx'

export default function TakeoffScreen() {
  return (
    <div className="takeoff-screen">
      <div className="takeoff-lead-note">
        Access earned on Floor 1. The court reviews your legal system, backed by your Passport
        record &mdash; never the intelligence.
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
