import PageShell from '../components/PageShell.jsx'
import BackToMenu from '../components/BackToMenu.jsx'
import { VIDEOS } from '../data/acusticos-media.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Acusticos() {
  const { t } = useLanguage()

  return (
    <PageShell>
      <BackToMenu />

      <header className="page-shell__header">
        <span className="eyebrow">// {t.menu.acoustic}</span>
        <h1 className="section-title glow-cyan">{t.acoustic.title}</h1>
      </header>

      {VIDEOS.length === 0 ? (
        <p className="gallery-empty">{t.acoustic.empty}</p>
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
