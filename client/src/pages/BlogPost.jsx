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
            className="my-6 p-5 rounded-xl bg-gray-900 dark:bg-gray-800 border border-gray-700 overflow-x-auto"
          >
            {langTag && (
              <div className="text-xs text-gray-400 mb-3 uppercase tracking-wider">{langTag}</div>
            )}
            <code className="text-sm text-gray-100 font-mono whitespace-pre">{code}</code>
          </pre>
        );
      }
      return part.split('\n\n').map((paragraph, j) => (
        <p
          key={`${i}-${j}`}
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
        >
          {paragraph.split('`').map((seg, k) =>
            k % 2 === 1 ? (
              <code
                key={k}
                className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 text-base font-mono"
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

      <div className="min-h-screen bg-white dark:bg-gray-950 py-16 md:py-24 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('blog.backToList')}
          </Link>

          <RevealOnScroll direction="up">
            {/* Header */}
            <header className="mb-12">
              <h1 className="font-display text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {title}
              </h1>
              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
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
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors duration-200"
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
