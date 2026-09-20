import { useLanguage } from '../i18n/LanguageContext.jsx'
import useBeepSound from '../hooks/useBeepSound.js'

const LANGUAGES = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
]

// Selector de idioma (español / inglés). Cambia el idioma de todo el sitio.
export default function LanguageToggle() {
  const { lang, setLang, t } = useLanguage()
  const { playHover, playSelect } = useBeepSound()

  return (
    <div className="lang-toggle" role="group" aria-label={t.home.languageLabel}>
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={`lang-toggle__btn ${lang === code ? 'lang-toggle__btn--active' : ''}`}
          aria-pressed={lang === code}
          onClick={() => {
            if (lang === code) return
            playSelect()
            setLang(code)
          }}
          onMouseEnter={playHover}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
