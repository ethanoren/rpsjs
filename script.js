console.log("Hello World");

// pick math random from 0-1, set it to a variable
// if number < 0.3 return rock
// if number greater than 0.3 and less than 0.6 return paper
// else return scissors

function getComputerChoice() {
    let i = Math.random()
    if (i < 0.3) {
        return "rock";
    }
    else if (i < 0.6) {
        return "paper";
    }
    else {
        return "scissors";
    }

}

var humanChoice = "";
var computerChoice = "";
var humanScore = 0, computerScore = 0;
var result = "";

// playgame - loop 5 times, get computer choice and human choice each time then play a round with each
function playRound(humanChoice, computerChoice) {
    if (humanScore >= 5 || computerScore >= 5) {return}
    if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        updateDisplay("You lose the round! " + computerChoice + " beats " + humanChoice);
    }
    else if (computerChoice === "rock" && humanChoice === "paper" || computerChoice === "paper" && humanChoice === "scissors" || computerChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
        updateDisplay("You win the round! " + humanChoice + " beats " + computerChoice);
    }

    else {
        updateDisplay("Round has tied. You both chose " + humanChoice);
    }
}

// take result, and set the text content of the result div to the player score, computer score, and the result of the round. if any score >= 5, the result will instead say who won the game
function updateDisplay(result) {
    if (humanScore >= 5) { 
        result = "You won the game!";
    }
    else if (computerScore >= 5) {
        result = "You lost the game!"
    }
    scoreDisplay.textContent = "Player score: " + humanScore + "\nComputer score: " + computerScore + "\n" + result;
}

const scoreDisplay = document.getElementById("scoreDisplay")
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => {
    humanChoice = "rock"
    playRound("rock", getComputerChoice())
});
paperButton.addEventListener("click", () => {
    humanChoice = "paper"
    playRound("paper", getComputerChoice())
});
scissorsButton.addEventListener("click", () => {
    humanChoice = "scissors"
    playRound("scissors", getComputerChoice())
});
