export const personalInfo = {
  name: "Abinash",
  title: "Frontend Web Developer & UI Engineer",
  roles: [
    "Frontend Architect",
    "React & Next.js Specialist",
    "UI/UX & Motion Crafter",
    "Design System Engineer",
    "Performance Optimizer"
  ],
  tagline: "Bridging the gap between ambitious design and production-grade engineering.",
  bio: "Passionate Frontend Developer with 5+ years of experience building accessible, lightning-fast, and responsive web applications. I specialize in modern JavaScript/TypeScript ecosystems, micro-interactions, fluid animation systems, and scalable UI architectures.",
  location: "India (Open to Global Remote / Relocation)",
  email: "abinash.dev.official@gmail.com",
  github: "https://github.com/abinash",
  linkedin: "https://linkedin.com/in/abinash-frontend",
  twitter: "https://x.com/abinash_dev",
  status: "Available for High-Impact Roles & Consulting",
  availabilityBadge: "Open to Full-Time / Contracts",
  yearsExperience: "5+",
  projectsCompleted: "40+",
  happyClients: "25+",
  averageLighthouse: "99"
};

export const statsData = [
  { label: "Years of Experience", value: "5+", icon: "Briefcase", detail: "Specialized in Frontend & Web Apps" },
  { label: "Projects Delivered", value: "40+", icon: "Layers", detail: "SaaS, Dashboards & Interactive UIs" },
  { label: "Lighthouse Score Avg", value: "99", icon: "Zap", detail: "Optimized Core Web Vitals (CWV)" },
  { label: "Client Satisfaction", value: "100%", icon: "HeartHandshake", detail: "On-time delivery & clean code" },
];

export const skillCategories = [
  {
    category: "Core Frontend",
    description: "Languages, core runtimes, and component architectures",
    icon: "Code2",
    skills: [
      { name: "React 18 / 19", level: 95, icon: "Atom", experience: "5 yrs", color: "from-cyan-500 to-blue-500" },
      { name: "Next.js (App Router)", level: 92, icon: "Globe", experience: "4 yrs", color: "from-slate-200 to-slate-400" },
      { name: "TypeScript", level: 90, icon: "FileCode2", experience: "4 yrs", color: "from-blue-400 to-indigo-500" },
      { name: "JavaScript (ESNext)", level: 98, icon: "Terminal", experience: "6 yrs", color: "from-amber-400 to-yellow-500" },
      { name: "Modern HTML5 & Semantic Web", level: 98, icon: "Flame", experience: "6 yrs", color: "from-orange-400 to-red-500" },
      { name: "CSS3 / Modern CSS Layouts", level: 96, icon: "Palette", experience: "6 yrs", color: "from-sky-400 to-blue-600" }
    ]
  },
  {
    category: "Styling, Motion & Design Systems",
    description: "Creating accessible, tokenized, and delightful visual interfaces",
    icon: "Sparkles",
    skills: [
      { name: "Tailwind CSS v3 / v4", level: 96, icon: "Wind", experience: "4 yrs", color: "from-cyan-400 to-teal-500" },
      { name: "Framer Motion / CSS Animations", level: 88, icon: "Move3d", experience: "3 yrs", color: "from-purple-400 to-pink-500" },
      { name: "Shadcn UI & Radix Primitives", level: 94, icon: "Component", experience: "3 yrs", color: "from-zinc-300 to-zinc-500" },
      { name: "Responsive & Adaptive Layouts", level: 98, icon: "MonitorSmartphone", experience: "5 yrs", color: "from-emerald-400 to-teal-600" },
      { name: "WCAG A11y (Accessibility)", level: 90, icon: "Eye", experience: "4 yrs", color: "from-green-400 to-emerald-500" },
      { name: "Glassmorphism & Neon Mesh", level: 95, icon: "Layers", experience: "4 yrs", color: "from-fuchsia-400 to-violet-600" }
    ]
  },
  {
    category: "State Management & APIs",
    description: "Robust data flow, caching, and server synchronization",
    icon: "Database",
    skills: [
      { name: "Zustand & Redux Toolkit", level: 92, icon: "Cpu", experience: "4 yrs", color: "from-violet-400 to-purple-600" },
      { name: "TanStack Query (React Query)", level: 94, icon: "RefreshCw", experience: "3 yrs", color: "from-rose-400 to-red-500" },
      { name: "RESTful & GraphQL Client", level: 88, icon: "Network", experience: "4 yrs", color: "from-pink-400 to-rose-500" },
      { name: "WebSockets & Realtime Feeds", level: 85, icon: "Radio", experience: "3 yrs", color: "from-sky-400 to-indigo-500" },
      { name: "Formik / React Hook Form + Zod", level: 95, icon: "CheckCircle2", experience: "4 yrs", color: "from-blue-400 to-cyan-500" }
    ]
  },
  {
    category: "Tooling, Testing & Optimization",
    description: "Developer velocity, build pipelines, and sub-second load times",
    icon: "Wrench",
    skills: [
      { name: "Vite & Turbopack", level: 94, icon: "Zap", experience: "3 yrs", color: "from-amber-400 to-orange-500" },
      { name: "Git / GitHub Actions CI/CD", level: 90, icon: "GitBranch", experience: "5 yrs", color: "from-orange-500 to-red-600" },
      { name: "Core Web Vitals & Web Vitals Audit", level: 92, icon: "Gauge", experience: "4 yrs", color: "from-emerald-400 to-teal-500" },
      { name: "Vitest / Jest / RTL Testing", level: 85, icon: "TestTube2", experience: "3 yrs", color: "from-green-500 to-emerald-600" },
      { name: "Postman & API Mocking", level: 90, icon: "Send", experience: "4 yrs", color: "from-orange-400 to-amber-500" }
    ]
  }
];

