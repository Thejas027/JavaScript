'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//-----find method
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal); // gives the first element on satsifying the above condition

//------find index method
const idx = movements.findIndex(mov => mov === 1300); // gives the index value of an element in a array , not similar to indexOf(),
console.log(idx);
