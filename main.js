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
    results.textContent = "It's a tie!";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    results.textContent = "You lose! Paper beats Rock.";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    results.textContent = "You win! Paper beats Rock.";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    results.textContent = "You win! Scissors beats Paper.";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    results.textContent = "You lose! Scissors beats Paper.";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    results.textContent = "You win! Rock beats Scissors.";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    results.textContent = "You lose! Rock beats Scissors.";
  }
}

let humanScore = 0;
let computerScore = 0;

let rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {

  playRound("rock", getComputerChoice());

  humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore}\n\n`;

  if (humanScore === 5) {
    tournamentWinnerDisplay.textContent = "You won the whole tournament! :)";
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    tournamentWinnerDisplay.textContent = "You lost the tournament! :(";
    humanScore = 0;
    computerScore = 0;
  }
});

let paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {

  playRound("paper", getComputerChoice());

  humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore}\n\n`;

  if (humanScore === 5) {
    tournamentWinnerDisplay.textContent = "You won the whole tournament! :)";
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    tournamentWinnerDisplay.textContent = "You lost the tournament! :(";
    humanScore = 0;
    computerScore = 0;
  }
});

let scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {

  playRound("scissors", getComputerChoice());

  humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore}\n\n`;

  if (humanScore === 5) {
    tournamentWinnerDisplay.textContent = "You won the whole tournament! :)";
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    tournamentWinnerDisplay.textContent = "You lost the tournament! :(";
    humanScore = 0;
    computerScore = 0;
  }
});

let results = document.querySelector("#results");
let humanScoreDisplay = document.querySelector("#human-score");
let computerScoreDisplay = document.querySelector("#computer-score");
let tournamentWinnerDisplay = document.querySelector("#tournament-winner");