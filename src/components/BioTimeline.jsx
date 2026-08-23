import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useBeepSound from '../hooks/useBeepSound.js'

const variants = {
  enter: (direction) => ({ opacity: 0, x: direction > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit: (direction) => ({ opacity: 0, x: direction > 0 ? -40 : 40 }),
}

/**
 * Biografía navegable estilo línea de tiempo: un capítulo (año + texto) a la
 * vez, con flechas para pasar de uno a otro. Recibe `entries`, una lista de
 * objetos { year, text } — ver el array BIO en About.jsx.
 */
export default function BioTimeline({ entries }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const { playHover, playSelect } = useBeepSound()

  const total = entries.length
  const current = entries[index]

  const goTo = (nextIndex) => {
    if (nextIndex < 0 || nextIndex >= total || nextIndex === index) return
    setDirection(nextIndex > index ? 1 : -1)
    setIndex(nextIndex)
    playSelect()
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') goTo(index + 1)
    if (event.key === 'ArrowLeft') goTo(index - 1)
  }

  return (
    <div className="bio-timeline" onKeyDown={handleKeyDown}>
      <div className="bio-timeline__row">
        <button
          type="button"
          className="bio-timeline__arrow"
          onClick={() => goTo(index - 1)}
          onMouseEnter={playHover}
          disabled={index === 0}
          aria-label="Capítulo anterior"
        >
          ‹
        </button>

        <div className="bio-timeline__content">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.year}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <span className="bio-timeline__year glow-cyan">{current.year}</span>
              <p className="bio-timeline__text">{current.text}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          className="bio-timeline__arrow"
          onClick={() => goTo(index + 1)}
          onMouseEnter={playHover}
          disabled={index === total - 1}
          aria-label="Capítulo siguiente"
        >
          ›
        </button>
      </div>

      <div className="bio-timeline__dots">
        {entries.map((entry, i) => (
          <button
            key={entry.year}
            type="button"
            className={`bio-timeline__dot ${i === index ? 'bio-timeline__dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ir a ${entry.year}`}
          />
        ))}
      </div>

      <p className="bio-timeline__counter">
        {index + 1} / {total}
      </p>
    </div>
  )
}
