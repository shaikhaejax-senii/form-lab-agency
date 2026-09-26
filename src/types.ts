export interface Project {
  id: string;
  number: string;
  title: string;
  client: string;
  tagline: string;
  category: 'AI & SPATIAL' | 'ECOMMERCE' | 'FINTECH' | 'BRAND SYSTEMS';
  year: string;
  metrics: { label: string; value: string }[];
  overview: string;
  challenge: string;
  solution: string;
  technologies: string[];
  accentColor: string;
  paletteType: 'dark' | 'cream' | 'warm';
  deliverables: string[];
  heroStats: {
    stat1: string;
    label1: string;
    stat2: string;
    label2: string;
  };
}

export interface Service {
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  deliverables: string[];
  timeline: string;
}

export interface ProcessStage {
  number: string;
  phase: string;
  subtitle: string;
  description: string;
  duration: string;
  deliverables: string[];
  keyActions: string[];
}

export interface StudioMetric {
  value: string;
  label: string;
  detail: string;
}
