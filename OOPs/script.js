'use strict';

console.log('\n\n---------method-1---------------');
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

//----------------------- method-2
//creating the classed in ES6

// class expression
// const PersonCl = class {};

// class declaration

console.log('\n\n---------method-2---------------');
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //instance methods
  //method will be added to prototype , property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  // getter method usage , its also an prototype
  get age() {
    return 2037 - this.birthYear;
  }

  // set a propety on already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //static methods
  static hey() {
    console.log('Hey there ');
  }
}

// calling a class with new keyword
const jessica = new PersonCl('Jessice Willams', 1999);
jessica.calcAge();
console.log(jessica);

// const walter = new PersonCl('walter', 2000);

//---------calling the static methods
PersonCl.hey();

//console.log(jessica.__proto__ === PersonCl.prototype);

// //even methods can be created using prototype keyword as follow,
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
// jessica.greet();

// getter method
console.log(jessica.age);

// example of setters and getters method

const account = {
  owner: 'Jonas',
  movements: [200, 530, 130],

  // getter method
  get latest() {
    return this.movements.slice(-1).pop();
  },

  //setter method an parameter must be passed
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // getting the value

//setting the value
account.latest = 90;
console.log(account.movements); //---> 90 will be added to movements array of account

//-----------method-3
// creating a class using object.create() method

// no constructor function and no new operator on calling this object
console.log('\n\n---------method-3---------------');
const personProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(personProto); // this returns a new object
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

//
const sarah = Object.create(personProto);
init('Sarah', 2003);
sarah.calcAge();
