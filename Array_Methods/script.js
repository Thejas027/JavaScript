'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

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

currenciesUnique.forEach(function(value , key , set){
console.log(`${value}`)
});