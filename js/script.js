'use scrict';

let title = prompt('Как называется ваш проект'),
    screens = prompt('Какие типы экранов нужно разработать?'),
    screenPrice = +prompt('Сколько будет стоить данная работа?'),
    adaptive = confirm('Нужен ли адаптив на сайте?'),
    service1 = prompt('Какой дополнительный тип услуги нужен?'),
    servicePrice1 = +prompt('Сколько это будет стоить?'),
    service2 = prompt('Какой дополнительный тип услуги нужен?'),
    servicePrice2 = +prompt('Сколько это будет стоить?'),
      
    rollback = 15,
    discount,
    allServicePrices,
    fullPrice,
    servicePercentPrice,
      
    rollbackPrice = fullPrice * (rollback / 100);
    
    
const showTypeof = function (variable) {
  console.log(variable, typeof variable);
};

const getTitle = function (str) { 
  str = str.trim();
  return str[0].toUpperCase() + str.substring(1).toLowerCase();
}

const getAllServicePrices = function (service1, service2) {
  return service1 + service2;
};

function getFullPrice(price1, price2) {
  return price1 + price2;
}

const getServicePercentPrices = function (price1, price2) {
  return price1 - (price1 * (price2 / 100));
};

const getRollbackMessage = function (price) {
  switch (true) {
    case price >= 30000:
      discount = 10;
      return 'Даем скидку 10%';      
    case price >= 15000 && price < 30000:
      discount = 5;
      return 'Даем скидку 5%';      
    case price < 15000 || price == 0:
      discount = 0;
      return 'Скидка не предусмотрена';      
    default:
      return 'Что то пошло не так';
  }
};


allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeof(title);
showTypeof(fullPrice);
showTypeof(adaptive);

console.log(getTitle(title));
console.log(getRollbackMessage(fullPrice));
console.log(screens.length);
console.log(screens.toLowerCase().split(', '));
console.log('Стоимость разработки экранов ' + screenPrice + ' долларов');
console.log('Стоимость дополнительных услуг ' + allServicePrices + ' долларов');
console.log('Стоимость разработки сайта ' + fullPrice + ' долларов');
console.log('Итоговая цена за учетом вычета посреднику' + ' ' + servicePercentPrice);