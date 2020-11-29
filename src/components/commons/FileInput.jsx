import React from "react";
import "./FileInput.css";

const FileInput = (props) => {
  const { onChange } = props;

  return (
    <label className="file-input">
      <p>Drop your image here...</p>
      <div className="overlay-file-drag-indicator"></div>
      <input type="file" name="image" onChange={onChange} />
    </label>
  );
};

export default FileInput;
