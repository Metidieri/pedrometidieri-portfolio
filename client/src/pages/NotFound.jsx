// src/pages/NotFound.jsx
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white dark:bg-gray-950 px-4 py-16 transition-colors duration-300">
      <div className="text-center max-w-lg">
        <div className="text-8xl md:text-9xl font-display font-bold mb-6 text-indigo-500 dark:text-indigo-400 animate-bounce">
          404
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          {t('notFound.title')}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
          {t('notFound.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-4 text-lg font-medium text-white hover:bg-indigo-700 transition-colors duration-200 shadow-lg"
          >
            {t('notFound.goHome')}
          </a>
          <a
            href="/proyectos"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 px-8 py-4 text-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            {t('notFound.viewProjects')}
          </a>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {t('notFound.lookingFor')}
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <a href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">{t('notFound.about')}</a>
            <a href="/contacto" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">{t('notFound.contact')}</a>
            <a href="/blog" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">{t('notFound.blog')}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
