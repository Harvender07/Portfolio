export type Theme = 'dark' | 'light';

export interface Project {
  id: string;
  title: string;
  category: 'software' | 'web' | 'ai' | 'creative';
  categoryLabel: string;
  tagline: string;
  problem: string;
  overview: string;
  technologies: string[];
  keyFeatures: string[];
  architectureHighlights: string[];
  screenshotUrl?: string;
  screenshotPlaceholderNote: string;
  githubUrl: string;
  liveUrl: string;
  isPlaceholder: boolean;
  status: 'Placeholder Blueprint' | 'In Development' | 'Prototype' | 'Active';
  featured?: boolean;
}

export type SkillCategory = 'programming' | 'interests' | 'additional' | 'learning';

export interface SkillItem {
  name: string;
  proficiency: 'Basic / Foundational' | 'Active Exploration' | 'Learning In Progress';
  levelPercentage: number;
  category: SkillCategory;
  description: string;
  badgeColor?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  timeline: string;
  score?: string;
  status: string;
  location: string;
  highlights: string[];
  focusAreas: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  tier: 'Gold' | 'Silver' | 'Bronze';
  date: string;
  credentialNote: string;
  fileUrl: string;
  fileType: 'image' | 'pdf';
  skillsDemonstrated: string[];
  description: string;
  badgeColor: string;
}

export interface JourneyMilestone {
  title: string;
  period: string;
  tag: string;
  description: string;
  bulletPoints: string[];
  iconName: string;
}

export interface PersonalityPillar {
  title: string;
  category: string;
  description: string;
  takeaway: string;
  iconName: string;
}
