const p1 = document.querySelector('#p1');
const compChoice = document.querySelector('#compChoice');
const playerChoice = document.querySelector('#playerChoice');
const gameResults = document.querySelector('#gameResults')

////////////////////
//     Logic      //
////////////////////

//variable init
let playerSelection = "";

//Computer chooses rock paper or scissors here
function computerPlay(choice) {
    randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 0) {
        return "rock";
    } else if (randomNum == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

//Listens for event listener for playerSelection
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = "rock";
    game();
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = "paper";
    game();
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = "scissors";
    game();
});


//Compares the players selection to the computers and prints the result
function playRound (playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        gameResults.textContent = "You lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        gameResults.textContent = "You win! Rock beats Scissors";
    } else if (playerSelection == "rock" && computerSelection == "rock"){
        gameResults.textContent = "You've tied, Rock and Rock!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        gameResults.textContent = "You lose! Scissors beat Paper!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        gameResults.textContent = "You win! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "paper"){
        gameResults.textContent = "You've tied, Paper and Paper!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        gameResults.textContent = "You lose! Rock beats Scissors!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        gameResults.textContent = "You win! Scissors beats Paper!";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        gameResults.textContent = "You've tied! Scissors and Scissors!";
    }
};

function game() {
    const computerSelection = computerPlay();
    playerChoice.textContent = `You chose ${playerSelection}`;
    compChoice.textContent = `The computer chose ${computerSelection}`;
    playRound(playerSelection, computerSelection);
}