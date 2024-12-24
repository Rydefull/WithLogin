import React, { useState } from "react";
import axios from "axios";

const SampleList = ({ samples, setCode }) => {
  const [editing, setEditing] = useState(false);
  const [selectedSample, setSelectedSample] = useState(null);

  const handleEdit = () => setEditing(true);
  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8080/samples/${selectedSample.id}`, {
        name: selectedSample.name,
        data: selectedSample.data,
      });
      setEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="sample-list">
      <h3>Samples</h3>
      <ul>
        {samples.map((sample) => (
          <li
            key={sample.id}
            onClick={() => {
              setCode(sample.data);
              setSelectedSample(sample);
            }}
          >
            {sample.name}
          </li>
        ))}
      </ul>
      {selectedSample && (
        <div>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleSave} disabled={!editing}>
            Save
          </button>
          <input
            type="text"
            value={selectedSample.name}
            onChange={(e) =>
              setSelectedSample({ ...selectedSample, name: e.target.value })
            }
            disabled={!editing}
          />
          <textarea
            value={selectedSample.data}
            onChange={(e) =>
              setSelectedSample({ ...selectedSample, data: e.target.value })
            }
            disabled={!editing}
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default SampleList;
