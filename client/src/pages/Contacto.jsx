// src/pages/Contacto.jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contacto() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [status, setStatus] = useState({ type: null, message: '' });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      // Ejecutar reCAPTCHA v3
      const token = await window.grecaptcha.execute('6LcqaHwsAAAAALFrBCHHPFe0Q1bG8IakfSNMzxkp', { action: 'submit' });

      // Enviar con EmailJS
      await emailjs.send(
        'service_6tej4ob',     // TU SERVICE ID
        'template_ly1i60r',    // TU TEMPLATE ID
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          'g-recaptcha-response': token, // Token de reCAPTCHA
        },
        'pmyQR5PnJ3yLQaBvl'    // TU PUBLIC KEY
      );

      // Éxito + confetti
      setStatus({
        type: 'success',
        message: '¡Mensaje enviado con éxito! Te responderé pronto.',
      });
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      reset();
    } catch (error) {
      console.error(error);
      setStatus({
        type: 'error',
        message: 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-16 md:py-24 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Contacta conmigo
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente o necesitas asesoría? Escríbeme y te respondo en menos de 24 horas.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'El nombre es obligatorio' })}
              className={`w-full px-5 py-3 rounded-lg border ${
                errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
              } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 transition-all`}
              placeholder="Tu nombre"
            />
            {errors.name && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { 
                required: 'El email es obligatorio',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email inválido'
                }
              })}
              className={`w-full px-5 py-3 rounded-lg border ${
                errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
              } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 transition-all`}
              placeholder="tu@email.com"
            />
            {errors.email && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>}
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              rows={6}
              {...register('message', { required: 'El mensaje no puede estar vacío', minLength: { value: 10, message: 'Mínimo 10 caracteres' } })}
              className={`w-full px-5 py-3 rounded-lg border ${
                errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
              } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 transition-all resize-none`}
              placeholder="Cuéntame sobre tu proyecto o consulta..."
            />
            {errors.message && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>}
          </div>

          {/* Botón enviar */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-lg hover:from-indigo-700 hover:to-purple-700 dark:from-indigo-600 dark:to-purple-600 dark:hover:from-indigo-700 dark:hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading ? (
              <div className="flex items-center gap-3">
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                Enviando...
              </div>
            ) : (
              <>
                Enviar mensaje
                <Send className="h-6 w-6" />
              </>
            )}
          </button>

          {/* Mensaje de estado */}
          {status.type && (
            <div className={`mt-8 p-5 rounded-xl flex items-center gap-4 animate-fade-in ${
              status.type === 'success' 
                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800' 
                : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
            }`}>
              {status.type === 'success' ? (
                <CheckCircle className="h-8 w-8 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-8 w-8 flex-shrink-0" />
              )}
              <span className="text-base font-medium">{status.message}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}