let timer;
let isRunning = false;
let milliseconds = 0,
  seconds = 0,
  minutes = 0,
  hours = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStopButton").textContent = "Start";
  } else {
    timer = setInterval(updateDisplay, 10); 
    document.getElementById("startStopButton").textContent = "Stop";
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  document.getElementById("startStopButton").textContent = "Start";

  location.reload();
}

function updateDisplay() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  const display = document.getElementById("display");
  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(
    seconds
  )}.${padMilliseconds(milliseconds)}`;
}

function pad(value) {
  return value < 10 ? "0" + value : value;
}

function padMilliseconds(value) {
  return value < 100 ? (value < 10 ? "00" + value : "0" + value) : value;
}
