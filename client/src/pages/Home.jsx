// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { ArrowRight, Code, Server, Database, BrainCircuit } from 'lucide-react';
import SkeletonLoader from '../components/SkeletonLoader';
import logo from '../assets/logo.png';
import SEO from '../components/SEO';
import TechStack from '../components/TechStack';
import { TypeAnimation } from 'react-type-animation';
import Testimonios from '../components/Testimonios';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const featuredProjects = [
    {
      title: t('home.projects.ecommerce.title'),
      description: t('home.projects.ecommerce.description'),
      tech: ['Next.js', 'Tailwind', 'Supabase', 'Stripe'],
      image: 'https://via.placeholder.com/600x400/1e293b/ffffff?text=Proyecto+1',
      link: '/proyectos/ecommerce',
    },
    {
      title: t('home.projects.dashboard.title'),
      description: t('home.projects.dashboard.description'),
      tech: ['React', 'Node.js', 'PostgreSQL', 'OpenAI API'],
      image: 'https://via.placeholder.com/600x400/1e293b/ffffff?text=Proyecto+2',
      link: '/proyectos/dashboard-ia',
    },
    {
      title: t('home.projects.appmovil.title'),
      description: t('home.projects.appmovil.description'),
      tech: ['React Native', 'Firebase', 'Expo'],
      image: 'https://via.placeholder.com/600x400/1e293b/ffffff?text=Proyecto+3',
      link: '/proyectos/app-movil',
    },
  ];

  const latestPosts = [
    {
      title: t('home.blog.posts.react19.title'),
      excerpt: t('home.blog.posts.react19.excerpt'),
      date: t('home.blog.posts.react19.date'),
      link: '/blog/optimizaciones-react-19',
    },
    {
      title: t('home.blog.posts.next15.title'),
      excerpt: t('home.blog.posts.next15.excerpt'),
      date: t('home.blog.posts.next15.date'),
      link: '/blog/server-components-next15',
    },
    {
      title: t('home.blog.posts.iaweb.title'),
      excerpt: t('home.blog.posts.iaweb.excerpt'),
      date: t('home.blog.posts.iaweb.date'),
      link: '/blog/ia-en-web-apps',
    },
  ];

  return (
    <>
      <SEO 
        title={t('home.seo.title')}
        description={t('home.seo.description')}
        image={logo}
        url="https://tudominio.com"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-24 md:py-32 transition-colors duration-300">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_#4f46e5_0%,_transparent_50%)] dark:opacity-30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_#7c3aed_0%,_transparent_50%)] dark:opacity-30"></div>
        </div>

        <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Izquierda: Foto/ilustración */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500 dark:border-indigo-600 shadow-2xl shadow-indigo-500/30 dark:shadow-indigo-600/30 animate-fade-in">
              <img
                src={logo}
                alt={t('home.hero.alt')}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/30 to-transparent" />
            </div>
          </div>

          {/* Derecha: Texto y CTA */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
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
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-indigo-600 px-10 py-5 text-xl font-medium text-white hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-900/30 dark:shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-700/40 transform hover:scale-105"
              >
                {t('home.hero.hire')}
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </a>

              <a
                href="/proyectos"
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-indigo-600 px-10 py-5 text-xl font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all hover:shadow-xl hover:shadow-indigo-500/30 transform hover:scale-105"
              >
                {t('home.hero.seeProjects')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí / Skills */}
      <section className="py-20 md:py-24 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
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
              {[
                { icon: Code, label: t('home.skills.frontend.label'), items: t('home.skills.frontend.items') },
                { icon: Server, label: t('home.skills.backend.label'), items: t('home.skills.backend.items') },
                { icon: Database, label: t('home.skills.databases.label'), items: t('home.skills.databases.items') },
                { icon: BrainCircuit, label: t('home.skills.aimodern.label'), items: t('home.skills.aimodern.items') },
              ].map((skill, i) => (
                <div key={i} className="bg-gray-100 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-300 dark:border-gray-800 hover:border-indigo-500 dark:hover:border-indigo-600/50 transition-colors">
                  <skill.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-500 mb-4" />
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{skill.label}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{skill.items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TechStack />

      {/* Proyectos destacados */}
      <section className="py-20 md:py-24 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            {t('home.projects.title')}
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            {t('home.projects.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              <SkeletonLoader type="card" count={3} />
            ) : (
              featuredProjects.map((project, i) => (
                <a
                  key={i}
                  href={project.link}
                  className="group bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-300 dark:border-gray-800 hover:border-indigo-500 dark:hover:border-indigo-600 transition-all hover:shadow-xl hover:shadow-indigo-900/20 dark:hover:shadow-indigo-500/20"
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
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
                          {t}
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
              className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
            >
              {t('home.projects.seeAll')}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Últimos artículos del blog */}
      <section className="py-20 md:py-24 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            {t('home.blog.title')}
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            {t('home.blog.subtitle')}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {isLoading ? (
              <SkeletonLoader type="post" count={3} />
            ) : (
              latestPosts.map((post, i) => (
                <a
                  key={i}
                  href={post.link}
                  className="group bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-300 dark:border-gray-800 hover:border-indigo-500 dark:hover:border-indigo-600 transition-all hover:shadow-lg hover:shadow-indigo-900/10 dark:hover:shadow-indigo-500/10"
                >
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">{post.date}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3">{post.excerpt}</p>
                </a>
              ))
            )}
          </div>

          <div className="text-center mt-12">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
            >
              {t('home.blog.readMore')}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Testimonios />

      {/* CTA final */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            {t('home.cta.subtitle')}
          </p>
          <a
            href="/contacto"
            className="group inline-flex items-center gap-3 rounded-full bg-indigo-600 px-10 py-5 text-xl font-medium text-white hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-900/30 dark:shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-700/40"
          >
            {t('home.cta.button')}
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </>
  );
}