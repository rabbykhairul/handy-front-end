import React, { useState } from "react";
import ToDoTextAreaInput from "./ToDoTextAreaInput";
import ToDoFormButton from "./ToDoFormButton";
import "./ToDoItemForm.css";

const ToDoItemForm = (props) => {
  const {
    description = "",
    submitButtonLabel = "Add task",
    onSubmit,
    onCancel,
  } = props;

  const [toDoDescription, setToDoDescription] = useState(description);

  // event handlers
  const updateToDoDescription = (newDescription) => {
    setToDoDescription(newDescription);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(toDoDescription);
    setToDoDescription("");
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
          label={submitButtonLabel}
          styleType="fancy"
          type="submit"
          disabled={shouldAddTaskButtonBeDisabled()}
          onClick={handleSubmit}
        />
        <ToDoFormButton label="Cancel" styleType="normal" onClick={onCancel} />
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
