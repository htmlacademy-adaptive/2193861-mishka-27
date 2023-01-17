let navToggle = document.querySelector('.header-nav__toggle');
let userMenu = document.querySelector('.header-nav__list-user');
let siteMenu = document.querySelector('.header-nav__list-site');
let navLogo = document.querySelector('.header-nav__logo');
let staticImageMap = document.querySelector('.contacts__map-image');
let interactiveMap = document.querySelector('.contacts__map');

userMenu.classList.remove('header-nav__list-user--nojs');
siteMenu.classList.remove('header-nav__list-site--nojs');
navToggle.classList.remove('header-nav__toggle--nojs');
navLogo.classList.remove('header-nav__logo--nojs');
staticImageMap.classList.remove('contacts__map-image--nojs');
interactiveMap.classList.add('contacts__map--active');

navToggle.addEventListener('click', function () {
  if (userMenu.classList.contains('header-nav__list-user--closed') && siteMenu.classList.contains('header-nav__list-site--closed')) {
    navToggle.classList.remove('header-nav__toggle--open');
    navToggle.classList.add('header-nav__toggle--close');
    userMenu.classList.remove('header-nav__list-user--closed');
    userMenu.classList.add('header-nav__list-user--opened');
    siteMenu.classList.remove('header-nav__list-site--closed');
    siteMenu.classList.add('header-nav__list-site--opened');
  } else if (userMenu.classList.contains('header-nav__list-user--opened') && siteMenu.classList.contains('header-nav__list-site--opened')) {
    navToggle.classList.remove('header-nav__toggle--close');
    navToggle.classList.add('header-nav__toggle--open');
    userMenu.classList.remove('header-nav__list-user--opened');
    userMenu.classList.add('header-nav__list-user--closed');
    siteMenu.classList.remove('header-nav__list-site--opened');
    siteMenu.classList.add('header-nav__list-site--closed');
  }
})
