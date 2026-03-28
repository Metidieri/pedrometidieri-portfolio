// src/data/projects.js
// Proyectos reales y de demostración del portfolio

export const projects = [
  {
    id: 1,
    slug: 'el-aperitivo-talarrubias',
    title: 'El Aperitivo Talarrubias',
    description: 'Carta digital con código QR para restaurante. Diseño moderno, responsive y con navegación por categorías.',
    longDescription:
      'Carta digital interactiva con sistema de escaneo QR para el restaurante El Aperitivo en Talarrubias. Diseñada mobile-first con navegación por categorías, sistema de alérgenos, animaciones fluidas y carga optimizada.',
    challenge:
      'El restaurante necesitaba digitalizar su carta física para ofrecer una experiencia moderna a sus clientes, accesible desde cualquier dispositivo mediante un simple código QR, sin necesidad de apps.',
    solution:
      'Desarrollé una web app mobile-first con React y Vite, implementando navegación por categorías con animaciones suaves usando Framer Motion, un sistema visual de alérgenos, lazy loading de imágenes y splash screen personalizado.',
    result:
      'El restaurante eliminó las cartas físicas, redujo tiempos de actualización del menú y mejoró la experiencia del cliente con un diseño moderno y responsive.',
    tech: ['React', 'Vite', 'TailwindCSS', 'Framer Motion', 'FontAwesome'],
    image: '/projects/elaperitivo-index.png'
    link: 'https://www.elaperitivotalarrubias.com/',
    category: 'web',
    external: true,
  },
  {
    id: 2,
    slug: 'mtdr-landing',
    title: 'MTDR Landing',
    description: 'Landing page personal de desarrollador Full Stack. Diseño minimalista, animaciones y optimización SEO.',
    longDescription:
      'Landing page personal como desarrollador web, diseñada para presentar mi perfil profesional de forma impactante y directa.',
    challenge:
      'Necesitaba una presencia web profesional que transmitiera mis habilidades técnicas y mi estilo como desarrollador.',
    solution:
      'Diseñé una landing page limpia y moderna con React y Tailwind CSS, enfocada en la velocidad de carga y la claridad del mensaje.',
    result: 'Una landing funcional y rápida que sirve como primer punto de contacto profesional.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    image: '/projects/mtdr-landing.png',
    link: 'https://mtdr.es/',
    category: 'web',
    external: true,
  },
  {
    id: 3,
    slug: 'ecommerce',
    titleKey: 'projects.ecommerce.title',
    descriptionKey: 'projects.ecommerce.description',
    longDescription:
      'Plataforma de comercio electrónico completa con gestión de productos, carrito de compra, procesamiento de pagos y panel de administración.',
    challenge:
      'Construir una tienda online escalable y segura con procesamiento de pagos integrado y una experiencia de usuario fluida desde la búsqueda hasta el checkout.',
    solution:
      'Implementé una arquitectura Next.js con Supabase para la base de datos en tiempo real, Stripe para pagos seguros y Tailwind CSS para el diseño responsive.',
    result:
      'Plataforma lista para producción con tiempo de carga optimizado, flujo de compra simplificado y panel de gestión intuitivo.',
    tech: ['Next.js', 'Tailwind', 'Supabase', 'Stripe'],
    image: '/projects/ecommerce.webp',
    link: null,
    category: 'web',
    external: false,
  },
  {
    id: 4,
    slug: 'dashboard-ia',
    titleKey: 'projects.dashboard.title',
    descriptionKey: 'projects.dashboard.description',
    longDescription:
      'Dashboard de análisis con inteligencia artificial integrada para visualización de datos en tiempo real y generación de insights automatizados.',
    challenge:
      'Los equipos necesitaban analizar grandes volúmenes de datos sin conocimientos técnicos avanzados, con insights accionables disponibles en tiempo real.',
    solution:
      'Desarrollé un dashboard con React, integración directa con OpenAI API para análisis de lenguaje natural, y visualizaciones interactivas con actualización en tiempo real mediante WebSockets.',
    result:
      'Reducción del tiempo de análisis de datos en un 60%, con insights automáticos que mejoraron la toma de decisiones del equipo.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'OpenAI'],
    image: '/projects/dashboard.webp',
    link: null,
    category: 'ai',
    external: false,
  },
  {
    id: 5,
    slug: 'app-movil',
    titleKey: 'projects.appmovil.title',
    descriptionKey: 'projects.appmovil.description',
    longDescription:
      'Aplicación móvil multiplataforma para iOS y Android con autenticación segura, notificaciones push y sincronización de datos en tiempo real.',
    challenge:
      'Necesitábamos una app móvil nativa disponible en ambas plataformas con un único codebase, minimizando tiempo de desarrollo y mantenimiento futuro.',
    solution:
      'Construí la app con React Native y Expo, integrando Firebase para autenticación y base de datos en tiempo real, con soporte completo para notificaciones push en iOS y Android.',
    result:
      'App publicada en App Store y Google Play con calificación de 4.8 estrellas y más de 500 usuarios activos el primer mes.',
    tech: ['React Native', 'Firebase', 'Expo'],
    image: '/projects/appmovil.webp',
    link: null,
    category: 'mobile',
    external: false,
  },
];

// Los 2 proyectos reales para mostrar en la Home como destacados
export const featuredProjects = projects.slice(0, 2);
