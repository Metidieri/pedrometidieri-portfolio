// src/components/Testimonios.jsx
import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { testimonials } from '../data/testimonials';
import AnimatedTitle from './AnimatedTitle';
import { viewportOnce } from '../lib/motion';

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const TestimonioCard = memo(({ testimonial, t, direction }) => {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduce ? {} : { opacity: 0, x: direction }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewportOnce}
      transition={shouldReduce ? { duration: 0 } : { duration: 0.5, delay: direction > 0 ? 0.1 : 0 }}
      whileHover={shouldReduce ? {} : { y: -4 }}
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '16px',
        padding: '32px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'box-shadow 300ms ease, transform 300ms ease',
      }}
      className="hover:shadow-xl flex flex-col h-full"
    >
      {/* Comillas decorativas */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '16px',
          left: '24px',
          fontFamily: 'Archivo, sans-serif',
          fontSize: '80px',
          fontWeight: 900,
          lineHeight: 1,
          color: 'var(--color-primary)',
          opacity: 0.2,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        &ldquo;
      </span>

      {/* Estrellas */}
      <div className="flex gap-1 mb-4" role="img" aria-label={t('testimonios.starsAriaLabel', { count: testimonial.rating })}>
        {Array.from({ length: testimonial.rating }).map((_, idx) => (
          <StarIcon key={idx} />
        ))}
      </div>

      {/* Texto testimonio */}
      <blockquote
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '16px',
          color: 'var(--color-text-muted)',
          lineHeight: 1.8,
          fontStyle: 'italic',
          position: 'relative',
          zIndex: 1,
        }}
        className="flex-grow"
      >
        {t(`testimonios.${testimonial.id}.quote`)}
      </blockquote>

      {/* Separador */}
      <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '20px 0' }} />

      {/* Footer: avatar + info */}
      <div className="flex items-center gap-3">
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: testimonial.avatarBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontFamily: 'Archivo, sans-serif',
            fontSize: '18px',
            fontWeight: 700,
            flexShrink: 0,
          }}
          aria-hidden="true"
        >
          {testimonial.initial}
        </div>
        <div>
          <p
            style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '15px',
              fontWeight: 600,
              color: 'var(--color-text)',
              margin: 0,
            }}
          >
            {testimonial.name}
          </p>
          <p
            style={{
              fontSize: '13px',
              color: 'var(--color-text-muted)',
              margin: 0,
            }}
          >
            {t(`testimonios.${testimonial.id}.business`)}
          </p>
        </div>
      </div>
    </motion.div>
  );
});

export default function Testimonios() {
  const { t } = useTranslation();

  return (
    <section
      className="py-16 md:py-24 border-t transition-colors duration-300"
      style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
      aria-labelledby="testimonios-title"
    >
      <div className="container mx-auto px-4">
        <AnimatedTitle
          className="text-3xl md:text-4xl font-bold text-center mb-6"
          style={{ color: 'var(--color-text)' }}
        >
          <span id="testimonios-title">{t('testimonios.title')}</span>
        </AnimatedTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-6">
          {testimonials.map((testimonial, i) => (
            <TestimonioCard
              key={testimonial.id}
              testimonial={testimonial}
              t={t}
              direction={i === 0 ? -30 : 30}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
