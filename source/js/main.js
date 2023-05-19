const pageHeader = document.querySelector('.page-header');
const mainNav = pageHeader.querySelector('.page-header__nav');
const mainNavToggle = mainNav.querySelector('.main-nav__toggle');


mainNav.classList.remove('page-header__nav--nojs');
pageHeader.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';

mainNavToggle.addEventListener('click', () => {
  if (mainNav.classList.contains('page-header__nav--closed')) {
    mainNav.classList.remove('page-header__nav--closed');
    mainNav.classList.add('page-header__nav--opened');
    mainNav.style.backgroundColor =
    'rgba(40, 54, 69, 1)';
  } else {
    mainNav.classList.add('page-header__nav--closed');
    mainNav.classList.remove('page-header__nav--opened');
    mainNav.style.backgroundColor = 'transparent';
  }
});
