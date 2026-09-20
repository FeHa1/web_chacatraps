import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { DEFAULT_LANGUAGE, TRANSLATIONS } from './translations.js'

const STORAGE_KEY = 'chacatrap-lang'

const LanguageContext = createContext(null)

// El idioma elegido se recuerda en el navegador. Si el storage no está
// disponible (modo privado, bloqueado), se usa el idioma por defecto.
function readStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored in TRANSLATIONS ? stored : DEFAULT_LANGUAGE
  } catch {
    return DEFAULT_LANGUAGE
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLanguage)

  const setLang = useCallback((next) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // sin storage: el idioma solo dura mientras la página está abierta
    }
  }, [])

  // Mantiene <html lang="..."> alineado con el idioma visible
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: TRANSLATIONS[lang] }), [lang, setLang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage debe usarse dentro de <LanguageProvider>')
  return context
}