export const projectCategories = ["All", "SaaS & Dashboard", "E-Commerce", "AI & DevTools", "Design Systems"];

export const projectsData = [
  {
    id: "nexus-analytics",
    title: "Nexus Pro Analytics & BI Dashboard",
    subtitle: "Enterprise real-time metrics visualizer with custom drag-and-drop canvas",
    category: "SaaS & Dashboard",
    featured: true,
    tags: ["React 19", "TypeScript", "Tailwind CSS", "Recharts", "Zustand", "TanStack Query"],
    metrics: {
      speed: "0.4s FCP",
      lighthouse: "100",
      users: "50k+ DAU"
    },
    gradient: "from-cyan-950/80 via-blue-900/60 to-indigo-950/80",
    borderAccent: "group-hover:border-cyan-500/50",
    imageEmoji: "📊",
    shortDesc: "High-throughput operational analytics dashboard with customizable chart widgets, live streaming WebSockets, and sub-100ms filter calculations.",
    problem: "Financial analytics teams struggled with clunky, slow-loading portals that froze when handling 100,000+ real-time tick records.",
    solution: "Architected a virtualized React canvas with optimized rendering, web-worker based aggregation, and custom SVG charting engine.",
    features: [
      "Real-time WebSocket data feed with auto-reconnection",
      "Interactive drag-and-drop chart layout builder",
      "Custom date range anomaly detection filters",
      "One-click multi-format data export (PDF, CSV, JSON)",
      "Dark / Light / High-Contrast accessibility themes"
    ],
    liveUrl: "https://example.com/nexus-demo",
    githubUrl: "https://github.com/abinash/nexus-analytics"
  },
  {
    id: "aura-commerce",
    title: "Aura Luxury - Headless E-Commerce Experience",
    subtitle: "Micro-animated shopping interface with instant search and frictionless checkout",
    category: "E-Commerce",
    featured: true,
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Stripe API", "Zustand"],
    metrics: {
      speed: "+42% Conversion",
      lighthouse: "99",
      users: "120k Monthly"
    },
    gradient: "from-purple-950/80 via-fuchsia-900/60 to-pink-950/80",
    borderAccent: "group-hover:border-purple-500/50",
    imageEmoji: "✨",
    shortDesc: "Next-generation luxury commerce storefront with seamless page transitions, interactive 360° product inspections, and zero layout shift.",
    problem: "Legacy storefronts suffered from sluggish navigation, cart abandonment, and jarring page transitions on mobile devices.",
    solution: "Implemented Next.js App Router with optimistic UI mutations, edge-rendered product catalogs, and hardware-accelerated drawer animations.",
    features: [
      "Optimistic cart state with instant stock validation",
      "Keyboard-accessible quick view modal and image zoom",
      "Search-as-you-type with fuzzy matching & category pills",
      "Unified dark aesthetic with custom iridescent cards",
      "Integrated Stripe Elements checkout flow"
    ],
    liveUrl: "https://example.com/aura-commerce",
    githubUrl: "https://github.com/abinash/aura-commerce"
  },
  {
    id: "devpulse-ai",
    title: "DevPulse AI - Intelligent Code Assistant Web Studio",
    subtitle: "Web-based code editor with AST tree visualizer and AI-assisted refactoring",
    category: "AI & DevTools",
    featured: true,
    tags: ["React", "Monaco Editor", "Web Workers", "Tailwind CSS", "TypeScript", "Lucide"],
    metrics: {
      speed: "60 FPS Render",
      lighthouse: "98",
      users: "15k Stars"
    },
    gradient: "from-emerald-950/80 via-teal-900/60 to-cyan-950/80",
    borderAccent: "group-hover:border-emerald-500/50",
    imageEmoji: "⚡",
    shortDesc: "Modern developer playground featuring syntax highlighting, live TypeScript execution in Web Workers, and inline AI prompt suggestions.",
    problem: "Developers needed an agile online sandbox capable of instant snippet debugging without installing heavy local extensions.",
    solution: "Constructed a sandboxed browser runtime powered by Monaco Editor, inline diff inspection, and multi-file project tabs.",
    features: [
      "Monaco Editor integration with full IntelliSense",
      "Live AST syntax tree visualization",
      "Instant shareable snippet links with URL compression",
      "AI code explanation, test generator, and refactor mode",
      "Full offline PWA capability with IndexedDB storage"
    ],
    liveUrl: "https://example.com/devpulse-demo",
    githubUrl: "https://github.com/abinash/devpulse-ai"
  },
  {
    id: "pulse-design-system",
    title: "Pulse UI - Accessible Design System & Component Studio",
    subtitle: "Comprehensive 40+ component library compliant with WCAG 2.1 AAA standards",
    category: "Design Systems",
    featured: true,
    tags: ["React", "Tailwind CSS", "Radix UI", "Storybook", "TypeScript", "A11y"],
    metrics: {
      speed: "100% WCAG AAA",
      lighthouse: "100",
      users: "12 Enterprise Apps"
    },
    gradient: "from-amber-950/80 via-orange-900/60 to-rose-950/80",
    borderAccent: "group-hover:border-amber-500/50",
    imageEmoji: "💎",
    shortDesc: "Modular component architecture with automatic dark/light theme tokens, keyboard focus trapping, and screen-reader tested components.",
    problem: "Inconsistent UI patterns and poor accessibility across multiple internal web products were slowing down product delivery.",
    solution: "Created an enterprise design system token engine with headless primitives, live interactive playground, and comprehensive docs.",
    features: [
      "40+ production-tested accessible components",
      "Automatic token generation for Tailwind and CSS Variables",
      "Built-in keyboard navigation (Tab, Arrow keys, Esc traps)",
      "Interactive color contrast calculator & theme exporter",
      "Comprehensive TypeScript definitions and props validation"
    ],
    liveUrl: "https://example.com/pulse-ui-demo",
    githubUrl: "https://github.com/abinash/pulse-design-system"
  },
  {
    id: "flowtask-kanban",
    title: "FlowTask - Collaborative Kanban & Sprint Planner",
    subtitle: "Real-time task management with drag-and-drop and team presence indicators",
    category: "SaaS & Dashboard",
    featured: false,
    tags: ["React 18", "dnd-kit", "Zustand", "Tailwind CSS", "WebSockets"],
    metrics: {
      speed: "<16ms Drag Latency",
      lighthouse: "98",
      users: "8k Teams"
    },
    gradient: "from-indigo-950/80 via-blue-900/60 to-slate-950/80",
    borderAccent: "group-hover:border-indigo-500/50",
    imageEmoji: "📋",
    shortDesc: "Snappy, fluid project management board featuring smooth physics-based drag interactions, custom swimlanes, and instant optimistic updates.",
    problem: "Heavyweight Jira-like software felt bloated, slow, and lacked fluid touch/mouse drag ergonomics.",
    solution: "Designed lightweight dnd-kit columns with custom collision detection, optimistic state rollback, and clean modern aesthetic.",
    features: [
      "Smooth hardware-accelerated drag and drop",
      "Multi-tag filtering, search, and priority sorting",
      "Live avatar presence bubbles showing who is viewing/editing",
      "Keyboard shortcuts for rapid card creation (Cmd+Enter)",
      "Dark obsidian theme with neon priority badges"
    ],
    liveUrl: "https://example.com/flowtask-demo",
    githubUrl: "https://github.com/abinash/flowtask"
  },
  {
    id: "zenith-crypto",
    title: "Zenith Crypto - Web3 Asset Tracker & Portfolio Terminal",
    subtitle: "Decentralized finance visualization with interactive candlestick charts",
    category: "SaaS & Dashboard",
    featured: false,
    tags: ["Next.js", "Chart.js", "Tailwind CSS", "CoinGecko API", "TypeScript"],
    metrics: {
      speed: "0.3s Load",
      lighthouse: "99",
      users: "25k Users"
    },
    gradient: "from-rose-950/80 via-purple-900/60 to-slate-950/80",
    borderAccent: "group-hover:border-rose-500/50",
    imageEmoji: "📈",
    shortDesc: "Real-time cryptocurrency portfolio tracker with live market feeds, gas fee monitors, and profit/loss simulations.",
    problem: "Retail traders struggled to consolidate their multichain holdings into a single, clean, ad-free interface.",
    solution: "Built a responsive portfolio dashboard that aggregates multiple exchange APIs with local privacy-first storage.",
    features: [
      "Interactive candlestick & depth charts",
      "Real-time price tickers with green/red flash animations",
      "Local wallet tracking without seed phrases",
      "Customizable price alert notifications",
      "Sleek glassmorphic card layouts"
    ],
    liveUrl: "https://example.com/zenith-crypto",
    githubUrl: "https://github.com/abinash/zenith-crypto"
  }
];

