`use strict`;

let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  userGuess = Number(document.querySelector('.guess').value);
  answerCheck();
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  randomNumber = Math.floor(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  score = 20;
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

randomMessage = [
  "✔ Wow that's correct!  ✨🎉🎊",
  '✔ You really know this game ha?? ✨🎉🎊',
  '✔ Congrats, another score for you. ✨🎉🎊',
];

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayScore(scoreD) {
  document.querySelector('.score').textContent = scoreD;
}

function answerCheck() {
  if (randomNumber === userGuess) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = randomNumber;
    randomMessageNumber = Math.floor(Math.random() * 3);
    displayMessage(randomMessage[randomMessageNumber]);
    score++;
    displayScore(score);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (!userGuess) {
    displayMessage(
      "You have to guess, that's what this game is all about. Duhh  ༼ つ ◕_◕ ༽つ"
    );
  } else if (randomNumber !== userGuess) {
    if (score > 1) {
      displayMessage(
        randomNumber > userGuess
          ? '📈 Guess higher! (¬‿¬) '
          : '📉 Guess lower. (¬_¬ )'
      );
      score--;
      displayScore(score);
    } else {
      document.querySelector('body').style.backgroundColor = 'darkred';
      displayMessage('You lost the game (┬┬﹏┬┬) ');
      displayScore('0');
    }
  }
}
