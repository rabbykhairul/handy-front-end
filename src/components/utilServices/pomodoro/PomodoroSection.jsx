import React, { useState } from "react";
import PomodoroNavBar from "./PomodoroNavBar";
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

  const [selectedButton, setSelectedButton] = useState(pomoButtons[0]);

  const changeSelectedButton = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className="service-section pomodoro-section">
      <div className="card-style-content-area">
        <PomodoroNavBar
          leftSideButtons={pomoButtons}
          rightSideButtons={infoButtons}
          activeButton={selectedButton}
          onButtonClick={changeSelectedButton}
        />
      </div>
    </div>
  );
};

export default PomodoroSection;
