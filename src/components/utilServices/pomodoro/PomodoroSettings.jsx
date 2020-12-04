import React from "react";
import Input from "../../commons/Input";
import FormButton from "../../commons/FormButton";
import "./PomodoroSettings.css";

const PomodoroSettings = (props) => {
  const { pomoSettings } = props;
  const { pomoTimeInMsec, breakTimeInMsec, longBreakTimeInMsec } = pomoSettings;
  const mSecsPerMinutes = 60000;

  // Handle settings form submission
  const handleSettingsFormSubmission = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  // Helpers methods for rendering
  const renderSettingsInputFields = () => {
    const pomoTimeInMinutes = pomoTimeInMsec / mSecsPerMinutes;
    const breakTimeInMinutes = breakTimeInMsec / mSecsPerMinutes;
    const longBreakTimeInMinutes = longBreakTimeInMsec / mSecsPerMinutes;

    return (
      <>
        <Input
          type="number"
          label="Pomodoro time (in minutes)"
          value={pomoTimeInMinutes}
          onChange={() => null}
        />
        <Input
          type="number"
          label="Break time"
          value={breakTimeInMinutes}
          onChange={() => null}
        />
        <Input
          type="number"
          label="Long break time"
          value={longBreakTimeInMinutes}
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
