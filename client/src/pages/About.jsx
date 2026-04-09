// src/pages/About.jsx
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import RevealOnScroll from '../components/RevealOnScroll';
import AnimatedTitle from '../components/AnimatedTitle';
import SectionDivider from '../components/SectionDivider';
import { ArrowRight, Download, Briefcase } from 'lucide-react';
import logo from '../assets/logo.png';
import { experience } from '../data/experience';
import {
  staggerContainer,
  fadeInUp,
  hoverScale,
  viewportOnce,
} from '../lib/motion';

const stagger = staggerContainer(0.1);

export default function About() {
  const { t } = useTranslation();
  const shouldReduce = useReducedMotion();

  return (
    <>
      <SEO
        title={t('about.seo.title')}
        description={t('about.seo.description')}
        image={logo}
        url="https://pedrometidieri.com/about"
      />

      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 transition-colors duration-300" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={shouldReduce ? {} : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
                {t('about.title')}
              </h1>
            </motion.div>
            <motion.p
              initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.5, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="text-2xl max-w-2xl mx-auto"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {t('about.subtitle')}
            </motion.p>
            {/* Animated underline */}
            <motion.div
              initial={shouldReduce ? {} : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="mt-4 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-center"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <SectionDivider variant="dots" />

      {/* Foto + Bio */}
      <section className="py-16 transition-colors duration-300" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <RevealOnScroll direction="left">
              <div className="flex justify-center">
                <div className="relative group">
                  {/* Glow behind photo */}
                  <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" aria-hidden="true" />
                  <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-8" style={{ borderColor: 'var(--color-surface)' }}>
                    <img
                      src={logo}
                      alt={t('about.photoAlt')}
                      width="375"
                      height="375"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={100}>
              <div className="space-y-6 text-lg">
                <p className="leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {t('about.bio.p1')}
                </p>
                <p className="leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {t('about.bio.p2')}
                </p>
                <p className="leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {t('about.bio.p3')}
                </p>

                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="/contacto"
                    {...hoverScale}
                    className="inline-flex items-center gap-3 rounded-full bg-indigo-600 px-8 py-4 text-lg font-medium text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-colors duration-200 will-change-transform"
                  >
                    {t('about.cta')}
                    <ArrowRight className="h-6 w-6" aria-hidden="true" />
                  </motion.a>
                  <motion.a
                    href="/docs/cv-pedro-metidieri.pdf"
                    download
                    {...hoverScale}
                    className="inline-flex items-center gap-3 rounded-full border-2 px-8 py-4 text-lg font-medium transition-colors duration-200 will-change-transform"
                    style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
                  >
                    <Download className="h-5 w-5" aria-hidden="true" />
                    {t('common.downloadCv')}
                  </motion.a>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" />

      {/* Experiencia - resumen con link */}
      <section className="py-20 transition-colors duration-300" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container mx-auto px-4">
          <AnimatedTitle
            className="font-display text-3xl md:text-4xl font-bold text-center mb-4"
            style={{ color: 'var(--color-text)' }}
          >
            {t('about.experience.title')}
          </AnimatedTitle>
          <motion.p
            initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
            className="text-center mb-12 max-w-xl mx-auto"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {t('experience.subtitle')}
          </motion.p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-3xl mx-auto space-y-6"
          >
            {experience.map((job) => {
              const Icon = job.icon;
              return (
                <motion.div
                  key={job.id}
                  variants={fadeInUp}
                  whileHover={{
                    y: -4,
                    boxShadow: '0 12px 30px rgba(99, 102, 241, 0.12)',
                    transition: { type: 'spring', stiffness: 300, damping: 20 },
                  }}
                  className="flex items-center gap-4 p-5 rounded-xl border transition-colors duration-200 will-change-transform cursor-default"
                  style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
                >
                  <div
                    className={`flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center ${
                      job.current ? 'bg-gradient-to-br from-indigo-500 to-purple-600' : ''
                    }`}
                    style={job.current ? {} : { backgroundColor: 'var(--color-surface-2)' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: job.current ? '#FFFFFF' : 'var(--color-text-muted)' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm md:text-base" style={{ color: 'var(--color-text)' }}>
                      {t(`about.experience.${job.jobKey}.title`)}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                      {t(`about.experience.${job.jobKey}.company`)} · {t(`about.experience.${job.jobKey}.period`)}
                    </p>
                  </div>
                  {job.current && (
                    <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                      {t('about.experience.current')}
                    </span>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={shouldReduce ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.5, delay: 0.4 }}
            className="text-center mt-10"
          >
            <motion.a
              href="/experiencia"
              {...hoverScale}
              className="inline-flex items-center gap-2 font-medium transition-colors duration-200"
              style={{ color: 'var(--color-primary)' }}
            >
              <Briefcase className="w-4 h-4" />
              {t('experience.seeAll')}
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* CTA final */}
      <RevealOnScroll direction="fade">
        <section className="py-20 text-center" style={{ background: 'linear-gradient(to bottom, var(--color-bg), var(--color-surface))' }}>
          <div className="container mx-auto px-4">
            <AnimatedTitle
              className="font-display text-3xl font-bold mb-6"
              style={{ color: 'var(--color-text)' }}
            >
              {t('about.final.title')}
            </AnimatedTitle>
            <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: 'var(--color-text-muted)' }}>
              {t('about.final.subtitle')}
            </p>
            <motion.a
              href="/contacto"
              {...hoverScale}
              className="inline-block rounded-full bg-indigo-600 px-10 py-5 text-xl font-medium text-white hover:bg-indigo-700 shadow-xl hover:shadow-xl hover:shadow-indigo-500/25 transition-colors duration-200 will-change-transform"
            >
              {t('about.final.button')}
            </motion.a>
          </div>
        </section>
      </RevealOnScroll>
    </>
  );
}
