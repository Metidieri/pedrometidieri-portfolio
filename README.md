# Portfolio — Pedro Metidieri

Portfolio personal de Pedro Metidieri, desarrollador Full Stack. Muestra proyectos reales, servicios, experiencia profesional y un formulario de contacto funcional con reCAPTCHA y EmailJS.

Sitio en producción: [pedrometidieri.com](https://pedrometidieri.com)

---

## Stack

| Capa | Tecnología |
|---|---|
| UI | React 19 + Vite |
| Estilos | Tailwind CSS v4 |
| Routing | react-router-dom v7 |
| i18n | react-i18next (ES / EN) |
| Formulario | react-hook-form + reCAPTCHA v3 |
| Email | EmailJS (@emailjs/browser — llamada directa desde cliente) |
| SEO | react-helmet-async |
| Deploy | Vercel (CI/CD con GitHub) |

---

## Cómo correr en local

```bash
# 1. Clonar el repositorio
git clone https://github.com/Metidieri/pedrometidieri-portfolio.git
cd pedrometidieri-portfolio

# 2. Instalar dependencias del cliente
cd client
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus keys reales

# 4. Iniciar en desarrollo
npm run dev
```

La app estará disponible en `http://localhost:5173`.

---

## Variables de entorno

Crea un archivo `client/.env.local` y rellena los valores:

| Variable | Descripción |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | ID del servicio EmailJS |
| `VITE_EMAILJS_TEMPLATE_ID` | ID de la plantilla EmailJS |
| `VITE_EMAILJS_PUBLIC_KEY` | Clave pública de EmailJS |
| `VITE_RECAPTCHA_SITE_KEY` | Clave pública de reCAPTCHA v3 (cliente) |

> Todas las variables usan el prefijo `VITE_` para que Vite las exponga al cliente. EmailJS se llama directamente desde el navegador, no desde una Serverless Function.

---

## Deploy

El proyecto usa **Vercel** con despliegue continuo desde la rama `main` de GitHub.

- Cada push a `main` despliega automáticamente.
- Las variables de entorno se configuran en el dashboard de Vercel → Settings → Environment Variables.
- El directorio raíz del proyecto en Vercel es `client/`.

---

## Estructura de carpetas

```
mtdr/
├── api/
│   └── contact.js              # [DEPRECATED] Serverless Function obsoleta
├── client/
│   ├── public/
│   │   ├── docs/               # CV descargable (cv-pedro-metidieri.pdf)
│   │   ├── locales/            # Traducciones i18n (es / en)
│   │   │   ├── es/translation.json
│   │   │   └── en/translation.json
│   │   ├── projects/           # Imágenes de proyectos (.webp)
│   │   │   ├── elaperitivo-index.webp
│   │   │   ├── mtdr-landing.webp
│   │   │   └── portfolio.webp
│   │   ├── tech/               # Iconos de tecnologías (32 SVGs)
│   │   ├── manifest.json
│   │   ├── robots.txt
│   │   ├── sitemap.xml
│   │   └── sw.js               # Service Worker (PWA)
│   └── src/
│       ├── components/         # Componentes reutilizables
│       │   ├── AnimatedTitle.jsx
│       │   ├── BackToTop.jsx
│       │   ├── ErrorBoundary.jsx
│       │   ├── ExperienceTimeline.jsx
│       │   ├── Footer.jsx
│       │   ├── Header.jsx
│       │   ├── JsonLd.jsx
│       │   ├── PageTransition.jsx
│       │   ├── RevealOnScroll.jsx
│       │   ├── SectionDivider.jsx
│       │   ├── SEO.jsx
│       │   ├── TechStack.jsx
│       │   └── Testimonios.jsx
│       ├── data/               # Datos estáticos
│       │   ├── blog.js         # Artículos del blog
│       │   ├── experience.js   # Experiencia laboral
│       │   ├── projects.js     # Proyectos (case studies)
│       │   ├── services.js     # Servicios y precios
│       │   ├── skills.js       # Categorías de skills
│       │   └── testimonials.js # Testimonios de clientes
│       ├── hooks/
│       │   └── useTheme.js     # Hook dark/light mode
│       ├── i18n/
│       │   └── index.js        # Configuración de i18next
│       ├── lib/
│       │   └── motion.js       # Variantes de Framer Motion
│       ├── pages/
│       │   ├── About.jsx
│       │   ├── Blog.jsx
│       │   ├── BlogPost.jsx
│       │   ├── Contacto.jsx
│       │   ├── Experiencia.jsx
│       │   ├── Home.jsx
│       │   ├── NotFound.jsx
│       │   ├── ProyectoDetalle.jsx
│       │   ├── Proyectos.jsx
│       │   └── Servicios.jsx
│       ├── App.jsx             # Router + lazy loading + ErrorBoundary
│       ├── index.css           # Tailwind imports + variables CSS
│       └── main.jsx            # Entry point
├── .gitignore
├── vercel.json                 # Build + SPA routing config
├── package.json
└── README.md
```
