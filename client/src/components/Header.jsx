// src/components/Header.jsx
import { useState } from 'react';
import { Menu, X, Linkedin, Github, Mail, Sun, Moon } from 'lucide-react';
import logo from '../assets/logo.png';
import useTheme from '../hooks/useTheme';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t('header.home'), href: '/' },
    { name: t('header.about'), href: '/about' },
    { name: t('header.projects'), href: '/proyectos' },
    { name: t('header.blog'), href: '/blog' },
    { name: t('header.services'), href: '/servicios' },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-300 dark:border-gray-700 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          
          {/* Izquierda: Logo + Nombre + Tagline */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
              <img 
                src={logo} 
                alt="MTDR" 
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
                Pedro Metidieri
              </span>
              <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                Full Stack Developer | React · Node · Next.js
              </span>
            </div>
          </div>

          {/* Centro: Navegación (desktop) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Derecha: CTA + Toggle idioma + Toggle tema + Iconos sociales */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <a
              href="/contacto"
              className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors"
            >
              {t('header.hire')}
            </a>

            {/* Toggle idioma - versión con banderas */}
            <button
              onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
              className="flex items-center gap-1.5 p-1.5 rounded-full bg-gray-200/80 dark:bg-gray-700/80 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-110 active:scale-95"
              aria-label={i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <img
                src={`https://flagcdn.com/24x18/${i18n.language === 'es' ? 'es' : 'gb'}.png`}
                alt={i18n.language === 'es' ? 'Español' : 'English'}
                className="w-5 h-4 rounded-sm shadow-sm object-cover"
                loading="lazy"
              />
              <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
                {i18n.language.toUpperCase()}
              </span>
            </button>

            {/* Toggle tema */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/pedrometidieri/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" />
              </a>
              <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" />
              </a>
              <a href="mailto:pedrometidierigomez@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" />
              </a>
            </div>
          </div>

          {/* Mobile: Hamburger */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menú"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menú */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 transition-colors duration-300">
          <nav className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/contacto"
              className="mt-4 inline-block rounded-lg bg-indigo-600 dark:bg-indigo-600 px-6 py-3 text-center font-medium text-white hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('header.hire')}
            </a>

            {/* Toggle idioma y tema en móvil */}
            <div className="flex gap-6 justify-center">
              <button
                onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <img
                  src={`https://flagcdn.com/24x18/${i18n.language === 'es' ? 'es' : 'gb'}.png`}
                  alt={i18n.language === 'es' ? 'Español' : 'English'}
                  className="w-6 h-4.5 rounded-sm shadow-sm object-cover"
                  loading="lazy"
                />
                <span>{i18n.language === 'es' ? 'Español' : 'English'}</span>
              </button>

              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span>{theme === 'dark' ? t('header.lightMode') : t('header.darkMode')}</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}