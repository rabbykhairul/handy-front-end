import React from "react";
import "./PomodoroClock.css";

const PomodoroClock = (props) => {
  const { milliSeconds } = props;

  let seconds = Math.floor(Number(milliSeconds) / 1000);
  let minutes = Math.floor(seconds / 60);
  seconds = seconds - minutes * 60;

  const minutesString = `0${minutes}`.slice(-2);
  const secondsString = `0${seconds}`.slice(-2);

  return (
    <div className="pomodoro-clock">{`${minutesString}:${secondsString}`}</div>
  );
};

export default PomodoroClock;
