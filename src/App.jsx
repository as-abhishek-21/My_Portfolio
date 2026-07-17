import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, MapPin, Sparkles, ArrowUpRight, Send } from 'lucide-react'
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
      <a className="logo" href="#top" aria-label="Abhishek Singh — home">
        <img src="/logo.svg" alt="AS logo" />
      </a>
      <nav className="nav">
        <a href="#work">Work</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
      </nav>
      <a className="btn btn-primary" href={`mailto:${profile.email}`}>
        <Send size={15} aria-hidden="true" /> Get in touch
      </a>
    </motion.header>
  )
}

function Squiggle() {
  return (
    <svg className="squiggle" viewBox="0 0 90 22" fill="none" aria-hidden="true">
      <motion.path
        d="M3 14 C 20 4, 34 20, 50 10 S 76 4, 87 12 M 60 17 C 68 13, 76 15, 82 18"
        stroke="var(--accent-2)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.1, delay: 1.2, ease: 'easeOut' }}
      />
    </svg>
  )
}

const roleLines = ['FULL', 'STACK', 'DEVE-', 'LOPER']

function Hero() {
  return (
    <section className="hero-editorial">
      <motion.div variants={stagger} initial="hidden" animate="visible" className="hero-left">
        <motion.p variants={fadeUp} className="hero-eyebrow">
          <span className="pulse-dot" /> Hi, I&apos;m
        </motion.p>
        <motion.h1 variants={fadeUp} className="hero-name">
          {profile.name.split(' ')[0]}
        </motion.h1>
        <motion.p variants={fadeUp} className="hero-tag">
          I care about efficiency and precision.
        </motion.p>
        <motion.div variants={fadeUp} className="hero-lines">
          <p>
            From API architecture to pixel-perfect UI
            <Squiggle />
          </p>
          <p>Crafting scalable, AI-powered web apps with TypeScript, React &amp; Node.js</p>
        </motion.div>
        <motion.div variants={fadeUp} className="hero-actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            <Mail size={16} aria-hidden="true" /> Contact me
          </a>
          <a className="btn btn-ghost" href="#projects">
            View projects <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </motion.div>
      </motion.div>

      <div className="hero-right">
        <div className="hero-orb" />
        <motion.img
          src="/profile.jpg"
          alt="Portrait of Abhishek Singh"
          className="hero-photo"
          onError={(e) => e.currentTarget.closest('.hero-right').classList.add('photo-missing')}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="hero-role" aria-label={profile.role}>
          {roleLines.map((line, i) => (
            <motion.span
              key={line}
              className={i === roleLines.length - 1 ? 'gradient-text' : ''}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {line}
            </motion.span>
          ))}
        </div>
        <svg className="hero-arc" viewBox="0 0 220 420" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--accent-1)" />
              <stop offset="100%" stopColor="var(--accent-2)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M20 400 C 150 340, 200 220, 190 120 C 184 70, 160 30, 120 10"
            stroke="url(#arcGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, delay: 0.8, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    </section>
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
      <div className="focus-icon" aria-hidden="true">
        <Sparkles size={20} />
      </div>
      <h3 className="card-kicker">Currently focused on</h3>
      <p className="focus-text">{profile.focus}</p>
      <div className="chip-row">
        <span className="chip chip-accent">Claude AI</span>
        <span className="chip chip-accent">Automation</span>
        <span className="chip chip-accent">Agents</span>
        <span className="chip chip-accent">n8n</span>
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
          <Mail size={16} className="contact-icon" aria-hidden="true" />
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        <li>
          <Phone size={16} className="contact-icon" aria-hidden="true" />
          <a href={`tel:${profile.phone.replace(/-/g, '')}`}>{profile.phone}</a>
        </li>
        <li>
          <Linkedin size={16} className="contact-icon" aria-hidden="true" />
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <Github size={16} className="contact-icon" aria-hidden="true" />
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
      </ul>
      <p className="muted contact-location">
        <MapPin size={14} className="contact-icon" aria-hidden="true" /> {profile.location}
      </p>
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
            {project.link ? (
              <a
                className="project-title project-title-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                {project.title} <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ) : (
              <h3 className="project-title">{project.title}</h3>
            )}
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
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <Card className="cell-cta" hover={false}>
      <div className="cta-orb" />
      <div className="cta-grid">
        <form className="cta-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="cta-name">Name</label>
            <input
              id="cta-name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={update('name')}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="cta-email">Email</label>
            <input
              id="cta-email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={update('email')}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="cta-message">Message</label>
            <textarea
              id="cta-message"
              rows={5}
              placeholder="Tell me about your project…"
              value={form.message}
              onChange={update('message')}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary cta-submit">
            <Send size={16} aria-hidden="true" /> Send message
          </button>
        </form>

        <div className="cta-info">
          <h2 className="cta-title">
            Let&apos;s build something <span className="gradient-text">great together</span>
          </h2>
          <p className="cta-sub">
            Open to full-time roles and freelance projects — especially AI-powered products.
            Drop a message and I&apos;ll get back to you within a day.
          </p>
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={16} aria-hidden="true" /> Connect on LinkedIn
          </a>
        </div>
      </div>
    </Card>
  )
}

export default function App() {
  return (
    <div className="page" id="top">
      <Header />
      <main className="container">
        <Hero />
        <div className="bento">
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
