import { marqueeTech } from '../data/resume.js'

export default function Marquee() {
  const row = [...marqueeTech, ...marqueeTech]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((tech, i) => (
          <span className="marquee-item" key={i}>
            {tech} <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
