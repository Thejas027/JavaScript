'use strict';

//conversions
console.log(Number('23'));
console.log(+'23');

//parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat('2.5rem'));

//check if a vale isNaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

//checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

//isInteger checking
console.log(Number.isInteger(23));
console.log(Number.isInteger('23.0'));
console.log(Number.isInteger(23.9));
console.log(Number.isInteger(23 / 0));

//-------------Math and RoundOff

//To find the squreRoot
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3)); // only way to find the cube root of a number

// maximum of a number

console.log(Math.max(4, 23, 45, 1, 2, 3, 7));

console.log(Math.max(4, 23, '45', 1, 2, 3, 7)); //output -->45
console.log(Math.max(4, 23, '45px', 1, 2, 3, 7)); //output-->NaN

//minimum of a number
console.log(Math.min(123, 4, 1, 6, 7, 8));

//some constant values
console.log(Math.PI); // gives the value of pi = 3.14322

// to calculte the area of circle
console.log(Math.PI * Number.parseFloat('10px') ** 2);

//general formula to get a random number between 2 numbers

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20)); // when this is called the function generates the random numbers between 10 to 20

//Rounding integers

console.log(Math.round(23.3)); // output --> 23
console.log(Math.round(23.9)); // output -->24

console.log(Math.ceil(23.3)); // ouptut --> 24
console.log(Math.ceil(23.9)); //output --> 24

console.log(Math.floor(23.3)); //output --> 23
console.log(Math.floor(23.9)); //output --> 23

console.log(Math.trunc(-23.4)); //ouptut--> -23
console.log(Math.floor(-23.3)); //output--> -24

//Rounding decimals
console.log((2.7).toFixed(0)); // toFixed() always returns a string not a number
// actully the argumnet passed inside, says how many decimal value should it must be returned , it always rounds off the number before returning it
console.log((2.345).toFixed(2)); // output --> 2.35

// to convert this string to a number
console.log(+(2.345).toFixed(2)); // this returns a number

//Reaminder operator
// function that retuns weather a number is even or not

const isEven = n => n % 2 === 0; // returns ture is its a even number 

console.log(isEven(2));
