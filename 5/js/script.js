let userMenu = document.querySelector('.header-nav__user-menu');
let siteMenu = document.querySelector('.header-nav__list-main');
let navToggleOpen = document.querySelector('.header-nav__toggle-open');
let navToggleClose = document.querySelector('.header-nav__toggle-close');

userMenu.classList.remove('.header-nav__user-menu--nojs');
siteMenu.classList.remove('.header-nav__list-main--nojs');

navToggleOpen.addEventListener('click', function () {
  if (userMenu.classList.contains('header-nav__user-menu--closed') || siteMenu.classList.contains('header-nav__list-main--closed')) {
    userMenu.classList.add('header-nav__user-menu--opened');
    siteMenu.classList.add('header-nav__list-main--opened');
    userMenu.classList.remove('header-nav__user-menu--closed');
    siteMenu.classList.remove('header-nav__list-main--closed');
    navToggleOpen.classList.add('header-nav__toggle-open--opened');
    navToggleClose.classList.add('header-nav__toggle-close--opened');
  }
})

navToggleClose.addEventListener('click', function() {
  if (userMenu.classList.contains('header-nav__user-menu--opened') || siteMenu.classList.contains('header-nav__list-main--opened')) {
    userMenu.classList.add('header-nav__user-menu--closed');
    siteMenu.classList.add('header-nav__list-main--closed');
    userMenu.classList.remove('header-nav__user-menu--opened');
    siteMenu.classList.remove('header-nav__list-main--opened');
    navToggleOpen.classList.add('header-nav__toggle-open--closed');
    navToggleOpen.classList.remove('header-nav__toggle-open--opened');
    navToggleClose.classList.remove('header-nav__toggle-close--opened');
  }
})
