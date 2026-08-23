import PageShell from '../components/PageShell.jsx'
import BackToMenu from '../components/BackToMenu.jsx'

// Reemplazar por el link real del perfil/artista de Spotify de la banda.
// Para conseguir el link de embed: en Spotify, "Compartir" -> "Insertar
// aplicación" (Embed), y copiar la URL que está dentro del atributo src.
const SPOTIFY_EMBED_URL = 'https://open.spotify.com/embed/artist/3b43OYPshnGoPpr8bckZNA?utm_source=generator&si=03f5c13de21d40f8>'

export default function Discografia() {
  return (
    <PageShell>
      <BackToMenu />

      <header className="page-shell__header">
        <span className="eyebrow">// DISCOGRAFIA</span>
        <h1 className="section-title glow-magenta">Escuchanos</h1>
      </header>

      <p className="prose">
        Todo nuestro catálogo, en vivo desde Spotify. 
      </p>

      <div className="embed-wrap">
        <iframe
          title="Los Chacatraps en Spotify"
          src={SPOTIFY_EMBED_URL}
          width="100%"
          height="352"
          style={{ display: 'block' }}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </PageShell>
  )
}
