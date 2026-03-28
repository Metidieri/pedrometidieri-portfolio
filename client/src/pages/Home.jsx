// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import SkeletonLoader from '../components/SkeletonLoader';
import logo from '../assets/logo.png';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import TechStack from '../components/TechStack';
import { TypeAnimation } from 'react-type-animation';
import Testimonios from '../components/Testimonios';
import RevealOnScroll from '../components/RevealOnScroll';
import { useTranslation } from 'react-i18next';
import { skillCategories } from '../data/skills';
import { featuredProjects } from '../data/projects';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SEO
        title={t('home.seo.title')}
        description={t('home.seo.description')}
        image="/og-image.png"
        url="https://pedrometidieri.com"
      />
      <JsonLd />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-24 md:py-32 transition-colors duration-300">
        {/* Blob de fondo decorativo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-3xl" />
          <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-purple-400/10 dark:bg-purple-600/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-pink-400/5 dark:bg-pink-600/5 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Foto */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500 dark:border-indigo-600 shadow-2xl shadow-indigo-500/30 dark:shadow-indigo-600/30">
              <img
                src={logo}
                alt={t('home.hero.imageAlt')}
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/30 to-transparent" />
            </div>
          </div>

          {/* Texto y CTA */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* Badge "Disponible para proyectos" */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              {t('home.hero.available')}
            </div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
              <TypeAnimation
                sequence={[
                  t('home.hero.title1'),
                  2000,
                  t('home.hero.title2'),
                  2000,
                  t('home.hero.title3'),
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400"
              />
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto md:mx-0 mb-10">
              {t('home.hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <a
                href="/contacto"
                style={{ transitionProperty: 'all', transitionDuration: '200ms', transitionTimingFunction: 'ease-out' }}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-10 py-5 text-xl font-medium text-white hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
              >
                {t('home.hero.hire')}
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-200" />
              </a>

              <a
                href="/proyectos"
                style={{ transitionProperty: 'all', transitionDuration: '200ms', transitionTimingFunction: 'ease-out' }}
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-indigo-600 px-10 py-5 text-xl font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white hover:scale-105 active:scale-95"
              >
                {t('home.hero.seeProjects')}
              </a>

              <a
                href="/docs/cv-pedro-metidieri.pdf"
                download
                style={{ transitionProperty: 'all', transitionDuration: '200ms', transitionTimingFunction: 'ease-out' }}
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-gray-300 dark:border-gray-600 px-10 py-5 text-xl font-medium text-gray-700 dark:text-gray-300 hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 hover:scale-105 active:scale-95"
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                {t('common.downloadCv')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sobre mí / Skills ── */}
      <RevealOnScroll direction="up">
        <section className="py-20 md:py-24 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('home.about.title')}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {t('home.about.p1')}
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('home.about.p2')}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {skillCategories.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.key}
                      style={{ transitionProperty: 'border-color, box-shadow', transitionDuration: '200ms' }}
                      className="bg-gray-100 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-300 dark:border-gray-800 hover:border-indigo-500 dark:hover:border-indigo-600/50 hover:shadow-md"
                    >
                      <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-500 mb-4" />
                      <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                        {t(`home.skills.${skill.key}.label`)}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t(`home.skills.${skill.key}.items`)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* ── Tech Stack ── */}
      <RevealOnScroll direction="up" delay={100}>
        <TechStack />
      </RevealOnScroll>

      {/* ── Proyectos destacados ── */}
      <RevealOnScroll direction="up" delay={50}>
        <section className="py-20 md:py-24 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              {t('home.projects.title')}
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              {t('home.projects.subtitle')}
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {isLoading ? (
                <SkeletonLoader type="card" count={2} />
              ) : (
                featuredProjects.map((project, idx) => (
                  <a
                    key={project.id}
                    href={project.link}
                    target={project.external ? '_blank' : undefined}
                    rel={project.external ? 'noopener noreferrer' : undefined}
                    style={{ transitionProperty: 'border-color, box-shadow, transform', transitionDuration: '300ms', transitionTimingFunction: 'ease-out', transitionDelay: `${idx * 80}ms` }}
                    className="group bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-300 dark:border-gray-800 hover:border-indigo-500 dark:hover:border-indigo-600 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-900/20 dark:hover:shadow-indigo-500/20"
                  >
                    <div className="aspect-video overflow-hidden bg-gray-300 dark:bg-gray-700">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))
              )}
            </div>

            <div className="text-center mt-12">
              <a
                href="/proyectos"
                className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors duration-200"
              >
                {t('home.projects.seeAll')}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* ── Testimonios ── */}
      <RevealOnScroll direction="fade" threshold={0.05}>
        <Testimonios />
      </RevealOnScroll>

      {/* ── CTA — ¿Hablamos? ── */}
      <RevealOnScroll direction="up">
        <section className="py-20 md:py-24 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {t('home.midCta.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
              {t('home.midCta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                style={{ transitionProperty: 'all', transitionDuration: '200ms' }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-10 py-4 text-lg font-medium text-white hover:bg-indigo-700 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95 shadow-lg"
              >
                {t('home.midCta.contact')}
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="/servicios"
                style={{ transitionProperty: 'all', transitionDuration: '200ms' }}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-indigo-600 px-10 py-4 text-lg font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white hover:scale-105 active:scale-95"
              >
                {t('home.midCta.services')}
              </a>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* ── CTA final ── */}
      <RevealOnScroll direction="fade">
        <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              {t('home.cta.subtitle')}
            </p>
            <a
              href="/contacto"
              style={{ transitionProperty: 'all', transitionDuration: '200ms' }}
              className="group inline-flex items-center gap-3 rounded-full bg-indigo-600 px-10 py-5 text-xl font-medium text-white hover:bg-indigo-700 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25 active:scale-95 shadow-xl shadow-indigo-900/30 dark:shadow-indigo-500/30"
            >
              {t('home.cta.button')}
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </section>
      </RevealOnScroll>
    </>
  );
}
