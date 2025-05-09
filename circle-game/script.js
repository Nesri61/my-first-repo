const circle = document.getElementById('circle');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
let score = 0;
let timeLeft = 30;

function randomPosition() {
  const gameArea = document.getElementById('game-area');
  const maxX = gameArea.clientWidth - 50;
  const maxY = gameArea.clientHeight - 50;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  circle.style.left = randomX + 'px';
  circle.style.top = randomY + 'px';
}

circle.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
  randomPosition();
});

function startGame() {
  const timer = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert(`Time's up! Your score is ${score}!`);
      circle.style.display = 'none';
    }
  }, 1000);
  randomPosition();
}

startGame();
