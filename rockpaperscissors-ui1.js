const p1 = document.querySelector('#p1');
const compChoice = document.querySelector('#compChoice');
const playerChoice = document.querySelector('#playerChoice');
const roundResults = document.querySelector('#roundResults');
const gameResults = document.querySelector('#gameResults');
const playerScoreUI = document.querySelector('#playerScore');
const computerScoreUI = document.querySelector('#computerScore');
const welcome = document.querySelector('#welcome')

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

const resetUI = document.querySelector('#reset');
resetUI.addEventListener('click', () =>  {
    reset();
})


//Compares the players selection to the computers and prints the result
function playRound (playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        roundResults.textContent = "Computer gains a point! Paper beats Rock";
        computerScore++;

        playerScoreUI.textContent = `Player Score: ${playerScore}`;
        computerScoreUI.textContent = `Computer Score: ${computerScore}`;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        roundResults.textContent = "You gained a point! Rock beats Scissors";
        playerScore++;

        playerScoreUI.textContent = `Player Score: ${playerScore}`;
        computerScoreUI.textContent = `Computer Score: ${computerScore}`;
    } else if (playerSelection == "rock" && computerSelection == "rock"){
        roundResults.textContent = "You've tied, Rock and Rock!";

        playerScoreUI.textContent = `Player Score: ${playerScore}`;
        computerScoreUI.textContent = `Computer Score: ${computerScore}`;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        roundResults.textContent = "Computer gains a point! Scissors beat Paper!";
        computerScore++;

        playerScoreUI.textContent = `Player Score: ${playerScore}`;
        computerScoreUI.textContent = `Computer Score: ${computerScore}`;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        roundResults.textContent = "You gained a point! Paper beats Rock";
        playerScore++;

        playerScoreUI.textContent = `Player Score: ${playerScore}`;
        computerScoreUI.textContent = `Computer Score: ${computerScore}`;
    } else if (playerSelection == "paper" && computerSelection == "paper"){
        roundResults.textContent = "You've tied, Paper and Paper!";

        playerScoreUI.textContent = `Player Score: ${playerScore}`;
        computerScoreUI.textContent = `Computer Score: ${computerScore}`;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        roundResults.textContent = "Computer gains a point! Rock beats Scissors!";
        computerScore++;

        playerScoreUI.textContent = `Player Score: ${playerScore}`;
        computerScoreUI.textContent = `Computer Score: ${computerScore}`;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        roundResults.textContent = "You've gained a point! Scissors beats Paper!";
        playerScore++;

        playerScoreUI.textContent = `Player Score: ${playerScore}`;
        computerScoreUI.textContent = `Computer Score: ${computerScore}`;
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        roundResults.textContent = "You've tied! Scissors and Scissors!";

        playerScoreUI.textContent = `Player Score: ${playerScore}`;
        computerScoreUI.textContent = `Computer Score: ${computerScore}`;

    }
};

//game function to check for player score and if any users have won or not
function game() {
    if (playerScore <= 4 && computerScore <= 4) {
        const computerSelection = computerPlay();
        playerChoice.textContent = `You chose ${playerSelection}`;
        compChoice.textContent = `The computer chose ${computerSelection}`;
        playRound(playerSelection, computerSelection);
        welcome.textContent = ``;
    } else {
        if (playerScore == 5) {
            gameResults.textContent = "You've won!"
        } else if (computerScore == 5) {
            gameResults.textContent = "The computer won!"
        }

        welcome.textContent = ``;
        playerChoice.textContent = ``;
        compChoice.textContent = ``;
        roundResults.textContent = ``;
    }

}

//Resets the game UI and player score to init
function reset() {
    console.log('reset')
    playerScore = 0;
    computerScore = 0;
    welcome.textContent = `Welcome to Rock Paper Scissors, click Rock, Paper or Scissors to start.`;
    playerChoice.textContent = ``;
    compChoice.textContent = ``;
    roundResults.textContent = ``;
    playerScoreUI.textContent = ``;
    computerScoreUI.textContent = ``;
    gameResults.textContent = ``;
}