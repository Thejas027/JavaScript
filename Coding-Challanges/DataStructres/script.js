'use strict';

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
