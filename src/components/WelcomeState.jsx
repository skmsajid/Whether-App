/**
 * WelcomeState Component
 * Displays welcome message and instructions before first search
 */

import React from "react";
import "../styles/WelcomeState.css";

export default function WelcomeState() {
  return (
    <div className="welcome-state">
      <div className="welcome-container">
        <div className="welcome-emoji">🌍</div>
        <h2 className="welcome-title">Weather App</h2>
        <p className="welcome-subtitle">
          Get real-time weather information for any city in the world
        </p>
        <div className="welcome-features">
          <div className="feature">
            <span className="feature-icon">🌡️</span>
            <span>Current Temperature</span>
          </div>
          <div className="feature">
            <span className="feature-icon">💨</span>
            <span>Wind Speed</span>
          </div>
          <div className="feature">
            <span className="feature-icon">💧</span>
            <span>Humidity Level</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🌅</span>
            <span>More Details</span>
          </div>
        </div>
        <p className="welcome-instruction">Start by searching for a city above</p>
      </div>
    </div>
  );
}
