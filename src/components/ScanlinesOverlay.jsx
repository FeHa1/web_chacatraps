// Overlay de "scanlines" + vignette/curvatura para simular un monitor CRT
// viejo. Puramente decorativo, no bloquea clicks (pointer-events: none).
export default function ScanlinesOverlay() {
  return <div className="scanlines-overlay" aria-hidden="true" />
}
