import React from "react";
import "./ToDoListDisplay.css";

const ToDoListDisplay = () => {
  const renderListHeader = () => {
    return <h1 className="to-do-list-main-header">Today</h1>;
  };

  const renderAddTaskPrompt = () => {
    return (
      <div className="add-task-button">
        <span className="plus-icon">+</span>
        Add task
      </div>
    );
  };

  return (
    <div className="to-do-list-display">
      {renderListHeader()}
      {renderAddTaskPrompt()}
    </div>
  );
};

export default ToDoListDisplay;
