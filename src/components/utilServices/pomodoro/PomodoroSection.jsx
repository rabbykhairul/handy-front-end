import React, { useState } from "react";
import PomodoroNavBar from "./PomodoroNavBar";
import PomodoroClock from "./PomodoroClock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faCog } from "@fortawesome/free-solid-svg-icons";
import "./PomodoroSection.css";

const PomodoroSection = () => {
  const pomoButtons = [
    { label: "pomodoro", value: "pomodoro" },
    { label: "break", value: "break" },
    { label: "long break", value: "long break" },
  ];

  const infoButtons = [
    { label: <FontAwesomeIcon icon={faChartBar} />, value: "stats" },
    { label: <FontAwesomeIcon icon={faCog} />, value: "settings" },
  ];

  // pomodoro settings
  const mSecsPerMinutes = 60000;
  const pomoSettings = {
    pomoTimeInMsec: 15 * mSecsPerMinutes,
    breakTimeInMsec: 5 * mSecsPerMinutes,
    longBreakTimeInMsec: 10 * mSecsPerMinutes,
  };

  // component state variables
  const [selectedButton, setSelectedButton] = useState(pomoButtons[0]);
  const [timerValueInMSec, setTimerValueInMSec] = useState(
    pomoSettings.pomoTimeInMsec
  );

  // event handlers
  const changeSelectedButton = (button) => {
    setSelectedButton(button);
    setTimerValueInMSec(getNewTimerValue(button));
  };

  // generic methods
  const getNewTimerValue = (button) => {
    const currentSelection = button.value;

    if (currentSelection === "pomodoro") return pomoSettings.pomoTimeInMsec;

    if (currentSelection === "break") return pomoSettings.breakTimeInMsec;

    if (currentSelection === "long break")
      return pomoSettings.longBreakTimeInMsec;

    return 0;
  };

  // helper methods for rendering
  const renderPomodoroNavBar = () => {
    return (
      <PomodoroNavBar
        leftSideButtons={pomoButtons}
        rightSideButtons={infoButtons}
        activeButton={selectedButton}
        onButtonClick={changeSelectedButton}
      />
    );
  };

  const renderPomodoroClock = () => {
    return <PomodoroClock milliSeconds={timerValueInMSec} />;
  };

  return (
    <div className="service-section pomodoro-section">
      <div className="card-style-content-area">
        {renderPomodoroNavBar()}
        {renderPomodoroClock()}
      </div>
    </div>
  );
};

export default PomodoroSection;
