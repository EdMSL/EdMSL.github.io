'use strict';

(function () {
  var bodyWrap = document.querySelector('.body-wrap');
  var themeToggler = document.querySelector('.header-top__theme-toggler');
  var menuToggler = document.querySelector('.main-nav__toggle');
  var mainNav = document.querySelector('.main-nav');

  var header = document.querySelector('.header');

  function setScrolledHeader() {
    var headerBottomCoord = header.getBoundingClientRect().bottom + window.pageXOffset;

    if (!header.classList.contains('header--scrolled') && window.pageYOffset > headerBottomCoord) {
      header.classList.add('header--scrolled');
    } else if (window.pageYOffset < headerBottomCoord) {
      header.classList.remove('header--scrolled');
    }
  }

  themeToggler.addEventListener('click', function (evt) {
    evt.preventDefault();
    bodyWrap.classList.toggle('body--dark__theme');
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

  window.addEventListener('scroll', setScrolledHeader);

  mainNav.classList.remove('main-nav--open');
  mainNav.classList.remove('main-nav--no-js');
  mainNav.classList.add('main-nav--close');
}());
