import './style/main.scss';

document.querySelector('.header__menu_button').addEventListener('click', e => {
  const header = document.querySelector('.header');
  header.classList.toggle('open');
});

document.querySelectorAll('.dev_3__item__title').forEach(item => {
  item.addEventListener('click', e => {
    const container = e.currentTarget.parentElement;
    const content = container.querySelector('.dev_3__showmore_content');
    let h;
    container.classList.toggle('open');
    if (container.classList.contains('open')) {
      h = content.offsetHeight;
      content.parentElement.style.maxHeight = `${h}px`;
    } else {
      content.parentElement.style.maxHeight = '0';
    }
  })
});

document.querySelectorAll('.popup input, .popup textarea').forEach(item => {
  item.addEventListener('input', e => {
    if (e.target.value !== '') {
      e.target.parentElement.classList.add('not-empty');
    } else {
      e.target.parentElement.classList.remove('not-empty');
    }
  })
});

document.querySelectorAll('[data-target]').forEach(item => {
  item.addEventListener('click', e => {
    const target = e.target.getAttribute('data-target');
    const popup = document.getElementById(target).classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

document.querySelectorAll('.popup__close').forEach(item =>{
  item.addEventListener('click', e=>{
    e.target.parentElement.parentElement.classList.remove('open');
    document.body.style.overflow = '';
  });
});