// src/components/RevealOnScroll.jsx
import { motion, useReducedMotion } from 'framer-motion';

const DIRECTIONS = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: 32 },
  right: { x: -32 },
  fade: {},
};

/**
 * @param {'up'|'down'|'left'|'right'|'fade'} direction
 * @param {number} delay - seconds
 * @param {number} duration - seconds
 * @param {number} threshold - 0-1
 */
export default function RevealOnScroll({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  threshold = 0.1,
}) {
  const shouldReduce = useReducedMotion();
  // Convert ms delays from old API to seconds
  const delayInSeconds = delay > 1 ? delay / 1000 : delay;

  const offset = DIRECTIONS[direction] ?? {};

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration,
        delay: delayInSeconds,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
