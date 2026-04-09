// src/pages/NotFound.jsx
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 transition-colors duration-300" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="text-center max-w-lg">
        <div className="text-8xl md:text-9xl font-display font-bold mb-6 animate-bounce" style={{ color: 'var(--color-primary)' }}>
          404
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
          {t('notFound.title')}
        </h1>
        <p className="text-lg md:text-xl mb-8" style={{ color: 'var(--color-text-muted)' }}>
          {t('notFound.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-lg font-medium text-white transition-colors duration-200 shadow-lg"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            {t('notFound.goHome')}
          </a>
          <a
            href="/proyectos"
            className="inline-flex items-center justify-center rounded-lg border px-8 py-4 text-lg font-medium transition-colors duration-200"
            style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
          >
            {t('notFound.viewProjects')}
          </a>
        </div>
        <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
          {t('notFound.lookingFor')}
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <a href="/about" className="transition-colors duration-200" style={{ color: 'var(--color-text-muted)' }}>{t('notFound.about')}</a>
            <a href="/contacto" className="transition-colors duration-200" style={{ color: 'var(--color-text-muted)' }}>{t('notFound.contact')}</a>
            <a href="/blog" className="transition-colors duration-200" style={{ color: 'var(--color-text-muted)' }}>{t('notFound.blog')}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
