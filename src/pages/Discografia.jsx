import PageShell from '../components/PageShell.jsx'
import BackToMenu from '../components/BackToMenu.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

// Embed del perfil/artista de la banda en Spotify.
// Para conseguir el link: en Spotify, "Compartir" -> "Insertar aplicación"
// (Embed), y copiar la URL que está dentro del atributo src del iframe.
const SPOTIFY_ARTIST_EMBED = 'https://open.spotify.com/embed/artist/3b43OYPshnGoPpr8bckZNA?utm_source=generator&si=03f5c13de21d40f8'

// Embeds de álbumes/EPs, en el orden en que se muestran. Para agregar uno
// nuevo, copiá la URL del src del iframe de embed (mismo método que arriba)
// y sumala a este array.
const SPOTIFY_ALBUM_EMBEDS = [
  'https://open.spotify.com/embed/album/63vMjfc9wKyyDd3PSgesE3?utm_source=generator&si=25a02fdacb8a4ffa',
  'https://open.spotify.com/embed/album/7Mt2JfJX10kEB2TNv9Oczz?utm_source=generator&si=380e719d174246bd',
  'https://open.spotify.com/embed/album/3PWHrlETJ0Qnd8khTX8HBh?utm_source=generator&si=0094cb53f8a24756',
]

export default function Discografia() {
  const { t } = useLanguage()

  return (
    <PageShell>
      <BackToMenu />

      <header className="page-shell__header">
        <span className="eyebrow">// {t.menu.discography}</span>
        <h1 className="section-title glow-magenta">{t.discography.title}</h1>
      </header>

      <p className="prose">
        {t.discography.intro}
      </p>

      <div className="embed-stack">
        <div className="embed-wrap">
          <iframe
            title={t.discography.artistEmbedTitle}
            src={SPOTIFY_ARTIST_EMBED}
            width="100%"
            height="352"
            style={{ display: 'block' }}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>

        <div className="embed-grid embed-grid--compact">
          {SPOTIFY_ALBUM_EMBEDS.map((src, i) => (
            <div className="embed-wrap" key={src}>
              <iframe
                title={t.discography.albumEmbedTitle(i + 1)}
                src={src}
                width="100%"
                height="152"
                style={{ display: 'block' }}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
