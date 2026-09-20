// Overlay de vignette (bordes oscuros) para simular un monitor CRT viejo. Las
// scanlines horizontales se quitaron. Puramente decorativo, no bloquea clicks
// (pointer-events: none).
export default function ScanlinesOverlay() {
  return <div className="scanlines-overlay" aria-hidden="true" />
}
