import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

function trackSpotlight(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export default function Card({ children, className = '', delay = 0, hover = true, ...rest }) {
  return (
    <motion.div
      className={`card ${className}`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      custom={delay}
      whileHover={hover ? { y: -5, transition: { duration: 0.25 } } : undefined}
      onMouseMove={trackSpotlight}
      {...rest}
    >
      <div className="card-spotlight" aria-hidden="true" />
      {children}
    </motion.div>
  )
}
