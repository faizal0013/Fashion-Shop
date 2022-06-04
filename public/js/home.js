'use strict';

const btnLeftHero = document.querySelector('#btn-left-hero');
const btnRigthHero = document.querySelector('#btn-rigth-hero');
const btnLeftTrending = document.querySelector('#btn-left-trending');
const btnRigthTrending = document.querySelector('#btn-rigth-trending');
const trendingBox1 = document.querySelector('#trending-box-1');
const trendingBox2 = document.querySelector('#trending-box-2');
const btnLeftCustomerMessage = document.querySelector('#btn-left-customer-message');
const btnRigthCustomerMessage = document.querySelector('#btn-rigth-customer-message');

const imagesScrollEvent = () => {
  const hero1Box = document.querySelector('#hero1-box');
  const hero2Box = document.querySelector('#hero2-box');
  hero1Box.classList.toggle('opacity-0');
  hero2Box.classList.toggle('opacity-100');
};

setInterval(imagesScrollEvent, 10000);

btnLeftHero.addEventListener('click', imagesScrollEvent);
btnRigthHero.addEventListener('click', imagesScrollEvent);

const imagesTrenddingEvent = () => {
  trendingBox1.classList.toggle('z-[0]');
  trendingBox2.classList.toggle('z-[0]');
  for (const element of trendingBox1.children) {
    element.classList.toggle('opacity-0');
  }
  for (const element of trendingBox2.children) {
    element.classList.toggle('opacity-0');
    element.classList.toggle('rotate-[180deg]');
  }
};

btnLeftTrending.addEventListener('click', imagesTrenddingEvent);
btnRigthTrending.addEventListener('click', imagesTrenddingEvent);

const preventDefault = (e) => {
  e.preventDefault();
};

trendingBox1.addEventListener('click', preventDefault);
trendingBox2.addEventListener('click', preventDefault);

const trendingBoxBoxs = (e) => {
  e.target.children[1].classList.toggle('opacity-100');
  e.target.children[1].classList.toggle('scale-125');
};

for (const element of trendingBox1.children) {
  element.addEventListener('mouseenter', trendingBoxBoxs);
}

for (const element of trendingBox1.children) {
  element.addEventListener('mouseleave', trendingBoxBoxs);
}

for (const element of trendingBox2.children) {
  element.addEventListener('mouseenter', trendingBoxBoxs);
}

for (const element of trendingBox2.children) {
  element.addEventListener('mouseleave', trendingBoxBoxs);
}

let count = 1;

const messageBoxEvent = (e) => {
  const messageBox = document.querySelectorAll('.message-box');
  const {
    target: { id },
  } = e;
  if (id === 'btn-left-customer-message') {
    if (count < 3) {
      messageBox.forEach((el) => {
        el.style.transform = `translateX(-${count * 100}%)`;
      });
      count++;
    }
  } else if (id === 'btn-rigth-customer-message') {
    if (count > 1) {
      count--;
      messageBox.forEach((el, i) => {
        el.style.transform = `translateX(${count * (i * count)}%)`;
      });
    }
  }
};

btnLeftCustomerMessage.addEventListener('click', messageBoxEvent);
btnRigthCustomerMessage.addEventListener('click', messageBoxEvent);
