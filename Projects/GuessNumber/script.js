'use strict';

// generates the secerete number
let secerteNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

// displayfunction
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// displayNumber function
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};


// the click section code
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');
  }

  //when the player wins
  else if (guess === secerteNumber) {
    displayMessage('🎉 Correct Number');
    displayNumber(secerteNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // when the guess is wrong
  else if (guess != secerteNumber) {
    if (score > 1) {
      displayMessage(guess > secerteNumber ? '📈 Too High!' : '📉Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});


// the click section of again button , restoring the page after winning
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secerteNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  displayNumber('?');
  document.querySelector('.guess').value = '';
});
