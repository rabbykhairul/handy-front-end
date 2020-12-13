import React from "react";
import ToDoItemForm from "./ToDoItemForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCheckCircle,
  faTrashAlt,
  faEdit,
} from "@fortawesome/free-regular-svg-icons";
import "./ToDoItem.css";

const ToDoItem = (props) => {
  const {
    description,
    checked,
    onCheck,
    onEditClick,
    editModeRunning,
    onEditDone,
    onEditCancel,
    onDelete,
  } = props;

  const checkIcon = checked ? faCheckCircle : faCircle;
  const descriptionTextClassName = checked
    ? "to-do-description checked"
    : "to-do-description";

  // event handlers
  const handleUserEdits = (toDoDescription) => {
    onEditDone(toDoDescription);
  };

  // helper methods for rendering
  const renderItemDetails = () => {
    if (editModeRunning) return null;

    return (
      <>
        {renderCheckButton()}
        {renderToDoDescription()}
        {renderToDoSettings()}
      </>
    );
  };

  const renderCheckButton = () => {
    return (
      <div className="to-do-action-button" onClick={onCheck}>
        <FontAwesomeIcon icon={checkIcon} />
      </div>
    );
  };

  const renderToDoDescription = () => {
    return <div className={descriptionTextClassName}>{description}</div>;
  };

  const renderToDoSettings = () => {
    if (checked) return null;

    return (
      <div className="to-do-settings">
        <div className="to-do-action-button">
          <FontAwesomeIcon icon={faEdit} onClick={onEditClick} />
        </div>
        <div className="to-do-action-button">
          <FontAwesomeIcon icon={faTrashAlt} onClick={onDelete} />
        </div>
      </div>
    );
  };

  const renderItemEditForm = () => {
    if (editModeRunning)
      return (
        <ToDoItemForm
          description={description}
          submitButtonLabel="Save"
          onSubmit={handleUserEdits}
          onCancel={onEditCancel}
        />
      );
  };

  return (
    <div className="to-do-item">
      {renderItemDetails()}
      {renderItemEditForm()}
    </div>
  );
};

export default ToDoItem;
