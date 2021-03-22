'use strict';

(function () {
  var bodyWrap = document.querySelector('.body-wrap');
  var themeToggler = document.querySelector('.header-top__theme-toggler');
  var menuToggler = document.querySelector('.main-nav__toggle');
  var theme = localStorage.getItem('theme');
  var header = document.querySelector('.header');

  var anchors = document.querySelectorAll('a[href*="#"]');

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
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', theme);

    bodyWrap.classList.remove(`theme--color--${theme === 'dark' ? 'light' : 'dark'}`);
    bodyWrap.classList.add(`theme--color--${theme === 'dark' ? 'dark' : 'light'}`);
  });

  menuToggler.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (header.classList.contains('header--open')) {
      header.classList.remove('header--open');
      header.classList.add('header--close');
    } else {
      header.classList.remove('header--close');
      header.classList.add('header--open');
    }
  });

  window.addEventListener('scroll', setScrolledHeader);

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (evt) {
      evt.preventDefault();
      document.getElementById(anchor.getAttribute('href').substr(1)).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }


  header.classList.remove('header--open');
  header.classList.remove('header--no-js');
  header.classList.add('header--close');

  if (theme === null) {
    localStorage.setItem('theme', 'light');
  }

  bodyWrap.classList.add(`theme--color--${theme === 'dark' ? 'dark' : 'light'}`);
}());
