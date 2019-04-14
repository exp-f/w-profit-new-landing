import './style/main.scss';

document.querySelector('.header__menu_button').addEventListener('click', e=>{
  const header = document.querySelector('.header');
  header.classList.toggle('open');
});