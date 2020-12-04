import React from "react";
import "./PomodoroStats.css";

const PomodoroStats = () => {
  const renderTodaysUsageInfo = () => {
    return (
      <div>
        <p className="pomodoro-stats-text">/01</p>
        <h3 className="pomodoro-stats-text">Today</h3>
        <p className="pomodoro-stats-text">1 hour 35 minutes</p>
      </div>
    );
  };

  const renderYesterdaysUsageInfo = () => {
    return (
      <div>
        <p className="pomodoro-stats-text">/02</p>
        <h3 className="pomodoro-stats-text">Yesterday</h3>
        <p className="pomodoro-stats-text">1 hour 35 minutes</p>
      </div>
    );
  };

  const renderGrandTotalUsageInfo = () => {
    return (
      <div>
        <p className="pomodoro-stats-text">/03</p>
        <h3 className="pomodoro-stats-text">So far</h3>
        <p className="pomodoro-stats-text">1 hour 35 minutes</p>
      </div>
    );
  };

  return (
    <div className="pomodoro-stats">
      {renderTodaysUsageInfo()}
      {renderYesterdaysUsageInfo()}
      {renderGrandTotalUsageInfo()}
    </div>
  );
};

export default PomodoroStats;