export const experienceData = [
  {
    period: "2023 - Present",
    role: "Senior Frontend Engineer",
    company: "Veloce Technologies",
    location: "Remote",
    badge: "Current Role",
    description: "Leading frontend architecture and design system implementation for enterprise B2B SaaS platforms. Mentoring junior developers and improving Core Web Vitals across client-facing portals.",
    achievements: [
      "Boosted page load speed by 58% and reduced LCP from 2.8s to 0.7s through code-splitting and asset optimization.",
      "Engineered an internal component library adopted by 4 engineering pods, cutting UI feature turnaround by 40%.",
      "Implemented comprehensive end-to-end and component tests, raising code coverage from 45% to 88%."
    ],
    skills: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "Design Systems", "Web Performance"]
  },
  {
    period: "2021 - 2023",
    role: "Frontend Web Developer",
    company: "PixelForge Digital",
    location: "Bengaluru, India",
    badge: "Full-Time",
    description: "Developed interactive web applications, high-converting landing pages, and responsive web portals for fintech and e-commerce clients.",
    achievements: [
      "Built 15+ responsive client websites with 100/100 Lighthouse performance and SEO scores.",
      "Integrated seamless payment processing flows with Stripe and Razorpay, processing over $2M in annual transactions.",
      "Spearheaded the migration of legacy jQuery/CSS codebases to modern React + Tailwind CSS architectures."
    ],
    skills: ["React", "JavaScript ES6+", "Tailwind CSS", "Redux Toolkit", "REST APIs", "Framer Motion", "Figma to Code"]
  },
  {
    period: "2019 - 2021",
    role: "Junior UI/Frontend Developer",
    company: "Nova Web Studios",
    location: "India",
    badge: "Full-Time",
    description: "Collaborated with UI/UX designers to translate Figma mockups into pixel-perfect, responsive HTML5, CSS3, and JavaScript components.",
    achievements: [
      "Crafted 25+ pixel-perfect landing pages with cross-browser compatibility across Safari, Chrome, and Firefox.",
      "Implemented mobile-first responsive grid systems and fluid typography.",
      "Automated build tasks with Webpack and NPM scripts to reduce manual deployment overhead."
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git", "Sass", "Responsive Design"]
  }
];

