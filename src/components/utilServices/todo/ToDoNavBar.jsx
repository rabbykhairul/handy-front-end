import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faPlus,
  faHistory,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./ToDoNavBar.css";

const ToDoNavBar = () => {
  const renderNavBarLeftSide = () => {
    return (
      <div className="to-do-nav-bar-left-side">
        <div>
          <FontAwesomeIcon icon={faBars} className="to-do-nav-bar-item" />
        </div>
        <div>
          <FontAwesomeIcon icon={faHome} className="to-do-nav-bar-item" />
        </div>
        <div>
          <Link to="/" className="to-do-nav-bar-item">
            handy landing
          </Link>
        </div>
      </div>
    );
  };

  const renderNavBarRightSide = () => {
    return (
      <div className="to-do-nav-bar-right-side">
        <div>
          <FontAwesomeIcon icon={faPlus} className="to-do-nav-bar-item" />
        </div>
        <div>
          <FontAwesomeIcon icon={faHistory} className="to-do-nav-bar-item" />
        </div>
        <div>
          <FontAwesomeIcon icon={faSignInAlt} className="to-do-nav-bar-item" />
        </div>
      </div>
    );
  };

  return (
    <div className="to-do-nav-bar">
      {renderNavBarLeftSide()}
      {renderNavBarRightSide()}
    </div>
  );
};

export default ToDoNavBar;
