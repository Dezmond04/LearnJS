'use scrict';

let title,
    screens,
    screenPrice,
    adaptive,
        
    rollback = 15,
    
    discount,
    allServicePrices,
    fullPrice,
    service1,
    service2,
    servicePercentPrice,
        
    rollbackPrice = fullPrice * (rollback / 100);
    
const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num) && !(/\s/g.test(num));
};
    
const asking = function () {
  title = prompt('Как называется ваш проект', 'Калькулятор верстки');
  screens = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные');
  
  do {
    screenPrice = prompt('Сколько будет стоить данная работа?');
  } while (!isNumber(screenPrice));
  

  adaptive = confirm('Нужен ли адаптив на сайте?');
}
    
const showTypeof = function (variable) {
  console.log(variable, typeof variable);
};

const getTitle = function (str) { 
  str = str.trim();
  return str[0].toUpperCase() + str.substring(1).toLowerCase();
}

const getAllServicePrices = function () {
  // return service1 + service2;
  let sum = 0;

  for (let i = 0; i < 2; i++) {

    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?');
     
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?');       
    }

    price = prompt('Сколько это будет стоить?');

    while ((!isNumber(price))) {
    price = prompt('Сколько это будет стоить?');
    }
    sum += +price;
  }
  return sum;
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

asking();

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(+screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
title = getTitle(title);


showTypeof(title);
showTypeof(+fullPrice);
showTypeof(adaptive);

console.log('allServicePrices', allServicePrices);

console.log(getRollbackMessage(fullPrice));

console.log(screens.length);

console.log('Стоимость верстки экранов ' + screenPrice + ' долларов. ' + 'Стоимость разработки сайта ' + fullPrice + ' долларов');

console.log('Итоговая цена за учетом вычета посреднику' + ' ' + servicePercentPrice);


