/* script.js */


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
    //computerChoice function that will return either rock, paper or scissors
}

console.log(`Computer chose: ${getComputerChoice()}`)

// Function to get user choice
function getUserChoice() {
    let userInput = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();

    // Validate input
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        console.log(`You chose: ${userInput}`);
        return userInput; // Return valid choice
    } else {
        console.log("Invalid choice! Please enter rock, paper, or scissors.");
        return getUserChoice(); // Ask again if input is invalid
    }
}

console.log(getUserChoice())
