# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




Datos reales en lugar de placeholders
Crea src/data/projects.js y src/data/posts.js con tus proyectos y artículos reales
Añade más campos: año, rol, enlace GitHub/demo, problemas resueltos

Blog real con Markdown o CMS
Usa .mdx + remark + rehype para posts en /blog/[slug]
O instala Strapi/Sanity/Contentful (más adelante)

PWA (Progressive Web App)
Añade manifest.json y service worker
Tu sitio se puede instalar como app en móvil

Sección "Últimos proyectos" con filtros y modal
Filtros por tecnología (React, Next.js, IA, etc.)
Modal al clicar en proyecto (detalles, tech stack, enlaces demo/GitHub)
Añade tus proyectos reales (imágenes, descripción, año)

Blog con posts reales (MDX o simple)
Crea 2–3 artículos en Markdown
Página /blog con lista + lectura individual (/blog/slug)
SEO por post (Helmet con título/descripción únicos)

Mejoras técnicas y de crecimiento (5–10 días)

Analytics y seguimiento
Google Analytics 4 o Vercel Analytics (gratis)
Ve cuánta gente entra, qué páginas ven, de dónde vienen

PWA (instalable como app)
Añade manifest.json y service worker
La web se puede añadir al home screen del móvil

Optimización final
Imágenes comprimidas (usa TinyPNG o Squoosh)
Lighthouse audit (Chrome DevTools → Lighthouse) → puntuación 90+