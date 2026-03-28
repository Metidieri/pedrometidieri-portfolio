# PROMPTS PARA CLAUDE CODE — PORTFOLIO PEDRO METIDIERI (mtdr)

Copia y pega cada prompt por separado en Claude Code. Espera a que termine uno antes de lanzar el siguiente.

---

## ══════════════════════════════════════════════════════════
## PROMPT 1 DE 3 — INFRAESTRUCTURA, SEGURIDAD Y LIMPIEZA
## ══════════════════════════════════════════════════════════

```
Voy a implementar mejoras críticas en mi portfolio web (React 19 + Vite 7 + Tailwind v4). El proyecto está en la carpeta client/. El dominio de producción será pedrometidieri.com. Necesito que hagas TODO lo siguiente en orden, sin saltarte nada:

═══ BLOQUE A: SEGURIDAD — CLAVES API ═══

1. Crea una Vercel Serverless Function en la raíz del proyecto:
   - Archivo: api/contact.js
   - Esta función debe recibir POST con { name, email, message, recaptchaToken }
   - Debe verificar el token de reCAPTCHA v3 contra la API de Google usando el SECRET key desde process.env.RECAPTCHA_SECRET_KEY
   - Debe enviar el email usando @emailjs/browser (o la REST API de EmailJS) con las claves desde variables de entorno: process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, process.env.EMAILJS_PUBLIC_KEY
   - Debe devolver JSON con status de éxito o error
   - Manejo de errores completo con try/catch

2. Refactoriza client/src/pages/Contacto.jsx:
   - Elimina todas las claves hardcodeadas (serviceId, templateId, publicKey)
   - El formulario ahora debe hacer fetch a /api/contact con los datos
   - Mantén el confetti, el spinner, react-hook-form y toda la UX actual
   - El reCAPTCHA site key (que es público) muévelo a una variable de entorno: import.meta.env.VITE_RECAPTCHA_SITE_KEY

3. Crea un archivo .env.example en la raíz con todas las variables necesarias (sin valores reales, solo placeholders):
   EMAILJS_SERVICE_ID=tu_service_id
   EMAILJS_TEMPLATE_ID=tu_template_id
   EMAILJS_PUBLIC_KEY=tu_public_key
   RECAPTCHA_SECRET_KEY=tu_secret_key
   VITE_RECAPTCHA_SITE_KEY=tu_site_key

4. Asegúrate de que .env y .env.local estén en .gitignore

═══ BLOQUE B: LIMPIEZA DE DEPENDENCIAS Y CÓDIGO ═══

5. Elimina la dependencia emailjs-com del package.json (es duplicada de @emailjs/browser)

6. En client/src/index.css elimina la regla "* { transition: all 300ms ease; }" — es un anti-patrón de performance. NO la reemplaces con nada global, las transiciones se aplicarán componente a componente en el Prompt 2.

7. En client/index.html mueve el script de reCAPTCHA del HEAD al final del body, y añádele async defer.

═══ BLOQUE C: ESTRUCTURA DE DATOS ═══

8. Crea la carpeta client/src/data/ con estos archivos, extrayendo los datos hardcodeados de los componentes:
   - projects.js → array de proyectos (extraer de Proyectos.jsx). Incluye estos dos proyectos REALES:
     a) "El Aperitivo Talarrubias" — Carta digital con QR para restaurante. Stack: React, Vite, TailwindCSS, Framer Motion, FontAwesome. URL: https://www.elaperitivotalarrubias.com/ — Categoría: Web
     b) "MTDR Landing" — Landing page personal de desarrollador. Stack: React, Vite, Tailwind CSS. URL: https://mtdr-landing.vercel.app/ — Categoría: Web
     Para las imágenes, de momento usa rutas locales: /projects/aperitivo.webp y /projects/mtdr-landing.webp (las capturas las añadiré yo después en client/public/projects/)
   - services.js → array de servicios con precios (extraer de Servicios.jsx)
   - testimonials.js → array de testimonios (extraer de Testimonios.jsx)
   - skills.js → array de skills y categorías (extraer de Home.jsx)
   - blog.js → array vacío por ahora, preparado para futuro contenido

9. Refactoriza cada componente/página para que importe los datos desde client/src/data/ en vez de tenerlos inline. Asegúrate de que todo sigue funcionando exactamente igual visualmente.

═══ BLOQUE D: ARCHIVOS SEO BÁSICOS ═══

10. Crea client/public/robots.txt:
    User-agent: *
    Allow: /
    Sitemap: https://pedrometidieri.com/sitemap.xml

11. Crea client/public/sitemap.xml con todas las rutas actuales:
    /, /about, /proyectos, /servicios, /contacto
    Ambas versiones de idioma (es/en) con hreflang alternates.
    Fecha lastmod: hoy.

12. Crea un componente client/src/components/JsonLd.jsx que inyecte structured data schema.org tipo Person + WebSite en el head usando react-helmet-async. Datos:
    - name: Pedro Metidieri
    - jobTitle: Full Stack Developer
    - url: https://pedrometidieri.com
    - sameAs: [URLs de LinkedIn y GitHub que ya estén en el Header]
    Úsalo en Home.jsx.

═══ BLOQUE E: MANEJO DE ERRORES ═══

13. Crea client/src/components/ErrorBoundary.jsx:
    - Class component con componentDidCatch
    - UI de fallback elegante con el mismo estilo dark/light del portfolio
    - Botón "Volver al inicio" que hace window.location.href = "/"
    - Envuélvelo alrededor de las rutas en App.jsx

═══ BLOQUE F: BLOG ═══

14. Transforma client/src/pages/Blog.jsx de placeholder vacío a una página "Próximamente" profesional:
    - Título: "Blog — Próximamente"
    - Subtítulo explicativo: "Estoy preparando contenido sobre desarrollo web, IA y buenas prácticas"
    - Un campo de email con texto "Avísame cuando esté listo" (no necesita funcionar, solo el UI)
    - Estilo coherente con el resto del portfolio (dark/light mode, misma paleta)
    - Que se vea profesional, no como un placeholder abandonado

15. En Home.jsx, elimina la sección de "posts recientes" que muestra cards de blog con contenido falso. Reemplázala con algo útil: un CTA hacia la sección de proyectos o hacia contacto.

Cuando termines todo, haz un resumen de los archivos creados y modificados.
```

