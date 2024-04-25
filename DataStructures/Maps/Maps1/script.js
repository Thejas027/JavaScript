'use strict';

// simple js program , shows how maps can be used in javascript

const rest = new Map();

// method to add an vlaue to map, where the type may be of any data type
rest.set('name', 'Classico Italian'); // string type
rest.set(1, 'Freizen , Italy'); // int type
console.log(rest.set(2, 'Location 2')); // method of adding it directly in console statement
rest
  .set('categories', ['italian', 'pizeeries']) // an array(object) can also be added to map
  .set('open', 8)
  .set('close', 23)
  .set(true, 'returant is open : D') // boolean type
  .set(false, 'resturant is close:(');

// method to retrive the value
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

/*
This type of calling leads to undefined 
console.log(rest.get('true'));
console.log(rest.get('1'));
 */

// this shows how maps can be used , consider below example

const time = 22;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // gives the value of open and close based on the condition

console.log(rest.has('categories')); // returns true if present else false
rest.delete(1); // method to delete the value ;
console.log(rest.size); // gives the size of an object

// to clear the whole object
rest.clear();
console.log('-----to know if it exist even after clear------');
console.log(rest);

// objects can be used as map to keys
const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest.get(arr));
