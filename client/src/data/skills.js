// src/data/skills.js
// Iconos de categorías de skills — los textos (label, items) se gestionan via i18n

import { Code, Server, Database, BrainCircuit } from 'lucide-react';

export const skillCategories = [
  {
    key: 'frontend',
    icon: Code,
  },
  {
    key: 'backend',
    icon: Server,
  },
  {
    key: 'databases',
    icon: Database,
  },
  {
    key: 'aimodern',
    icon: BrainCircuit,
  },
];
