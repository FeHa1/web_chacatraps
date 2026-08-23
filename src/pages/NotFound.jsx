import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import useBeepSound from '../hooks/useBeepSound.js'

export default function NotFound() {
  const { playHover, playSelect } = useBeepSound()

  return (
    <motion.div
      className="notfound-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <h1 className="glitch-text" data-text="SIGNAL LOST">
        SIGNAL LOST
      </h1>
      <p className="notfound-code">ERROR 404 — FRECUENCIA NO ENCONTRADA</p>
      <Link
        to="/"
        className="back-to-menu"
        style={{ marginTop: '1.5rem' }}
        onMouseEnter={playHover}
        onClick={playSelect}
      >
        &lt;&lt; VOLVER AL MENU
      </Link>
    </motion.div>
  )
}
