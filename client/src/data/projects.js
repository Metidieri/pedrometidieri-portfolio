// src/data/projects.js
// Proyectos reales del portfolio

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
    image: '/projects/elaperitivo-index.png',
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
];

// Los 2 proyectos reales para mostrar en la Home como destacados
export const featuredProjects = projects;
