'use strict';

(function () {
  const bodyWrap = document.querySelector('.body-wrap');
  const themeToggler = document.querySelector('.header-top__theme-toggler');
  const menuToggler = document.querySelector('.main-nav__toggle');
  let theme = localStorage.getItem('theme');
  const header = document.querySelector('.header');

  const anchors = document.querySelectorAll('a[href*="#"]');
  const headerBottomCoord = header.getBoundingClientRect().bottom + window.scrollY;

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

  function setScrolledHeader() {
    if (!header.classList.contains('header--scrolled') && window.pageYOffset > headerBottomCoord) {
      header.classList.add('header--scrolled');
    } else if (window.pageYOffset < headerBottomCoord) {
      header.classList.remove('header--scrolled');
    }
  }

  window.addEventListener('scroll', setScrolledHeader);

  for (let anchor of anchors) {
    let anchorName = anchor.getAttribute('href').substr(1);

    anchor.addEventListener('click', function (evt) {
      evt.preventDefault();
      document.getElementById(anchorName).scrollIntoView({
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
