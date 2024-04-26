'use strict';

const arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE METHODS on ARRAY

console.log(arr.slice()); // creates the shell copy of a whole array
console.log(arr.slice(-2)); // gives the elements form the end
console.log(arr.slice(1, 4)); // starts with 1 and where 4th index will not be included
console.log(arr.slice(1)); // gives the elemets form the 1st array index
console.log([...arr]); // gives the shell copy of the arr

//SPLICE
console.log('\n\n--------SPLICE METHOD-------------\n\n');
// console.log(arr.splice(2));  // removes and returns the array part
arr.splice(-1); // removes the element form the end also
console.log(arr);

//REVERSE
console.log('\n\n----------Reverseing of Array----------\n\n');
const array = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());

// CONCAT
console.log('\n\n--------CONCATNATION OF ARRAY--------------\n\n');
console.log(array.concat(arr2));
console.log([...array, ...arr2]);

//join
console.log('\n\n----------join method---------\n\n');
console.log(array.concat(arr2).join(' - '));

//at method
console.log('\n\n----------At method------------\n\n');
console.log(array.at(1));

//getting the last element
console.log('\n\n-----------Last element-------------\n\n');
// console.log(array[array.length - 1]);
// console.log(array.slice(-1)[0]);
console.log(array.at(-1));

// for each loop
console.log('\n-------- FOREACH --------\n');
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.forEach(function (movement, index, array) {
  // function parameters have order to be followed , 1st element , 2nd index , 3rd whole array
  if (movement > 0)
    console.log(`movement ${index + 1} : deposited amount of ${movement} `);
  else console.log(`movement ${index + 1} : withdrew a amount of ${movement}`);
});

// for each on maps
console.log('\n\n---------forEach on maps--------------\n\n');
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

//for each on set
console.log('\n\n------foreach on sets------------\n\n');
const currenciesUnique = new Set(['USD', 'EURO', 'EURO', 'GBP']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, set) {
  console.log(`${value}`);
});
