'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroTousd = 1.1;

// const movementsUsd = movements.map(function (mov) {
//   return mov * euroTousd;
// });

const movementsUsd = movements.map(mov => mov * euroTousd);

// using for of loop
const movementsUsd2 = [];
for (const mov of movements) movementsUsd2.push(mov * euroTousd);

console.log(movementsUsd2);

//
const movementsDescerption = movements.map(
  (mov, i) =>
    `Movement ${i + 1} : You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescerption);
