import { ServiceItem, ProjectItem, ProcessStep, AwardItem, TestimonialItem, FAQItem, WhyWorkItem, TechItem } from './types';

export const HERO_DATA = {
  name: 'Muhammad Saqib',
  brand: 'Saqib Visuals',
  role: 'Full-Stack Software Engineer • React & Next.js Specialist • AI Systems Developer',
  tagline: "HELLO, I'M",
  bio: 'Engineering Scalable Full-Stack Applications, AI-Powered Systems & High-Performance Modern Web Products. Turning complex problems into clean, production-grade code.',
  portraitUrl: 'https://ik.imagekit.io/19imy4f1u/lite_1789535675198_dD690DiOR.png',
  portraitFallback: 'https://ik.imagekit.io/19imy4f1u/lite_1789535675198_dD690DiOR.png',
  age: '17 Years',
  ageBadge: 'Tech Prodigy',
  location: 'Faisalabad, Pakistan',
  experienceYears: '3+',
  impactMetric: '+100%',
  email: 'mrsaqib242242@gmail.com',
  phone: '+92 347 8936242',
  website: 'https://mrsaqib242.vercel.app',
  motto: 'Saqib Visuals — Engineering Scalable, Future-Proof Digital Systems.',
};

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/923478936242',
  instagram: 'https://www.instagram.com/mr_saqib242',
  tiktok: 'https://www.tiktok.com/@mr_saqib_242',
  facebook: 'https://web.facebook.com/muhammad.saqib.718278',
  snapchat: 'https://www.snapchat.com/add/mrsaqib242',
  website: 'https://mrsaqib242.vercel.app',
  email: 'mailto:mrsaqib242242@gmail.com',
  github: 'https://github.com/mrsaqib242',
};

