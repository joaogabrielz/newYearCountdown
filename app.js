const secContainer = document.querySelector('#seconds');
const minContainer = document.querySelector('#minutes');
const hoursContainer = document.querySelector('#hours');
const daysContainer = document.querySelector('#days');
const nextYearContainer = document.querySelector('#year');
const spinLoading = document.querySelector('#loading');
const countDownContainer = document.querySelector('#countdown');

const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

nextYearContainer.textContent = nextYear;

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit;

const insertCountDownValues = ({days, hours, minutes, seconds}) => {
    secContainer.textContent = getTimeUnit(seconds);
    minContainer.textContent = getTimeUnit(minutes);
    hoursContainer.textContent = getTimeUnit(hours);
    daysContainer.textContent = getTimeUnit(days);
}

const updateCountdown = () => {
    const currentTime = new Date();
    const difference = newYearTime - currentTime;
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60 ) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    insertCountDownValues({days, hours, minutes, seconds});
}

const handleCountdownDisplay = () => {
    spinLoading.remove();
    countDownContainer.style.display = 'flex';
}
setTimeout(handleCountdownDisplay, 1000);

setInterval(updateCountdown, 1000);