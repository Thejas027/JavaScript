'use strict';

/*

////Coding Challenge #1

Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each). For 
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years 
old.

Your tasks:

Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the first and the last two dogs actually have 
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
ages from that copied array (because it's a bad practice to mutate function 
parameters)

2. Create an array with both Julia's (corrected) and Kate's data

3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy ")

4. Run the function for both test datasets

Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/

const julisData = [9, 16, 6, 8, 3];
const katesData = [10, 5, 6, 1, 4];

console.log('\n--------coding challange 1');
const checkDogs = function (dogsJulia, dogsKate) {
  const julisCorrected = dogsJulia.slice();
  julisCorrected.splice(0, 1);
  julisCorrected.splice(-2);

  const dogsJulisKate = julisCorrected.concat(dogsKate);
  dogsJulisKate.forEach(function (dog, dogidx) {
    if (dog >= 3)
      console.log(
        `Dog number ${dogidx + 1} is an adult, and is ${dog} years old`
      );
    else console.log(`Dog number is ${dogidx + 1} is still a puppy`);
  });
};
checkDogs(julisData, katesData);

/*
Coding Challenge #2

Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is 
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4

2. Exclude all dogs that are less than 18 human years old (which is the same as 
keeping dogs that are at least 18 years old)

3. Calculate the average human age of all adult dogs (you should already know 
from other challenges how we calculate averages �)

4. Run the function for both test datasets

Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));

  const adult = humanAge.filter(function (age) {
    return age > 18;
  });
  console.log(humanAge);
  console.log(adult);

  const average = adult.reduce((acc, age) => acc + age, 0) / adult.length;
  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1);
console.log(avg2);
/*
Coding Challenge #3

Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time 
as an arrow function, and using chaining!

Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

const calcAverageHumanAge2 = function (ages) {
  const humanAge = ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age > 18)
    .reduce((acc, curr, idx, array) => acc + curr / array.length, 0);
  return humanAge;
};

const humanAge1 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
const humanAge2 = calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);
console.log(humanAge1);
console.log(humanAge2);

/*
Coding Challenge #4

Julia and Kate are still studying dogs, and this time they are studying if dogs are 
eating too much or too little.

Eating too much means the dog's current food portion is larger than the 
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% 
above and 10% below the recommended portion (see hint).

Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate 
the recommended food portion and add it to the object as a new property. Do 
not create a new array, simply loop over the array. Forumla: 
recommendedFood = weight ** 0.75 * 28. (The result is in grams of 
food, and the weight needs to be in kg)

2. Find Sarah's dog and log to the console whether it's eating too much or too 
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in 
the owners array, and so this one is a bit tricky (on purpose) �

3. Create an array containing all owners of dogs who eat too much 
('ownersEatTooMuch') and an array with all owners of dogs who eat too little 
('ownersEatTooLittle').

4. Log a string to the console for each array created in 3., like this: "Matilda and 
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat 
too little!"

5. Log to the console whether there is any dog eating exactly the amount of food 
that is recommended (just true or false)

6. Log to the console whether there is any dog eating an okay amount of food 
(just true or false)

7. Create an array containing the dogs that are eating an okay amount of food (try 
to reuse the condition used in 6.)

8. Create a shallow copy of the 'dogs' array and sort it by recommended food 
portion in an ascending order (keep in mind that the portions are inside the 
array's objects �)
*/
console.log('\n\n-----------coding challange -4');
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1.
console.log('\n\n------1.');
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

//2.
console.log('\n\n------2.');
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog);

console.log(
  `Sarahs dog is eating too ${
    sarahDog.curFood > sarahDog.recFood ? 'much' : 'little'
  } `
);
//3.
console.log('\n\n-----3.\n');
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.recFood > dog.curFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooLittle);
//4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eats too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

//5.
const exactFood = dogs.some(dog => dog.recFood === dog.curFood);
console.log(exactFood);

//6.

const okayFood = dogs.some(
  dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
);

console.log(okayFood);

//7.

const ownersOkayFood = dogs.filter(
  dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
);

console.log(ownersOkayFood);

//8.
const dogSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogSorted)
