'use strict';

const admin = document.querySelector('#admin');

/*
clothesName
tag
img
price
*/

const showError = (errElement, errMessage) => {
  const span = document.createElement('span');

  span.classList.add('errMess');

  span.innerText = `! ${errMessage}`;

  errElement.insertAdjacentElement('afterend', span);
};

admin.addEventListener('submit', e => {
  const errMess = document.querySelectorAll('.errMess');
  errMess.forEach(el => el.remove());

  const { clothesName, tag: tags, img, price } = admin;

  if (!clothesName.value) showError(clothesName, 'Clothe Name is empty');

  if (!tags[0].checked && !tags[1].checked && !tags[2].checked)
    showError(document.querySelector('#tag-err'), 'Choice your tag');

  if (!price.value) showError(price, 'price is empty');

  if (!img.value) showError(img, 'Image is required!');

  if (document.querySelectorAll('.errMess').length > 0) e.preventDefault();
});
