import { members } from '../data.js'
import Avatar from './Avatar.jsx'
import { LockIcon, FileIcon, CertificateIcon, SendIcon } from '../icons.jsx'

export default function ExchangeScreen() {
  return (
    <div className="panel exchange-panel">
      <div className="panel-header">
        <div className="panel-header-left">
          <LockIcon width={16} height={16} />
          <span className="panel-title">Certified exchange network</span>
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

          <div className="thread-scroll">
            <div className="system-note-row">
              <span className="system-note">
                End-to-end encrypted &middot; metadata logged for chain of custody
              </span>
            </div>

            <div className="message-row message-row-out">
              <div className="bubble bubble-out">
                Requesting any third-party threat indicators directed at Swedish critical
                infrastructure, window 72h. Process reference SE-2231.
              </div>
              <div className="message-meta message-meta-out">Sweden &middot; 14:02 &middot; delivered</div>
            </div>

            <div className="message-row message-row-in">
              <div className="bubble bubble-in">
                Confirmed indicator matching your reference. Transmitting assessment packet
                through the secure channel.
              </div>

              <div className="packet-card">
                <div className="packet-strip">
                  <CertificateIcon width={14} height={14} />
                  <span>Chamber-certified origin</span>
                </div>
                <div className="packet-body">
                  <FileIcon width={20} height={20} />
                  <div className="packet-file-meta">
                    <div className="packet-filename">threat_assessment_FIN-0447.enc</div>
                    <div className="packet-subtext">Chain of custody verified &middot; lawful origin</div>
                  </div>
                </div>
              </div>

              <div className="message-meta message-meta-in">Finland &middot; 14:09</div>
            </div>
          </div>

          <div className="composer">
            <LockIcon width={15} height={15} className="composer-lock" />
            <input
              className="composer-input"
              type="text"
              placeholder="Encrypted message to certified member…"
              disabled
            />
            <button className="composer-send" disabled aria-label="Send">
              <SendIcon width={16} height={16} />
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
