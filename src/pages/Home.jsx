import { useState } from 'react'
import { motion } from 'framer-motion'
import MenuOption from '../components/MenuOption.jsx'
import StartVideoModal from '../components/StartVideoModal.jsx'
import LanguageToggle from '../components/LanguageToggle.jsx'
import useBeepSound from '../hooks/useBeepSound.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

// Video que se muestra al apretar START. Para cambiarlo: poner el archivo en
// public/home/ y ajustar esta ruta (se sirve desde la raíz, sin "public").
const START_VIDEO_SRC = '/home/start-video.mp4'

// Opciones del menú principal. `labelKey` apunta a t.menu en
// src/i18n/translations.js. Para agregar/quitar una opción del menú, editar
// este array (y sumar su texto en ambos idiomas).
const MENU_ITEMS = [
  { to: '/about', labelKey: 'about' },
  { to: '/formato_en_vivo', labelKey: 'live' },
  { to: '/acusticos', labelKey: 'acoustic' },
  { to: '/discografia', labelKey: 'discography' },
  { to: '/videoclips', labelKey: 'videoclips' },
]

export default function Home() {
  const [activeItem, setActiveItem] = useState(null)
  const [videoOpen, setVideoOpen] = useState(false)
  const { playHover, playSelect } = useBeepSound()
  const { t } = useLanguage()

  return (
    <motion.div
      className="home-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <LanguageToggle />

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
          {t.home.start}
        </button>
      </div>

      <nav className="home-menu" aria-label={t.home.menuLabel}>
        {MENU_ITEMS.map((item) => (
          <MenuOption
            key={item.to}
            to={item.to}
            label={t.menu[item.labelKey]}
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

      <footer className="home-footer">
        <p>© {new Date().getFullYear()} CHACATRAP</p>
        <p>
          build by{' '}
          <a href="https://github.com/FeHa1" target="_blank" rel="noopener noreferrer">
            FeHa1
          </a>
        </p>
      </footer>
    </motion.div>
  )
}
