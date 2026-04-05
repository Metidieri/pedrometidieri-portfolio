// api/contact.js — Vercel Serverless Function
// Verifica reCAPTCHA v3 y envía email via EmailJS REST API

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { name, email, message, recaptchaToken } = req.body;

  // Validación básica de campos
  if (!name || !email || !message || !recaptchaToken) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  try {
    // 1. Verificar reCAPTCHA v3 contra la API de Google
    const recaptchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: recaptchaToken,
        }),
      }
    );

    const recaptchaData = await recaptchaRes.json();

    // Score < 0.5 indica bot probable
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return res.status(400).json({
        error: 'Verificación de seguridad fallida. Por favor, inténtalo de nuevo.',
      });
    }

    // 2. Enviar email via EmailJS REST API
    // IMPORTANTE: desde servidor EmailJS exige accessToken (private key).
    // Sin él devuelve 403 "API calls to this endpoint are disabled for non-browser applications".
    const emailRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        accessToken: process.env.EMAILJS_PRIVATE_KEY,
        template_params: {
          from_name: name,
          from_email: email,
          message: message,
          'g-recaptcha-response': recaptchaToken,
        },
      }),
    });

    if (!emailRes.ok) {
      const errorText = await emailRes.text();
      console.error('EmailJS error:', emailRes.status, errorText);
      // Devolver detalle al cliente para depurar desde Vercel Logs
      return res.status(500).json({
        error: 'Error al enviar el email. Inténtalo de nuevo.',
        debug: `EmailJS ${emailRes.status}: ${errorText.slice(0, 200)}`,
      });
    }

    return res.status(200).json({ success: true, message: 'Email enviado correctamente' });
  } catch (error) {
    console.error('Error en /api/contact:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
