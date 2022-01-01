const p1 = document.querySelector('#p1');
const compChoice = document.querySelector('#compChoice');
const playerChoice = document.querySelector('#playerChoice');
const roundResults = document.querySelector('#roundResults')
const gameResults = document.querySelector('#gameResults')

////////////////////
//     Logic      //
////////////////////

//variable init
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

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
        roundResults.textContent = "Computer gains a point! Paper beats Rock";
        console.log(computerScore++);
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        roundResults.textContent = "You gained a point! Rock beats Scissors";
        playerScore++;
    } else if (playerSelection == "rock" && computerSelection == "rock"){
        roundResults.textContent = "You've tied, Rock and Rock!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        roundResults.textContent = "Computer gains a point! Scissors beat Paper!";
        console.log(computerScore++);
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        roundResults.textContent = "You gained a point! Paper beats Rock";
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "paper"){
        roundResults.textContent = "You've tied, Paper and Paper!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        roundResults.textContent = "Computer gains a point! Rock beats Scissors!";
        console.log(computerScore++);
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        roundResults.textContent = "You've gained a point'! Scissors beats Paper!";
        playerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        roundResults.textContent = "You've tied! Scissors and Scissors!";
    }
};

function game() {
    if (playerScore <= 5 && computerScore <= 5) {
        const computerSelection = computerPlay();
        playerChoice.textContent = `You chose ${playerSelection}`;
        compChoice.textContent = `The computer chose ${computerSelection}`;
        playRound(playerSelection, computerSelection);
    } else {
        if (playerScore == 5) {
            gameResults.textContent = "You've won!"
        } else if (computerScore == 5) {
            gameResults.textContent = "The computer won!"
        }
        
        playerChoice.textContent = ``;
        compChoice.textContent = ``;
        roundResults.textContent = ``;

    }
}