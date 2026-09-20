import { useEffect, useState } from 'react'
import useBeepSound from '../hooks/useBeepSound.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

/**
 * Video a pantalla completa que se abre con el botón START de la home. Se
 * cierra con el botón "X", click afuera o Escape. Si el archivo no existe
 * todavía (o no se puede reproducir), muestra un aviso en vez del reproductor.
 */
export default function StartVideoModal({ src, onClose }) {
  const { playHover } = useBeepSound()
  const { t } = useLanguage()
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="lightbox" onClick={onClose}>
      <button
        type="button"
        className="lightbox__close"
        onClick={onClose}
        onMouseEnter={playHover}
        aria-label={t.common.close}
      >
        ✕
      </button>

      {failed ? (
        <p className="start-video-missing">&gt; {t.home.videoUnavailable}</p>
      ) : (
        <video
          className="start-video"
          src={src}
          controls
          autoPlay
          playsInline
          onClick={(event) => event.stopPropagation()}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}
