import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-space-bg text-space-text">
      <Header />
      
      {/* Contenido principal - temporal */}
      <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
        <div className="text-center py-20">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-space-primary via-space-secondary to-space-accent bg-clip-text text-transparent">
            Bienvenido al Universo de Skins
          </h2>
          <p className="text-xl md:text-2xl text-space-primary/90 max-w-3xl mx-auto">
            Explora planetas misteriosos, abre cases cósmicos y recolecta las skins más raras del cosmos.
          </p>
          <button className="mt-10 px-12 py-6 bg-gradient-to-r from-space-primary to-space-secondary text-space-bg rounded-full text-2xl font-bold hover:scale-105 transition transform">
            Iniciar Aventura Espacial
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
