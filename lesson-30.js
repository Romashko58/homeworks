const timer = document.getElementById('timer');
const timerValue = document.getElementById('sec');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
let timerId = null;
let timerSec = 0;

startBtn.addEventListener('click', () => {
   if (timerId === null) {
      timerId = setInterval(() => {
         timerSec += 1;
         timerValue.textContent = `${String(timerSec).padStart(2, '0')} sec`;
      }, 1000);
   }
});

pauseBtn.addEventListener('click', () => {
   clearInterval(timerId);
   timerId = null;
})