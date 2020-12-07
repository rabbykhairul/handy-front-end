import React from "react";
import ToDoListDisplay from "./ToDoListDisplay";
import "./ToDoSection.css";

const ToDoSection = () => {
  return (
    <div className="to-do-section">
      <ToDoListDisplay />
    </div>
  );
};

export default ToDoSection;
