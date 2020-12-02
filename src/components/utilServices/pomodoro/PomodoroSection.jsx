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

  const [pomoTimeInMSec, setPomoTimeInMSec] = useState(
    pomoSettings.pomoTimeInMsec
  );

  const [breakTimeInMSec, setBreakTimeInMSec] = useState(
    pomoSettings.breakTimeInMsec
  );

  const [longBreakTimeInMSec, setLongBreakTimeInMSec] = useState(
    pomoSettings.longBreakTimeInMsec
  );

  // event handlers
  const changeSelectedButton = (button) => {
    setSelectedButton(button);

    setPomoTimeInMSec(pomoSettings.pomoTimeInMsec);
    setBreakTimeInMSec(pomoSettings.breakTimeInMsec);
    setLongBreakTimeInMSec(pomoSettings.longBreakTimeInMsec);
  };

  // generic methods
  const getRemainingMiliSeconds = () => {
    const currentSelection = selectedButton.value;

    if (currentSelection === "pomodoro") return pomoTimeInMSec;
    if (currentSelection === "break") return breakTimeInMSec;
    if (currentSelection === "long break") return longBreakTimeInMSec;

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
    const milliSeconds = getRemainingMiliSeconds();
    return <PomodoroClock milliSeconds={milliSeconds} />;
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
