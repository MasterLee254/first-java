// Function to get computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play one round of Rock Paper Scissors
function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win this round!';
    } else {
        return 'Computer wins this round!';
    }
}

// Track scores
let userScore = 0;
let computerScore = 0;

// Get references to elements in the DOM
const userScoreDisplay = document.getElementById('userScore');
const computerScoreDisplay = document.getElementById('computerScore');
const outcomeDisplay = document.getElementById('outcome');

// Function to update the scores and check for a winner
function updateScore(winner) {
    if (winner === 'user') {
        userScore++;
        userScoreDisplay.textContent = userScore;
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }

    if (userScore === 5) {
        outcomeDisplay.textContent = 'You win the game!';
        resetGame();
    } else if (computerScore === 5) {
        outcomeDisplay.textContent = 'Computer wins the game!';
        resetGame();
    }
}

// Reset the game
function resetGame() {
    userScore = 0;
    computerScore = 0;
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
    setTimeout(() => {
        outcomeDisplay.textContent = '';
    }, 2000);
}

// Function to handle button clicks
function handleButtonClick(event) {
    const userChoice = event.target.id; // Get the id of the button (rock, paper, or scissors)
    const computerChoice = getComputerChoice();
    const result = playRound(userChoice, computerChoice);
    
    // Display the result of the round
    outcomeDisplay.textContent = `You chose ${userChoice}, Computer chose ${computerChoice}. ${result}`;
    
    // Update scores
    if (result === 'You win this round!') {
        updateScore('user');
    } else if (result === 'Computer wins this round!') {
        updateScore('computer');
    }
}

// Add event listeners to each button
document.getElementById('rock').addEventListener('click', handleButtonClick);
document.getElementById('paper').addEventListener('click', handleButtonClick);
document.getElementById('scissors').addEventListener('click', handleButtonClick);
