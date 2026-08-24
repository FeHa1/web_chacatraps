import { useState } from 'react'
import { motion } from 'framer-motion'
import MenuOption from '../components/MenuOption.jsx'

// Opciones del menú principal. Para agregar/quitar una opción del menú,
// solo hay que editar este array (no hace falta tocar el JSX de abajo).
const MENU_ITEMS = [
  { to: '/about', label: 'ABOUT US' },
  { to: '/formato_en_vivo', label: 'FORMATO EN VIVO' },
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
        {/* Placeholder de prueba: si no convence, sacar este <img> y listo. */}
        <img className="home-logo-gif" src="/home/chacatraps.gif" alt="" />
        <h1 className="home-title">LOS CHACATRAPS</h1>
        <p className="home-subtitle">PRESS START</p>
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
