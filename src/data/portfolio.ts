/* ================================================================
   DATA LAYER — Portfolio content from portfolio.md as typed data
   ================================================================ */

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  techStack?: string;
}

export interface Project {
  name: string;
  type: string;
  description: string[];
  tech?: string;
  color: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const personalInfo = {
  name: 'Sudarshan Kankal',
  title: 'Senior Software Engineer',
  subtitle: 'Frontend',
  phone: '+91-9168172080',
  email: 'sudarshankankal@gmail.com',
  github: 'sudarshan-kankal',
  githubUrl: 'https://github.com/sudarshan-kankal',
} as const;

export const summary =
  'Senior Software Engineer at UBS India with 7+ years of experience specializing in Web Development. Interested in devising better problem-solving methods for challenging tasks, and learning new technologies and tools as needed.';

export const stats = [
  { value: '7+', label: 'Years Experience' },
  { value: '3', label: 'Companies' },
  { value: '4+', label: 'Major Projects' },
  { value: '40%', label: 'Bundle Size Reduced' },
] as const;

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python'],
  },
  {
    category: 'Frontend',
    skills: ['React JS', 'Redux', 'HTML5', 'CSS3', 'Sass', 'Jest'],
  },
  {
    category: 'Backend',
    skills: ['Node JS', 'Express JS'],
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'MS-SQL'],
  },
  {
    category: 'Others',
    skills: ['Web Accessibility', 'PWA', 'Git & GitHub', 'Agile', 'Unit Testing', 'Claude Code', 'Antigravity'],
  },
];

export const experiences: Experience[] = [
  {
    title: 'Software Engineer II',
    company: 'UBS India',
    location: 'Pune, IN',
    period: 'Nov 2024 – Present',
    highlights: [
      'Architected and led migration of a legacy React 16 monolith to React 19, cutting bundle size by 40% and reducing initial load time by 4.5s across a platform serving daily client advisors',
      'Working on a UBS in-house OET product as a frontend developer, delivering high-quality features',
      'Working extensively on building accessible web applications along with unit test cases',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Globant India Pvt. Ltd.',
    location: 'Pune, IN',
    period: 'July 2021 – Oct 2024',
    highlights: [
      'Worked with Ernst & Young (EY) on the development of multi-tenant web applications',
      'Worked extensively on building accessible web applications along with unit test cases',
      'Worked with various stakeholders to ensure their requirements were being met',
      'Responsible for reviewing PRs and providing constructive feedback',
      'Mentored freshers and colleagues on new JavaScript technologies as part of Globant\'s studio initiative',
    ],
    techStack: 'React JS, Angular JS, Redux, TypeScript, JavaScript, Motif, Web Accessibility',
  },
  {
    title: 'Software Engineer',
    company: 'Zcon Solutions Pvt. Ltd.',
    location: 'Pune, IN',
    period: 'Feb 2019 – June 2021',
    highlights: [
      'Utilized React, Redux and responsive web design practices to build multiple web applications',
      'Implemented a dynamic JSON-based form template system which helped clients create forms using JSON',
      'Worked with various stakeholders from different regions to ensure their requirements were being met',
      'Learned and worked on mobile app development using React Native',
      'Worked on multiple projects with tight deadlines',
    ],
    techStack: 'React JS, Redux, Node JS, Express JS, Postgres, AWS',
  },
];

export const projects: Project[] = [
  {
    name: 'UBS OET',
    type: 'Enterprise Platform',
    description: [
      'Outbound Expert Tool, part of UBS\'s lending business, acting as a mediator between home buyers and Client Advisers to provide mortgages and leads',
      'Handles all affordability calculations and background verifications, and transfers leads to the UBS key4 platform',
    ],
    tech: 'React JS, TypeScript',
    color: '#272729',
    icon: 'building-2',
  },
  {
    name: 'TVM',
    type: 'Cybersecurity',
    description: [
      'Threats & Vulnerability Management — Web application for monitoring and handling vulnerabilities with different severities across multiple workflows',
      'Integrated data sources such as Qualys, Tanium, and Wiz',
    ],
    color: '#2a2a2c',
    icon: 'shield',
  },
  {
    name: 'CRD',
    type: 'Dashboard',
    description: [
      'Cyber Risk Dashboard — Web app for monitoring threats across different dashboards based on data flow from ServiceNow and SNOW',
      'Built interactive graphs to visualize threat data on the UI',
    ],
    color: '#252527',
    icon: 'bar-chart-3',
  },
  {
    name: 'PARIS',
    type: 'Security Platform',
    description: [
      'Privileged Access Discovery & Inventory System — Helps discover, aggregate, and store privileged accounts and entitlements from across various IT systems',
      'Identifies and tags aggregated accounts and groups as privileged based on agreed-upon privileged criteria',
    ],
    color: '#272729',
    icon: 'key-round',
  },
];

export const education = {
  degree: 'B.E., Computer Engineering',
  institution: 'Dr. D.Y. Patil College of Engineering, Pune',
  period: '2014 – 2018',
  score: '72.8%',
} as const;

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const;
