// src/components/PageTransition.jsx
import { motion, useReducedMotion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const pageTransition = {
  duration: 0.4,
  ease: [0.4, 0, 0.2, 1],
};

export default function PageTransition({ children }) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
