const hamburgerIcon = document.querySelector('.hamburger--icon');
const hamburgerMenu = document.querySelector('.hamburger--menu');

hamburgerIcon.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('hamburger--menu-down');
});
