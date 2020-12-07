import React, { useState } from "react";
import ToDoTextAreaInput from "./ToDoTextAreaInput";
import "./ToDoItemForm.css";

const ToDoItemForm = () => {
  const [toDoDescription, setToDoDescription] = useState("");

  const updateToDoDescription = (newDescription) => {
    setToDoDescription(newDescription);
  };

  return (
    <div className="to-do-item-form" tabIndex="0">
      <ToDoTextAreaInput
        name="toDoDescription"
        value={toDoDescription}
        placeholder="e.g. renew neteflix subscription"
        onChange={updateToDoDescription}
      />
    </div>
  );
};

export default ToDoItemForm;
