/**
 * WeatherDisplay Component
 * Displays comprehensive weather information in a professional card layout
 * Features: Clear hierarchy, accessibility, responsive design
 */

import React from "react";
import { getWeatherEmoji } from "../utils/weatherAPI";
import "../styles/WeatherDisplay.css";

export default function WeatherDisplay({ weather }) {
  if (!weather) return null;

  const getWeatherDescription = (condition) => {
    return condition.charAt(0).toUpperCase() + condition.slice(1);
  };

  return (
    <div className="weather-display">
      <div className="weather-card">
        {/* Header Section */}
        <div className="weather-header">
          <div className="weather-location">
            <h2 className="location-name">{weather.city}</h2>
            <p className="location-country">{weather.country}</p>
          </div>
          <div className="weather-emoji-large">
            {getWeatherEmoji(weather.icon)}
          </div>
        </div>

        {/* Main Temperature Section */}
        <div className="temperature-section">
          <div className="main-temperature">
            <span className="temperature-value">{weather.temperature}</span>
            <span className="temperature-unit">°C</span>
          </div>
          <div className="feels-like">
            Feels like <span className="feels-value">{weather.feelsLike}°C</span>
          </div>
          <p className="weather-condition">{getWeatherDescription(weather.description)}</p>
        </div>

        {/* Weather Details Grid */}
        <div className="weather-details-grid">
          <div className="detail-card">
            <div className="detail-icon">💧</div>
            <div className="detail-content">
              <p className="detail-label">Humidity</p>
              <p className="detail-value">{weather.humidity}%</p>
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-icon">💨</div>
            <div className="detail-content">
              <p className="detail-label">Wind Speed</p>
              <p className="detail-value">{weather.windSpeed} km/h</p>
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-icon">🌡️</div>
            <div className="detail-content">
              <p className="detail-label">Min/Max</p>
              <p className="detail-value">
                {weather.tempMin}°C / {weather.tempMax}°C
              </p>
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-icon">🔽</div>
            <div className="detail-content">
              <p className="detail-label">Pressure</p>
              <p className="detail-value">{weather.pressure} hPa</p>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="weather-footer">
          <p className="footer-text">Real-time weather data from OpenWeatherMap</p>
        </div>
      </div>
    </div>
  );
}
