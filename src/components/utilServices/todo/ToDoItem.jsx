import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import "./ToDoItem.css";

const ToDoItem = () => {
  return (
    <div className="to-do-item">
      <div className="check-button">
        <FontAwesomeIcon icon={faCircle} />
      </div>
      <div className="to-do-description">Renew neteflix subscription</div>
    </div>
  );
};

export default ToDoItem;
