const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

const digital = document.getElementById('d-c');
const analog = document.getElementById('a-c');

let clockTextToggle = document.getElementById('clock-mode');
let modeTextToggle = document.getElementById('l/d-mode');

// CLOCK FUNCTIONALITY
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
document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    swapModeText();
});

document.querySelector('.clock-toggle').addEventListener('click', () => {
    digital.classList.toggle('hide');
    analog.classList.toggle('hide');
    swapClockText();
});

// SWAP CLOCK TOGGLE TEXT
function swapClockText() {
    if (clockTextToggle.innerHTML === "Digital") {
        clockTextToggle.innerHTML = "Analog";
    } else {
    clockTextToggle.innerHTML = "Digital";
    }
}

function swapModeText() {
    if (modeTextToggle.innerHTML === "Light Mode") {
        modeTextToggle.innerHTML = "Dark Mode";
    } else {
    modeTextToggle.innerHTML = "Light Mode";
    }
}