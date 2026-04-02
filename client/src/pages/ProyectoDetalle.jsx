// src/pages/ProyectoDetalle.jsx
// Case study detallado de un proyecto individual.
// Ruta: /proyectos/:slug

import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import SEO from '../components/SEO';
import RevealOnScroll from '../components/RevealOnScroll';

export default function ProyectoDetalle() {
  const { slug } = useParams();
  const { t }    = useTranslation();

  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return <Navigate to="/proyectos" replace />;

  const project     = projects[idx];
  const prevProject = idx > 0 ? projects[idx - 1] : null;
  const nextProject = idx < projects.length - 1 ? projects[idx + 1] : null;

  const title       = project.title       || t(project.titleKey);
  const description = project.description || t(project.descriptionKey);

  return (
    <>
      <SEO
        title={`${title} | Pedro Metidieri`}
        description={description}
        image={project.image}
        url={`https://pedrometidieri.com/proyectos/${project.slug}`}
      />

      {/* ── Hero: imagen + titular ──────────────────────────────────── */}
      <section className="relative bg-gray-950 pt-16 md:pt-20">
        {/* Imagen de portada */}
        <div className="relative w-full aspect-video max-h-[65vh] overflow-hidden">
          <img
            src={project.image}
            alt={t('project.imageAlt', { title })}
            className="w-full h-full object-cover opacity-70"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
        </div>

        {/* Texto superpuesto */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4 pb-10 md:pb-14">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-600/90 text-white text-xs font-semibold tracking-wide uppercase mb-4">
                {t(`project.categories.${project.category}`) || project.category}
              </span>
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
                {title}
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contenido principal ─────────────────────────────────────── */}
      <div className="bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">

          {/* Tecnologías */}
          <RevealOnScroll direction="up">
            <div className="mb-14">
              <h2 className="font-display text-2xl font-bold mb-5 text-gray-900 dark:text-white">
                {t('project.tech')}
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 font-medium text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Reto + Solución en grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-14">
            <RevealOnScroll direction="left">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 h-full">
                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4">
                  <span className="text-xl" aria-hidden="true">🎯</span>
                </div>
                <h2 className="font-display text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {t('project.challenge')}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={100}>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 h-full">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                  <span className="text-xl" aria-hidden="true">💡</span>
                </div>
                <h2 className="font-display text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {t('project.solution')}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* Resumen largo */}
          {project.longDescription && (
            <RevealOnScroll direction="up">
              <div className="mb-14">
                <h2 className="font-display text-2xl font-bold mb-5 text-gray-900 dark:text-white">
                  {t('project.summary')}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
            </RevealOnScroll>
          )}

          {/* Resultado */}
          {project.result && (
            <RevealOnScroll direction="up" delay={50}>
              <div className="mb-14 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-900/40">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
                  <span className="text-xl" aria-hidden="true">📈</span>
                </div>
                <h2 className="font-display text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {t('project.result')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.result}
                </p>
              </div>
            </RevealOnScroll>
          )}

          {/* CTA: Ver sitio web (solo si es proyecto externo con URL) */}
          {project.external && project.link && (
            <RevealOnScroll direction="up">
              <div className="text-center mb-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-10 py-5 text-lg font-medium text-white hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25 active:scale-95 shadow-lg transition-all duration-200"
                >
                  {t('project.viewSite')}
                  <ExternalLink className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </RevealOnScroll>
          )}
        </div>
      </div>

      {/* ── Navegación entre proyectos ──────────────────────────────── */}
      <nav
        className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 py-10 transition-colors duration-300"
        aria-label={t('project.navAriaLabel')}
      >
        <div className="container mx-auto px-4 max-w-4xl flex items-center justify-between gap-4">
          {/* Anterior */}
          {prevProject ? (
            <Link
              to={`/proyectos/${prevProject.slug}`}
              className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 max-w-xs"
            >
              <ArrowLeft className="h-5 w-5 flex-shrink-0 group-hover:-translate-x-1 transition-transform duration-200" aria-hidden="true" />
              <div>
                <div className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">{t('project.prev')}</div>
                <div className="font-medium line-clamp-1">
                  {prevProject.title || t(prevProject.titleKey)}
                </div>
              </div>
            </Link>
          ) : (
            <div aria-hidden="true" />
          )}

          <Link
            to="/proyectos"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 whitespace-nowrap"
          >
            {t('project.viewAll')}
          </Link>

          {/* Siguiente */}
          {nextProject ? (
            <Link
              to={`/proyectos/${nextProject.slug}`}
              className="group flex items-center gap-3 text-right text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 max-w-xs"
            >
              <div>
                <div className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">{t('project.next')}</div>
                <div className="font-medium line-clamp-1">
                  {nextProject.title || t(nextProject.titleKey)}
                </div>
              </div>
              <ArrowRight className="h-5 w-5 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </Link>
          ) : (
            <div aria-hidden="true" />
          )}
        </div>
      </nav>
    </>
  );
}
