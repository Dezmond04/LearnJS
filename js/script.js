'use strict';

const isNamber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const gameBot = function () {
  const number = Math.floor(Math.random() * 100) + 1;
  let count = 10;
  let answer;
  let tryAgain;

  function game() {
    answer = +prompt('Угадай число от 1 до 100');
    
      if (!isNamber(answer)) {
        alert('Введите число!');
        game();
      } else if (count === 0) {
        tryAgain = confirm('Сыграем еще?');
        if (tryAgain === true) {
          gameBot();
        } else {
          alert('Спасибо за игру');
        }
      } else if (answer === 0) {
        alert('Игра окончена');
      } else if (answer > number) {
        alert('Загаданное число меньше, осталось попыток ' + count);
        count--;
        game();
      } else if (answer < number) {
        alert('Загаданное число больше, осталось попыток ' + count);
        count--;
        game();
      } else if (answer === number) {
        alert('Поздравляю, Вы угадали!!!');
      }
   }
  
  game();
};
gameBot();