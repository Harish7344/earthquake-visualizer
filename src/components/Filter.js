// /src/components/Filter.js

import React from 'react';

const Filter = ({ minMagnitude, maxMagnitude, setMinMagnitude, setMaxMagnitude }) => {
  return (
    <div className="filter-container">
      <label>
        Min Magnitude:
        <input
          type="number"
          value={minMagnitude}
          onChange={(e) => setMinMagnitude(parseFloat(e.target.value))}
          min={0}
        />
      </label>
      <label>
        Max Magnitude:
        <input
          type="number"
          value={maxMagnitude}
          onChange={(e) => setMaxMagnitude(parseFloat(e.target.value))}
          max={10}
        />
      </label>
    </div>
  );
};

export default Filter;
