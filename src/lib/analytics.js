import { track as vercelTrack } from '@vercel/analytics'

const GA_ID = import.meta.env.VITE_GA_ID

// Load the Google Analytics 4 (gtag.js) script once, if a Measurement ID is set.
export function initGA() {
  if (!GA_ID || typeof window === 'undefined' || window.__gaInit) return
  window.__gaInit = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', GA_ID)
}

// Unified event tracker: sends to Vercel (free page views / Pro events)
// and to Google Analytics 4 (free custom events).
export function track(name, props) {
  try {
    vercelTrack(name, props)
  } catch {
    // Vercel analytics not ready — ignore.
  }
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, props || {})
  }
}
