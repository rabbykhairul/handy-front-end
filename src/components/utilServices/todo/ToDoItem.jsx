import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCheckCircle,
  faTrashAlt,
  faEdit,
} from "@fortawesome/free-regular-svg-icons";
import "./ToDoItem.css";

const ToDoItem = (props) => {
  const { description, checked, onCheck, onDelete } = props;
  const checkIcon = checked ? faCheckCircle : faCircle;
  const descriptionTextClassName = checked
    ? "to-do-description checked"
    : "to-do-description";

  // helper methods for rendering
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
          <FontAwesomeIcon icon={faEdit} />
        </div>
        <div className="to-do-action-button">
          <FontAwesomeIcon icon={faTrashAlt} onClick={onDelete} />
        </div>
      </div>
    );
  };

  return (
    <div className="to-do-item">
      {renderCheckButton()}
      {renderToDoDescription()}
      {renderToDoSettings()}
    </div>
  );
};

export default ToDoItem;
