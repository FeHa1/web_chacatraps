import PageShell from '../components/PageShell.jsx'
import BackToMenu from '../components/BackToMenu.jsx'
import { VIDEOS } from '../data/acusticos-media.js'

export default function Acusticos() {
  return (
    <PageShell>
      <BackToMenu />

      <header className="page-shell__header">
        <span className="eyebrow">// ACUSTICOS</span>
        <h1 className="section-title glow-cyan">Sesiones Acústicas</h1>
      </header>

      {VIDEOS.length === 0 ? (
        <p className="gallery-empty">Próximamente: sesiones acústicas de la banda.</p>
      ) : (
        <div className="video-native-grid">
          {VIDEOS.map((video) => (
            <video key={video} className="video-native" src={video} controls playsInline />
          ))}
        </div>
      )}
    </PageShell>
  )
}
