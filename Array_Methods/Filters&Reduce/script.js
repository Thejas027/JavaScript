'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// below codes shows how the filter works, where the movements array gets filtered to give only the movements greatere than zero
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

// using arrow function , since its the best method, gives an idea on how the call back function works
const depositArrow = movements.filter(mov => mov > 0);
console.log(depositArrow);

// using for of loop
const depositFor = [];
for (const mov of movements) if (mov > 0) depositFor.push(mov);
console.log(depositFor);

//  array of withdraws
const withdraws = movements.filter(mov => mov < 0);
console.log(withdraws);

//-----------------------REDUCE METHODS--------------------

const balance = movements.reduce(function (acc, curr, idx, arr) {
  return acc + curr;
}, 0);
console.log(balance);

// // using the for of loop
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // using arrow function also it can be written
// const bal = movements.reduce((acc, curr) => acc + curr , 0);
// console.log(bal);

//------------------- gives the total deposit of a movements array
const totalDeposit = movements.reduce(function (acc, curr) {
  if (curr > 0) return acc + curr;
  return acc;
}, 0);
console.log(totalDeposit);

//----------------------- gives the total withdraws of movements array
const totalwithdrawls = movements.reduce(function (acc, curr) {
  if (curr < 0) return acc + curr;
  return acc;
}, 0);
console.log(totalwithdrawls);
//another way of finding the total withdrawals
const totWithdrawls = console.log(balance - totalDeposit);

//-------------some other stuffs using reduce method
// to find the maximum in a movement array or any array
const maxelement = movements.reduce((acc, cur) => {
  if (acc < cur) acc = cur;
  return acc;
}, 0);

console.log(maxelement);

//chaning of methods

const totalDepositBal = movements
  .filter(mov => mov > 0)
  .map(mov => mov * 1.1)
  .reduce((acc, curr) => acc + curr, 0);

console.log(totalDepositBal);
