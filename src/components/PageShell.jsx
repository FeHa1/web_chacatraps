import { motion } from 'framer-motion'

const variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
}

/**
 * Envoltorio compartido por todas las páginas (menos Home) para que la
 * transición de entrada/salida sea consistente. No requiere tocar App.jsx
 * cuando se agregan páginas nuevas: solo envolver el contenido con esto.
 */
export default function PageShell({ children, className = '' }) {
  return (
    <motion.main
      className={`page-shell ${className}`}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      {children}
    </motion.main>
  )
}
