import React, { useState } from 'react';
import axios from 'axios';

function Backend() {
  const [samples, setSamples] = useState([]);
  const [error, setError] = useState(null);

  const fetchSamples = async () => {
    try {
      const response = await axios.get('http://localhost:8001/samples');
      setSamples(response.data);
    } catch (error) {
      console.error('Error:', error.response?.data?.detail || error.message);
      setError('Failed to fetch samples');
    }
  };

  return (
    <div>
      <h2>Backend Interaction</h2>
      <button onClick={fetchSamples}>Fetch Samples</button>
      {error && <p>{error}</p>}
      <ul>
        {samples.map((sample) => (
          <li key={sample.id}>{sample.name}: {sample.data}</li>
        ))}
      </ul>
    </div>
  );
}

export default Backend;
