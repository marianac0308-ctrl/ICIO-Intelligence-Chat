import { useState } from 'react'
import { ShieldIcon, MoonIcon, SunIcon } from './icons.jsx'
import PassportScreen from './components/PassportScreen.jsx'
import RefereeScreen from './components/RefereeScreen.jsx'

export default function App() {
  const [floor, setFloor] = useState('passport')
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? 'app dark' : 'app'}>
      <div className="app-topbar">
        <div className="brand">
          <ShieldIcon width={18} height={18} />
          <span>ICIO intelligence platform</span>
        </div>
        <div className="top-controls">
          <div className="tabs" role="tablist">
            <button
              role="tab"
              aria-selected={floor === 'passport'}
              className={floor === 'passport' ? 'tab active' : 'tab'}
              onClick={() => setFloor('passport')}
            >
              Floor 1 &middot; Passport
            </button>
            <button
              role="tab"
              aria-selected={floor === 'referee'}
              className={floor === 'referee' ? 'tab active' : 'tab'}
              onClick={() => setFloor('referee')}
            >
              Floor 2 &middot; Referee
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
        {floor === 'passport' ? (
          <PassportScreen onGoToReferee={() => setFloor('referee')} />
        ) : (
          <RefereeScreen />
        )}
      </div>
    </div>
  )
}
