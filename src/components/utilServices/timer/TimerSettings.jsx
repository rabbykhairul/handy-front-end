import React, { useState } from "react";
import {
  getTimerDurationInMinutes,
  saveTimerDurationInMinutes,
  DEFAULT_TIMER_DURATION_IN_MINUTES,
} from "../../../services/TimerService";
import Input from "../../commons/Input";
import FormButton from "../../commons/FormButton";
import "./TimerSettings.css";

const TimerSettings = (props) => {
  const { onEdit } = props;
  const mSecsPerMinute = 60000;

  const [timerDurationInMinutes, setTimerDurationInMinutes] = useState(
    getTimerDurationInMinutes()
  );

  const updateInputField = (e) => {
    setTimerDurationInMinutes(e.currentTarget.value);
  };

  const handleSettingsFormSubmission = (e) => {
    e.preventDefault();

    const newTimerDurationInMinutes =
      timerDurationInMinutes || DEFAULT_TIMER_DURATION_IN_MINUTES;

    saveTimerDurationInMinutes(newTimerDurationInMinutes);
    onEdit(newTimerDurationInMinutes * mSecsPerMinute);
  };

  return (
    <form className="timer-settings" onSubmit={handleSettingsFormSubmission}>
      <Input
        type="number"
        label="Timer duration (in minutes)"
        name={"timerDurationInMinutes"}
        value={timerDurationInMinutes}
        placeholder={DEFAULT_TIMER_DURATION_IN_MINUTES}
        onChange={updateInputField}
      />
      <FormButton label={"save settings"} />
    </form>
  );
};

export default TimerSettings;
