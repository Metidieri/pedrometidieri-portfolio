// src/data/blog.js
// Artículos del blog

export const articles = [
  {
    id: 1,
    slug: 'spa-routing-vercel-react',
    date: '2025-03-15',
    readTime: 3,
    title: {
      es: 'Cómo configurar SPA routing en Vercel con React Router',
      en: 'How to configure SPA routing on Vercel with React Router',
    },
    excerpt: {
      es: 'Uno de los errores más comunes al desplegar una SPA de React en Vercel es encontrar errores 404 al navegar directamente a una ruta.',
      en: 'One of the most common errors when deploying a React SPA on Vercel is getting 404 errors when navigating directly to a route.',
    },
    content: {
      es: 'Uno de los errores más comunes al desplegar una SPA de React en Vercel es encontrar errores 404 al navegar directamente a una ruta como /proyectos o /contacto. El problema es que Vercel intenta resolver esa ruta como un archivo estático, y al no encontrarlo, devuelve 404.\n\nLa solución es añadir un vercel.json en la raíz del proyecto con la siguiente configuración:\n\n```json\n{\n  "rewrites": [\n    { "source": "/(.*)", "destination": "/" }\n  ]\n}\n```\n\nEsto le indica a Vercel que cualquier ruta debe servir el index.html y dejar que React Router se encargue del routing en el cliente.\n\nSi además usas el campo `routes` en lugar de `rewrites`, asegúrate de incluir `{ "handle": "filesystem" }` antes de la regla catch-all, para que los archivos estáticos (imágenes, CSS, JS) se sirvan correctamente antes de aplicar el fallback.\n\nEn este portfolio, la configuración final del vercel.json es:\n\n```json\n{\n  "buildCommand": "cd client && npm run build",\n  "outputDirectory": "client/dist",\n  "routes": [\n    { "handle": "filesystem" },\n    { "src": "/(.*)", "dest": "/index.html" }\n  ]\n}\n```\n\nCon esto, rutas como `/proyectos/el-aperitivo` o `/contacto` funcionan tanto al navegar desde la app como al acceder directamente por URL.',
      en: 'One of the most common errors when deploying a React SPA on Vercel is getting 404 errors when navigating directly to a route like /projects or /contact. The problem is that Vercel tries to resolve that route as a static file, and when it doesn\'t find one, returns 404.\n\nThe solution is to add a vercel.json in the project root with the following configuration:\n\n```json\n{\n  "rewrites": [\n    { "source": "/(.*)", "destination": "/" }\n  ]\n}\n```\n\nThis tells Vercel that any route should serve index.html and let React Router handle the routing on the client side.\n\nIf you use the `routes` field instead of `rewrites`, make sure to include `{ "handle": "filesystem" }` before the catch-all rule, so static files (images, CSS, JS) are served correctly before the fallback applies.\n\nIn this portfolio, the final vercel.json configuration is:\n\n```json\n{\n  "buildCommand": "cd client && npm run build",\n  "outputDirectory": "client/dist",\n  "routes": [\n    { "handle": "filesystem" },\n    { "src": "/(.*)", "dest": "/index.html" }\n  ]\n}\n```\n\nWith this, routes like `/projects/el-aperitivo` or `/contact` work both when navigating from the app and when accessing directly by URL.',
    },
  },
  {
    id: 2,
    slug: 'emailjs-serverless-functions-error',
    date: '2025-04-01',
    readTime: 2,
    title: {
      es: 'Por qué EmailJS no funciona desde Serverless Functions',
      en: 'Why EmailJS fails from Serverless Functions',
    },
    excerpt: {
      es: 'EmailJS está diseñado para ejecutarse en el navegador. Desde una Serverless Function recibirás un error 403.',
      en: 'EmailJS is designed to run in the browser. From a Serverless Function you will get a 403 error.',
    },
    content: {
      es: 'EmailJS está diseñado para ejecutarse en el navegador. Cuando intentas llamarlo desde una Serverless Function de Vercel (entorno Node.js), recibirás un error 403 con el mensaje "API access from non-browser environments is currently disabled".\n\nLa solución correcta no es activar esa opción en el dashboard de EmailJS, sino llamar a EmailJS directamente desde el componente React usando @emailjs/browser. Las credenciales (PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID) se pasan como variables de entorno con prefijo VITE_ para que Vite las exponga al cliente.\n\nEl flujo correcto es:\n\n1. Instalar el paquete: `npm install @emailjs/browser`\n2. Importarlo en tu componente: `import emailjs from \'@emailjs/browser\'`\n3. Usar `emailjs.sendForm()` directamente en el handler del submit\n4. Las credenciales van en `.env.local` con prefijo `VITE_`:\n\n```\nVITE_EMAILJS_PUBLIC_KEY=tu_public_key\nVITE_EMAILJS_SERVICE_ID=tu_service_id\nVITE_EMAILJS_TEMPLATE_ID=tu_template_id\n```\n\nEn el componente React:\n\n```jsx\nawait emailjs.sendForm(\n  import.meta.env.VITE_EMAILJS_SERVICE_ID,\n  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,\n  formRef.current,\n  import.meta.env.VITE_EMAILJS_PUBLIC_KEY,\n);\n```\n\nEste es exactamente el cambio que aplicamos en este portfolio: eliminamos la Serverless Function intermediaria y llamamos a EmailJS directamente desde el cliente.',
      en: 'EmailJS is designed to run in the browser. When you try to call it from a Vercel Serverless Function (Node.js environment), you will receive a 403 error with the message "API access from non-browser environments is currently disabled".\n\nThe correct solution is not to enable that option in the EmailJS dashboard, but to call EmailJS directly from your React component using @emailjs/browser. Credentials (PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID) are passed as environment variables with the VITE_ prefix so that Vite exposes them to the client.\n\nThe correct flow is:\n\n1. Install the package: `npm install @emailjs/browser`\n2. Import it in your component: `import emailjs from \'@emailjs/browser\'`\n3. Use `emailjs.sendForm()` directly in the submit handler\n4. Credentials go in `.env.local` with the `VITE_` prefix:\n\n```\nVITE_EMAILJS_PUBLIC_KEY=your_public_key\nVITE_EMAILJS_SERVICE_ID=your_service_id\nVITE_EMAILJS_TEMPLATE_ID=your_template_id\n```\n\nIn the React component:\n\n```jsx\nawait emailjs.sendForm(\n  import.meta.env.VITE_EMAILJS_SERVICE_ID,\n  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,\n  formRef.current,\n  import.meta.env.VITE_EMAILJS_PUBLIC_KEY,\n);\n```\n\nThis is exactly the change we applied in this portfolio: we removed the intermediary Serverless Function and called EmailJS directly from the client.',
    },
  },
];
