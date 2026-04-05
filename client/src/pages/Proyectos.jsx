// src/pages/Proyectos.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import RevealOnScroll from '../components/RevealOnScroll';

export default function Proyectos() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const categories = [
    { key: 'all', label: t('projects.filters.all') },
    { key: 'web', label: t('projects.filters.web') },
    { key: 'mobile', label: t('projects.filters.mobile') },
    { key: 'ai', label: t('projects.filters.ai') },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <>
      <SEO
        title={t('projects.seo.title')}
        description={t('projects.seo.description')}
        image="/og-image.jpg"
        url="https://pedrometidieri.com/proyectos"
      />

      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-gray-50 via-white to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('projects.hero.title')}
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('projects.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950 ${
                  filter === cat.key
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Proyectos */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => {
              const title       = project.title       || t(project.titleKey);
              const description = project.description || t(project.descriptionKey);

              return (
                <RevealOnScroll key={project.id} direction="up" delay={idx * 100}>
                  <Link
                    to={`/proyectos/${project.slug}`}
                    className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-indigo-500 dark:hover:border-indigo-600 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-out flex flex-col h-full cursor-pointer"
                    aria-label={t('projects.ariaLabel', { title })}
                  >
                    <div className="aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800">
                      <img
                        src={project.image}
                        alt={`${title} — captura del proyecto`}
                        width="1905"
                        height="1071"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                        {title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 flex-grow">
                        {description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="text-xs px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400 font-medium mt-auto">
                        {t('projects.viewCaseStudy')}
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                      </div>
                    </div>
                  </Link>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <RevealOnScroll direction="up">
        <section className="py-24 bg-gradient-to-b from-gray-950 to-black text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {t('projects.cta.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              {t('projects.cta.subtitle')}
            </p>
            <a
              href="/contacto"
              className="inline-block rounded-full bg-white text-gray-900 px-14 py-6 text-xl font-medium hover:bg-gray-100 hover:scale-105 hover:shadow-lg active:scale-95 shadow-2xl transition-all duration-200"
            >
              {t('projects.cta.button')}
            </a>
          </div>
        </section>
      </RevealOnScroll>
    </>
  );
}
