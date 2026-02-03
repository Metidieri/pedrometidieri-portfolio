import React from 'react'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-space-bg/80 backdrop-blur-md border-b border-space-primary/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Título */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-space-primary to-space-secondary flex items-center justify-center text-space-bg text-xl font-bold">
            CS²
          </div>
          <h1 className="text-2xl font-bold text-space-text tracking-wide">
            Space Skins
          </h1>
        </div>

        {/* Botones de acción (placeholder por ahora) */}
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 bg-space-primary/20 hover:bg-space-primary/40 text-space-primary border border-space-primary/50 rounded-full transition font-medium">
            Conectar Steam
          </button>
          <button className="px-6 py-2 bg-space-accent text-space-bg rounded-full hover:bg-yellow-400 transition font-bold">
            Abrir Case Gratis
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header