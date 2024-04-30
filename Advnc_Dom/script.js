'use strict';

//---------------------selecting elements

// these are special elments no need to write query selector
console.log(document.documentElement);
console.log(document.body);
console.log(document.head);

//selecting only one particular btn class
document.querySelector('.btns');
document.querySelector('#btn');
//selecting all the buttons with class name and id name
document.querySelectorAll('.btns');
document.querySelectorAll('#btn');

//selecting the element by id name only
document.getElementById('btn');

//getting the class and ids from html
document.getElementsByTagName('button');
document.getElementsByClassName('btns');

//-------------------creating and inserting elements , from bankist project
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); // adds at the start of the tag
header.append(message); // adds at the ends of the tag
// header.append(message.cloneNode(true));   // where at this method ,it get appeneded and prepended

// header.before(message);  //same as prepend
// header.after(message);    // same as append

// Delete elements, from DOM
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

// Styles, Attributes and Classes

// Styling can be done using dom attributes
//reference form bankistMarketPage file
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered'); //changing the color property value from already existing value

// Attributes
const logo = document.querySelector('.nav_logo');
console.log(logo.alt); // returns the alt vlaue of logo
console.log(logo.className); // retuns the classname of the logo

logo.alt = 'Beautiful minimalist logo'; // changing the alt value of already existing image usig dom attributes

// Non-standard
console.log(logo.designer); // undefined , where its not a global property to call
console.log(logo.getAttribute('designer')); // setting a property value using DOM
logo.setAttribute('company', 'Bankist'); // a new property of 'company' added to log attribute

// Data attributes
console.log(logo.dataset.versionNumber);

// types of Classes in list and showing that any number of parameters can be passed
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// Don't use
// logo.clasName = 'jonas';  // changes the whole property name in program

//----------Types of events and event handlers

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};

h1.addEventListener('mouseenter', alertH1); //method to add a listener

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); // method to remove the added event

//---Another type of event called 'onmouseenter' demo , 
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };
