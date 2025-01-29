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
  humanChoice = getHumanChoice; 
  computerChoice = getComputerChoice; 

  if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
    humanScore++; 
    console.log("You win! Paper beats Rock."); 
  } else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
    computerScore++; 
    console.log("You lose! Rock beats Paper."); 
  } else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
    computerScore++; 
    console.log("You lose! Rock beats Scissors."); 
  } else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") {
    humanScore++; 
    console.log("You win! Rock beats Scissors."); 
  } else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
    computerScore++; 
    console.log("You lose! Scissors beats Paper."); 
  } else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
    humanScore++; 
    console.log("You win! Scissors beats Paper."); 
  } else {
    console.log("IT'S A TIE!"); 
  }
}