// src/components/Footer.jsx
import { Linkedin, Github, Mail, Heart } from 'lucide-react';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
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
    <footer className="w-full bg-white dark:bg-gray-950 border-t border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-400 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-16 lg:py-20">
          
          {/* Columna 1: Logo + descripción */}
          <div className="flex flex-col">
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
              <a href="https://www.linkedin.com/in/pedrometidieri/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" />
              </a>
              <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" />
              </a>
              <a href="mailto:pedrometidierigomez@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
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
          </div>

          {/* Columna 3: Servicios */}
          <div>
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
          </div>

          {/* Columna 4: CTA */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              {t('footer.cta.title')}
            </h3>
            <p className="text-sm mb-6 text-gray-700 dark:text-gray-400">
              {t('footer.cta.subtitle')}
            </p>
            <a
              href="/contacto"
              className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors shadow-md hover:shadow-lg"
            >
              {t('footer.cta.button')}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 dark:border-gray-800 py-8 text-center text-sm text-gray-600 dark:text-gray-500">
          <p>
            © {currentYear} {t('footer.copyright.name')}. {t('footer.copyright.madeWith')} <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-current" /> {t('footer.copyright.andCode')}
          </p>
          <p className="mt-2">
            <a href="/privacidad" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t('footer.privacy')}</a> · 
            <a href="/terminos" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ml-3">{t('footer.terms')}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}