'use scrict';

let title = 'Data types',
    screens = 'Простые, Сложные, Интерактивные',
    screenPrice = 200,
    rollback = 15,
    fullPrice = 2500,
    adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log('Стоимость разработки экранов ' + screenPrice + ' долларов');

console.log('Стоимость разработки сайта ' + fullPrice + ' долларов');

console.log(screens.toLowerCase().split(', '));

console.log(fullPrice * (rollback/100));







