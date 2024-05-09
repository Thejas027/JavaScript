'use strict';

// another way of creating map

const question = new Map([
  ['question to all , which is the most used programming language','ques'],
  [1, 'C'],
  [2, 'cpp'],
  [3, 'java'],
  [4, 'js'],
  ['correct', 'js'],
  [true, 'correct'],
  [false, 'incorrect'],
]);

console.log(question);

// conversion of objects to maps
console.log('--------converting objects to maps------------');
const openingHrs = {
  thu: {
    open: 8,
    close: 22,
  },

  fri: {
    open: 10,
    close: 20,
  },
  sat: {
    open: 9,
    close: 21,
  },
};

const hoursMap = new Map(Object.entries(openingHrs)); // converts into a map form object

// since maps are iterable loops can be used
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}

//
const answer = question.get(4);
console.log(question.get(question.get('correct') === answer));

// converting map to array
console.log('--------coverted map to array-----------');
console.log([...question]);

// method to acces the key, values and entries from a map
console.log('------keys--------');
console.log([...question.keys()]);
console.log('------vlaues------');
console.log([...question.values()]);
console.log('------entries------');
console.log(question.entries());
