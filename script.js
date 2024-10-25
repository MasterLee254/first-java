/* script.js */


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
    //computerChoice function that will return either rock, paper or scissors
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
let userChoice = getUserChoice();
let computerChoice = getComputerChoice();


function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    } 
       
    }

    console.log(`User choice: ${userChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    console.log(playRound(userChoice, computerChoice));
