

    /* script.js */

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to get user choice
function getUserChoice() {
    let userInput = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();

    // Validate input
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput; // Return valid choice
    } else {
        console.log("Invalid choice! Please enter rock, paper, or scissors.");
        return getUserChoice(); // Ask again if input is invalid
    }
}

let userScore = 0;
let computerScore = 0;

function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        userScore++;
        return 'You win this round!';
    } else {
        computerScore++;
        return 'Computer wins this round!';
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let userChoice = getUserChoice();
        let computerChoice = getComputerChoice();

        console.log(`User choice: ${userChoice}`);
        console.log(`Computer choice: ${computerChoice}`);
        console.log(playRound(userChoice, computerChoice));
    }

    console.log(`Final Score: You: ${userScore}, Computer: ${computerScore}`);
    if (userScore > computerScore) {
        console.log('You are the overall winner!');
    } else if (userScore < computerScore) {
        console.log('Computer is the overall winner!');
    } else {
        console.log('It\'s an overall tie!');
    }
}

// Start the game
playGame();
