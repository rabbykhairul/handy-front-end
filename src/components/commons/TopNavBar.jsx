import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";
import "./TopNavBar.css";

const TopNavBar = (props) => {
  const { pageType } = props;
  const className = pageType === "util-services" ? "util-services-nav" : "";

  return (
    <nav className={className}>
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
