// src/components/TechStack.jsx
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import AnimatedTitle from './AnimatedTitle';
import { viewportOnce } from '../lib/motion';

const techs = [
  { name: 'React', icon: '/tech/react.svg', color: '#61DAFB' },
  { name: 'Next.js', icon: '/tech/nextjs.svg', color: '#000000' },
  { name: 'Node.js', icon: '/tech/nodejs.svg', color: '#339933' },
  { name: 'Tailwind CSS', icon: '/tech/tailwind.svg', color: '#38BDF8' },
  { name: 'TypeScript', icon: '/tech/typescript.svg', color: '#3178C6' },
  { name: 'Supabase', icon: '/tech/supabase.svg', color: '#3ECF8E' },
  { name: 'PostgreSQL', icon: '/tech/postgresql.svg', color: '#336791' },
  { name: 'Python', icon: '/tech/python.svg', color: '#3776AB' },
  { name: 'OpenAI', icon: '/tech/openai.svg', color: '#000000' },
  { name: 'MySQL', icon: '/tech/mysql.svg', color: '#00758F' },
  { name: 'JavaScript', icon: '/tech/javascript.svg', color: '#F7DF1E' },
  { name: 'GitHub', icon: '/tech/github.svg', color: '#F05032' },
  { name: 'Docker', icon: '/tech/docker.svg', color: '#2496ED' },
  { name: 'Grok', icon: '/tech/grok.svg', color: '#FF9900' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.34, 1.56, 0.64, 1] },
  },
};

export default function TechStack() {
  const { t } = useTranslation();
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <AnimatedTitle
          className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          {t('techStack.title')}
        </AnimatedTitle>

        <motion.div
          variants={shouldReduce ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 md:gap-8"
        >
          {techs.map((tech) => (
            <motion.div
              key={tech.name}
              variants={shouldReduce ? {} : itemVariants}
              whileHover={shouldReduce ? {} : {
                scale: 1.12,
                rotate: 3,
                y: -4,
                transition: { type: 'spring', stiffness: 400, damping: 15 },
              }}
              whileTap={shouldReduce ? {} : { scale: 0.95 }}
              className="group relative flex flex-col items-center p-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors duration-300 hover:shadow-lg hover:shadow-indigo-500/20 dark:hover:shadow-indigo-600/20 cursor-default will-change-transform"
              data-tooltip-id="tech-tooltip"
              data-tooltip-content={tech.name}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 md:w-16 md:h-16 object-contain mb-2"
              />
              <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                {tech.name}
              </span>

              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundColor: tech.color }}
              />
            </motion.div>
          ))}
        </motion.div>

        <Tooltip id="tech-tooltip" place="top" effect="solid" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm" />
      </div>
    </section>
  );
}
