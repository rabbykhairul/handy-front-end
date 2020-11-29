import React from "react";
import "./FileInput.css";

const FileInput = () => {
  return (
    <label className="file-input">
      <p>Drop your image here...</p>
      <div className="overlay-file-drag-indicator"></div>
      <input type="file" name="image" />
    </label>
  );
};

export default FileInput;
