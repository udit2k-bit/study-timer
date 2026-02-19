let time = 1500;
let totalTime = 1500;
let timerInterval;
let sessions = localStorage.getItem("sessions") || 0;
let isRunning = false;

document.getElementById("sessions").innerText = sessions;

function updateDisplay() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("timer").innerText = minutes + ":" + seconds;

  let progress = (time / totalTime) * 565;
  document.getElementById("progressRing").style.strokeDashoffset = 565 - progress;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;

  timerInterval = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      sessions++;
      localStorage.setItem("sessions", sessions);
      document.getElementById("sessions").innerText = sessions;
      alert("Session Complete!");
      isRunning = false;
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  time = totalTime;
  isRunning = false;
  updateDisplay();
}

function setCustomTime() {
  let minutes = document.getElementById("customMinutes").value;
  if (minutes > 0) {
    totalTime = minutes * 60;
    time = totalTime;
    updateDisplay();
  }
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

updateDisplay();
