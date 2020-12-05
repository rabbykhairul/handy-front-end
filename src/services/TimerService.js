const TIMER_DURATION_KEY = "timerDuration";
const DEFAULT_TIMER_DURATION_IN_MINUTES = 35;
const mSecsPerMinute = 60000;

const getTimerDurationInMinutes = () => {
  const timerDuration = JSON.parse(localStorage.getItem(TIMER_DURATION_KEY));
  return timerDuration ? timerDuration : DEFAULT_TIMER_DURATION_IN_MINUTES;
};

const getTimerDurationInMsec = () => {
  return getTimerDurationInMinutes() * mSecsPerMinute;
};

const saveTimerDurationInMinutes = (newTimerDuration) => {
  localStorage.setItem(TIMER_DURATION_KEY, newTimerDuration);
};

export {
  getTimerDurationInMinutes,
  getTimerDurationInMsec,
  saveTimerDurationInMinutes,
  DEFAULT_TIMER_DURATION_IN_MINUTES,
};
