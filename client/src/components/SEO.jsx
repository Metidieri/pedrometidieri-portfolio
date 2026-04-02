// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const BASE_URL = 'https://pedrometidieri.com';

export default function SEO({
  title       = 'Pedro Metidieri | Full Stack Developer',
  description = 'Desarrollador Full Stack especializado en React, Node.js, Next.js y soluciones escalables. Proyectos web y apps a medida.',
  image       = `${BASE_URL}/og-image.png`,
  url         = BASE_URL,
  type        = 'website',
}) {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'es';

  // Extraer el path relativo de la URL para los hreflang
  const path = url.startsWith(BASE_URL) ? url.slice(BASE_URL.length) || '/' : '/';
  const canonicalUrl = `${BASE_URL}${path}`;

  return (
    <Helmet>
      {/* Dynamic html lang attribute */}
      <html lang={lang} />

      {/* Título básico */}
      <title>{title}</title>
      <meta name="title" content={title} />

      {/* Descripción */}
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* hreflang — sitio bilingüe (es/en) en la misma URL */}
      <link rel="alternate" hreflang="es"      href={canonicalUrl} />
      <link rel="alternate" hreflang="en"      href={canonicalUrl} />
      <link rel="alternate" hreflang="x-default" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type"        content={type} />
      <meta property="og:url"         content={canonicalUrl} />
      <meta property="og:title"       content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={image} />
      <meta property="og:site_name"   content="Pedro Metidieri" />

      {/* Twitter Cards */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:url"         content={canonicalUrl} />
      <meta name="twitter:title"       content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={image} />

      {/* Favicon */}
      <link rel="icon"            href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Helmet>
  );
}
