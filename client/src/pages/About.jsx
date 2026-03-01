// src/pages/About.jsx
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('about.seo.title')}
        description={t('about.seo.description')}
        image={logo}
        url="https://tudominio.com/about"
      />

      {/* Hero About */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              {t('about.title')}
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Foto + Bio */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Foto */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800">
                <img 
                  src={logo} 
                  alt={t('about.photoAlt')} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Biografía */}
            <div className="space-y-6 text-lg">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('about.bio.p1')}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('about.bio.p2')}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('about.bio.p3')}
              </p>

              <div className="pt-6">
                <a 
                  href="/contacto"
                  className="inline-flex items-center gap-3 rounded-full bg-indigo-600 px-8 py-4 text-lg font-medium text-white hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 transition-all shadow-lg"
                >
                  {t('about.cta')}
                  <ArrowRight className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section className="py-20 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t('about.experience.title')}
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Experiencia 1 */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-48 text-sm text-gray-500 dark:text-gray-400 font-medium">
                2025 — Actualidad
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t('about.experience.job1.title')}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 mb-3">
                  {t('about.experience.job1.company')}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t('about.experience.job1.description')}
                </p>
              </div>
            </div>

            {/* Experiencia 2 */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-48 text-sm text-gray-500 dark:text-gray-400 font-medium">
                2024 — 2025
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t('about.experience.job2.title')}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 mb-3">
                  {t('about.experience.job2.company')}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t('about.experience.job2.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('about.final.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            {t('about.final.subtitle')}
          </p>
          <a 
            href="/contacto"
            className="inline-block rounded-full bg-indigo-600 px-10 py-5 text-xl font-medium text-white hover:bg-indigo-700 transition-all shadow-xl"
          >
            {t('about.final.button')}
          </a>
        </div>
      </section>
    </>
  );
}