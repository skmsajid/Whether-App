# 📚 Component Documentation Guide

## App.js - Main Application Component

### Purpose
Central state management and orchestration of the entire weather application.

### Props
None - Root component

### State
```javascript
weather       // Current weather data object or null
isLoading     // Boolean: true when fetching API
error         // Error message string or empty
```

### Key Features
- Manages all application state
- Handles API calls via `handleSearch()`
- Routes to different UI states
- Responsive layout container

### Usage
```jsx
<App />
```

---

## SearchBox.jsx - Search Input Component

### Purpose
Handles user input for city search with validation and error feedback.

### Props
```javascript
onSearch: (city: string) => void  // Callback when search is submitted
isLoading: boolean               // Disables input during loading
```

### State
```javascript
city    // Current input value
error   // Input validation error message
```

### Key Features
- Real-time input validation
- Error message display
- Accessible form with ARIA labels
- Disabled state during API fetch
- Loading spinner in button

### Usage
```jsx
<SearchBox 
  onSearch={(city) => handleSearch(city)}
  isLoading={isLoading}
/>
```

### Validation Rules
- Non-empty string
- Max 100 characters
- Trimmed before submission

---

## WeatherDisplay.jsx - Weather Information Card

### Purpose
Displays comprehensive weather information in a professional card layout.

### Props
```javascript
weather: {
  city: string
  country: string
  temperature: number        // °C, rounded
  feelsLike: number         // °C, rounded
  tempMin: number           // °C
  tempMax: number           // °C
  humidity: number          // %
  windSpeed: number         // km/h
  description: string       // e.g., "overcast clouds"
  icon: string             // e.g., "clouds"
  pressure: number         // hPa
}
```

### Key Features
- Centered card layout
- Large temperature display
- 4-grid weather metrics
- Weather condition emoji
- Responsive grid (2 columns → 1 column on mobile)
- Smooth animations
- Professional typography

### Usage
```jsx
<WeatherDisplay weather={weatherData} />
```

### Layout Structure
```
┌─────────────────────────────────┐
│  Location      Weather Emoji    │
├─────────────────────────────────┤
│       Temperature Display       │
│      Feels Like Temperature     │
│       Weather Condition         │
├─────────────────────────────────┤
│ Humidity  │  Wind Speed         │
├───────────┼────────────────────│
│ Min/Max   │  Pressure          │
├─────────────────────────────────┤
│   Data from OpenWeatherMap      │
└─────────────────────────────────┘
```

---

## LoadingState.jsx - Loading Indicator

### Purpose
Displays elegant loading animation while fetching weather data.

### Props
None

### Key Features
- Large spinning animation
- "Fetching weather data..." message
- Smooth fade-in animation
- Status role for accessibility
- Prevents user action during load

### Usage
```jsx
<LoadingState />
```

### Display Time
- Shows while `isLoading === true`
- Typically 1-3 seconds depending on network

---

## ErrorState.jsx - Error Display Component

### Purpose
Shows user-friendly error messages with retry functionality.

### Props
```javascript
error: string           // Error message to display
onRetry: () => void    // Callback for retry button
```

### Key Features
- Warning emoji icon
- Clear error title
- Descriptive error message
- Retry button
- Alert role for accessibility
- Smooth fade-in animation

### Usage
```jsx
<ErrorState 
  error={errorMessage}
  onRetry={() => setError("")}
/>
```

### Error Types Handled
1. Network errors
2. Invalid city (404)
3. API authentication (401)
4. Rate limit (429)
5. Input validation
6. Other server errors

---

## WelcomeState.jsx - Welcome Screen

### Purpose
Displays welcome message and app features on initial load.

### Props
None

### Key Features
- Welcome emoji animation
- App title
- Feature overview (4 features)
- Search instructions
- Glassmorphism design
- Smooth fade-in animation

### Features Shown
- 🌡️ Current Temperature
- 💨 Wind Speed
- 💧 Humidity Level
- 🌅 More Details

### Usage
```jsx
<WelcomeState />
```

### Display Condition
Shows when `!weather && !error && !isLoading`

---

## Component Lifecycle Flow

### 1. Initial Mount
```
App renders → WelcomeState visible
└─ User sees welcome screen
└─ Encouraged to search for a city
```

### 2. User Searches
```
User types city → SearchBox validates input
└─ SearchBox calls onSearch(city)
└─ App.handleSearch() starts
└─ setIsLoading(true)
└─ LoadingState replaces WelcomeState
```

### 3. API Response Success
```
API returns weather data → fetchWeatherByCity() resolves
└─ formatWeatherData() shapes response
└─ setWeather(data)
└─ setError("")
└─ setIsLoading(false)
└─ WeatherDisplay replaces LoadingState
```

### 4. API Response Error
```
API fails → fetchWeatherByCity() throws error
└─ Error caught in handleSearch()
└─ setError(errorMessage)
└─ setWeather(null)
└─ setIsLoading(false)
└─ ErrorState replaces LoadingState
```

### 5. User Retries
```
User clicks "Try Again" → onRetry() calls handleRetry()
└─ setError("")
└─ setWeather(null)
└─ WelcomeState visible again
└─ User can search again
```

---

## Data Transformation Flow

### API Response → App State → Component Props

```
API Response:
{
  "name": "London",
  "main": {
    "temp": 15.23,
    "feels_like": 14.87
  }
}
        ↓
formatWeatherData():
{
  "city": "London",
  "temperature": 15,        (rounded)
  "feelsLike": 15          (rounded)
}
        ↓
setWeather(data):
State updated in App
        ↓
<WeatherDisplay weather={weather} />:
Component receives props
        ↓
Render weather details
```

