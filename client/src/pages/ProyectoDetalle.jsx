// src/pages/ProyectoDetalle.jsx
// Case study detallado de un proyecto individual.
// Ruta: /proyectos/:slug

import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Target, CheckCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import SEO from '../components/SEO';

const EASE_EXPO = [0.22, 1, 0.36, 1];

const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_EXPO },
  },
};

export default function ProyectoDetalle() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const shouldReduce = useReducedMotion();

  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return <Navigate to="/proyectos" replace />;

  const project = projects[idx];
  const prevProject = idx > 0 ? projects[idx - 1] : null;
  const nextProject = idx < projects.length - 1 ? projects[idx + 1] : null;

  const title = project.title || t(project.titleKey);
  const description = project.description || t(project.descriptionKey);
  const stack = project.stack || project.tech || [];

  return (
    <>
      <SEO
        title={`${title} | Pedro Metidieri`}
        description={description}
        image={project.image}
        url={`https://pedrometidieri.com/proyectos/${project.slug}`}
      />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden flex items-end"
        style={{ backgroundColor: 'var(--color-bg)', minHeight: '70vh' }}
      >
        {/* Background image */}
        {project.image && (
          <div className="absolute inset-0" aria-hidden="true">
            <img
              src={project.image}
              alt=""
              width="1905"
              height="1071"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(15,23,42,0.3) 0%, rgba(15,23,42,0.95) 100%)',
              }}
            />
          </div>
        )}

        {/* Content */}
        <div className="relative container mx-auto px-6 max-w-[800px] pb-16 pt-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={shouldReduce ? {} : heroStagger}
            className="flex flex-col items-center text-center"
          >
            {/* Breadcrumb */}
            <motion.nav
              variants={shouldReduce ? {} : heroItem}
              className="flex items-center gap-2 mb-6 font-sans"
              style={{ fontSize: '13px' }}
              aria-label="Breadcrumb"
            >
              <Link
                to="/proyectos"
                className="transition-colors duration-200 cursor-pointer"
                style={{ color: 'var(--color-text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
              >
                {t('project.breadcrumbProjects')}
              </Link>
              <span style={{ color: 'var(--color-border)' }}>/</span>
              <span style={{ color: 'var(--color-text-muted)' }}>{title}</span>
            </motion.nav>

            {/* Category badge */}
            <motion.span
              variants={shouldReduce ? {} : heroItem}
              className="inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-6"
              style={{
                backgroundColor: 'rgba(99,102,241,0.2)',
                color: 'var(--color-primary)',
              }}
            >
              {t(`project.categories.${project.category}`) || project.category}
            </motion.span>

            {/* Title */}
            <motion.h1
              variants={shouldReduce ? {} : heroItem}
              className="font-display font-black tracking-tight mb-5 max-w-[800px]"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                color: '#FFFFFF',
                lineHeight: 1.15,
              }}
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={shouldReduce ? {} : heroItem}
              className="font-sans mb-8 max-w-[600px]"
              style={{
                fontSize: '18px',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
              }}
            >
              {description}
            </motion.p>

            {/* Stack pills */}
            <motion.div
              variants={shouldReduce ? {} : heroItem}
              className="flex flex-wrap justify-center gap-2 mb-10"
            >
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#FFFFFF',
                  }}
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={shouldReduce ? {} : heroItem}
              className="flex flex-wrap justify-center gap-4"
            >
              {(project.url || project.link) && (
                <a
                  href={project.url || project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-indigo-600/25"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  {t('project.viewSite')}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer"
                  style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#FFFFFF' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-surface)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  {t('project.viewCode')}
                </a>
              )}
              <Link
                to="/proyectos"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-200 cursor-pointer"
                style={{ color: 'var(--color-text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                {t('project.viewAll')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Body ───────────────────────────────────────────── */}
      <div style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="mx-auto px-6 py-16 md:py-24" style={{ maxWidth: '760px' }}>

          {/* Client context */}
          {project.client && (
            <motion.div
              initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.5, ease: EASE_EXPO }}
              className="mb-12"
            >
              <p
                className="font-sans text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {t('project.client')}
              </p>
              <p className="font-sans" style={{ fontSize: '16px', color: 'var(--color-text)' }}>
                {project.client}
              </p>
            </motion.div>
          )}

          {/* The Problem */}
          {project.problem && (
            <motion.div
              initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.5, ease: EASE_EXPO }}
              className="mb-16 rounded-2xl p-8"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderLeft: '4px solid var(--color-primary)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Target
                  className="flex-shrink-0"
                  style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }}
                  aria-hidden="true"
                />
                <h2
                  className="font-display font-semibold"
                  style={{ fontSize: '22px', color: 'var(--color-text)' }}
                >
                  {t('project.problem')}
                </h2>
              </div>
              <p
                className="font-sans"
                style={{
                  fontSize: '16px',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.7,
                }}
              >
                {project.problem}
              </p>
            </motion.div>
          )}

          {/* Technical Decisions */}
          {project.decisions?.length > 0 && (
            <div className="mb-16">
              <motion.div
                initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={shouldReduce ? { duration: 0 } : { duration: 0.5, ease: EASE_EXPO }}
                className="mb-8"
              >
                <h2
                  className="font-display font-black tracking-tight"
                  style={{ fontSize: '28px', color: 'var(--color-text)', lineHeight: 1.2 }}
                >
                  {t('project.decisions')}
                </h2>
                <motion.div
                  initial={{ width: 40 }}
                  whileInView={{ width: 120 }}
                  viewport={{ once: true }}
                  transition={shouldReduce ? { duration: 0 } : { duration: 0.8, ease: EASE_EXPO, delay: 0.1 }}
                  className="h-0.5 rounded-full mt-4"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                />
              </motion.div>

              <div>
                {project.decisions.map((decision, i) => (
                  <motion.div
                    key={i}
                    initial={shouldReduce ? {} : { opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={shouldReduce ? { duration: 0 } : {
                      duration: 0.4,
                      ease: EASE_EXPO,
                      delay: i * 0.08,
                    }}
                    className="py-6"
                    style={{
                      borderBottom:
                        i < project.decisions.length - 1
                          ? '1px solid var(--color-border)'
                          : 'none',
                    }}
                  >
                    <span
                      className="font-mono block mb-1"
                      style={{
                        fontSize: '12px',
                        color: 'var(--color-primary)',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p
                      className="font-sans"
                      style={{
                        fontSize: '15px',
                        color: 'var(--color-text-muted)',
                        lineHeight: 1.7,
                      }}
                    >
                      {decision}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Result */}
          {project.result && (
            <motion.div
              initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.5, ease: EASE_EXPO }}
              className="mb-16 rounded-2xl p-8"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderLeft: '4px solid var(--color-green)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle
                  className="flex-shrink-0"
                  style={{ width: '24px', height: '24px', color: 'var(--color-green)' }}
                  aria-hidden="true"
                />
                <h2
                  className="font-display font-semibold"
                  style={{ fontSize: '22px', color: 'var(--color-text)' }}
                >
                  {t('project.result')}
                </h2>
              </div>
              <p
                className="font-sans"
                style={{
                  fontSize: '16px',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.7,
                }}
              >
                {project.result}
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* ── Prev / Next navigation ─────────────────────────── */}
      <nav
        className="py-10"
        style={{
          backgroundColor: 'var(--color-bg)',
          borderTop: '1px solid var(--color-border)',
        }}
        aria-label={t('project.navAriaLabel')}
      >
        <div className="mx-auto px-6 flex flex-col sm:flex-row items-stretch gap-4" style={{ maxWidth: '760px' }}>
          {/* Previous */}
          {prevProject ? (
            <Link
              to={`/proyectos/${prevProject.slug}`}
              className="group flex items-center gap-3 flex-1 rounded-xl p-5 transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
            >
              <ArrowLeft
                className="h-5 w-5 flex-shrink-0 transition-transform duration-200 group-hover:-translate-x-1"
                style={{ color: 'var(--color-text-muted)' }}
                aria-hidden="true"
              />
              <div>
                <div
                  className="text-xs font-sans mb-1"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {t('project.prev')}
                </div>
                <div
                  className="font-display font-medium text-sm line-clamp-1"
                  style={{ color: 'var(--color-text)' }}
                >
                  {prevProject.title || t(prevProject.titleKey)}
                </div>
              </div>
            </Link>
          ) : (
            <div className="flex-1" aria-hidden="true" />
          )}

          {/* Next */}
          {nextProject ? (
            <Link
              to={`/proyectos/${nextProject.slug}`}
              className="group flex items-center justify-end gap-3 flex-1 rounded-xl p-5 text-right transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
            >
              <div>
                <div
                  className="text-xs font-sans mb-1"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {t('project.next')}
                </div>
                <div
                  className="font-display font-medium text-sm line-clamp-1"
                  style={{ color: 'var(--color-text)' }}
                >
                  {nextProject.title || t(nextProject.titleKey)}
                </div>
              </div>
              <ArrowRight
                className="h-5 w-5 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: 'var(--color-text-muted)' }}
                aria-hidden="true"
              />
            </Link>
          ) : (
            <div className="flex-1" aria-hidden="true" />
          )}
        </div>
      </nav>
    </>
  );
}
