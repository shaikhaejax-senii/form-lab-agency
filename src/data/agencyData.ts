import type { Project, Service, ProcessStage, StudioMetric } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'orbit',
    number: '01',
    title: 'ORBIT',
    client: 'Orbit Intelligence Corp',
    tagline: 'AI PRODUCT EXPERIENCE & SPATIAL INTERFACE',
    category: 'AI & SPATIAL',
    year: '2026',
    accentColor: '#FF6A2A',
    paletteType: 'dark',
    metrics: [
      { label: 'Latency Drop', value: '-64%' },
      { label: 'Active Sessions', value: '4.2M' },
      { label: 'Conversion Lift', value: '+240%' },
      { label: 'Recognition', value: 'Red Dot 2025' }
    ],
    heroStats: {
      stat1: '0.04s',
      label1: 'Inference Render Time',
      stat2: '120 FPS',
      label2: 'GPU Accelerated Canvas'
    },
    overview: 'Orbit represents a fundamental reimagining of how autonomous multi-agent systems visualize and control complex neural topologies in real time. We crafted a dark, cinematic spatial UI with three-dimensional depth mapping and reactive vector fields.',
    challenge: 'Designing an interface capable of rendering tens of thousands of real-time semantic node connections simultaneously without overwhelming cognitive bandwidth or compromising 60 FPS viewport performance.',
    solution: 'We engineered a bespoke WebGL node cluster engine paired with layered floating glassHUD components, providing instantaneous topological filtering and physical spatial depth.',
    technologies: ['React', 'WebGL', 'Three.js Shaders', 'TailwindCSS', 'Web Audio API'],
    deliverables: ['Design System', '3D Spatial Viewport', 'Multi-Agent Interface', 'Telemetry Dashboard']
  },
  {
    id: 'noir',
    number: '02',
    title: 'NOIR',
    client: 'Maison Noir Paris',
    tagline: 'HAUTE COUTURE DIGITAL FLAGSHIP & SPATIAL LOOKBOOK',
    category: 'ECOMMERCE',
    year: '2026',
    accentColor: '#E8DDC8',
    paletteType: 'cream',
    metrics: [
      { label: 'Launch GMV', value: '$42M' },
      { label: 'Session Duration', value: '6m 12s' },
      { label: 'Mobile Conversion', value: '+180%' },
      { label: 'Award', value: 'Awwwards SOTD' }
    ],
    heroStats: {
      stat1: '100%',
      label1: 'Bespoke Typographic System',
      stat2: '4K Micro',
      label2: 'Fabric Texture Detail'
    },
    overview: 'An uncompromising luxury digital flagship bridging Parisian couture heritage with hyper-modern fluid editorial web architecture. We built a tactile, cream-toned typographic runway with responsive physics-driven interactions.',
    challenge: 'Translating the physical sensation of premium textiles and atelier craftsmanship into a digital browser medium with extreme editorial precision and sub-second load times.',
    solution: 'Engineered an adaptive magazine grid with layered 3D depth, micro-staggered typography transitions, and dynamic fabric physics previews.',
    technologies: ['React', 'Framer Motion', 'Custom WebGL Physics', 'Contentful GraphQL'],
    deliverables: ['Creative Direction', 'E-Commerce Architecture', 'Digital Runway', 'Editorial Guidelines']
  },
  {
    id: 'pulse',
    number: '03',
    title: 'PULSE',
    client: 'Pulse Capital Technologies',
    tagline: 'NEXT-GEN AUTONOMOUS FINTECH PROTOCOL',
    category: 'FINTECH',
    year: '2025',
    accentColor: '#E94B2F',
    paletteType: 'warm',
    metrics: [
      { label: 'Execution Speed', value: '12ms' },
      { label: 'Assets Handled', value: '$18B+' },
      { label: 'System Uptime', value: '99.999%' },
      { label: 'Design Honor', value: 'FWA of the Month' }
    ],
    heroStats: {
      stat1: '<15ms',
      label1: 'Streaming WebSocket Lag',
      stat2: '400k/s',
      label2: 'Orderbook Calculations'
    },
    overview: 'Pulse is an institutional-grade algorithmic liquidity terminal engineered for global trading desks. Featuring warm ember chromatic accents, dark charcoal contrast, and multi-dimensional depth.',
    challenge: 'Compressing complex multi-exchange liquidity matrices and live order flow into an instinctive, zero-friction glass UI that minimizes operator fatigue during high-volatility events.',
    solution: 'Designed an ergonomic dark-room dashboard using layered glass transforms, glowing status waveforms, and instant spatial drilldowns.',
    technologies: ['TypeScript', 'WebGL Canvas', 'Rust WebAssembly', 'TailwindCSS'],
    deliverables: ['Trading Terminal', 'Design System', 'Algorithmic Visualizer', 'Mobile Companion App']
  },
  {
    id: 'atlas',
    number: '04',
    title: 'ATLAS',
    client: 'Atlas Spatial Group',
    tagline: 'DIGITAL BRAND SYSTEM & SPATIAL GUIDELINES',
    category: 'BRAND SYSTEMS',
    year: '2025',
    accentColor: '#FF8A3D',
    paletteType: 'dark',
    metrics: [
      { label: 'Global Brands', value: '8 Sub-units' },
      { label: 'Token Adoptions', value: '100%' },
      { label: 'Design Velocity', value: '+320%' },
      { label: 'Components', value: '120+ Tokens' }
    ],
    heroStats: {
      stat1: '120+',
      label1: 'Parametric Tokens',
      stat2: '100%',
      label2: 'Cross-Platform Sync'
    },
    overview: 'A living, multi-dimensional design system and token platform built for enterprise spatial computing teams. Featuring real-time color physics, dynamic responsive grids, and algorithmic typography scales.',
    challenge: 'Unifying fragmented brand identities across 8 global hardware and software divisions into a single cohesive, scalable design language.',
    solution: 'Constructed a living digital guidelines portal featuring interactive 3D component sandboxes, code generation hooks, and automated token sync.',
    technologies: ['React', 'CSS 3D Transforms', 'Design Tokens API', 'Vite'],
    deliverables: ['Global Design System', 'Component Sandbox', 'Token Engine', 'Spatial Brand Book']
  }
];

