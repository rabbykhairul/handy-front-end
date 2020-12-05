import React from "react";
import Button from "./Button";
import "./CardStyleNavBar.css";

const CardStyleNavBar = (props) => {
  const {
    leftSideButtons,
    rightSideButtons,
    activeButton,
    onButtonClick,
  } = props;

  const renderButton = (button) => {
    const selectStatus = button.value === activeButton.value;

    return (
      <div key={button.value}>
        <Button
          label={button.label}
          selectStatus={selectStatus}
          onClick={() => onButtonClick(button)}
        />
      </div>
    );
  };

  const renderNavBarLeftSide = () => {
    return (
      <div className="card-style-nav-bar-left-side">
        {leftSideButtons.map((button) => renderButton(button))}
      </div>
    );
  };

  const renderNavBarRightSide = () => {
    return (
      <div className="card-style-nav-bar-right-side">
        {rightSideButtons.map((button) => renderButton(button))}
      </div>
    );
  };

  return (
    <div className="card-style-nav-bar">
      {renderNavBarLeftSide()}
      {renderNavBarRightSide()}
    </div>
  );
};

export default CardStyleNavBar;
