// src/pages/About.jsx
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight,
  Download,
  MapPin,
  Briefcase,
  GraduationCap,
  Globe,
  Code,
  Code2,
  BookOpen,
  Layers,
  Rocket,
  Shield,
  MessageSquare,
  CheckCircle,
} from 'lucide-react';
import SEO from '../components/SEO';
import logo from '../assets/logo.png';

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

/* ---------- Animated counter (Intersection Observer) ---------- */
function CountUp({ end, suffix = '', duration = 1500 }) {
  const shouldReduce = useReducedMotion();
  const [value, setValue] = useState(shouldReduce ? end : 0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (shouldReduce) return;
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const startTime = performance.now();
            const tick = (now) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(end * eased));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration, shouldReduce]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

/* ---------- Story timeline data ---------- */
const STORY_ITEMS = [
  { key: 'y2020', icon: Code2 },
  { key: 'y2022', icon: BookOpen },
  { key: 'y2023', icon: Layers },
  { key: 'y2024', icon: Rocket },
];

/* ---------- Values data ---------- */
const VALUE_CARDS = [
  { key: 'code', icon: Shield },
  { key: 'comm', icon: MessageSquare },
  { key: 'delivery', icon: CheckCircle },
];

export default function About() {
  const { t } = useTranslation();
  const shouldReduce = useReducedMotion();

  const fadeFromLeft = shouldReduce
    ? { initial: {}, animate: {} }
    : {
        initial: { opacity: 0, x: -40 },
        animate: { opacity: 1, x: 0 },
      };
  const fadeFromRight = shouldReduce
    ? { initial: {}, animate: {} }
    : {
        initial: { opacity: 0, x: 40 },
        animate: { opacity: 1, x: 0 },
      };

  return (
    <>
      <SEO
        title={t('about.seo.title')}
        description={t('about.seo.description')}
        image={logo}
        url="https://pedrometidieri.com/about"
      />

      {/* ============ SECTION 1: Hero personal ============ */}
      <section
        className="transition-colors duration-300"
        style={{
          backgroundColor: 'var(--color-bg)',
          padding: '100px 0 60px',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Left column 55% */}
            <motion.div
              {...fadeFromLeft}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
              className="lg:col-span-7"
            >
              <span
                className="inline-block font-mono uppercase mb-5"
                style={{
                  color: 'var(--color-primary)',
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                }}
              >
                {t('about.label')}
              </span>

              <h1
                className="font-display font-black mb-6 leading-[1.05]"
                style={{
                  color: 'var(--color-text)',
                  fontSize: 'clamp(36px, 6vw, 52px)',
                  fontWeight: 900,
                }}
              >
                {t('about.greeting')}
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #6366F1, #A855F7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {t('about.name')}
                </span>
              </h1>

              <p
                className="font-sans mb-10"
                style={{
                  color: 'var(--color-text-muted)',
                  fontSize: '17px',
                  lineHeight: 1.8,
                  maxWidth: '500px',
                }}
              >
                {t('about.lead')}
              </p>

              {/* Stats row */}
              <div
                className="flex items-center gap-6 sm:gap-10 mb-10"
                role="list"
                aria-label="Key stats"
              >
                <div role="listitem" className="flex flex-col">
                  <span
                    className="font-display font-black"
                    style={{
                      color: 'var(--color-primary)',
                      fontSize: '36px',
                      fontWeight: 900,
                      lineHeight: 1,
                    }}
                  >
                    <CountUp end={5} suffix="+" />
                  </span>
                  <span
                    className="mt-2"
                    style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}
                  >
                    {t('about.stats.projects')}
                  </span>
                </div>

                <div
                  aria-hidden="true"
                  style={{
                    width: '1px',
                    height: '48px',
                    backgroundColor: 'var(--color-border)',
                  }}
                />

                <div role="listitem" className="flex flex-col">
                  <span
                    className="font-display font-black"
                    style={{
                      color: 'var(--color-primary)',
                      fontSize: '36px',
                      fontWeight: 900,
                      lineHeight: 1,
                    }}
                  >
                    <CountUp end={3} suffix="+" />
                  </span>
                  <span
                    className="mt-2"
                    style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}
                  >
                    {t('about.stats.years')}
                  </span>
                </div>

                <div
                  aria-hidden="true"
                  style={{
                    width: '1px',
                    height: '48px',
                    backgroundColor: 'var(--color-border)',
                  }}
                />

                <div role="listitem" className="flex flex-col">
                  <span
                    className="font-display font-black"
                    style={{
                      color: 'var(--color-primary)',
                      fontSize: '36px',
                      fontWeight: 900,
                      lineHeight: 1,
                    }}
                  >
                    <CountUp end={100} suffix="%" />
                  </span>
                  <span
                    className="mt-2"
                    style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}
                  >
                    {t('about.stats.satisfaction')}
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/proyectos"
                  whileHover={shouldReduce ? {} : { y: -2 }}
                  whileTap={shouldReduce ? {} : { scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-medium text-white shadow-lg cursor-pointer transition-shadow duration-300"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    fontSize: '15px',
                  }}
                >
                  {t('about.ctas.viewProjects')}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </motion.a>
                <motion.a
                  href="/docs/cv-pedro-metidieri.pdf"
                  download
                  whileHover={shouldReduce ? {} : { y: -2 }}
                  whileTap={shouldReduce ? {} : { scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-7 py-3.5 font-medium cursor-pointer transition-colors duration-300"
                  style={{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text)',
                    backgroundColor: 'transparent',
                    fontSize: '15px',
                  }}
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  {t('about.ctas.downloadCv')}
                </motion.a>
              </div>
            </motion.div>

            {/* Right column 45% — identity card */}
            <motion.div
              {...fadeFromRight}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '20px',
                  padding: '32px',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.06)',
                }}
              >
                {/* Avatar */}
                <div
                  className="flex items-center justify-center mb-5"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, #6366F1, #A855F7)',
                  }}
                  aria-hidden="true"
                >
                  <span
                    className="font-display text-white"
                    style={{ fontSize: '28px', fontWeight: 700 }}
                  >
                    PM
                  </span>
                </div>

                {/* Name + role */}
                <h2
                  className="font-display mb-1"
                  style={{
                    color: 'var(--color-text)',
                    fontSize: '20px',
                    fontWeight: 600,
                  }}
                >
                  {t('about.card.name')}
                </h2>
                <p
                  className="font-mono mb-5"
                  style={{
                    color: 'var(--color-primary)',
                    fontSize: '14px',
                  }}
                >
                  {t('about.card.role')}
                </p>

                <hr
                  className="my-5"
                  style={{ borderColor: 'var(--color-border)', borderTopWidth: '1px' }}
                />

                {/* Data list */}
                <ul className="flex flex-col gap-3.5">
                  {[
                    [MapPin, t('about.card.location')],
                    [Briefcase, t('about.card.available')],
                    [GraduationCap, t('about.card.education')],
                    [Globe, t('about.card.languages')],
                    [Code, t('about.card.stack')],
                  ].map((entry, i) => {
                    const RowIcon = entry[0];
                    const label = entry[1];
                    return (
                      <li
                        key={i}
                        className="flex items-center"
                        style={{ gap: '10px' }}
                      >
                        <RowIcon
                          className="flex-shrink-0"
                          style={{
                            width: '16px',
                            height: '16px',
                            color: 'var(--color-primary)',
                          }}
                          aria-hidden="true"
                        />
                        <span
                          style={{
                            color: 'var(--color-text-muted)',
                            fontSize: '14px',
                          }}
                        >
                          {label}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <hr
                  className="my-5"
                  style={{ borderColor: 'var(--color-border)', borderTopWidth: '1px' }}
                />

                {/* Open to work badge */}
                <div
                  className="inline-flex items-center gap-2"
                  style={{
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    color: '#16A34A',
                    borderRadius: '999px',
                    padding: '6px 14px',
                    fontSize: '13px',
                    fontWeight: 600,
                  }}
                >
                  <span
                    className="hero-pulse-dot"
                    aria-hidden="true"
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '999px',
                      backgroundColor: '#22C55E',
                      display: 'inline-block',
                    }}
                  />
                  {t('about.card.openToWork')}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 2: Mi historia (timeline) ============ */}
      <section
        className="transition-colors duration-300"
        style={{
          backgroundColor: 'var(--color-surface)',
          padding: '80px 0',
        }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
            className="font-display text-center mb-16"
            style={{
              fontSize: 'clamp(30px, 5vw, 40px)',
              fontWeight: 900,
            }}
          >
            <span style={{ color: 'var(--color-text)' }}>
              {t('about.story.titleMain')}
            </span>{' '}
            <span style={{ color: 'var(--color-primary)' }}>
              {t('about.story.titleAccent')}
            </span>
          </motion.h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line — desktop centered, mobile left */}
            <div
              aria-hidden="true"
              className="absolute top-0 bottom-0 left-6 md:left-1/2 md:-translate-x-1/2"
              style={{
                width: '2px',
                backgroundColor: 'var(--color-border)',
              }}
            />

            <ul className="flex flex-col gap-12 md:gap-16">
              {STORY_ITEMS.map((item, idx) => {
                const Icon = item.icon;
                const isLeft = idx % 2 === 0;
                const fromX = shouldReduce ? 0 : isLeft ? -50 : 50;
                return (
                  <motion.li
                    key={item.key}
                    initial={shouldReduce ? {} : { opacity: 0, x: fromX }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                    className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                      isLeft ? '' : 'md:[&>div:first-child]:order-2'
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`pl-20 md:pl-0 ${
                        isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                      }`}
                    >
                      <p
                        className="font-mono mb-2"
                        style={{
                          color: 'var(--color-primary)',
                          fontSize: '12px',
                        }}
                      >
                        {t(`about.story.items.${item.key}.year`)}
                      </p>
                      <h3
                        className="font-display mb-2"
                        style={{
                          color: 'var(--color-text)',
                          fontSize: '18px',
                          fontWeight: 600,
                        }}
                      >
                        {t(`about.story.items.${item.key}.title`)}
                      </h3>
                      <p
                        style={{
                          color: 'var(--color-text-muted)',
                          fontSize: '15px',
                          lineHeight: 1.7,
                        }}
                      >
                        {t(`about.story.items.${item.key}.text`)}
                      </p>
                    </div>

                    {/* Icon node — absolute positioned over the line */}
                    <div
                      className="absolute top-0 left-6 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center"
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '999px',
                        backgroundColor: 'rgba(99, 102, 241, 0.15)',
                        border: '2px solid var(--color-surface)',
                        transform: 'translateX(-50%)',
                      }}
                    >
                      <Icon
                        style={{
                          width: '20px',
                          height: '20px',
                          color: 'var(--color-primary)',
                        }}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Spacer for alternating column on desktop */}
                    <div className="hidden md:block" />
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ SECTION 3: Valores ============ */}
      <section
        className="transition-colors duration-300"
        style={{
          backgroundColor: 'var(--color-bg)',
          padding: '80px 0',
        }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
            className="font-display text-center mb-4"
            style={{
              fontSize: 'clamp(30px, 5vw, 40px)',
              fontWeight: 900,
            }}
          >
            <span style={{ color: 'var(--color-text)' }}>
              {t('about.values.titleMain')}
            </span>{' '}
            <span style={{ color: 'var(--color-primary)' }}>
              {t('about.values.titleAccent')}
            </span>
          </motion.h2>
          <motion.p
            initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO, delay: 0.1 }}
            className="text-center max-w-xl mx-auto mb-16"
            style={{ color: 'var(--color-text-muted)', fontSize: '16px' }}
          >
            {t('about.values.subtitle')}
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {VALUE_CARDS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.key}
                  initial={shouldReduce ? {} : { opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    duration: 0.5,
                    ease: EASE_OUT_EXPO,
                    delay: shouldReduce ? 0 : idx * 0.15,
                  }}
                  whileHover={
                    shouldReduce
                      ? {}
                      : {
                          y: -6,
                          boxShadow: '0 20px 40px rgba(99, 102, 241, 0.15)',
                          borderColor: 'var(--color-primary)',
                        }
                  }
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '16px',
                    padding: '28px',
                    transition: 'all 300ms ease',
                  }}
                >
                  <div
                    className="flex items-center justify-center mb-5"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    }}
                  >
                    <Icon
                      style={{
                        width: '24px',
                        height: '24px',
                        color: 'var(--color-primary)',
                      }}
                      aria-hidden="true"
                    />
                  </div>
                  <h3
                    className="font-display mb-3"
                    style={{
                      color: 'var(--color-text)',
                      fontSize: '19px',
                      fontWeight: 600,
                    }}
                  >
                    {t(`about.values.cards.${card.key}.title`)}
                  </h3>
                  <p
                    style={{
                      color: 'var(--color-text-muted)',
                      fontSize: '15px',
                      lineHeight: 1.7,
                    }}
                  >
                    {t(`about.values.cards.${card.key}.text`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ SECTION 4: CTA final ============ */}
      <section
        className="relative overflow-hidden transition-colors duration-300"
        style={{
          backgroundColor: 'var(--color-surface)',
          padding: '80px 0',
        }}
      >
        {/* Subtle grid pattern overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hero-grid-bg opacity-40"
          style={{ pointerEvents: 'none' }}
        />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2
              className="font-display mb-5"
              style={{
                color: 'var(--color-text)',
                fontSize: 'clamp(30px, 5vw, 40px)',
                fontWeight: 900,
              }}
            >
              {t('about.final.title')}
            </h2>
            <p
              className="mb-10"
              style={{
                color: 'var(--color-text-muted)',
                fontSize: '17px',
                lineHeight: 1.7,
              }}
            >
              {t('about.final.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contacto"
                whileHover={shouldReduce ? {} : { y: -2 }}
                whileTap={shouldReduce ? {} : { scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 font-medium text-white shadow-xl cursor-pointer transition-shadow duration-300"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  fontSize: '16px',
                }}
              >
                {t('about.final.buttonContact')}
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </motion.a>
              <motion.a
                href="/proyectos"
                whileHover={shouldReduce ? {} : { y: -2 }}
                whileTap={shouldReduce ? {} : { scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-9 py-4 font-medium cursor-pointer transition-colors duration-300"
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text)',
                  backgroundColor: 'transparent',
                  fontSize: '16px',
                }}
              >
                {t('about.final.buttonProjects')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
