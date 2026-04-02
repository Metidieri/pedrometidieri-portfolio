# Portfolio — Pedro Metidieri

Portfolio personal de Pedro Metidieri, desarrollador Full Stack. Muestra proyectos reales, servicios, experiencia profesional y un formulario de contacto funcional con reCAPTCHA y EmailJS.

Sitio en producción: [pedrometidieri.com](https://pedrometidieri.com)

---

## Stack

| Capa | Tecnología |
|---|---|
| UI | React 18 + Vite 7 |
| Estilos | Tailwind CSS v4 |
| Routing | react-router-dom v7 |
| i18n | react-i18next (ES / EN) |
| Formulario | react-hook-form + reCAPTCHA v3 |
| Email | EmailJS (Vercel Serverless Function) |
| SEO | react-helmet-async |
| Deploy | Vercel (CI/CD con GitHub) |

---

## Cómo correr en local

```bash
# 1. Clonar el repositorio
git clone https://github.com/Metidieri/mtdr.git
cd mtdr

# 2. Instalar dependencias del cliente
cd client
npm install

# 3. Configurar variables de entorno
cp ../.env.example ../.env.local
# Editar .env.local con tus keys reales

# 4. Iniciar en desarrollo
npm run dev
```

La app estará disponible en `http://localhost:5173`.

---

## Variables de entorno

Copia `.env.example` como `.env.local` y rellena los valores:

| Variable | Descripción |
|---|---|
| `EMAILJS_SERVICE_ID` | ID del servicio EmailJS |
| `EMAILJS_TEMPLATE_ID` | ID de la plantilla EmailJS |
| `EMAILJS_PUBLIC_KEY` | Clave pública de EmailJS |
| `RECAPTCHA_SECRET_KEY` | Clave secreta de reCAPTCHA v3 (solo servidor) |
| `VITE_RECAPTCHA_SITE_KEY` | Clave pública de reCAPTCHA v3 (cliente) |

> Las variables `VITE_*` son accesibles desde el cliente. El resto solo se usan en la Serverless Function de Vercel (`/api/contact`).

---

## Deploy

El proyecto usa **Vercel** con despliegue continuo desde la rama `main` de GitHub.

- Cada push a `main` despliega automáticamente.
- Las variables de entorno se configuran en el dashboard de Vercel → Settings → Environment Variables.
- El directorio raíz del proyecto en Vercel es `client/`.
- La función serverless está en `api/contact.js`.

---

## Estructura de carpetas

```
mtdr/
├── api/                  # Vercel Serverless Functions
│   └── contact.js        # Endpoint de contacto (EmailJS + reCAPTCHA)
├── client/
│   ├── public/
│   │   ├── docs/         # CV descargable (cv-pedro-metidieri.pdf)
│   │   ├── locales/      # Traducciones i18n (es / en)
│   │   ├── tech/         # Iconos de tecnologías (SVG)
│   │   └── sw.js         # Service Worker (PWA)
│   └── src/
│       ├── components/   # Componentes reutilizables
│       ├── data/         # Datos estáticos (proyectos, servicios, skills)
│       ├── hooks/        # Custom hooks (useReveal, useTheme)
│       ├── i18n/         # Configuración de i18next
│       └── pages/        # Páginas de la app
└── .env.example          # Plantilla de variables de entorno
```
