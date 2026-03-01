// src/components/AnnouncementBar.jsx
export default function AnnouncementBar() {
  const messages = [
    "Desarrollador Full Stack disponible – Proyectos web y apps a medida",
    "Optimización React/Node.js – Mejora rendimiento y SEO de tu sitio",
    "Nuevo artículo: Integración IA en apps – Lee ahora y agenda consulta",
    "Presupuesto sin compromiso – Desde landing pages hasta SaaS completos",
    "Cliente reciente: E-commerce escalable con Next.js – Ver case study",
  ];

  // Repetimos el array varias veces para cubrir pantallas anchas y loop continuo
  const repeatedMessages = [...messages, ...messages, ...messages]; // 3 veces suele bastar

  return (
    <div className="w-full bg-white dark:bg-black text-gray-900 dark:text-white text-sm md:text-base font-medium overflow-hidden border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="group relative h-8 md:h-10 flex items-center">
        <div
          className="
            absolute whitespace-nowrap flex items-center
            animate-[marquee_var(--marquee-duration,_80s)_linear_infinite]
            will-change-transform
          "
          style={{ '--marquee-duration': '80s' }}
        >
          {repeatedMessages.map((msg, index) => (
            <span
              key={index}
              className="inline-block px-6 md:px-10 lg:px-16 tracking-wider text-gray-800 dark:text-gray-200"
            >
              {msg}
            </span>
          ))}

          {/* Duplicado completo para loop seamless */}
          {repeatedMessages.map((msg, index) => (
            <span
              key={`dup-${index}`}
              className="inline-block px-6 md:px-10 lg:px-16 tracking-wider text-gray-800 dark:text-gray-200"
              aria-hidden="true"
            >
              {msg}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}