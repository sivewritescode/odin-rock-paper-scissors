function getComputerChoice() {

  let rndNum = Math.floor(Math.random() * 3); 

  if (rndNum === 0) {
    return "Rock"; 
  } else if (rndNum === 1) {
    return "Paper"; 
  } else if (rndNum === 2) {
    return "Scissors"; 
  }
}

function getHumanChoice() {

  let input = prompt("Choose: Rock, Paper, or Scissors");
  let choice = input.trim().toLowerCase(); 

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice.charAt(0).toUpperCase() + choice.substring(1, choice.length); 
  } else {
    return "Invalid input, choose one of the options."; 
  }
}

let humanScore = 0; 
let computerScore = 0; 

function playRound(humanChoice, computerChoice) {

  if (humanChoice === "Paper" && computerChoice === "Rock") {
    humanScore++; 
    console.log("You win! Paper beats Rock."); 
  } else if (humanChoice === "Rock" && computerChoice === "Paper") {
    computerScore++; 
    console.log("You lose! Paper beats Rock."); 
  } else if (humanChoice === "scissors" && computerChoice === "Rock") {
    computerScore++; 
    console.log("You lose! Rock beats Scissors."); 
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    humanScore++; 
    console.log("You win! Rock beats Scissors."); 
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    computerScore++; 
    console.log("You lose! Scissors beats Paper."); 
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    humanScore++; 
    console.log("You win! Scissors beats Paper."); 
  } else {
    console.log("IT'S A TIE!"); 
  }
}

playRound(getHumanChoice(), getComputerChoice()); 