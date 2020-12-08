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

  return (
    <div className="to-do-item">
      <div className="check-button" onClick={onCheck}>
        <FontAwesomeIcon icon={checkIcon} />
      </div>
      <div className={descriptionTextClassName}>{description}</div>
    </div>
  );
};

export default ToDoItem;
