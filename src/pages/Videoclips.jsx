import PageShell from '../components/PageShell.jsx'
import BackToMenu from '../components/BackToMenu.jsx'
import { VIDEOCLIPS } from '../data/videoclips-data.js'

export default function Videoclips() {
  return (
    <PageShell>
      <BackToMenu />

      <header className="page-shell__header">
        <span className="eyebrow">// VIDEOCLIPS</span>
        <h1 className="section-title glow-cyan">Videos</h1>
      </header>

      {VIDEOCLIPS.length === 0 ? (
        <p className="gallery-empty">Próximamente: videoclips de la banda.</p>
      ) : (
        <div className="embed-grid">
          {VIDEOCLIPS.map((clip) => (
            <div key={clip.id}>
              <div className="embed-wrap video-embed">
                <iframe
                  src={clip.embedUrl}
                  title={clip.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="video-caption">{clip.title}</p>
            </div>
          ))}
        </div>
      )}
    </PageShell>
  )
}
