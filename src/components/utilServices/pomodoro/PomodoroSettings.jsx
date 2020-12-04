import React, { useState } from "react";
import {
  getDefaultPomoSettings,
  getSavedPomoSettings,
  savePomoSettings,
} from "../../../services/pomodoroService";
import Input from "../../commons/Input";
import FormButton from "../../commons/FormButton";
import "./PomodoroSettings.css";

const PomodoroSettings = (props) => {
  const { onEdit } = props;
  const mSecsPerMinutes = 60000;

  const [pomoSettings, setPomoSettings] = useState(getSavedPomoSettings());

  // default pomodoro settings
  const defaultPomoSettings = getDefaultPomoSettings();

  // update settings data as user edits the form
  const updateInputField = (e) => {
    const inputField = e.currentTarget;
    const newPomoSettings = { ...pomoSettings };
    newPomoSettings[inputField.name] = inputField.value;
    setPomoSettings(newPomoSettings);
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
    } = pomoSettings;

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
    } = pomoSettings;

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
