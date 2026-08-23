/**
 * ============================================================================
 * SHOWS DATA — "Formato en Vivo"
 * ============================================================================
 * Este archivo es la ÚNICA fuente de datos para la galería de shows en vivo
 * (/formato_en_vivo). No hace falta tocar ningún componente para actualizar
 * el sitio: alcanza con agregar/editar/borrar objetos en el array SHOWS.
 *
 * CÓMO AGREGAR UN SHOW NUEVO
 * ----------------------------------------------------------------------------
 * 1. Copiá uno de los objetos de ejemplo de abajo.
 * 2. Pegalo dentro del array SHOWS (arriba de todo, para que aparezca primero).
 * 3. Completá los campos:
 *    - id:      un texto único, sin espacios (ej: "2026-03-15-teatro-x")
 *    - date:    fecha en formato "YYYY-MM-DD" (para poder ordenar)
 *    - title:   nombre del show o evento
 *    - venue:   lugar / sala / ciudad
 *    - photoUrl: link directo a una imagen (puede ser de Google Drive, ver
 *                nota abajo) o dejar null para mostrar un fondo neon genérico
 *    - videos:  lista de videos de Drive relacionados a ese show. Cada video
 *                es un objeto { label, url }. Puede ser una lista vacía [].
 *
 * NOTA SOBRE LINKS DE GOOGLE DRIVE
 * ----------------------------------------------------------------------------
 * Los links de "compartir" de Drive (del tipo
 * https://drive.google.com/file/d/XXXXXXXX/view?usp=sharing) NO se pueden
 * incrustar como <video> directamente. Para que el link funcione bien en
 * este sitio:
 *   - Dejalo como está: el sitio va a mostrar un botón "VER VIDEO" que abre
 *     ese link de Drive en una pestaña nueva (esto siempre funciona).
 *   - El campo "photoUrl" para fotos SÍ puede ser un link de imagen directo
 *     (por ejemplo subida a un hosting de imágenes, o el link público de
 *     descarga directa de Drive con el formato
 *     https://drive.google.com/uc?export=view&id=XXXXXXXX ).
 *
 * IMPORTANTE: mantené el array ordenado de más reciente a más antiguo.
 * ============================================================================
 */

export const SHOWS = [
  {
    id: 'placeholder-show-1',
    date: '2026-02-14',
    title: 'Noche Synthwave — Placeholder',
    venue: 'Sala Arcade, Buenos Aires',
    photoUrl: null,
    videos: [
      { label: 'Video del show (Drive)', url: 'https://drive.google.com/' },
    ],
  },
  {
    id: 'placeholder-show-2',
    date: '2025-11-08',
    title: 'Fest Retro Nights — Placeholder',
    venue: 'Club Neón, Rosario',
    photoUrl: null,
    videos: [],
  },
  {
    id: 'placeholder-show-3',
    date: '2025-09-20',
    title: 'Toque a beneficio — Placeholder',
    venue: 'Centro Cultural, Córdoba',
    photoUrl: null,
    videos: [
      { label: 'Full set (Drive)', url: 'https://drive.google.com/' },
      { label: 'Backstage (Drive)', url: 'https://drive.google.com/' },
    ],
  },
]

// Devuelve los shows ya ordenados por fecha descendente (más nuevo primero).
// Los componentes usan esta función en vez de leer SHOWS directamente, así
// no importa el orden en que se vayan agregando los objetos al array.
export function getSortedShows() {
  return [...SHOWS].sort((a, b) => new Date(b.date) - new Date(a.date))
}
