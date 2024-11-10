// /src/utils/fetchEarthquakeData.js

import axios from 'axios';

export const fetchEarthquakeData = async () => {
  try {
    const response = await axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson');
    return response.data.features; // Extract earthquake data from the response
  } catch (error) {
    console.error("Error fetching earthquake data:", error);
    return [];
  }
};
