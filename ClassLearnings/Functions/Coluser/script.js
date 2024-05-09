'use strict';

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};

const booker = secureBooking();
booker();
booker();

// to see clouser
// console.dir(booker);  // check in the console

// some more examples on clouser
//Example - 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  let b = 77;
  f = function () {
    console.log(b * 4);
  };
};
g();
f(); // CLOUSER ,where the execution of function g() is over in call stack , but this golbally declared varible f assinged to a function so this has a access to the variable a , so on the call of f() we get output has 42 twice the value of function environment variable 'a' .

// Re-assiging of variable f ;

h();
f(); // at this point after reassiging the clouser that does not have the vlaue of a , here it holds the value of b ;

console.dir(f); // to inspect the scope of f , which vlaue does it holds

// Example - 2;

const boardPassenger = function (n, wait) {
  const pergroup = n / 3;

  setTimeout(function () {
    console.log(`we are boarding all ${n}passengers`);
    console.log(`there are 3 groups with ${pergroup} passengers`);
  }, wait * 1000);

  console.log(`we are boarding in ${wait} seconds`);
};

boardPassenger(30,3);
