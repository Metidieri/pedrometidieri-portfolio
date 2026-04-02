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
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-gray-50 via-white to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('services.hero.title')}
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('services.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="py-20 bg-white dark:bg-gray-950">
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
                  className="group bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-indigo-500 dark:hover:border-indigo-600 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-out flex flex-col h-full cursor-default"
                >
                  <Icon className="h-12 w-12 text-indigo-600 dark:text-indigo-500 mb-6 group-hover:rotate-6 transition-transform duration-300" aria-hidden="true" />
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow">
                    {t(`services.${service.key}.description`)}
                  </p>

                  <div className="mb-8">
                    <p className="font-medium text-indigo-600 dark:text-indigo-400 mb-3">
                      {t('services.includes')}
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      {includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('services.from')}</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">
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
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t('services.process.title')}
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
                  {step}
                </div>
                <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">
                  {t(`services.process.step${step}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
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
        <section className="py-24 bg-gradient-to-b from-gray-950 to-black text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {t('services.final.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
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
