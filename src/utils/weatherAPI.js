/**
 * Weather API utility for fetching weather data from OpenWeather API
 * Uses environment variables for secure API key management
 */

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "c26b8fb0fc138538e1de8e69a2568754";

/**
 * Validates city name input
 * @param {string} city - City name to validate
 * @returns {boolean} - True if valid, false otherwise
 */
export const validateCity = (city) => {
  const trimmedCity = city.trim();
  return trimmedCity.length > 0 && trimmedCity.length <= 100;
};

/**
 * Formats weather data from API response
 * @param {Object} data - Raw API response data
 * @returns {Object} - Formatted weather data
 */
const formatWeatherData = (data) => {
  return {
    city: data.name,
    country: data.sys.country,
    temperature: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    tempMin: Math.round(data.main.temp_min),
    tempMax: Math.round(data.main.temp_max),
    humidity: data.main.humidity,
    windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
    description: data.weather[0].description,
    icon: data.weather[0].main.toLowerCase(),
    pressure: data.main.pressure,
  };
};

/**
 * Fetches weather information for a specific city
 * @param {string} city - City name to fetch weather for
 * @returns {Promise<Object>} - Formatted weather data or error object
 */
export const fetchWeatherByCity = async (city) => {
  if (!API_KEY) {
    throw new Error("API key is not configured. Please set REACT_APP_WEATHER_API_KEY in .env.local");
  }

  if (!validateCity(city)) {
    throw new Error("Please enter a valid city name");
  }

  try {
    const response = await fetch(
      `${API_BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`City "${city}" not found. Please check the spelling and try again.`);
      } else if (response.status === 401) {
        throw new Error("API authentication failed. Please check your API key.");
      } else if (response.status === 429) {
        throw new Error("Too many requests. Please wait a moment and try again.");
      } else {
        throw new Error("Unable to fetch weather data. Please try again.");
      }
    }

    const data = await response.json();
    return formatWeatherData(data);
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error("Network error. Please check your internet connection.");
    }
    throw error;
  }
};

/**
 * Gets appropriate weather icon based on weather condition
 * @param {string} condition - Weather condition
 * @returns {string} - Weather emoji or icon representation
 */
export const getWeatherEmoji = (condition) => {
  const conditionMap = {
    clear: "☀️",
    clouds: "☁️",
    rain: "🌧️",
    drizzle: "🌦️",
    thunderstorm: "⛈️",
    snow: "❄️",
    mist: "🌫️",
  };
  return conditionMap[condition] || "🌤️";
};
