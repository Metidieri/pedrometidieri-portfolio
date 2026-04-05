// src/data/projects.js
// Proyectos reales del portfolio

export const projects = [
  {
    id: 1,
    slug: 'el-aperitivo-talarrubias',
    title: 'El Aperitivo Talarrubias',
    description:
      'Carta digital con código QR para bar-restaurante. Mobile-first, sin necesidad de app nativa.',
    longDescription:
      'Carta digital interactiva con acceso vía QR para Bar El Aperitivo (Talarrubias, Badajoz). Diseñada mobile-first con navegación por categorías, sistema visual de alérgenos, animaciones suaves y carga optimizada. Desplegada con dominio propio y pipeline de actualizaciones sin coste para el cliente.',
    client: 'Bar El Aperitivo — Talarrubias (Badajoz)',
    challenge:
      'El bar necesitaba una carta digital accesible mediante QR que no obligara al cliente a descargar una app nativa, con capacidad de actualización rápida del menú y coste operativo cero.',
    solution:
      'Web app mobile-first con React 19 + Vite + Tailwind, navegación por categorías animada con Framer Motion, sistema visual de alérgenos y splash screen personalizado. Despliegue en Vercel con CI/CD desde Git para publicar cambios de menú en segundos.',
    decisions: [
      'Vite como bundler por velocidad de build y HMR en desarrollo',
      'Framer Motion para transiciones entre categorías, respetando prefers-reduced-motion',
      'Lazy loading de imágenes del menú y formato WebP para optimizar carga en 3G/4G',
      'Despliegue en Vercel con dominio propio y CI/CD desde Git (actualizaciones sin coste)',
    ],
    result:
      'Carta digital en producción en elaperitivotalarrubias.com con dominio propio. El cliente puede actualizar platos y precios vía Git sin coste por cambio, y eliminó las cartas físicas reimpresas.',
    tech: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    image: '/projects/elaperitivo-index.webp',
    link: 'https://www.elaperitivotalarrubias.com/',
    github: null,
    category: 'web',
    external: true,
  },
  {
    id: 2,
    slug: 'casa-de-la-cultura',
    title: 'Casa de la Cultura',
    description:
      'Carta digital QR para café-bar con animaciones cinéticas y paleta extremeña.',
    longDescription:
      'Carta digital para Café Bar Casa de la Cultura (Esparragosa de Lares). Resuelve la misma necesidad que El Aperitivo pero con una identidad visual diferenciada: animaciones cinéticas, tipografía de carácter y paleta de colores inspirada en Extremadura.',
    client: 'Café Bar Casa de la Cultura — Esparragosa de Lares (Badajoz)',
    challenge:
      'Misma necesidad que El Aperitivo: carta digital QR sin app nativa. Requería además una identidad visual propia, diferenciada del primer proyecto, con paleta extremeña y animaciones más cinéticas.',
    solution:
      'Reutilización de la arquitectura de El Aperitivo (React 19 + Vite + Tailwind v4 + Framer Motion) adaptando paleta, tipografía y sistema de animaciones. Tailwind v4 permitió iterar rápido sobre el nuevo sistema de diseño.',
    decisions: [
      'Tailwind CSS v4 con variables CSS nativas para el sistema de color extremeño',
      'Animaciones cinéticas con Framer Motion (stagger + ease personalizados)',
      'Arquitectura compartida con El Aperitivo para reducir tiempo de desarrollo',
      'Despliegue en Vercel con CI/CD desde Git',
    ],
    result:
      'Web desplegada en Vercel con CI/CD activo. El cliente actualiza contenido vía Git y los cambios se publican automáticamente.',
    tech: ['React 19', 'Vite', 'Tailwind CSS v4', 'Framer Motion', 'Vercel'],
    image: '/projects/casa-de-la-cultura.webp', // pendiente de añadir
    link: null, // pendiente de publicar URL
    github: null,
    category: 'web',
    external: true,
  },
  {
    id: 3,
    slug: 'mtdr',
    title: 'MTDR Servicios Digitales',
    description:
      'Landing page de la agencia propia, enfocada en clínicas dentales y negocios locales.',
    longDescription:
      'Landing page de MTDR Servicios Digitales, la agencia propia enfocada en desarrollo web, automatización y SEO para clínicas dentales y pymes en España. Diseño minimalista, claro y orientado a conversión.',
    client: 'MTDR Servicios Digitales — agencia propia',
    challenge:
      'Necesitaba una landing corporativa que posicionara la agencia ante clínicas dentales y negocios locales, transmitiendo profesionalidad y capacidad técnica sin fricción.',
    solution:
      'Landing one-page con React 19 + Tailwind CSS, enfocada en velocidad de carga y mensaje directo. DNS gestionado en Hostinger apuntando al despliegue de Vercel.',
    decisions: [
      'React 19 + Tailwind CSS para iteración rápida del diseño',
      'Despliegue en Vercel con CI/CD y dominio conectado vía Hostinger DNS',
      'Arquitectura ligera sin framework pesado (no Next.js) al ser una landing estática',
    ],
    result:
      'Landing en producción en mtdr.es, sirviendo como primer punto de contacto comercial de la agencia.',
    tech: ['React 19', 'Tailwind CSS', 'Vercel', 'Hostinger DNS'],
    image: '/projects/mtdr-landing.webp',
    link: 'https://mtdr.es/',
    github: null,
    category: 'web',
    external: true,
  },
  {
    id: 4,
    slug: 'portfolio',
    title: 'Portfolio Personal',
    description:
      'Portfolio profesional bilingüe con dark mode, i18n y Serverless Functions.',
    longDescription:
      'Portfolio personal en pedrometidieri.com. Sitio bilingüe (ES/EN), mobile-first, con dark mode, accesibilidad WCAG, animaciones Framer Motion y formulario de contacto protegido mediante Serverless Functions.',
    client: 'Proyecto propio — marca personal Pedro Metidieri',
    challenge:
      'Necesitaba una presencia web profesional como desarrollador full-stack que mostrara case studies reales, funcionara en dos idiomas y protegiera las API keys del formulario de contacto.',
    solution:
      'SPA con React 19 + Vite + Tailwind v4, enrutado con React Router, i18n con react-i18next, animaciones con Framer Motion y formulario de contacto servido por Serverless Functions en Vercel para ocultar las API keys de EmailJS y reCAPTCHA.',
    decisions: [
      'API keys protegidas vía Serverless Functions de Vercel (EmailJS + reCAPTCHA) — nunca expuestas al cliente',
      'SPA routing cubierto en vercel.json con fallback a index.html para evitar 404 en deep links',
      'Tailwind CSS v4 + variables CSS para theming (light/dark) sin runtime overhead',
      'Code splitting por ruta con React.lazy + Suspense para optimizar LCP',
    ],
    result:
      'Portfolio en producción en pedrometidieri.com con Lighthouse Accessibility 100, bilingüe ES/EN, y formulario de contacto seguro con validación reCAPTCHA.',
    tech: ['React 19', 'Vite', 'Tailwind CSS v4', 'Vercel', 'Serverless Functions'],
    image: '/projects/portfolio.webp',
    link: 'https://pedrometidieri.com/',
    github: 'https://github.com/Metidieri/pedrometidieri-portfolio',
    category: 'web',
    external: true,
  },
];

// Los proyectos destacados para mostrar en la Home
export const featuredProjects = projects;
