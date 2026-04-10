// src/pages/Servicios.jsx
import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Monitor,
  Smartphone,
  Cpu,
  Check,
  Search,
  Layout,
  Code2,
  Rocket,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import SEO from '../components/SEO';

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

/* ---------- Service definitions ---------- */
const SERVICES = [
  {
    key: 'web',
    icon: Monitor,
    price: '800€',
    badge: 'popular',
    badgeStyle: {
      backgroundColor: 'rgba(34, 197, 94, 0.15)',
      color: '#16A34A',
    },
    featured: true,
  },
  {
    key: 'mobile',
    icon: Smartphone,
    price: '1200€',
    badge: null,
  },
  {
    key: 'ai',
    icon: Cpu,
    price: '1500€',
    badge: 'new',
    badgeStyle: {
      backgroundColor: 'rgba(99, 102, 241, 0.15)',
      color: 'var(--color-primary)',
    },
    featured: false,
  },
];

/* ---------- Process steps ---------- */
const PROCESS_STEPS = [
  { num: '01', icon: Search, key: 'step1' },
  { num: '02', icon: Layout, key: 'step2' },
  { num: '03', icon: Code2, key: 'step3' },
  { num: '04', icon: Rocket, key: 'step4' },
];

/* ---------- FAQ items ---------- */
const FAQ_ITEMS = ['q1', 'q2', 'q3', 'q4', 'q5'];

