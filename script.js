// CLOCK FUNCTIONALITY
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setAnalogTime() {
    let now = new Date();
    
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    let hourDegrees = ((hour / 12) * 360) + 90;
    let minutesDegrees = ((minutes / 60) * 360) + 90;
    let secondsDegrees = ((seconds / 60) * 360) + 90;
    
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
};

setInterval(setAnalogTime, 1000);

function setDigitalTime() {
    let now = new Date();
    
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let dayOrNight = "AM";

    if(hour == 0) {
        hour = 12;
    }
    if(hour > 12) {
        hour = hour - 12;
        dayOrNight = "PM";
    }

    hour = (hour < 10)? "0" + hour : hour;
    minutes = (minutes < 10)? "0" + minutes : minutes;
    seconds = (seconds < 10)? "0" + seconds : seconds;

    let time = hour + ":" + minutes + ":" + seconds + " " + dayOrNight;

    document.getElementById("d-c").innerText = time;
    document.getElementById("d-c").textContent = time;

    setTimeout(setDigitalTime, 1000);
}

setDigitalTime();

// TOGGLE FUNCTIONALITY
const analogClock = document.querySelector('analog-clock');
const digitalClock = document.querySelector('digital-clock');

document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

document.querySelector('.clock-toggle').addEventListener('click', () => {
    document.getElementById('d-c').classList.toggle('hide');
    document.getElementById('a-c').classList.toggle('hide');
});

