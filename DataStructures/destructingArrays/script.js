'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // fuction which returns the value on passing the index
  order: function (starterIdx, maainMenuIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[maainMenuIdx]];
  },
};

// a example to show how destrcting can be used in normal array

const arr = [4, 5, 6];
const x = arr[0];
const y = arr[1];
const z = arr[3];

// instead of above method a single method can be made used like the following

const [a, b, c] = arr;
console.log(a, b, c); // this method of accessing is called destructing of arrays

// from resturant object

const [first, second] = restaurant.categories;
console.log(first, second); // output--> Italian , Pizzeria

// to access only first and third from categories
let [frst, , sec] = restaurant.categories;
console.log(frst, sec); //output --> Italian , Vegetarian

// // Switching variables  ---> normal method
// console.log('--swaping of two array index values from resturant object----')
// const temp = frst;
// frst = sec;
// sec = frst;
// console.log(frst,sec);

// using destructring array concept this can be done as ,
[frst, sec] = [sec, frst];
console.log(frst, sec);

// receving a 2 return values from a function
const [startMenu, mainCourse] = restaurant.order(2, 0);
console.log(
  `The item form StarterMeu "${startMenu}" and from Main course "${mainCourse} "`
);

// Nested destructring
// to acces the value form array inside the array
// 1.Normal Method

const nested = [2, 4, [6, 8]];

// const [i, , j] = nested;
// console.log(i, j);

// using destructor this can be done,
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 3];
console.log(p, q, r);