---

## ══════════════════════════════════════════════════════════
## PROMPT 2 DE 3 — DISEÑO VISUAL, TIPOGRAFÍA Y ANIMACIONES
## ══════════════════════════════════════════════════════════

```
Continúo con las mejoras de mi portfolio (React 19 + Vite 7 + Tailwind v4, carpeta client/). En el Prompt 1 se hizo limpieza, seguridad y estructura. Ahora toca la parte visual. Necesito que hagas TODO lo siguiente:

═══ BLOQUE A: TIPOGRAFÍA ═══

1. Importa la fuente "Inter" de Google Fonts con pesos 400, 500, 600, 700 y 800.
   - Añade el @import o <link> en el index.html (con preconnect a fonts.googleapis.com y fonts.gstatic.com)
   - Configura Tailwind v4 para que "Inter" sea la fuente sans por defecto
   - Verifica que se aplica en todo el sitio

2. Como fuente secundaria para títulos hero y sección, importa también "Plus Jakarta Sans" peso 700 y 800. Úsala en:
   - El título principal del hero (nombre)
   - Los títulos de cada sección (h2 de About, Proyectos, Servicios, etc.)
   - El "404" de la página de error
   Aplícala con una clase utility custom o directamente con font-family.

═══ BLOQUE B: ANIMACIONES DE SCROLL (REVEAL ON SCROLL) ═══

3. Crea un custom hook client/src/hooks/useReveal.js:
   - Usa IntersectionObserver
   - Acepta opciones: threshold (default 0.1), rootMargin (default "0px"), triggerOnce (default true)
   - Devuelve un ref y un booleano isVisible
   - Cuando isVisible es true, el elemento debería animarse

4. Crea un componente wrapper client/src/components/RevealOnScroll.jsx:
   - Usa useReveal internamente
   - Props: children, direction ("up" | "down" | "left" | "right" | "fade"), delay (ms), duration (ms), className
   - El componente aplica las clases CSS de transición:
     - Estado inicial: opacity-0 + translate según direction (translate-y-8 para "up", -translate-y-8 para "down", etc.)
     - Estado visible: opacity-100 translate-x-0 translate-y-0
     - La transición debe usar duration y delay como inline styles (no depender del wildcard que ya eliminamos)
   - El componente debe ser ligero y no causar layout shift

5. Aplica RevealOnScroll en TODAS estas ubicaciones:
   - Home.jsx: cada sección completa (about, tech stack, proyectos, testimonios, CTA)
   - About.jsx: foto + bio (direction="left"), experiencias (direction="up" con delay escalonado entre cada una)
   - Proyectos.jsx: cada card de proyecto (direction="up" con delay escalonado: 0ms, 100ms, 200ms)
   - Servicios.jsx: cada card de servicio (direction="up" con delay escalonado), sección de proceso (direction="fade")
   - Contacto.jsx: el formulario completo (direction="up")
   - La página de Blog/Próximamente (direction="fade")

═══ BLOQUE C: TRANSICIONES ENTRE PÁGINAS ═══

6. Implementa transiciones suaves entre rutas SIN añadir Framer Motion (para no aumentar el bundle):
   - Crea un componente wrapper client/src/components/PageTransition.jsx
   - Usa un estado local que detecte el montaje del componente
   - Al montarse: fade-in + slide-up sutil (de opacity-0 translate-y-4 a opacity-100 translate-y-0)
   - Duración: 400ms, ease-out
   - Envuelve cada página lazy en App.jsx con este componente

═══ BLOQUE D: MICRO-INTERACCIONES Y HOVER MEJORADOS ═══

7. Mejora las transiciones hover de las cards de proyectos:
   - Añade transition-all duration-300 ease-out explícitamente (ya no hay wildcard global)
   - Hover: lift effect (-translate-y-2), shadow-xl, border cambia a indigo-500
   - La imagen dentro de la card: hover:scale-105 con overflow-hidden y transition duration-500

8. Mejora las cards de servicios:
   - Mismo patrón: transition explícito, lift + shadow + border en hover
   - El icono de la card: hover:rotate-6 con transition

9. Botones CTA globales (los de gradiente indigo→purple→pink):
   - Añade hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25
   - Active: scale-95 para feedback táctil
   - Transition: duration-200

10. Tech stack icons:
    - Hover: scale-110, shadow-lg, un sutil background con bg-indigo-50 dark:bg-indigo-950/50 redondeado
    - Transition: duration-300

11. Links del Header:
    - Añade un underline animado: pseudo-elemento after que crece de width 0 a 100% en hover
    - Implementar con clases Tailwind: relative + after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all after:duration-300

═══ BLOQUE E: MEJORAS VISUALES ESPECÍFICAS ═══

12. Hero section de Home.jsx:
    - Añade un gradiente de fondo sutil detrás del hero: un blob/gradiente radial difuminado en indigo/purple con opacity baja (10-15%) que dé profundidad
    - Puede ser un div absoluto con blur-3xl y un gradiente, posicionado detrás del contenido

13. Añade un badge "Disponible para proyectos" en el hero:
    - Pequeño badge pill con un punto verde animado (pulse) + texto "Disponible para proyectos"
    - Posición: encima del nombre, centrado o alineado al inicio
    - Estilo: borde sutil, fondo semi-transparente, texto pequeño
    - El punto verde: w-2 h-2 rounded-full bg-emerald-500 con animate-pulse

14. BackToTop.jsx:
    - Añade transiciones explícitas (transition-all duration-300)
    - Hover: scale-110 shadow-lg

15. Footer:
    - Añade una línea separadora top con gradiente (from-transparent via-indigo-500 to-transparent) antes del footer
    - Asegúrate de que el copyright dice "© 2026 Pedro Metidieri. Todos los derechos reservados."

Cuando termines, haz un resumen de todos los archivos modificados y creados, y lista cualquier cambio visual que deba verificar manualmente.
```

