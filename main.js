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
  if (choice.toLowerCase() === "rock") {
    return "rock";
  } else if (choice.toLowerCase() === "paper") {
    return "paper";
  } else if (choice.toLowerCase() === "scissors") {
    return "scissors";
  } else {
    alert("You didn't pick any of the options given...");
  }
}