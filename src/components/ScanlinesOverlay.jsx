// Overlay sutil de "scanlines" para reforzar la estética arcade cabinet.
// Puramente decorativo, no bloquea clicks (pointer-events: none).
export default function ScanlinesOverlay() {
  return <div className="scanlines-overlay" aria-hidden="true" />
}
