import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import "./ToDoItem.css";

const ToDoItem = (props) => {
  const { description } = props;

  return (
    <div className="to-do-item">
      <div className="check-button">
        <FontAwesomeIcon icon={faCircle} />
      </div>
      <div className="to-do-description">{description}</div>
    </div>
  );
};

export default ToDoItem;
