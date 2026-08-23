import { Link } from 'react-router-dom'
import useBeepSound from '../hooks/useBeepSound.js'

// Link de "volver" presente en todas las páginas internas, estilo arcade.
export default function BackToMenu() {
  const { playHover, playSelect } = useBeepSound()

  return (
    <Link
      to="/"
      className="back-to-menu"
      onMouseEnter={playHover}
      onClick={playSelect}
    >
      &lt;&lt; MAIN MENU
    </Link>
  )
}
