# CLAUDE.md — Portfolio Pedro Metidieri

## Visión del Proyecto

Portfolio profesional de desarrollador web full-stack. Objetivo: transmitir profesionalidad, modernidad, limpieza y competencia técnica. Sitio bilingüe (ES/EN), mobile-first, accesible (WCAG), con animaciones Framer Motion, desplegado en Vercel.

**URL**: pedrometidieri.com

---

## Propietario

| Campo | Valor |
|-------|-------|
| Nombre | Pedro Metidieri |
| Rol | Desarrollador Web Full-Stack |
| Ubicación | Cáceres / Extremadura, España |
| Web | pedrometidieri.com |
| LinkedIn | linkedin.com/in/pedrometidieri |
| Email | pedrometidierigomez@gmail.com |
| Teléfono | +34 655 453 148 |

---

## Stack Técnico

### Frontend
- React 18, Next.js, Tailwind CSS v4, Framer Motion, Bootstrap, HTML5, CSS3

### Backend
- Flask (Python), Node.js, API REST, JWT Auth

### Lenguajes
- JavaScript (ES6+), Python, SQL

### Bases de Datos
- MySQL, SQLite

### DevOps
- Git/GitHub, Docker, Vercel (CI/CD), Postman, Serverless Functions

### CMS
- WordPress, Joomla

### Otros
- SEO técnico, Google Analytics, Accesibilidad (WCAG), UI/UX, i18n

---

## Experiencia Laboral

### 1. MTDR – Servicios Digitales | Fundador y Desarrollador Principal | 2024 – Actualidad
- Agencia digital propia: automatización, SEO y desarrollo web para clínicas dentales en España
- 4+ proyectos web en producción (React + Vite + Tailwind + Framer Motion) desplegados en Vercel
- Cartas digitales QR mobile-first con animaciones, filtros de alérgenos e i18n
- Seguridad: API keys con Serverless Functions, reCAPTCHA, pipelines CI/CD en Vercel

### 2. Universidad de Extremadura | Desarrollador Web Full-Stack | Mar 2025 – Nov 2025
- App web completa desde cero: Flask + Next.js + MySQL (9 meses, ciclo end-to-end)
- Modelado BBDD (7 tablas), API REST, autenticación JWT, control de acceso por roles
- Panel admin con dashboards, estadísticas en tiempo real y sistema de reseñas
- Mantenimiento autónomo de 3+ sitios WordPress

### 3. Aging to Future | Desarrollador Web / Técnico de Soporte | Mar 2024 – Sep 2024
- Mantenimiento y optimización de 4 sitios (WordPress + Joomla), sector salud
- ~50 incidencias/mes resueltas con tiempo de respuesta <24h
- Interfaces frontend (HTML5, CSS/Bootstrap, JS) para plataforma de investigación médica
- Investigación IoT médico para autonomía de personas mayores

---

## Educación

- **Programa Profesional en Project Management (PMP)** — UNIR (2025–2026)
- **Técnico Superior ASIR** — IES Albarregas, Mérida (2021–2023)
- **Cursos Competencias Digitales**: SEO, Google Analytics, Ciberseguridad (2024–2025)

---

## Idiomas

- Español: nativo
- Inglés: básico (lectura técnica fluida)

---

## Estructura del Proyecto Actual

```
mtdr/
├── api/contact.js                    # Serverless Function (EmailJS + reCAPTCHA)
├── client/
│   ├── public/
│   │   ├── docs/cv-pedro-metidieri.pdf
│   │   ├── locales/{es,en}/translation.json
│   │   ├── projects/*.png
│   │   ├── tech/*.svg               # 14 iconos de tecnologías
│   │   ├── manifest.json, sw.js, robots.txt, sitemap.xml
│   │   └── og-image.png, favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx           # Nav sticky, menú móvil, theme/lang toggle
│   │   │   ├── Footer.jsx           # 4 columnas, socials, CTA
│   │   │   ├── PageTransition.jsx   # Fade-in + slide-up (CSS transitions)
│   │   │   ├── RevealOnScroll.jsx   # Intersection Observer animations
│   │   │   ├── TechStack.jsx        # Grid de iconos tech con tooltips
│   │   │   ├── Testimonios.jsx      # Carrusel Swiper
│   │   │   ├── SEO.jsx              # Helmet meta tags
│   │   │   ├── JsonLd.jsx           # Schema.org structured data
│   │   │   ├── BackToTop.jsx        # Botón scroll arriba
│   │   │   ├── ErrorBoundary.jsx    # Error fallback
│   │   │   └── SkeletonLoader.jsx   # Loading placeholders
│   │   ├── data/
│   │   │   ├── projects.js          # 5 proyectos (2 reales, 3 demo)
│   │   │   ├── services.js          # 6 servicios con precios
│   │   │   ├── skills.js            # 4 categorías de skills
│   │   │   ├── testimonials.js      # 5 testimonios
│   │   │   └── blog.js              # Vacío (futuro)
│   │   ├── hooks/
│   │   │   ├── useReveal.js         # Hook Intersection Observer
│   │   │   └── useTheme.js          # Hook dark/light mode
│   │   ├── i18n/index.js            # Config i18next (es/en)
│   │   ├── pages/
│   │   │   ├── Home.jsx             # Hero + about + skills + projects + testimonios
│   │   │   ├── About.jsx            # Bio + timeline experiencia + CTA
│   │   │   ├── Contacto.jsx         # Formulario contacto + reCAPTCHA
│   │   │   ├── Blog.jsx             # Topics + email form
│   │   │   └── ProyectoDetalle.jsx  # Case study detallado
│   │   ├── App.jsx                  # Router + lazy loading + ErrorBoundary
│   │   ├── index.css                # Tailwind imports + variables CSS
│   │   └── main.jsx                 # Entry point (HelmetProvider, Analytics)
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── eslint.config.js
├── vercel.json                       # Build + SPA routing config
├── package.json                      # Root (Analytics)
└── README.md
```

