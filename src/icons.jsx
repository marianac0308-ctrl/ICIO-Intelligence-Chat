const base = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function ShieldIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
    </svg>
  )
}

export function LockIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="11" width="14" height="9" rx="1.5" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  )
}

export function UnlockIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="11" width="14" height="9" rx="1.5" />
      <path d="M8 11V7a4 4 0 0 1 7.5-2" />
    </svg>
  )
}

export function ArrowRightIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  )
}

export function CertificateIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14.5L7 21l5-2.5 5 2.5-1.5-6.5" />
    </svg>
  )
}

export function FileIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v4h4" />
    </svg>
  )
}

export function SendIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M21 3L3 10.5l7.5 2.5L13 21l8-18z" />
      <path d="M10.5 13L15 8.5" />
    </svg>
  )
}

export function MoonIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
    </svg>
  )
}

export function SunIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
  )
}
