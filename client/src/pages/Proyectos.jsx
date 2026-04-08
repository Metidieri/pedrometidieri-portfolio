// src/pages/Proyectos.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import { projects } from '../data/projects';

const EASE_EXPO = [0.22, 1, 0.36, 1];

export default function Proyectos() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const shouldReduce = useReducedMotion();

  const categories = [
    { key: 'all', label: t('projects.filters.all') },
    { key: 'web', label: t('projects.filters.web') },
    { key: 'saas', label: t('projects.filters.saas') },
    { key: 'mobile', label: t('projects.filters.mobile') },
    { key: 'ai', label: t('projects.filters.ai') },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  // First project in the filtered list gets the hero treatment
  const heroProject = filteredProjects[0] || null;
  const restProjects = filteredProjects.slice(1);

  return (
    <>
      <SEO
        title={t('projects.seo.title')}
        description={t('projects.seo.description')}
        image="/og-image.png"
        url="https://pedrometidieri.com/proyectos"
      />

      {/* ── Page header ────────────────────────────────────── */}
      <section
        className="pt-20 pb-16 md:pb-20"
        style={{ backgroundColor: 'var(--color-bg)', paddingTop: '80px' }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.6, ease: EASE_EXPO }}
          >
            <h1
              className="font-display font-black tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1 }}
            >
              <span style={{ color: 'var(--color-text-muted)' }}>Mis</span>
              <br />
              <span style={{ color: '#FFFFFF' }}>Proyectos</span>
            </h1>

            {/* Animated decorative line */}
            <motion.div
              initial={{ width: 60 }}
              animate={{ width: 200 }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.8, ease: EASE_EXPO, delay: 0.2 }}
              className="h-1 rounded-full mt-6 mb-6"
              style={{ backgroundColor: 'var(--color-primary)' }}
            />

            <p
              className="font-sans max-w-[500px]"
              style={{ fontSize: '17px', color: 'var(--color-text-muted)', lineHeight: 1.7 }}
            >
              {t('projects.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Filters ────────────────────────────────────────── */}
      <section
        className="pb-10"
        style={{ backgroundColor: 'var(--color-bg)' }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => {
              const isActive = filter === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setFilter(cat.key)}
                  className="px-5 py-2 rounded-full text-sm font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{
                    backgroundColor: isActive ? 'var(--color-primary)' : 'transparent',
                    color: isActive ? '#FFFFFF' : 'var(--color-text-muted)',
                    border: isActive ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                    transition: 'background-color 150ms ease, color 150ms ease, border-color 150ms ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Projects grid ──────────────────────────────────── */}
      <section
        className="pb-24"
        style={{ backgroundColor: 'var(--color-bg)' }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={shouldReduce ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={shouldReduce ? {} : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {/* Hero project — full width */}
              {heroProject && (() => {
                const stack = heroProject.stack || heroProject.tech || [];
                const visibleStack = stack.slice(0, 4);
                const remaining = stack.length - 4;
                const title = heroProject.title || t(heroProject.titleKey);
                const description = heroProject.description || t(heroProject.descriptionKey);

                return (
                  <motion.div
                    initial={shouldReduce ? {} : { opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={shouldReduce ? { duration: 0 } : { duration: 0.5, ease: 'easeOut' }}
                    className="mb-8"
                  >
                    <Link
                      to={`/proyectos/${heroProject.slug}`}
                      className="group block rounded-2xl overflow-hidden cursor-pointer"
                      style={{
                        backgroundColor: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                        borderLeft: '3px solid transparent',
                        transition: 'border-color 300ms ease, box-shadow 300ms ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderLeftColor = 'var(--color-primary)';
                        e.currentTarget.style.boxShadow = '0 25px 60px rgba(99,102,241,0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderLeftColor = 'transparent';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      aria-label={t('projects.ariaLabel', { title })}
                    >
                      <div className="flex flex-col lg:flex-row" style={{ minHeight: '400px' }}>
                        {/* Image 60% */}
                        <div
                          className="lg:w-[60%] overflow-hidden"
                          style={{ backgroundColor: 'var(--color-surface-2)' }}
                        >
                          {heroProject.image ? (
                            <img
                              src={heroProject.image}
                              alt={t('projects.imageAlt', { title })}
                              width="1905"
                              height="1071"
                              loading="eager"
                              decoding="async"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                              style={{ minHeight: '260px' }}
                            />
                          ) : (
                            <div
                              className="w-full h-full flex items-center justify-center font-sans text-sm"
                              style={{ color: 'var(--color-text-muted)', minHeight: '260px' }}
                            >
                              {title}
                            </div>
                          )}
                        </div>

                        {/* Content 40% */}
                        <div className="lg:w-[40%] p-8 lg:p-10 flex flex-col justify-center">
                          {heroProject.featured && (
                            <span
                              className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-semibold mb-5"
                              style={{
                                backgroundColor: 'rgba(99,102,241,0.15)',
                                color: 'var(--color-primary)',
                              }}
                            >
                              Proyecto destacado
                            </span>
                          )}

                          <h2
                            className="font-display font-semibold mb-3"
                            style={{ fontSize: '22px', color: '#FFFFFF', lineHeight: 1.3 }}
                          >
                            {title}
                          </h2>

                          <p
                            className="font-sans mb-6 leading-relaxed"
                            style={{ fontSize: '15px', color: 'var(--color-text-muted)' }}
                          >
                            {description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-8">
                            {visibleStack.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs px-3 py-1 rounded-full font-medium"
                                style={{
                                  backgroundColor: 'var(--color-surface-2)',
                                  color: 'var(--color-text-muted)',
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                            {remaining > 0 && (
                              <span
                                className="text-xs px-3 py-1 rounded-full font-medium"
                                style={{
                                  backgroundColor: 'var(--color-surface-2)',
                                  color: 'var(--color-text-muted)',
                                }}
                              >
                                +{remaining} m&aacute;s
                              </span>
                            )}
                          </div>

                          <span
                            className="inline-flex items-center gap-2 self-start rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all duration-200 group-hover:shadow-lg group-hover:shadow-indigo-600/25"
                            style={{ backgroundColor: 'var(--color-primary)' }}
                          >
                            {t('projects.viewCaseStudy')}
                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })()}

              {/* Rest of projects — 2 columns */}
              <div className="grid md:grid-cols-2 gap-6">
                {restProjects.map((project, i) => {
                  const stack = project.stack || project.tech || [];
                  const visibleStack = stack.slice(0, 4);
                  const title = project.title || t(project.titleKey);
                  const description = project.description || t(project.descriptionKey);

                  return (
                    <motion.div
                      key={project.id}
                      initial={shouldReduce ? {} : { opacity: 0, y: 50, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={shouldReduce ? { duration: 0 } : {
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: i * 0.1,
                      }}
                    >
                      <Link
                        to={`/proyectos/${project.slug}`}
                        className="group block rounded-2xl overflow-hidden h-full cursor-pointer will-change-transform"
                        style={{
                          backgroundColor: 'var(--color-surface)',
                          border: '1px solid var(--color-border)',
                          transition: 'transform 300ms ease, box-shadow 300ms ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.02)';
                          e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                        aria-label={t('projects.ariaLabel', { title })}
                      >
                        {/* Image with hover overlay */}
                        <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                          {project.image ? (
                            <img
                              src={project.image}
                              alt={t('projects.imageAlt', { title })}
                              width="1905"
                              height="1071"
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              style={{ borderRadius: '12px 12px 0 0' }}
                            />
                          ) : (
                            <div
                              className="w-full h-full flex items-center justify-center font-sans text-sm"
                              style={{ color: 'var(--color-text-muted)' }}
                            >
                              {title}
                            </div>
                          )}

                          {/* Hover overlay */}
                          <div
                            className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                              background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                            }}
                          >
                            <span
                              className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold text-white"
                              style={{ backgroundColor: 'var(--color-primary)' }}
                            >
                              {t('projects.viewCaseStudy')}
                              <ArrowRight className="h-3 w-3" aria-hidden="true" />
                            </span>
                            {project.url && (
                              <span
                                className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold text-white"
                                style={{ border: '1px solid rgba(255,255,255,0.3)' }}
                              >
                                {t('project.viewSite')}
                                <ExternalLink className="h-3 w-3" aria-hidden="true" />
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Card body */}
                        <div className="p-6">
                          <h3
                            className="font-display font-semibold mb-2 line-clamp-1"
                            style={{ fontSize: '20px', color: '#FFFFFF' }}
                          >
                            {title}
                          </h3>
                          <p
                            className="font-sans mb-5 line-clamp-2"
                            style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}
                          >
                            {description}
                          </p>

                          <div className="flex flex-wrap gap-1.5 mb-5">
                            {visibleStack.map((tech) => (
                              <span
                                key={tech}
                                className="text-[11px] px-2.5 py-0.5 rounded-full font-medium"
                                style={{
                                  backgroundColor: 'var(--color-surface-2)',
                                  color: 'var(--color-text-muted)',
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div
                            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                            style={{ color: 'var(--color-primary)' }}
                          >
                            {t('projects.viewCaseStudy')}
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA Final ──────────────────────────────────────── */}
      <section
        className="py-24 text-center"
        style={{
          background: 'linear-gradient(to bottom, var(--color-bg), #000000)',
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.6, ease: EASE_EXPO }}
          >
            <h2
              className="font-display font-bold mb-6"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#FFFFFF' }}
            >
              {t('projects.cta.title')}
            </h2>
            <p
              className="font-sans max-w-2xl mx-auto mb-10"
              style={{ fontSize: '18px', color: 'var(--color-text-muted)' }}
            >
              {t('projects.cta.subtitle')}
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 rounded-lg px-10 py-4 text-lg font-semibold text-white transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-indigo-600/25"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              {t('projects.cta.button')}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
