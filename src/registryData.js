export const ACTING_COUNTRY = 'Sweden'

export const CLEARANCE_THRESHOLD = 5

export const intelligenceTypes = ['HUMINT', 'SIGINT', 'OSINT', 'Covert action']

export const purposePresets = [
  'Critical infrastructure threat',
  'Counter-terrorism lead',
  'Cyber intrusion attribution',
  'Border security concern',
  'Election interference concern',
  'Organized crime network',
  'Maritime security threat',
  'Energy supply disruption risk',
]

export const stampMeta = {
  prevention: { label: 'Prevention · fast lane' },
  review: { label: 'Review · 72 hours' },
  rejected: { label: 'Rejected · no reason owed' },
}

export function todayISO() {
  return new Date().toISOString().slice(0, 10)
}

export function randomStamp() {
  const r = Math.random()
  if (r < 0.5) return 'prevention'
  if (r < 0.8) return 'review'
  return 'rejected'
}

export const initialRegistry = [
  {
    id: 'r1',
    country: 'Sweden',
    type: 'SIGINT',
    purpose: 'Critical infrastructure threat',
    stamp: 'prevention',
    date: '2026-09-10',
  },
  {
    id: 'r2',
    country: 'Norway',
    type: 'HUMINT',
    purpose: 'Counter-terrorism lead',
    stamp: 'prevention',
    date: '2026-09-10',
  },
  {
    id: 'r3',
    country: 'Sweden',
    type: 'OSINT',
    purpose: 'Election interference concern',
    stamp: 'review',
    date: '2026-09-09',
  },
  {
    id: 'r4',
    country: 'Poland',
    type: 'Covert action',
    purpose: 'Border security concern',
    stamp: 'rejected',
    date: '2026-09-09',
  },
  {
    id: 'r5',
    country: 'Sweden',
    type: 'HUMINT',
    purpose: 'Organized crime network',
    stamp: 'prevention',
    date: '2026-09-08',
  },
  {
    id: 'r6',
    country: 'Denmark',
    type: 'SIGINT',
    purpose: 'Cyber intrusion attribution',
    stamp: 'prevention',
    date: '2026-09-08',
  },
  {
    id: 'r7',
    country: 'Sweden',
    type: 'SIGINT',
    purpose: 'Maritime security threat',
    stamp: 'prevention',
    date: '2026-09-06',
  },
  {
    id: 'r8',
    country: 'Estonia',
    type: 'OSINT',
    purpose: 'Maritime security threat',
    stamp: 'review',
    date: '2026-09-05',
  },
  {
    id: 'r9',
    country: 'Sweden',
    type: 'Covert action',
    purpose: 'Energy supply disruption risk',
    stamp: 'rejected',
    date: '2026-09-04',
  },
  {
    id: 'r10',
    country: 'Netherlands',
    type: 'Covert action',
    purpose: 'Energy supply disruption risk',
    stamp: 'rejected',
    date: '2026-09-02',
  },
  {
    id: 'r11',
    country: 'Sweden',
    type: 'HUMINT',
    purpose: 'Counter-terrorism lead',
    stamp: 'prevention',
    date: '2026-09-01',
  },
]
