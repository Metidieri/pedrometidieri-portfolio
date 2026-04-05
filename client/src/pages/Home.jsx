// src/pages/Home.jsx
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import logo from '../assets/logo.png';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import TechStack from '../components/TechStack';
import { TypeAnimation } from 'react-type-animation';
import Testimonios from '../components/Testimonios';
import RevealOnScroll from '../components/RevealOnScroll';
import AnimatedTitle from '../components/AnimatedTitle';
import SectionDivider from '../components/SectionDivider';
import { useTranslation } from 'react-i18next';
import { skillCategories } from '../data/skills';
import { featuredProjects } from '../data/projects';
import {
  staggerContainer,
  fadeInUp,
  hoverScale,
  viewportOnce,
} from '../lib/motion';

const stagger = staggerContainer(0.1);

export default function Home() {
  const { t } = useTranslation();
  const shouldReduce = useReducedMotion();

  return (
    <>
      <SEO
        title={t('home.seo.title')}
        description={t('home.seo.description')}
        image="/og-image.png"
        url="https://pedrometidieri.com"
      />
      <JsonLd />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-24 md:py-32 transition-colors duration-300">
        {/* Animated decorative blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-3xl animate-float-slow will-change-transform" />
          <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-purple-400/10 dark:bg-purple-600/10 blur-3xl animate-float-slow-reverse will-change-transform" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-pink-400/5 dark:bg-pink-600/5 blur-3xl animate-float-slow will-change-transform" />
        </div>

        <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Photo with glow ring */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative group">
              {/* Animated glow ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 group-hover:opacity-50 blur-lg transition-opacity duration-500" aria-hidden="true" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500 dark:border-indigo-600 shadow-2xl shadow-indigo-500/30 dark:shadow-indigo-600/30">
                <img
                  src={logo}
                  alt={t('home.hero.imageAlt')}
                  width="375"
                  height="375"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/30 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Text + CTA */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              {t('home.hero.available')}
            </motion.div>

            {/* Animated gradient title — min-h reserves space for up to 3 lines at each breakpoint
                (base text-4xl lh 2.5rem × 3 = 7.5rem; md text-6xl lh 3.75rem × 3 = 11.25rem;
                lg text-7xl lh 4.5rem × 3 = 13.5rem) so the typewriter cannot shift layout. */}
            <motion.h1 variants={fadeInUp} className="block font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white min-h-[7.5rem] md:min-h-[11.25rem] lg:min-h-[13.5rem]">
              <TypeAnimation
                sequence={[
                  t('home.hero.title1'), 2000,
                  t('home.hero.title2'), 2000,
                  t('home.hero.title3'), 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 animate-gradient-text"
              />
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto md:mx-0 mb-10">
              {t('home.hero.subtitle')}
            </motion.p>

            {/* CTA buttons with spring physics */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <motion.a
                href="/contacto"
                {...hoverScale}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-10 py-5 text-xl font-medium text-white shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-shadow duration-200 will-change-transform"
              >
                {t('home.hero.hire')}
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-200" />
              </motion.a>

              <motion.a
                href="/proyectos"
                {...hoverScale}
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-indigo-600 px-10 py-5 text-xl font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-colors duration-200 will-change-transform"
              >
                {t('home.hero.seeProjects')}
              </motion.a>

              <motion.a
                href="/docs/cv-pedro-metidieri.pdf"
                download
                {...hoverScale}
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-gray-300 dark:border-gray-600 px-10 py-5 text-xl font-medium text-gray-700 dark:text-gray-300 hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-colors duration-200 will-change-transform"
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                {t('common.downloadCv')}
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionDivider variant="dots" />

      {/* ═══════════════════ ABOUT / SKILLS ═══════════════════ */}
      <section className="py-20 md:py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <RevealOnScroll direction="left">
              <div>
                <AnimatedTitle
                  className="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
                  center={false}
                >
                  {t('home.about.title')}
                </AnimatedTitle>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {t('home.about.p1')}
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('home.about.p2')}
                </p>
              </div>
            </RevealOnScroll>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-2 gap-6"
            >
              {skillCategories.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.key}
                    variants={fadeInUp}
                    whileHover={{
                      y: -6,
                      boxShadow: '0 20px 40px rgba(99, 102, 241, 0.15)',
                      borderColor: 'rgba(99, 102, 241, 0.5)',
                      transition: { type: 'spring', stiffness: 300, damping: 20 },
                    }}
                    className="bg-gray-100 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-300 dark:border-gray-800 transition-colors duration-200 cursor-default will-change-transform"
                  >
                    <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-500 mb-4" />
                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                      {t(`home.skills.${skill.key}.label`)}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t(`home.skills.${skill.key}.items`)}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" />

      {/* ═══════════════════ TECH STACK ═══════════════════ */}
      <TechStack />

      <SectionDivider variant="gradient" />

      {/* ═══════════════════ FEATURED PROJECTS ═══════════════════ */}
      <section className="py-20 md:py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <AnimatedTitle
            className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
          >
            {t('home.projects.title')}
          </AnimatedTitle>
          <motion.p
            initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
            className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            {t('home.projects.subtitle')}
          </motion.p>

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {featuredProjects.map((project) => (
                <motion.a
                  key={project.id}
                  href={project.link}
                  target={project.external ? '_blank' : undefined}
                  rel={project.external ? 'noopener noreferrer' : undefined}
                  variants={fadeInUp}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 25px 50px rgba(99, 102, 241, 0.2)',
                    transition: { type: 'spring', stiffness: 300, damping: 20 },
                  }}
                  className="group bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-300 dark:border-gray-800 hover:border-indigo-500 dark:hover:border-indigo-600 transition-colors duration-300 will-change-transform cursor-pointer"
                >
                  <div className="aspect-video overflow-hidden bg-gray-300 dark:bg-gray-700">
                    <img
                      src={project.image}
                      alt={`${project.title} — captura del proyecto`}
                      width="1905"
                      height="1071"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
          </motion.div>

          <motion.div
            initial={shouldReduce ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="/proyectos"
              className="group inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors duration-200"
            >
              {t('home.projects.seeAll')}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>
        </div>
      </section>

      <SectionDivider variant="dots" />

      {/* ═══════════════════ TESTIMONIOS ═══════════════════ */}
      <RevealOnScroll direction="fade" threshold={0.05}>
        <Testimonios />
      </RevealOnScroll>

      {/* ═══════════════════ FINAL CTA ═══════════════════ */}
      <RevealOnScroll direction="fade">
        <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4 text-center">
            <AnimatedTitle
              className="font-display text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              {t('home.cta.title')}
            </AnimatedTitle>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              {t('home.cta.subtitle')}
            </p>
            <motion.a
              href="/contacto"
              {...hoverScale}
              className="group inline-flex items-center gap-3 rounded-full bg-indigo-600 px-10 py-5 text-xl font-medium text-white hover:bg-indigo-700 shadow-xl shadow-indigo-900/30 dark:shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/25 transition-colors duration-200 will-change-transform"
            >
              {t('home.cta.button')}
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
          </div>
        </section>
      </RevealOnScroll>
    </>
  );
}
