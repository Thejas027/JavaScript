'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movements2 = [430, 1000, 700, 50, 90];
//checks only EQUALITY
console.log(movements.includes(-130));

//SOME : Condition
console.log(movements.some(mov => mov === -130)); // the above same equality checking can be written using some method also
//some returns true if any one value is true
const anyDeposits = movements.some(mov => mov > 1000);
console.log(anyDeposits);

//EVERY : condition
// returns true if every value of the condition is true only
console.log(movements.every(mov => mov > 0)); // returns false, since every element in a array is not greater than zero
console.log(movements2.every(mov => mov > 0)); // returns true, since every element in a array is greater than zero

//seperate call back functions
const deposit = mov => mov > 0;

console.log(movements.every(deposit));
console.log(movements.some(deposit));
console.log(movements.filter(deposit));
