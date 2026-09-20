import { useState } from 'react'
import PageShell from '../components/PageShell.jsx'
import BackToMenu from '../components/BackToMenu.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { PHOTOS, VIDEOS } from '../data/formato-en-vivo-media.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function FormatoEnVivo() {
  const [openIndex, setOpenIndex] = useState(null)
  const { t } = useLanguage()

  const openAt = (index) => setOpenIndex(index)
  const close = () => setOpenIndex(null)
  const goPrev = () => setOpenIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length)
  const goNext = () => setOpenIndex((i) => (i + 1) % PHOTOS.length)

  return (
    <PageShell>
      <BackToMenu />

      <header className="page-shell__header">
        <span className="eyebrow">// {t.menu.live}</span>
        <h1 className="section-title glow-cyan">{t.live.title}</h1>
      </header>

      {VIDEOS.length > 0 && (
        <div className="video-native-grid">
          {VIDEOS.map((video) => (
            <video key={video} className="video-native" src={video} controls playsInline />
          ))}
        </div>
      )}

      {PHOTOS.length > 0 && (
        <div className="gallery-grid">
          {PHOTOS.map((photo, i) => (
            <button
              type="button"
              className="gallery-photo"
              key={photo}
              onClick={() => openAt(i)}
              aria-label={t.live.viewPhoto(i + 1)}
            >
              <img className="gallery-photo__img" src={photo} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {PHOTOS.length === 0 && VIDEOS.length === 0 && (
        <p className="gallery-empty">{t.live.empty}</p>
      )}

      {openIndex !== null && (
        <Lightbox photos={PHOTOS} index={openIndex} onClose={close} onPrev={goPrev} onNext={goNext} />
      )}
    </PageShell>
  )
}
