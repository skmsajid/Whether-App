/**
 * ErrorState Component
 * Displays user-friendly error messages with retry guidance
 */

import React from "react";
import "../styles/ErrorState.css";

export default function ErrorState({ error, onRetry }) {
  return (
    <div className="error-state" role="alert" aria-live="assertive">
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h3 className="error-title">Oops! Something went wrong</h3>
        <p className="error-message">{error}</p>
        {onRetry && (
          <button onClick={onRetry} className="retry-button">
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}
