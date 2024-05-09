'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFrstWord = function (str) {
  const [first, ...other] = str.split(' '); // destructuring the string
  return [first.toUpperCase(), ...other].join(' ');
};

// Higher order function

const transformer = function (str, fnx) {
  console.log(`The orignal string : ${str}`);
  console.log(`The Upper word fnx : ${fnx(str)}`); // calling a function inside the other function
};

transformer('JavaScript is just awesome!', upperFrstWord);
transformer('Javascript is just awesome!', oneWord);

// //JS calls back function all the time

// const high5 = function () {
//   console.log('👋');
// };
// create an html file add link script.js file then this output can be seen
// document.body.addEventListener('click', high5);

// ['A', 'B', 'C'].forEach(high5);
