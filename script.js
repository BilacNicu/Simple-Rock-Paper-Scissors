// JavaScript (script.js)
function getComputerChoice() {
    const array = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return array[randomIndex];
}

const rockButton = document.getElementById("Rock");
const paperButton = document.getElementById("Paper");
const scissorsButton = document.getElementById("Scissors");
let playerChoice = "";
let computerChoice = "";
let playerScore = 0; // Initialize the player's score

rockButton.addEventListener("click", function() {
    playerChoice = "Rock";
    playRound();
});

paperButton.addEventListener("click", function() {
    playerChoice = "Paper";
    playRound();
});

scissorsButton.addEventListener("click", function() {
    playerChoice = "Scissors";
    playRound();
});

const outputElement = document.getElementById("results");

function playRound() {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = getComputerChoice().toLowerCase();
    
    const result = calculateResult();

    displayResults(result);
    displayScore();
}

function calculateResult() {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        return "You win!";
    } else {
        playerScore--;
        return "Computer wins!";
    }
}

function displayResults(result) {
    outputElement.innerHTML = `Result is: ${result} and computer choice was: ${computerChoice}`;
}

function displayScore() {
    outputElement.innerHTML += `<br>Score is: ${playerScore}`;
}
