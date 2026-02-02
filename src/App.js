/**
 * Main App Component
 * Orchestrates the entire weather application with state management
 * Handles API calls, error states, and UI flow
 */

import React, { useState, useCallback } from "react";
import SearchBox from "./components/SearchBox";
import WeatherDisplay from "./components/WeatherDisplay";
import LoadingState from "./components/LoadingState";
import ErrorState from "./components/ErrorState";
import WelcomeState from "./components/WelcomeState";
import { fetchWeatherByCity } from "./utils/weatherAPI";
import "./styles/App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  /**
   * Handles weather search with error handling and state management
   * @param {string} city - City name to search for
   */
  const handleSearch = useCallback(async (city) => {
    setIsLoading(true);
    setError("");

    try {
      const weatherData = await fetchWeatherByCity(city);
      setWeather(weatherData);
      setError("");
    } catch (err) {
      setError(err.message || "Failed to fetch weather data");
      setWeather(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Handles retry action when error occurs
   */
  const handleRetry = useCallback(() => {
    setError("");
    setWeather(null);
  }, []);

  return (
    <div className="app">
      {/* Background gradient */}
      <div className="app-background"></div>

      {/* Main content */}
      <div className="app-container">
        {/* Header */}
        <header className="app-header">
          <h1 className="app-title">
            <span className="title-emoji">🌤️</span>
            Weather App
          </h1>
          <p className="app-subtitle">Get real-time weather for any city</p>
        </header>

        {/* Search Section */}
        <SearchBox onSearch={handleSearch} isLoading={isLoading} />

        {/* Content Section - Shows based on current state */}
        <main className="app-main">
          {isLoading && <LoadingState />}

          {error && !isLoading && <ErrorState error={error} onRetry={handleRetry} />}

          {weather && !error && <WeatherDisplay weather={weather} />}

          {!weather && !error && !isLoading && <WelcomeState />}
        </main>

        {/* Footer */}
        <footer className="app-footer">
          <p>
            Built with React • Powered by{" "}
            <a
              href="https://openweathermap.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              OpenWeatherMap API
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
