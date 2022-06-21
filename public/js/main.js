'use strict';

const searchInput = document.querySelector('#search-input');
const searchIcon = document.querySelector('#search-icon');

searchInput.addEventListener('submit', e => {
  e.preventDefault();
});

searchIcon.addEventListener('click', () => {
  searchInput.classList.toggle('hidden');
});
