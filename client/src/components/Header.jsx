// src/components/Header.jsx
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Linkedin, Github, Mail, Sun, Moon } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import useTheme from '../hooks/useTheme';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [isOpen, setIsOpen]       = useState(false);
  const { theme, toggleTheme }    = useTheme();
  const { t, i18n }               = useTranslation();
  const location                  = useLocation();
  const hamburgerRef              = useRef(null);
  const menuRef                   = useRef(null);

  const navLinks = [
    { name: t('header.home'),     href: '/' },
    { name: t('header.about'),    href: '/about' },
    { name: t('header.projects'), href: '/proyectos' },
    { name: t('header.blog'),     href: '/blog' },
    { name: t('header.services'), href: '/servicios' },
  ];

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  // Determina si un link está activo
  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  // Focus trap en menú mobile
  useEffect(() => {
    if (!isOpen) return;

    const menu = menuRef.current;
    if (!menu) return;

    const focusable = Array.from(
      menu.querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"])')
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    // Mover foco al primer elemento
    first?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        hamburgerRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Cerrar menú al navegar
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-300 dark:border-gray-700 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">

          {/* Izquierda: Logo + Nombre + Tagline */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
              <img
                src={logo}
                alt="Logo de Pedro Metidieri"
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
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`relative text-sm font-medium transition-colors duration-200
                  after:absolute after:bottom-[-2px] after:left-0 after:h-0.5
                  after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-[width] after:duration-300
                  ${isActive(link.href)
                    ? 'text-indigo-600 dark:text-indigo-400 after:w-full'
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 after:w-0 hover:after:w-full'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Derecha: CTA + Toggle idioma + Toggle tema + Iconos sociales */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <a
              href="/contacto"
              style={{ transitionProperty: 'all', transitionDuration: '200ms' }}
              className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-sm font-medium text-white hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95 shadow-md"
            >
              {t('header.hire')}
            </a>

            {/* Toggle idioma */}
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
              <a href="https://www.linkedin.com/in/pedrometidieri/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Pedro Metidieri">
                <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" />
              </a>
              <a href="https://github.com/Metidieri" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Pedro Metidieri">
                <Github className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" />
              </a>
              <a href="mailto:pedrometidierigomez@gmail.com" aria-label="Enviar email a Pedro Metidieri">
                <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" />
              </a>
            </div>
          </div>

          {/* Mobile: Hamburger */}
          <button
            ref={hamburgerRef}
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menú */}
      {isOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="md:hidden border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 transition-colors duration-300"
        >
          <nav className="flex flex-col px-4 py-6 space-y-4" aria-label="Navegación mobile">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/contacto"
              className="mt-4 inline-block rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-center font-medium text-white hover:opacity-90 transition-opacity shadow-md"
            >
              {t('header.hire')}
            </a>

            {/* Toggle idioma y tema en móvil */}
            <div className="flex gap-6 justify-center pt-2">
              <button
                onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <img
                  src={`https://flagcdn.com/24x18/${i18n.language === 'es' ? 'es' : 'gb'}.png`}
                  alt={i18n.language === 'es' ? 'Español' : 'English'}
                  className="w-6 rounded-sm shadow-sm object-cover"
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
