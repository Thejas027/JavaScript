'use strict';

//////////////// execution of call back funtions,where it microtasks are used
// prirority of micro tasks event is greater than the other call back functions
console.log('Test start');
setTimeout(() => console.log('Timer 0'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
console.log('Test end');

// creating new promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('lottery draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN money');
    } else {
      reject(new Error('You lost the money'));
    }
  }, 2000);
});

//consuming the promise
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// promisifyying setTimeout

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const waitArrow = sec =>
  new Promise(resolve => setTimeout(resolve, sec * 1000));

wait(2)
  .then(() => {
    console.log(`I waited 2 seconds`);
    return wait(1);
  })
  .then(() => console.log('i waited for 2 seconds'));
waitArrow(2).then(console.log(`I have been waititng for 2 seconds `));

// the below reslove and reject gives output immeadetiely,
// where before this multitask event will be executed
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).then(x => console.error(x));
