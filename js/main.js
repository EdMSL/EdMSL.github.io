'use strict';

(function () {
  var MS_IN_SEC = 1000;
  var SEC_IN_MIN = 60;
  var MIN_IN_HOUR = 60;
  var HOUR_IN_DAY = 24;

  var body = document.body;
  var themeToggler = document.querySelector('.header-top__theme-toggler');
  var menuToggler = document.querySelector('.main-nav__toggle');
  var mainNav = document.querySelector('.main-nav');

  var daysBlock = document.querySelector('#days');
  var hoursBlock = document.querySelector('#hours');
  var minutesBlock = document.querySelector('#minutes');
  var secondsBlock = document.querySelector('#seconds');

  var timer;

  function getTimeIn(time, unit) {
    return (time - (time % unit))  / unit;
  }

  function getTotalTime(time) {
    var totalTime = {};
    var timeInMsSec = time;
    totalTime.mssec = timeInMsSec % MS_IN_SEC;
    var timeInSec = getTimeIn(timeInMsSec, MS_IN_SEC);
    totalTime.sec = timeInSec % SEC_IN_MIN;
    var timeInMin = getTimeIn(timeInSec, SEC_IN_MIN);
    totalTime.min = timeInMin % MIN_IN_HOUR;
    var timeInHour = getTimeIn(timeInMin, MIN_IN_HOUR);
    totalTime.hour = timeInHour % HOUR_IN_DAY;
    var timeInDay = getTimeIn(timeInHour, HOUR_IN_DAY);
    totalTime.day = timeInDay;

    return totalTime;
  }

  function getTime() {
    var now = new Date();
    var totalTime = new Date(2023, 7, 6) - now;
    var total = getTotalTime(totalTime);
    daysBlock.textContent = total.day;
    hoursBlock.textContent = total.hour;
    minutesBlock.textContent = total.min;
    secondsBlock.textContent = total.sec;
  }

  function startTimer(endTime) {
    getTime(endTime);
    timer = setInterval(function () {
      getTime(endTime);
      if (new Date === new Date(2023, 7, 6)) {
        clearInterval(timer);
      }
    }, 1000);
  }

  themeToggler.addEventListener('click', function (evt) {
    evt.preventDefault();
    body.classList.toggle('body--dark__theme');
  });

  menuToggler.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (mainNav.classList.contains('main-nav--open')) {
      mainNav.classList.remove('main-nav--open');
      mainNav.classList.add('main-nav--close');
    } else {
      mainNav.classList.remove('main-nav--close');
      mainNav.classList.add('main-nav--open');
    }
  });

  mainNav.classList.remove('main-nav--open');
  mainNav.classList.remove('main-nav--no-js');
  mainNav.classList.add('main-nav--close');

  startTimer();
})();