'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // creating a new function where it shows how speed operator can be used

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is yous decelious pasta with ${ing1} ,${ing2} and ${ing3} ingredients`
    );
  },
};

const arr = [1, 2, 3];

// noraml method to add the elements to array
const newArr = [arr[0], arr[1], arr[2], 7, 8, 9];

// using speed operator
const newArrary = [...arr, 7, 8];
console.log(newArrary);
console.log(...newArrary); // this logs the array elements form newarray differnt output than the above

// accessing of already existing array form oject and adding up of new items
console.log('------Adding new element to object array------');
const newMenu = [...restaurant.mainMenu, 'Gonnci']; // Gonnci is a new item added to menu of resturant mainMenu array object
console.log(newMenu);

// spread operator can be used for --> 1. to copy 2.to merge new arrays
console.log('\n\n-----The use of Spread operator-----\n\n');
// copy of of array
const newMainMenuResturant = [...restaurant.mainMenu]; // copied
console.log(`1.The copy of main menu : [${newMainMenuResturant}]`);
//merging of 2 arrays
const arrayMerge = [...restaurant.starterMenu, ...restaurant.mainMenu]; // the main menu and starter main is merged
console.log(`
2.The merge array of starter and mainmenu : [${arrayMerge}]
`);

// shows how speed operator can be used on strings also
console.log(
  '\n\n-----Showing that spread operator can be used on strings as well------\n\n'
);
const str = 'Jonas';
const letter = [...str, '', 'S.'];
console.log(letter);
console.log(...letter); // gives the different output than the above

// the function orderpasta...
const ingredeints = ['a', 'b', 'c'];
console.log('\n\n-------calling spread operator on function------');
restaurant.orderPasta(...ingredeints);

//spread operator on objects
console.log('\n\n-----Creating a new oject using spread opeartor-----');
const newResturant = { foundedIn: 1991, ...restaurant, founder: 'Gusieppe' };
console.log(newResturant);

// to change the name only in copy object follow this
console.log(
  '\n---How to change the propety vlaue of only copy objects shown here----'
);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Rome';
console.log(restaurant.name); // gives the name of original resturant name
console.log(restaurantCopy.name); // gives the name of resturanCopy name
