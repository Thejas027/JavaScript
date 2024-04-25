'use strict';

// set is a collection of unique values , where it does not conatins any duplicates

// creating a set
//method - 1
const orderFood = new Set(['risstto', 'pasta', 'pizza', 'pasta']);
console.log(orderFood);

// method - 2
console.log(new Set('jonas')); // each letter will be considered as a object

// console.log(orderFood.size); // gives the size of any object

console.log(orderFood.has('pizza')); // if the argumnet presnet it returns truthy value else falsy value will be returned
console.log(orderFood.has('risstto'));

//method to add into set
orderFood.add('garlic bread');
orderFood.add('garlic bread');
console.log(orderFood); // twice added but only once it gets added to set

// method to delete
orderFood.delete('risstto');
console.log(orderFood);

// conversion of array to set
const staff = ['waiter', 'chef', 'waiter', 'manager', 'waiter']; // array
const staffUnique = new Set(staff); // set

// conversion of set to array
const stafUnique = [...new Set(staff)];

// gives all the unique element values
console.log(new Set('Jonassechadtmann').size);
