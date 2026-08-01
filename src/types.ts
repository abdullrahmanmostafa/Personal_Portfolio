export interface Project {
  id: string;
  title: string;
  iconType: 'ai' | 'power' | 'medical' | 'ecommerce';
  badges: string[];
  description: string;
  githubUrl: string;
  demoUrl: string;
  image: string;
  longDescription: string;
  features: string[];
  architecture: string;
  metrics: { label: string; value: string }[];
  sampleEndpoint?: string;
  sampleResponse?: string;
}

export interface SkillCategory {
  title: string;
  iconName: 'backend' | 'frontend' | 'database' | 'cloud';
  items: string[];
}

export interface ProficiencyItem {
  skill: string;
  percentage: number;
}

export interface TimelineItem {
  period: string;
  role: string;
  organization: string;
  description: string;
  type: 'experience' | 'education';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}
