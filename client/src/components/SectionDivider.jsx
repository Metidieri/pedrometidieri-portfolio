// src/components/SectionDivider.jsx
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Animated decorative separator between sections.
 * @param {'gradient'|'dots'|'wave'} variant
 */
export default function SectionDivider({ variant = 'gradient', className = '' }) {
  const shouldReduce = useReducedMotion();

  if (variant === 'dots') {
    return (
      <div className={`flex items-center justify-center gap-3 py-8 ${className}`} aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={shouldReduce ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.4, delay: i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
            className={`rounded-full ${
              i === 1
                ? 'w-3 h-3 bg-indigo-500'
                : 'w-2 h-2 bg-indigo-400/60 dark:bg-indigo-500/60'
            }`}
          />
        ))}
      </div>
    );
  }

  if (variant === 'wave') {
    return (
      <div className={`relative overflow-hidden py-4 ${className}`} aria-hidden="true">
        <motion.div
          initial={{ x: '-100%' }}
          whileInView={shouldReduce ? { x: 0 } : { x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={shouldReduce ? { duration: 0 } : { duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent"
        />
      </div>
    );
  }

  // Default: gradient line with animated width
  return (
    <div className={`flex items-center justify-center py-6 ${className}`} aria-hidden="true">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={shouldReduce ? { scaleX: 1, opacity: 1 } : { scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={shouldReduce ? { duration: 0 } : { duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="w-24 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full origin-center"
      />
    </div>
  );
}
