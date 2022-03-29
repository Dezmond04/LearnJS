'use scrict';

let title = 'Привет';

const sendMessage = function (e) {
  if (e === String(e)) {
    if (e.length <= 30) {
      e = e.trim();
      return e[0].toUpperCase() + e.substring(1).toLowerCase();
    } else {
      e = e.trim();
      return e[0].toUpperCase() + e.substring(1, 30).toLowerCase() + '...';
    }
  } else {
    alert('Переменая не является текстом');
  }
};

console.log(sendMessage(title)); 