---

## Paleta de Colores

### Light Mode
| Uso | Color | Tailwind |
|-----|-------|----------|
| Primary | Indigo 600 | `text-indigo-600`, `bg-indigo-600` |
| Secondary | Purple 600 | `text-purple-600` |
| Accent | Pink 500 | `text-pink-500` |
| Background | White / Gray 50 | `bg-white`, `bg-gray-50` |
| Text | Gray 900 | `text-gray-900` |
| Muted text | Gray 600 | `text-gray-600` |
| Borders | Gray 200 | `border-gray-200` |
| Success | Emerald 500 | `text-emerald-500` |
| Error | Red 500 | `text-red-500` |

### Dark Mode
| Uso | Color | Tailwind |
|-----|-------|----------|
| Primary | Indigo 400 | `dark:text-indigo-400` |
| Secondary | Purple 400 | `dark:text-purple-400` |
| Accent | Pink 400 | `dark:text-pink-400` |
| Background | Gray 900 / Gray 950 | `dark:bg-gray-900` |
| Text | White / Gray 100 | `dark:text-white` |
| Muted text | Gray 300 | `dark:text-gray-300` |
| Borders | Gray 700 | `dark:border-gray-700` |
| Cards | Gray 800 | `dark:bg-gray-800` |

### Gradientes
- Hero CTA: `from-indigo-600 via-purple-600 to-pink-600`
- Decorative blobs: `from-indigo-100 to-purple-100` / `from-pink-50 to-indigo-50`

---

## Tipografías

| Tipo | Familia | Variable CSS | Uso |
|------|---------|-------------|-----|
| Display / Headings | Plus Jakarta Sans | `--font-display` | Títulos h1-h6, brand |
| Body / UI | Inter | `--font-sans` | Texto, botones, nav |

Cargadas via Google Fonts en `index.html`.

---

## Directrices de Animación

### Principios
- **Todas las animaciones usan Framer Motion** (migrar las actuales de CSS/Intersection Observer a Framer Motion)
- Animaciones sutiles y profesionales, nunca distractoras
- Duración estándar: 400-600ms
- Easing: `[0.4, 0, 0.2, 1]` (ease-out suave)

### Patrones de Animación

| Patrón | Uso | Implementación |
|--------|-----|----------------|
| Page Transition | Cambio de ruta | `AnimatePresence` + fade/slide |
| Scroll Reveal | Secciones al entrar en viewport | `motion.div` + `whileInView` |
| Stagger Children | Listas, grids de cards | `staggerChildren: 0.1` en parent |
| Hover Scale | Botones, cards | `whileHover={{ scale: 1.05 }}` |
| Tap Feedback | Botones | `whileTap={{ scale: 0.95 }}` |
| Hero Text | Texto principal | TypeAnimation (mantener) o Framer Motion variants |
| Carousel | Testimonios | Swiper (mantener) |

### Animaciones a Implementar
- `PageTransition.jsx`: Migrar de CSS transitions a `<AnimatePresence>` + `motion.div`
- `RevealOnScroll.jsx`: Migrar de Intersection Observer manual a `whileInView` de Framer Motion
- Navbar: Animación de entrada/salida del menú móvil con Framer Motion
- Cards: Hover con `motion.div` (scale + shadow elevation)
- Skill badges: Entrada escalonada con stagger
- Timeline (experiencia): Animación progresiva de cada item

---

## Estructura de Datos — Experiencia Laboral

