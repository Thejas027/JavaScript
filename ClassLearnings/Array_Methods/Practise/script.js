'use strict';
//data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//1. To find the overall deposits form the movements > 0

// const bankDepositSum = accounts
//   .map(mov => mov.movements)
//   .flat()
//   .filter(mov => mov > 0)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(bankDepositSum);

const bankDepositSum = accounts
  .flatMap(mov => mov.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov);
console.log(`The total deposits on a bank : ${bankDepositSum}`);

//2. to find the count of deposits of atleast of 1000

//method - 1
// const countDeposits = accounts
//   .flatMap(mov => mov.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(countDeposits);

//method - 2
const countDeposits = accounts
  .flatMap(mov => mov.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(`The count of movements >= 100  : ${countDeposits}`);

//3. creating an obj using reduce method , where it contains the total deposit and withdrawals

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);  // method -1
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(
  `The total deposits to bank : ${deposits} and the total withdrawals : ${Math.abs(
    withdrawals
  )}`
);

//4. conversion of sentences first letter to uppercase
// eg: this is a nice title -> This Is a Nice Title

const convertedTitleCase = function (title) {
  const capatlize = str => str[0].toUpperCase() + str.slice(1);
  const expections = ['a', 'and', 'an', 'the', 'but', 'on', 'or', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (expections.includes(word) ? word : capatlize(word)))
    .join(' ');
  return capatlize(titleCase);
};

console.log(convertedTitleCase('This is a nice title'));
console.log(convertedTitleCase('this is a long title but not too long'));
console.log(convertedTitleCase('and here is an EXAMPLE of another title CASE'));
