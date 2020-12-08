import React, { useState } from "react";
import ToDoTextAreaInput from "./ToDoTextAreaInput";
import "./ToDoItemForm.css";

const ToDoItemForm = () => {
  const [toDoDescription, setToDoDescription] = useState("");

  const updateToDoDescription = (newDescription) => {
    setToDoDescription(newDescription);
  };

  // helper methods for rendering
  const renderInputFields = () => {
    return (
      <div className="to-do-item-form-input-area">
        <ToDoTextAreaInput
          name="toDoDescription"
          value={toDoDescription}
          placeholder="e.g. renew neteflix subscription"
          onChange={updateToDoDescription}
        />
      </div>
    );
  };

  return <form className="to-do-item-form">{renderInputFields()}</form>;
};

export default ToDoItemForm;
