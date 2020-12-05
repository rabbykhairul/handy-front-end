import React, { useState } from "react";
import TimerNavBar from "./TimerNavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faCog } from "@fortawesome/free-solid-svg-icons";
import "./TimerSection.css";

const TimerSection = () => {
  const timerButtons = [{ label: "Timer", value: "timer" }];

  const infoButtons = [
    { label: <FontAwesomeIcon icon={faUndo} />, value: "reset" },
    { label: <FontAwesomeIcon icon={faCog} />, value: "settings" },
  ];

  // state variables
  const [selectedButton, setSelectedButton] = useState(timerButtons[0]);

  // event handlers
  const changeSelectedButton = (button) => {
    setSelectedButton(button);
  };

  // helper methods for rendering
  const renderTimerNavBar = () => {
    return (
      <TimerNavBar
        leftSideButtons={timerButtons}
        rightSideButtons={infoButtons}
        activeButton={selectedButton}
        onButtonClick={changeSelectedButton}
      />
    );
  };

  return (
    <div className="service-section timer-section">
      <div className="card-style-content-area">{renderTimerNavBar()}</div>
    </div>
  );
};

export default TimerSection;
