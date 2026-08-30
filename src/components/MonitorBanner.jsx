// Banner fijo de "vigilancia" que se muestra arriba de todo el sitio, en
// todas las rutas. Puramente decorativo, refuerza el tono hacker/paranoico.
export default function MonitorBanner() {
  return (
    <div className="monitor-banner" role="status">
      <span className="monitor-banner__dot" aria-hidden="true" />
      <span>THIS CONNECTION IS MONITORED FOR YOUR SAFETY</span>
    </div>
  )
}
