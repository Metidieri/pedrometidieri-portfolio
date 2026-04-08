// src/pages/Home.jsx
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
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

/* ── Hero animation config ─────────────────────────────────── */
const EASE_EXPO = [0.22, 1, 0.36, 1];

const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const heroItem = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_EXPO, delay },
  },
});

/* Counter that animates from 0 to target on mount */
function AnimatedCounter({ target, suffix = '' }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = parseInt(target, 10);
          const duration = 1200;
          const startTime = performance.now();
          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.floor(eased * end);
            setCount(start);
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* Code card floating particle */
function FloatingDot({ size, x, y, duration }) {
  return (
    <motion.div
      className="absolute rounded-full opacity-20"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: 'var(--color-primary)',
      }}
      animate={{ y: [0, -15, 5, -10, 0], x: [0, 5, -5, 3, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    />
  );
}

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
      <section
        className="hero-grid-bg relative overflow-hidden py-24 md:py-32 lg:py-40"
        style={{ backgroundColor: 'var(--color-bg)' }}
      >
        <div className="relative container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 lg:gap-20">

          {/* ── Left column: text ──────────────────────────── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={shouldReduce ? {} : heroStagger}
            className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Badge */}
            <motion.div
              variants={shouldReduce ? {} : heroItem(0)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-8"
              style={{
                borderColor: 'rgba(34,197,94,0.3)',
                color: 'var(--color-green)',
                backgroundColor: 'rgba(34,197,94,0.08)',
              }}
            >
              <span
                className="hero-pulse-dot w-2 h-2 rounded-full"
                style={{ backgroundColor: 'var(--color-green)' }}
                aria-hidden="true"
              />
              {t('home.hero.available')}
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={shouldReduce ? {} : heroItem(0.1)}
              className="font-display font-black tracking-[-0.03em] mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#FFFFFF', lineHeight: 1.1 }}
            >
              Pedro Metidieri
            </motion.h1>

            {/* Role — TypeAnimation in terminal style */}
            <motion.div
              variants={shouldReduce ? {} : heroItem(0.2)}
              className="font-mono mb-6 min-h-[1.75rem]"
              style={{ fontSize: '18px', color: 'var(--color-primary)' }}
            >
              <span className="opacity-50" aria-hidden="true">{'> '}</span>
              <TypeAnimation
                sequence={[
                  t('home.hero.title1'), 2000,
                  t('home.hero.title2'), 2000,
                  t('home.hero.title3'), 2000,
                  t('home.hero.title4'), 2000,
                  t('home.hero.title5'), 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={shouldReduce ? {} : heroItem(0.3)}
              className="font-sans leading-[1.7] mb-10 max-w-[480px]"
              style={{ fontSize: '17px', color: 'var(--color-text-muted)' }}
            >
              {t('home.hero.subtitle')}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={shouldReduce ? {} : heroItem(0.4)}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <motion.a
                href="/contacto"
                whileHover={shouldReduce ? {} : { scale: 1.04 }}
                whileTap={shouldReduce ? {} : { scale: 0.96 }}
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-600/25 hover:shadow-xl hover:shadow-indigo-600/30 transition-shadow duration-200 cursor-pointer"
              >
                {t('home.hero.hire')}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
              </motion.a>

              <motion.a
                href="/proyectos"
                whileHover={shouldReduce ? {} : { scale: 1.04 }}
                whileTap={shouldReduce ? {} : { scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border px-7 py-3.5 text-base font-semibold text-white transition-colors duration-200 cursor-pointer"
                style={{ borderColor: 'var(--color-border)' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-surface)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                {t('home.hero.seeProjects')}
              </motion.a>

              <motion.a
                href="/docs/cv-pedro-metidieri.pdf"
                download
                whileHover={shouldReduce ? {} : { scale: 1.04 }}
                whileTap={shouldReduce ? {} : { scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-base font-medium transition-colors duration-200 cursor-pointer"
                style={{ color: 'var(--color-text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                {t('common.downloadCv')}
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={shouldReduce ? {} : heroItem(0.5)}
              className="flex gap-8 mt-12 flex-wrap justify-center lg:justify-start"
            >
              {[
                { value: '5', suffix: '+', label: 'proyectos entregados' },
                { value: '3', suffix: '+', label: 'a\u00f1os experiencia' },
                { value: '100', suffix: '%', label: 'uptime' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-display font-bold text-2xl" style={{ color: '#FFFFFF' }}>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right column: code card (desktop only) ─────── */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.6, ease: EASE_EXPO, delay: 0.3 }}
            className="hidden lg:block w-full lg:w-1/2"
          >
            <div
              className="relative rounded-2xl p-6 overflow-hidden"
              style={{
                background: 'rgba(30,41,59,0.8)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {/* Floating particles */}
              <FloatingDot size={6} x="85%" y="15%" duration={7} />
              <FloatingDot size={4} x="10%" y="75%" duration={9} />
              <FloatingDot size={8} x="70%" y="80%" duration={6} />
              <FloatingDot size={5} x="25%" y="20%" duration={11} />

              {/* Window chrome */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#EF4444' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#F59E0B' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#22C55E' }} />
                <span className="ml-3 text-xs font-mono" style={{ color: 'var(--color-text-muted)' }}>
                  pedro.js
                </span>
              </div>

              {/* Code block */}
              <pre className="font-mono text-sm leading-7 select-none" style={{ color: 'var(--color-text-muted)' }}>
                <code>
                  <span style={{ color: '#C084FC' }}>const</span>{' '}
                  <span style={{ color: '#F8FAFC' }}>pedro</span>{' '}
                  <span style={{ color: '#C084FC' }}>=</span>{' '}
                  <span style={{ color: '#F8FAFC' }}>{'{'}</span>
                  {'\n'}
                  {'  '}<span style={{ color: '#67E8F9' }}>role</span>
                  <span style={{ color: '#F8FAFC' }}>:</span>{' '}
                  <span style={{ color: '#86EFAC' }}>"Full Stack Developer"</span>
                  <span style={{ color: '#F8FAFC' }}>,</span>
                  {'\n'}
                  {'  '}<span style={{ color: '#67E8F9' }}>stack</span>
                  <span style={{ color: '#F8FAFC' }}>:</span>{' '}
                  <span style={{ color: '#F8FAFC' }}>[</span>
                  <span style={{ color: '#86EFAC' }}>"React"</span>
                  <span style={{ color: '#F8FAFC' }}>,</span>{' '}
                  <span style={{ color: '#86EFAC' }}>"Flask"</span>
                  <span style={{ color: '#F8FAFC' }}>,</span>{' '}
                  <span style={{ color: '#86EFAC' }}>"PostgreSQL"</span>
                  <span style={{ color: '#F8FAFC' }}>]</span>
                  <span style={{ color: '#F8FAFC' }}>,</span>
                  {'\n'}
                  {'  '}<span style={{ color: '#67E8F9' }}>available</span>
                  <span style={{ color: '#F8FAFC' }}>:</span>{' '}
                  <span style={{ color: '#FBBF24' }}>true</span>
                  <span style={{ color: '#F8FAFC' }}>,</span>
                  {'\n'}
                  {'  '}<span style={{ color: '#67E8F9' }}>location</span>
                  <span style={{ color: '#F8FAFC' }}>:</span>{' '}
                  <span style={{ color: '#86EFAC' }}>"Extremadura, ES"</span>
                  {'\n'}
                  <span style={{ color: '#F8FAFC' }}>{'}'}</span>
                  <span className="hero-cursor-blink" aria-hidden="true" />
                </code>
              </pre>
            </div>
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
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: 'var(--color-bg)' }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section header */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.6, ease: EASE_EXPO }}
            className="mb-14"
          >
            <h2
              className="font-display font-black tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
            >
              <span style={{ color: '#FFFFFF' }}>Proyectos </span>
              <span style={{ color: 'var(--color-primary)' }}>destacados</span>
            </h2>
            <p
              className="font-sans mt-4 max-w-xl"
              style={{ fontSize: '16px', color: 'var(--color-text-muted)' }}
            >
              {t('home.projects.subtitle')}
            </p>
          </motion.div>

          {/* Featured project (first / MTDR SaaS) — full-width card */}
          {featuredProjects.length > 0 && (() => {
            const hero = featuredProjects[0];
            const heroStack = hero.stack || hero.tech || [];
            const maxPills = 5;
            const visibleStack = heroStack.slice(0, maxPills);
            const remaining = heroStack.length - maxPills;

            return (
              <motion.a
                href={`/proyectos/${hero.slug}`}
                initial={shouldReduce ? {} : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={shouldReduce ? { duration: 0 } : { duration: 0.6, ease: EASE_EXPO }}
                className="group block rounded-2xl overflow-hidden mb-10 cursor-pointer"
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
              >
                <div className="flex flex-col lg:flex-row" style={{ minHeight: '400px' }}>
                  {/* Image — 60% on desktop */}
                  <div className="lg:w-[60%] overflow-hidden" style={{ backgroundColor: 'var(--color-surface-2)' }}>
                    <img
                      src={hero.image}
                      alt={`${hero.title} — captura del proyecto`}
                      width="1905"
                      height="1071"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{ minHeight: '240px' }}
                    />
                  </div>

                  {/* Content — 40% on desktop */}
                  <div className="lg:w-[40%] p-8 lg:p-10 flex flex-col justify-center">
                    {/* Featured badge */}
                    <span
                      className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-semibold mb-5"
                      style={{
                        backgroundColor: 'rgba(99,102,241,0.15)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      Proyecto destacado
                    </span>

                    <h3
                      className="font-display font-semibold mb-3"
                      style={{ fontSize: '22px', color: '#FFFFFF', lineHeight: 1.3 }}
                    >
                      {hero.title}
                    </h3>

                    <p
                      className="font-sans mb-6 leading-relaxed"
                      style={{ fontSize: '15px', color: 'var(--color-text-muted)' }}
                    >
                      {hero.description}
                    </p>

                    {/* Stack pills */}
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

                    {/* CTA button */}
                    <span
                      className="inline-flex items-center gap-2 self-start rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all duration-200 group-hover:shadow-lg group-hover:shadow-indigo-600/25"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      Ver case study
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })()}

          {/* Remaining projects — 3-column grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.slice(1, 4).map((project, i) => {
              const stack = project.stack || project.tech || [];
              const visibleStack = stack.slice(0, 3);

              return (
                <motion.a
                  key={project.id}
                  href={`/proyectos/${project.slug}`}
                  initial={shouldReduce ? {} : { opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={shouldReduce ? { duration: 0 } : {
                    duration: 0.6,
                    ease: EASE_EXPO,
                    delay: (i + 1) * 0.1,
                  }}
                  whileHover={shouldReduce ? {} : {
                    scale: 1.02,
                    boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                    transition: { duration: 0.3 },
                  }}
                  className="group block rounded-xl overflow-hidden cursor-pointer will-change-transform"
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  {/* Image with hover overlay */}
                  <div className="relative overflow-hidden" style={{ height: '60%', minHeight: '200px' }}>
                    <img
                      src={project.image}
                      alt={`${project.title} — captura del proyecto`}
                      width="1905"
                      height="1071"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover overlay with buttons */}
                    <div
                      className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: 'rgba(15,23,42,0.75)' }}
                    >
                      <span
                        className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold text-white"
                        style={{ backgroundColor: 'var(--color-primary)' }}
                      >
                        Ver case study
                        <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </span>
                      {project.url && (
                        <span
                          className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold text-white"
                          style={{ border: '1px solid rgba(255,255,255,0.3)' }}
                        >
                          Ver sitio
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    <h3
                      className="font-display font-semibold mb-2 line-clamp-1"
                      style={{ fontSize: '18px', color: '#FFFFFF' }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="font-sans mb-4 line-clamp-2"
                      style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
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
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* See all link */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.5, delay: 0.4 }}
            className="text-center mt-14"
          >
            <a
              href="/proyectos"
              className="group inline-flex items-center gap-2 font-medium transition-colors duration-200 cursor-pointer"
              style={{ color: 'var(--color-primary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#818CF8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
            >
              {t('home.projects.seeAll')}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
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
