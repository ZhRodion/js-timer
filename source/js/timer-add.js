// Создание таймера по кнопке 
const addButton = document.querySelector('.all-timer-container__button');
const timerContainer = document.querySelector('.all-timer-container');
const stopwatch = document.querySelector('.timer-container');

addButton.addEventListener('click', function () {
  const stopwatchCopy = stopwatch.cloneNode(true);
  timerContainer.appendChild(stopwatchCopy);
});