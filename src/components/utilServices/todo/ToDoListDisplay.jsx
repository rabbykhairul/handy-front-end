import React, { useState } from "react";
import ToDoItemForm from "./ToDoItemForm";
import "./ToDoListDisplay.css";

const ToDoListDisplay = () => {
  const [creatingNewTaskStatus, setCreatingNewTaskStatus] = useState(false);

  // event handlers
  const letUserCreateANewTask = () => {
    setCreatingNewTaskStatus(true);
  };
  // helper methods for rendering
  const renderListHeader = () => {
    return <h1 className="to-do-list-main-header">Today</h1>;
  };

  const renderAddTaskPrompt = () => {
    if (creatingNewTaskStatus) return null;

    return (
      <div className="add-task-button" onClick={letUserCreateANewTask}>
        <span className="plus-icon">+</span>
        Add task
      </div>
    );
  };

  const renderToDoItemForm = () => {
    if (creatingNewTaskStatus) return <ToDoItemForm />;
    return null;
  };

  return (
    <div className="to-do-list-display">
      {renderListHeader()}
      {renderAddTaskPrompt()}
      {renderToDoItemForm()}
    </div>
  );
};

export default ToDoListDisplay;
