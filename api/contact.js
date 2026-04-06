/*
 * DEPRECATED — Esta función está obsoleta desde 2025-04-06.
 * EmailJS se llama directamente desde el cliente con @emailjs/browser.
 * Mantenida en el repo por referencia histórica. No está en uso.
 * El reCAPTCHA secret key (RECAPTCHA_SECRET_KEY) ya no se verifica
 * desde servidor.
 */

// api/contact.js — Vercel Serverless Function (OBSOLETA)
// Verificaba reCAPTCHA v3 y enviaba email via EmailJS REST API.
// Fallaba con error 403 porque EmailJS no permite llamadas desde
// entornos no-browser.

export default async function handler(req, res) {
  return res.status(410).json({
    error: 'Este endpoint está obsoleto. El formulario de contacto usa @emailjs/browser directamente.',
  });
}
