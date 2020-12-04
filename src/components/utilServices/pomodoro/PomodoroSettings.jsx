import React, { useState } from "react";
import Input from "../../commons/Input";
import FormButton from "../../commons/FormButton";
import "./PomodoroSettings.css";

const PomodoroSettings = (props) => {
  const { pomoSettings } = props;
  const { pomoTimeInMsec, breakTimeInMsec, longBreakTimeInMsec } = pomoSettings;

  // convert timer values from milliseconds to minutes
  const mSecsPerMinutes = 60000;

  // store the converted timer values into state variable
  const [convertedPomoSettings, setConvertedPomoSettings] = useState({
    pomoTimeInMinutes: pomoTimeInMsec / mSecsPerMinutes,
    breakTimeInMinutes: breakTimeInMsec / mSecsPerMinutes,
    longBreakTimeInMinutes: longBreakTimeInMsec / mSecsPerMinutes,
  });

  // update settings data as user edits the form
  const updateInputField = (e) => {
    const inputField = e.currentTarget;
    const newPomoSettings = { ...convertedPomoSettings };
    newPomoSettings[inputField.name] = inputField.value;
    setConvertedPomoSettings(newPomoSettings);
  };

  // handle settings form submission
  const handleSettingsFormSubmission = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  // helpers methods for rendering
  const renderSettingsInputFields = () => {
    const {
      pomoTimeInMinutes,
      breakTimeInMinutes,
      longBreakTimeInMinutes,
    } = convertedPomoSettings;

    return (
      <>
        <Input
          type="number"
          label="Pomodoro time (in minutes)"
          name="pomoTimeInMinutes"
          value={pomoTimeInMinutes}
          onChange={updateInputField}
        />
        <Input
          type="number"
          label="Break time"
          name="breakTimeInMinutes"
          value={breakTimeInMinutes}
          onChange={updateInputField}
        />
        <Input
          type="number"
          label="Long break time"
          name="longBreakTimeInMinutes"
          value={longBreakTimeInMinutes}
          onChange={updateInputField}
        />
      </>
    );
  };

  const renderSettingsSaveButton = () => {
    return <FormButton label="Save settings" />;
  };

  return (
    <form className="pomodoro-settings" onSubmit={handleSettingsFormSubmission}>
      {renderSettingsInputFields()}
      {renderSettingsSaveButton()}
    </form>
  );
};

export default PomodoroSettings;
