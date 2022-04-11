'use strict';

const title = document.getElementsByTagName('h1')[0];
const added = document.querySelector('.screen-btn');
const number = document.querySelectorAll('.other-items.number');
const percent = document.querySelectorAll('.other-items.percent');

const range = document.querySelector('.rollback input');
const rangeValue = document.querySelector('.rollback .range-value');

const buttonStart = document.getElementsByClassName('handler_btn')[0];
const buttonReset = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullCountOther = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');


const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  discount: '',
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  totalScreensCount: 0,
  fullPrice: 0,
  servicesPercent: {},
  servicesNumber: {},

  servicePercentPrice: 0,
  
  rollback: 0,
  init: function () {
    appData.addTitle();   
    added.addEventListener('click', appData.addScreenBlock);  
    range.addEventListener('input', appData.getRollback);
    buttonStart.addEventListener('click', appData.isEmtyScreens);    
  },

  addTitle: function () {
    document.title = title.textContent;
  },

  start: function () {    
    appData.addScreens();
    appData.addServices();
    appData.addPrices(); 
    appData.getTotalScreensCount();
    // appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
    // appData.loger();
    console.log(appData.servicePercentPrices);
    appData.showResult();  
    
  },

  isEmtyScreens: function(){
    const screenSelect = document.querySelectorAll('.screen select');
    const screenInput = document.querySelectorAll('.screen input');
    // screenSelect.forEach(function (item) {
    //   if (item.value == '') {
    //     alert('123');
    //   } else {
    //     appData.start();
    //     }
    //   } 
    // );  
    let a = true;
    let b = true;
    for (let select of screenSelect) {
      if (select.value == '') {
        a = false;
        break;
      }
    }
    for (let key of screenInput) {
      if (key.value == '') {
          b = false;
        break;
      }      
    }
    if (a === true && b === true) {
      appData.start();
  }
    
  },

  addScreens: function () {
    screens.forEach(function (screen, index) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +input.value * +select.value,
        count: +input.value
      });
    });     
  },

  getTotalScreensCount: function () {
    for (let key in appData.screens) {
      appData.totalScreensCount += appData.screens[key].count;
    }
  },

  addServices: function () {
    percent.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }

    });
    number.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }

    });
  },

  addScreenBlock: function () {
    const cloneScreens = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreens);
    screens = document.querySelectorAll('.screen');
  }, 
  
  getRollback: function () {
    rangeValue.textContent = range.value + '%';
    appData.rollback = +range.value;
  },

  addPrices: function () {
    // for (let screen of appData.screens) {
    //   appData.screenPrice += screen.price;
    // }
    appData.screenPrice = appData.screens.reduce(function (sum, item) {
      return sum + item.price;
    }, 0);
    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];      
    }
    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
    }
    appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
  }, 

  showResult: function () {
    total.value = appData.screenPrice;
    totalCount.value = appData.totalScreensCount;
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
    fullCountOther.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;
  },

  // getServicePercentPrices: function (price1, price2) {
  //   appData.servicePercentPrice = price1 - (price1 * (price2 / 100));
  // },

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
appData.init();
