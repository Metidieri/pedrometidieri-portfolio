// src/pages/Blog.jsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import SEO from '../components/SEO';
import RevealOnScroll from '../components/RevealOnScroll';
import { articles } from '../data/blog';

export default function Blog() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('en') ? 'en' : 'es';

  // Most recent first
  const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <SEO
        title={t('blog.seo.title')}
        description={t('blog.seo.description')}
        url="https://pedrometidieri.com/blog"
      />

      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-gray-50 via-white to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('blog.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {t('blog.subtitle')}
          </p>
        </div>
      </section>

      {/* Articles list */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            {sorted.map((article, idx) => (
              <RevealOnScroll key={article.id} direction="up" delay={idx * 100}>
                <Link
                  to={`/blog/${article.slug}`}
                  className="group block bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-indigo-500 dark:hover:border-indigo-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      {new Date(article.date).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      {article.readTime} min
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200 mb-3">
                    {article.title[lang]}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {article.excerpt[lang]}
                  </p>

                  {/* Read more */}
                  <span className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium text-sm">
                    {t('blog.readMore')}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                  </span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {t('blog.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/proyectos"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-indigo-600 px-8 py-3 font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white transition-colors duration-200"
            >
              {t('blog.ctaProjects')}
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700 transition-colors duration-200 shadow-lg"
            >
              {t('blog.ctaContact')}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
