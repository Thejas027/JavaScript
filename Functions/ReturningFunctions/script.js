'use strict';

//program shows how does one function calls the other
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('Hey');
greetHey('Jonas');
greetHey('steven'); // output --> Hey steven

// another way to call the returinig function
greet('Hello')('jonas');

// writing it in arrow functions

const greetings = greet => name => {
  console.log(`${greet} ${name}`);
};

const greeted = greetings('Hi');
greeted('Thejas');

// the call and apply methods which can be done on this key word explicitly
console.log('\n\n--------The call and apply method section code..\n');
const lufthansa = {
  airLine: 'lufthansa',
  itacode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked seat on ${this.airLine} flight ${this.itacode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.itacode} ${flightNum},name` });
  },
};

lufthansa.book(2345, 'Thejas');

//
const eurowings = {
  airLine: 'EuroWings',
  itacode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// book(12345,'sara willams')  // this book function becomes a copy of lufthansa where at this point this key word points to undefined value

// this can be overcomed by , CALL method
console.log('\n\n\n-----------The call method---------------\n\n');
book.call(eurowings, 23, 'saraha willams'); // explicitly setting this keyword to eurowings
console.log(eurowings);

book.call(lufthansa, 98765, 'mary cooper'); //explicitly setting this keyword to lufthansa
console.log(lufthansa);

// the property should be same , exmaple : airLine , itacode , bookings are common name in all the flights
const swiss = {
  airLine: 'Siwss Air lines',
  itacode: 'sW',
  bookings: [],
};

book.call(swiss, 56, 'matilda');

// apply method
console.log('\n\n\n-----------Apply method-----------\n\n');
const flightdata = [342, 'george copper'];
book.apply(swiss, flightdata);
console.log(swiss);

// another method using call
book.call(swiss, ...flightdata);

//section : Bind method ,

// book.call(EuroWings , 34, 'jonas');

const bookEW = book.bind(eurowings);
const bookLF = book.bind(lufthansa);
const bookSW = book.bind(swiss);
bookEW(111, 'Jonas');
bookLF(222, 'Miche');
bookSW(333, 'Buttler');

// the below function where one parameter is always set
const bookEW23 = book.bind(eurowings, 23);

bookEW23('Chris Gayle');

// With event listeners
console.log('\n\n---With event listeneres-------\n\n');
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application , used to reset the parameters
console.log('---------Partial application -----------\n');
const addTax = (rate, value) => value + value * rate; // noraml way to find the tax

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // refers to adddVAT = value => value + value * 0.23;
console.log(addVAT(100));

//function returns the function

const addsTaxes = function (r) {
  return function (v) {
    console.log(v + r * v);
  };
};

const tax = addsTaxes(0.2);
tax(200);