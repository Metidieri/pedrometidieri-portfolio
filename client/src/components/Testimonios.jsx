// src/components/Testimonios.jsx
import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Juan Pérez',
    role: 'Fundador de StartupTech',
    quote: 'Pedro entregó nuestra plataforma de e-commerce en tiempo récord y con un rendimiento brutal. La optimización SEO que hizo nos duplicó las visitas orgánicas en 3 meses.',
    avatar: '/avatars/avatar1.png',
    rating: 5,
  },
  {
    name: 'Ana Gómez',
    role: 'Product Manager en ScaleUp',
    quote: 'Trabajar con Pedro fue un placer. Entendió perfectamente nuestra necesidad de integrar IA y nos ahorró meses de desarrollo. Código limpio y documentación impecable.',
    avatar: '/avatars/avatar2.png',
    rating: 5,
  },
  {
    name: 'Carlos Ruiz',
    role: 'CTO de AppMóvil',
    quote: 'La app híbrida que desarrolló con React Native superó todas las expectativas. Notificaciones push, mapas y rendimiento nativo sin problemas. 100% recomendable.',
    avatar: '/avatars/avatar3.png',
    rating: 5,
  },
  {
    name: 'Equipo Anónimo',
    role: 'Agencia de Marketing',
    quote: 'Auditoría y migración a Next.js que nos salvó el proyecto. Redujimos el tiempo de carga de 8s a 1.2s. Profesionalidad máxima.',
    avatar: '/avatars/avatar4.png',
    rating: 5,
  },
];

const TestimonioCard = memo(({ testimonial }) => (
  <div className="group h-full bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-600/20 transition-all duration-300 flex flex-col">
    {/* Estrellas */}
    <div className="flex mb-4" aria-label={`${testimonial.rating} estrellas`}>
      {Array.from({ length: testimonial.rating }).map((_, idx) => (
        <Star key={idx} className="h-5 w-5 text-yellow-400 fill-current" />
      ))}
    </div>

    {/* Cita */}
    <blockquote className="text-gray-700 dark:text-gray-300 mb-6 flex-grow italic">
      "{testimonial.quote}"
    </blockquote>

    {/* Avatar + info */}
    <div className="flex items-center gap-4 mt-auto">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xl font-bold text-gray-600 dark:text-gray-400">
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt={`Foto de ${testimonial.name}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          testimonial.name.charAt(0)
        )}
      </div>
      <div>
        <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
      </div>
    </div>
  </div>
));

export default function Testimonios() {
  return (
    <section
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300"
      aria-labelledby="testimonios-title"
    >
      <div className="container mx-auto px-4">
        <h2 id="testimonios-title" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Lo que dicen mis clientes
        </h2>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className="!pb-12"
          aria-label="Carrusel de testimonios de clientes"
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <TestimonioCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}