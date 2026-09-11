import { useEffect, useState } from 'react'
import { ShieldIcon, MoonIcon, SunIcon } from './icons.jsx'
import FloorNav from './components/FloorNav.jsx'
import PassportScreen from './components/PassportScreen.jsx'
import TakeoffScreen from './components/TakeoffScreen.jsx'
import DemoUnlockToggle from './components/DemoUnlockToggle.jsx'
import { ACTING_COUNTRY, CLEARANCE_THRESHOLD, initialRegistry, randomStamp, todayISO } from './registryData.js'

export default function App() {
  const [floor, setFloor] = useState('passport')
  const [dark, setDark] = useState(false)
  const [registry, setRegistry] = useState(initialRegistry)
  const [lastAddedId, setLastAddedId] = useState(null)
  const [demoUnlock, setDemoUnlock] = useState(false)

  const swedenRows = registry.filter((r) => r.country === ACTING_COUNTRY)
  const preventionCount = swedenRows.filter((r) => r.stamp === 'prevention').length
  const isEligible = demoUnlock || preventionCount >= CLEARANCE_THRESHOLD

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'u') {
        e.preventDefault()
        setDemoUnlock((v) => !v)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  function submitRequest({ type, purpose }) {
    const entry = {
      id: `local-${Date.now()}`,
      country: ACTING_COUNTRY,
      type,
      purpose,
      stamp: randomStamp(),
      date: todayISO(),
    }
    setRegistry((prev) => [entry, ...prev])
    setLastAddedId(entry.id)
  }

  return (
    <div className={dark ? 'app dark' : 'app'}>
      <div className="app-topbar">
        <div className="brand">
          <ShieldIcon width={18} height={18} />
          <span>ICIO intelligence platform</span>
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

      <FloorNav
        floor={floor}
        onSelect={setFloor}
        isEligible={isEligible}
        preventionCount={preventionCount}
        threshold={CLEARANCE_THRESHOLD}
      />

      <div className="app-stage">
        {floor === 'passport' ? (
          <PassportScreen
            registry={registry}
            lastAddedId={lastAddedId}
            onSubmitRequest={submitRequest}
            isEligible={isEligible}
            preventionCount={preventionCount}
            threshold={CLEARANCE_THRESHOLD}
            onGoToTakeoff={() => setFloor('takeoff')}
          />
        ) : (
          <TakeoffScreen isEligible={isEligible} />
        )}
      </div>

      <DemoUnlockToggle active={demoUnlock} onToggle={() => setDemoUnlock((v) => !v)} />
    </div>
  )
}
