const hamburgerElement = document.getElementById('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
  navElement.classList.toggle('open'); 
  hamburgerElement.classList.toggle ('open');
});