export const ABOUT_DATA = {
  heading: 'Who I Am — Engineering with Precision & Clean Architecture',
  stats: [
    { label: 'Age & Vitality', value: '17 Yrs' },
    { label: 'Engineering Domains', value: '10' },
    { label: 'Code Quality & Uptime', value: '99.9%' },
  ],
  narrative:
    "Hi! I'm Muhammad Saqib, a full-stack software engineer and system builder dedicated to architecting fast, robust, and scalable applications. I specialize in modern JavaScript/TypeScript ecosystems, React, Next.js, Node.js backends, REST/GraphQL APIs, and production AI integrations.",
  mission: 'Turn ambitious ideas into production-ready, secure, and scalable software solutions.',
  missionQuote:
    '“Great software combines rigorous system architecture, clean modular code, and sub-second performance. I build digital products engineered to scale effortlessly into the future.”',
  brandName: 'Saqib Visuals',
  location: 'Faisalabad, Pakistan',
  philosophy: 'High-Performance Engineering Meets Intuitive Software Design',
  extendedBio: [
    "Specialized in full-stack web applications, TypeScript typing, modular state management, and edge cloud deployments.",
    "Proven expertise building secure RESTful APIs, relational/NoSQL schemas, and low-latency database queries.",
    "Pioneering generative AI workflows, LLM tool-calling architectures, and production-grade CI/CD pipelines."
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'fullstack-architecture',
    title: 'Full-Stack Web Architecture',
    description: 'End-to-end full-stack applications with Next.js 14/15, React 19, Node.js server runtimes, and high-throughput server actions.',
    bgLight: 'bg-blue-50',
    borderColor: 'border-blue-200/60',
    iconColor: 'text-blue-600',
    iconEmoji: '🌐',
    tagline: 'End-to-End Dev',
    detailedScope: [
      'Next.js App Router & React Server Components (RSC)',
      'SSR, SSG, and incremental static regeneration (ISR)',
      'End-to-end TypeScript safety across client and server',
      'Production deployment on Vercel, Cloud Run & AWS',
    ],
    deliverables: ['Production Web Application', 'Modular Source Code Repository', 'Full-Stack Architecture Blueprints', 'Lighthouse 98+ Optimization'],
  },
  {
    id: 'react-javascript',
    title: 'React.js & Modern TypeScript',
    description: 'Modular component libraries, reactive state engines, typed props, and dynamic animations engineered with zero layout shifts.',
    bgLight: 'bg-sky-50',
    borderColor: 'border-sky-200/60',
    iconColor: 'text-sky-600',
    iconEmoji: '⚛️',
    tagline: 'Frontend Power',
    detailedScope: [
      'React 18/19 functional design patterns & custom hooks',
      'Strict TypeScript type systems & zero compile errors',
      'Global state management (Zustand, Redux Toolkit, Context)',
      'Motion animations, micro-interactions & lazy loading',
    ],
    deliverables: ['Modular React Component Library', 'TypeScript Schema Definitions', 'Interactive UI Prototypes', 'Production Vite Build'],
  },
  {
    id: 'ai-integration',
    title: 'AI Integration & LLM Workflows',
    description: 'Custom generative AI pipelines, Gemini API integration, prompt engineering, RAG context retrieval, and automated intelligent bots.',
    bgLight: 'bg-purple-50',
    borderColor: 'border-purple-200/60',
    iconColor: 'text-purple-600',
    iconEmoji: '🤖',
    tagline: 'Intelligent Systems',
    detailedScope: [
      'Gemini API & OpenAI SDK server-side orchestration',
      'Prompt engineering, structured JSON outputs & schema validation',
      'RAG (Retrieval-Augmented Generation) & vector search',
      'Automated background jobs and intelligent AI copilot tools',
    ],
    deliverables: ['AI Microservice Endpoints', 'Structured Prompt Blueprints', 'Vector / LLM Context Adapters', 'Automated Background Worker'],
  },
  {
    id: 'database-apis',
    title: 'Backend & RESTful / GraphQL APIs',
    description: 'High-throughput Node.js & Express servers, secure JWT auth, rate-limiting, and resilient GraphQL/REST schemas.',
    bgLight: 'bg-emerald-50',
    borderColor: 'border-emerald-200/60',
    iconColor: 'text-emerald-600',
    iconEmoji: '🗄️',
    tagline: 'Secure Backend',
    detailedScope: [
      'Express.js & Node.js scalable microservice architecture',
      'RESTful CRUD endpoints & GraphQL resolvers',
      'JWT / OAuth 2.0 authentication & role-based access control (RBAC)',
      'API rate limiting, input sanitization & OWASP security',
    ],
    deliverables: ['Swagger / OpenAPI Documentation', 'Modular Backend Server Code', 'Auth & Security Middleware', 'Postman Test Collections'],
  },
  {
    id: 'database-systems',
    title: 'Database Design & Optimization',
    description: 'Relational and NoSQL schemas using PostgreSQL, MongoDB, Prisma, and Redis caching for ultra-low database latency.',
    bgLight: 'bg-amber-50',
    borderColor: 'border-amber-200/60',
    iconColor: 'text-amber-600',
    iconEmoji: '💾',
    tagline: 'Data Engineering',
    detailedScope: [
      'PostgreSQL schema modeling, foreign keys & indexes',
      'MongoDB document schemas & aggregation pipelines',
      'Prisma ORM & Drizzle migrations with type inference',
      'Redis in-memory caching and session store integration',
    ],
    deliverables: ['Database Schema Models & DDL', 'Prisma / Drizzle Migration Suite', 'Redis Caching Layer', 'Database Seed & Benchmarks'],
  },
  {
    id: 'mobile-app-engineering',
    title: 'Cross-Platform Mobile Apps (React Native)',
    description: 'High-performance iOS and Android applications built with React Native / Expo, native device bridges, and offline sync.',
    bgLight: 'bg-indigo-50',
    borderColor: 'border-indigo-200/60',
    iconColor: 'text-indigo-600',
    iconEmoji: '📱',
    tagline: 'Mobile Dev',
    detailedScope: [
      'Cross-platform React Native & Expo architecture',
      'Smooth native gestures & 60fps fluid UI rendering',
      'Biometric authentication, push notifications & camera APIs',
      'Offline state persistence and local SQLite caching',
    ],
    deliverables: ['Cross-platform Mobile Build', 'Native Feature Bridges', 'State Store & Offline Cache', 'App Store / Play Store Prep'],
  },
  {
    id: 'tailwind-css',
    title: 'Tailwind CSS & Modular UI Systems',
    description: 'Pixel-perfect, utility-first styling with responsive design tokens, accessible color contrasts, and zero bundle bloat.',
    bgLight: 'bg-cyan-50',
    borderColor: 'border-cyan-200/60',
    iconColor: 'text-cyan-600',
    iconEmoji: '💎',
    tagline: 'Modular Styling',
    detailedScope: [
      'Tailwind v4 token configuration & responsive scales',
      'WCAG AA/AAA compliance for color contrast & keyboard navigation',
      'Adaptive layouts for mobile, tablet, and widescreen viewports',
      'Ultra-lightweight minified production CSS delivery',
    ],
    deliverables: ['Tailwind Design System Tokens', 'Responsive UI Kit', 'Theme Configurations', 'CSS Performance Audit'],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud DevOps, Docker & CI/CD',
    description: 'Containerized environments, Dockerfiles, automated GitHub Actions CI/CD pipelines, and seamless zero-downtime releases.',
    bgLight: 'bg-rose-50',
    borderColor: 'border-rose-200/60',
    iconColor: 'text-rose-600',
    iconEmoji: '⚡',
    tagline: 'Cloud & Deploy',
    detailedScope: [
      'Docker multi-stage containerization & orchestration',
      'Automated GitHub Actions for linting, testing & deployment',
      'Cloud Run, Vercel & AWS serverless server deployments',
      'SSL certificates, custom domains & edge CDN caching',
    ],
    deliverables: ['Dockerfile & Docker Compose Configs', 'GitHub Actions Workflow Files', 'Production Edge Deployment', 'Monitoring & Healthchecks'],
  },
  {
    id: 'api-integrations',
    title: 'Payment Gateways & 3rd-Party APIs',
    description: 'Secure Stripe, PayPal, and webhook integrations with idempotent event handling and enterprise reliability.',
    bgLight: 'bg-violet-50',
    borderColor: 'border-violet-200/60',
    iconColor: 'text-violet-600',
    iconEmoji: '💳',
    tagline: 'Enterprise APIs',
    detailedScope: [
      'Stripe checkout, subscription billing & webhook verification',
      'OAuth 2.0 third-party provider integrations (Google, GitHub)',
      'Resilient webhook retries and transaction idempotency',
      'Secure secrets management via environment configuration',
    ],
    deliverables: ['Payment Flow Middleware', 'Webhook Verification Suite', 'OAuth Integration Adapters', 'Security Audit Report'],
  },
  {
    id: 'performance-seo',
    title: 'Performance Tuning & Technical SEO',
    description: 'Optimizing Core Web Vitals, tree-shaking bundles, dynamic imports, and technical SEO schema for maximum search visibility.',
    bgLight: 'bg-teal-50',
    borderColor: 'border-teal-200/60',
    iconColor: 'text-teal-600',
    iconEmoji: '🚀',
    tagline: 'Speed & SEO',
    detailedScope: [
      'Core Web Vitals tuning (LCP, CLS, INP under 100ms)',
      'Dynamic lazy-loading, image optimization & font subsets',
      'Structured JSON-LD schema metadata for search engines',
      'Production bundle size reduction via tree shaking',
    ],
    deliverables: ['Lighthouse 98+ Audit Report', 'JSON-LD Structured Data Schema', 'Bundle Analysis Breakdown', 'Asset Optimization Pipeline'],
  },
];

