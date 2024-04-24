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

// Normal method to of accessing any property vlaue --> to check weather monday shop is open or not

if (restaurant.openingHrs && restaurant.openingHrs.mon)
  console.log(restaurant.openingHrs.mon.open);
else console.log('day not found');

// ------->WITH optional chaining
// console.log(restaurant.openingHrs.mon.open); // it directly gives the error in the code so to avoid use optional chaining
console.log(restaurant.openingHrs?.mon?.open); // if it exits it returns the value otherwise it returns undefined and null value

//----->Example
const weekdays = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'];

for (const day of weekdays) {
  // for of loop is used
  const open = restaurant.openingHrs[day]?.open ?? 'closed'; // openingHrs.day cannot be used since its not a property , so to access any varialbe use [], where and nullish operator is also used here to cover the edge case when shop opens at 0
  // so use nullish operator instead of || OR operator
  console.log(`on ${day} ,we open the resturant at ${open}`);
}

//----> it can be applied on methods also
console.log(restaurant.order?.(0, 1) ?? 'method does not exist'); // here also,nullish operator is used and optional chaining is also used where first it checks the method for order in resturant object if it exist then only it passes the parameter to it

console.log(restaurant.orders?.(0, 1) ?? 'method does not exist'); // method does not exist so it consoles 'method does not exist

//----->it can be used on Arrays also
const users = [{ name: 'joans', mail: 'hello@gmail.com' }];

// if (users.length > 0) console.log(users[0].name);
// else console.log('obj is empty');
// the above if,else can be written as below
console.log(users[0]?.name ?? 'Name of user is not mentioned');
