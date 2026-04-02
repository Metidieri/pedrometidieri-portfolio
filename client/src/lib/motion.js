// Shared Framer Motion variants and utilities

const EASE_OUT = [0.4, 0, 0.2, 1];

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

export const staggerContainer = (staggerDelay = 0.1) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: staggerDelay },
  },
});

export const hoverScale = {
  whileHover: { scale: 1.05, transition: { type: 'spring', stiffness: 400, damping: 17 } },
  whileTap: { scale: 0.95, transition: { type: 'spring', stiffness: 400, damping: 17 } },
};

export const viewportOnce = { once: true, amount: 0.2 };
