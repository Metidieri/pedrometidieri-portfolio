// src/components/TechStack.jsx
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code2, Server, Brain, Rocket } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';
import { viewportOnce } from '../lib/motion';

const techGroups = [
  {
    key: 'frontend',
    icon: Code2,
    items: [
      { name: 'HTML5', icon: '/tech/html5.svg', color: '#E44D26', ctx: 'html5' },
      { name: 'CSS3', icon: '/tech/css3.svg', color: '#1572B6', ctx: 'css3' },
      { name: 'JavaScript (ES6+)', icon: '/tech/javascript.svg', color: '#F7DF1E', ctx: 'js' },
      { name: 'TypeScript', icon: '/tech/typescript.svg', color: '#3178C6', ctx: 'ts' },
      { name: 'React', icon: '/tech/react.svg', color: '#61DAFB', ctx: 'react' },
      { name: 'Next.js', icon: '/tech/nextjs.svg', color: '#6366F1', ctx: 'nextjs' },
      { name: 'Tailwind CSS', icon: '/tech/tailwind.svg', color: '#38BDF8', ctx: 'tailwind' },
      { name: 'Bootstrap', icon: '/tech/bootstrap.svg', color: '#7952B3', ctx: 'bootstrap' },
      { name: 'Framer Motion', icon: '/tech/framer-motion.svg', color: '#0055FF', ctx: 'framer' },
      { name: 'Vite', icon: '/tech/vite.svg', color: '#646CFF', ctx: 'vite' },
    ],
  },
  {
    key: 'backend',
    icon: Server,
    items: [
      { name: 'Node.js', icon: '/tech/nodejs.svg', color: '#339933', ctx: 'node' },
      { name: 'Express.js', icon: '/tech/express.svg', color: '#6B7280', ctx: 'express' },
      { name: 'Python', icon: '/tech/python.svg', color: '#3776AB', ctx: 'python' },
      { name: 'Flask', icon: '/tech/flask.svg', color: '#6B7280', ctx: 'flask' },
      { name: 'PHP', icon: '/tech/php.svg', color: '#6181B6', ctx: 'php' },
      { name: 'REST APIs', icon: '/tech/rest-api.svg', color: '#009688', ctx: 'rest' },
      { name: 'PostgreSQL', icon: '/tech/postgresql.svg', color: '#336791', ctx: 'postgres' },
      { name: 'MySQL', icon: '/tech/mysql.svg', color: '#00758F', ctx: 'mysql' },
      { name: 'Supabase', icon: '/tech/supabase.svg', color: '#3ECF8E', ctx: 'supabase' },
    ],
  },
  {
    key: 'ai',
    icon: Brain,
    items: [
      { name: 'OpenAI API', icon: '/tech/openai.svg', color: '#10A37F', ctx: 'openai' },
      { name: 'Claude API', icon: '/tech/claude.svg', color: '#D97757', ctx: 'claude' },
      { name: 'Grok', icon: '/tech/grok.svg', color: '#FF9900', ctx: 'grok' },
      { name: 'LangChain', icon: '/tech/langchain.svg', color: '#1C3C3C', ctx: 'langchain' },
      { name: 'Prompt Engineering', icon: '/tech/prompt-eng.svg', color: '#6366F1', ctx: 'prompteng' },
    ],
  },
  {
    key: 'devops',
    icon: Rocket,
    items: [
      { name: 'Git', icon: '/tech/git.svg', color: '#F34F29', ctx: 'git' },
      { name: 'GitHub', icon: '/tech/github.svg', color: '#6B7280', ctx: 'github' },
      { name: 'Docker', icon: '/tech/docker.svg', color: '#2496ED', ctx: 'docker' },
      { name: 'Vercel', icon: '/tech/vercel.svg', color: '#6B7280', ctx: 'vercel' },
      { name: 'CI/CD Pipelines', icon: '/tech/cicd.svg', color: '#2088FF', ctx: 'cicd' },
      { name: 'Hostinger', icon: '/tech/hostinger.svg', color: '#673DE6', ctx: 'hostinger' },
      { name: 'Serverless Functions', icon: '/tech/serverless.svg', color: '#F59E0B', ctx: 'serverless' },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function TechStack() {
  const { t } = useTranslation();
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <AnimatedTitle
          className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          {t('techStack.title')}
        </AnimatedTitle>

        <div className="space-y-14 md:space-y-20 mt-12">
          {techGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.key}>
                {/* Category heading */}
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-indigo-500/30 dark:shadow-indigo-900/50 flex-shrink-0">
                    <Icon className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {t(`techStack.groups.${group.key}`)}
                  </h3>
                  <span className="flex-1 h-px bg-gradient-to-r from-gray-200 dark:from-gray-800 to-transparent" aria-hidden="true" />
                </div>

                {/* Tech cards grid */}
                <motion.div
                  variants={shouldReduce ? {} : containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4"
                >
                  {group.items.map((tech) => (
                    <motion.div
                      key={tech.name}
                      variants={shouldReduce ? {} : itemVariants}
                      style={{ '--tech-color': tech.color }}
                      className="group relative flex items-start gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60 hover:bg-white dark:hover:bg-gray-900 hover:border-[color:var(--tech-color)] hover:shadow-[0_10px_30px_-12px_var(--tech-color)] hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300 cursor-default"
                    >
                      {/* Icon tile */}
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 p-2 ring-1 ring-gray-200 dark:ring-gray-700 group-hover:ring-[color:var(--tech-color)] transition-all duration-300">
                        <img
                          src={tech.icon}
                          alt=""
                          aria-hidden="true"
                          width="32"
                          height="32"
                          className="w-full h-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white leading-tight">
                          {tech.name}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1 leading-snug">
                          {t(`techStack.ctx.${tech.ctx}`)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
