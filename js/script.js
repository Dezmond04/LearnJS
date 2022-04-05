'use strict';

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  discount: '',
  allServicePrices: 0,
  fullPrice: 0,
  services: [],
  servicePercentPrice: 0,
  
  rollback: 15,
  asking: function () {
    do {
      appData.title = prompt('Как называется ваш проект');
    } while (appData.isString(appData.title));
    
    // appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные');
    
    // do {
    //   appData.screenPrice = +prompt('Сколько будет стоить данная работа?');
    // } while (!appData.isNumber(appData.screenPrice));

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;
      
      do {
        name = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные');
      } while (appData.isString(name));

      do {
        price = prompt('Сколько будет стоить данная работа?');
      } while (!appData.isNumber(price));

      appData.screens.push({
        id: i,
        name: name,
        price: +price
      });
    }

    

    for (let i = 0; i < 2; i++) {
      name;
      let price = 0;      

      do {
        name = prompt('Какой дополнительный тип услуги нужен?');
      } while ((appData.isString(name)));

      do {
        price = prompt('Сколько это будет стоить?');
      } while ((!appData.isNumber(price)));
      
      appData.services.push({
        id: i,
        name: name,
        price: +price
      });

    }
    
  
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },

  addPrices: function () {
    // for (let screen of appData.screens) {
    //   appData.screenPrice += screen.price;
    // }
    appData.screenPrice = appData.screens.reduce(function (sum, item) {
      return sum + item.price;
    }, 0);
    for (let key of appData.services) {
      appData.allServicePrices += key.price;      
    }
  },

    
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && !(/\s/g.test(num));
  },

  isString: function (str) {    
      return !isNaN(str);    
  },
  
  
  getTitle: function (str) {
    str = str.trim();
    appData.title = str[0].toUpperCase() + str.substring(1).toLowerCase();
  },
  

  getFullPrice: function (price1, price2) {
    appData.fullPrice = price1 + price2;
  },

  getServicePercentPrices: function (price1, price2) {
    appData.servicePercentPrice = price1 - (price1 * (price2 / 100));
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
    appData.addPrices();
    appData.getTitle(appData.title);
    appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
    appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
    appData.getRollbackMessage(appData.fullPrice);
    appData.loger();
  },

  loger: function () {
    // for (let key in appData) {
    //   console.log('Ключ: ' + key + ' Значение: ' + appData[key]);
    // }    
    console.log(appData.services);
    console.log(appData.screens);
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);

  },
};
appData.start();





