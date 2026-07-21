export const profile = {
  name: 'Abhishek Singh',
  role: 'Full Stack JavaScript Developer',
  location: 'Bengaluru, Karnataka, India',
  email: 'as.abhishek.singh.21.09@gmail.com',
  phone: '+91-9535502966',
  linkedin: 'https://www.linkedin.com/in/abhishek-singh',
  github: 'https://github.com/as-abhishek-21',
  summary:
    'Results-driven Full Stack JavaScript Developer with 2.5+ years of experience architecting scalable web applications and automation-driven workflows. Proficient in TypeScript, Node.js, React, and Next.js — delivering end-to-end solutions from database schema design and API development to front-end optimization and cloud deployment.',
  focus: 'Building reliable, token-efficient AI automation agents for enterprise customers.',
}

export const stats = [
  { value: '2.5+', label: 'Years of Experience' },
  { value: '150+', label: 'REST APIs Built' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '100%', label: 'On-time Deployment' },
]

export const skills = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3/SCSS', 'Python', 'Dart', 'Java'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'Nest.js', 'Next.js', 'REST APIs', 'Microservices', 'Prisma', 'Sequelize', 'WebSockets', 'Stripe', 'Razorpay', 'Swagger'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'Redux', 'Zustand', 'Tailwind CSS', 'MUI', 'Shadcn/ui', 'Chart.js', 'Expo', 'React native'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Firestore', 'IndexedDB'],
  },
  {
    category: 'AI & Tools',
    items: ['Claude AI (Anthropic)', 'n8n', 'Prompt Engineering', 'Token Optimization', 'LLM Integration', 'Copilot', 'Cursor', 'Git/GitHub', 'Firebase'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (S3, EC2)', 'Google Cloud', 'Docker', 'CI/CD', 'Vercel', 'Heroku', 'Railway', 'Jenkins'],
  },
]

export const experience = [
  {
    company: 'Einsteinforce Innovations Pvt Ltd',
    role: 'Consultant — Full Stack Developer',
    period: 'Apr 2025 — Apr 2026',
    highlights: [
      'Architected scalable TypeScript/Node.js microservices with 150+ RESTful APIs, cutting average API response time by 30%.',
      'Engineered robust role-based authentication & authorization, eliminating unauthorized access incidents platform-wide.',
      'Built an admin dashboard for video, PDF & image content pipelines, reducing content management time by 40%.',
      'Developed responsive React/Next.js interfaces with Tailwind CSS, achieving Lighthouse performance scores of 85+.',
      'Integrated Razorpay & Stripe payments and WebSocket-based real-time sync with sub-second latency.',
    ],
  },
  {
    company: 'Aekot Consulting and Technologies Pvt Ltd',
    role: 'Associate Consultant',
    period: 'Apr 2024 — Mar 2025',
    highlights: [
      'Delivered 4+ end-to-end projects with 100% on-time deployment and zero critical production failures.',
      'Improved overall application performance by 25% via architecture-level and async workflow optimizations.',
      'Mentored 2–3 junior developers through structured code reviews, reducing team bug count by 30%.',
      'Built a reusable component library & design system in React + Tailwind, cutting feature dev time by 40%.',
      'Deployed to Heroku, Vercel & AWS with CI/CD pipelines, halving deployment time.',
    ],
  },
]

export const projects = [
  {
    title: 'Event Agent — AI Lead Generation',
    tag: 'AI · Automation',
    description:
      'Autonomous agent that turns any event website into a lead list: Puppeteer scrapes the page, an LLM extracts exhibitor names, a search API enriches each company with website & LinkedIn, and live progress streams over Server-Sent Events into an auto-created Google Sheet.',
    tech: ['Node.js', 'Puppeteer', 'LLM', 'Google Sheets API', 'React'],
    featured: true,
  },
  {
    title: 'WhatsApp Order Bidding Microservice',
    tag: 'Microservices · Automation',
    description:
      'Event-driven order orchestration running dealer bidding over meta WhatsApp: Cloud Tasks drives 15-minute bid windows and 10-minute final-decision timers, Pub/Sub fans out events, and NestJS with Postgres tracks bids, admin counter-offers, and automatic failover to the next dealer.',
    tech: ['NestJS', 'Cloud Tasks', 'Pub/Sub', 'PostgreSQL', 'WhatsApp API'],
    featured: true,
  },
  {
    title: 'AI Parenting Mobile App',
    tag: 'AI · Mobile',
    description:
      'Claude AI (Anthropic) powered parenting advice tuned to child age and parent emotional state. AI nudge system with rate limiting, 50+ APIs, Prisma/PostgreSQL, JWT with token rotation, and a 20+ screen React Native app with offline storage.',
    tech: ['Claude AI', 'React Native', 'Prisma', 'PostgreSQL'],
    featured: true,
  },
  {
    title: 'E-Learning Platform',
    tag: 'Full Stack',
    description:
      '120+ RESTful APIs in Node/Express with 30% faster responses, role-based auth, admin content dashboard, Razorpay payments, AWS media storage and 99.9% uptime post-launch.',
    tech: ['Node.js', 'PostgreSQL', 'AWS', 'Razorpay'],
    featured: true,
  },
  {
    title: 'Browser-Based Design Editor',
    tag: 'Frontend',
    description:
      'Canvas editor with 10+ element types — shapes, rich text, images, QR codes — drag-and-drop, layering and formatting at a smooth 60fps, with 40% less re-render overhead.',
    tech: ['React', 'Canvas', 'GCP'],
    featured: false,
  },
  {
    title: 'Project Management & Task Tracker',
    tag: 'Full Stack',
    description:
      'Customizable Kanban board with drag-and-drop, sprint planning and backlog management on a flexible PostgreSQL schema — cutting sprint setup time by 30%.',
    tech: ['React', 'PostgreSQL', 'Tailwind'],
    featured: false,
  },
  {
    title: 'EV Charging Station Locator',
    tag: 'Mobile',
    description:
      'Cross-platform Flutter app locating nearby chargers in under 3s, real-time charging status with <5s refresh, and payments via Stripe, Google Pay & Apple Pay.',
    tech: ['Flutter', 'Firebase', 'Google Maps'],
    featured: false,
  },
  {
    title: 'Company Websites (4+)',
    tag: 'Frontend',
    description:
      'Responsive React sites with 30% faster page loads, Vite-powered builds, dark/light mode, code splitting and Lighthouse accessibility scores of 85+.',
    tech: ['React', 'Vite', 'A11y'],
    featured: false,
  },
]

export const education = {
  degree: 'B.E. Computer Science Engineering',
  school: 'HKBK College of Engineering',
  location: 'Bengaluru, Karnataka',
}

export const certifications = [
  'Salesforce Certified Agentforce Specialist',
  'JavaScript Ultimate Guide',
  'The Complete ReactJS Course — Basics to Advanced',
  'Frontend Developer (React)',
]

export const marqueeTech = [
  'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Prisma',
  'Tailwind CSS', 'Claude AI', 'n8n', 'AWS', 'Docker', 'Redux', 'MongoDB', 'WebSockets',
  'Vite', 'Framer Motion',
]
