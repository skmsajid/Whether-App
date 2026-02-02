/**
 * LoadingState Component
 * Displays elegant loading animation while fetching weather data
 */

import React from "react";
import "../styles/LoadingState.css";

export default function LoadingState() {
  return (
    <div className="loading-state" role="status" aria-label="Loading weather data">
      <div className="loading-container">
        <div className="loading-spinner-large"></div>
        <p className="loading-text">Fetching weather data...</p>
      </div>
    </div>
  );
}
