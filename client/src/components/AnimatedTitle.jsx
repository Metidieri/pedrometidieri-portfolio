// src/components/AnimatedTitle.jsx
import { motion, useReducedMotion } from 'framer-motion';
import { viewportOnce } from '../lib/motion';

/**
 * Section title with fade-up reveal + animated underline accent.
 */
export default function AnimatedTitle({
  children,
  as: Tag = 'h2',
  className = '',
  underline = true,
  underlineColor = 'from-indigo-500 via-purple-500 to-pink-500',
  center = true,
  delay = 0,
}) {
  const shouldReduce = useReducedMotion();

  return (
    <div className={center ? 'text-center' : ''}>
      <motion.div
        initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={shouldReduce ? { duration: 0 } : { duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      >
        <Tag className={className}>
          {children}
        </Tag>
      </motion.div>
      {underline && (
        <motion.div
          initial={shouldReduce ? {} : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportOnce}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.6, delay: delay + 0.3, ease: [0.4, 0, 0.2, 1] }}
          className={`mt-3 mx-auto h-1 w-16 rounded-full bg-gradient-to-r ${underlineColor} origin-center ${center ? '' : 'mx-0'}`}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
