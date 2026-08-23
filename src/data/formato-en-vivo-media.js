/**
 * ============================================================================
 * FORMATO EN VIVO — Fotos y video
 * ============================================================================
 * Fuente única de datos para la galería de /formato_en_vivo. Los archivos
 * reales (fotos y video) viven en src/assets/FormatoEnVivo/.
 *
 * CÓMO AGREGAR UNA FOTO NUEVA
 * ----------------------------------------------------------------------------
 * 1. Copiá el archivo de imagen dentro de src/assets/FormatoEnVivo/
 *    (cualquier nombre sirve, pero es más prolijo usar algo tipo photo-09.jpg).
 * 2. Agregá una línea de import acá abajo, junto a las demás.
 * 3. Agregá esa variable al array PHOTOS.
 * No hace falta tocar el componente de la página ni el CSS.
 *
 * CÓMO AGREGAR/CAMBIAR EL VIDEO
 * ----------------------------------------------------------------------------
 * Mismo mecanismo: poner el archivo en src/assets/FormatoEnVivo/, importarlo
 * acá abajo, y agregarlo al array VIDEOS.
 *
 * NOTA: estas fotos ya vienen redimensionadas/comprimidas para que la página
 * cargue rápido (máximo ~2000px de lado más largo). Si subís una foto nueva
 * muy pesada (varios MB, de cámara sin comprimir), lo ideal es reducirla
 * antes a un tamaño similar para no hacer el sitio lento.
 * ============================================================================
 */

import photo01 from '../assets/FormatoEnVivo/photo-01.jpg'
import photo02 from '../assets/FormatoEnVivo/photo-02.jpg'
import photo03 from '../assets/FormatoEnVivo/photo-03.jpg'
import photo04 from '../assets/FormatoEnVivo/photo-04.jpg'
import photo05 from '../assets/FormatoEnVivo/photo-05.jpg'
import photo06 from '../assets/FormatoEnVivo/photo-06.jpg'
import photo07 from '../assets/FormatoEnVivo/photo-07.jpg'
import photo08 from '../assets/FormatoEnVivo/photo-08.jpg'

import video01 from '../assets/FormatoEnVivo/video-01.mp4'

export const PHOTOS = [photo01, photo02, photo03, photo04, photo05, photo06, photo07, photo08]

export const VIDEOS = [video01]
