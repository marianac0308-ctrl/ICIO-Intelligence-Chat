export default function DemoUnlockToggle({ active, onToggle }) {
  return (
    <button
      type="button"
      className={active ? 'demo-toggle demo-toggle-active' : 'demo-toggle'}
      onClick={onToggle}
      title="Demo: force-unlock Checkpoint 2 (Ctrl+Shift+U)"
    >
      <span className="demo-toggle-dot" />
      <span className="demo-toggle-label">Demo unlock</span>
    </button>
  )
}
