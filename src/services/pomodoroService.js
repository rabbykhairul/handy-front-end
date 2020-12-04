const POMO_SETTINGS_LOCAL_KEY = "pomoSettings";
const USAGE_STATS_LOCAL_KEY = "usageStats";
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

const getStoredUsageStats = () =>
  JSON.parse(localStorage.getItem(USAGE_STATS_LOCAL_KEY));

const initializeUsageStats = () => {
  const storedUsageStats = JSON.parse(
    localStorage.getItem(USAGE_STATS_LOCAL_KEY)
  );
  if (storedUsageStats) return;

  const newUsageStats = {
    todaysUsage: { date: new Date(), total: 0 },
    yesterdaysUsage: { date: new Date(), total: 0 },
    grandTotalUsage: { total: 0 },
  };

  localStorage.setItem(USAGE_STATS_LOCAL_KEY, JSON.stringify(newUsageStats));
};

initializeUsageStats();

const oneDayHasPassedInSameMonth = (oldDateString) => {
  const oldDate = new Date(oldDateString);
  const currentDate = new Date();

  return (
    currentDate.getDate() - oldDate.getDate() === 1 &&
    currentDate.getMonth() === oldDate.getMonth() &&
    currentDate.getFullYear() === oldDate.getFullYear()
  );
};

const oneDayHasPassedBetweenTwoConsecutiveMonths = (oldDateString) => {
  const oldDate = new Date(oldDateString);
  const currentDate = new Date();

  return (
    ((Math.abs(currentDate.getMonth() - oldDate.getMonth()) === 1 &&
      currentDate.getFullYear() === oldDate.getFullYear()) ||
      (Math.abs(currentDate.getMonth() - oldDate.getMonth()) === 11 &&
        Math.abs(currentDate.getFullYear() - oldDate.getFullYear()) === 1)) &&
    Math.abs(currentDate.getDay() - oldDate.getDay()) === 1
  );
};

const moreThanOneDayHasPassedInTheSameMonth = (oldDateString) => {
  const oldDate = new Date(oldDateString);
  const currentDate = new Date();

  return (
    Math.abs(currentDate.getDate() - oldDate.getDate()) >= 2 &&
    currentDate.getMonth() === oldDate.getMonth() &&
    currentDate.getFullYear() === oldDate.getFullYear()
  );
};

const moreThanOneDayHasPassedBetweenTwoConsecutiveMonths = (oldDateString) => {
  const oldDate = new Date(oldDateString);
  const currentDate = new Date();

  return (
    ((Math.abs(currentDate.getMonth() - oldDate.getMonth()) === 1 &&
      currentDate.getFullYear() === oldDate.getFullYear()) ||
      (Math.abs(currentDate.getMonth() - oldDate.getMonth()) === 11 &&
        Math.abs(currentDate.getFullYear() - oldDate.getFullYear()) === 1)) &&
    Math.abs(currentDate.getDay() - oldDate.getDay()) >= 2
  );
};

const moreThanOneMonthHasPassed = (oldDateString) => {
  const oldDate = new Date(oldDateString);
  const currentDate = new Date();

  return Math.abs(currentDate.getMonth() - oldDate.getMonth()) > 1;
};

const todayHasPassed = (todaysDateString) => {
  const todaysDate = new Date(todaysDateString);
  const currentDate = new Date();

  return !(
    todaysDate.getDate() === currentDate.getDate() &&
    todaysDate.getMonth() === currentDate.getMonth() &&
    todaysDate.getFullYear() === currentDate.getFullYear()
  );
};

const todayIsNowYesterday = (todaysDateString) => {
  return (
    oneDayHasPassedInSameMonth(todaysDateString) ||
    oneDayHasPassedBetweenTwoConsecutiveMonths(todaysDateString)
  );
};

const yesterdayHasExpired = (yesterdaysDateString) => {
  const yesterdaysDate = new Date(yesterdaysDateString);
  const currentDate = new Date();

  return (
    moreThanOneDayHasPassedInTheSameMonth(yesterdaysDateString) ||
    moreThanOneDayHasPassedBetweenTwoConsecutiveMonths(yesterdaysDateString) ||
    moreThanOneMonthHasPassed(yesterdaysDateString)
  );
};

const refreshUsageStats = () => {
  const { todaysUsage, yesterdaysUsage } = getStoredUsageStats();
  const updatedUsageStats = { ...getStoredUsageStats() };
  const currentDate = new Date();

  if (todayHasPassed(todaysUsage.date))
    updatedUsageStats.todaysUsage = { date: currentDate, total: 0 };

  if (yesterdayHasExpired(yesterdaysUsage.date))
    updatedUsageStats.yesterdaysUsage = { ...yesterdaysUsage, total: 0 };

  if (todayIsNowYesterday(todaysUsage.date))
    updatedUsageStats.yesterdaysUsage = { ...todaysUsage };

  return updatedUsageStats;
};

const addToUsageStats = (elapsedTimeInMsec) => {
  const usageStats = refreshUsageStats();

  usageStats.todaysUsage.total += elapsedTimeInMsec;
  usageStats.grandTotalUsage.total += elapsedTimeInMsec;

  localStorage.setItem(USAGE_STATS_LOCAL_KEY, JSON.stringify(usageStats));
};

const getUsageStats = () => {
  const usageStats = { ...getStoredUsageStats() };
  return {
    today: usageStats.todaysUsage.total,
    yesterday: usageStats.yesterdaysUsage.total,
    grandTotal: usageStats.grandTotalUsage.total,
  };
};

const getHoursString = (hours) => {
  const hourStr = `${hours}`;
  if (hourStr.length >= 2) return `${hourStr} hours`;
  if (hourStr === "0") return "";
  if (hourStr === "1") return `0${hourStr} hour`;
  return `0${hourStr} hours`;
};

const getMinutesString = (minutes) => {
  const minuteStr = `${minutes}`;
  if (minuteStr.length == 2) return `${minuteStr} minutes`;
  if (minuteStr === "0") return "";
  if (minuteStr === "1") return `0${minuteStr} minute`;
  return `0${minuteStr} minutes`;
};

const getStringFormat = (milliseconds) => {
  const totalMinutes = Math.floor(milliseconds / mSecsPerMinutes);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const hourStr = getHoursString(hours);
  const minuteStr = getMinutesString(minutes);

  const strFormat = `${hourStr} ${
    hourStr && minuteStr ? "and" : ""
  } ${minuteStr}`;

  return strFormat.trim().length === 0 ? "......................." : strFormat;
};

const getFormattedUsageStats = () => {
  const usageStats = getUsageStats();
  return {
    today: getStringFormat(usageStats.today),
    yesterday: getStringFormat(usageStats.yesterday),
    grandTotal: getStringFormat(usageStats.grandTotal),
  };
};

export {
  getDefaultPomoSettings,
  savePomoSettings,
  getSavedPomoSettings,
  getPomoSettingsInMSec,
  addToUsageStats,
  getUsageStats,
  getFormattedUsageStats,
};
