// Hamburger Menu  Add remove class //

const hamburger = document.getElementById('hamburger-menu');
const menu = document.querySelector('.menu');

const close = 
      document.getElementById('close-menu');
console.log(close)

function showMenu(){
  menu.classList.add('show-menu')
}

 hamburger.addEventListener('click', showMenu)


function closeMenu(){
  menu.classList.remove('show-menu')
}

close.addEventListener('click', closeMenu)

