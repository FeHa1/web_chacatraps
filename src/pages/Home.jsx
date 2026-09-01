import { useState } from 'react'
import { motion } from 'framer-motion'
import MenuOption from '../components/MenuOption.jsx'

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

        <div className="glitch-logo">
          <img src="/home/chacatraps.gif" alt="Los Chacatraps" />
          <span className="glitch-logo__layer glitch-logo__layer--red" aria-hidden="true" />
          <span className="glitch-logo__layer glitch-logo__layer--cyan" aria-hidden="true" />
          <span className="glitch-logo__layer glitch-logo__layer--yellow" aria-hidden="true" />
        </div>

        <h1 className="home-title">LOS CHACATRAPS</h1>
        <p className="home-subtitle">MENU</p>
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

      <p className="home-footer">© {new Date().getFullYear()} LOS CHACATRAPS</p>
    </motion.div>
  )
}
