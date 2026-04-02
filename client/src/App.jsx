// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ErrorBoundary from './components/ErrorBoundary';
import PageTransition from './components/PageTransition';

const Home            = lazy(() => import('./pages/Home'));
const About           = lazy(() => import('./pages/About'));
const Proyectos       = lazy(() => import('./pages/Proyectos'));
const ProyectoDetalle = lazy(() => import('./pages/ProyectoDetalle'));
const Experiencia     = lazy(() => import('./pages/Experiencia'));
const Blog            = lazy(() => import('./pages/Blog'));
const Servicios       = lazy(() => import('./pages/Servicios'));
const Contacto        = lazy(() => import('./pages/Contacto'));
const NotFound        = lazy(() => import('./pages/NotFound'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/"                element={<Home />} />
          <Route path="/about"           element={<About />} />
          <Route path="/experiencia"     element={<Experiencia />} />
          <Route path="/proyectos"       element={<Proyectos />} />
          <Route path="/proyectos/:slug" element={<ProyectoDetalle />} />
          <Route path="/blog"            element={<Blog />} />
          <Route path="/servicios"       element={<Servicios />} />
          <Route path="/contacto"        element={<Contacto />} />
          <Route path="*"               element={<NotFound />} />
        </Routes>
      </PageTransition>
    </AnimatePresence>
  );
}

function App() {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
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
