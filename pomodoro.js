let timerInterval;
let timeLeft;
let isPaused = false;
let isStarted = false;

const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');
const timeDisplay = document.getElementById('timeDisplay');

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
  if (!isStarted) {
    isStarted = true;
    timeLeft = 25 * 60; // 25 minutes in seconds
    timerInterval = setInterval(updateTimeDisplay, 1000);
    startButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
  }
}

function pauseTimer() {
  if (isStarted && !isPaused) {
    isPaused = true;
    clearInterval(timerInterval);
    pauseButton.textContent = 'Resume';
  } else if (isStarted && isPaused) {
    isPaused = false;
    timerInterval = setInterval(updateTimeDisplay, 1000);
    pauseButton.textContent = 'Pause';
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  isStarted = false;
  isPaused = false;
  timeDisplay.textContent = '25:00';
  startButton.style.display = 'inline-block';
  pauseButton.style.display = 'none';
}

function updateTimeDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  
  timeDisplay.textContent = `${minutes}:${seconds}`;
  
  if (timeLeft === 0) {
    clearInterval(timerInterval);
    isStarted = false;
    timeDisplay.textContent = '25:00'; // Reset to initial time
    alert('Pomodoro session complete! Take a break.');
    startButton.style.display = 'inline-block';
    pauseButton.style.display = 'none';
  } else {
    timeLeft--;
  }
}


// slider failed attempt
// let currentSlide = 0;
// const slides = document.querySelector('.slides');
// const totalSlides = document.querySelectorAll('.slides img').length;

// function moveSlide(direction) {
//     currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
//     const offset = -currentSlide * 100;
//     slides.style.transform = `translateX(${offset}%)`;
// }

// document.addEventListener('DOMContentLoaded', () => {
//     slides.style.width = `${totalSlides * 100}%`;
//     document.querySelectorAll('.slides img').forEach(img => {
//         img.style.width = `${100 / totalSlides}%`;
//     });
// });