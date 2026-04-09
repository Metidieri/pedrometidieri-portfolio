// src/components/TechStack.jsx
// Infinite ticker carousel — four rows by category, theme-aware logos.
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'framer-motion';

/* ── Theme detection hook ──────────────────────────────── */
function useThemeDetect() {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  return isDark;
}

/* ── Icon theme types ──────────────────────────────────── */
// neutral  → works on any background, no filter
// dark     → black icon, needs invert in dark mode
// light    → white icon, needs invert in light mode
// themed   → has separate -blanco/-negro variants

/* ── Row data ──────────────────────────────────────────── */
const frontend = [
  { name: 'React', icon: '/tech/react.svg', theme: 'neutral' },
  { name: 'Next.js', icon: '/tech/nextjs.svg', theme: 'dark' },
  { name: 'TypeScript', icon: '/tech/typescript.svg', theme: 'neutral' },
  { name: 'JavaScript', icon: '/tech/javascript.svg', theme: 'neutral' },
  { name: 'HTML5', icon: '/tech/html5.svg', theme: 'neutral' },
  { name: 'CSS3', icon: '/tech/css3.svg', theme: 'neutral' },
  { name: 'Tailwind CSS', icon: '/tech/tailwind.svg', theme: 'neutral' },
  { name: 'Framer Motion', icon: '/tech/framer-motion.svg', theme: 'light' },
  { name: 'Vite', icon: '/tech/vite.svg', theme: 'neutral' },
  { name: 'React Router', icon: '/tech/react-router.svg', theme: 'dark' },
  { name: 'Bootstrap', icon: '/tech/bootstrap.svg', theme: 'neutral' },
];

const backend = [
  { name: 'Python', icon: '/tech/python.svg', theme: 'neutral' },
  { name: 'Flask', icon: '/tech/flask.svg', theme: 'dark' },
  { name: 'Node.js', icon: '/tech/nodejs.svg', theme: 'neutral' },
  { name: 'Express', icon: '/tech/express.svg', theme: 'dark' },
  { name: 'PHP', icon: '/tech/php.svg', theme: 'neutral' },
  { name: 'PostgreSQL', icon: '/tech/postgresql.svg', theme: 'neutral' },
  { name: 'MySQL', icon: '/tech/mysql.svg', theme: 'neutral' },
  { name: 'Supabase', icon: '/tech/supabase.svg', theme: 'neutral' },
  { name: 'REST APIs', icon: '/tech/rest-api.svg', theme: 'dark' },
  { name: 'TanStack Query', icon: '/tech/tanstack', theme: 'themed' },
  { name: 'Claude API', icon: '/tech/claude.svg', theme: 'neutral' },
];

const devops = [
  { name: 'Vercel', icon: '/tech/vercel', theme: 'themed' },
  { name: 'Railway', icon: '/tech/railway.svg', theme: 'dark' },
  { name: 'Docker', icon: '/tech/docker.svg', theme: 'neutral' },
  { name: 'Git', icon: '/tech/git.svg', theme: 'neutral' },
  { name: 'GitHub', icon: '/tech/github.svg', theme: 'dark' },
  { name: 'Hostinger', icon: '/tech/hostinger.svg', theme: 'neutral' },
  { name: 'CI/CD', icon: '/tech/cicd.svg', theme: 'dark' },
  { name: 'Serverless', icon: '/tech/serverless.svg', theme: 'neutral' },
];

const aiTools = [
  { name: 'OpenAI', icon: '/tech/openai.svg', theme: 'dark' },
  { name: 'Grok', icon: '/tech/grok.svg', theme: 'dark' },
  { name: 'LangChain', icon: '/tech/langchain.svg', theme: 'neutral' },
  { name: 'Claude AI', icon: '/tech/claude.svg', theme: 'neutral' },
];

/* ── Resolve icon src and filter ───────────────────────── */
function resolveIcon(item, isDark) {
  const { icon, theme } = item;

  if (theme === 'themed') {
    const src = isDark ? `${icon}-blanco.svg` : `${icon}-negro.svg`;
    return { src, filter: 'none' };
  }

  if (theme === 'dark') {
    return { src: icon, filter: isDark ? 'invert(1)' : 'none' };
  }

  if (theme === 'light') {
    return { src: icon, filter: isDark ? 'none' : 'invert(1)' };
  }

  // neutral
  return { src: icon, filter: 'none' };
}

/* ── Pill component ────────────────────────────────────── */
function TechPill({ name, icon, theme, isDark }) {
  const { src, filter } = resolveIcon({ icon, theme }, isDark);

  return (
    <span
      className="ticker-pill inline-flex items-center flex-shrink-0 rounded-full border transition-colors duration-200 cursor-default"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
        padding: '10px 20px',
        gap: '10px',
      }}
    >
      <img
        src={src}
        alt=""
        aria-hidden="true"
        width="20"
        height="20"
        className="w-5 h-5 object-contain flex-shrink-0"
        style={{ filter }}
        loading="lazy"
        decoding="async"
      />
      <span
        className="font-sans font-medium whitespace-nowrap"
        style={{ fontSize: '14px', color: 'var(--color-text)' }}
      >
        {name}
      </span>
    </span>
  );
}

/* ── Ticker row ────────────────────────────────────────── */
function TickerRow({ items, reverse = false, speed, label, isDark }) {
  const doubled = [...items, ...items];

  return (
    <div>
      {/* Row label */}
      <div
        className="container mx-auto px-4 max-w-6xl mb-2"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--color-text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}
      >
        {label}
      </div>

      {/* Ticker */}
      <div
        className="ticker-row relative overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div
          className={`ticker-track inline-flex gap-4 ${reverse ? 'ticker-reverse' : 'ticker-forward'}`}
          style={{
            '--ticker-speed': `${speed}s`,
            '--ticker-speed-mobile': `${Math.round(speed * 0.6)}s`,
          }}
          aria-hidden="true"
        >
          {doubled.map((tech, i) => (
            <TechPill key={`${tech.name}-${i}`} {...tech} isDark={isDark} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Main component ────────────────────────────────────── */
export default function TechStack() {
  const { t } = useTranslation();
  const shouldReduce = useReducedMotion();
  const isDark = useThemeDetect();

  return (
    <section
      className="py-16 md:py-24 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Title */}
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={
            shouldReduce
              ? { duration: 0 }
              : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
          }
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="font-display font-black"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
          >
            <span style={{ color: 'var(--color-text)' }}>
              {t('techStack.tickerTitle')}{' '}
            </span>
            <span style={{ color: 'var(--color-primary)' }}>
              {t('techStack.tickerAccent')}
            </span>
          </h2>
          <p
            className="font-sans mt-4 max-w-lg mx-auto"
            style={{ fontSize: '16px', color: 'var(--color-text-muted)' }}
          >
            {t('techStack.tickerSubtitle')}
          </p>
        </motion.div>
      </div>

      {/* Ticker rows — full-bleed */}
      <div className="flex flex-col" style={{ gap: '16px' }}>
        <TickerRow
          items={frontend}
          speed={35}
          label="// frontend"
          isDark={isDark}
        />
        <TickerRow
          items={backend}
          reverse
          speed={30}
          label="// backend"
          isDark={isDark}
        />
        <TickerRow
          items={devops}
          speed={28}
          label="// devops"
          isDark={isDark}
        />
        <TickerRow
          items={aiTools}
          reverse
          speed={32}
          label="// ia & tools"
          isDark={isDark}
        />
      </div>
    </section>
  );
}
