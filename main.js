let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  let choice = prompt("Choose: Rock, Paper, or Scissors.");
  if (choice.toLowerCase().trim() === "rock") {
    return "rock";
  } else if (choice.toLowerCase().trim() === "paper") {
    return "paper";
  } else if (choice.toLowerCase().trim() === "scissors") {
    return "scissors";
  } else {
    alert("You didn't pick any of the options given...");
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    return "You lose! Paper beats Rock.";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "You win! Paper beats Rock.";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "You win! Scissors beats Paper.";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    return "You lose! Scissors beats Paper.";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "You win! Rock beats Scissors.";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return "You lose! Rock beats Scissors.";
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();