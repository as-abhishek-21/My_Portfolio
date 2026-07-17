import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Card({ children, className = '', delay = 0, hover = true, ...rest }) {
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(my, [0, 1], [3.5, -3.5]), { stiffness: 160, damping: 18 })
  const rotateY = useSpring(useTransform(mx, [0, 1], [-3.5, 3.5]), { stiffness: 160, damping: 18 })

  const handleMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    mx.set(x)
    my.set(y)
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  const handleMouseLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.div
      className={`card ${className}`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      custom={delay}
      whileHover={hover ? { y: -5, transition: { duration: 0.25 } } : undefined}
      style={hover ? { rotateX, rotateY, transformPerspective: 900 } : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      <div className="card-spotlight" aria-hidden="true" />
      {children}
    </motion.div>
  )
}
