import { useCallback, useRef } from 'react'

/**
 * Genera efectos de sonido "synth beep" cortos con Web Audio API.
 * No requiere archivos de audio externos.
 *
 * Si en el futuro se consigue un sample de audio real (ej. beep.mp3),
 * se puede reemplazar este hook por un <audio> simple sin tocar los
 * componentes que lo usan (mismo playHover / playSelect).
 */
export default function useBeepSound() {
  const ctxRef = useRef(null)

  const getContext = useCallback(() => {
    if (!ctxRef.current) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext
      if (!AudioContextClass) return null
      ctxRef.current = new AudioContextClass()
    }
    // Los navegadores suspenden el audio hasta la primera interacción del usuario
    if (ctxRef.current.state === 'suspended') {
      ctxRef.current.resume()
    }
    return ctxRef.current
  }, [])

  const playTone = useCallback(
    ({ frequency = 880, duration = 0.08, type = 'square', gain = 0.05 }) => {
      const ctx = getContext()
      if (!ctx) return

      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()

      oscillator.type = type
      oscillator.frequency.setValueAtTime(frequency, ctx.currentTime)

      gainNode.gain.setValueAtTime(gain, ctx.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration)

      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)

      oscillator.start(ctx.currentTime)
      oscillator.stop(ctx.currentTime + duration)
    },
    [getContext],
  )

  // Beep agudo y corto para hover (sutil)
  const playHover = useCallback(() => {
    playTone({ frequency: 660, duration: 0.05, type: 'square', gain: 0.035 })
  }, [playTone])

  // Beep de dos notas para selección/click (confirmación)
  const playSelect = useCallback(() => {
    playTone({ frequency: 880, duration: 0.06, type: 'square', gain: 0.05 })
    setTimeout(() => playTone({ frequency: 1320, duration: 0.09, type: 'square', gain: 0.05 }), 60)
  }, [playTone])

  return { playHover, playSelect }
}
