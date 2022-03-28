'use scrict';

let title = prompt('Как называется ваш проект'),
    screens = prompt('Какие типы экранов нужно разработать?', 'Сложные'),
    screenPrice = +prompt('Сколько будет стоить данная работа?'),
      
    rollback = 15,
    discount,
      
    adaptive = confirm('Нужен ли адаптив на сайте?'),
    service1 = prompt('Какой дополнительный тип услуги нужен?'),
    servicePrice1 = +prompt('Сколько это будет стоить?'),
    service2 = prompt('Какой дополнительный тип услуги нужен?'),
    servicePrice2 = +prompt('Сколько это будет стоить?'),
    fullPrice = screenPrice + servicePrice1 + servicePrice2,
    rollbackPrice = fullPrice * (rollback / 100),
    servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));
    
switch (true) {
  case fullPrice >= 30000:
    discount = 10;
    console.log('Даем скидку 10%');
    break;
  case fullPrice >= 15000 && fullPrice < 30000:
    discount = 5;
    console.log('Даем скидку 5%');
    break;
  case fullPrice < 15000 || fullPrice == 0:
    discount = 0;
    console.log('Скидка не предусмотрена');
    break;
  default:
    console.log('Что то пошло не так');
}
    

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log('Стоимость разработки экранов ' + screenPrice + ' долларов');
console.log('Стоимость разработки сайта ' + fullPrice + ' долларов');

console.log(screens.toLowerCase().split(', '));


console.log('Итоговая скидка' + ' ' + (fullPrice * (discount / 100)));
console.log('Итоговая цена посреднику' + ' ' + rollbackPrice);
console.log('Итоговая цена за учетом вычета посреднику' + ' ' + servicePercentPrice);
console.log('Итоговая цена за учетом вычета посреднику и с учетом скидки' + ' ' + (servicePercentPrice - (fullPrice * (discount / 100))));







