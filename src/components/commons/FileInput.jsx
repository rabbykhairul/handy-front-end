import React, { createRef, useEffect, useState } from "react";
import "./FileInput.css";

const FileInput = (props) => {
  const { onChange, onDrop } = props;

  const dropRef = createRef();
  const [isDragging, setIsDragging] = useState(false);
  const [dragLevelCount, setDragLevelCount] = useState(0);

  // Attach event listeners for drag and drop events
  useEffect(() => {
    const div = dropRef.current;
    div.addEventListener("dragenter", handleDragEnter);
    div.addEventListener("dragleave", handleDragLeave);
    div.addEventListener("dragover", handleDragOver);
    div.addEventListener("drop", handleDrop);

    return () => {
      div.removeEventListener("dragenter", handleDragEnter);
      div.removeEventListener("dragleave", handleDragLeave);
      div.removeEventListener("dragover", handleDragOver);
      div.removeEventListener("drop", handleDrop);
    };
  });

  // Drag and drop event listeners
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragLevelCount(dragLevelCount + 1);

    if (e.dataTransfer.items && e.dataTransfer.items.length > 0)
      setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const currentDragLevelCount = dragLevelCount;
    setDragLevelCount(dragLevelCount - 1);

    if (currentDragLevelCount - 1 <= 0) setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragLevelCount(0);
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onDrop(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

  return (
    <label className="file-input" ref={dropRef}>
      <p>Drop your image here...</p>
      {isDragging && (
        <div className="overlay-file-drag-indicator">Drop here :-)</div>
      )}
      <input type="file" name="image" onChange={onChange} />
    </label>
  );
};

export default FileInput;
