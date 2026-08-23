import PageShell from '../components/PageShell.jsx'
import BackToMenu from '../components/BackToMenu.jsx'
import { getSortedShows } from '../data/shows-data.js'

// Formatea "YYYY-MM-DD" a algo mas legible sin depender de librerias externas.
function formatDate(isoDate) {
  const [year, month, day] = isoDate.split('-')
  const months = [
    'ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN',
    'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC',
  ]
  return `${day} ${months[Number(month) - 1]} ${year}`
}

export default function FormatoEnVivo() {
  const shows = getSortedShows()

  return (
    <PageShell>
      <BackToMenu />

      <header className="page-shell__header">
        <span className="eyebrow">// FORMATO EN VIVO</span>
        <h1 className="section-title glow-cyan">Shows</h1>
      </header>

      {shows.length === 0 ? (
        <p className="gallery-empty">Próximamente: fotos y videos de nuestros shows en vivo.</p>
      ) : (
        <div className="gallery-grid">
          {shows.map((show) => (
            <article className="card gallery-item" key={show.id}>
              {show.photoUrl ? (
                <img className="gallery-item__media" src={show.photoUrl} alt={show.title} />
              ) : (
                <div className="gallery-item__media" />
              )}
              <div className="gallery-item__body">
                <div className="gallery-item__date">{formatDate(show.date)}</div>
                <h3 className="gallery-item__title">{show.title}</h3>
                <div className="gallery-item__venue">{show.venue}</div>

                {show.videos.length > 0 && (
                  <div className="contact-list" style={{ marginTop: '0.9rem' }}>
                    {show.videos.map((video) => (
                      <a
                        key={video.url + video.label}
                        className="contact-pill"
                        href={video.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        ▶ {video.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </PageShell>
  )
}
