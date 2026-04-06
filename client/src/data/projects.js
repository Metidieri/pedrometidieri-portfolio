// src/data/projects.js
// Proyectos reales del portfolio

export const projects = [
  {
    id: 'el-aperitivo',
    slug: 'el-aperitivo',
    title: 'Carta Digital QR — El Aperitivo Talarrubias',
    description:
      'Carta digital con código QR para bar-restaurante. Mobile-first, sin necesidad de app nativa.',
    client: 'Bar El Aperitivo, Talarrubias (Badajoz)',
    url: 'https://elaperitivotalarrubias.com',
    github: null,
    image: '/projects/elaperitivo-index.webp',
    stack: ['React 19', 'Vite', 'Tailwind CSS v4', 'Framer Motion', 'Vercel'],
    problem:
      'El negocio usaba una carta en papel que resultaba costosa de actualizar y poco higiénica. Necesitaban una solución digital accesible mediante QR sin requerir instalación de ninguna app.',
    decisions: [
      'SPA con React para evitar recargas de página y lograr una experiencia fluida en móvil, que es el 95% del tráfico esperado.',
      'Sistema de alérgenos basado en los 14 alérgenos obligatorios de la UE, con badges visuales por plato.',
      'Lazy loading de imágenes para mantener un rendimiento óptimo en conexiones móviles lentas.',
      'Deploy en Vercel con CI/CD desde GitHub: cualquier actualización de carta se despliega en menos de 2 minutos sin intervención técnica del cliente.',
      'Dominio propio configurado vía Namecheap con DNS apuntando a Vercel.',
    ],
    result:
      'Carta digital en producción con dominio propio, accesible mediante QR desde cualquier dispositivo. El cliente actualiza los precios mediante un cambio en el repositorio sin conocimientos técnicos adicionales.',
    category: 'web',
  },
  {
    id: 'casa-cultura',
    slug: 'casa-cultura',
    title: 'Carta Digital QR — Café Bar Casa de la Cultura',
    description:
      'Carta digital QR para café-bar con animaciones cinéticas y paleta personalizada.',
    client: 'Café Bar Casa de la Cultura, Esparragosa de Lares (Badajoz)',
    url: null,
    github: null,
    image: null,
    stack: ['React 19', 'Vite', 'Tailwind CSS v4', 'Framer Motion', 'Vercel'],
    problem:
      'Misma necesidad que El Aperitivo: digitalizar la carta de forma económica y mantenible, con identidad visual propia del establecimiento.',
    decisions: [
      'Paleta de colores personalizada basada en la identidad visual del bar.',
      'Animaciones cinéticas con Framer Motion para una experiencia más premium.',
      'Reutilización de la arquitectura de El Aperitivo, reduciendo el tiempo de desarrollo en un 60% respecto al primer proyecto.',
      'Deploy independiente en Vercel con su propio pipeline de CI/CD.',
    ],
    result:
      'Segundo proyecto de carta digital desplegado en producción, validando el modelo de negocio replicable de MTDR para hostelería local.',
    category: 'web',
  },
  {
    id: 'mtdr',
    slug: 'mtdr',
    title: 'Landing Page — MTDR Servicios Digitales',
    description:
      'Landing page de la agencia propia, enfocada en clínicas dentales y negocios locales.',
    client: 'Proyecto propio — Agencia digital fundada por Pedro Metidieri',
    url: 'https://mtdr.es',
    github: 'https://github.com/Metidieri/mtdr-landing',
    image: '/projects/mtdr-landing.webp',
    stack: ['React 19', 'Tailwind CSS v4', 'Framer Motion', 'Vercel', 'Hostinger DNS'],
    problem:
      'Necesitaba una presencia digital propia para la agencia, enfocada en captar clientes del sector sanitario (clínicas dentales) con un diseño que transmitiera confianza y profesionalidad.',
    decisions: [
      'Diseño orientado a conversión: CTA claro above the fold, propuesta de valor en los primeros 3 segundos.',
      'DNS configurado en Hostinger apuntando a Vercel, combinando el hosting de dominio económico con la infraestructura de deploy de Vercel.',
      'Resolución de conflictos de dependencias React 19 con react-helmet-async v3 y swiper v11 usando --legacy-peer-deps.',
    ],
    result:
      'Landing page en producción en mtdr.es con CI/CD desde GitHub. Primera presencia digital oficial de la agencia.',
    category: 'web',
  },
  {
    id: 'portfolio',
    slug: 'portfolio',
    title: 'Portfolio Personal — pedrometidieri.com',
    description:
      'Portfolio profesional bilingüe con dark mode, i18n y formulario de contacto seguro.',
    client: 'Proyecto propio',
    url: 'https://pedrometidieri.com',
    github: 'https://github.com/Metidieri/pedrometidieri-portfolio',
    image: '/projects/portfolio.webp',
    stack: [
      'React 19', 'Vite', 'Tailwind CSS v4', 'Framer Motion',
      'react-i18next', 'EmailJS', 'reCAPTCHA v3', 'Vercel',
    ],
    problem:
      'Necesitaba un portfolio que demostrara capacidad técnica real, no solo diseño. El reto era construir algo que funcionara como argumento de contratación por sí solo.',
    decisions: [
      'i18n completo español/inglés con react-i18next para alcanzar tanto mercado nacional como oportunidades remotas internacionales.',
      'Formulario de contacto con reCAPTCHA v3 y EmailJS directamente desde el cliente, eliminando la Serverless Function intermediaria que causaba errores 403 por restricciones de entorno no-browser de EmailJS.',
      'API keys protegidas mediante variables de entorno con prefijo VITE_ para exposición controlada al cliente.',
      'SPA routing configurado en vercel.json con rewrites para evitar 404s en navegación directa a rutas.',
      'Service Worker para capacidades PWA y carga offline básica.',
      'Sitemap.xml y robots.txt para indexación correcta por buscadores.',
    ],
    result:
      'Portfolio en producción con Lighthouse score objetivo de 90+ en Performance, Accessibility y SEO. Bilingüe, con casos de estudio reales y formulario de contacto funcional.',
    category: 'web',
  },
];

// Los proyectos destacados para mostrar en la Home
export const featuredProjects = projects;
