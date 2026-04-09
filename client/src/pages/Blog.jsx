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
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 transition-colors duration-300" style={{ background: 'linear-gradient(to bottom, var(--color-bg), var(--color-surface), var(--color-surface))' }}>
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
            {t('blog.title')}
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            {t('blog.subtitle')}
          </p>
        </div>
      </section>

      {/* Articles list */}
      <section className="py-16 md:py-24 transition-colors duration-300" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            {sorted.map((article, idx) => (
              <RevealOnScroll key={article.id} direction="up" delay={idx * 100}>
                <Link
                  to={`/blog/${article.slug}`}
                  className="group block rounded-2xl p-8 border hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
                >
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm mb-4" style={{ color: 'var(--color-text-muted)' }}>
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
                  <h2 className="text-xl md:text-2xl font-bold transition-colors duration-200 mb-3" style={{ color: 'var(--color-text)' }}>
                    {article.title[lang]}
                  </h2>

                  {/* Excerpt */}
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    {article.excerpt[lang]}
                  </p>

                  {/* Read more */}
                  <span className="inline-flex items-center gap-2 font-medium text-sm" style={{ color: 'var(--color-primary)' }}>
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
      <section className="py-16 border-t transition-colors duration-300" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
        <div className="container mx-auto px-4 text-center">
          <p className="mb-6" style={{ color: 'var(--color-text-muted)' }}>
            {t('blog.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/proyectos"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-8 py-3 font-medium hover:bg-indigo-600 hover:text-white transition-colors duration-200"
              style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
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
