// src/pages/Experiencia.jsx
import SEO from '../components/SEO';
import ExperienceTimeline from '../components/ExperienceTimeline';
import { useTranslation } from 'react-i18next';

export default function Experiencia() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('experience.seo.title')}
        description={t('experience.seo.description')}
        url="https://pedrometidieri.com/experiencia"
      />
      <ExperienceTimeline />
    </>
  );
}
