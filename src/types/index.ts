export interface Skill {
  readonly name: string;
  readonly level: number;
  readonly category: SkillCategory;
}

export type SkillCategory = 'Languages' | 'Frontend' | 'Backend' | 'Database' | 'Others';

export interface Experience {
  readonly id: number;
  readonly role: string;
  readonly company: string;
  readonly location: string;
  readonly period: string;
  readonly highlights: readonly string[];
  readonly techStack: readonly string[];
}

export interface Project {
  readonly id: number;
  readonly title: string;
  readonly subtitle: string;
  readonly description: readonly string[];
  readonly techStack: readonly string[];
}

export interface Education {
  readonly degree: string;
  readonly institution: string;
  readonly period: string;
  readonly score: string;
}

export interface PersonalInfo {
  readonly name: string;
  readonly title: string;
  readonly company: string;
  readonly phone: string;
  readonly email: string;
  readonly linkedin: string;
  readonly linkedinUrl: string;
  readonly summary: string;
  readonly yearsOfExperience: number;
}

export interface NavLink {
  readonly label: string;
  readonly href: string;
}
