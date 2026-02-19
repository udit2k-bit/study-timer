let time = 1500; // 25 minutes in seconds
let timerInterval;
let sessions = 0;
let isRunning = false;

function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timer").innerText = minutes + ":" + seconds;
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
            document.getElementById("sessions").innerText = sessions;
            alert("Study Session Complete!");
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
    time = 1500;
    isRunning = false;
    updateDisplay();
}

updateDisplay();
