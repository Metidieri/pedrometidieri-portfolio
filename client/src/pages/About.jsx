// src/pages/About.jsx
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import RevealOnScroll from '../components/RevealOnScroll';
import { ArrowRight, Download } from 'lucide-react';
import logo from '../assets/logo.png';

const experiences = [
  { period: '2025 — Actualidad', jobKey: 'job1' },
  { period: '2024 — 2025',       jobKey: 'job2' },
  { period: '2023 — 2024',       jobKey: 'job3' },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('about.seo.title')}
        description={t('about.seo.description')}
        image={logo}
        url="https://pedrometidieri.com/about"
      />

      {/* ── Hero ── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              {t('about.title')}
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* ── Foto + Bio ── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Foto — entra desde la izquierda */}
            <RevealOnScroll direction="left">
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
            </RevealOnScroll>

            {/* Biografía — entra desde la derecha */}
            <RevealOnScroll direction="right" delay={100}>
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

                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contacto"
                    style={{ transitionProperty: 'all', transitionDuration: '200ms' }}
                    className="inline-flex items-center gap-3 rounded-full bg-indigo-600 px-8 py-4 text-lg font-medium text-white hover:bg-indigo-700 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95 shadow-lg"
                  >
                    {t('about.cta')}
                    <ArrowRight className="h-6 w-6" aria-hidden="true" />
                  </a>
                  <a
                    href="/docs/cv-pedro-metidieri.pdf"
                    download
                    style={{ transitionProperty: 'all', transitionDuration: '200ms' }}
                    className="inline-flex items-center gap-3 rounded-full border-2 border-gray-300 dark:border-gray-600 px-8 py-4 text-lg font-medium text-gray-700 dark:text-gray-300 hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 hover:scale-105 active:scale-95"
                  >
                    <Download className="h-5 w-5" aria-hidden="true" />
                    {t('common.downloadCv')}
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── Experiencia ── */}
      <section className="py-20 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <RevealOnScroll direction="up">
            <h2 className="font-display text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              {t('about.experience.title')}
            </h2>
          </RevealOnScroll>

          <div className="max-w-3xl mx-auto space-y-12">
            {experiences.map(({ period, jobKey }, idx) => (
              <RevealOnScroll key={jobKey} direction="up" delay={idx * 120}>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-48 text-sm text-gray-500 dark:text-gray-400 font-medium shrink-0">
                    {period}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      {t(`about.experience.${jobKey}.title`)}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 mb-3">
                      {t(`about.experience.${jobKey}.company`)}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {t(`about.experience.${jobKey}.description`)}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <RevealOnScroll direction="fade">
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black text-center">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              {t('about.final.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
              {t('about.final.subtitle')}
            </p>
            <a
              href="/contacto"
              style={{ transitionProperty: 'all', transitionDuration: '200ms' }}
              className="inline-block rounded-full bg-indigo-600 px-10 py-5 text-xl font-medium text-white hover:bg-indigo-700 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25 active:scale-95 shadow-xl"
            >
              {t('about.final.button')}
            </a>
          </div>
        </section>
      </RevealOnScroll>
    </>
  );
}
