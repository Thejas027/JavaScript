'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const tabs = document.querySelectorAll('.operations_tab');
const tabContainer = document.querySelector('.operations_tab-container');
const tabContent = document.querySelectorAll('.operations_content');

const nav = document.querySelector('.nav');
////////////////////////
//modal window , Open account
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////
// smooth scrolling of learn more button
btnScrollTo.addEventListener('click', function (e) {
  //get the cor-ordinates
  const s1coords = section1.getBoundingClientRect();

  // some methods that return co-ordinates of page
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('current scroll (X/Y) : ', window.pageXOffset, window.pageYOffset);
  // console.log(
  //   'height and width of current port : ',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  //method1
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  //method2
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

/////////////////////////
//Page navigation

//Method 1 , good but it creates, 3 copies for each nav
// const pageNavigator = document.querySelectorAll('.nav_link');
// pageNavigator.forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href'); // getAttribute is used because, to select only the herf.
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//method2,
// the above problem can be solved by,
//Event delegation method
//steps
//1.add event listener to common parent element
//2.Determine what element originated the event
document.querySelector('.nav_links').addEventListener('click', function (e) {
  e.preventDefault();
  // mataching startergy
  if (e.target.classList.contains('nav_link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/////////////////////////
//Tabbed content

//event delegation method
tabContainer.addEventListener('click', function (e) {
  //matching startergy
  const clicked = e.target.closest('.operations_tab');

  //Guard clause
  if (!clicked) return;

  //removing the active classes
  tabs.forEach(t => t.classList.remove('operations_tab--active'));
  tabContent.forEach(c => c.classList.remove('operations_content--active'));

  //active tab
  clicked.classList.add('operations_tab--active');

  //active content area
  document
    .querySelector(`.operations_content--${clicked.dataset.tab}`)
    .classList.add('operations_content--active');
});

//////////////////////////
//menu fade animation

//refactoring the code

const handelHover = function (e) {
  if (e.target.classList.contains('nav_link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav_link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
      logo.style.opacity = this;
    });
  }
};

//passing "argument" into handler
nav.addEventListener('mouseover', handelHover.bind(0.5));
nav.addEventListener('mouseout', handelHover.bind(1));
