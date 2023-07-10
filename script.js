const stopwatchStart = document.querySelector(".stopwatchStart");
const time = document.querySelector(".time");
const btnElement = document.querySelectorAll(".btn");

const hrElement = document.getElementById("hr");
const minElement = document.getElementById("min");
const secElement = document.getElementById("sec");
const msElement = document.getElementById("ms");

let hr, min, sec, ms, timer;
hr = min = sec = ms = 0;

timer = false;

btnElement.forEach((btn) => {
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
