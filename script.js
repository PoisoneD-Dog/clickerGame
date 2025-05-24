

let score = 0;
let powerUp1 = 1;
let autoPower = 0;
const scoreDisplay = document.getElementById("scoreDisplay");
const powerUp1Display = document.getElementById("powerUp1");
const autoPowerDisplay = document.getElementById("autoPower");
// This is a simple JavaScript file that adds an event listener to a button
// and displays an alert with the value of an input field when the button is clicked.
document.getElementById("clickme").addEventListener("click", function() {
    score+=powerUp1;
    scoreDisplay.textContent = "Score: " + score;
    
});

document.getElementById("powerUp1").addEventListener("click", function() {
    if (score >= 10) {
        score -= 10;
        powerUp1 += 1;
        scoreDisplay.textContent = "Score: " + score;
    } else {
    }
    
});

document.getElementById("autoPower").addEventListener("click", function() {
    if (score >= 50) {
        score -= 50;
        autoPower += 1;
        scoreDisplay.textContent = "Score: " + score;
    } else {
    }
    
}
);
// This function updates the score display every second
// and adds the autoPower to the score.
setInterval(function() {
    score += autoPower;
    scoreDisplay.textContent = "Score: " + score;
}, 1000);