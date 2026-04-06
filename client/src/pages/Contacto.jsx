// src/pages/Contacto.jsx
import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import SEO from '../components/SEO';
import RevealOnScroll from '../components/RevealOnScroll';

export default function Contacto() {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [status, setStatus]   = useState({ type: null, message: '' });
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  // Carga dinámica del script de reCAPTCHA v3
  useEffect(() => {
    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

    if (!siteKey) {
      console.error('[reCAPTCHA] VITE_RECAPTCHA_SITE_KEY no está definida');
      return;
    }

    if (document.querySelector(`script[src*="recaptcha/api.js"]`)) return;

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const onSubmit = async () => {
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus({ type: 'success', message: t('contact.success') });
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      reset();
    } catch (error) {
      console.error(error);
      setStatus({
        type: 'error',
        message: error?.text || t('contact.error'),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title={t('contact.seo.title')}
        description={t('contact.seo.description')}
        url="https://pedrometidieri.com/contacto"
      />

      <div className="min-h-screen bg-white dark:bg-gray-950 py-16 md:py-24 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            {t('contact.title')}
          </h1>
          <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>

          <RevealOnScroll direction="up">
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              aria-label={t('contact.title')}
              className="space-y-6 bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Nombre */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  aria-required="true"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  {...register('name', { required: t('contact.nameRequired') })}
                  className={`w-full px-5 py-3 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 transition-colors duration-200`}
                  placeholder={t('contact.namePlaceholder')}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  aria-required="true"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  {...register('email', {
                    required: t('contact.emailRequired'),
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: t('contact.emailInvalid'),
                    },
                  })}
                  className={`w-full px-5 py-3 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 transition-colors duration-200`}
                  placeholder={t('contact.emailPlaceholder')}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  rows={6}
                  aria-required="true"
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  {...register('message', {
                    required: t('contact.messageRequired'),
                    minLength: { value: 10, message: t('contact.messageMin') },
                  })}
                  className={`w-full px-5 py-3 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 transition-colors duration-200 resize-none`}
                  placeholder={t('contact.messagePlaceholder')}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Botón enviar */}
              <button
                type="submit"
                disabled={loading}
                aria-busy={loading}
                className={`w-full flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? (
                  <>
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" aria-hidden="true" />
                    <span>{t('contact.sending')}</span>
                  </>
                ) : (
                  <>
                    {t('contact.send')}
                    <Send className="h-6 w-6" aria-hidden="true" />
                  </>
                )}
              </button>

              {/* Mensaje de estado — aria-live para lectores de pantalla */}
              <div
                role="alert"
                aria-live="polite"
                aria-atomic="true"
              >
                {status.type && (
                  <div
                    className={`p-5 rounded-xl flex items-center gap-4 ${
                      status.type === 'success'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle className="h-8 w-8 flex-shrink-0" aria-hidden="true" />
                    ) : (
                      <AlertCircle className="h-8 w-8 flex-shrink-0" aria-hidden="true" />
                    )}
                    <span className="text-base font-medium">{status.message}</span>
                  </div>
                )}
              </div>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </>
  );
}