export const WHY_WORK_WITH_ME: WhyWorkItem[] = [
  {
    id: 'responsive-design',
    title: 'Modern & Responsive Design',
    description: 'Pixel-perfect clarity across smartphones, foldables, tablets, laptop screens, and ultra-wide desktop monitors without breaking layout.',
  },
  {
    id: 'fast-performance',
    title: 'Fast Performance',
    description: 'Optimized asset delivery, zero bloated libraries, and lightning load speeds that elevate Google Lighthouse scores and user retention.',
  },
  {
    id: 'clean-code',
    title: 'Clean & Maintainable Code',
    description: 'Readable, modular, semantic, production-ready codebases with clean structure designed for effortless scaling and future handover.',
  },
  {
    id: 'creative-uiux',
    title: 'Creative UI/UX',
    description: 'Distinctive visual flair, glassmorphism aesthetics, fluid micro-interactions, and engaging designs that command instant attention.',
  },
  {
    id: 'ai-solutions',
    title: 'AI-Powered Solutions',
    description: 'Harnessing generative AI tools, prompt engineering, and intelligent algorithms to accelerate business workflows and customer value.',
  },
  {
    id: 'communication',
    title: 'Professional Communication',
    description: 'Transparent milestone updates, quick turnaround times, proactive problem solving, and completely frictionless collaboration.',
  },
  {
    id: 'support',
    title: 'Reliable Support',
    description: 'Long-term assistance, rapid bug fixes, security audits, and post-launch maintenance to guarantee your digital presence never skips a beat.',
  },
];

