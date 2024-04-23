'use strict';

//Spread , because of right side on =
const arr = [1, 2, ...[3, 4]];

// Rest , because of left side on =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// perfroming rest operation on objects

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
  // another function to show how it works
  orderPizza: function (mainIngeridents, ...otherIngeridents) {
    console.log(mainIngeridents);
    console.log(otherIngeridents);
  },
};

// rest element should be the last element,and there can be one Rest in any destructuring assigement
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// performing on object inside a object
const { fri, ...weekdays } = restaurant.openingHrs;
console.log(fri, weekdays);

// on functions
console.log('\n\n-----Spread and Rest operator on a function--------\n');
const add = function (...numbers) {
  // ...numbers is a Reset operator where taking a multiple parameter and repacking takes place
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

const x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
add(...x); // spread operator where packing takes place

// ordre pizza function where structuring takes place
restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
