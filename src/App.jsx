import { useState } from 'react'
import { ShieldIcon, MoonIcon, SunIcon } from './icons.jsx'
import ExchangeScreen from './components/ExchangeScreen.jsx'
import CertificationScreen from './components/CertificationScreen.jsx'

export default function App() {
  const [tab, setTab] = useState('exchange')
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? 'app dark' : 'app'}>
      <div className="app-topbar">
        <div className="brand">
          <ShieldIcon width={18} height={18} />
          <span>ICIO intelligence exchange</span>
        </div>
        <div className="top-controls">
          <div className="tabs" role="tablist">
            <button
              role="tab"
              aria-selected={tab === 'exchange'}
              className={tab === 'exchange' ? 'tab active' : 'tab'}
              onClick={() => setTab('exchange')}
            >
              Exchange network
            </button>
            <button
              role="tab"
              aria-selected={tab === 'certification'}
              className={tab === 'certification' ? 'tab active' : 'tab'}
              onClick={() => setTab('certification')}
            >
              Certification review
            </button>
          </div>
          <button
            className="mode-toggle"
            onClick={() => setDark((v) => !v)}
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {dark ? <SunIcon width={16} height={16} /> : <MoonIcon width={16} height={16} />}
          </button>
        </div>
      </div>

      <div className="app-stage">
        {tab === 'exchange' ? <ExchangeScreen /> : <CertificationScreen />}
      </div>
    </div>
  )
}
