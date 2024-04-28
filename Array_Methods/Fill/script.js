'use strict';

//methods of creating arrays using Array constructor
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const x = new Array(1, 2, 3, 4, 5, 6, 7, 8);

const newArr = new Array(7); // this creates the new array of size 7 with empty value with it

// the above newArr can be filled with elements using fill method on array

//--------fill method
// newArr.fill(1);   // fills the complete array with value 1

newArr.fill(1, 2); // fills the array with 1 from  index = 2 of newArr

newArr.fill(1, 2, 5); // fills the array with starting index = 2 and ends with index=5 of newArr

// fill method can be applied on already existing array conside arr,

// arr.fill(23, 2, 4);  // this will change the value of arr array to 23 from index = 2 to index = 5 , console it to see the results

//-------Array.form()---method
const y = Array.from({ length: 7 }, () => 1); // another constructor method to create a array , where a call back method is used
console.log(y); // this also creates a array of y with size 7 with values of 1 in it

// to generate the array of 1,2,3,4,5,6,7
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
