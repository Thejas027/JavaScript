'use strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHrs: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 10,
      close: 20,
    },
  },

  //fucntion which returns the value on passing the value as parameter
  order: function (starterIdx, mainMenuIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainMenuIdx]];
  },

  // function with parameter only as obj weher while callig the properties can be added
  // even defalut values can also be setted as follow
  orderDeliery: function ({
    startIdx = 2,
    mainIdx = 1,
    addres = 'qwerty',
    time = '20:00',
  }) {
    console.log(
      `Ordered Recived! ${this.starterMenu[startIdx]} and ${this.mainMenu[mainIdx]} will be deliverd to ${addres} at ${time}`
    );
  },
};

// calling the above orderDeliverly object ,
console.log('\n\n---OrderDelivery Function method calling----\n\n');

//
restaurant.orderDeliery({
  time: '20:30',
  addres: 'xyz',
  startIdx: 2,
  mainIdx: 2,
});

// second time to show if any property value is not mentioned then the default value gets consoled here 
console.log("\n\n----Showing how default will be consoled----\n\n");
restaurant.orderDeliery({
      startIdx : 1,
      addres : "pqrs",
});

// curly brackets must be used and the name while destructuring should be the same name as it's in object
console.log(
  '\n\n-----Accessing the property with the same name as it in obj--------\n\n'
);
const { name, openingHrs, location } = restaurant;
console.log(
  `Name : ${name}
location : ${location}
`,
  openingHrs
);

//to change the property name
console.log('\n\n----Different Name to object property Name ----\n ');
const { name: restaurantName, location: Loc, openingHrs: timing } = restaurant;
console.log(restaurantName, timing, Loc);

// to set a defalut values to the already existing object
console.log('\n\n------Setting up of defalut values to a oject------\n');
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(`The new defalut menu :[${menu}]
The starter menu form already existing menu :[${starter}]
`);

// mutating the values
console.log('\n\n-----Mutating the values of the variable-----\n');
let a = 111;
let b = 999;
const obj = { a: 23, b: 34, c: 66 };
({ a, b } = obj);
console.log(a, b);

//Nested Objects
// accessing of the object inside another object  ex: opening hours of fri , where fri is an object inside another object
console.log('\n\n--------accessing the object inside the object-------\n\n');
// // method --1
// const {fri} = openingHrs;
// console.log(fri);
// to retrive only the number like opening and closing hrs of fri as : 11 23 ---> follow this method

// // method-2
// const {
//   fri: { open, close },
// } = openingHrs;
// console.log(open, close);

// method-3 changing the names as before above done

const {
  fri: { open: o, close: c },
} = openingHrs;
console.log(o, c);
