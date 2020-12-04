const POMO_SETTINGS_LOCAL_KEY = "pomoSettings";
const mSecsPerMinutes = 60000;

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
const getPomoSettingsInMSec = () => {
  const {
    pomoTimeInMinutes,
    breakTimeInMinutes,
    longBreakTimeInMinutes,
  } = getSavedPomoSettings();

  return {
    pomoTimeInMsec: pomoTimeInMinutes * mSecsPerMinutes,
    breakTimeInMsec: breakTimeInMinutes * mSecsPerMinutes,
    longBreakTimeInMsec: longBreakTimeInMinutes * mSecsPerMinutes,
  };
};

export {
  getDefaultPomoSettings,
  savePomoSettings,
  getSavedPomoSettings,
  getPomoSettingsInMSec,
};
