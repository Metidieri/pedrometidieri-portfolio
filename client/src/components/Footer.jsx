// src/components/Footer.jsx
import { motion, useReducedMotion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';
import { staggerContainer, fadeInUp, hoverScale, viewportOnce } from '../lib/motion';

const stagger = staggerContainer(0.08);

export default function Footer() {
  const { t } = useTranslation();
  const shouldReduce = useReducedMotion();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('footer.links.home'), href: '/' },
    { name: t('footer.links.about'), href: '/about' },
    { name: t('footer.links.projects'), href: '/proyectos' },
    { name: t('footer.links.blog'), href: '/blog' },
    { name: t('footer.links.services'), href: '/servicios' },
    { name: t('footer.links.contact'), href: '/contacto' },
  ];

  return (
    <>
      {/* Animated gradient separator */}
      <motion.div
        initial={shouldReduce ? {} : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={shouldReduce ? { duration: 0 } : { duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent origin-center"
        aria-hidden="true"
      />

      <footer className="w-full bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-400 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={shouldReduce ? {} : stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-4 gap-10 py-16 lg:py-20"
          >

            {/* Columna 1: Logo + descripción */}
            <motion.div variants={shouldReduce ? {} : fadeInUp} className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-indigo-600 to-purple-700">
                  <img src={logo} alt={t('footer.logoAlt')} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                </div>
                <span className="text-lg font-bold text-gray-900 dark:text-white">{t('footer.title')}</span>
              </div>
              <p className="text-sm leading-relaxed mb-6 text-gray-700 dark:text-gray-400">
                {t('footer.description')}
              </p>
              <div className="flex items-center gap-4">
                {[
                  { href: 'https://www.linkedin.com/in/pedrometidieri/', icon: Linkedin, label: 'LinkedIn' },
                  { href: 'https://github.com/Metidieri', icon: Github, label: 'GitHub' },
                  { href: 'mailto:pedrometidierigomez@gmail.com', icon: Mail, label: 'Email' },
                ].map(({ href, icon: Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    whileHover={shouldReduce ? {} : { scale: 1.2, y: -2 }}
                    whileTap={shouldReduce ? {} : { scale: 0.9 }}
                    className="will-change-transform"
                  >
                    <Icon className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Columna 2: Enlaces rápidos */}
            <motion.div variants={shouldReduce ? {} : fadeInUp}>
              <h3 className="text-gray-900 dark:text-white font-semibold mb-6 uppercase tracking-wider text-sm">
                {t('footer.links.title')}
              </h3>
              <ul className="space-y-3 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-700 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Columna 3: Servicios */}
            <motion.div variants={shouldReduce ? {} : fadeInUp}>
              <h3 className="text-gray-900 dark:text-white font-semibold mb-6 uppercase tracking-wider text-sm">
                {t('footer.services.title')}
              </h3>
              <ul className="space-y-3 text-sm">
                <li><a href="/servicios#web" className="text-gray-700 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t('footer.services.web')}</a></li>
                <li><a href="/servicios#apps" className="text-gray-700 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t('footer.services.apps')}</a></li>
                <li><a href="/servicios#optimizacion" className="text-gray-700 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t('footer.services.seo')}</a></li>
                <li><a href="/servicios#ia" className="text-gray-700 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t('footer.services.ia')}</a></li>
                <li><a href="/servicios#consultoria" className="text-gray-700 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t('footer.services.consulting')}</a></li>
              </ul>
            </motion.div>

            {/* Columna 4: CTA */}
            <motion.div variants={shouldReduce ? {} : fadeInUp}>
              <h3 className="text-gray-900 dark:text-white font-semibold mb-6 uppercase tracking-wider text-sm">
                {t('footer.cta.title')}
              </h3>
              <p className="text-sm mb-6 text-gray-700 dark:text-gray-400">
                {t('footer.cta.subtitle')}
              </p>
              <motion.a
                href="/contacto"
                {...(shouldReduce ? {} : hoverScale)}
                className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors shadow-md hover:shadow-lg will-change-transform"
              >
                {t('footer.cta.button')}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.5, delay: 0.3 }}
            className="border-t border-gray-300 dark:border-gray-800 py-8 text-center text-sm text-gray-600 dark:text-gray-500"
          >
            <p>
              © {currentYear} {t('footer.copyright.name')}. {t('footer.copyright.rights')}
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
