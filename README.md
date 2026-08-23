# Los Chacatraps — Sitio oficial

Landing interactiva estilo videojuego (estética neon/synthwave) hecha con React + Vite.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Build de producción

```bash
npm run build
npm run preview   # para probar el build localmente
```

## Deploy en Netlify

1. Conectar este repositorio en Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`

(Esto ya está configurado en `netlify.toml`, incluyendo el redirect necesario
para que las rutas de React Router — `/about`, `/discografia`, etc. — no den
404 al refrescar la página o entrar directamente por URL.)

## Estructura del proyecto

```
src/
  data/             ← Archivos de datos editables (shows, videoclips)
  pages/            ← Una página por ruta (Home, About, FormatoEnVivo, ...)
  components/       ← Piezas reutilizables (menú, transiciones, back button)
  hooks/            ← useBeepSound (efecto de sonido del menú)
  styles/global.css ← Todos los estilos del sitio (colores, fuentes, glow)
```

## Actualizar contenido (sin tocar código)

- **Shows en vivo**: editar `src/data/shows-data.js`. Instrucciones paso a
  paso están en el comentario de arriba de ese archivo.
- **Videoclips**: editar `src/data/videoclips-data.js`.
- **Discografía (Spotify)**: cambiar el link `SPOTIFY_EMBED_URL` en
  `src/pages/Discografia.jsx`.
- **Contacto / integrantes**: editar los arrays `CONTACT` y `MEMBERS` en
  `src/pages/About.jsx`.

## Notas

- `public/favicon.svg` y `public/og-image.svg` son placeholders — reemplazar
  por el logo/arte real de la banda cuando esté disponible. Para máxima
  compatibilidad al compartir el link (WhatsApp, Facebook, etc.), lo ideal es
  reemplazar `og-image.svg` por un `.png` o `.jpg` de 1200x630px y actualizar
  las referencias en `index.html`.
- El sonido de "beep" del menú se genera con Web Audio API (no requiere
  archivos de audio). Ver `src/hooks/useBeepSound.js`.
