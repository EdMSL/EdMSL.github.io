'use strict';

(function () {
  var toggler = document.querySelector('.main-nav__toggle');
  var mainNav = document.querySelector('.main-nav');

  toggler.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (mainNav.classList.contains('main-nav--open')) {
      mainNav.classList.remove('main-nav--open');
      mainNav.classList.add('main-nav--close');
    } else {
      mainNav.classList.remove('main-nav--close');
      mainNav.classList.add('main-nav--open');
    }
  })

  mainNav.classList.remove('main-nav--open');
  mainNav.classList.remove('main-nav--no-js');
  mainNav.classList.add('main-nav--close');
})();