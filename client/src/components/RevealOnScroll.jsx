// src/components/RevealOnScroll.jsx
// Wrapper ligero que anima sus hijos cuando entran en el viewport.
// No causa layout shift: usa opacity + transform (sin reservar espacio extra).
// Las transiciones se aplican con inline styles — sin depender del wildcard global.

import useReveal from '../hooks/useReveal';

const INITIAL_CLASSES = {
  up:    'opacity-0 translate-y-8',
  down:  'opacity-0 -translate-y-8',
  left:  'opacity-0 translate-x-8',
  right: 'opacity-0 -translate-x-8',
  fade:  'opacity-0',
};

const VISIBLE_CLASSES = 'opacity-100 translate-x-0 translate-y-0';

/**
 * @param {object}  props
 * @param {React.ReactNode} props.children
 * @param {'up'|'down'|'left'|'right'|'fade'} props.direction - Dirección de entrada. Default: 'up'
 * @param {number}  props.delay      - Retardo antes de la animación (ms). Default: 0
 * @param {number}  props.duration   - Duración de la animación (ms). Default: 600
 * @param {string}  props.className  - Clases adicionales para el wrapper
 * @param {number}  props.threshold  - % del elemento visible para disparar. Default: 0.1
 */
export default function RevealOnScroll({
  children,
  direction = 'up',
  delay = 0,
  duration = 600,
  className = '',
  threshold = 0.1,
}) {
  const { ref, isVisible } = useReveal({ threshold });

  const transitionStyle = {
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDelay: `${delay}ms`,
  };

  const stateClasses = isVisible
    ? VISIBLE_CLASSES
    : (INITIAL_CLASSES[direction] ?? INITIAL_CLASSES.fade);

  return (
    <div
      ref={ref}
      style={transitionStyle}
      className={`${stateClasses} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
