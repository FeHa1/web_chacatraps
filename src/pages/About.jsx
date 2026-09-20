import PageShell from '../components/PageShell.jsx'
import BackToMenu from '../components/BackToMenu.jsx'
import BioTimeline from '../components/BioTimeline.jsx'
import MemberCard from '../components/MemberCard.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'


const MEMBERS = [
  {
    name: 'Martin Pla Filippelli', // TODO: confirmar nombre completo
    stageName: 'PLA',
    //birthDate: '1994-06-18', // ahora no quieren la edad
    instagram: { label: '@plaxorelaxo', url: 'https://www.instagram.com/plaxorelaxo/' }, 
    skills: ['producer', 'performer', 'instrumentalist'], // TODO
    gifUrl: '/integrantes/pla.gif', 
  },
  {
    name: 'Joel Eis Gonzalez Farkas', // TODO: confirmar nombre completo
    stageName: 'MONXI0',
    //birthDate: '1993-09-01', // ahora no quieren la edad
    instagram: { label: '@monxi0', url: 'https://www.instagram.com/monxi0/' }, 
    skills: ['singer', 'performer', 'lyricist'], // TODO
    gifUrl: '/integrantes/monxi0.gif', 
  },
  {
    name: 'Juan Ignacio Sánchez', // TODO: confirmar nombre completo
    stageName: 'JUANI',
    //birthDate: '1991-09-27', // ahora no quieren la edad
    instagram: { label: '@juanetesanchez', url: 'https://www.instagram.com/juanetesanchez/' }, 
    skills: ['producer', 'windPlayer', 'arranger'], // TODO 
    gifUrl: '/integrantes/juani.gif', 
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
  const { t } = useLanguage()

  return (
    <PageShell>
      <BackToMenu />

      <header className="page-shell__header">
        <span className="eyebrow">// {t.menu.about}</span>
        <h1 className="section-title glow-magenta">{t.about.title}</h1>
      </header>

      <section>
        <h2
          className="section-title"
          style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}
        >
          {t.about.members}
        </h2>

        <div className="members-grid">
          {MEMBERS.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      <BioTimeline entries={t.about.bio} />

      <section>
        <h2
          className="section-title"
          style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}
        >
          {t.about.contact}
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