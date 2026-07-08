# Abhishek Singh — Portfolio

A bento-grid personal portfolio built with **React**, **Vite**, and **Framer Motion**.

## Tech Stack

- ⚛️ React 18
- ⚡ Vite 6
- 🎞️ Framer Motion (scroll reveals, staggered entrances, marquee, hover micro-interactions)
- 🎨 Vanilla CSS with custom properties (dark theme, responsive bento grid)

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Structure

```
src/
├── App.jsx              # page layout & bento sections
├── index.css            # design system + bento grid styles
├── data/resume.js       # all portfolio content (edit this to update content)
└── components/
    ├── Card.jsx         # animated bento card wrapper
    └── Marquee.jsx      # infinite tech-stack marquee
```

All content lives in `src/data/resume.js` — update it there to change the site.
