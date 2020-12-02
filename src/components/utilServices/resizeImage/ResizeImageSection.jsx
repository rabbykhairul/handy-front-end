import React from "react";
import ResizeImageForm from "./ResizeImageForm";
import "./ResizeImageSection.css";

const ResizeImageSection = () => {
  return (
    <div className="service-section resize-image-section">
      <div className="card-style-content-area">
        <ResizeImageForm />
      </div>
    </div>
  );
};

export default ResizeImageSection;
