import React, { useEffect, useState } from "react";
import {
  addToUsageStats,
  getPomoSettingsInMSec,
} from "../../../services/pomodoroService";
import PomodoroNavBar from "./PomodoroNavBar";
import PomodoroClock from "./PomodoroClock";
import PomodoroStats from "./PomodoroStats";
import PomodoroSettings from "./PomodoroSettings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faCog } from "@fortawesome/free-solid-svg-icons";
import notificationSound from "../../../mediaFiles/goes-without-saying-608.mp3";
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

  // component state variables
  const [selectedButton, setSelectedButton] = useState(pomoButtons[0]);
  const [pomoSettings, setPomoSettings] = useState(getPomoSettingsInMSec());
  const [timerValueInMSec, setTimerValueInMSec] = useState(
    pomoSettings.pomoTimeInMsec
  );
  const [runningStatus, setRunningStatus] = useState(false);
  const [prevTime, setPrevTime] = useState(Date.now());
  const [audio] = useState(new Audio(notificationSound));

  // run timer
  useEffect(() => {
    let timer;
    if (runningStatus && timerValueInMSec > 0)
      timer = setTimeout(() => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - prevTime;
        setTimerValueInMSec(timerValueInMSec - elapsedTime);
        setPrevTime(currentTime);
        if (pomodoroRunning()) addToUsageStats(elapsedTime);
      }, 250);

    if (resetNeeded()) {
      resetTimer();
    }

    return () => clearTimeout(timer);
  });

  const pomodoroRunning = () => selectedButton.value === "pomodoro";

  // reset timer to pomodoro's default value once timer reaches zero(0)
  const resetTimer = () => {
    audio.play();
    setRunningStatus(false);
    setTimerValueInMSec(pomoSettings.pomoTimeInMsec);
    setSelectedButton(pomoButtons[0]);
  };

  const resetNeeded = () => {
    return (
      timerValueInMSec <= 0 &&
      selectedButton.value !== "stats" &&
      selectedButton.value !== "settings"
    );
  };

  // event handlers
  const changeSelectedButton = (button) => {
    setRunningStatus(false);
    setTimerValueInMSec(getNewTimerValue(button));
    setSelectedButton(button);
  };

  const toggleRunningStatus = () => {
    if (!runningStatus) setPrevTime(Date.now());
    setRunningStatus(!runningStatus);
  };

  const updatePomoSettings = (newPomoSettings) => {
    setPomoSettings(newPomoSettings);
    setTimerValueInMSec(newPomoSettings.pomoTimeInMsec);
    setSelectedButton(pomoButtons[0]);
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

  const switchedToSettingsOrStatsButton = () => {
    return (
      selectedButton.value === "settings" || selectedButton.value === "stats"
    );
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
    if (switchedToSettingsOrStatsButton()) return null;

    return (
      <PomodoroClock
        milliSeconds={timerValueInMSec}
        runningStatus={runningStatus}
        onControlClick={toggleRunningStatus}
      />
    );
  };

  const renderPomodoroStats = () => {
    if (selectedButton.value === "stats") return <PomodoroStats />;
    return null;
  };

  const renderPomodoroSettings = () => {
    if (selectedButton.value === "settings")
      return <PomodoroSettings onEdit={updatePomoSettings} />;
    return null;
  };

  return (
    <div className="service-section pomodoro-section">
      <div className="card-style-content-area">
        {renderPomodoroNavBar()}
        {renderPomodoroClock()}
        {renderPomodoroStats()}
        {renderPomodoroSettings()}
      </div>
    </div>
  );
};

export default PomodoroSection;
