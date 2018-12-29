import './style.sass';

const $menu = document.querySelector('.menu');

setTimeout(() => {
  document.getElementById('top').classList.add('shift-up');
}, 300);


window.addEventListener('scroll', setMenuStickiness);

function setMenuStickiness() {
  const menuHeight = $menu.offsetHeight;

  if (window.scrollY < (window.innerHeight - menuHeight)) { // menu should be in normal position
    $menu.classList.remove('sticky');
  } else { // menu should be sticky
    $menu.classList.add('sticky');
  }
}