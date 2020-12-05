import React, { useEffect, useState } from "react";
import { getTimerDurationInMsec } from "../../../services/TimerService";
import TimerNavBar from "./TimerNavBar";
import TimerClock from "./TimerClock";
import TimerSettings from "./TimerSettings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faCog } from "@fortawesome/free-solid-svg-icons";
import notificationSound from "../../../mediaFiles/goes-without-saying-608.mp3";
import "./TimerSection.css";

const TimerSection = () => {
  const timerButtons = [{ label: "Timer", value: "timer" }];

  const infoButtons = [
    { label: <FontAwesomeIcon icon={faUndo} />, value: "reset" },
    { label: <FontAwesomeIcon icon={faCog} />, value: "settings" },
  ];

  // state variables
  const [selectedButton, setSelectedButton] = useState(timerButtons[0]);
  const [timerDurationInMsec, setTimerDurationInMsec] = useState(
    getTimerDurationInMsec()
  );
  const [timerValueInMsec, setTimerValueInMsec] = useState(timerDurationInMsec);
  const [runningStatus, setRunningStatus] = useState(false);
  const [prevTime, setPrevTime] = useState(Date.now());
  const [audio] = useState(new Audio(notificationSound));

  // run timer
  useEffect(() => {
    let timer;
    if (runningStatus && timerValueInMsec > 0)
      timer = setTimeout(() => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - prevTime;
        setTimerValueInMsec(timerValueInMsec - elapsedTime);
        setPrevTime(currentTime);
      }, 250);

    if (resetNeeded()) resetTimer();

    return () => {
      clearTimeout(timer);
    };
  });

  // reset timer
  const resetTimer = () => {
    audio.play();
    setRunningStatus(false);
    setTimerValueInMsec(timerDurationInMsec);
  };

  const resetNeeded = () =>
    timerValueInMsec <= 0 && selectedButton.value === "timer";

  // event handlers
  const changeSelectedButton = (button) => {
    const newSelectedButton =
      button.value === "reset" ? timerButtons[0] : button;
    setSelectedButton(newSelectedButton);
    setRunningStatus(false);
    setTimerValueInMsec(getNewTimerValue(button));
  };

  const toggleRunningStatus = () => {
    if (!runningStatus) setPrevTime(Date.now());
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
