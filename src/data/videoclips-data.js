/**
 * ============================================================================
 * VIDEOCLIPS DATA
 * ============================================================================
 * Fuente de datos para la página /videoclips (videos de YouTube o Instagram
 * embebidos). Para agregar un video nuevo, copiá uno de los objetos de abajo
 * y completá los campos — no hace falta tocar el componente de la página.
 *
 * CÓMO CONSEGUIR LA URL DE EMBED
 * ----------------------------------------------------------------------------
 * YouTube:
 *   1. En el video, click en "Compartir" -> "Insertar" (Embed).
 *   2. Copiar la URL que está dentro de src="..." (tiene el formato
 *      https://www.youtube.com/embed/VIDEO_ID ).
 *
 * Instagram (Reel/Video):
 *   1. En el post, click en los tres puntos -> "Insertar" (Embed).
 *   2. Copiar la URL que está dentro de src="..." (tiene el formato
 *      https://www.instagram.com/reel/POST_ID/embed ).
 * ============================================================================
 */

export const VIDEOCLIPS = [
  {
    id: 'placeholder-clip-1',
    title: 'Nombre de la canción — Videoclip oficial',
    platform: 'youtube',
    // Placeholder: reemplazar por el embed real (ver instrucciones arriba).
    embedUrl: 'https://www.youtube.com/embed/M7lc1UVf-VE',
  },
  {
    id: 'placeholder-clip-2',
    title: 'Nombre de la canción — Lyric video',
    platform: 'youtube',
    // Placeholder: reemplazar por el embed real (ver instrucciones arriba).
    embedUrl: 'https://www.youtube.com/embed/M7lc1UVf-VE',
  },
]
