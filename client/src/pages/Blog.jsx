// src/pages/Blog.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, BookOpen, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import RevealOnScroll from '../components/RevealOnScroll';

export default function Blog() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const topics = [
    { icon: '⚛️', labelKey: 'react' },
    { icon: '🤖', labelKey: 'ai' },
    { icon: '🚀', labelKey: 'performance' },
    { icon: '🛠️', labelKey: 'practices' },
  ];

  const handleNotify = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-8">
            <BookOpen className="h-4 w-4" />
            {t('blog.badge')}
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('blog.title')}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {t('blog.introPrefix')}{' '}
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{t('blog.introWeb')}</span>,{' '}
            <span className="text-purple-600 dark:text-purple-400 font-semibold">{t('blog.introAI')}</span>{' '}
            {t('blog.introPractices') && <>y <span className="text-pink-600 dark:text-pink-400 font-semibold">{t('blog.introPractices')}</span>{' '}</>}
            {t('blog.introSuffix')}
          </p>
        </div>
      </section>

      {/* Temas que se cubrirán */}
      <RevealOnScroll direction="fade">
      <section className="py-16 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            {t('blog.topicsTitle')}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {topics.map((topic) => (
              <div
                key={topic.labelKey}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center"
              >
                <span className="text-3xl" role="img" aria-hidden="true">
                  {topic.icon}
                </span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t(`blog.topics.${topic.labelKey}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      </RevealOnScroll>

      {/* Formulario de notificación */}
      <RevealOnScroll direction="fade" delay={100}>
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <Mail className="h-10 w-10 text-indigo-600 dark:text-indigo-400 mx-auto mb-6" />

          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('blog.notifyTitle')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t('blog.notifyDescription')}
          </p>

          {submitted ? (
            <div className="p-5 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800 font-medium">
              {t('blog.notifySuccess')}
            </div>
          ) : (
            <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder={t('blog.notifyPlaceholder')}
                className="flex-1 px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-200 shadow-lg whitespace-nowrap"
              >
                {t('blog.notifyButton')}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </section>
      </RevealOnScroll>

      {/* CTA alternativo */}
      <section className="py-16 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
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
