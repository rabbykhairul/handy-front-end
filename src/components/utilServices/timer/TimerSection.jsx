import React, { useState } from "react";
import TimerNavBar from "./TimerNavBar";
import TimerClock from "./TimerClock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faCog } from "@fortawesome/free-solid-svg-icons";
import "./TimerSection.css";
import TimerSettings from "./TimerSettings";

const TimerSection = () => {
  const timerButtons = [{ label: "Timer", value: "timer" }];

  const infoButtons = [
    { label: <FontAwesomeIcon icon={faUndo} />, value: "reset" },
    { label: <FontAwesomeIcon icon={faCog} />, value: "settings" },
  ];

  const mSecsPerMinute = 60000;

  // state variables
  const [selectedButton, setSelectedButton] = useState(timerButtons[0]);
  const [timerDurationInMsec, setTimerDurationInMsec] = useState(
    35 * mSecsPerMinute
  );
  const [timerValueInMsec, setTimerValueInMsec] = useState(timerDurationInMsec);
  const [runningStatus, setRunningStatus] = useState(false);

  // event handlers
  const changeSelectedButton = (button) => {
    const newSelectedButton =
      button.value === "reset" ? timerButtons[0] : button;
    setSelectedButton(newSelectedButton);
    setRunningStatus(false);
    setTimerValueInMsec(getNewTimerValue(button));
  };

  const toggleRunningStatus = () => {
    setRunningStatus(!runningStatus);
  };

  const updateTimerDuration = (milliSeconds) => {
    setTimerDurationInMsec(milliSeconds);
    setTimerValueInMsec(milliSeconds);
    setSelectedButton(timerButtons[0]);
  };

  // generic methods
  const switchedToSettings = () => {
    return (
      selectedButton.value === "settings" || selectedButton.value === "reset"
    );
  };

  const getNewTimerValue = (button) => {
    if (button.value === "settings") return 0;
    return timerDurationInMsec;
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

  const renderTimerSettings = () => {
    if (selectedButton.value === "settings")
      return (
        <TimerSettings
          timerDurationInMsec={timerDurationInMsec}
          onEdit={updateTimerDuration}
        />
      );
    return null;
  };

  return (
    <div className="service-section timer-section">
      <div className="card-style-content-area">
        {renderTimerNavBar()}
        {renderTimerClock()}
        {renderTimerSettings()}
      </div>
    </div>
  );
};

export default TimerSection;
