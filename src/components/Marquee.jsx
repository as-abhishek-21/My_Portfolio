import { motion } from 'framer-motion'
import { marqueeTech } from '../data/resume.js'

export default function Marquee() {
  const row = [...marqueeTech, ...marqueeTech]
  return (
    <div className="marquee" aria-hidden="true">
      <motion.div
        className="marquee-track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
      >
        {row.map((tech, i) => (
          <span className="marquee-item" key={i}>
            {tech} <span className="marquee-dot">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
