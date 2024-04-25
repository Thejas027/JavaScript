'use strict';

// strings -1
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

// strings - 2
// methods in strings that convert it into upper or lowe case
console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

// example
// fixing the name of passenger
const passengerName = 'jOnAs';
const lowerName = passengerName.toLowerCase();
const correctName = lowerName[0].toUpperCase() + lowerName.slice(1);

//comparing emails
const email = 'hello@jonas.io';
const loginMail = '  Hello@Jonas.Io';

// to compare the mails , now follow the step to get truthy value
// const lowerMail = loginMail.toLowerCase();
// const trimmedMail = lowerMail.trim();

// above those 2 steps can be minimized into a single step
const normalizedMail = loginMail.toLowerCase().trim();
console.log(normalizedMail);

console.log(email === normalizedMail);

// replace
const priceGB = '298,45💷';
const priceUS = priceGB.replace(',', '.').replace('💷', '💵');
console.log(priceUS);

const annocument = 'All passangers comt to boarding door 23, boarding door 23';
console.log(annocument.replace('door', 'gate')); // observe the differece
console.log(annocument.replaceAll('door', 'gate'));

//using regular expression , it can be replaced
console.log(annocument.replace(/door/g, 'gate'));

//string methods that returns booleans
const planeName = 'Airbus AST320neo';
console.log(planeName.includes('Air'));
console.log(planeName.includes('Air'));
console.log(planeName.startsWith('A'));

if (planeName.startsWith('A') && planeName.endsWith('ne'))
  console.log('Its a plane name');
else console.log('It does not belongs to planes');

//practise execrise

const checkBaggage = function (item) {
  const bag = item.toLowerCase(); // converting the string into lowe case so comparison becomes easier
  if (bag.includes('knife') || bag.includes('gun'))
    console.log('you are not allowed to board');
  else console.log('welcome to our boarding');
};
checkBaggage('i have headphones,laptop and a charger');

checkBaggage(
  'i have laptop and some some snacks to eat and a gun for protection'
);

checkBaggage('i have some snacks and have a pocket Knife');

// STRINGS - 3

// divider method (SPLIT)
console.log('a+very+beautiful+day'.split('+')); // this gives array of strings
console.log('Jonas Schmedtmann'.split(' '));

// operations on strings and destructruing also done
const [firstName, lastName] = 'Jonas schmedtmann'.split(' ');

// JOIN METHOD TO JOIN THE TWO STRING VALUE
const newName = ['Mr.', firstName, lastName.toLowerCase()].join(' ');
console.log(newName);

// function that capatalizes the first letter af any name, where split and join methods of string are used
const captalizeName = function (name) {
  const names = name.split(' ');
  const nameUpper = [];

  for (const n of names) {
    // nameUpper.push(n[0].toUpperCase() + n.slice(1)); // method - 1
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));
};

captalizeName('thejas');
captalizeName('rohit sharama');

// padding in strings
const message = 'welcome to airport';

// PADSTART(N,' ');  used to add some string value at the start of the index , run and check once to know how it works
console.log(message.padStart(30, 'hi '));
console.log('Thejas'.padStart(12, 'HELLO '));

//PADEND(N , ''); used to add some string value at the end of string
console.log('HELLO '.padEnd(13, 'WELCOME'));

//COMBINATION OF BOTH PADSTART AND PADEND
console.log(
  'Bruh! '.padStart(15, ' Welcome').padEnd(34, ', Thnks for comming')
);

// real word example of padstart and padend
// credit card masking

const maskCreditCard = function (number) {
  // const str = String(number);   OR
  const str = number + ' ';
  const last = str.slice(-4);
  console.log(last.padStart(str.length, '*'));
};

maskCreditCard(123341341);
maskCreditCard('1345213453521');

// reapts the string value
const msg = 'Bad weather due to rain...All deparutre is delayed!! ';
console.log(msg.repeat(5));

// function on this 
const planesInLine = function(n){
  console.log(`${n} planes are delayed :${'✈️'.repeat(n)}`);
}

planesInLine(3);