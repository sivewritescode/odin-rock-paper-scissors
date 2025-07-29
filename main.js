function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    console.log("You lose! Paper beats Rock.");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("You win! Paper beats Rock.");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log("You win! Scissors beats Paper.");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    console.log("You lose! Scissors beats Paper.");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log("You win! Rock beats Scissors.");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    console.log("You lose! Rock beats Scissors.");
  }
}

let humanScore = 0;
let computerScore = 0;

let rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {

  playRound("rock", getComputerChoice());

  console.log(`Human Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}\n\n`);
});

let paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {

  playRound("paper", getComputerChoice());

  console.log(`Human Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}\n\n`);
});

let scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {

  playRound("scissors", getComputerChoice());

  console.log(`Human Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}\n\n`);
});