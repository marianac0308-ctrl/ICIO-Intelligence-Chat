export default function Avatar({ code, dim = false, size = 32 }) {
  return (
    <div
      className={dim ? 'avatar avatar-dim' : 'avatar'}
      style={{ width: size, height: size, fontSize: size * 0.34 }}
    >
      {code}
    </div>
  )
}
