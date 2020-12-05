import React, { useState } from "react";
import TimerNavBar from "./TimerNavBar";
import TimerClock from "./TimerClock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faCog } from "@fortawesome/free-solid-svg-icons";
import "./TimerSection.css";

const TimerSection = () => {
  const timerButtons = [{ label: "Timer", value: "timer" }];

  const infoButtons = [
    { label: <FontAwesomeIcon icon={faUndo} />, value: "reset" },
    { label: <FontAwesomeIcon icon={faCog} />, value: "settings" },
  ];

  const mSecsPerMinute = 60000;

  // state variables
  const [selectedButton, setSelectedButton] = useState(timerButtons[0]);
  const [timerValueInMinutes, setTimerValueInMintues] = useState(35);
  const [timerValueInMsec, setTimerValueInMsec] = useState(
    timerValueInMinutes * mSecsPerMinute
  );
  const [runningStatus, setRunningStatus] = useState(false);

  // event handlers
  const changeSelectedButton = (button) => {
    setSelectedButton(button);
  };

  const toggleRunningStatus = () => {
    setRunningStatus(!runningStatus);
  };

  // generic methods
  const switchedToSettings = () => {
    return (
      selectedButton.value === "settings" || selectedButton.value === "reset"
    );
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

  const renderTimerClock = () => {
    if (switchedToSettings()) return null;

    return (
      <TimerClock
        milliSeconds={timerValueInMsec}
        runningStatus={runningStatus}
        onControlClick={toggleRunningStatus}
      />
    );
  };

  return (
    <div className="service-section timer-section">
      <div className="card-style-content-area">
        {renderTimerNavBar()}
        {renderTimerClock()}
      </div>
    </div>
  );
};

export default TimerSection;
