// src/components/PageTransition.jsx
// Fade-in + slide-up sutil al montar una nueva página.
// Se activa cambiando la key por pathname en App.jsx, lo que fuerza
// el remount del componente en cada navegación.

import { useState, useEffect } from 'react';

export default function PageTransition({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Esperar un frame para que el estado inicial (opacity-0) se pinte primero,
    // luego aplicar el estado final (opacity-100) y disparar la transición CSS.
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: '400ms',
        transitionTimingFunction: 'ease-out',
      }}
      className={mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
    >
      {children}
    </div>
  );
}