```javascript
// client/src/data/experience.js
export const experience = [
  {
    id: 1,
    company: "MTDR – Servicios Digitales",
    role: "Fundador y Desarrollador Principal",
    period: "2024 – Actualidad",
    current: true,
    description: [
      "Agencia digital propia: automatización, SEO y desarrollo web para clínicas dentales en España",
      "4+ proyectos web en producción (React + Vite + Tailwind + Framer Motion) desplegados en Vercel",
      "Cartas digitales QR mobile-first con animaciones, filtros de alérgenos e i18n",
      "Seguridad: API keys con Serverless Functions, reCAPTCHA, pipelines CI/CD en Vercel"
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Vercel", "Node.js"],
    icon: "Rocket" // lucide-react
  },
  {
    id: 2,
    company: "Universidad de Extremadura",
    role: "Desarrollador Web Full-Stack",
    period: "Mar 2025 – Nov 2025",
    current: false,
    description: [
      "App web completa desde cero: Flask + Next.js + MySQL (9 meses, ciclo end-to-end)",
      "Modelado BBDD (7 tablas), API REST, autenticación JWT, control de acceso por roles",
      "Panel admin con dashboards, estadísticas en tiempo real y sistema de reseñas",
      "Mantenimiento autónomo de 3+ sitios WordPress"
    ],
    tech: ["Flask", "Next.js", "MySQL", "JWT", "WordPress", "Python"],
    icon: "GraduationCap"
  },
  {
    id: 3,
    company: "Aging to Future",
    role: "Desarrollador Web / Técnico de Soporte",
    period: "Mar 2024 – Sep 2024",
    current: false,
    description: [
      "Mantenimiento y optimización de 4 sitios (WordPress + Joomla), sector salud",
      "~50 incidencias/mes resueltas con tiempo de respuesta <24h",
      "Interfaces frontend (HTML5, CSS/Bootstrap, JS) para plataforma de investigación médica",
      "Investigación IoT médico para autonomía de personas mayores"
    ],
    tech: ["WordPress", "Joomla", "HTML5", "CSS", "Bootstrap", "JavaScript"],
    icon: "HeartPulse"
  }
];
```

---

## Plan de Construcción Paso a Paso

### Fase 0 — Preparación
1. Instalar `framer-motion` en el proyecto
2. Crear archivo `client/src/data/experience.js` con los datos de experiencia
3. Añadir traducciones de experiencia en `locales/es/translation.json` y `locales/en/translation.json`

### Fase 1 — Migración de Animaciones a Framer Motion
4. Migrar `PageTransition.jsx` de CSS transitions a `AnimatePresence` + `motion.div`
5. Migrar `RevealOnScroll.jsx` de Intersection Observer a `whileInView` de Framer Motion
6. Actualizar `App.jsx` para usar `AnimatePresence` con `location.key`
7. Añadir animaciones Framer Motion al menú móvil del Header
8. Actualizar hover/tap en cards y botones con `motion.div`

### Fase 2 — Nueva Sección "Experiencia"
9. Crear componente `ExperienceTimeline.jsx` con animaciones Framer Motion (timeline vertical, items escalonados, badges de tech)
10. Integrar `ExperienceTimeline` en la página `About.jsx` (reemplazar o mejorar timeline existente)
11. Añadir sección de experiencia resumida en `Home.jsx` (opcional, con link a About)

### Fase 3 — Mejoras de Componentes Existentes
12. Mejorar `TechStack.jsx` con animaciones Framer Motion (stagger reveal, hover rotate)
13. Mejorar `Testimonios.jsx` con transiciones más suaves
14. Mejorar skill badges en Home con entrada escalonada
15. Refinar Footer con reveal animation

### Fase 4 — Pulido y Calidad
16. Verificar responsive en todos los breakpoints
17. Verificar accesibilidad (reducir animaciones con `prefers-reduced-motion`)
18. Verificar i18n completo (todas las strings en translation.json)
19. Verificar SEO (meta tags, structured data actualizado)
20. Test de rendimiento (Lighthouse)

---

## Directrices Generales de Desarrollo

- **Mobile-first**: Diseñar primero para móvil, escalar a desktop
- **Accesibilidad**: Respetar `prefers-reduced-motion`, ARIA labels, contraste suficiente
- **i18n**: Toda string visible al usuario debe estar en translation.json (ES y EN)
- **Framer Motion**: Usar `motion.div`, `AnimatePresence`, `whileInView`, `staggerChildren`
- **No duplicar código**: Reutilizar componentes existentes, extender en vez de reescribir
- **Dark mode**: Todo componente debe funcionar en light y dark mode
- **Performance**: Lazy loading, optimización de imágenes, code splitting
- **SEO**: Mantener structured data, meta tags, hreflang en cada página