export const SERVICES: Service[] = [
  {
    number: '01',
    title: 'DIGITAL PRODUCTS',
    tagline: 'From blank canvas to category-defining product experiences.',
    description: 'We conceive and craft bespoke digital platforms, mobile applications, and complex web ecosystems where functional clarity meets uncompromising visual elegance.',
    capabilities: [
      'Next-Gen Web & Mobile Applications',
      'Complex SaaS & Spatial Dashboards',
      'Design Systems & Component Engines',
      'Interactive Prototypes & Concept Sandboxes'
    ],
    deliverables: ['Figma Architectures', 'Design Token Schemas', 'Interactive Prototypes', 'Production Spec Guides'],
    timeline: '6 — 12 Weeks'
  },
  {
    number: '02',
    title: 'WEB EXPERIENCES',
    tagline: 'Cinematic, spatial, and narrative-driven web flagships.',
    description: 'We turn ordinary web visits into visceral brand journeys. Leveraging 3D perspective transforms, WebGL shaders, fluid micro-interactions, and editorial layouts that demand attention.',
    capabilities: [
      'High-Impact 3D Brand Flagships',
      'Interactive Product Showcases',
      'Fluid Micro-Animations & Motion Design',
      'Scroll-Driven Kinetic Typography'
    ],
    deliverables: ['WebGL Viewports', 'Interactive Web Architecture', 'Custom Shader Pipelines', 'SEO & Performance Audits'],
    timeline: '4 — 8 Weeks'
  },
  {
    number: '03',
    title: 'BRAND SYSTEMS',
    tagline: 'Distinctive visual identities engineered for digital reality.',
    description: 'We establish modern identity frameworks, dynamic logo systems, generative color palettes, and typographic rules built to scale effortlessly across screens and physical dimensions.',
    capabilities: [
      'Strategic Identity Architecture',
      'Spatial & Digital Motion Guidelines',
      'Parametric Typography Systems',
      'Brand Asset Libraries & Tone of Voice'
    ],
    deliverables: ['Brand Manuals', 'Vector Asset Kits', 'Typography Licenses', 'Motion Language Rules'],
    timeline: '4 — 6 Weeks'
  },
  {
    number: '04',
    title: 'CREATIVE DEVELOPMENT',
    tagline: 'Uncompromising engineering with 60 FPS performance.',
    description: 'We engineer frontends with precision and craft. Every transition is timed to the millisecond, every asset optimized, and every layout tested across modern hardware for seamless fidelity.',
    capabilities: [
      'Modern React & Next.js Architecture',
      'Three.js & Canvas 3D Shaders',
      'Performant Micro-Interaction Suites',
      'Accessible & Fully Responsive Codebases'
    ],
    deliverables: ['Clean Git Repositories', 'Vercel Deployment Pipelines', 'Performance Benchmarks', 'Documentation'],
    timeline: '4 — 10 Weeks'
  },
  {
    number: '05',
    title: 'AI EXPERIENCES',
    tagline: 'Human-centered interfaces for artificial intelligence.',
    description: 'We make complex machine learning, multi-agent frameworks, and generative neural workflows legible, tactile, and delightfully intuitive for high-stakes decision makers.',
    capabilities: [
      'Multi-Agent System Interfaces',
      'Generative Audio & Spatial UI',
      'Real-Time Neural Topology Visualizers',
      'Conversational & Sensory Workflows'
    ],
    deliverables: ['Agent Control Interfaces', 'Real-time Telemetry Panels', 'Prompt Tuning UIs', 'Interactive Graph Views'],
    timeline: '6 — 12 Weeks'
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: '01',
    phase: 'DISCOVER',
    subtitle: 'Understand the problem and define strategic boundaries.',
    description: 'We immerse deeply into your brand ethos, technical constraints, user psychology, and competitive landscape. We strip away noise to uncover the core thesis that makes your product remarkable.',
    duration: 'Week 01 — 02',
    deliverables: ['Strategic Blueprint', 'Audience Archetypes', 'Technical Architecture Plan', 'Creative Vector Thesis'],
    keyActions: [
      'Stakeholder immersion interviews',
      'Competitor & design space mapping',
      'System requirement audits',
      'Visual benchmarks curation'
    ]
  },
  {
    number: '02',
    phase: 'DEFINE',
    subtitle: 'Build the visual language and product direction.',
    description: 'We translate strategic insights into concrete moodboards, art direction options, 3D composition studies, and spatial layout prototypes. We establish the emotional cadence of the final experience.',
    duration: 'Week 03 — 04',
    deliverables: ['Art Direction Deck', '3D Scene Prototypes', 'Typography & Palette Matrix', 'Interaction Wireframes'],
    keyActions: [
      '3D spatial composition modeling',
      'Color harmony & contrast calibration',
      'Component anatomy sketching',
      'Tone of voice & copywriting framework'
    ]
  },
  {
    number: '03',
    phase: 'DESIGN',
    subtitle: 'Create high-fidelity experiences with depth and motion.',
    description: 'We meticulously sculpt every screen, modal, card, and micro-interaction in high-fidelity 3D space. We craft custom bevels, reflections, glass panels, and fluid state transitions.',
    duration: 'Week 05 — 08',
    deliverables: ['Complete High-Fidelity UI Suite', 'Framer / CSS Motion Specs', 'Design Token System', 'Edge-Case Layouts'],
    keyActions: [
      'Multi-layer 3D card composition',
      'Micro-interaction physics tuning',
      'Mobile-first responsive adaptations',
      'Accessibility contrast & focus states'
    ]
  },
  {
    number: '04',
    phase: 'DEVELOP',
    subtitle: 'Turn the concept into a polished, battle-tested product.',
    description: 'We write clean, modular, semantic TypeScript and modern CSS with uncompromising 60 FPS performance. Every detail is verified, tested across browsers, and shipped to modern cloud pipelines.',
    duration: 'Week 09 — 12',
    deliverables: ['Production-Grade Codebase', 'Zero-Latency Vercel Pipeline', 'Test & Lighthouse Suite', 'Documentation'],
    keyActions: [
      'React & CSS 3D Transforms execution',
      'Web Audio micro-interaction hooks',
      'Cross-browser & mobile touch validation',
      'Production deployment & lighthouse optimization'
    ]
  }
];

