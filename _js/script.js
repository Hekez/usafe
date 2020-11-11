//Mobile menu animation

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.global-nav-menu');
const line = document.querySelector('.line');

menuBtn.addEventListener('click', () =>{
   menuBtn.classList.toggle('open'),
   menu.classList.toggle('open'),
   line.classList.toggle('open');
});
