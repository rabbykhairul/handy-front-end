import React, { useState } from "react";
import Input from "../../commons/Input";
import FormButton from "../../commons/FormButton";
import "./TimerSettings.css";

const TimerSettings = (props) => {
  const { timerDurationInMsec, onEdit } = props;
  const mSecsPerMinute = 60000;
  const DEFAULT_DURATION = 35;
  const [timerDurationInMinutes, setTimerDurationInMinutes] = useState(
    timerDurationInMsec / mSecsPerMinute
  );

  const updateInputField = (e) => {
    setTimerDurationInMinutes(e.currentTarget.value);
  };

  const handleSettingsFormSubmission = (e) => {
    e.preventDefault();

    const newTimerDurationInMinutes =
      timerDurationInMinutes || DEFAULT_DURATION;

    onEdit(newTimerDurationInMinutes * mSecsPerMinute);
  };

  return (
    <form className="timer-settings" onSubmit={handleSettingsFormSubmission}>
      <Input
        type="number"
        label="Timer duration (in minutes)"
        name={"timerDurationInMinutes"}
        value={timerDurationInMinutes}
        placeholder={DEFAULT_DURATION}
        onChange={updateInputField}
      />
      <FormButton label={"save settings"} />
    </form>
  );
};

export default TimerSettings;
