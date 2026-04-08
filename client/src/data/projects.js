// src/data/projects.js
// Proyectos reales del portfolio

export const projects = [
  {
    id: 'mtdr-saas',
    slug: 'mtdr-saas',
    title: 'MTDR Soluciones Digitales — SaaS Multi-tenant',
    description:
      'Plataforma SaaS de gestión de proyectos con arquitectura multi-tenant real, tres roles de usuario y portal de cliente en tiempo real.',
    client: 'Proyecto propio — Plataforma SaaS para agencias digitales',
    url: 'https://app.mtdr.es',
    github: null,
    image: '/projects/mtdr-saas.webp',
    category: 'saas',
    featured: true,
    stack: [
      'React 19', 'Vite', 'Tailwind CSS v4', 'Framer Motion',
      'TanStack Query v5', 'React Router v7', 'Recharts',
      'Python', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'Alembic',
      'Flask-JWT-Extended', 'Flask-Limiter', 'Flask-Talisman', 'Resend',
    ],
    problem:
      'Las agencias digitales no tienen forma de dar a sus clientes visibilidad real del avance de sus proyectos sin emails manuales de actualización. Esto genera desconfianza y aumenta la carga de comunicación del equipo.',
    decisions: [
      'Arquitectura multi-tenant con middleware @tenant_required: toda query filtra obligatoriamente por organization_id extraído del JWT, haciendo imposible el acceso cruzado entre tenants incluso manipulando la petición.',
      'JWT con blocklist persistente en PostgreSQL en lugar de en memoria, garantizando que los tokens invalidados al hacer logout no puedan reutilizarse ni tras reiniciar el servidor.',
      'Separación estricta routes/services/schemas: las rutas solo orquestan HTTP, los servicios contienen la lógica de negocio sin dependencia de Flask, lo que permite testear la lógica sin levantar HTTP.',
      'Rate limiting por endpoint con Flask-Limiter: /login 10/min, /register 5/hora. Headers de seguridad HTTP con Flask-Talisman (X-Frame-Options, X-Content-Type-Options, CORS restrictivo por entorno).',
      'Sistema de invitaciones por email con token temporal de 48h vía Resend: el admin invita por email, el invitado acepta en un endpoint público que consume y destruye el token.',
      'Portal cliente diferenciado con RoleGuard en frontend y @role_required en backend: el usuario con rol client solo ve sus proyectos y las actualizaciones marcadas como visibles por la agencia.',
      'Dashboard con métricas reales (Recharts BarChart + DonutChart) alimentadas desde /api/org/stats. Vista kanban y lista con toggle persistente en localStorage. Exportación de proyectos a CSV.',
    ],
    result:
      'Backend completo con 62 tests que validan auth, aislamiento multi-tenant, CRUD completo, sistema de invitaciones y portal cliente. Frontend con dark mode, dashboard con gráficas, vista kanban y exportación CSV. Desplegado en Railway (backend) + Vercel (frontend) con dominio app.mtdr.es.',
  },
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
    image: '/projects/casa-cultura.webp',
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
