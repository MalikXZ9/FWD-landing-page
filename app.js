//Importing elements --------------
const hamburgerIcon = document.querySelector('.hamburger--icon');
const hamburgerMenu = document.querySelector('.hamburger--menu');
const hamTop = document.querySelector('.h--top');
const hamMiddle = document.querySelector('.h--middle');
const hamBottom = document.querySelector('.h--bottom');
const navLinks = document.querySelector('.nav--links');
const navLink = document.querySelectorAll('.nav--link');
const hNavLinks = document.querySelector('.h-nav--links');
const hNavLink = document.querySelectorAll('.h-nav--link');
const btnLearn = document.querySelector('.hero--btn');

//Functions
const showHamburger = () => {
  hamburgerMenu.classList.toggle('hamburger--menu-down');
  //animation
  hamTop.classList.toggle('h--top-a');
  hamMiddle.classList.toggle('h--middle-a');
  hamBottom.classList.toggle('h--bottom-a');
};

//Event listeners --------------
//hamburger
hamburgerIcon.addEventListener('click', showHamburger);

//Scrolling
navLinks.addEventListener('click', function (e) {
  e.preventDefault();
  //remove selected class
  navLink.forEach(link => {
    link.classList.remove('selected');
  });

  if (e.target.classList.contains('nav--link')) {
    const href = e.target.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    //add selected class
    e.target.classList.add('selected');
  }
});

hNavLinks.addEventListener('click', function (e) {
  e.preventDefault();
  //remove selected class
  hNavLink.forEach(link => {
    link.classList.remove('selected');
  });

  if (e.target.classList.contains('h-nav--link')) {
    showHamburger();
    const href = e.target.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    //add selected class
    e.target.classList.add('selected');
  }
});

btnLearn.addEventListener('click', () => {
  document.querySelector('#section--1').scrollIntoView({ behavior: 'smooth' });
});
