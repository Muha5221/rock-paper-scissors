console.log("Hello World");

// Step 2: Computer's choice
function getComputerChoice() {
  const rand1 = Math.random();
  if (rand1 < 1 / 3) return "rock";
  else if (rand1 < 2 / 3) return "paper";
  else return "scissors";
}

// Step 3: Human's choice
function getHumanChoice() {
  const choice = prompt("Enter your choice (rock, paper, or scissors) 5 times:");
  return choice.toLowerCase();
}

// Step 4: Initialize scores
let humanScore = 0;
let computerScore = 0;

// Step 5: Play one round
function playRound(humanChoice, computerChoice) {
  const hc = humanChoice.toLowerCase();
  const cc = computerChoice;

  if (hc === cc) {
    console.log(`It's a tie! You both chose ${hc}`);
  } else if (
    (hc === "rock" && cc === "scissors") ||
    (hc === "paper" && cc === "rock") ||
    (hc === "scissors" && cc === "paper")
  ) {
    console.log(`You win! ${hc} beats ${cc}`);
    humanScore++;
  } else {
    console.log(`You lose! ${cc} beats ${hc}`);
    computerScore++;
  }
}

// Step 6: Play the full game
function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score after round ${i + 1}: Human ${humanScore} - Computer ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer won the game!");
  } else {
    console.log("🤝 It's a draw!");
  }
}

// Start the game
playGame();
