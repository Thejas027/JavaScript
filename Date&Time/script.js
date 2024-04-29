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
