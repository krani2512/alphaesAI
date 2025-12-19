"use strict";

/*console.log(document.getElementsByClassName("message"));
console.log(document.querySelector("p"));
console.log(document.querySelectorAll("p"));
console.log(document.querySelector(".message"));
console.log(document.querySelector("#message"));
console.log(document.getElementById("demo"));

const result = document.querySelector(".message");
const test = document.querySelector(".test");

console.log(result.innerHTML);
console.log(test.innerHTML);

 result.textContent = "Hi";
const input = +document.querySelector(".guess").value
console.log(typeof input);*/

// Selecting DOM elements
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const number = document.querySelector(".number");
const message = document.querySelector(".message");
const scoreLabel = document.querySelector(".score");
const highScoreLabel = document.querySelector(".highscore");
const guessInput = document.querySelector(".guess");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Function to display messages
const displayMessage = function (msg) {
  message.textContent = msg;
};

// Check button click
checkBtn.addEventListener("click", function () {
  const userGuess = Number(guessInput.value);

  // No input
  if (!userGuess) {
    displayMessage("⛔ No number entered!");
    return;
  }

  // Correct guess
  if (userGuess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    number.textContent = secretNumber;
    document.body.style.backgroundColor = "#16a34a"; // soft green
    number.style.width = "20rem";

    if (score > highScore) {
      highScore = score;
      highScoreLabel.textContent = highScore;
    }

  } else {
    // Wrong guess
    if (score > 1) {
      displayMessage(userGuess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      scoreLabel.textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      scoreLabel.textContent = 0;
      document.body.style.backgroundColor = "#991b1b"; // soft red
    }
  }
});
/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
*/
// Again button click
againBtn.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  scoreLabel.textContent = score;
  number.textContent = "?";
  guessInput.value = "";

  document.body.style.backgroundColor = "#f4f5f7"; // reset to neutral bg
  number.style.width = "14rem";
});