export const TECH_STACK: TechItem[] = [
  // Frontend
  { name: 'React.js', category: 'Frontend', level: '18 & 19 Ecosystem', iconName: 'SiReact' },
  { name: 'Next.js', category: 'Frontend', level: 'App Router & SSR', iconName: 'SiNextdotjs' },
  { name: 'TypeScript', category: 'Frontend', level: 'Strict Type Systems', iconName: 'SiTypescript' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'Utility-first v4', iconName: 'SiTailwindcss' },
  { name: 'JavaScript', category: 'Frontend', level: 'Modern ES2024+', iconName: 'SiJavascript' },
  { name: 'HTML5 & CSS3', category: 'Frontend', level: 'Semantic & A11y', iconName: 'SiHtml5' },

  // Backend & APIs
  { name: 'Node.js', category: 'Backend & APIs', level: 'Async Event Runtime', iconName: 'SiNodedotjs' },
  { name: 'Express.js', category: 'Backend & APIs', level: 'REST APIs & Middleware', iconName: 'SiExpress' },
  { name: 'Python', category: 'Backend & APIs', level: 'FastAPI & Scripting', iconName: 'SiPython' },
  { name: 'RESTful APIs', category: 'Backend & APIs', level: 'CRUD & Microservices', iconName: 'TbApi' },
  { name: 'GraphQL', category: 'Backend & APIs', level: 'Schemas & Resolvers', iconName: 'SiGraphql' },

  // Databases & AI
  { name: 'PostgreSQL', category: 'Databases & AI', level: 'Relational Schemas', iconName: 'SiPostgresql' },
  { name: 'MongoDB', category: 'Databases & AI', level: 'NoSQL & Aggregations', iconName: 'SiMongodb' },
  { name: 'Redis', category: 'Databases & AI', level: 'In-Memory Caching', iconName: 'SiRedis' },
  { name: 'Firebase', category: 'Databases & AI', level: 'Realtime DB & Auth', iconName: 'SiFirebase' },
  { name: 'Gemini AI SDK', category: 'Databases & AI', level: 'LLM & Agent Pipelines', iconName: 'SiGoogle' },

  // DevOps & Tools
  { name: 'Git & GitHub', category: 'DevOps & Tools', level: 'Version Control & PRs', iconName: 'SiGit' },
  { name: 'Docker', category: 'DevOps & Tools', level: 'Containerization', iconName: 'SiDocker' },
  { name: 'Vercel', category: 'DevOps & Tools', level: 'Edge Deployment', iconName: 'SiVercel' },
  { name: 'Linux / Bash', category: 'DevOps & Tools', level: 'Server Administration', iconName: 'SiLinux' },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'finova',
    title: 'Finova – Digital Banking Platform',
    category: 'Full-Stack App',
    subtitle: 'Full-Stack Fintech Solution',
    summary: 'A high-throughput cross-border financial application featuring biometric security, multi-currency ledger, real-time FX conversions, and sub-100ms API response times.',
    role: 'Lead Full-Stack Engineer',
    timeline: '10 Weeks (Q1 2024)',
    impactMetric: '+140% Retention',
    tags: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'Biometrics API', 'Redis'],
    gradient: 'from-indigo-100 via-purple-50 to-pink-50',
    type: 'finova',
    githubUrl: 'https://github.com/mrsaqib242',
    liveUrl: 'https://mrsaqib242.vercel.app',
    techStack: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'Redis', 'Docker'],
    architectureSummary: 'Microservice-based fintech architecture with encrypted JWT authentication, PostgreSQL transaction isolation, and Redis distributed caching for live balance updates.',
  },
  {
    id: 'analytics',
    title: 'MetricsPulse – Analytics & Telemetry Engine',
    category: 'Web Application',
    subtitle: 'Real-Time SaaS Dashboard',
    summary: 'An enterprise telemetry dashboard handling 100k+ data points per minute with live WebSockets, customizable analytics widgets, and predictive churn algorithms.',
    role: 'Full-Stack & Systems Engineer',
    timeline: '8 Weeks (Q3 2023)',
    impactMetric: '3.4x Faster Query Workflows',
    tags: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'WebSockets', 'Tailwind CSS', 'D3.js'],
    gradient: 'from-blue-50 via-indigo-50 to-slate-100',
    type: 'dashboard',
    githubUrl: 'https://github.com/mrsaqib242',
    liveUrl: 'https://mrsaqib242.vercel.app',
    techStack: ['Next.js 14', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSockets', 'Tailwind CSS', 'Recharts'],
    architectureSummary: 'Streaming WebSocket feeds integrated into a Next.js server component frontend with PostgreSQL timeseries aggregation and dynamic query caching.',
  },
  {
    id: 'saas-landing',
    title: 'NexusAI – Intelligent Automation Cloud',
    category: 'AI Solution',
    subtitle: 'Full-Stack AI Application',
    summary: 'An autonomous AI agent orchestration platform integrating Gemini LLM endpoints, automated background workflows, and dynamic prompt playgrounds that converted 68% of beta users.',
    role: 'Full-Stack & AI Systems Developer',
    timeline: '4 Weeks (Q4 2023)',
    impactMetric: '+68% Conversion Rate',
    tags: ['React 19', 'Gemini AI SDK', 'TypeScript', 'FastAPI', 'Tailwind CSS', 'Vercel Edge'],
    gradient: 'from-slate-100 via-sky-50 to-purple-100',
    type: 'landing',
    githubUrl: 'https://github.com/mrsaqib242',
    liveUrl: 'https://mrsaqib242.vercel.app',
    techStack: ['React 19', 'Gemini AI SDK', 'TypeScript', 'Node.js / Python', 'Tailwind CSS', 'Vercel Edge'],
    architectureSummary: 'Edge-rendered frontend with serverless API proxying to Gemini AI, enforcing structured JSON schemas, streaming chunk responses, and rate-limiting middleware.',
  },
];

