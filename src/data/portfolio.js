import {
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Phone,
  Rocket,
  Server,
  Sparkles,
} from 'lucide-react';

export const profile = {
  name: 'Md Sohail Ahmed',
  title: 'MERN Stack Full-Stack Developer',
  location: 'Bengaluru, Karnataka, India',
  intro:
    'Full-stack developer focused on building scalable MERN applications, REST APIs, AI-powered product features, and clean user experiences with strong DSA and problem-solving fundamentals.',
  email: 'mdsohailahmed25017@gmail.com',
  phone: '+91 9739325017',
  linkedin: 'https://www.linkedin.com/in/md-sohail-ahmed0333/',
  github: 'https://github.com/Md-Sohail-Ahmed',
  resume: '/Md-Sohail_Ahmed_Resume.pdf',
  heroBadge: 'MERN Stack | DSA | Problem Solving | GenAI APIs',
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '200+', label: 'DSA problems solved (Leetcode)' },
  { value: '3+', label: 'Full-stack projects' },
  { value: '8.1', label: 'B.Tech CGPA' },
];

export const about = {
  eyebrow: 'About me',
  heading: 'A full-stack developer who builds practical MERN products with clean architecture.',
  body:
    'I am a Computer Science Engineering student and full-stack developer experienced with JavaScript, React.js, Node.js, Express.js, and MongoDB. I enjoy building complete applications from responsive interfaces to secure REST APIs, with a strong focus on performance, database design, and problem-solving. My recent work includes AI-powered interview preparation, restaurant reservation workflows, and productivity tools.',
};

export const skills = [
  { name: 'React', icon: Sparkles, group: 'Frontend' },
  { name: 'JavaScript', icon: Code2, group: 'Language' },
  { name: 'TypeScript', icon: Code2, group: 'Language' },
  { name: 'C++', icon: Code2, group: 'Language' },
  { name: 'Tailwind CSS', icon: Layers3, group: 'Styling' },
  { name: 'Node.js', icon: Server, group: 'Backend' },
  { name: 'Express.js', icon: Server, group: 'Backend' },
  { name: 'MongoDB', icon: Database, group: 'Database' },
  { name: 'MySQL', icon: Database, group: 'Database' },
  { name: 'REST APIs', icon: Rocket, group: 'Integration' },
  { name: 'DSA', icon: BriefcaseBusiness, group: 'Problem Solving' },
  { name: 'Git & GitHub', icon: Github, group: 'Tools' },
  { name: 'Postman', icon: Rocket, group: 'Tools' },
];

export const projects = [
  {
    title: 'Interview Master',
    category: 'AI + MERN',
    badge: 'Featured AI Project',
    description:
      'A full-stack AI interview preparation platform that analyzes candidate readiness, compares resumes with job roles, finds skill gaps, and generates personalized preparation plans.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Gemini API'],
    live: '#',
    repo: 'https://github.com/Md-Sohail-Ahmed/Interview-Master',
  },
  {
    title: 'Delish',
    category: 'MERN',
    badge: 'Full Stack',
    description:
      'A restaurant web application with menu display, services overview, responsive UI, and dynamic table reservation management backed by REST APIs.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Paste App',
    category: 'Frontend',
    badge: 'Productivity Tool',
    description:
      'A React-based code snippet and text management app with create, edit, and manage workflows, efficient state handling, and reusable Tailwind components.',
    tech: ['React.js', 'Redux Toolkit', 'Tailwind CSS'],
    live: '#',
    repo: '#',
  },
];

export const filters = ['All', 'AI + MERN', 'MERN', 'Frontend'];

export const experience = [
  {
    role: 'Android App Developer Intern',
    company: 'Mindmatrix',
    period: 'Feb 2026 - May 2026',
    icon: BriefcaseBusiness,
    points: [
      'Developed scalable Android applications using Kotlin and Android Studio with modern UI and architecture practices.',
      'Integrated Generative AI APIs to enable intelligent, context-aware in-app features.',
      'Designed and consumed RESTful APIs for seamless data communication and optimized responsiveness.',
    ],
  },
  {
    role: 'B.Tech in Computer Science & Engineering',
    company: 'City Engineering College, VTU',
    period: '2022 - 2026',
    icon: GraduationCap,
    points: [
      'Current CGPA: 8.1/10.',
      'Focused on DBMS, OOPS, Data Structures & Algorithms, and full-stack web development.',
    ],
  },
];

export const achievements = [
  {
    title: 'Solved 200+ DSA Problems',
    description: 'Practiced Data Structures & Algorithms on LeetCode with consistent problem-solving focus.',
  },
  {
    title: 'AICTE-Edunet MERN Certification',
    description: 'Completed Building Modern Web Applications with MERN Stack certification program.',
  },
];

export const contactLinks = [
  { label: 'Email', href: `mailto:${profile.email}`, value: profile.email, icon: Mail },
  { label: 'Phone', href: `tel:${profile.phone.replace(/\s/g, '')}`, value: profile.phone, icon: Phone },
  { label: 'LinkedIn', href: profile.linkedin, value: 'https://www.linkedin.com/in/md-sohail-ahmed0333/', icon: Linkedin },
  { label: 'GitHub', href: profile.github, value: 'https://github.com/Md-Sohail-Ahmed', icon: Github },
];

export const linkIcon = ExternalLink;
