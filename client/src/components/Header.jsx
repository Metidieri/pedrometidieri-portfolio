// src/components/Header.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, Linkedin, Github, Mail, Sun, Moon } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import useTheme from '../hooks/useTheme';
import { useTranslation } from 'react-i18next';

const menuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1], staggerChildren: 0.05 },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0 },
};

export default function Header() {
  const [isOpen, setIsOpen]       = useState(false);
  const { theme, toggleTheme }    = useTheme();
  const { t, i18n }               = useTranslation();
  const location                  = useLocation();
  const hamburgerRef              = useRef(null);
  const menuRef                   = useRef(null);
  const shouldReduce              = useReducedMotion();

  const navLinks = [
    { name: t('header.home'),       href: '/' },
    { name: t('header.about'),      href: '/about' },
    { name: t('header.experience'), href: '/experiencia' },
    { name: t('header.projects'),   href: '/proyectos' },
    { name: t('header.services'),   href: '/servicios' },
  ];

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

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
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-md transition-colors duration-300" style={{ borderColor: 'var(--color-border)', backgroundColor: 'color-mix(in srgb, var(--color-bg) 95%, transparent)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">

          {/* Logo + Nombre */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0 overflow-hidden rounded-full" style={{ backgroundColor: 'var(--color-surface-2)' }}>
              <img
                src={logo}
                alt="Logo de Pedro Metidieri"
                width="375"
                height="375"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold" style={{ color: 'var(--color-text)' }}>
                Pedro Metidieri
              </span>
              <span className="text-xs md:text-sm" style={{ color: 'var(--color-text-muted)' }}>
                Full Stack Developer | React · Node · Next.js
              </span>
            </div>
          </div>

          {/* Nav desktop - animated underlines */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Navegación principal">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className="group relative text-sm font-medium transition-colors duration-200 pb-0.5"
                  style={{ color: active ? 'var(--color-primary)' : 'var(--color-text-muted)' }}
                  onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = 'var(--color-primary)'; }}
                  onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = 'var(--color-text-muted)'; }}
                >
                  {link.name}
                  {/* Animated underline */}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    initial={false}
                    animate={{ width: active ? '100%' : '0%' }}
                    whileHover={active ? {} : { width: '100%' }}
                    transition={shouldReduce ? { duration: 0 } : { type: 'spring', stiffness: 400, damping: 30 }}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop right controls */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <motion.a
              href="/contacto"
              whileHover={shouldReduce ? {} : { scale: 1.05, transition: { type: 'spring', stiffness: 400, damping: 17 } }}
              whileTap={shouldReduce ? {} : { scale: 0.95, transition: { type: 'spring', stiffness: 400, damping: 17 } }}
              className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:shadow-lg hover:shadow-indigo-500/25 transition-shadow duration-200 will-change-transform"
            >
              {t('header.hire')}
            </motion.a>

            <button
              onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
              className="flex items-center gap-1.5 p-1.5 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
              style={{ backgroundColor: 'var(--color-surface-2)' }}
              aria-label={i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <img
                src={`https://flagcdn.com/24x18/${i18n.language === 'es' ? 'es' : 'gb'}.png`}
                alt={i18n.language === 'es' ? 'Bandera de España' : 'Flag of United Kingdom'}
                width="24"
                height="18"
                className="w-5 h-4 rounded-sm shadow-sm object-cover"
                loading="lazy"
                decoding="async"
              />
              <span className="text-xs font-medium" style={{ color: 'var(--color-text)' }}>
                {i18n.language.toUpperCase()}
              </span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors"
              style={{ backgroundColor: 'var(--color-surface-2)', color: 'var(--color-text)' }}
              aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/pedrometidieri/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Pedro Metidieri">
                <Linkedin className="h-5 w-5 transition-colors" style={{ color: 'var(--color-text-muted)' }} />
              </a>
              <a href="https://github.com/Metidieri" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Pedro Metidieri">
                <Github className="h-5 w-5 transition-colors" style={{ color: 'var(--color-text-muted)' }} />
              </a>
              <a href="mailto:pedrometidierigomez@gmail.com" aria-label="Enviar email a Pedro Metidieri">
                <Mail className="h-5 w-5 transition-colors" style={{ color: 'var(--color-text-muted)' }} />
              </a>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            className="md:hidden transition-colors"
            style={{ color: 'var(--color-text)' }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden border-t overflow-hidden"
            style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-bg)' }}
          >
            <nav className="flex flex-col px-4 py-6 space-y-4" aria-label="Navegación mobile">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={menuItemVariants}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className="text-base font-medium transition-colors"
                  style={{ color: isActive(link.href) ? 'var(--color-primary)' : 'var(--color-text-muted)' }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="/contacto"
                variants={menuItemVariants}
                className="mt-4 inline-block rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-center font-medium text-white hover:opacity-90 transition-opacity shadow-md"
              >
                {t('header.hire')}
              </motion.a>

              <motion.div variants={menuItemVariants} className="flex gap-6 justify-center pt-2">
                <button
                  onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
                  className="flex items-center gap-2 transition-colors"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  <img
                    src={`https://flagcdn.com/24x18/${i18n.language === 'es' ? 'es' : 'gb'}.png`}
                    alt={i18n.language === 'es' ? 'Bandera de España' : 'Flag of United Kingdom'}
                    width="24"
                    height="18"
                    className="w-6 rounded-sm shadow-sm object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <span>{i18n.language === 'es' ? 'Español' : 'English'}</span>
                </button>

                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  <span>{theme === 'dark' ? t('header.lightMode') : t('header.darkMode')}</span>
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
