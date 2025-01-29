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