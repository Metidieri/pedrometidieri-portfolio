// src/hooks/useReveal.js
// Custom hook para detectar cuándo un elemento entra en el viewport
// y disparar animaciones de entrada (reveal on scroll).

import { useRef, useState, useEffect } from 'react';

/**
 * @param {object} options
 * @param {number}  options.threshold    - % del elemento visible para disparar (0–1). Default: 0.1
 * @param {string}  options.rootMargin   - Margen alrededor del viewport. Default: "0px"
 * @param {boolean} options.triggerOnce  - Solo animar una vez. Default: true
 * @returns {{ ref: React.RefObject, isVisible: boolean }}
 */
export default function useReveal({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.disconnect();
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}