export const testimonialsData = [
  {
    name: "Alex Rivera",
    role: "VP of Engineering at CloudFlow",
    avatar: "AR",
    text: "Abinash is a rare frontend engineer who has both an eagle eye for design aesthetic and deep mastery over performance and clean architecture. He delivered our analytics platform ahead of schedule with zero UI regressions.",
    rating: 5,
    project: "Nexus Analytics"
  },
  {
    name: "Sophia Chen",
    role: "Lead Product Designer at Aura Labs",
    avatar: "SC",
    text: "Working with Abinash was a dream for our design team. He brought our micro-animations to life with mathematical precision and ensured every single interaction was buttery smooth and accessible.",
    rating: 5,
    project: "Aura E-Commerce"
  },
  {
    name: "Marcus Brody",
    role: "Founder & CTO at DevPulse",
    avatar: "MB",
    text: "Abinash's code is impeccably structured, thoroughly tested, and lightning fast. He transformed our concept into a world-class web editor that garnered thousands of enthusiastic users on launch day.",
    rating: 5,
    project: "DevPulse AI"
  }
];

export const terminalCommandsHelp = [
  { command: "help", desc: "List all available terminal commands" },
  { command: "about", desc: "Display developer bio, role, and background" },
  { command: "skills", desc: "Display core tech stack & frontend skills" },
  { command: "projects", desc: "List featured projects and live demos" },
  { command: "experience", desc: "View career timeline and work history" },
  { command: "contact", desc: "Show contact email, socials, and availability" },
  { command: "hire", desc: "Initiate contact and view hiring details" },
  { command: "cat resume.txt", desc: "Print summary of resume credentials" },
  { command: "stats", desc: "Display portfolio metrics and Lighthouse scores" },
  { command: "matrix", desc: "Toggle cyber green matrix visual effect" },
  { command: "theme <name>", desc: "Switch theme: midnight, cyber, emerald, sunset, light" },
  { command: "clear", desc: "Clear the terminal screen" }
];

