'use scrict';

const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  discount: '',
  allServicePrices: 0,
  fullPrice: 0,
  service1: '',
  service2: '',
  servicePercentPrice: 0,
  
  rollback: 15,
  asking: function () {
    appData.title = prompt('Как называется ваш проект', 'Калькулятор верстки');
    appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные');
    
    do {
      appData.screenPrice = prompt('Сколько будет стоить данная работа?');
    } while (!appData.isNumber(appData.screenPrice));
    
  
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },



    
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && !(/\s/g.test(num));
  },
  
  getTitle: function (str) {
    str = str.trim();
    return str[0].toUpperCase() + str.substring(1).toLowerCase();
  },

  getAllServicePrices: function () {
    // return service1 + service2;
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      let price = 0;
      if (i === 0) {
        appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
     
      } else if (i === 1) {
        appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
      }

      price = prompt('Сколько это будет стоить?');

      while ((!appData.isNumber(price))) {
        price = prompt('Сколько это будет стоить?');
      }
      sum += +price;
    }
    return sum;
  },

  getFullPrice: function (price1, price2) {
    return price1 + price2;
  },

  getServicePercentPrices: function (price1, price2) {
    return price1 - (price1 * (price2 / 100));
  },

  getRollbackMessage: function (price) {
    switch (true) {
      case price >= 30000:
        appData.discount = 10;
        return 'Даем скидку 10%';
      case price >= 15000 && price < 30000:
        appData.discount = 5;
        return 'Даем скидку 5%';
      case price < 15000 || price == 0:
        appData.discount = 0;
        return 'Скидка не предусмотрена';
      default:
        return 'Что то пошло не так';
    }
  },

  start: function () {
    appData.asking();
    appData.title = appData.getTitle(appData.title);
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice(+appData.screenPrice, appData.allServicePrices);
    appData.servicePercentPrice = appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
    appData.getRollbackMessage(appData.fullPrice);
    appData.loger();
  },

  loger: function () {
    for (let key in appData) {
      console.log('Ключ: ' + key + ' Значение: ' + appData[key]);
    }
  },
};
appData.start();



