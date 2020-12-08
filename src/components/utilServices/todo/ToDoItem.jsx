import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import "./ToDoItem.css";

const ToDoItem = (props) => {
  const { description, checked, onCheck } = props;
  const checkIcon = checked ? faCheckCircle : faCircle;
  const descriptionTextClassName = checked
    ? "to-do-description checked"
    : "to-do-description";

  // helper methods for rendering
  const renderCheckButton = () => {
    return (
      <div className="check-button" onClick={onCheck}>
        <FontAwesomeIcon icon={checkIcon} />
      </div>
    );
  };

  const renderToDoDescription = () => {
    return <div className={descriptionTextClassName}>{description}</div>;
  };

  return (
    <div className="to-do-item">
      {renderCheckButton()}
      {renderToDoDescription()}
    </div>
  );
};

export default ToDoItem;
