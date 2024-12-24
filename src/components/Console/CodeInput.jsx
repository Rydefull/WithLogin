import React from "react";
import axios from "axios";

const CodeInput = ({ code, setCode, handleExecute }) => {
  return (
    <div className="code-input-container">
      <textarea
        className="code-input"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter your code here"
      ></textarea>
      <button onClick={handleExecute}>Execute</button>
    </div>
  );
};

export default CodeInput;
