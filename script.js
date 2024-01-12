'use strict';
var number = Math.trunc(Math.random() * 20) + 1;
var score = 20;
var highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  var guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  } else {
    if (score != 0) {
      if (guess > number) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = '📈 Too high!';
      } else if (guess < number) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = '📉 Too low!';
      } else {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.body.style.backgroundColor = 'green';
        document.querySelector('.number').textContent = number;
        if (highscore < score) {
          highscore = score;
          document.querySelector('.highscore').textContent = score;
        }
      }
    } else {
      document.querySelector('.message').textContent = 'You Lost';
      document.querySelector('.guess').value = '';
      document.querySelector('.number').textContent = number;
      document.querySelector('.again').click;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.body.style.backgroundColor = '#222';
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'start guessing';
});
