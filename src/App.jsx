import { motion } from 'framer-motion'
import Card from './components/Card.jsx'
import Marquee from './components/Marquee.jsx'
import {
  profile,
  stats,
  skills,
  experience,
  projects,
  education,
  certifications,
} from './data/resume.js'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function Header() {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a className="logo" href="#top">
        AS<span className="accent">.</span>
      </a>
      <nav className="nav">
        <a href="#work">Work</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
      </nav>
      <a className="btn btn-primary" href={`mailto:${profile.email}`}>
        Get in touch
      </a>
    </motion.header>
  )
}

function Hero() {
  return (
    <Card className="cell-hero" hover={false}>
      <div className="hero-orb" />
      <motion.div variants={stagger} initial="hidden" animate="visible" className="hero-content">
        <motion.p variants={fadeUp} className="eyebrow">
          <span className="pulse-dot" /> Available for new opportunities
        </motion.p>
        <motion.h1 variants={fadeUp} className="hero-title">
          Hi, I&apos;m {profile.name.split(' ')[0]} —<br />
          <span className="gradient-text">{profile.role}</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="hero-summary">
          {profile.summary}
        </motion.p>
        <motion.div variants={fadeUp} className="hero-actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            Contact me
          </a>
          <a className="btn btn-ghost" href="#projects">
            View projects
          </a>
        </motion.div>
      </motion.div>
    </Card>
  )
}

function Stats() {
  return (
    <Card className="cell-stats" delay={0.1}>
      <div className="stats-grid">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat-value gradient-text">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}

function Focus() {
  return (
    <Card className="cell-focus" delay={0.15}>
      <h3 className="card-kicker">Currently focused on</h3>
      <p className="focus-text">{profile.focus}</p>
      <div className="chip-row">
        <span className="chip chip-accent">Claude AI</span>
        <span className="chip chip-accent">Automation</span>
        <span className="chip chip-accent">Agents</span>
      </div>
    </Card>
  )
}

function Contact() {
  return (
    <Card className="cell-contact" delay={0.2}>
      <h3 className="card-kicker">Contact</h3>
      <ul className="contact-list">
        <li>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        <li>
          <a href={`tel:${profile.phone.replace(/-/g, '')}`}>{profile.phone}</a>
        </li>
        <li>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </li>
        <li>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </li>
      </ul>
      <p className="muted">📍 {profile.location}</p>
    </Card>
  )
}

function Skills() {
  return (
    <Card className="cell-skills" delay={0.1} id="skills">
      <h3 className="card-kicker">Skills &amp; Technologies</h3>
      <div className="skills-groups">
        {skills.map((group) => (
          <div className="skill-group" key={group.category}>
            <h4>{group.category}</h4>
            <div className="chip-row">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

function Experience() {
  return (
    <Card className="cell-experience" delay={0.15} id="work">
      <h3 className="card-kicker">Work Experience</h3>
      <div className="timeline">
        {experience.map((job) => (
          <div className="timeline-item" key={job.company}>
            <div className="timeline-marker" />
            <div className="timeline-body">
              <div className="timeline-head">
                <h4>{job.role}</h4>
                <span className="timeline-period">{job.period}</span>
              </div>
              <p className="timeline-company">{job.company}</p>
              <ul className="timeline-highlights">
                {job.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Key Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <Card
            key={project.title}
            className={`project-card ${project.featured ? 'project-featured' : ''}`}
            delay={i * 0.06}
          >
            <span className="project-tag">{project.tag}</span>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="chip-row project-tech">
              {project.tech.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

function EducationCard() {
  return (
    <Card className="cell-education" delay={0.1}>
      <h3 className="card-kicker">Education</h3>
      <p className="edu-degree">{education.degree}</p>
      <p className="muted">
        {education.school}, {education.location}
      </p>
    </Card>
  )
}

function Certifications() {
  return (
    <Card className="cell-certs" delay={0.15}>
      <h3 className="card-kicker">Certifications</h3>
      <ul className="cert-list">
        {certifications.map((cert) => (
          <li key={cert}>
            <span className="cert-check">✓</span> {cert}
          </li>
        ))}
      </ul>
    </Card>
  )
}

function BigCTA() {
  return (
    <Card className="cell-cta" hover={false}>
      <div className="cta-orb" />
      <h2 className="cta-title">
        Let&apos;s build something <span className="gradient-text">great together</span>
      </h2>
      <p className="cta-sub">
        Open to full-time roles and freelance projects — especially AI-powered products.
      </p>
      <div className="hero-actions">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
          Connect on LinkedIn ↗
        </a>
      </div>
    </Card>
  )
}

export default function App() {
  return (
    <div className="page" id="top">
      <Header />
      <main className="container">
        <div className="bento">
          <Hero />
          <Focus />
          <Contact />
          <Stats />
          <Skills />
          <Experience />
        </div>
        <Marquee />
        <Projects />
        <div className="bento bento-bottom">
          <EducationCard />
          <Certifications />
          <BigCTA />
        </div>
      </main>
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name} · Built with React, Vite &amp; Framer Motion
        </p>
      </footer>
    </div>
  )
}
