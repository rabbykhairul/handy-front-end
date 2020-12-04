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

  // default pomodoro settings
  const defaultPomoSettings = {
    defaultPomoTimeInMinutes: 25,
    defaultBreakTimeInMinutes: 5,
    defaultLongBreakTimeInMinutes: 10,
  };

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
    const newPomoSettingsInMinutes = convertUserEditedPomoSettingsToMinutes();
    console.log(newPomoSettingsInMinutes);
    console.log("Submitted");
  };

  // convert the user edited inputs times back into milliseconds before saving the settings
  const convertUserEditedPomoSettingsToMinutes = () => {
    const {
      pomoTimeInMinutes,
      breakTimeInMinutes,
      longBreakTimeInMinutes,
    } = convertedPomoSettings;

    const {
      defaultPomoTimeInMinutes,
      defaultBreakTimeInMinutes,
      defaultLongBreakTimeInMinutes,
    } = defaultPomoSettings;

    return {
      pomoTimeInMsec:
        (pomoTimeInMinutes || defaultPomoTimeInMinutes) * mSecsPerMinutes,
      breakTimeInMsec:
        (breakTimeInMinutes || defaultBreakTimeInMinutes) * mSecsPerMinutes,
      longBreakTimeInMsec:
        (longBreakTimeInMinutes || defaultLongBreakTimeInMinutes) *
        mSecsPerMinutes,
    };
  };

  // helpers methods for rendering
  const renderSettingsInputFields = () => {
    const {
      pomoTimeInMinutes,
      breakTimeInMinutes,
      longBreakTimeInMinutes,
    } = convertedPomoSettings;

    const {
      defaultPomoTimeInMinutes,
      defaultBreakTimeInMinutes,
      defaultLongBreakTimeInMinutes,
    } = defaultPomoSettings;

    return (
      <>
        <Input
          type="number"
          label="Pomodoro time (in minutes)"
          name="pomoTimeInMinutes"
          value={pomoTimeInMinutes}
          placeholder={defaultPomoTimeInMinutes}
          onChange={updateInputField}
        />
        <Input
          type="number"
          label="Break time"
          name="breakTimeInMinutes"
          value={breakTimeInMinutes}
          placeholder={defaultBreakTimeInMinutes}
          onChange={updateInputField}
        />
        <Input
          type="number"
          label="Long break time"
          name="longBreakTimeInMinutes"
          value={longBreakTimeInMinutes}
          placeholder={defaultLongBreakTimeInMinutes}
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
