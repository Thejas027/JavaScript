'use strict';

//----FLAT-Method
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // flat remove the nested arrays , no call back functions

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(1)); // the parameter signifies the depth of nested arrays
console.log(arrDeep.flat(2)); // arrDeep is of depth 2 where a nested array inside anothe nested with another nested array to get single array from this kind of nesteds the depth or how many nestings are there should be mentioned
