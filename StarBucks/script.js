'use strict ';

// only modal window concept applied here 

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.modal-button');
const openModal = document.querySelector('.menu-btns');

const opnModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const clsModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

openModal.addEventListener('click', opnModal);

closeModal.addEventListener('click', clsModal);
overlay.addEventListener('click', clsModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) clsModal();
});

//
const learnMore = document.querySelector('.btns');

learnMore.addEventListener('click', opnModal);
