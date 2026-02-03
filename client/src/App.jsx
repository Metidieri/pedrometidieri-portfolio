import { useState } from 'react'
import './index.css'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[var(--color-space-accent)]">
          CS2 Space Skins
        </h1>
        <p className="text-3xl mt-4 text-[var(--color-space-primary)]">
          Explora galaxias y abre cases estelares
        </p>
        <button className="mt-10 px-10 py-5 bg-[var(--color-space-primary)] text-[var(--color-space-bg)] rounded-full text-2xl font-bold hover:bg-[var(--color-space-secondary)] transition">
          Iniciar Viaje Cósmico
        </button>
      </div>
    </div>
  )
}

export default App
