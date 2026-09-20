/**
 * ============================================================================
 * TRADUCCIONES (español / inglés)
 * ============================================================================
 * Todos los textos del sitio que cambian con el idioma viven acá. `es` y `en`
 * tienen que mantener la MISMA estructura: si se agrega un texto en uno, se
 * agrega en el otro. Se usan desde los componentes con `useLanguage()`:
 *
 *   const { t } = useLanguage()
 *   <h1>{t.discography.title}</h1>
 *
 * No se traducen a propósito los textos "de sistema" del estilo terminal
 * (banner de monitoreo, "> loading ...", boot log, "MAIN MENU"), que ya están
 * en inglés en ambas versiones, ni los nombres propios (temas, lugares).
 * ============================================================================
 */

const es = {
  menu: {
    about: 'ABOUT US',
    live: 'FORMATO EN VIVO',
    acoustic: 'ACUSTICOS',
    discography: 'DISCOGRAFIA',
    videoclips: 'VIDEOCLIPS',
  },

  common: {
    close: 'Cerrar',
  },

  home: {
    start: 'START',
    languageLabel: 'Idioma',
    menuLabel: 'Menú principal',
    videoUnavailable: 'video no disponible todavía',
  },

  about: {
    title: 'La banda',
    members: 'Integrantes',
    contact: 'Contacto',
    tapForMore: 'TOCÁ PARA VER MÁS ▸',
    moreAbout: (name) => `Ver más sobre ${name}`,
    age: (years) => `${years} años`,
    skills: {
      producer: 'productor',
      performer: 'performer',
      instrumentalist: 'instrumentista',
      singer: 'cantante',
      lyricist: 'letrista',
      windPlayer: 'vientista',
      arranger: 'arreglista',
    },
    prevChapter: 'Capítulo anterior',
    nextChapter: 'Capítulo siguiente',
    goTo: (year) => `Ir a ${year}`,
    bio: [
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
    ],
  },

  live: {
    title: 'Fotos y Videos',
    empty: 'Próximamente: fotos y videos de nuestros shows en vivo.',
    viewPhoto: (n) => `Ver foto ${n}`,
    prevPhoto: 'Foto anterior',
    nextPhoto: 'Foto siguiente',
  },

  acoustic: {
    title: 'Sesiones Acústicas',
    empty: 'Próximamente: sesiones acústicas de la banda.',
  },

  discography: {
    title: 'Escuchanos',
    intro: 'Todo nuestro catálogo, en vivo desde Spotify.',
    artistEmbedTitle: 'Los Chacatraps en Spotify',
    albumEmbedTitle: (n) => `Álbum ${n} de Los Chacatraps en Spotify`,
  },

  videoclips: {
    title: 'Videos',
    empty: 'Próximamente: videoclips de la banda.',
  },

  notFound: {
    code: 'ERROR 404 — FRECUENCIA NO ENCONTRADA',
    back: 'VOLVER AL MENU',
  },
}

const en = {
  menu: {
    about: 'ABOUT US',
    live: 'LIVE SHOW',
    acoustic: 'ACOUSTIC',
    discography: 'DISCOGRAPHY',
    videoclips: 'VIDEOCLIPS',
  },

  common: {
    close: 'Close',
  },

  home: {
    start: 'START',
    languageLabel: 'Language',
    menuLabel: 'Main menu',
    videoUnavailable: 'video not available yet',
  },

  about: {
    title: 'The band',
    members: 'Members',
    contact: 'Contact',
    tapForMore: 'TAP TO SEE MORE ▸',
    moreAbout: (name) => `See more about ${name}`,
    age: (years) => `${years} years old`,
    skills: {
      producer: 'producer',
      performer: 'performer',
      instrumentalist: 'instrumentalist',
      singer: 'singer',
      lyricist: 'lyricist',
      windPlayer: 'wind player',
      arranger: 'arranger',
    },
    prevChapter: 'Previous chapter',
    nextChapter: 'Next chapter',
    goTo: (year) => `Go to ${year}`,
    bio: [
      {
        year: '2021 · ORIGIN',
        text: '3D2 CHACATRAP is an Argentine music project born in 2021 that fuses traditional folk genres with contemporary urban languages such as trap and electronic music, building a bridge between roots and the avant-garde. The group is made up of Martín Pla (PLA), Joel Eis (Monxio) and Juan Sánchez (OWANI), musicians with academic training and a track record in the independent scene. From the very beginning it has developed an artistic identity that combines music production, stage performance and a strong audiovisual imprint.',
      },
      {
        year: '2021–2022',
        text: 'In 2021 it released its first single, "By3 By3 By3", establishing the crossover between zamba and trap as its aesthetic starting point. In 2022 it presented CMF and played its first live show at Club Cultural 911 (CABA), beginning a steady run through stages across the country.',
      },
      {
        year: '2023',
        text: 'During 2023 it drove the Ciclo Chacatrap, a monthly artistic programming space dedicated to projects that explore crossovers between folk and urban music, consolidating a network of artists and widening the reach of this aesthetic search.',
      },
      {
        year: '2024',
        text: 'In 2024 it strengthened its presence on key stages such as CAMPING, Club Lucille and La Paz Arriba, consolidating a multidisciplinary proposal that brings together live instruments, electronic sequences and a strong performative dimension.',
      },
      {
        year: '2025',
        text: 'At the start of 2025 it completed its first Patagonian tour, with shows in Neuquén, San Martín de los Andes and Bariloche, expanding its reach across the country. That same year it released the singles La Moto and Random, both with music videos, and played major venues such as La Tangente and El Morán (CABA), as well as standout spaces in La Plata like Ciudad de Gatos and Pura Vida.',
      },
      {
        year: '2026',
        text: 'In 2026 the project plays in Córdoba at Bela and Un Mundo Feliz and returns to Neuquén to take part in the Festinicho Festival. That same year it creates Jardín Encantado, a series of live audiovisual sessions that brings together artists from different scenes to create collaborations and new versions in an intimate format. The series expands the artistic universe of CHACATRAP, strengthens the exchange between musicians and consolidates the project\'s digital presence through high-quality audiovisual content.',
      },
      {
        year: 'TODAY',
        text: '3D2 CHACATRAP is currently finishing its first studio album, due for release in November 2026. At the same time, it is planning its entry into international circuits, consolidating a language of its own within contemporary Argentine popular music.',
      },
      {
        year: 'MANIFESTO',
        text: 'The project proposes a re-signification of folk music from a current, performative and urban perspective, weaving together tradition, technology and the independent scene.',
      },
    ],
  },

  live: {
    title: 'Photos and Videos',
    empty: 'Coming soon: photos and videos from our live shows.',
    viewPhoto: (n) => `View photo ${n}`,
    prevPhoto: 'Previous photo',
    nextPhoto: 'Next photo',
  },

  acoustic: {
    title: 'Acoustic Sessions',
    empty: 'Coming soon: acoustic sessions from the band.',
  },

  discography: {
    title: 'Listen to us',
    intro: 'Our whole catalog, live from Spotify.',
    artistEmbedTitle: 'Los Chacatraps on Spotify',
    albumEmbedTitle: (n) => `Los Chacatraps album ${n} on Spotify`,
  },

  videoclips: {
    title: 'Videos',
    empty: 'Coming soon: music videos from the band.',
  },

  notFound: {
    code: 'ERROR 404 — FREQUENCY NOT FOUND',
    back: 'BACK TO MENU',
  },
}

export const TRANSLATIONS = { es, en }
export const DEFAULT_LANGUAGE = 'es'
