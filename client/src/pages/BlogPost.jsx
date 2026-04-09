// src/pages/BlogPost.jsx
import { useParams, Navigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { articles } from '../data/blog';
import SEO from '../components/SEO';
import RevealOnScroll from '../components/RevealOnScroll';

export default function BlogPost() {
  const { slug } = useParams();
  const { i18n, t } = useTranslation();
  const lang = i18n.language?.startsWith('en') ? 'en' : 'es';

  const article = articles.find((a) => a.slug === slug);
  if (!article) return <Navigate to="/blog" replace />;

  const title = article.title[lang];
  const content = article.content[lang];

  // Split content into paragraphs, preserving code blocks
  const renderContent = (text) => {
    const parts = text.split(/(```[\s\S]*?```)/g);
    return parts.map((part, i) => {
      if (part.startsWith('```')) {
        const lines = part.split('\n');
        const langTag = lines[0].replace('```', '').trim();
        const code = lines.slice(1, -1).join('\n');
        return (
          <pre
            key={i}
            className="my-6 p-5 rounded-xl border overflow-x-auto"
            style={{ backgroundColor: 'var(--color-surface-2)', borderColor: 'var(--color-border)' }}
          >
            {langTag && (
              <div className="text-xs mb-3 uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>{langTag}</div>
            )}
            <code className="text-sm font-mono whitespace-pre" style={{ color: 'var(--color-text)' }}>{code}</code>
          </pre>
        );
      }
      return part.split('\n\n').map((paragraph, j) => (
        <p
          key={`${i}-${j}`}
          className="text-lg leading-relaxed mb-6"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {paragraph.split('`').map((seg, k) =>
            k % 2 === 1 ? (
              <code
                key={k}
                className="px-1.5 py-0.5 rounded text-base font-mono"
                style={{ backgroundColor: 'var(--color-surface-2)', color: 'var(--color-primary)' }}
              >
                {seg}
              </code>
            ) : (
              seg
            )
          )}
        </p>
      ));
    });
  };

  return (
    <>
      <SEO
        title={`${title} | Pedro Metidieri`}
        description={article.excerpt[lang]}
        url={`https://pedrometidieri.com/blog/${article.slug}`}
      />

      <div className="min-h-screen py-16 md:py-24 transition-colors duration-300" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 transition-colors duration-200 mb-10"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <ArrowLeft className="h-4 w-4" />
            {t('blog.backToList')}
          </Link>

          <RevealOnScroll direction="up">
            {/* Header */}
            <header className="mb-12">
              <h1 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: 'var(--color-text)' }}>
                {title}
              </h1>
              <div className="flex items-center gap-6 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  {new Date(article.date).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {article.readTime} min {lang === 'es' ? 'de lectura' : 'read'}
                </span>
              </div>
            </header>

            {/* Content */}
            <article className="prose-custom">{renderContent(content)}</article>
          </RevealOnScroll>

          {/* Back to blog */}
          <div className="mt-16 pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-medium transition-colors duration-200"
              style={{ color: 'var(--color-primary)' }}
            >
              <ArrowLeft className="h-4 w-4" />
              {t('blog.backToList')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
