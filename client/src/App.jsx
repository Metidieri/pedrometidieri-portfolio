// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react';

import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'


// Lazy load de páginas (se cargan solo cuando se accede)
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Proyectos = lazy(() => import('./pages/Proyectos'));
const Blog = lazy(() => import('./pages/Blog'));
const Servicios = lazy(() => import('./pages/Servicios'));
const Contacto = lazy(() => import('./pages/Contacto'));

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <AnnouncementBar />
        <Header />
        
        <main className="flex-grow bg-white dark:bg-gray-950">
          {/* Suspense envuelve las rutas lazy */}
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-600"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/contacto" element={<Contacto />} />
              
              {/* Ruta 404 */}
              <Route path="*" element={
                <div className="min-h-[80vh] flex items-center justify-center bg-white dark:bg-gray-950 px-4 py-16 transition-colors duration-300">
                  <div className="text-center max-w-lg">
                    <div className="text-8xl md:text-9xl font-bold mb-6 text-indigo-500 dark:text-indigo-400 animate-bounce">
                      404
                    </div>
                    
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                      ¡Ups! Parece que este proyecto se escapó...
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
                      La página que buscas no está aquí. Quizás se fue de vacaciones o simplemente tomó el camino equivocado.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                      <a
                        href="/"
                        className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-4 text-lg font-medium text-white hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors shadow-lg"
                      >
                        Volver al inicio
                      </a>
                      
                      <a
                        href="/proyectos"
                        className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 px-8 py-4 text-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        Ver proyectos
                      </a>
                    </div>

                    {/* Enlaces sugeridos */}
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      ¿Buscas algo en particular? Prueba:
                      <div className="mt-2 flex flex-wrap justify-center gap-4">
                        <a href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400">Sobre mí</a>
                        <a href="/contacto" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contacto</a>
                        <a href="/blog" className="hover:text-indigo-600 dark:hover:text-indigo-400">Blog</a>
                      </div>
                    </div>
                  </div>
                </div>
              } />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  )
}

export default App