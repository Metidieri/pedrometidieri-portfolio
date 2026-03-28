// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';

import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ErrorBoundary from './components/ErrorBoundary';
import PageTransition from './components/PageTransition';

// Lazy load de páginas (se cargan solo cuando se accede)
const Home           = lazy(() => import('./pages/Home'));
const About          = lazy(() => import('./pages/About'));
const Proyectos      = lazy(() => import('./pages/Proyectos'));
const ProyectoDetalle = lazy(() => import('./pages/ProyectoDetalle'));
const Blog           = lazy(() => import('./pages/Blog'));
const Servicios      = lazy(() => import('./pages/Servicios'));
const Contacto       = lazy(() => import('./pages/Contacto'));

// Componente interno que usa useLocation (requiere estar dentro de BrowserRouter)
function AnimatedRoutes() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    // La key cambia en cada navegación → PageTransition remonta → animación
    <PageTransition key={location.pathname}>
      <Routes>
        <Route path="/"                   element={<Home />} />
        <Route path="/about"              element={<About />} />
        <Route path="/proyectos"          element={<Proyectos />} />
        <Route path="/proyectos/:slug"    element={<ProyectoDetalle />} />
        <Route path="/blog"               element={<Blog />} />
        <Route path="/servicios"          element={<Servicios />} />
        <Route path="/contacto"           element={<Contacto />} />

        {/* Ruta 404 */}
        <Route path="*" element={
          <div className="min-h-[80vh] flex items-center justify-center bg-white dark:bg-gray-950 px-4 py-16 transition-colors duration-300">
            <div className="text-center max-w-lg">
              <div className="text-8xl md:text-9xl font-display font-bold mb-6 text-indigo-500 dark:text-indigo-400 animate-bounce">
                404
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('notFound.title')}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
                {t('notFound.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-4 text-lg font-medium text-white hover:bg-indigo-700 transition-colors duration-200 shadow-lg"
                >
                  {t('notFound.goHome')}
                </a>
                <a
                  href="/proyectos"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 px-8 py-4 text-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  {t('notFound.viewProjects')}
                </a>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {t('notFound.lookingFor')}
                <div className="mt-2 flex flex-wrap justify-center gap-4">
                  <a href="/about"    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">{t('notFound.about')}</a>
                  <a href="/contacto" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">{t('notFound.contact')}</a>
                  <a href="/blog"     className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">{t('notFound.blog')}</a>
                </div>
              </div>
            </div>
          </div>
        } />
      </Routes>
    </PageTransition>
  );
}

function App() {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      {/* Skip to main content — accesibilidad teclado/lectores de pantalla */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded focus:shadow-lg focus:outline-none"
      >
        {t('skipToContent')}
      </a>

      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />

        <main id="main-content" className="flex-grow bg-white dark:bg-gray-950" tabIndex={-1}>
          <ErrorBoundary>
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-[60vh]" role="status" aria-label={t('loading')}>
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-600" />
              </div>
            }>
              <AnimatedRoutes />
            </Suspense>
          </ErrorBoundary>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