---

## ══════════════════════════════════════════════════════════
## PROMPT 3 DE 3 — CASE STUDIES, CV, ACCESIBILIDAD Y PWA
## ══════════════════════════════════════════════════════════

```
Continúo con las mejoras finales de mi portfolio (React 19 + Vite 7 + Tailwind v4, carpeta client/). Los Prompts 1 y 2 ya se aplicaron (seguridad, limpieza, datos, tipografía, animaciones). Ahora toca contenido, accesibilidad y toques finales. Haz TODO lo siguiente:

═══ BLOQUE A: PÁGINAS DE CASE STUDY POR PROYECTO ═══

1. Crea un componente de página client/src/pages/ProyectoDetalle.jsx:
   - Ruta dinámica: /proyectos/:slug
   - Lee el slug de la URL y busca el proyecto correspondiente en client/src/data/projects.js
   - Si no encuentra el proyecto, redirige a /proyectos
   - Layout del case study:
     a) Hero: imagen grande del proyecto (ancho completo o casi), título, categoría badge
     b) Sección "Resumen": descripción larga del proyecto (añade un campo "longDescription" en projects.js)
     c) Sección "Tecnologías": los tags del proyecto mostrados como pills/badges con iconos
     d) Sección "El reto": campo "challenge" en projects.js — qué problema resolvía
     e) Sección "La solución": campo "solution" en projects.js — cómo lo resolví
     f) Sección "Resultado": campo "result" en projects.js (métricas, feedback, etc.)
     g) Botón "Ver sitio web" (link externo al URL del proyecto)
     h) Navegación: "← Anterior" / "Siguiente →" entre proyectos
   - Aplica RevealOnScroll a cada sección
   - Aplica PageTransition
   - Soporte dark/light mode completo
   - SEO con el componente SEO.jsx (title y description del proyecto)

2. Actualiza client/src/data/projects.js:
   - Añade los campos nuevos a cada proyecto: slug, longDescription, challenge, solution, result
   - Para "El Aperitivo Talarrubias":
     slug: "el-aperitivo-talarrubias"
     longDescription: "Carta digital interactiva con sistema de escaneo QR para el restaurante El Aperitivo en Talarrubias. Diseñada mobile-first con navegación por categorías, sistema de alérgenos, animaciones fluidas y carga optimizada."
     challenge: "El restaurante necesitaba digitalizar su carta física para ofrecer una experiencia moderna a sus clientes, accesible desde cualquier dispositivo mediante un simple código QR, sin necesidad de apps."
     solution: "Desarrollé una web app mobile-first con React y Vite, implementando navegación por categorías con animaciones suaves usando Framer Motion, un sistema visual de alérgenos, lazy loading de imágenes y splash screen personalizado."
     result: "El restaurante eliminó las cartas físicas, redujo tiempos de actualización del menú y mejoró la experiencia del cliente con un diseño moderno y responsive."
   - Para "MTDR Landing":
     slug: "mtdr-landing"
     longDescription: "Landing page personal como desarrollador web, diseñada para presentar mi perfil profesional de forma impactante y directa."
     challenge: "Necesitaba una presencia web profesional que transmitiera mis habilidades técnicas y mi estilo como desarrollador."
     solution: "Diseñé una landing page limpia y moderna con React y Tailwind CSS, enfocada en la velocidad de carga y la claridad del mensaje."
     result: "Una landing funcional y rápida que sirve como primer punto de contacto profesional."

3. Actualiza Proyectos.jsx para que los botones "Ver proyecto" ahora enlacen a /proyectos/:slug usando react-router-dom Link.

4. Añade la ruta /proyectos/:slug en App.jsx con lazy loading, como el resto de rutas.

═══ BLOQUE B: DESCARGA DE CV ═══

5. Prepara la infraestructura para el CV descargable:
   - Crea la carpeta client/public/docs/
   - En Home.jsx hero section, añade un tercer botón junto a "Ver proyectos" y "Contactar":
     "Descargar CV" con icono de descarga (lucide-react: Download)
     Estilo: outlined/ghost para diferenciarlo de los CTAs principales
     href: /docs/cv-pedro-metidieri.pdf con atributo download
   - En About.jsx, añade el mismo botón de descarga de CV al final de la bio
   - El PDF lo subiré yo manualmente a client/public/docs/cv-pedro-metidieri.pdf

═══ BLOQUE C: ACCESIBILIDAD ═══

6. Añade un "Skip to main content" link:
   - Primer elemento del body en App.jsx o en el layout
   - Visualmente oculto hasta que recibe foco (sr-only + focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded)
   - Al hacer click lleva al #main-content
   - Añade id="main-content" al <main> de cada página

7. Focus trap en menú mobile (Header.jsx):
   - Cuando el menú hamburguesa está abierto, el foco debe quedar atrapado dentro del menú
   - Al pulsar Escape, el menú se cierra y el foco vuelve al botón hamburguesa
   - Implementación: detectar primer y último elemento focusable, interceptar Tab/Shift+Tab

8. Mejora el formulario de Contacto.jsx para screen readers:
   - Añade aria-describedby en cada input apuntando a su mensaje de error
   - Añade aria-invalid={true/false} según el estado de validación
   - Añade un div con role="alert" aria-live="polite" para el mensaje de éxito/error general

9. Revisa todas las imágenes del proyecto y asegúrate de que tienen alt descriptivo y relevante (no genérico como "imagen" o "foto"). En particular:
   - La foto del hero debe tener alt="Pedro Metidieri - Full Stack Developer"
   - Las imágenes de proyectos deben tener alt con el nombre del proyecto
   - Los iconos de tech stack que sean <img> deben tener alt con el nombre de la tecnología

═══ BLOQUE D: MEJORAS FINALES ═══

10. Añade hreflang tags para i18n en el componente SEO.jsx:
    - <link rel="alternate" hreflang="es" href="https://pedrometidieri.com{path}" />
    - <link rel="alternate" hreflang="en" href="https://pedrometidieri.com{path}" />
    - <link rel="alternate" hreflang="x-default" href="https://pedrometidieri.com{path}" />

11. Header.jsx — mejora la navegación:
    - El botón "Contratar" debería ser más prominente (fondo gradiente indigo, no outlined)
    - Asegúrate de que el link activo en la nav tiene un indicador visual claro (underline o color diferente) usando useLocation de react-router-dom

12. Actualiza el README.md del proyecto con:
    - Nombre: Portfolio — Pedro Metidieri
    - Breve descripción (2-3 líneas)
    - Stack: React 19, Vite 7, Tailwind CSS v4, react-router-dom, i18n, EmailJS
    - Sección "Cómo correr en local": npm install, cp .env.example .env.local, npm run dev
    - Sección "Deploy": Vercel con GitHub CI/CD
    - Sección "Variables de entorno" listando las del .env.example
    - Link al sitio: https://pedrometidieri.com

13. Revisa que el Service Worker (client/public/sw.js) cachea al menos:
    - La shell de la app (index.html, main JS, main CSS)
    - Los assets de fuentes
    - Las imágenes locales del public/
    Si no lo hace, actualízalo con una estrategia cache-first para assets estáticos y network-first para HTML.

14. Repaso final: haz un listado de TODAS las rutas del sitio y verifica que cada una tiene:
    - Componente SEO.jsx con title y description únicos
    - Soporte dark/light mode sin elementos rotos
    - RevealOnScroll en las secciones principales
    - PageTransition wrapping

Cuando termines, dame un resumen completo de:
- Archivos creados
- Archivos modificados
- Cualquier cosa que yo deba hacer manualmente (subir capturas, subir CV, configurar variables de entorno en Vercel, etc.)
```

---

## NOTAS IMPORTANTES PARA PEDRO

**Antes de lanzar el Prompt 1:**
- Asegúrate de que estás en la rama correcta (o crea una rama tipo `feature/portfolio-upgrade`)
- Haz commit de lo que tengas ahora para poder revertir si algo sale mal

**Entre Prompt 1 y 2:**
- Verifica que `npm run dev` funciona sin errores
- Comprueba que el formulario de contacto no tiene claves visibles en el código
- Confirma que los datos se importan bien desde `data/`

**Entre Prompt 2 y 3:**
- Verifica visualmente las animaciones de scroll en mobile y desktop
- Comprueba que la tipografía Inter se carga bien
- Revisa las transiciones entre páginas

**Después del Prompt 3:**
- Sube tus capturas reales a `client/public/projects/` como `aperitivo.webp` y `mtdr-landing.webp`
- Sube tu CV a `client/public/docs/cv-pedro-metidieri.pdf`
- Configura las variables de entorno en Vercel (Settings → Environment Variables)
- Conecta el dominio pedrometidieri.com en Vercel
- Haz deploy y prueba todo en producción
