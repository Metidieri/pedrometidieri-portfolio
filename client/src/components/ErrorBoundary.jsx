// src/components/ErrorBoundary.jsx
import { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { AlertTriangle } from 'lucide-react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Aquí puedes enviar el error a un servicio como Sentry
    console.error('ErrorBoundary capturó un error:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      const { t } = this.props;
      return (
        <div className="min-h-screen flex items-center justify-center px-4 transition-colors duration-300" style={{ backgroundColor: 'var(--color-bg)' }}>
          <div className="text-center max-w-lg">
            <AlertTriangle className="h-20 w-20 text-amber-500 mx-auto mb-6" aria-hidden="true" />

            <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
              {t('error.title')}
            </h1>

            <p className="text-lg mb-8" style={{ color: 'var(--color-text-muted)' }}>
              {t('error.description')}
            </p>

            {this.state.error && (
              <details className="mb-8 text-left rounded-xl p-4 border" style={{ backgroundColor: 'var(--color-surface-2)', borderColor: 'var(--color-border)' }}>
                <summary className="text-sm font-medium cursor-pointer mb-2" style={{ color: 'var(--color-text)' }}>
                  {t('error.details')}
                </summary>
                <pre className="text-xs text-red-600 dark:text-red-400 overflow-auto whitespace-pre-wrap">
                  {this.state.error.message}
                </pre>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center justify-center rounded-lg border-2 px-8 py-3 font-medium hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
              >
                {t('error.reload')}
              </button>

              <button
                onClick={() => { window.location.href = '/'; }}
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700 transition-colors duration-200 shadow-lg"
              >
                {t('error.goHome')}
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default withTranslation()(ErrorBoundary);
