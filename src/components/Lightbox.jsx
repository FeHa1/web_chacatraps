import { useEffect } from 'react'
import useBeepSound from '../hooks/useBeepSound.js'

/**
 * Visor de foto a pantalla completa. Se cierra con click afuera, con el
 * botón "X", o con la tecla Escape. Si hay más de una foto, se puede navegar
 * con las flechas del teclado o los botones ‹ ›.
 */
export default function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const { playHover, playSelect } = useBeepSound()
  const total = photos.length

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight' && total > 1) onNext()
      if (event.key === 'ArrowLeft' && total > 1) onPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onNext, onPrev, total])

  return (
    <div className="lightbox" onClick={onClose}>
      <button
        type="button"
        className="lightbox__close"
        onClick={onClose}
        onMouseEnter={playHover}
        aria-label="Cerrar"
      >
        ✕
      </button>

      {total > 1 && (
        <button
          type="button"
          className="lightbox__arrow lightbox__arrow--prev"
          onClick={(event) => {
            event.stopPropagation()
            playSelect()
            onPrev()
          }}
          onMouseEnter={playHover}
          aria-label="Foto anterior"
        >
          ‹
        </button>
      )}

      <img
        className="lightbox__image"
        src={photos[index]}
        alt=""
        onClick={(event) => event.stopPropagation()}
      />

      {total > 1 && (
        <button
          type="button"
          className="lightbox__arrow lightbox__arrow--next"
          onClick={(event) => {
            event.stopPropagation()
            playSelect()
            onNext()
          }}
          onMouseEnter={playHover}
          aria-label="Foto siguiente"
        >
          ›
        </button>
      )}

      {total > 1 && (
        <span className="lightbox__counter">
          {index + 1} / {total}
        </span>
      )}
    </div>
  )
}
