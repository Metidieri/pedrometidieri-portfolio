// src/data/experience.js
import { Rocket, GraduationCap, HeartPulse } from 'lucide-react';

export const experience = [
  {
    id: 1,
    jobKey: 'job1',
    icon: Rocket,
    current: true,
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'Node.js'],
  },
  {
    id: 2,
    jobKey: 'job2',
    icon: GraduationCap,
    current: false,
    tech: ['Flask', 'Next.js', 'MySQL', 'JWT', 'WordPress', 'Python'],
  },
  {
    id: 3,
    jobKey: 'job3',
    icon: HeartPulse,
    current: false,
    tech: ['WordPress', 'Joomla', 'HTML5', 'CSS', 'Bootstrap', 'JavaScript'],
  },
];
