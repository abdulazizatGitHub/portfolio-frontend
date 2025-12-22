import React from 'react';
import PropTypes from 'prop-types';

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of crashing the app.
 *
 * @class ErrorBoundary
 * @extends {React.Component}
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  /**
   * Static method to update state when an error is caught
   * @param {Error} _error - The error that was thrown
   * @returns {Object} Updated state object
   */
  static getDerivedStateFromError(_error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  /**
   * Lifecycle method called after an error is caught
   * @param {Error} error - The error that was thrown
   * @param {Object} errorInfo - Component stack trace
   */
  componentDidCatch(error, errorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Update state with error details
    this.setState({
      error,
      errorInfo,
    });

    // In production, you could log to an error reporting service
    // Example: logErrorToService(error, errorInfo);
  }

  /**
   * Handle error recovery
   */
  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div
          className="error-boundary"
          role="alert"
          aria-live="assertive"
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            backgroundColor: 'var(--bg-color, #081b29)',
            color: 'var(--text-color, #ededed)',
            textAlign: 'center',
          }}
        >
          <h1
            style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--main-color, #00abf0)' }}
          >
            ⚠️ Something went wrong
          </h1>
          <p style={{ fontSize: '1.6rem', marginBottom: '2rem', maxWidth: '600px' }}>
            We're sorry, but something unexpected happened. Please try refreshing the page.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={this.handleReset}
              style={{
                padding: '1rem 2rem',
                fontSize: '1.6rem',
                backgroundColor: 'var(--main-color, #00abf0)',
                color: 'var(--bg-color, #081b29)',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 12px rgba(0, 171, 240, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Try Again
            </button>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '1rem 2rem',
                fontSize: '1.6rem',
                backgroundColor: 'transparent',
                color: 'var(--main-color, #00abf0)',
                border: '2px solid var(--main-color, #00abf0)',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--main-color, #00abf0)';
                e.target.style.color = 'var(--bg-color, #081b29)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'var(--main-color, #00abf0)';
              }}
            >
              Refresh Page
            </button>
          </div>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details style={{ marginTop: '3rem', maxWidth: '800px', textAlign: 'left' }}>
              <summary style={{ cursor: 'pointer', fontSize: '1.4rem', marginBottom: '1rem' }}>
                Error Details (Development Only)
              </summary>
              <pre
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  overflow: 'auto',
                  fontSize: '1.2rem',
                  lineHeight: '1.6',
                }}
              >
                {this.state.error.toString()}
                {this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
