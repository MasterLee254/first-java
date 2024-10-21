/* script.js */


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
    //computerChoice function that will return either rock, paper or scissors
}

console.log(getComputerChoice())
