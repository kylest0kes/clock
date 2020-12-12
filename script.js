const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const hourDegrees = ((hour / 12) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
};

setInterval(setDate, 1000);