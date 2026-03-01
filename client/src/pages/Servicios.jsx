// src/pages/Servicios.jsx
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { ArrowRight, Code2, Smartphone, Zap, Brain, Cloud, Shield } from 'lucide-react';

export default function Servicios() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Code2,
      title: t('services.web.title'),
      description: t('services.web.description'),
      includes: [
        t('services.web.includes.0'),
        t('services.web.includes.1'),
        t('services.web.includes.2'),
        t('services.web.includes.3'),
      ],
      priceFrom: "desde 800€",
      color: "indigo",
    },
    {
      icon: Smartphone,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      includes: [
        t('services.mobile.includes.0'),
        t('services.mobile.includes.1'),
        t('services.mobile.includes.2'),
        t('services.mobile.includes.3'),
      ],
      priceFrom: "desde 1200€",
      color: "blue",
    },
    {
      icon: Brain,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      includes: [
        t('services.ai.includes.0'),
        t('services.ai.includes.1'),
        t('services.ai.includes.2'),
        t('services.ai.includes.3'),
      ],
      priceFrom: "desde 1500€",
      color: "purple",
    },
    {
      icon: Cloud,
      title: t('services.cloud.title'),
      description: t('services.cloud.description'),
      includes: [
        t('services.cloud.includes.0'),
        t('services.cloud.includes.1'),
        t('services.cloud.includes.2'),
        t('services.cloud.includes.3'),
      ],
      priceFrom: "desde 900€",
      color: "emerald",
    },
    {
      icon: Zap,
      title: t('services.optimization.title'),
      description: t('services.optimization.description'),
      includes: [
        t('services.optimization.includes.0'),
        t('services.optimization.includes.1'),
        t('services.optimization.includes.2'),
        t('services.optimization.includes.3'),
      ],
      priceFrom: "desde 600€",
      color: "amber",
    },
    {
      icon: Shield,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      includes: [
        t('services.consulting.includes.0'),
        t('services.consulting.includes.1'),
        t('services.consulting.includes.2'),
      ],
      priceFrom: "desde 700€",
      color: "rose",
    },
  ];

  return (
    <>
      <SEO 
        title={t('services.seo.title')}
        description={t('services.seo.description')}
        image="/og-image.jpg"
        url="https://tudominio.com/servicios"
      />

      {/* Hero Servicios */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-gray-50 via-white to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
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
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-indigo-500 dark:hover:border-indigo-600 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                <service.icon className="h-12 w-12 text-indigo-600 dark:text-indigo-500 mb-6" />
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow">
                  {service.description}
                </p>

                <div className="mb-8">
                  <p className="font-medium text-indigo-600 dark:text-indigo-400 mb-3">
                    {t('services.includes')}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-500 mt-1">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Desde</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {service.priceFrom}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo trabajo */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t('services.process.title')}
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[1,2,3,4].map((step) => (
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

      {/* CTA Final */}
      <section className="py-24 dark:bg-gradient-to-b from-gray-950 to-black dark:text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('services.final.title')}
          </h2>
          <p className="text-xl dark:text-gray-400 max-w-2xl mx-auto mb-10">
            {t('services.final.subtitle')}
          </p>
          <a
            href="/contacto"
            className="inline-block rounded-full text-white bg-indigo-600 px-14 py-6 text-xl font-medium hover:bg-indigo-500 transition-all shadow-2xl hover:shadow-3xl"
          >
            {t('services.final.button')}
          </a>
        </div>
      </section>
    </>
  );
}