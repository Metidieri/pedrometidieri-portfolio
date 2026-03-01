// src/components/TechStack.jsx
import { Tooltip } from 'react-tooltip'; // instalamos después
import 'react-tooltip/dist/react-tooltip.css';

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
  // Añade los que uses
];

export default function TechStack() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Tecnologías que uso
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 md:gap-8 m-items-center">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="group relative flex flex-col items-center p-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/20 dark:hover:shadow-indigo-600/20"
              data-tooltip-id="tech-tooltip"
              data-tooltip-content={tech.name}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 md:w-16 md:h-16 object-contain mb-2 transition-transform duration-300 group-hover:rotate-6"
              />
              <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                {tech.name}
              </span>

              {/* Efecto de color sutil en hover */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundColor: tech.color }}
              />
            </div>
          ))}
        </div>

        {/* Tooltip global */}
        <Tooltip id="tech-tooltip" place="top" effect="solid" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm" />
      </div>
    </section>
  );
}