const totalTimeInSeconds = 40 * 60;
let currentTimeInSeconds = 0;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}

function updateTimer() {
  const timerDisplay = document.getElementById('timer');
  timerDisplay.textContent = formatTime(currentTimeInSeconds);
  if (currentTimeInSeconds > 0) {
    currentTimeInSeconds--;
    setTimeout(updateTimer, 1000);
  } else if (currentTimeInSeconds == 0){
    timerDisplay.classList.add('over');
  }
}

function startTimer() {
  currentTimeInSeconds = sessionStorage.getItem('timerValue') || totalTimeInSeconds;
  updateTimer();
}

function saveTimer() {
  sessionStorage.setItem('timerValue', currentTimeInSeconds);
}

window.addEventListener('load', startTimer);
window.addEventListener('beforeunload', saveTimer);