import React, { useState } from "react";
import ToDoTextAreaInput from "./ToDoTextAreaInput";
import ToDoFormButton from "./ToDoFormButton";
import "./ToDoItemForm.css";

const ToDoItemForm = (props) => {
  const { onSubmit } = props;

  const [toDoDescription, setToDoDescription] = useState("");

  // event handlers
  const updateToDoDescription = (newDescription) => {
    setToDoDescription(newDescription);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(toDoDescription);
  };

  // generic methods
  const shouldAddTaskButtonBeDisabled = () => {
    return toDoDescription.length === 0;
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

  const renderFormButtons = () => {
    return (
      <>
        <ToDoFormButton
          label="Add task"
          styleType="fancy"
          type="submit"
          disabled={shouldAddTaskButtonBeDisabled()}
        />
        <ToDoFormButton label="Cancel" styleType="normal" />
      </>
    );
  };

  return (
    <form className="to-do-item-form" onSubmit={handleSubmit}>
      {renderInputFields()}
      {renderFormButtons()}
    </form>
  );
};

export default ToDoItemForm;
