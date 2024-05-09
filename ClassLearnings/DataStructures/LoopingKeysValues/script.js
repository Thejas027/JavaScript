'use strict';

const openingHrs = {
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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

// property Names
console.log('--------accesing of an propety values-----------');
const properties = Object.keys(openingHrs);
let openStr = `reasturant are open at ${properties.length} days`;

for (const day of properties) openStr += ` ${day},`;
console.log(openStr);

//property values
console.log('-------accessing the values of an property values --------');
const values = Object.values(openingHrs);
console.log(values);

// Entire object
console.log('-----accessing the entries of an entire object--------');
const entries = Object.entries(openingHrs);
// console.log(entries);

// for (const x of entries) console.log(x);
// [key,value] in looping
for (const [day, { open, close }] of entries) // destructring of a an object taking place
  console.log(`On ${day} we open at ${open} and closes at ${close}`);
