/**
 * ============================================================================
 * ACÚSTICOS — Videos
 * ============================================================================
 * Fuente única de datos para la galería de /acusticos. Los archivos reales
 * (videos) viven en src/assets/Acusticos/.
 *
 * CÓMO AGREGAR / CAMBIAR UN VIDEO
 * ----------------------------------------------------------------------------
 * 1. Copiá el archivo de video dentro de src/assets/Acusticos/
 *    (algo tipo acustico-05.mp4 para mantener el orden).
 * 2. Agregá una línea de import acá abajo, junto a las demás.
 * 3. Agregá esa variable al array VIDEOS.
 * No hace falta tocar el componente de la página ni el CSS.
 *
 * NOTA: los videos sin comprimir pesan mucho y hacen lenta la carga del
 * sitio. Lo ideal es exportarlos a un tamaño/bitrate razonable (1080p,
 * ~5-8 Mbps) antes de subirlos.
 * ============================================================================
 */

import acustico01 from '../assets/Acusticos/acustico-01.mp4'
import acustico02 from '../assets/Acusticos/acustico-02.mp4'
import acustico03 from '../assets/Acusticos/acustico-03.mp4'
import acustico04 from '../assets/Acusticos/acustico-04.mp4'

export const VIDEOS = [acustico01, acustico02, acustico03, acustico04]