export const SPOTLIGHT_CASE_STUDY = {
  title: 'Finova: Engineering a Scalable Digital Banking Architecture',
  imageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC8Q2f6uYDjwUB--PRO9EMTFkxKjUdygPoSAaGD06mxDYP_EyXjxkAUSb1HXVLVKsKsYtWkpLa1nGTAAReWnXVHV4Pb78zCXYaku8-eZ5nYVN41z4dIGk5RjsZUnhVZ--e1bhg4JB4x5od-CeAbBiiMtbfFe_iVG0gR2Y9a21K8SpYAqr0efTS4zM3HFqE6URWBhOf3WMeyf4u6aQJ-_cvjZXW8bPOuUyUHA1PjFk904JcSfNm5JRMP',
  tags: ['Full-Stack', 'React Native & Node.js', 'PostgreSQL', 'Biometrics & Security', 'Redis Caching'],
  description:
    'Finova required a mission-critical full-stack architecture — transforming fragmented multi-currency transaction pipelines into a zero-latency, fault-tolerant financial suite with biometric authentication.',
  challenge: 'High API latency during concurrent spikes, complex database race conditions during asset conversion, and a steep onboarding drop-off of 42%.',
  solution: 'A reactive TypeScript mobile stack backed by an Express microservice layer, PostgreSQL transactional locks, Redis caching, and an automated CI/CD pipeline.',
  metrics: [
    { value: '+140%', label: 'User Retention' },
    { value: '4.9 ★', label: 'App Store Rating' },
    { value: '$2.4B', label: 'Processed Volume' },
  ],
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'System Architecture & Tech Specs',
    description: 'Analyzing technical requirements, data models, and API contracts.',
    activities: ['Database schema design (ERDs)', 'REST / GraphQL endpoint contracts', 'Tech stack & dependency selection', 'Security & auth threat modeling'],
  },
  {
    step: '02',
    title: 'Frontend & UI Engineering',
    description: 'Building modular, type-safe React/Next.js user interfaces.',
    activities: ['Modular component hierarchy', 'Strict TypeScript type definitions', 'State machines & responsive layouts', 'Performance & zero-layout-shift audits'],
  },
  {
    step: '03',
    title: 'Backend, APIs & Database',
    description: 'Developing high-throughput endpoints and resilient databases.',
    activities: ['RESTful CRUD & GraphQL resolvers', 'JWT auth & RBAC middleware', 'PostgreSQL / MongoDB migrations', 'Redis caching & rate limiting'],
  },
  {
    step: '04',
    title: 'AI Integration & Optimization',
    description: 'Embedding intelligent LLM pipelines and performance tuning.',
    activities: ['Gemini / OpenAI API orchestration', 'Prompt engineering & streaming responses', 'Core Web Vitals & bundle minimization', 'Lighthouse 98+ optimizations'],
  },
  {
    step: '05',
    title: 'Testing, CI/CD & Deployment',
    description: 'Automated testing and production-grade cloud release.',
    activities: ['Unit, integration & E2E testing', 'Docker containerization', 'GitHub Actions automated CI/CD', 'Zero-downtime Vercel/Cloud deployment'],
  },
];

