import React, { useState } from "react";
import {
  getDefaultPomoSettings,
  savePomoSettings,
} from "../../../services/pomodoroService";
import Input from "../../commons/Input";
import FormButton from "../../commons/FormButton";
import "./PomodoroSettings.css";

const PomodoroSettings = (props) => {
  const { pomoSettings, onEdit } = props;
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
  const defaultPomoSettings = getDefaultPomoSettings();

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

    const newPomoSettingsInMinutes = getUserEditedPomoSettings();
    savePomoSettings(newPomoSettingsInMinutes);

    const newPomoSettingsInMsec = convertUserEditedPomoSettingsToMsec(
      newPomoSettingsInMinutes
    );
    onEdit(newPomoSettingsInMsec);
  };

  const getUserEditedPomoSettings = () => {
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
      pomoTimeInMinutes: pomoTimeInMinutes || defaultPomoTimeInMinutes,
      breakTimeInMinutes: breakTimeInMinutes || defaultBreakTimeInMinutes,
      longBreakTimeInMinutes:
        longBreakTimeInMinutes || defaultLongBreakTimeInMinutes,
    };
  };

  // convert the user edited inputs times back into milliseconds before saving the settings
  const convertUserEditedPomoSettingsToMsec = (editedSettings) => {
    const {
      pomoTimeInMinutes,
      breakTimeInMinutes,
      longBreakTimeInMinutes,
    } = editedSettings;
    return {
      pomoTimeInMsec: pomoTimeInMinutes * mSecsPerMinutes,
      breakTimeInMsec: breakTimeInMinutes * mSecsPerMinutes,
      longBreakTimeInMsec: longBreakTimeInMinutes * mSecsPerMinutes,
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
