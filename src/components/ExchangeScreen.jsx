import { useEffect, useRef, useState } from 'react'
import { members } from '../data.js'
import Avatar from './Avatar.jsx'
import { LockIcon, FileIcon, CertificateIcon, SendIcon } from '../icons.jsx'

const initialMessages = [
  {
    id: 'm1',
    from: 'out',
    text: 'Requesting any third-party threat indicators directed at Swedish critical infrastructure, window 72h. Process reference SE-2231.',
    meta: 'Sweden · 14:02 · delivered',
  },
  {
    id: 'm2',
    from: 'in',
    text: 'Confirmed indicator matching your reference. Transmitting assessment packet through the secure channel.',
    meta: 'Finland · 14:09',
    packet: {
      filename: 'threat_assessment_FIN-0447.enc',
    },
  },
]

function timeNow() {
  const d = new Date()
  const h = String(d.getHours()).padStart(2, '0')
  const m = String(d.getMinutes()).padStart(2, '0')
  return `${h}:${m}`
}

export default function ExchangeScreen() {
  const [messages, setMessages] = useState(initialMessages)
  const [draft, setDraft] = useState('')
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages])

  function sendMessage() {
    const text = draft.trim()
    if (!text) return
    setMessages((prev) => [
      ...prev,
      {
        id: `local-${Date.now()}`,
        from: 'out',
        text,
        meta: `Sweden · ${timeNow()} · delivered`,
      },
    ])
    setDraft('')
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="panel exchange-panel">
      <div className="panel-header">
        <div className="panel-header-left">
          <LockIcon width={16} height={16} />
          <div>
            <span className="panel-title">Certified exchange network</span>
            <div className="panel-subtitle">Certified-members-only &middot; unlocked by passing the Referee</div>
          </div>
        </div>
        <div className="status-pill status-pill-secure">
          <LockIcon width={13} height={13} />
          <span>Restricted &middot; encrypted</span>
        </div>
      </div>

      <div className="exchange-body">
        <aside className="member-list">
          <div className="member-caption">Members &middot; 6 connected</div>
          <div className="member-rows">
            {members.map((m) => (
              <div
                key={m.code}
                className={
                  'member-row' +
                  (m.code === 'FIN' ? ' member-row-selected' : '') +
                  (!m.connected ? ' member-row-dim' : '')
                }
              >
                <span className={m.connected ? 'status-dot status-dot-green' : 'status-dot status-dot-gray'} />
                <Avatar code={m.code} dim={!m.connected} size={28} />
                <div className="member-meta">
                  <div className="member-name">{m.name}</div>
                  <div className={m.connected ? 'member-status member-status-ok' : 'member-status member-status-suspended'}>
                    {m.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <section className="thread">
          <div className="thread-header">
            <Avatar code="FIN" size={30} />
            <div>
              <div className="thread-title">Finland</div>
              <div className="thread-subtitle">Certified member &middot; channel secured</div>
            </div>
          </div>

          <div className="thread-scroll" ref={scrollRef}>
            <div className="system-note-row">
              <span className="system-note">
                End-to-end encrypted &middot; who requested what is logged, never the content
              </span>
            </div>

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={msg.from === 'out' ? 'message-row message-row-out' : 'message-row message-row-in'}
              >
                <div className={msg.from === 'out' ? 'bubble bubble-out' : 'bubble bubble-in'}>{msg.text}</div>

                {msg.packet && (
                  <div className="packet-card">
                    <div className="packet-strip">
                      <CertificateIcon width={14} height={14} />
                      <span>Chamber-certified origin</span>
                    </div>
                    <div className="packet-body">
                      <FileIcon width={20} height={20} />
                      <div className="packet-file-meta">
                        <div className="packet-filename">{msg.packet.filename}</div>
                        <div className="packet-subtext">Chain of custody verified &middot; lawful origin</div>
                      </div>
                    </div>
                  </div>
                )}

                <div className={msg.from === 'out' ? 'message-meta message-meta-out' : 'message-meta message-meta-in'}>
                  {msg.meta}
                </div>
              </div>
            ))}
          </div>

          <div className="composer">
            <LockIcon width={15} height={15} className="composer-lock" />
            <input
              className="composer-input"
              type="text"
              placeholder="Encrypted message to certified member…"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="composer-send"
              onClick={sendMessage}
              disabled={!draft.trim()}
              aria-label="Send"
            >
              <SendIcon width={16} height={16} />
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
