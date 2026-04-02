// src/components/ExperienceTimeline.jsx
import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { experience } from '../data/experience';

// --- Timeline SVG line that draws on scroll ---
function TimelineLine({ containerRef, itemCount }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const height = itemCount * 320 + 80;

  return (
    <>
      {/* Desktop center line */}
      <svg
        className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[3px] pointer-events-none"
        style={{ height, zIndex: 0 }}
        aria-hidden="true"
      >
        {/* Background track */}
        <line
          x1="1.5" y1="0" x2="1.5" y2={height}
          stroke="currentColor"
          strokeWidth="3"
          className="text-gray-200 dark:text-gray-800"
        />
        {/* Animated gradient line */}
        <defs>
          <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <motion.line
          x1="1.5" y1="0" x2="1.5" y2={height}
          stroke="url(#line-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </svg>

      {/* Mobile left line */}
      <svg
        className="md:hidden absolute left-[23px] top-0 w-[3px] pointer-events-none"
        style={{ height, zIndex: 0 }}
        aria-hidden="true"
      >
        <line
          x1="1.5" y1="0" x2="1.5" y2={height}
          stroke="currentColor"
          strokeWidth="3"
          className="text-gray-200 dark:text-gray-800"
        />
        <defs>
          <linearGradient id="line-gradient-mobile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <motion.line
          x1="1.5" y1="0" x2="1.5" y2={height}
          stroke="url(#line-gradient-mobile)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </svg>
    </>
  );
}

// --- Timeline dot on the center line ---
function TimelineDot({ index, isCurrent }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      {/* Desktop dot - centered */}
      <motion.div
        ref={ref}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 z-10"
      >
        <div className={`relative flex items-center justify-center ${isCurrent ? 'w-5 h-5' : 'w-4 h-4'}`}>
          {isCurrent && (
            <span className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-30" />
          )}
          <span className={`relative block rounded-full border-4 border-white dark:border-gray-950 shadow-lg ${
            isCurrent
              ? 'w-5 h-5 bg-gradient-to-br from-indigo-500 to-purple-600 shadow-indigo-500/40'
              : 'w-4 h-4 bg-gray-400 dark:bg-gray-600'
          }`} />
        </div>
      </motion.div>

      {/* Mobile dot - left aligned */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        className="md:hidden absolute left-[11px] top-8 z-10"
      >
        <div className={`relative flex items-center justify-center ${isCurrent ? 'w-[26px] h-[26px]' : 'w-5 h-5'}`}>
          {isCurrent && (
            <span className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-30" />
          )}
          <span className={`relative block rounded-full border-[3px] border-white dark:border-gray-950 shadow-lg ${
            isCurrent
              ? 'w-[26px] h-[26px] bg-gradient-to-br from-indigo-500 to-purple-600 shadow-indigo-500/40'
              : 'w-5 h-5 bg-gray-400 dark:bg-gray-600'
          }`} />
        </div>
      </motion.div>
    </>
  );
}

// --- Experience card ---
function ExperienceCard({ job, index, isLeft, isMobile = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const { t } = useTranslation();

  const Icon = job.icon;
  const descriptions = t(`about.experience.${job.jobKey}.description`, { returnObjects: true });

  const variants = isMobile
    ? {
        hidden: { opacity: 0, x: -40, y: 20 },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] } },
      }
    : {
        hidden: { opacity: 0, x: isLeft ? -60 : 60, y: 20 },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] } },
      };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-7 border border-gray-200 dark:border-gray-800 hover:border-indigo-500/40 dark:hover:border-indigo-500/30 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5 transition-[border-color,box-shadow] duration-300"
    >
      {/* Gradient glow on hover */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 -z-10 blur-xl" aria-hidden="true" />

      {/* Header: Icon + Title + Company */}
      <div className="flex items-start gap-4 mb-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
          className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
            job.current
              ? 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25'
              : 'bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
          }`}
        >
          <Icon className={`w-5 h-5 ${job.current ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`} />
        </motion.div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              {t(`about.experience.${job.jobKey}.period`)}
            </span>
            {job.current && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                {t('about.experience.current')}
              </span>
            )}
          </div>
          <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white leading-tight">
            {t(`about.experience.${job.jobKey}.title`)}
          </h3>
          <p className="text-sm font-medium text-indigo-600/80 dark:text-indigo-400/80 mt-0.5">
            {t(`about.experience.${job.jobKey}.company`)}
          </p>
        </div>
      </div>

      {/* Achievement bullets */}
      <ul className="space-y-2.5 mb-5 ml-1">
        {Array.isArray(descriptions) && descriptions.map((desc, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -12 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.4 + i * 0.08 }}
            className="flex items-start gap-2.5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
          >
            <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-indigo-500/70" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {desc}
          </motion.li>
        ))}
      </ul>

      {/* Tech tags with individual animation */}
      <div className="flex flex-wrap gap-2">
        {job.tech.map((tech, techIdx) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
            transition={{
              duration: 0.35,
              delay: index * 0.15 + 0.6 + techIdx * 0.06,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="text-xs px-3 py-1.5 rounded-full font-medium bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200/70 dark:border-indigo-800/50 hover:bg-indigo-100 dark:hover:bg-indigo-950/60 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-colors duration-200 cursor-default"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

// --- Main timeline component ---
export default function ExperienceTimeline() {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="experiencia"
      className="relative py-20 md:py-28 bg-gray-50 dark:bg-gray-950 overflow-hidden transition-colors duration-300"
    >
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-400/5 dark:bg-indigo-600/5 blur-3xl" />
        <div className="absolute bottom-20 -right-40 w-[500px] h-[500px] rounded-full bg-purple-400/5 dark:bg-purple-600/5 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
            {t('experience.badge')}
          </motion.div>

          <motion.h2
            initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t('experience.title')}
          </motion.h2>

          <motion.p
            initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {t('experience.subtitle')}
          </motion.p>
        </div>

        {/* Timeline container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {!shouldReduce && <TimelineLine containerRef={containerRef} itemCount={experience.length} />}

          <div className="relative space-y-12 md:space-y-16">
            {experience.map((job, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={job.id}
                  className="relative pl-14 md:pl-0 md:grid md:grid-cols-[1fr_48px_1fr] md:gap-0 items-start"
                >
                  {/* Desktop: card column */}
                  <div className={`hidden md:block ${isLeft ? '' : 'md:col-start-3'}`}>
                    <ExperienceCard job={job} index={index} isLeft={isLeft} />
                  </div>

                  {/* Desktop: center column (dot) */}
                  <div className="hidden md:block md:col-start-2 relative">
                    <TimelineDot index={index} isCurrent={job.current} />
                  </div>

                  {/* Desktop: empty column */}
                  {isLeft && <div className="hidden md:block" />}

                  {/* Mobile: dot + card */}
                  <div className="md:hidden">
                    <TimelineDot index={index} isCurrent={job.current} />
                    <ExperienceCard job={job} index={index} isLeft={false} isMobile />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.5, delay: 0.3 }}
          className="text-center mt-16 md:mt-20"
        >
          <motion.a
            href="/contacto"
            whileHover={shouldReduce ? {} : { scale: 1.05 }}
            whileTap={shouldReduce ? {} : { scale: 0.95 }}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-8 py-4 text-lg font-medium text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-shadow duration-300"
          >
            {t('experience.cta')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
