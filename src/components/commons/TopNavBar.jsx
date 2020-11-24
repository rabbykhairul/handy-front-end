import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";
import "./TopNavBar.css";

const TopNavBar = () => {
  return (
    <nav>
      {renderLeftSide()}
      {renderRightSide()}
    </nav>
  );
};

export default TopNavBar;

const renderLeftSide = () => {
  return (
    <div className="nav-left-side">
      <Link to="/" className="brand-name">
        handy
      </Link>
    </div>
  );
};

const renderRightSide = () => {
  return (
    <div>
      <LinkButton to="/" label="Login" size="sm" />
    </div>
  );
};
