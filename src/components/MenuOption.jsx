import { Link } from 'react-router-dom'
import useBeepSound from '../hooks/useBeepSound.js'

/**
 * Una opción del menú principal, estilo prompt de terminal.
 * - active: true cuando el mouse/foco/tap está sobre ESTA opción (muestra el
 *   cursor `>` parpadeante antes del texto)
 * - dimmed: true cuando hay OTRA opción activa (para apagar el resto)
 */
export default function MenuOption({ to, label, active, dimmed, onActivate, onDeactivate }) {
  const { playHover, playSelect } = useBeepSound()

  const handleEnter = () => {
    onActivate()
    playHover()
  }

  return (
    <Link
      to={to}
      className={`menu-option ${active ? 'menu-option--active' : ''} ${dimmed ? 'menu-option--dimmed' : ''}`}
      onMouseEnter={handleEnter}
      onMouseLeave={onDeactivate}
      onFocus={handleEnter}
      onBlur={onDeactivate}
      onTouchStart={handleEnter}
      onClick={playSelect}
    >
      <span className="menu-option__cursor" aria-hidden="true">
        {active ? '>' : ' '}
      </span>
      <span className="menu-option__label">{label}</span>
    </Link>
  )
}
