// src/data/services.js
// Datos estáticos de servicios: iconos, precios y colores
// Los textos (title, description, includes) se gestionan via i18n (ver locales/)

import { Code2, Smartphone, Brain, Cloud, Zap, Shield } from 'lucide-react';

export const services = [
  {
    key: 'web',
    icon: Code2,
    priceFrom: 'desde 800€',
    color: 'indigo',
  },
  {
    key: 'mobile',
    icon: Smartphone,
    priceFrom: 'desde 1200€',
    color: 'blue',
  },
  {
    key: 'ai',
    icon: Brain,
    priceFrom: 'desde 1500€',
    color: 'purple',
  },
  {
    key: 'cloud',
    icon: Cloud,
    priceFrom: 'desde 900€',
    color: 'emerald',
  },
  {
    key: 'optimization',
    icon: Zap,
    priceFrom: 'desde 600€',
    color: 'amber',
  },
  {
    key: 'consulting',
    icon: Shield,
    priceFrom: 'desde 700€',
    color: 'rose',
  },
];

export const processSteps = [1, 2, 3, 4];
