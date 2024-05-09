'use strict';

console.log('\n\n---------method-1---------------');
const Person = function (firstName, birthYear) {
  //Instances
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// calling the object
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

Person.prototype.species = 'Homo Spaiens'; // where the person does not holds the property of species but the prototype inside the person holds the property
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
//creating the classes in ES6

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
sarah.init('Sarah', 2003);
// sarah.calcAge();

/////////////////////////////////////////////////////////////////////////////////
//Inheritance between classes
console.log('\n\n---------Inheritance between classes');
console.log('\n\n-------------method -1\n\n');

//---------using constructor class
const person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  person.call(this, firstName, birthYear);
  this.course = course;
};

//linking prototypes
Student.prototype = Object.create(person.prototype);

Student.prototype.introduce = function () {   // creating the new property
  console.log(`hello i am ${this.firstName} and i do ${this.course}`);
};

const mike = new Student('Mike', 2020, 'cse');
console.log(mike);
mike.introduce();
mike.calcAge(); // because of linking the prototype this method can be called

console.log(Student.__proto__);
console.log(Student.__proto__.__proto__);

// this must return true, this gives the prototype chaining
console.log(Student instanceof Student);
console.log(Student instanceof person); // this gives true because of linking of prototypes
console.log(Student instanceof Object);

console.dir(Student.prototype.constructor);

/////////////////////////////////////////////////

//inheritance using ES6  classes
// getting inherited from the above personCll ES6 class
console.log('\n\n---------method-2 ');
class studentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`hey iam ${this.fullName} and i do ${this.course} course`);
  }
  //over riding the parent class method

  calcAge() {
    {
      console.log('I over rided the calc age method from the parent');
    }
  }
}

const martha = new studentCl('Martha Jones', 2012, 'CSE');
martha.introduce();
martha.calcAge();

/////////////////////////////////////
// method 3
// inherting the class form the parent class using object.create() method
//getting inhertied form the abvoe personPrototype class

console.log('\n\n----------method 3');

const StudentProto = Object.create(personProto);

// here init is a new property that will be created in a studentproto type object 

StudentProto.init = function (firstName, birthYear, course) {
  personProto.init.call(this, firstName, birthYear);  // method to inherit 
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`i am ${this.firstName} and i do ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2013, 'cse');
console.log(jay);
jay.introduce();
jay.calcAge();
