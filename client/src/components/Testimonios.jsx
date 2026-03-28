// src/components/Testimonios.jsx
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const TestimonioCard = memo(({ testimonial, t }) => (
  <div className="group h-full bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-600/20 transition-all duration-300 flex flex-col">
    {/* Estrellas */}
    <div className="flex mb-4" aria-label={t('testimonios.starsAriaLabel', { count: testimonial.rating })}>
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
            alt={t('testimonios.avatarAlt', { name: testimonial.name })}
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
  const { t } = useTranslation();

  return (
    <section
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300"
      aria-labelledby="testimonios-title"
    >
      <div className="container mx-auto px-4">
        <h2
          id="testimonios-title"
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          {t('testimonios.title')}
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
          aria-label={t('testimonios.carouselAriaLabel')}
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <TestimonioCard testimonial={testimonial} t={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
