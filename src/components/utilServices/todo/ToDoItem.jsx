import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import "./ToDoItem.css";

const ToDoItem = (props) => {
  const { description, checked } = props;
  const checkIcon = checked ? faCheckCircle : faCircle;

  return (
    <div className="to-do-item">
      <div className="check-button">
        <FontAwesomeIcon icon={checkIcon} />
      </div>
      <div className="to-do-description">{description}</div>
    </div>
  );
};

export default ToDoItem;
