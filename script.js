let score = 0;
let powerUp1 = 1;
let autoPower = 0;

const scoreDisplay = document.getElementById("scoreDisplay");

document.getElementById("clickme").addEventListener("click", function () {
  score += powerUp1;
  scoreDisplay.textContent = score;
  updateMeatSprite(score);
});

document.getElementById("powerUp1").addEventListener("click", function () {
  if (score >= 10) {
    score -= 10;
    powerUp1 += 1;
    scoreDisplay.textContent = score;
    updateMeatSprite(score);
  }
});

document.getElementById("autoPower").addEventListener("click", function () {
  if (score >= 50) {
    score -= 50;
    autoPower += 1;
    scoreDisplay.textContent = score;
    updateMeatSprite(score);
  }
});

setInterval(function () {
  score += autoPower;
  scoreDisplay.textContent = score;
  updateMeatSprite(score);
}, 1000);

function updateMeatSprite(score) {
  const meat = document.getElementById("meatMountain");

  let scale = 1;
  if (score >= 20) {
    scale = 4;
    meat.src = "Assets/Enverioment/mountainMeat (4).png";
  } else if (score >= 10) {
    scale = 3;
    meat.src = "Assets/Enverioment/mountainMeat (3).png";
  } else if (score >= 2) {
    scale = 2;
    meat.src = "Assets/Enverioment/mountainMeat (2).png";
  } else {
    scale = 1;
    meat.src = "Assets/Enverioment/mountainMeat (1).png";
  }
    meat.style.transform = `scale(${scale})`;

}


