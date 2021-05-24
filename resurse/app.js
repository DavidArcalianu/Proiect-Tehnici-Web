const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const productsMenu = document.querySelector('#products-page');
  let scrollPosition = window.scrollY;

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPosition < 600) {
    homeMenu.classList.add('highlight');
    productsMenu.classList.remove('highlight');
    return;
  } 
  else if (window.innerWidth > 960 && scrollPosition < 1400) {
    productsMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPosition < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);


// random color when clicking social icons
// facebook
const fbIcon = document.querySelector('#fb');

const colorChangeFB = () => {
  let color = '#';
  color += Math.random().toString(16).slice(2,8);
  fbIcon.style.backgroundColor = color;
}
fbIcon.addEventListener('click', colorChangeFB);

// instagram
const igIcon = document.querySelector('#ig');

const colorChangeIG = () => {
  let color = '#';
  color += Math.random().toString(16).slice(2,8);
  igIcon.style.backgroundColor = color;
}
igIcon.addEventListener('click', colorChangeIG);

// twitter
const twIcon = document.querySelector('#tw');

const colorChangeTW = () => {
  let color = '#';
  color += Math.random().toString(16).slice(2,8);
  twIcon.style.backgroundColor = color;
}

twIcon.addEventListener('click', colorChangeTW);
