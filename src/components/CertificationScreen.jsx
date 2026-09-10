import { criteria } from '../data.js'
import { CheckIcon, CertificateIcon } from '../icons.jsx'

export default function CertificationScreen() {
  return (
    <div className="panel certification-panel">
      <div className="cert-card">
        <div className="cert-card-header">
          <div className="panel-title">Certification review &middot; applicant: Finland</div>
        </div>

        <div className="cert-note">
          The Chamber reviews the legal framework only. No intelligence is submitted or seen.
        </div>

        <div className="cert-checklist">
          {criteria.map((label, i) => (
            <div className="cert-row" key={label}>
              <span className="cert-row-index">{i + 1}</span>
              <span className="cert-row-label">{label}</span>
              <span className="cert-row-status">
                <CheckIcon width={14} height={14} />
                <span>Met</span>
              </span>
            </div>
          ))}
        </div>

        <div className="cert-banner">
          <CertificateIcon width={18} height={18} />
          <span>All criteria met &mdash; certification granted</span>
        </div>
      </div>
    </div>
  )
}
