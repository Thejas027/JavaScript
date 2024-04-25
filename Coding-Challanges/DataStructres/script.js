'use strict';
// -----------------coding challange -1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.log('\n------------CODING CHALLANGE-1\n');

//TASKS AND THEIR SOLUTIONS
// 1. Create one player array for each team (variables 'players1' and 'players2')

const [player1, player2] = game.players;
console.log(`Team 1 players : [${player1}] 
Team 2 Players : [${player2}]
`);

//2.The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
const [gk1, ...fieldPlayers1] = player1;
const [gk2, ...fieldPlayers2] = player2;

console.log(
  `The gk of team 1 : #[${gk1}] 
  and remaining players are :  [${fieldPlayers1}]
  `
);

console.log(
  `The gk of team 2 : #[${gk2}] 
  and remaining players are : [${fieldPlayers2}]`
);

// 3. Create an array 'allPlayers' containing all players of both teams (22)  players
// const [...allPlayers] = game.players;
const allPlayers = [...player1, ...player2];
console.log(
  '\n\nplayers from Team 1 and Team2 : ' + '[' + allPlayers + ']\n\n'
);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'

const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perixic'];
console.log(
  `The final team of Team 1 is : [${players1Final}]
`
);

// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(`The team 1 odd score : ${team1}
x : ${draw}
Team 2 : ${team2},
`);

// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)

// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
console.log('----question-6-----------');
const printGoals = function (...numOfPlayer) {
  console.log(numOfPlayer.length + 'goals were scored');
};
printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator
team1 < team2 && console.log('Team 1 is likely to win the game '); // for team 1
team1 > team2 && console.log('Team 2 is likely to win thr game'); // for team 2

// ------------------------coding challange-2
/*

Let's continue with our football betting app! Keep using the 'game' variable from 
before.

Your tasks:
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)

3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names 

4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
*/
console.log('\n-------coding challange-2\n');

// 1. soultion
console.log('\n------solution-1\n');
for (const [i, goals] of game.scored.entries())
  console.log(`Goal ${i + 1} : ${goals}`);

//2.solution
console.log('\n------solution-2\n');
let average = 0;
let odds = Object.values(game.odds);
for (const odd of odds) average += odd;
average /= odds.length;
console.log(`The average of the odds : ${average} `);

//3.solution
console.log('\n------solution-3\n');
for (const [team, odds] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${team}`;
  console.log(`odd ${teamStr} : ${odds}`);
}

//bonus solution
let scorers = {};
for (const goals of game.scored)
  scorers[goals] ? scorers[goals]++ : (scorers[goals] = 1);

console.log(scorers);

/*
Coding Challenge #3

Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time).

Your tasks:
1. Create an array 'events' of the different game events that happened (no 
duplicates)

2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log.

3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)

4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL

*/
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🟡 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟡 Yellow card'],
]);
console.log('\n\n---------coding challange-3')
//1.solution
const events = new Set(gameEvents.values());
console.log(events);

//2.solution
gameEvents.delete(64);
console.log(gameEvents);
//3.solution 
const avg = 90 / gameEvents.size;
console.log(`An event had happened on average , every ${avg} minutes`);
//4.solution 
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] : ${event}`);
}