export const STUDIO_METRICS: StudioMetric[] = [
  {
    value: '14+',
    label: 'Global Design Honors',
    detail: 'Awwwards Site of the Year, FWA of the Day, Red Dot Best of the Best & Tokyo TDC accolades.'
  },
  {
    value: '99.4%',
    label: 'Client Satisfaction',
    detail: 'Measured across enterprise leaders, hyper-growth startups, and visionary cultural institutions.'
  },
  {
    value: '$120M+',
    label: 'Enterprise Value Created',
    detail: 'Demonstrable capital raised and valuation impact post-launch for partner studios.'
  },
  {
    value: '40+',
    label: 'Global Productions Shipped',
    detail: 'Delivered seamlessly across Tokyo, London, San Francisco, Paris, and Zurich.'
  }
];

export const CLIENT_LOGOS = [
  { name: 'AURA SPATIAL', category: 'Spatial Computing' },
  { name: 'KRONOS AI', category: 'Autonomous Systems' },
  { name: 'VALENCE', category: 'Quantum Optics' },
  { name: 'SYMBIONT', category: 'Bio-Digital Interface' },
  { name: 'NEXUS CAP', category: 'Venture Capital' },
  { name: 'MAISON NOIR', category: 'Haute Horlogerie' },
  { name: 'ORBIT CORE', category: 'Neural Architecture' },
  { name: 'LUMINA', category: 'Photonic Displays' }
];