/* ============================================================ */
export default function Servicios() {
  const { t } = useTranslation();
  const shouldReduce = useReducedMotion();
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <SEO
        title={t('services.seo.title')}
        description={t('services.seo.description')}
        image="/og-image.jpg"
        url="https://pedrometidieri.com/servicios"
      />

      {/* ============ SECTION 1: Hero ============ */}
      <section
        className="transition-colors duration-300"
        style={{
          backgroundColor: 'var(--color-bg)',
          padding: '100px 0 60px',
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: shouldReduce ? 0 : 0.12 },
              },
            }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              variants={{
                hidden: shouldReduce ? {} : { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
              }}
              className="inline-block font-mono uppercase mb-5"
              style={{
                color: 'var(--color-primary)',
                fontSize: '12px',
                letterSpacing: '0.1em',
              }}
            >
              {t('services.label')}
            </motion.span>

            <motion.h1
              variants={{
                hidden: shouldReduce ? {} : { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
              }}
              className="font-display mb-6 leading-[1.05]"
              style={{
                fontSize: 'clamp(38px, 6.5vw, 56px)',
                fontWeight: 900,
              }}
            >
              <span style={{ color: 'var(--color-text)' }}>
                {t('services.hero.titleMain')}
              </span>
              <br />
              <span style={{ color: 'var(--color-primary)' }}>
                {t('services.hero.titleAccent')}
              </span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: shouldReduce ? {} : { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
              }}
              className="mx-auto"
              style={{
                color: 'var(--color-text-muted)',
                fontSize: '18px',
                lineHeight: 1.7,
                maxWidth: '600px',
              }}
            >
              {t('services.hero.subtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ============ SECTION 2: Service cards ============ */}
      <section
        className="transition-colors duration-300"
        style={{
          backgroundColor: 'var(--color-bg)',
          padding: '60px 0',
        }}
      >
        <div className="container mx-auto px-4">
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{ maxWidth: '1100px', margin: '0 auto' }}
          >
            {SERVICES.map((service, idx) => {
              const Icon = service.icon;
              const includes = t(`services.${service.key}.includes`, {
                returnObjects: true,
              });
              const items = Array.isArray(includes) ? includes : [];

              return (
                <motion.article
                  key={service.key}
                  initial={
                    shouldReduce
                      ? {}
                      : { opacity: 0, y: 50, scale: 0.95 }
                  }
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    duration: 0.55,
                    ease: EASE_OUT_EXPO,
                    delay: shouldReduce ? 0 : idx * 0.15,
                  }}
                  whileHover={
                    shouldReduce
                      ? {}
                      : {
                          y: -8,
                          boxShadow: '0 20px 40px rgba(99, 102, 241, 0.10)',
                          borderColor: 'var(--color-primary)',
                        }
                  }
                  className="flex flex-col"
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: service.featured
                      ? '1px solid var(--color-primary)'
                      : '1px solid var(--color-border)',
                    borderRadius: '20px',
                    padding: '32px',
                    transition: 'all 300ms ease',
                  }}
                >
                  {/* Icon + badge row */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '999px',
                        backgroundColor: 'rgba(99, 102, 241, 0.15)',
                      }}
                    >
                      <Icon
                        style={{
                          width: '28px',
                          height: '28px',
                          color: 'var(--color-primary)',
                        }}
                        aria-hidden="true"
                      />
                    </div>
                    {service.badge && (
                      <span
                        className="inline-flex items-center"
                        style={{
                          ...service.badgeStyle,
                          borderRadius: '999px',
                          padding: '6px 12px',
                          fontSize: '12px',
                          fontWeight: 600,
                        }}
                      >
                        {t(`services.badges.${service.badge}`)}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display mb-3"
                    style={{
                      color: 'var(--color-text)',
                      fontSize: '22px',
                      fontWeight: 600,
                    }}
                  >
                    {t(`services.${service.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p
                    className="mb-6"
                    style={{
                      color: 'var(--color-text-muted)',
                      fontSize: '15px',
                      lineHeight: 1.6,
                    }}
                  >
                    {t(`services.${service.key}.description`)}
                  </p>

                  <hr
                    className="my-1"
                    style={{
                      borderColor: 'var(--color-border)',
                      borderTopWidth: '1px',
                    }}
                  />

                  {/* Includes list */}
                  <ul className="flex flex-col gap-3 my-6 flex-grow">
                    {items.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-start"
                        style={{ gap: '10px' }}
                      >
                        <Check
                          className="flex-shrink-0 mt-0.5"
                          style={{
                            width: '14px',
                            height: '14px',
                            color: '#16A34A',
                          }}
                          aria-hidden="true"
                        />
                        <span
                          style={{
                            color: 'var(--color-text-muted)',
                            fontSize: '14px',
                            lineHeight: 1.5,
                          }}
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <hr
                    className="my-1"
                    style={{
                      borderColor: 'var(--color-border)',
                      borderTopWidth: '1px',
                    }}
                  />

                  {/* Price */}
                  <div className="mt-5 mb-6">
                    <p
                      style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '12px',
                        marginBottom: '4px',
                      }}
                    >
                      {t('services.from')}
                    </p>
                    <p
                      className="font-display"
                      style={{
                        color: 'var(--color-text)',
                        fontSize: '32px',
                        fontWeight: 700,
                        lineHeight: 1,
                      }}
                    >
                      {service.price}
                    </p>
                  </div>

                  {/* CTA button */}
                  <motion.a
                    href="/contacto"
                    whileHover={shouldReduce ? {} : { y: -2 }}
                    whileTap={shouldReduce ? {} : { scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 w-full font-medium text-white cursor-pointer transition-shadow duration-300"
                    style={{
                      backgroundColor: 'var(--color-primary)',
                      borderRadius: '10px',
                      padding: '14px 20px',
                      fontSize: '15px',
                    }}
                  >
                    {t('services.priceCta')}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </motion.a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ SECTION 3: Process ============ */}
      <section
        className="transition-colors duration-300"
        style={{
          backgroundColor: 'var(--color-surface)',
          padding: '80px 0',
        }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
            className="font-display text-center mb-4"
            style={{
              fontSize: 'clamp(30px, 5vw, 40px)',
              fontWeight: 900,
            }}
          >
            <span style={{ color: 'var(--color-text)' }}>
              {t('services.process.titleMain')}
            </span>{' '}
            <span style={{ color: 'var(--color-primary)' }}>
              {t('services.process.titleAccent')}
            </span>
          </motion.h2>
          <motion.p
            initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO, delay: 0.1 }}
            className="text-center max-w-xl mx-auto mb-16"
            style={{ color: 'var(--color-text-muted)', fontSize: '16px' }}
          >
            {t('services.process.subtitle')}
          </motion.p>

          {/* Steps grid */}
          <div className="relative max-w-6xl mx-auto">
            {/* Dashed connector — desktop only, sits behind steps */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute"
              style={{
                top: '24px',
                left: '12.5%',
                right: '12.5%',
                borderTop: '2px dashed var(--color-border)',
                pointerEvents: 'none',
              }}
            />

            <div className="grid md:grid-cols-4 gap-10 md:gap-6 relative">
              {PROCESS_STEPS.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.key}
                    initial={
                      shouldReduce ? {} : { opacity: 0, x: 30 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{
                      duration: 0.5,
                      ease: EASE_OUT_EXPO,
                      delay: shouldReduce ? 0 : idx * 0.2,
                    }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Number + icon background — circular to cover the line */}
                    <div
                      className="relative flex items-center justify-center mb-5"
                      style={{
                        width: '88px',
                        height: '88px',
                        borderRadius: '999px',
                        backgroundColor: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                      }}
                    >
                      <span
                        className="font-mono absolute"
                        style={{
                          color: 'rgba(99, 102, 241, 0.2)',
                          fontSize: '48px',
                          fontWeight: 700,
                          lineHeight: 1,
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          pointerEvents: 'none',
                        }}
                      >
                        {step.num}
                      </span>
                      <Icon
                        className="relative z-10"
                        style={{
                          width: '24px',
                          height: '24px',
                          color: 'var(--color-primary)',
                        }}
                        aria-hidden="true"
                      />
                    </div>

                    <h3
                      className="font-display mb-2"
                      style={{
                        color: 'var(--color-text)',
                        fontSize: '18px',
                        fontWeight: 600,
                      }}
                    >
                      {t(`services.process.${step.key}.shortTitle`)}
                    </h3>
                    <p
                      style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '14px',
                        lineHeight: 1.6,
                        maxWidth: '220px',
                      }}
                    >
                      {t(`services.process.${step.key}.shortText`)}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 4: FAQ ============ */}
      <section
        className="transition-colors duration-300"
        style={{
          backgroundColor: 'var(--color-bg)',
          padding: '80px 0',
        }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
            className="font-display text-center mb-12"
            style={{
              fontSize: 'clamp(30px, 5vw, 40px)',
              fontWeight: 900,
            }}
          >
            <span style={{ color: 'var(--color-text)' }}>
              {t('services.faq.titleMain')}
            </span>{' '}
            <span style={{ color: 'var(--color-primary)' }}>
              {t('services.faq.titleAccent')}
            </span>
          </motion.h2>

          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            {FAQ_ITEMS.map((qkey, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={qkey}
                  style={{
                    borderBottom: '1px solid var(--color-border)',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                    className="flex items-center justify-between w-full text-left cursor-pointer"
                    style={{
                      padding: '20px 0',
                      backgroundColor: 'transparent',
                      border: 'none',
                    }}
                  >
                    <span
                      className="font-display"
                      style={{
                        color: 'var(--color-text)',
                        fontSize: '16px',
                        fontWeight: 500,
                        paddingRight: '16px',
                      }}
                    >
                      {t(`services.faq.${qkey}.question`)}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={
                        shouldReduce
                          ? { duration: 0 }
                          : { duration: 0.3, ease: EASE_OUT_EXPO }
                      }
                      className="flex-shrink-0"
                      aria-hidden="true"
                    >
                      <ChevronDown
                        style={{
                          width: '20px',
                          height: '20px',
                          color: 'var(--color-primary)',
                        }}
                      />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${idx}`}
                        key="content"
                        initial={
                          shouldReduce
                            ? { opacity: 1, height: 'auto' }
                            : { opacity: 0, height: 0 }
                        }
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={
                          shouldReduce
                            ? { opacity: 0, height: 0 }
                            : { opacity: 0, height: 0 }
                        }
                        transition={
                          shouldReduce
                            ? { duration: 0 }
                            : { duration: 0.35, ease: EASE_OUT_EXPO }
                        }
                        style={{ overflow: 'hidden' }}
                      >
                        <p
                          className="font-sans"
                          style={{
                            color: 'var(--color-text-muted)',
                            fontSize: '15px',
                            lineHeight: 1.7,
                            paddingBottom: '20px',
                            paddingRight: '32px',
                          }}
                        >
                          {t(`services.faq.${qkey}.answer`)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ SECTION 5: CTA final ============ */}
      <section
        style={{
          padding: '0 24px 60px',
          backgroundColor: 'var(--color-bg)',
        }}
      >
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          className="relative overflow-hidden text-center max-w-6xl mx-auto"
          style={{
            background:
              'linear-gradient(135deg, var(--color-primary) 0%, #7C3AED 100%)',
            padding: '80px 24px',
            borderRadius: '24px',
          }}
        >
          <h2
            className="font-display"
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(30px, 5vw, 40px)',
              fontWeight: 900,
              marginBottom: '16px',
            }}
          >
            {t('services.final.title')}
          </h2>
          <p
            style={{
              color: '#FFFFFF',
              opacity: 0.85,
              fontSize: '18px',
              lineHeight: 1.7,
              marginBottom: '36px',
              maxWidth: '560px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {t('services.final.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contacto"
              whileHover={shouldReduce ? {} : { y: -2 }}
              whileTap={shouldReduce ? {} : { scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 cursor-pointer transition-shadow duration-300"
              style={{
                backgroundColor: '#FFFFFF',
                color: 'var(--color-primary)',
                borderRadius: '999px',
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: 600,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
              }}
            >
              {t('services.final.button')}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </motion.a>
            <motion.a
              href="/proyectos"
              whileHover={
                shouldReduce
                  ? {}
                  : { y: -2, backgroundColor: 'rgba(255, 255, 255, 0.1)' }
              }
              whileTap={shouldReduce ? {} : { scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 cursor-pointer transition-colors duration-300"
              style={{
                color: '#FFFFFF',
                border: '2px solid #FFFFFF',
                backgroundColor: 'transparent',
                borderRadius: '999px',
                padding: '14px 32px',
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              {t('services.final.buttonProjects')}
            </motion.a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
