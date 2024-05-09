'use strict';

/*
This js code gives how a js can be written in ES6 , what are the enhanced ways that are changed in ES6
1.how can one object can be called inside another object is shown below and even highlighed with the comments 
2.how a function can be written in ES6
3.how can a property can be computed instead of writting manually....
*/

const weekdays = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'];

openingHours = {
  [weekdays[1]]: {
    // instead of writing the val as mon , tues , this can be done in ES6
    open: 9,
    close: 20,
  },
  [weekdays[2]]: {
    open: 10,
    close: 21,
  },
  [`days-${3 + 1}`]: {
    // days-${3+1} === [weekdays[4]]
    // another way using literal also this can be done
    open: 0, // opens for 24 hrs
    close: 24,
  },
};

openingHrs = {
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

  //   openingHrs : openingHrs ,  in old javascript this is the method to call the an obj to another obj

  // ES6 , enhanced object literal
  openingHrs, // calling of an a openingHrs object in a resturant object

  // // calling of function in js
  //   orderPizza: function (mainIngeridents, ...otherIngeridents) {
  //     console.log(mainIngeridents);
  //     console.log(otherIngeridents);
  //   },

  // IN ES6 , function can also be declared as
  orderPizza(mainIngeridents, ...otherIngeridents) {
    console.log(mainIngeridents);
    console.log(otherIngeridents);
  },
};
