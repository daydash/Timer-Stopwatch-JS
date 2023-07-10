const stopwatchStart = document.querySelector(".stopwatchStart");
const time = document.querySelector(".time");
const stopwatchBtnElement = document.querySelectorAll(".stopwatchBtn");

const hrElement = document.getElementById("hr");
const minElement = document.getElementById("min");
const secElement = document.getElementById("sec");
const msElement = document.getElementById("ms");

let hr, min, sec, ms, timer;
hr = min = sec = ms = 0;

timer = false;

stopwatchBtnElement.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.name) {
      case "start":
        start();
        break;
      case "stop":
        stop();
        break;
      case "reset":
        reset();
        break;

      default:
        stop();
        break;
    }
  });
});

const start = () => {
  timer = true;
  stopwatch();
  stopwatchStart.disabled = true;
};
const stop = () => {
  timer = false;
  stopwatchStart.disabled = false;
};
const reset = () => {
  timer = false;
  hr = min = sec = ms = 0;
  hrElement.innerText = "00";
  minElement.innerText = "00";
  secElement.innerText = "00";
  msElement.innerText = "00";
  stopwatchStart.disabled = false;
};

const stopwatch = () => {
  if (timer) {
    ms += 1;

    if (ms === 100) {
      sec += 1;
      ms = 0;
    }

    if (sec === 60) {
      min += 1;
      sec = 0;
    }

    if (min === 60) {
      hr += 1;
      min = 0;
      sec = 0;
    }

    let hrShow = hr;
    let secShow = sec;
    let minShow = min;
    let msShow = ms;

    if (hr < 10) {
      hrShow = "0" + hrShow;
    }
    if (sec < 10) {
      secShow = "0" + secShow;
    }
    if (min < 10) {
      minShow = "0" + minShow;
    }
    if (ms < 10) {
      msShow = "0" + msShow;
    }
    hrElement.innerText = hrShow;
    minElement.innerText = minShow;
    secElement.innerText = secShow;
    msElement.innerText = msShow;
    setTimeout(() => {
      stopwatch();
    }, 10);
  }
};

// Timer

const startCountdown = () => {
  console.log(document.getElementById("timerInput").getAttribute("color"));
  const targetDate = new Date("2023-12-31T23:59:59").getTime();
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  const daysElement = document.getElementById("daysTimer");
  const hoursElement = document.getElementById("hoursTimer");
  const minutesElement = document.getElementById("minutesTimer");
  const secondsElement = document.getElementById("secondsTimer");

  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;

  // TODO: Implement the countdown logic to update the timer every second
};

const startTimer = () => {
  setInterval(startCountdown, 1000);
  console.log("yash");
};
