const timer = (id, deadline) => {
  const addZero = value => {
    if (value < 10) {
      return '0' + value;
    }
    return value;
  };

  const getTimeRemaining = endtime => {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      zero = '00',
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / 1000 / 60 / 60) % 24),
      days = Math.floor(t / (1000 * 60 * 60) / 24);

    if (t <= 0) {
      return {
        total: zero,
        days: zero,
        hours: zero,
        minutes: zero,
        seconds: zero,
      };
    }

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };
  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector),
      days = document.querySelector('#days'),
      hours = document.querySelector('#hours'),
      minutes = document.querySelector('#minutes'),
      seconds = document.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.textContent = addZero(t.days);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  };
  setClock(id, deadline);
};

export default timer;
