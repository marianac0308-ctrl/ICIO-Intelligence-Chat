import CertificationScreen from './CertificationScreen.jsx'
import ExchangeScreen from './ExchangeScreen.jsx'
import { CertificateIcon } from '../icons.jsx'

export default function RefereeScreen() {
  return (
    <div className="referee-screen">
      <CertificationScreen />

      <div className="unlock-divider">
        <CertificateIcon width={14} height={14} />
        <span>Certification granted &rarr; secure channel unlocked</span>
      </div>

      <ExchangeScreen />
    </div>
  )
}
