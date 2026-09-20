import { useState } from 'react'
import { motion } from 'framer-motion'
import MenuOption from '../components/MenuOption.jsx'
import StartVideoModal from '../components/StartVideoModal.jsx'
import useBeepSound from '../hooks/useBeepSound.js'

// Video que se muestra al apretar START. Para cambiarlo: poner el archivo en
// public/home/ y ajustar esta ruta (se sirve desde la raíz, sin "public").
const START_VIDEO_SRC = '/home/start-video.mp4'

// Opciones del menú principal. Para agregar/quitar una opción del menú,
// solo hay que editar este array (no hace falta tocar el JSX de abajo).
const MENU_ITEMS = [
  { to: '/about', label: 'ABOUT US' },
  { to: '/formato_en_vivo', label: 'FORMATO EN VIVO' },
  { to: '/acusticos', label: 'ACUSTICOS' },
  { to: '/discografia', label: 'DISCOGRAFIA' },
  { to: '/videoclips', label: 'VIDEOCLIPS' },
]

export default function Home() {
  const [activeItem, setActiveItem] = useState(null)
  const [videoOpen, setVideoOpen] = useState(false)
  const { playHover, playSelect } = useBeepSound()

  return (
    <motion.div
      className="home-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div>
        <div className="boot-log" aria-hidden="true">
          <p>establishing uplink...</p>
          <p>connection established</p>
          <p>access granted — welcome</p>
        </div>

        <h1 className="home-title">CHACATRAP</h1>
        <button
          type="button"
          className="home-start"
          onClick={() => {
            playSelect()
            setVideoOpen(true)
          }}
          onMouseEnter={playHover}
        >
          START
        </button>
      </div>

      <nav className="home-menu" aria-label="Menú principal">
        {MENU_ITEMS.map((item) => (
          <MenuOption
            key={item.to}
            to={item.to}
            label={item.label}
            active={activeItem === item.to}
            dimmed={activeItem !== null && activeItem !== item.to}
            onActivate={() => setActiveItem(item.to)}
            onDeactivate={() => setActiveItem(null)}
          />
        ))}
      </nav>

      {videoOpen && (
        <StartVideoModal src={START_VIDEO_SRC} onClose={() => setVideoOpen(false)} />
      )}

      <p className="home-footer">© {new Date().getFullYear()} CHACATRAP</p>
    </motion.div>
  )
}
