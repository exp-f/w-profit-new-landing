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