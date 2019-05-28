import './style/main.scss';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

document.querySelectorAll('.popup__close').forEach(item => {
  item.addEventListener('click', e => {
    e.target.parentElement.parentElement.classList.remove('open');
    document.body.style.overflow = '';
  });
});

document.querySelector('.cookies__close').addEventListener('click', (e) => {
  e.target.parentNode.parentNode.classList.add('closed');
  sessionStorage.setItem('seencookies', '1');
});

document.querySelector('#request-demo form').addEventListener('submit', (e) => {
  e.preventDefault();
  const target = e.currentTarget;
  const inputs = target.querySelectorAll('input:not([type="submit"]), textarea');
  const body = new FormData();
  const errorsOn = [];
  let hasErrors = false;
  inputs.forEach(i => {
    switch (i.name) {
      case 'first_name':
      case 'last_name':
      case 'company_name':
      case 'industry_country':
      case 'comment':
      case 'budget':
        if (!!i.value) {
          body.append(i.name, i.value);
        } else {
          hasErrors = true;
          errorsOn.push(i.name);
        }
        break;
      case 'agreed':
        if (!i.checked) {
          hasErrors = true;
          errorsOn.push(i.name);
        }
        break;
      case 'email':
        if (!emailRegex.test(i.value)) {
          hasErrors = true;
          errorsOn.push(i.name);
        } else {
          body.append(i.name, i.value);
        }
    }
  });
  if (hasErrors) {
    errorsOn.forEach(i => {
      let errorContainer = target.querySelector(`[name='${i}'`).parentElement;
      errorContainer.classList.toggle('error', true);
      setTimeout(() => {
        errorContainer.classList.remove('error');
      }, 3000)
    });
    return false;
  } else {
    fetch('https://w-profit.com/sendmail.php', {
      method: 'POST',
      body: body
    })
      .then(r => r.text())
      .then(r => {
        document.getElementById('request-demo').classList.remove('open');
        document.getElementById('msg').classList.add('open');
      })
      .catch(e => {
        console.error(e);
      })
  }
});