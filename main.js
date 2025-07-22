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

function playGame() {

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

  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}\n\n`);
  }

  if (humanScore > computerScore) {
    console.log("You won the whole tournament!");
  } else if (humanScore === computerScore) {
    console.log("No one wins!");
  } else {
    console.log("The computer won the whole tournament!");
  }
}

playGame();