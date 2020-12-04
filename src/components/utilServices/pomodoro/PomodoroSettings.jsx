import React from "react";
import Input from "../../commons/Input";
import FormButton from "../../commons/FormButton";
import "./PomodoroSettings.css";

const PomodoroSettings = () => {
  // Handle settings form submission
  const handleSettingsFormSubmission = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  // Helpers methods for rendering
  const renderSettingsInputFields = () => {
    return (
      <>
        <Input
          type="number"
          label="Pomodoro time (in minutes)"
          value="15"
          onChange={() => null}
        />
        <Input
          type="number"
          label="Break time"
          value="5"
          onChange={() => null}
        />
        <Input
          type="number"
          label="Long break time"
          value="10"
          onChange={() => null}
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
