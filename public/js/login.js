'use strict';

const login = document.querySelector('#login');

const showError = (errElement, errMessage) => {
  const span = document.createElement('span');

  span.classList.add('errMess');

  span.innerText = `! ${errMessage}`;

  errElement.insertAdjacentElement('afterend', span);
};

login.addEventListener('submit', e => {
  const errMess = document.querySelectorAll('.errMess');
  errMess.forEach(el => el.remove());

  const usetName = login['user-name'];
  const password = login['user-password'];

  if (!usetName.value) {
    showError(usetName, 'user name is empty');
  } else if (usetName.value.length < 5) {
    showError(usetName, 'username is not valid');
  }

  if (!password.value) {
    showError(password, 'password is empty');
  } else if (password.value.length < 7) {
    showError(password, 'password is not valid');
  }

  if (document.querySelectorAll('.errMess').length > 0) e.preventDefault();
});
