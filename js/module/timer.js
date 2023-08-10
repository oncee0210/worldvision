const stageTimeInSeconds = 10 * 60;
let timerInterval;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}

function updateTimer(timerDisplay, remainingTimeInSeconds) {
  timerDisplay.textContent = formatTime(remainingTimeInSeconds);
  if (remainingTimeInSeconds > 0) {
    remainingTimeInSeconds--;
  } else {
    clearInterval(timerInterval);
    timerDisplay.classList.add('over');
  }
}

function startTimer() {
  const timerDisplay = document.getElementById('timer');
  let remainingTimeInSeconds = stageTimeInSeconds;
  timerInterval = setInterval(() => {
    updateTimer(timerDisplay, remainingTimeInSeconds);
    remainingTimeInSeconds--;
  }, 1000);
}

window.addEventListener('load', startTimer);