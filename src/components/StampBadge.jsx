import { stampMeta } from '../registryData.js'

export default function StampBadge({ stamp }) {
  return <span className={`stamp-badge stamp-${stamp}`}>{stampMeta[stamp].label}</span>
}
