// default pomodoro timer settings in minutes
const defaultPomoSettings = {
  defaultPomoTimeInMinutes: 25,
  defaultBreakTimeInMinutes: 5,
  defaultLongBreakTimeInMinutes: 10,
};

const getDefaultPomoSettings = () => ({ ...defaultPomoSettings });

// returns the current pomodoro timer settings from the local storage in milliseconds
// if settings isn't saved in local storage return default settings in milliseconds
const getPomoSettingsInMSec = () => {};

export { getDefaultPomoSettings, getPomoSettingsInMSec };
