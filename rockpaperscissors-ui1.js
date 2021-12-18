// game variables
let rock = "rock";
let paper = "paper";
let scissors = 'scissors';

//Computer chooses rock paper or scissors here
function computerPlay(choice) {
    randomNum = Math.floor(Math.random() * 3);
    console.log(randomNum)
    if (randomNum == 0) {
        return "rock";
    } else if (randomNum == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

//Compares the players selection to the computers and prints the result
function playRound (playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose! Paper beats Rock");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats Scissors");
    } else if (playerSelection == "rock" && computerSelection == "rock"){
        console.log("You've tied, Rock and Rock!");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beat Paper!");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win! Paper beats Rock");
    } else if (playerSelection == "paper" && computerSelection == "paper"){
        console.log("You've tied, Paper and Paper!");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock beats Scissors!");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors beats Paper!");
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("You've tied! Scissors and Scissors!");
    }
};

game();