const stopwatch = document.querySelectorAll('.timer-container');
// Выбираем DOM элементы 
const firstElement = stopwatch[0].querySelectorAll('.counter-value')[0];
const secondElement = stopwatch[1].querySelectorAll('.counter-value')[0];
const thirdElement = stopwatch[2].querySelectorAll('.counter-value')[0];
const fourthElement = stopwatch[3].querySelectorAll('.counter-value')[0];

// Вводим первое значение таймера
let time = [160, 1532, 5415, 4833];

// Вызов функции с разными параметрами через каждую секунду
// Сохраняем идетификаторы интервалов созданных функцией "setInterval()" как массив. Интервалы возвращаются в идентификатор, который сохраняется в intervalID, затем добавляется при помощи push() в массив intervalIds;

let intervalIds = [];
for (let i = 0; i < time.length; i++) {
  let intervalId = setInterval(function () {
    updateCounter(time[i], stopwatch[i].querySelectorAll('.counter-value')[0]);
    time[i]--;
    if (time[i] === 0) {
      clearInterval(intervalId);
    }
  }, 1000);
  intervalIds.push(intervalId);
}

// Функция подсчета часов/минут/секунд
function updateCounter(time, element) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor(time / 60) % 60;
  const seconds = Math.floor(time % 60);
  // padstart для добавления нулей
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');
  let formattedTime;
  // Проверка на 0 часов
  if (hours === 0) {
    formattedTime = `${formattedMinutes}:${formattedSeconds}`;
  } else {
    const formattedHours = hours.toString().padStart(2, '0');
    formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
  element.innerHTML = formattedTime;
}