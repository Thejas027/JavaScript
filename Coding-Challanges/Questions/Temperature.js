'use strict';

/*
we work for a company building a smart home thermometer.Our most recent task is this : "given an array of temperature of a day,Calculate the temperature amplitude.Keep in mind that sometimes there might be a sensor error."

temperature amplitude : difference between highest and lowest temp in a given array 
*/

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

let highest = temperature[0],
  lowest = temperature[0];

for (let i = 0; i < temperature.length; i++) {
  if (temperature[i] > highest) highest = temperature[i];
  if (temperature[i] < lowest) lowest = temperature[i];
}
console.log(`max temp : ${highest} , min temp : ${lowest}`);
console.log(`the amplitude of a given temperature : ${highest - lowest}`);

// merging of two array
console.log('-------------------merging of two arrays in JS------------------');
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

const array3 = array1.concat(array2);
console.log(array3);

/*
                coding challange -3 form developer skills and editor setup

                                Coding Challenge #1

Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures.
 Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

 Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets.

2. Use the problem-solving framework: Understand the problem and break it up 
into sub-problems!

Test data:
 Data 1: [17, 21, 23]
 Data 2: [12, 5, -5, 0, 4
*/
console.log('coding challange - 3 ');
const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

function printForecast(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${array[i]}°C in ${i + 1} days....`);
  }
}

console.log(printForecast(arr1));
console.log(printForecast(arr2));
