import PageShell from '../components/PageShell.jsx'
import BackToMenu from '../components/BackToMenu.jsx'
import BioTimeline from '../components/BioTimeline.jsx'
import MemberCard from '../components/MemberCard.jsx'

/**
 * Integrantes — se muestran como cartas que se dan vuelta al tocarlas
 * (frente: GIF + nombre / dorso: nombre completo, edad, habilidades e
 * Instagram). Para agregar el GIF de cada uno:
 *   1. Poné el archivo .gif en la carpeta public/integrantes/
 *      (crear la carpeta si todavía no existe).
 *   2. Completá "gifUrl" acá abajo con "/integrantes/nombre-del-archivo.gif".
 * Mientras no haya GIF, la carta muestra un círculo con la inicial.
 *
 * La edad se calcula sola a partir de "birthDate" (formato YYYY-MM-DD), así
 * que una vez que la cargues correctamente nunca más hay que tocarla.
 */
const MEMBERS = [
  {
    name: 'Martin Pla Filippelli', // TODO: confirmar nombre completo
    stageName: 'PLA',
    birthDate: '1994-06-18', // TODO: reemplazar por la fecha de nacimiento real (YYYY-MM-DD)
    instagram: { label: '@plaxorelaxo', url: 'https://www.instagram.com/plaxorelaxo/' }, // TODO
    skills: ['Habilidad 1', 'Habilidad 2', 'Habilidad 3'], // TODO
    gifUrl: '/integrantes/pla.gif', // TODO: '/integrantes/pla.gif' una vez que subas el archivo
  },
  {
    name: 'Joel Eis Gonzalez Farkas', // TODO: confirmar nombre completo
    stageName: 'MONXI0',
    birthDate: '1993-09-01', // TODO: reemplazar por la fecha de nacimiento real (YYYY-MM-DD)
    instagram: { label: '@monxi0', url: 'https://www.instagram.com/monxi0/' }, // TODO
    skills: ['Habilidad 1', 'Habilidad 2', 'Habilidad 3'], // TODO
    gifUrl: '/integrantes/monxi0.gif', // TODO: '/integrantes/monxio.gif' una vez que subas el archivo
  },
  {
    name: 'Juan Ignacio Sánchez', // TODO: confirmar nombre completo
    stageName: 'JUANI',
    birthDate: '1991-09-27', // TODO: reemplazar por la fecha de nacimiento real (YYYY-MM-DD)
    instagram: { label: '@juanetesanchez', url: 'https://www.instagram.com/juanetesanchez/' }, // TODO
    skills: ['Habilidad 1', 'Habilidad 2', 'Habilidad 3'], // TODO
    gifUrl: '/integrantes/juani.gif', // TODO: '/integrantes/owani.gif' una vez que subas el archivo
  },
]

const BIO = [
  {
    year: '2021 · ORIGEN',
    text: '3D2 CHACATRAP es un proyecto musical argentino nacido en 2021 que fusiona géneros folclóricos tradicionales con lenguajes urbanos contemporáneos como el trap y la electrónica, construyendo un puente entre raíz y vanguardia. El grupo está integrado por Martín Pla (PLA), Joel Eis (Monxio) y Juan Sánchez (OWANI), músicos con formación académica y trayectoria en la escena independiente. Desde sus inicios desarrolla una identidad artística que combina producción musical, performance escénica y una marcada impronta audiovisual.',
  },
  {
    year: '2021–2022',
    text: 'En 2021 lanza su primer single, "By3 By3 By3", estableciendo el cruce entre zamba y trap como punto de partida estético. En 2022 presenta CMF y realiza su primer show en vivo en el Club Cultural 911 (CABA), iniciando un recorrido sostenido por escenarios de todo el país.',
  },
  {
    year: '2023',
    text: 'Durante 2023 impulsa el Ciclo Chacatrap, un espacio mensual de programación artística dedicado a proyectos que exploran cruces entre folclore y música urbana, consolidando una red de artistas y ampliando el alcance de esta búsqueda estética.',
  },
  {
    year: '2024',
    text: 'En 2024 fortalece su presencia en escenarios estratégicos como CAMPING, Club Lucille y La Paz Arriba, consolidando una propuesta multidisciplinaria que integra instrumentos en vivo, secuencias electrónicas y una fuerte dimensión performática.',
  },
  {
    year: '2025',
    text: 'A comienzos de 2025 realiza su primera gira patagónica con presentaciones en Neuquén, San Martín de los Andes y Bariloche, ampliando su circulación federal. Ese mismo año estrena los singles La Moto y Random, ambos acompañados de videoclips, y se presenta en salas relevantes como La Tangente y El Morán (CABA), además de espacios destacados de La Plata como Ciudad de Gatos y Pura Vida.',
  },
  {
    year: '2026',
    text: 'En 2026 el proyecto se presenta en Córdoba en los espacios Bela y Un Mundo Feliz y regresa a Neuquén para participar del Festival Festinicho. Ese mismo año crea Jardín Encantado, una serie de sesiones audiovisuales en vivo que convoca a artistas de distintas escenas para generar colaboraciones y nuevas versiones en un formato íntimo. El ciclo amplía el universo artístico de CHACATRAP, fortalece el intercambio entre músicos y consolida la presencia digital del proyecto mediante contenidos audiovisuales de alta calidad.',
  },
  {
    year: 'HOY',
    text: 'Actualmente, 3D2 CHACATRAP se encuentra finalizando su primer disco de estudio, con lanzamiento previsto para noviembre de 2026. En paralelo, proyecta su inserción en circuitos internacionales, consolidando un lenguaje propio dentro de la música popular contemporánea argentina.',
  },
  {
    year: 'MANIFIESTO',
    text: 'El proyecto propone una resignificación del folclore desde una perspectiva actual, performática y urbana, articulando tradición, tecnología y escena independiente.',
  },
]

// Datos de contacto placeholder — reemplazar por los reales de la banda.
const CONTACT = {
  instagram: { label: '@3d2.chacatrap', url: 'https://www.instagram.com/3d2.chacatrap/' },
  whatsapp: { label: '+54 9 11 3244-4769', url: 'https://wa.me/5491132444769' },
  email: { label: 'chacatrap@gmail.com', url: 'mailto:chacatrap@gmail.com' }, 
  tiktok: { label: '@3d2.chacatrap', url: 'https://www.tiktok.com/@3d2.chacatrap' }, 
}

export default function About() {
  return (
    <PageShell>
      <BackToMenu />

      <header className="page-shell__header">
        <span className="eyebrow">// ABOUT US</span>
        <h1 className="section-title glow-magenta">La banda</h1>
      </header>

      <section>
        <h2
          className="section-title"
          style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}
        >
          Integrantes
        </h2>

        <div className="members-grid">
          {MEMBERS.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      <BioTimeline entries={BIO} />

      <section>
        <h2
          className="section-title"
          style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}
        >
          Contacto
        </h2>

        <div className="contact-list">
          <a
            className="contact-pill"
            href={CONTACT.instagram.url}
            target="_blank"
            rel="noreferrer"
          >
            Instagram — {CONTACT.instagram.label}
          </a>

          <a
            className="contact-pill"
            href={CONTACT.whatsapp.url}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp — {CONTACT.whatsapp.label}
          </a>

          <a className="contact-pill" href={CONTACT.email.url}>
            Mail — {CONTACT.email.label}
          </a>

          <a
            className="contact-pill"
            href={CONTACT.tiktok.url}
            target="_blank"
            rel="noreferrer"
          >
            TikTok — {CONTACT.tiktok.label}
          </a>
        </div>
      </section>
    </PageShell>
  )
}