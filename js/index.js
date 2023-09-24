const menuOpen = document.querySelector('.menu');
const menuClose = document.querySelector('.menu-close');
const navItems = document.querySelector('.nav-items');

menuOpen.addEventListener('click', () => {
  navItems.style.right = 0
})

menuClose.addEventListener('click', () => {
  navItems.style.right = "-865px"
})