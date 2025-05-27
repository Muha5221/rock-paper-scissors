
let humanScore = 0;
let computerScore = 0;

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resetBtn = document.getElementById('reset');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');
const winnerDiv = document.getElementById('winner');

const choices = ['rock', 'paper', 'scissors'];
const emojis = { rock: '🗿', paper: '📄', scissors: '✂️' };

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    
    if (humanChoice === computerChoice) {
        resultDiv.textContent = `Tie! You both chose ${emojis[humanChoice]} ${humanChoice}`;
        return;
    }

    const winConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (winConditions[humanChoice] === computerChoice) {
        humanScore++;
        resultDiv.textContent = `You win! ${emojis[humanChoice]} ${humanChoice} beats ${emojis[computerChoice]} ${computerChoice}`;
    } else {
        computerScore++;
        resultDiv.textContent = `Computer wins! ${emojis[computerChoice]} ${computerChoice} beats ${emojis[humanChoice]} ${humanChoice}`;
    }

    updateScore();
    checkWinner();
}

function updateScore() {
    scoreDiv.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
}

function checkWinner() {
    if (humanScore === 5) {
        winnerDiv.textContent = '🎉 Congratulations! You won the match! 🎉';
        disableButtons();
    } else if (computerScore === 5) {
        winnerDiv.textContent = '💻 Computer wins the match! Better luck next time! 💻';
        disableButtons();
    }
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function enableButtons() {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    resultDiv.textContent = 'Choose your weapon!';
    scoreDiv.textContent = 'Score: Human 0 - Computer 0';
    winnerDiv.textContent = '';
    enableButtons();
}

rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));
resetBtn.addEventListener('click', resetGame);

// Add click sound effect simulation
document.querySelectorAll('.game-button').forEach(button => {
    button.addEventListener('click', () => {
        button.style.transform = 'translateY(-2px)';
        setTimeout(() => {
            button.style.transform = '';
        }, 100);
    });
});
