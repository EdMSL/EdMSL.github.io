'use strict';

(function () {
  var body = document.body;
  var themeToggler = document.querySelector('.header-top__theme-toggler');
  var menuToggler = document.querySelector('.main-nav__toggle');
  var mainNav = document.querySelector('.main-nav');

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
})();