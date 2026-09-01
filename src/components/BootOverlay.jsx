import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

// Nombre de "proceso" que se muestra en el flash de carga al cambiar de
// ruta. Si se agrega una ruta nueva, alcanza con sumarla acá.
const SECTION_LABELS = {
  '/': 'home.sys',
  '/about': 'about.sys',
  '/formato_en_vivo': 'live_format.sys',
  '/acusticos': 'acoustic.sys',
  '/discografia': 'discography.sys',
  '/videoclips': 'videoclips.sys',
}

/**
 * Flash breve de "> loading [seccion]..." al navegar entre rutas. Es
 * puramente decorativo (pointer-events: none) y no bloquea el render real
 * de la página, que ya está montada debajo mientras este overlay se apaga.
 */
export default function BootOverlay() {
  const location = useLocation()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setVisible(true)
    const timer = setTimeout(() => setVisible(false), 500)
    return () => clearTimeout(timer)
  }, [location.pathname])

  const label = SECTION_LABELS[location.pathname] ?? 'unknown.sys'

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="boot-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          aria-hidden="true"
        >
          <span className="boot-overlay__text">&gt; loading {label}...</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
