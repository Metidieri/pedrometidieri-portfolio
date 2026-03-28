// src/components/JsonLd.jsx
// Inyecta structured data schema.org (Person + WebSite) en el <head>
// Mejora la presencia en Google Knowledge Panel y rich results

import { Helmet } from 'react-helmet-async';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://pedrometidieri.com/#person',
      name: 'Pedro Metidieri',
      jobTitle: 'Full Stack Developer',
      url: 'https://pedrometidieri.com',
      email: 'pedrometidierigomez@gmail.com',
      sameAs: [
        'https://www.linkedin.com/in/pedrometidieri/',
        'https://github.com/Metidieri',
      ],
      knowsAbout: ['React', 'Node.js', 'Next.js', 'TypeScript', 'PostgreSQL', 'AI Integration'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://pedrometidieri.com/#website',
      url: 'https://pedrometidieri.com',
      name: 'Pedro Metidieri | Full Stack Developer',
      description: 'Portfolio profesional de Pedro Metidieri, desarrollador Full Stack especializado en React, Node.js y Next.js.',
      author: { '@id': 'https://pedrometidieri.com/#person' },
      inLanguage: ['es', 'en'],
    },
  ],
};

export default function JsonLd() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
