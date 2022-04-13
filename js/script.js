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

const cmsVariable = document.querySelector('.hidden-cms-variants');
const cmsInput = document.querySelector('.hidden-cms-variants .main-controls__input');
const cmsSelect = document.querySelector('#cms-select');
const cmsOtherInput = document.querySelector('#cms-other-input');

const cmsOpen = document.querySelector('#cms-open');

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
  cmsPrice: 0,
  fullPrice: 0,
  servicesPercent: {},
  servicesNumber: {},

  servicePercentPrice: 0,

  rollback: 0,
  init: function () {

    this.addTitle();
    cmsOpen.addEventListener('click', this.cmsToggle);
    cmsSelect.addEventListener('input', this.checkCms);
    added.addEventListener('click', this.addScreenBlock);
    range.addEventListener('input', this.getRollback);
    buttonStart.addEventListener('click', this.isEmtyScreens);
    buttonReset.addEventListener('click', this.reset);
  },

  addTitle: function () {
    document.title = title.textContent;
  },

  checkCms: function () {
    if (cmsSelect.value == 'other') {
      cmsInput.style.display = 'block';
    } else {
      cmsInput.style.display = 'none';


    }

  },

  cmsToggle: function () {
    if (cmsOpen.checked) {
      cmsVariable.style.display = 'flex';
    } else {
      cmsVariable.style.display = 'none';
      cmsSelect.value = '';
      cmsInput.value = '';

    }
  },

  start: function () {
    this.addScreens();
    this.addServices();
    this.addPrices();
    this.getTotalScreensCount();
    // appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
    // appData.loger();
    this.showResult();
    this.startHiden();
  },
  reset: function () {
    appData.resetScreens();
    appData.resetCheckbox();
    appData.resetTotalInput();
    appData.resetHiden();
    appData.resetObj();
  },

  isEmtyScreens: function () {
    let isValueEmty = true;
    screens.forEach(function (screen) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      if (select.value === '' || input.value === '') {
        isValueEmty = false;
      }
    });
    if (isValueEmty === true) {
      appData.start();
    }
  },

  startHiden: function () {
    console.log(cmsVariable);
    console.log(cmsInput);
    console.log(cmsSelect);
    console.log(cmsOtherInput);
    screens.forEach((item) => {
      const select = item.querySelector('select')
      const input = item.querySelector('input[type=text]');
      select.setAttribute('disabled', 'true');
      input.setAttribute('disabled', 'true');
    });
    percent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      check.setAttribute('disabled', 'true');
    });
    number.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      check.setAttribute('disabled', 'true');
    });
    cmsOpen.setAttribute('disabled', 'true');
    cmsOtherInput.setAttribute('disabled', 'true');
    cmsSelect.setAttribute('disabled', 'true');


    buttonStart.style.display = 'none';
    buttonReset.style.display = 'inline-block';
  },

  resetHiden: function () {
    buttonStart.style.display = 'inline-block';
    buttonReset.style.display = 'none';
    cmsInput.style.display = 'none';
    cmsVariable.style.display = 'none';
  },

  addScreens: function () {
    screens.forEach((screen, index) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;

      this.screens.push({
        id: index,
        name: selectName,
        price: +input.value * +select.value,
        count: +input.value
      });
    });
  },

  getTotalScreensCount: function () {
    for (let key in this.screens) {
      this.totalScreensCount += this.screens[key].count;
    }
  },

  addServices: function () {
    percent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }

    });
    number.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
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
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    totalCountRollback.value = Math.round(appData.servicePercentPrice);

  },
  resetScreens: function () {
    screens.forEach((item, index) => {
      if (index !== 0) {
        item.remove();
      }
      const select = item.querySelector('select')
      const input = item.querySelector('input[type=text]');
      select.removeAttribute('disabled');
      input.removeAttribute('disabled');
      select.value = '';
      input.value = '';
    });
  },
  resetCheckbox: function () {
    percent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      check.removeAttribute('disabled');
      check.checked = false;
    });
    number.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      check.removeAttribute('disabled');
      check.checked = false;
    });
    cmsOpen.removeAttribute('disabled');
    cmsOtherInput.removeAttribute('disabled');
    cmsSelect.removeAttribute('disabled');
    cmsOtherInput.value = '';
    cmsSelect.value = '';
    cmsOpen.checked = false;
    range.value = 0;
    rangeValue.textContent = 0 + '%';
  },
  resetTotalInput: function () {
    total.value = '';
    totalCount.value = '';
    totalCountOther.value = '';
    fullCountOther.value = '';
    totalCountRollback.value = '';
  },
  resetObj: function () {
    this.title = '',
      this.screens = [],
      this.screenPrice = 0,
      this.adaptive = true,
      this.discount = '',
      this.servicePricesPercent = 0,
      this.servicePricesNumber = 0,
      this.totalScreensCount = 0,
      this.cmsPrice = 0,
      this.fullPrice = 0,
      this.servicesPercent = {},
      this.servicesNumber = {},

      this.servicePercentPrice = 0,

      this.rollback = 0
  },
  addPrices: function () {
    // for (let screen of appData.screens) {
    //   appData.screenPrice += screen.price;
    // }
    this.screenPrice = this.screens.reduce((sum, item) => {
      return sum + item.price;
    }, 0);
    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }
    for (let key in this.servicesPercent) {
      this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
    }
    if (cmsSelect.value == '50') {
      this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;
      this.fullPrice += this.fullPrice * (50 / 100);
    } else if (cmsSelect.value == 'other') {
      this.fullPrice = (+this.screenPrice + this.servicePricesNumber + this.servicePricesPercent);
      this.fullPrice += this.fullPrice * (cmsOtherInput.value / 100);
      console.log(appData.cmsPrice);
    } else {
      this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

    }
    this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100));
  },

  showResult: function () {
    total.value = this.screenPrice;
    totalCount.value = this.totalScreensCount;
    totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
    fullCountOther.value = this.fullPrice;
    totalCountRollback.value = Math.round(appData.servicePercentPrice);
  },

  // getServicePercentPrices: function (price1, price2) {
  //   appData.servicePercentPrice = price1 - (price1 * (price2 / 100));
  // },

  loger: function () {
    // for (let key in appData) {
    //   console.log('Ключ: ' + key + ' Значение: ' + appData[key]);
    // }    
    console.log(this.services);
    console.log(this.screens);
    console.log(this.fullPrice);
    console.log(this.servicePercentPrice);

  },
};
appData.init();