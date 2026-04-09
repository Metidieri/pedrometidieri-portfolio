// src/pages/Servicios.jsx
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import SEO from '../components/SEO';
import { services, processSteps } from '../data/services';
import RevealOnScroll from '../components/RevealOnScroll';

export default function Servicios() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('services.seo.title')}
        description={t('services.seo.description')}
        image="/og-image.jpg"
        url="https://pedrometidieri.com/servicios"
      />

      {/* Hero Servicios */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 transition-colors duration-300" style={{ background: 'linear-gradient(to bottom, var(--color-bg), var(--color-surface), var(--color-surface))' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
            {t('services.hero.title')}
          </h1>
          <p className="text-2xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            {t('services.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="py-20 transition-colors duration-300" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const includes = [0, 1, 2, 3].map((i) => {
                const key = t(`services.${service.key}.includes.${i}`, { defaultValue: '' });
                return key;
              }).filter(Boolean);

              return (
                <RevealOnScroll key={service.key} direction="up" delay={idx * 100}>
                <div
                  className="group rounded-2xl p-8 border hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-out flex flex-col h-full cursor-default"
                  style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
                >
                  <Icon className="h-12 w-12 mb-6 group-hover:rotate-6 transition-transform duration-300" style={{ color: 'var(--color-primary)' }} aria-hidden="true" />
                  <h3 className="text-2xl font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p className="mb-8 flex-grow" style={{ color: 'var(--color-text-muted)' }}>
                    {t(`services.${service.key}.description`)}
                  </p>

                  <div className="mb-8">
                    <p className="font-medium mb-3" style={{ color: 'var(--color-primary)' }}>
                      {t('services.includes')}
                    </p>
                    <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                      {includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{t('services.from')}</p>
                    <p className="text-3xl font-bold" style={{ color: 'var(--color-text)' }}>
                      {service.priceFrom}
                    </p>
                  </div>
                </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cómo trabajo */}
      <RevealOnScroll direction="fade">
      <section className="py-20 transition-colors duration-300" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12" style={{ color: 'var(--color-text)' }}>
            {t('services.process.title')}
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl font-bold mb-6" style={{ backgroundColor: 'rgba(99,102,241,0.12)', color: 'var(--color-primary)' }}>
                  {step}
                </div>
                <h3 className="font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
                  {t(`services.process.step${step}.title`)}
                </h3>
                <p style={{ color: 'var(--color-text-muted)' }}>
                  {t(`services.process.step${step}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </RevealOnScroll>

      {/* CTA Final */}
      <RevealOnScroll direction="up">
        <section className="py-24 text-center" style={{ background: 'linear-gradient(to bottom, var(--color-bg), var(--color-surface))' }}>
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
              {t('services.final.title')}
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: 'var(--color-text-muted)' }}>
              {t('services.final.subtitle')}
            </p>
            <a
              href="/contacto"
              className="inline-block rounded-full text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-14 py-6 text-xl font-medium hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95 shadow-2xl transition-all duration-200"
            >
              {t('services.final.button')}
            </a>
          </div>
        </section>
      </RevealOnScroll>
    </>
  );
}
