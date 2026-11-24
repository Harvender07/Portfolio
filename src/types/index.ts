export type Theme = 'dark' | 'light';

export interface Project {
  id: string;
  title: string;
  category: 'software' | 'web' | 'ai' | 'creative';
  categoryLabel: string;
  tagline: string;
  problem: string;
  overview: string;
  solutionArchitecture: string;
  individualContribution: string;
  technologies: string[];
  keyFeatures: string[];
  architectureHighlights: string[];
  screenshotUrl?: string;
  githubUrl: string;
  liveUrl: string;
  status: 'Active' | 'Completed' | 'Open Source';
  featured?: boolean;
}

export type SkillCategory = 'programming' | 'frameworks' | 'tools';

export interface SkillItem {
  name: string;
  proficiency: 'Applied in Projects / PRs' | 'Foundational (Basic)' | 'Supporting Skill';
  levelPercentage: number;
  category: SkillCategory;
  description: string;
  evidenceLabel: string;
  evidenceUrl: string;
}

export interface SaiPullRequest {
  taskId: string;
  prNumber: number;
  title: string;
  prUrl: string;
  status: 'Open' | 'Merged' | 'Closed';
  issueRef: string;
  filesModified: string[];
  codeModifications: string;
  technicalRationale: string;
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
  verificationPostUrl?: string;
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
