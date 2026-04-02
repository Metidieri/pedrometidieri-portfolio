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
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-4 transition-colors duration-300">
          <div className="text-center max-w-lg">
            <AlertTriangle className="h-20 w-20 text-amber-500 mx-auto mb-6" aria-hidden="true" />

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('error.title')}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              {t('error.description')}
            </p>

            {this.state.error && (
              <details className="mb-8 text-left bg-gray-100 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                <summary className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer mb-2">
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
                className="inline-flex items-center justify-center rounded-lg border-2 border-indigo-600 px-8 py-3 font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white transition-colors duration-200"
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
