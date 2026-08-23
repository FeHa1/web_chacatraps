import PageShell from '../components/PageShell.jsx'
import BackToMenu from '../components/BackToMenu.jsx'

// Datos de contacto placeholder — reemplazar por los reales de la banda.
const CONTACT = {
  instagram: { label: '@loschacatraps', url: 'https://instagram.com/' },
  whatsapp: { label: '+54 9 11 0000-0000', url: 'https://wa.me/5491100000000' },
  email: { label: 'contacto@loschacatraps.com', url: 'mailto:contacto@loschacatraps.com' },
}

// Integrantes placeholder — reemplazar nombre/rol/inicial por los reales.
const MEMBERS = [
  { name: 'Nombre Apellido', role: 'Voz / Guitarra', initial: 'V' },
  { name: 'Nombre Apellido', role: 'Bajo', initial: 'B' },
  { name: 'Nombre Apellido', role: 'Batería', initial: 'D' },
  { name: 'Nombre Apellido', role: 'Sintetizadores', initial: 'S' },
]

export default function About() {
  return (
    <PageShell>
      <BackToMenu />

      <header className="page-shell__header">
        <span className="eyebrow">// ABOUT US</span>
        <h1 className="section-title glow-magenta">La banda</h1>
      </header>

      <div className="prose">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Los Chacatraps nacieron
          de la fusión entre sintetizadores analógicos y guitarras distorsionadas, buscando
          un sonido que combine la nostalgia de los 80s con una energía completamente actual.
          Este es un texto de ejemplo (placeholder) — reemplazar por la historia real de la banda.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Desde sus primeros ensayos hasta los escenarios más
          under de la escena local, la banda fue construyendo una identidad propia dentro
          del synthwave y el rock electrónico.
        </p>
      </div>

      <section>
        <h2 className="section-title" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
          Integrantes
        </h2>
        <div className="members-grid">
          {MEMBERS.map((member) => (
            <div className="card member-card" key={member.name + member.role}>
              <div className="member-avatar">{member.initial}</div>
              <div className="member-name">{member.name}</div>
              <div className="member-role">{member.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
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
          <a className="contact-pill" href={CONTACT.whatsapp.url} target="_blank" rel="noreferrer">
            WhatsApp — {CONTACT.whatsapp.label}
          </a>
          <a className="contact-pill" href={CONTACT.email.url}>
            Mail — {CONTACT.email.label}
          </a>
        </div>
      </section>
    </PageShell>
  )
}
