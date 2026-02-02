/**
 * SearchBox Component
 * Handles weather search input with validation and error states
 * Features: Real-time input validation, error messaging, accessible design
 */

import React, { useState } from "react";
import "../styles/SearchBox.css";

export default function SearchBox({ onSearch, isLoading }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setCity(value);
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    if (city.trim().length > 100) {
      setError("City name is too long");
      return;
    }

    onSearch(city.trim());
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-group">
          <input
            type="text"
            id="city-input"
            className="search-input"
            placeholder="Enter city name..."
            value={city}
            onChange={handleInputChange}
            disabled={isLoading}
            aria-label="City name input"
            aria-describedby={error ? "error-message" : ""}
            autoComplete="off"
          />
          <button
            type="submit"
            className="search-button"
            disabled={isLoading || !city.trim()}
            aria-label="Search for weather"
          >
            {isLoading ? (
              <>
                <span className="loading-spinner"></span>
                Searching...
              </>
            ) : (
              <>
                <span className="search-icon">🔍</span>
                Search
              </>
            )}
          </button>
        </div>

        {error && (
          <div
            id="error-message"
            className="search-error"
            role="alert"
            aria-live="polite"
          >
            {error}
          </div>
        )}
      </form>
    </div>
  );
}
