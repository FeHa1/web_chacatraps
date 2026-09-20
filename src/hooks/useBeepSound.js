import { useCallback } from 'react'

// Sonidos de la interfaz (archivos en public/sound/). Para cambiar un sonido,
// reemplazar el archivo o ajustar la ruta/volumen acá.
const HOVER_SRC = '/sound/sonidoBombo.mp3'
const SELECT_SRC = '/sound/rimshot.mp3'
const HOVER_VOLUME = 0.6
const SELECT_VOLUME = 1

// Los <audio> viven a nivel de módulo (no del componente) para que el sonido de
// selección no se corte cuando la navegación desmonta la página, y para que
// todos los componentes compartan el mismo archivo ya cargado.
const audioCache = {}

function getAudio(src, volume) {
  if (!audioCache[src]) {
    const audio = new Audio(src)
    audio.preload = 'auto'
    audio.volume = volume
    audioCache[src] = audio
  }
  return audioCache[src]
}

function play(src, volume) {
  const audio = getAudio(src, volume)
  audio.currentTime = 0
  // Los navegadores rechazan play() antes de la primera interacción del
  // usuario; en ese caso simplemente no suena.
  audio.play().catch(() => {})
}

/**
 * Efectos de sonido de la interfaz.
 * - playHover: al desplazarse por las opciones (sonidoBombo.mp3)
 * - playSelect: al seleccionar/clickear algo (rimshot.mp3)
 */
export default function useBeepSound() {
  const playHover = useCallback(() => play(HOVER_SRC, HOVER_VOLUME), [])
  const playSelect = useCallback(() => play(SELECT_SRC, SELECT_VOLUME), [])

  return { playHover, playSelect }
}
