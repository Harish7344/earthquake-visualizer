import React, { useState, useEffect } from 'react';
import EarthquakeMap from './components/EarthquakeMap';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [minMagnitude, setMinMagnitude] = useState(0);
  const [maxMagnitude, setMaxMagnitude] = useState(10);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <div className="app-container">
      <h1>Earthquake Data Map</h1>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        Toggle Dark Mode
      </button>
      <Filter 
        minMagnitude={minMagnitude}
        maxMagnitude={maxMagnitude}
        setMinMagnitude={setMinMagnitude}
        setMaxMagnitude={setMaxMagnitude}
      />
      <EarthquakeMap 
        minMagnitude={minMagnitude} 
        maxMagnitude={maxMagnitude} 
        isDarkMode={isDarkMode} 
      />
      <div className="legend">
        <h3>Magnitude Legend</h3>
        <ul>
          <li>
            <div className="color-box" style={{ backgroundColor: 'rgba(255,0,0,0.1)' }}></div>
            <span>Magnitude 1-2</span>
          </li>
          <li>
            <div className="color-box" style={{ backgroundColor: 'rgba(255,0,0,0.3)' }}></div>
            <span>Magnitude 2-4</span>
          </li>
          <li>
            <div className="color-box" style={{ backgroundColor: 'rgba(255,0,0,0.5)' }}></div>
            <span>Magnitude 4-6</span>
          </li>
          <li>
            <div className="color-box" style={{ backgroundColor: 'rgba(255,0,0,0.7)' }}></div>
            <span>Magnitude 6-8</span>
          </li>
          <li>
            <div className="color-box" style={{ backgroundColor: 'rgba(255,0,0,1)' }}></div>
            <span>Magnitude 8+</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
