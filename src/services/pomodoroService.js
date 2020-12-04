const POMO_SETTINGS_LOCAL_KEY = "pomoSettings";

// default pomodoro timer settings in minutes
const defaultPomoSettings = {
  defaultPomoTimeInMinutes: 25,
  defaultBreakTimeInMinutes: 5,
  defaultLongBreakTimeInMinutes: 10,
};

const getDefaultPomoSettings = () => ({ ...defaultPomoSettings });

const savePomoSettings = (editedPomoSettings) => {
  localStorage.setItem(
    POMO_SETTINGS_LOCAL_KEY,
    JSON.stringify(editedPomoSettings)
  );
};

const getSavedPomoSettings = () => {
  const pomoSettings = JSON.parse(
    localStorage.getItem(POMO_SETTINGS_LOCAL_KEY)
  );

  if (pomoSettings) return pomoSettings;

  const {
    defaultPomoTimeInMinutes,
    defaultBreakTimeInMinutes,
    defaultLongBreakTimeInMinutes,
  } = getDefaultPomoSettings();

  return {
    pomoTimeInMinutes: defaultPomoTimeInMinutes,
    breakTimeInMinutes: defaultBreakTimeInMinutes,
    longBreakTimeInMinutes: defaultLongBreakTimeInMinutes,
  };
};

// returns the current pomodoro timer settings from the local storage in milliseconds
// if settings isn't saved in local storage return default settings in milliseconds
const getPomoSettingsInMSec = () => {};

export { getDefaultPomoSettings, savePomoSettings, getPomoSettingsInMSec };
