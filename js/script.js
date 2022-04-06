'use strict';

const book = document.querySelectorAll('.book');
const body = document.querySelector('body');
const titleBook = document.querySelectorAll('h2 > a');

const adv = document.querySelector('.adv');

const book2 = book[0].querySelectorAll('li');
const book5 = book[5].querySelectorAll('li');
const book6 = book[2].querySelectorAll('li');


const newLi = document.createElement('li');



book[0].before(book[1]);
book[0].after(book[4]);
book[4].after(book[3]);
book[3].after(book[5]);

body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

titleBook[4].innerHTML = 'Книга 3. this и <strong>Прототипы</strong> Объектов';

adv.remove();


book2[8].after(book2[4]);
book2[4].after(book2[5]);
book2[5].after(book2[7]);
book2[9].after(book2[2]);

book5[1].after(book5[9]);
book5[9].after(book5[3]);
book5[3].after(book5[4]);
book5[7].after(book5[5]);

newLi.textContent = 'Глава 8: За пределами ES6';
book6[8].after(newLi);


console.log(book6);


