import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import "./PomodoroClock.css";

const PomodoroClock = (props) => {
  const { milliSeconds, runningStatus, onControlClick } = props;

  let seconds = Math.floor(Number(milliSeconds) / 1000);
  let minutes = Math.floor(seconds / 60);
  seconds = seconds - minutes * 60;

  const renderTimeDisplay = () => {
    const minutesString = `0${minutes}`.slice(-2);
    const secondsString = `0${seconds}`.slice(-2);

    return (
      <div className="time-display">{`${minutesString}:${secondsString}`}</div>
    );
  };

  const renderPlayButton = () => {
    const playIcon = runningStatus ? faPauseCircle : faPlayCircle;

    return (
      <div className="clock-control">
        <FontAwesomeIcon
          icon={playIcon}
          onClick={onControlClick}
          style={{ cursor: "pointer" }}
        />
      </div>
    );
  };

  return (
    <div className="pomodoro-clock">
      {renderTimeDisplay()}
      {renderPlayButton()}
    </div>
  );
};

export default PomodoroClock;