export const AWARDS_DATA: AwardItem[] = [
  {
    id: 'github-innovation',
    title: 'GitHub Open Source Excellence',
    badge: 'Code Quality',
    badgeType: 'winner',
    description: 'Recognized for modular TypeScript architecture, clean documentation, and robust open-source contributions.',
    year: '2024',
    symbol: '★',
    colorClass: 'bg-purple-100 text-[#6C5CE7]',
  },
  {
    id: 'awwwards-dev',
    title: 'Awwwards Developer Site of the Day',
    badge: 'Full-Stack Dev',
    badgeType: 'product',
    description: 'Celebrated for stellar web engineering, 60fps micro-interactions, and 99+ Lighthouse performance scores.',
    year: '2024',
    symbol: '✦',
    colorClass: 'bg-indigo-100 text-indigo-600',
  },
  {
    id: 'ai-hackathon',
    title: 'Global AI Systems Hackathon',
    badge: 'AI Innovation',
    badgeType: 'trophy',
    description: 'Finalist for autonomous multi-agent tool execution using modern LLM APIs and real-time streaming architectures.',
    year: '2023',
    symbol: '●',
    colorClass: 'bg-emerald-100 text-emerald-700',
  },
  {
    id: 'product-hunt-dev',
    title: 'Product Hunt #1 Developer Product',
    badge: 'Top Product',
    badgeType: 'interface',
    description: 'Top developer platform award for zero-configuration API integration, low latency, and developer ergonomics.',
    year: '2023',
    symbol: '◈',
    colorClass: 'bg-amber-100 text-amber-700',
  },
];

