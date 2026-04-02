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
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={shouldReduce ? {} : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                {t('about.title')}
              </h1>
            </motion.div>
            <motion.p
              initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.5, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
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
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <RevealOnScroll direction="left">
              <div className="flex justify-center">
                <div className="relative group">
                  {/* Glow behind photo */}
                  <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" aria-hidden="true" />
                  <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800">
                    <img
                      src={logo}
                      alt={t('about.photoAlt')}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={100}>
              <div className="space-y-6 text-lg">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('about.bio.p1')}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('about.bio.p2')}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
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
                    className="inline-flex items-center gap-3 rounded-full border-2 border-gray-300 dark:border-gray-600 px-8 py-4 text-lg font-medium text-gray-700 dark:text-gray-300 hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-colors duration-200 will-change-transform"
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
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <AnimatedTitle
            className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
          >
            {t('about.experience.title')}
          </AnimatedTitle>
          <motion.p
            initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
            className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-xl mx-auto"
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
                  className="flex items-center gap-4 p-5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-indigo-500/40 dark:hover:border-indigo-500/30 transition-colors duration-200 will-change-transform cursor-default"
                >
                  <div className={`flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center ${
                    job.current
                      ? 'bg-gradient-to-br from-indigo-500 to-purple-600'
                      : 'bg-gray-200 dark:bg-gray-800'
                  }`}>
                    <Icon className={`w-5 h-5 ${job.current ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                      {t(`about.experience.${job.jobKey}.title`)}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
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
              className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors duration-200"
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
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black text-center">
          <div className="container mx-auto px-4">
            <AnimatedTitle
              className="font-display text-3xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              {t('about.final.title')}
            </AnimatedTitle>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
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
