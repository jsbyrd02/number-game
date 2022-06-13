// Global Variables
let cpuNumber;
let score = 0;
let rickroll = true;

// Selectors
const numberInput = document.querySelector(".number-input");
const numberButton = document.querySelector(".number-button");
const userStatus = document.querySelector(".user-status");
const userScore = document.querySelector(".score");
const resetContainer = document.querySelector(".reset-container");

// Event Handlers
document.addEventListener("DOMContentLoaded", generateNumber);
numberButton.addEventListener("click", checkNumber);
resetContainer.addEventListener("click", resetGame);






// Functions
function generateNumber() {
  // Generate Random Number from 1 to 100
  cpuNumber = Math.floor(Math.random() * 100) + 1;
  console.log(cpuNumber);
}

function checkNumber(e) {
  e.preventDefault();
  let userGuess = numberInput.value;
  userGuess = parseInt(userGuess);

  updateScore();

  // Check for Valid Inputs (Int from 1-100)
  if (isNaN(userGuess))
  {
    alert("Please enter an actual number...");
    numberInput.value = "";
    return;
  }
  if (userGuess < 1 || userGuess > 100)
  {
    alert("Please enter a valid number between 1 and 100");
    numberInput.value = "";
    return;
  }

  // Higher / Lower / Winner
  if (userGuess < cpuNumber) {
    let itIsHigher = `<i class="fa-solid fa-angles-up"></i>
    <i>&nbspMy number is bigger than ${userGuess}&nbsp</i>
    <i class="fa-solid fa-angles-up"></i>`
    userStatus.innerHTML = itIsHigher;
    numberInput.value = "";
  }
  else if (userGuess > cpuNumber) {
    let itIsLower = `<i class="fa-solid fa-angles-down"></i>
    <i>&nbspMy number is smaller than ${userGuess}&nbsp</i>
    <i class="fa-solid fa-angles-down"></i>`
    userStatus.innerHTML = itIsLower;
    numberInput.value = "";
  }
  else {
    let winner = `<i class="fa-solid fa-trophy"></i>
    <i>&nbspYou guessed correctly! &nbsp</i>
    <i class="fa-solid fa-trophy"></i>`
    userStatus.innerHTML = winner;

    // Show "Reset" Button
    const resetButton = `<button class="reset-button">Reset</button>`;
    resetContainer.innerHTML = resetButton;
    // Deactivate numberButton
    numberButton.disabled = true;
    numberButton.style.cursor = "default";
  }
}

function updateScore() {
  score++;
  let updatedScore = `Score: ${score}`
  userScore.innerText = updatedScore;
}

function resetGame(e) {
  const target = e.target;
  if (target.classList[0] === "reset-button") {
    // Rick Roll Baby
    if (rickroll) {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");
    }
    // Change Numbers
    generateNumber();
    score = 0;
    userScore.innerText = `Score: ${score}`
    // Reactivate numberButton
    numberButton.disabled = false;
    numberButton.style.cursor = "pointer";
    // Remove Status
    userStatus.innerText = "";
    // Remove Input
    numberInput.value = "";
    // Remove Reset Button
    resetContainer.childNodes[0].remove();
  }
}