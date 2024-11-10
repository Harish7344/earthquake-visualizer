// /src/components/EarthquakeMap.js

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { fetchEarthquakeData } from '../utils/fetchEarthquakeData';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const EarthquakeMap = ({ minMagnitude, maxMagnitude }) => {
  const [earthquakes, setEarthquakes] = useState([]);
  
  // Fetch data when component mounts
  useEffect(() => {
    const getEarthquakeData = async () => {
      const data = await fetchEarthquakeData();
      // Filter earthquakes by magnitude range
      const filteredData = data.filter(item => {
        const magnitude = item.properties.mag;
        return magnitude >= minMagnitude && magnitude <= maxMagnitude;
      });
      setEarthquakes(filteredData);
    };
    getEarthquakeData();
  }, [minMagnitude, maxMagnitude]);

  // Custom marker icon based on magnitude
  const getMarkerIcon = (magnitude) => {
    const size = Math.min(50, magnitude * 5); // Max size for large quakes
    return L.divIcon({
      className: 'quake-marker',
      html: `<div style="background-color: rgba(255,0,0,${Math.min(magnitude / 10, 1)}); width: ${size}px; height: ${size}px; border-radius: 50%;"></div>`,
      iconSize: [size, size]
    });
  };

  return (
    <MapContainer center={[37.7749, -122.4194]} zoom={3} style={{ height: '100vh', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {earthquakes.map((quake, index) => {
        const { geometry, properties } = quake;
        const { coordinates } = geometry;
        const { mag, place, time } = properties;
        const timestamp = new Date(time);
        return (
          <Marker
            key={index}
            position={[coordinates[1], coordinates[0]]}
            icon={getMarkerIcon(mag)}
          >
            <Popup>
              <div>
                <h4>{place}</h4>
                <p><strong>Magnitude:</strong> {mag}</p>
                <p><strong>Time:</strong> {timestamp.toLocaleString()}</p>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default EarthquakeMap;
