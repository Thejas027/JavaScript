'use strict';

const Person = function (firstName, birthYear) {
  //Instances
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// callig of the object
const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('matidla', 2017);
console.log(matilda);

//proto types
//basic prototype inheritance
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

//to check weather the function is prototype,
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); //returns true

console.log(Person.prototype.isPrototypeOf(jonas)); //reatuns true
console.log(Person.prototype.isPrototypeOf(Person)); //returns false

Person.prototype.species = 'Home Spaiens'; // where the person does not holds the property of species but the prototype inside the person holds the property
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName')); //returns true
console.log(jonas.hasOwnProperty('species')); // returns false , this works because of prototype chain

console.log(jonas.__proto__.__proto__); // its a proto type of object

console.log(jonas.__proto__.__proto__.__proto__); // null, since the object is at the top of prototype chain

//
console.dir(Person.prototype.constructor); // constructor points back to the prototype

// workig with array
const arr = [1, 2, 2, 3, 4, 5, 3, 4, 5, 6, 7];

console.log(arr.__proto__); // to check the prototypes of array

// creating a new prototype on array where it can be applied on every array , as we are doing now like filter , map etc which are inbuilt

// creating a own prototype of unique.....
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); // gives the unique elements from array, where its of prototype
