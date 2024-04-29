'use strict';

//creating a date

const now = new Date();
console.log(now);

console.log(new Date('April 04 29'));

console.log(new Date(2037, 10, 270));

//working with the dates
const future = new Date(2037, 10, 19, 19, 35);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142256980000));

console.log(Date.now());

// year,month,day can also be set manually
future.setFullYear(2040);

//operations on dates
//subtractiomn can be done, gives how many days has been passed
console.log('\n\n--------Operations on dates');
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const day1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(day1);

//-----------Internationlizing date

console.log('\n\n-----------internationalizing date');
const Today = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  weekday: 'long',
};
const newDate = new Intl.DateTimeFormat('kn-IN', options).format(Today);
document.querySelector('.time').textContent = newDate;

const options2 = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  day: 'numeric',
  month: 'long', // displaying the month method is diffrent here
  year: 'numeric',
  weekday: 'long',
};
const newdate2 = new Intl.DateTimeFormat('en-US', options2).format(Today);
document.querySelector('.time-2').textContent = newdate2;

const options3 = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  day: 'numeric',
  month: '2-digit', // displaying month method is different
  year: '2-digit',
  weekday: 'long',
};

//to display the date and time based on browser, API
const locale = navigator.language;
console.log(locale);

const newdate3 = new Intl.DateTimeFormat(locale, options3).format(Today);
document.querySelector('.time-3').textContent = newdate3;

//-----------internationlize - 2
console.log('\n\n------internatioalize part -2 ');
const num = 3884764.23;

// basic formatting of numbers
console.log('US :      ', new Intl.NumberFormat('en-US').format(num));
console.log('Germany : ', new Intl.NumberFormat('de-De').format(num));
console.log('Kar-INDIA : ', new Intl.NumberFormat('kn-IN').format(num));
console.log(
  'browser : ',
  new Intl.NumberFormat(navigator.language).format(num)
);

// unit also can be defined
const option = {
  // style: 'unit', // unit,percent,currency
  unit: 'mile-per-hour',
  style: 'currency',
  currency: 'EUR',
  // useGrouping: false,
};

console.log('US :      ', new Intl.NumberFormat('en-US', option).format(num));
console.log('Germany : ', new Intl.NumberFormat('de-De', option).format(num));
console.log('Kar-INDIA : ', new Intl.NumberFormat('kn-IN', option).format(num));

//----------Timers , set time out and set interval

//setTimeOut method
const ingredeints = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`here is your pizza with ${ing1} and ${ing2} `),
  3000,
  ...ingredeints
); // it takes 3 seconds to console it, manually this has been set

console.log('waiting....'); // displays first and then the pizza delivered statement is executed

if (ingredeints.includes('spinach')) clearTimeout(pizzaTimer);

//setTimeInterval method
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000); // at console for every second the time gets displayed at console

//challange

setInterval(() => {
  const present = new Date();
  const hour = present.getHours();
  const min = present.getMinutes();
  const sec = present.getSeconds();
  console.log(`${hour} : ${min} : ${sec}`);
}, 1000);

//countdown time interaval