---

## Styling System for Components

### SearchBox.css Structure
```css
.search-box              /* Container */
  .search-form          /* Form element */
    .search-input-group /* Input + Button container */
      .search-input     /* Input field */
      .search-button    /* Submit button */
        .search-icon    /* Icon inside button */
        .loading-spinner /* Spinner animation */
    .search-error       /* Error message */
```

### WeatherDisplay.css Structure
```css
.weather-display         /* Container */
  .weather-card         /* Main card */
    .weather-header     /* Location + Emoji */
      .weather-location /* City name, country */
      .weather-emoji-large /* Large weather emoji */
    .temperature-section /* Temperature display */
      .main-temperature
      .feels-like
      .weather-condition
    .weather-details-grid /* 2x2 grid of metrics */
      .detail-card (x4) /* Individual metric */
    .weather-footer     /* Data attribution */
```

---

## Responsive Behavior

### Mobile (320px - 575px)
- Full-width layout
- Single column detail cards
- Smaller font sizes
- Touch-friendly buttons
- Optimized padding

### Tablet (576px - 991px)
- Centered max-width
- 2-column detail grid
- Medium font sizes
- Balanced spacing

### Desktop (992px - 1199px)
- Professional layout
- Optimal reading width
- Hover effects
- Enhanced spacing

### Large Desktop (1200px+)
- Maximum width container
- Premium spacing
- All hover animations
- Enhanced typography

---

## Component Reusability

### Extracting Components for Future Use

If needed, these components can be extracted into a component library:

```javascript
// Example: Create a reusable MetricCard
const MetricCard = ({ icon, label, value }) => (
  <div className="metric-card">
    <div className="metric-icon">{icon}</div>
    <div className="metric-label">{label}</div>
    <div className="metric-value">{value}</div>
  </div>
);

// Used in WeatherDisplay.jsx
<MetricCard icon="💧" label="Humidity" value="72%" />
```

---

## Accessibility Features per Component

### SearchBox
- `id` and `for` linking labels
- `aria-label` for screen readers
- `aria-describedby` links to error
- `aria-live="polite"` for error announcements
- Keyboard accessible (Tab, Enter)

### WeatherDisplay
- Semantic `<h2>` for location name
- Proper heading hierarchy
- Descriptive text for metrics

### LoadingState
- `role="status"` announces loading
- `aria-label` describes action
- Visible text support for screen readers

### ErrorState
- `role="alert"` announces errors
- `aria-live="assertive"` for urgent messages
- Clear, descriptive error text
- Accessible retry button

### WelcomeState
- Semantic structure
- Clear text descriptions
- Accessible layout

---

## Performance Optimizations

### Component Level
- `useCallback` for handler functions
- Minimal re-renders
- No unnecessary state updates

### CSS Level
- CSS variables for efficient updates
- Hardware-accelerated animations
- Efficient selectors
- Minimal specificity

### API Level
- Single API call per search
- Error caching prevents retry loops
- Proper cleanup in finally block

---

## Common Usage Patterns

### Adding New Metric to WeatherDisplay
```javascript
// Add to formatWeatherData
return {
  ...existing,
  dewPoint: Math.round(data.main.dew_point)
};

// Add to WeatherDisplay.jsx
<div className="detail-card">
  <div className="detail-icon">💧</div>
  <div className="detail-content">
    <p className="detail-label">Dew Point</p>
    <p className="detail-value">{weather.dewPoint}°C</p>
  </div>
</div>
```

### Adding New Error Type
```javascript
// In weatherAPI.js
if (response.status === 503) {
  throw new Error("Weather service is temporarily unavailable. Please try again soon.");
}
```

### Styling New State
```css
.new-state {
  animation: slideUp var(--transition-slow);
  padding: var(--spacing-xl);
  max-width: 600px;
}
```

---

## Testing Each Component

### SearchBox Testing
- [ ] Valid input submission
- [ ] Empty input rejection
- [ ] Long input rejection
- [ ] Loading state display
- [ ] Error message display
- [ ] Keyboard navigation

### WeatherDisplay Testing
- [ ] All metrics render
- [ ] Correct number formatting
- [ ] Responsive grid layout
- [ ] Emoji display
- [ ] Smooth animations

### LoadingState Testing
- [ ] Spinner animation plays
- [ ] Text displays
- [ ] Proper timing

### ErrorState Testing
- [ ] Error message displays
- [ ] Retry button works
- [ ] Accessibility announcements

### WelcomeState Testing
- [ ] Initial display
- [ ] Feature cards visible
- [ ] Animations smooth

---

## Quick Reference

### Component Props Summary

| Component      | Props | Optional |
|----------------|---------|----------|
| SearchBox      | onSearch, isLoading  | No |
| WeatherDisplay | weather   | No |
| LoadingState   | -               | - |
| ErrorState     | error, onRetry  | No |
| WelcomeState   | -                    | - |

### Component Files Location
- `src/components/SearchBox.jsx`
- `src/components/WeatherDisplay.jsx`
- `src/components/LoadingState.jsx`
- `src/components/ErrorState.jsx`
- `src/components/WelcomeState.jsx`

### Component Styles Location
- `src/styles/SearchBox.css`
- `src/styles/WeatherDisplay.css`
- `src/styles/LoadingState.css`
- `src/styles/ErrorState.css`
- `src/styles/WelcomeState.css`

---

**For more detailed information, see ARCHITECTURE.md**