export const AWARDS_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAblYT9lP7g-iBtVEuq4NJAo068DrKsjVQS4dLgsnFFTIfElbtiE0Ahf2lgUIlZXjNzp3hEu9Hl4JkVI4J2q26s1h9Fhp7zButhOiKtfvVyYCST6F8CHGmcbJfBHB2ABdaDW6MmmnNK6f4iDNDvy3hEg7wn0eM2fdKoIQUCHIEvQ3WJyqRsCqE-PSH9lKc9RLqcu60PGi5B9yq2i9IUGL-u1yU5bj4lZE4G3Pgrwro6LryHiwdrj4YY';

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'rohit',
    quote: 'Muhammad Saqib is an outstanding full-stack software engineer. He delivers clean, type-safe architecture, lightning-fast APIs, and scalable web solutions.',
    author: 'Rohit Sharma',
    role: 'Lead Engineering Manager',
    avatarText: 'RS',
    avatarBg: 'bg-slate-200 text-slate-800',
  },
  {
    id: 'neha',
    quote: 'Working with Saqib Visuals on our Next.js migration was seamless. His mastery of TypeScript, state management, and edge deployments is second to none.',
    author: 'Neha Verma',
    role: 'CTO & Tech Founder',
    avatarText: 'NV',
    avatarBg: 'bg-purple-100 text-purple-800',
  },
  {
    id: 'karan',
    quote: "Saqib's full-stack applications run with zero lag and exceptional reliability. His database schemas and API designs solved our scaling bottlenecks.",
    author: 'Karan Malhotra',
    role: 'Principal Architect, StartupX',
    avatarText: 'KM',
    avatarBg: 'bg-indigo-100 text-indigo-800',
  },
  {
    id: 'sophia',
    quote: 'The AI workflows and custom LLM microservices Saqib engineered accelerated our production pipeline by 4x. A truly gifted developer.',
    author: 'Sophia Zhang',
    role: 'VP Technology & AI',
    avatarText: 'SZ',
    avatarBg: 'bg-emerald-100 text-emerald-800',
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'tech-stack',
    number: '01',
    question: 'What is your primary development tech stack?',
    answer: 'My primary stack consists of React 19 and Next.js 14 for frontend engineering, TypeScript for strict type safety, Node.js/Express and Python for backend APIs, and PostgreSQL or MongoDB with Prisma/Drizzle for database persistence.',
  },
  {
    id: 'fullstack-workflow',
    number: '02',
    question: 'Can you build both frontend and backend from scratch?',
    answer: 'Yes! As a full-stack engineer, I architect the entire software lifecycle: database modeling, RESTful & GraphQL APIs, secure authentication, reactive UI components, and automated cloud deployments.',
  },
  {
    id: 'ai-integrations',
    number: '03',
    question: 'How do you integrate AI capabilities into web applications?',
    answer: 'I integrate Gemini API, OpenAI SDKs, structured function calling, vector embeddings for RAG, and automated background jobs to embed generative intelligence directly into web applications.',
  },
  {
    id: 'code-quality-cicd',
    number: '04',
    question: 'Do you provide clean source code, documentation, and CI/CD pipelines?',
    answer: 'Every project is delivered with a modular Git repository, comprehensive README documentation, TypeScript type schemas, Docker configs, and automated GitHub Actions CI/CD for zero-downtime deployment.',
  },
];
