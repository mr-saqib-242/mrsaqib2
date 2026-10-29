export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  bgLight: string;
  borderColor: string;
  iconColor: string;
  iconEmoji?: string;
  tagline?: string;
  detailedScope: string[];
  deliverables: string[];
}

export interface WhyWorkItem {
  id: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Mobile App' | 'Web Application' | 'Web Design' | 'Design System' | 'Full-Stack App' | 'AI Solution';
  subtitle: string;
  summary: string;
  role: string;
  timeline: string;
  impactMetric: string;
  tags: string[];
  gradient: string;
  type: 'finova' | 'dashboard' | 'landing';
  githubUrl?: string;
  liveUrl?: string;
  techStack?: string[];
  architectureSummary?: string;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend & APIs' | 'Databases & AI' | 'DevOps & Tools';
  level?: string;
  iconName?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  activities: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  badge: string;
  badgeType: 'winner' | 'product' | 'interface' | 'trophy';
  description: string;
  year: string;
  symbol: string;
  colorClass: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarText: string;
  avatarBg: string;
}

export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}
