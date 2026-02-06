/**
 * LoadingState Component
 * Displays error message or retry prompt
 * Provides user-friendly error handling
 */
function LoadingState({ error, onRetry }) {
  return (
    <div className="loading-state">
      <div className="status-message">
        <p className="error-text">{error}</p>
        {onRetry && (
          <button onClick={onRetry} className="retry-button">
            Retry
          </button>
        )}
      </div>
    </div>
  );
}

export default LoadingState;
