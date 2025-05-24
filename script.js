let score = 0;
let powerUp1 = 1;
let autoPower = 0;

const scoreDisplay = document.getElementById("scoreDisplay");

document.getElementById("clickme").addEventListener("click", function () {
  score += powerUp1;
  scoreDisplay.textContent = score;
});

document.getElementById("powerUp1").addEventListener("click", function () {
  if (score >= 10) {
    score -= 10;
    powerUp1 += 1;
    scoreDisplay.textContent = score;
  }
});

document.getElementById("autoPower").addEventListener("click", function () {
  if (score >= 50) {
    score -= 50;
    autoPower += 1;
    scoreDisplay.textContent = score;
  }
});

setInterval(function () {
  score += autoPower;
  scoreDisplay.textContent = score;
}, 1000);