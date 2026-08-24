import { useState } from 'react'
import useBeepSound from '../hooks/useBeepSound.js'

// Calcula la edad a partir de la fecha de nacimiento (YYYY-MM-DD) usando la
// fecha actual, así siempre está al día sin tener que actualizarla a mano.
function calculateAge(birthDateISO) {
  const birth = new Date(birthDateISO)
  if (Number.isNaN(birth.getTime())) return null

  const today = new Date()
  let age = today.getFullYear() - birth.getFullYear()
  const hasHadBirthdayThisYear =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate())
  if (!hasHadBirthdayThisYear) age -= 1

  return age
}

/**
 * Carta de integrante que se da vuelta al tocarla/clickearla.
 * Frente: GIF (o un placeholder con la inicial si todavía no hay GIF) + nombre.
 * Dorso: nombre completo, edad, habilidades e Instagram.
 * Recibe un objeto `member` — ver el array MEMBERS en About.jsx.
 */
export default function MemberCard({ member }) {
  const [flipped, setFlipped] = useState(false)
  const { playHover, playSelect } = useBeepSound()

  const toggleFlip = () => {
    setFlipped((prev) => !prev)
    playSelect()
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleFlip()
    }
  }

  const age = calculateAge(member.birthDate)
  const displayName = member.stageName || member.name

  return (
    <div
      className={`flip-card ${flipped ? 'flip-card--flipped' : ''}`}
      role="button"
      tabIndex={0}
      onClick={toggleFlip}
      onKeyDown={handleKeyDown}
      onMouseEnter={playHover}
      aria-pressed={flipped}
      aria-label={`Ver más sobre ${displayName}`}
    >
      <div className="flip-card__inner">
        {/* ---- Frente ---- */}
        <div className="flip-card__face flip-card__face--front">
          <div className="flip-card__media">
            {member.gifUrl ? (
              <img className="flip-card__gif" src={member.gifUrl} alt="" />
            ) : (
              <div className="flip-card__placeholder">{displayName.charAt(0)}</div>
            )}
          </div>
          <div className="flip-card__front-overlay">
            <div className="flip-card__front-name">{displayName}</div>
            <div className="flip-card__hint">TOCÁ PARA VER MÁS ▸</div>
          </div>
        </div>

        {/* ---- Dorso ---- */}
        <div className="flip-card__face flip-card__face--back">
          <div className="flip-card__back-name">{member.name}</div>
          {age !== null && <div className="flip-card__back-age">{age} años</div>}

          {member.skills?.length > 0 && (
            <div className="flip-card__skills">
              {member.skills.map((skill) => (
                <span className="flip-card__skill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          )}

          <a
            className="contact-pill"
            href={member.instagram.url}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
          >
            Instagram — {member.instagram.label}
          </a>
        </div>
      </div>
    </div>
  )
}
