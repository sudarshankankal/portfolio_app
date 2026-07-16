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
    'Senior Software Engineer at UBS India with 7+ years of experience specializing in Web Development. Passionate about devising better problem-solving methods for challenging tasks, and continuously learning new technologies and tools.',
  yearsOfExperience: 7,
} as const;

export const SKILLS: readonly Skill[] = [
  { name: 'JavaScript', level: 95, category: 'Languages' },
  { name: 'TypeScript', level: 90, category: 'Languages' },
  { name: 'Python', level: 70, category: 'Languages' },
  { name: 'React JS', level: 95, category: 'Frontend' },
  { name: 'Redux', level: 90, category: 'Frontend' },
  { name: 'HTML5', level: 95, category: 'Frontend' },
  { name: 'CSS3 / Sass', level: 90, category: 'Frontend' },
  { name: 'Jest', level: 85, category: 'Frontend' },
  { name: 'Node JS', level: 80, category: 'Backend' },
  { name: 'Express JS', level: 80, category: 'Backend' },
  { name: 'MongoDB', level: 75, category: 'Database' },
  { name: 'MS-SQL', level: 70, category: 'Database' },
  { name: 'Web Accessibility', level: 90, category: 'Others' },
  { name: 'PWA', level: 75, category: 'Others' },
  { name: 'Git & GitHub', level: 90, category: 'Others' },
  { name: 'Agile', level: 85, category: 'Others' },
  { name: 'Unit Testing', level: 85, category: 'Others' },
] as const;

export const SKILL_CATEGORIES = ['All', 'Languages', 'Frontend', 'Backend', 'Database', 'Others'] as const;

export const CATEGORY_ICONS: Record<string, string> = {
  Languages: '💻',
  Frontend: '🎨',
  Backend: '⚙️',
  Database: '🗄️',
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
      'Architected and led migration of a legacy React 16 monolith to React 19, cutting bundle size by 40% and reducing initial load time by 4.5s across a platform serving daily client advisors.',
      'Working on UBS in-house OET product as a frontend developer, delivering high-quality features.',
      'Working extensively on building accessible web applications along with unit test cases.',
    ],
    techStack: ['React JS', 'TypeScript', 'Web Accessibility'],
  },
  {
    id: 2,
    role: 'Senior Software Engineer',
    company: 'Globant India Pvt. Ltd.',
    location: 'Pune, IN',
    period: 'July 2021 – Oct 2024',
    highlights: [
      'Worked with Ernst & Young (EY) on the development of multi-tenant web applications.',
      'Worked extensively on building accessible web applications along with unit test cases.',
      'Worked with various stakeholders to ensure their requirements were being met.',
      'Responsible for reviewing PRs and providing constructive feedback.',
      "Mentored freshers and colleagues on new JavaScript technologies as part of Globant's studio initiative.",
    ],
    techStack: ['React JS', 'Angular JS', 'Redux', 'TypeScript', 'JavaScript', 'Motif', 'Web Accessibility'],
  },
  {
    id: 3,
    role: 'Software Engineer',
    company: 'Zcon Solutions Pvt. Ltd.',
    location: 'Pune, IN',
    period: 'Feb 2019 – June 2021',
    highlights: [
      'Utilized React, Redux and responsive web design practices to build multiple web applications.',
      'Implemented a dynamic JSON-based form template system which helped clients create forms using JSON.',
      'Worked with various stakeholders from different regions to ensure their requirements were being met.',
      'Learned and worked on mobile app development using React Native.',
      'Worked on multiple projects with tight deadlines.',
    ],
    techStack: ['React JS', 'Redux', 'Node JS', 'Express JS', 'Postgres', 'AWS'],
  },
] as const;

export const PROJECTS: readonly Project[] = [
  {
    id: 1,
    title: 'UBS OET',
    subtitle: 'React JS, TypeScript',
    description: [
      "Outbound Expert Tool, part of UBS's lending business, acting as a mediator between home buyers and Client Advisers to provide mortgages and leads.",
      'Handles all affordability calculations and background verifications, and transfers leads to the UBS key4 platform.',
    ],
    techStack: ['React JS', 'TypeScript', 'Redux'],
  },
  {
    id: 2,
    title: 'TVM',
    subtitle: 'Threats & Vulnerability Management',
    description: [
      'Web application for monitoring and handling vulnerabilities with different severities across multiple workflows.',
      'Integrated data sources such as Qualys, Tanium, and Wiz.',
    ],
    techStack: ['React JS', 'TypeScript', 'Node JS'],
  },
  {
    id: 3,
    title: 'CRD',
    subtitle: 'Cyber Risk Dashboard',
    description: [
      'Web app for monitoring threats across different dashboards based on data flow from ServiceNow and SNOW.',
      'Built interactive graphs to visualize threat data on the UI.',
    ],
    techStack: ['React JS', 'Redux', 'Data Visualization'],
  },
  {
    id: 4,
    title: 'PARIS',
    subtitle: 'Privileged Access Discovery & Inventory System',
    description: [
      'Helps discover, aggregate, and store privileged accounts and entitlements from across various IT systems.',
      'Identifies and tags aggregated accounts and groups as privileged based on agreed-upon privileged criteria.',
    ],
    techStack: ['React JS', 'Node JS', 'MongoDB'],
  },
] as const;

export const EDUCATION: Education = {
  degree: 'B.E, Computer Engineering',
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
