import type { PersonalInfo, Skill, Experience, Project, Education, NavLink } from '../types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Sudarshan Kankal',
  title: 'Senior Software Engineer',
  company: 'UBS India',
  phone: '+91-9168172080',
  email: 'sudarshankankal@gmail.com',
  linkedin: 'sudarshan-kankal',
  linkedinUrl: 'https://www.linkedin.com/in/sudarshan-kankal',
  summary:
    'Senior Software Engineer at UBS with over 7 years of professional experience specializing in modern frontend architectures, performance optimization, and accessible (WCAG) web systems. Proven record of designing and scaling robust web applications for global financial institutions and multinational enterprises.',
  yearsOfExperience: 7,
} as const;

export const SKILLS: readonly Skill[] = [
  { name: 'TypeScript', level: 95, category: 'Languages' },
  { name: 'JavaScript (ES6+)', level: 95, category: 'Languages' },
  { name: 'Python', level: 75, category: 'Languages' },
  { name: 'React (React 19 / 18)', level: 95, category: 'Frontend' },
  { name: 'Redux Toolkit / State Management', level: 95, category: 'Frontend' },
  { name: 'Next.js & Vite', level: 90, category: 'Frontend' },
  { name: 'CSS3 / SCSS / Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'Web Accessibility (WCAG 2.1/2.2)', level: 90, category: 'Frontend' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'Express.js', level: 85, category: 'Backend' },
  { name: 'Jest / Vitest / RTL', level: 90, category: 'Others' },
  { name: 'Git & Git Workflows', level: 90, category: 'Others' },
  { name: 'CI/CD & Shell Scripting', level: 80, category: 'Others' },
  { name: 'Agile / Scrum Methodologies', level: 85, category: 'Others' },
  { name: 'System Architecture', level: 85, category: 'Others' },
] as const;

export const SKILL_CATEGORIES = ['All', 'Languages', 'Frontend', 'Backend', 'Others'] as const;

export const CATEGORY_ICONS: Record<string, string> = {
  Languages: '💻',
  Frontend: '🎨',
  Backend: '⚙️',
  Others: '🔧',
};

export const EXPERIENCES: readonly Experience[] = [
  {
    id: 1,
    role: 'Software Engineer II',
    company: 'UBS India',
    location: 'Pune, IN',
    period: 'Nov 2024 – Present',
    highlights: [
      'Architected and led the migration of a core legacy React 16 monolith to React 19, reducing bundle size by 40% and shortening initial page load time by 4.5 seconds.',
      'Lead frontend engineer for the UBS Outbound Expert Tool (OET), designing accessible, highly interactive lending components that comply with WCAG 2.1 AA guidelines.',
      'Refined design system implementations and established unit testing standards, achieving 95%+ test coverage across multiple product modules.',
    ],
    techStack: ['React 19', 'TypeScript', 'Redux Toolkit', 'WCAG 2.1', 'Jest'],
  },
  {
    id: 2,
    role: 'Senior Software Engineer',
    company: 'Globant India Pvt. Ltd.',
    location: 'Pune, IN',
    period: 'July 2021 – Oct 2024',
    highlights: [
      'Partnered with Ernst & Young (EY) to design and deliver multi-tenant SaaS web applications for global audit and compliance workflows.',
      'Engineered accessible UI modules that resolved legacy accessibility vulnerabilities, raising compliance scores by 35% in external audits.',
      'Spearheaded technical pull request reviews, enforced clean architecture standards, and mentored junior developers.',
      'Established Jest and React Testing Library guidelines, reducing regression bugs by 20% in production.',
    ],
    techStack: ['React', 'AngularJS', 'Redux', 'TypeScript', 'Web Accessibility (WCAG)', 'Jest'],
  },
  {
    id: 3,
    role: 'Software Engineer',
    company: 'Zcon Solutions Pvt. Ltd.',
    location: 'Pune, IN',
    period: 'Feb 2019 – June 2021',
    highlights: [
      'Designed and developed a dynamic, JSON-driven form template system, reducing custom form development times for business clients by 70%.',
      'Collaborated with stakeholders across US and EU regions to align complex business specifications with scalable web products.',
      'Developed cross-platform mobile app prototypes using React Native and integrated cloud services via AWS.',
    ],
    techStack: ['React', 'Redux', 'Node.js', 'Express.js', 'PostgreSQL', 'AWS'],
  },
] as const;

export const PROJECTS: readonly Project[] = [
  {
    id: 1,
    title: 'UBS Outbound Expert Tool (OET)',
    subtitle: 'React 19, TypeScript, Redux Toolkit',
    description: [
      'An enterprise-grade mortgage and lending mediator platform bridging home buyers and Client Advisers. Automates real-time affordability checks, processes complex financial calculations, and securely integrates with the UBS Key4 ecosystem.'
    ],
    techStack: ['React 19', 'TypeScript', 'Redux Toolkit', 'WCAG 2.1', 'Jest'],
  },
  {
    id: 2,
    title: 'TVM (Threat & Vulnerability Management)',
    subtitle: 'React, TypeScript, Node.js',
    description: [
      'A centralized security dashboard aggregating and analyzing threat vectors across thousands of servers. Features real-time ingestion pipelines from Qualys, Tanium, and Wiz, allowing security operations teams to triage vulnerabilities dynamically.'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS'],
  },
  {
    id: 3,
    title: 'CRD (Cyber Risk Dashboard)',
    subtitle: 'React, Redux, Data Visualization',
    description: [
      'An executive-level data visualization platform tracking enterprise security risk indexes. Aggregates data flows from ServiceNow and SNOW to render high-performance interactive risk matrices and historical trend charts.'
    ],
    techStack: ['React', 'Recharts', 'Redux', 'Node.js'],
  },
  {
    id: 4,
    title: 'PARIS (Privileged Access Inventory)',
    subtitle: 'React, Node.js, MongoDB',
    description: [
      'An identity and access management (IAM) tool that automatically discovers, audits, and inventories privileged credentials across distributed infrastructure. Enforces compliance standards by mapping entitlements and flagging security policy violations.'
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
] as const;

export const EDUCATION: Education = {
  degree: 'B.E. in Computer Engineering',
  institution: 'Dr. D.Y. Patil College of Engineering, Pune',
  period: '2014 – 2018',
  score: '72.8%',
} as const;

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const;
