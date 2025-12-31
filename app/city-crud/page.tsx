'use client';

import { useState } from 'react';
import { useCities } from './hooks/useCityCrud';

export default function CitiesManager() {
  const { cityList, addCity, deleteCity } = useCities();

  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const handleAddCity = () => {
    if (!province || !city || !lat || !lon)
      return alert('All fields are required');

    addCity({
      province,
      city,
      lat: parseFloat(lat),
      lon: parseFloat(lon),
    });

    // Reset form
    setProvince('');
    setCity('');
    setLat('');
    setLon('');
  };

  return (
    <div className="cities-container">
      <h1>Cities ({cityList.length})</h1>

      {/* Form to add new city */}
      <div className="city-form">
        <input
          type="text"
          placeholder="Province"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="number"
          step="0.0001"
          placeholder="Latitude"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
        <input
          type="number"
          step="0.0001"
          placeholder="Longitude"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
        />
        <button onClick={handleAddCity}>Add City</button>
      </div>

      {/* City list */}
      <ul className="city-list">
        {cityList.map((city) => (
          <li className="city-card" key={city.province}>
            <div className="city-info">
              <strong>{city.city}</strong>
              <span>{city.province}</span>
              <span>
                Lat: {city.lat}, Lon: {city.lon}
              </span>
            </div>
            <button onClick={() => deleteCity(city.province)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
