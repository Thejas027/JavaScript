'use strict';

// to see their working just copy and paste it on the bakistmarketpage js file

//------FUNDAMENTALS OF DOM TRAVESSING , childs,parent,siblings, where it the below code gives how the property can also be changed using this

///////

const h1 = document.querySelector('h1');

//Going downwards : children
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes); //gives every single node that exist in the node list of h1
console.log(h1.children); // gives only the elements of h1 (works for only direct children)
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'red'; // using child node name the property vlaue can also be changed

//Going upwards : parent
console.log(h1.parentNode);
console.log(h1.parentElement);

// parent is too far, then closet property can be used
h1.closest('.header').style.background = 'var(--gradient-secondary)'; //commonly used in event delegation method
h1.closest('h1').style.background = 'var(--gradient-primary)';

//querySelector() finds the childern how far the deep may be, downwards whereas closest() finds the parent no matter how far up the dom tree

//Going sideways : siblings
console.log(h1.previousElementSibling); // gives the sibling elments of h1
console.log(h1.nextElementSibling);

// to get all the siblings
console.log(h1.parentElement.children);

// they can be spreaded using spread operator and can be looped on it
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)'; //changes the size
});
