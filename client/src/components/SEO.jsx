// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = 'Pedro Metidieri | Full Stack Developer',
  description = 'Desarrollador Full Stack especializado en React, Node.js, Next.js y soluciones escalables. Proyectos web y apps a medida.',
  image = 'https://tudominio.com/assets/og-image.jpg', // pon tu imagen real aquí
  url = 'https://tudominio.com',
  type = 'website',
}) {
  return (
    <Helmet>
      {/* Título básico */}
      <title>{title}</title>
      <meta name="title" content={title} />

      {/* Descripción */}
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Pedro Metidieri" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon (asegúrate de tenerlo en public/) */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Helmet>
  );
}