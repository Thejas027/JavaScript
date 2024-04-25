'use strict';

const airLine = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log('B737'[0]);

console.log(airLine.length);
console.log('B737'.length);

console.log(airLine.indexOf('r'));
console.log(airLine.lastIndexOf('r'));
console.log(airLine.indexOf('Portugal'));
console.log(airLine.slice(4)); // gives the substring part from a airLine string
console.log(airLine.slice(4, 7));
console.log(airLine.slice(0, airLine.indexOf(' ')));
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));
// slice can take negative parameter also
console.log(airLine.slice(-8));
console.log(airLine.slice(4, -1));

// function where slice is used
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('its a middle seat.😒');
  else console.log('You got Lucky.😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('12W');
checkMiddleSeat('13E');

// methods in strings that convert it into upper or lowe case
console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

// example
// fixing the name of passenger
const passengerName = 'jOnAs';
const lowerName = passengerName.toLowerCase();
const correctName = lowerName[0].toUpperCase() + lowerName.slice(1);
