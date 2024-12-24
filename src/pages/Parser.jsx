import React, { useState } from 'react';
import axios from 'axios';

function Parser() {
  const [code, setCode] = useState('');
  const [returnType, setReturnType] = useState('string');
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8000/post_code', {
        code,
        return_type: returnType,
      });
      setResult(response.data.received_json.result);
    } catch (error) {
      console.error('Error:', error.response?.data?.detail || error.message);
      setResult('Error occurred');
    }
  };

  return (
    <div>
      <h2>Parser Interaction</h2>
      <textarea
        placeholder="Enter C++ code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <select value={returnType} onChange={(e) => setReturnType(e.target.value)}>
        <option value="string">String</option>
        <option value="int">Integer</option>
        <option value="double">Double</option>
        <option value="bool">Boolean</option>
      </select>
      <button onClick={handleSubmit}>Run Code</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
}

export default Parser;
