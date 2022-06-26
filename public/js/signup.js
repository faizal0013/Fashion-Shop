'use strict';

/*
 signup
 full-name
 email
 user-name
 user-password
 conform-password
 */

const signup = document.querySelector('#signup');

const showError = (errElement, errMessage) => {
  const span = document.createElement('span');

  span.classList.add('errMess');

  span.innerText = `! ${errMessage}`;

  errElement.insertAdjacentElement('afterend', span);
};

signup.addEventListener('submit', e => {
  const errMess = document.querySelectorAll('.errMess');
  errMess.forEach(el => el.remove());

  const name = signup['name'];
  const email = signup['email'];
  const userName = signup['user-name'];
  const userPassword = signup['user-password'];
  const conformPassword = signup['conform-password'];

  if (!name.value) {
    showError(name, 'Enter your Name');
  } else if (name.value.length < 5) {
    showError(name, 'Enter your Name');
  }

  if (!email.value) {
    showError(email, 'Enter your email id');
  }

  if (!userName.value) {
    showError(userName, 'user name is empty');
  } else if (userName.value.length < 5) {
    showError(userName, 'username is not valid');
  }
  if (!userPassword.value) {
    showError(userPassword, 'password is empty');
  } else if (userPassword.value.length < 3) {
    showError(userPassword, 'password is not valid');
  }
  if (!conformPassword.value) {
    showError(conformPassword, 'password is empty');
  } else if (userPassword.value !== conformPassword.value) {
    showError(conformPassword, 'password is not match');
  }

  if (document.querySelectorAll('.errMess').length > 0) e.preventDefault();
});
