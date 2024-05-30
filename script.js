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

var humanScore = 0, computerScore = 0;
var result = ""

// playgame - loop 5 times, get computer choice and human choice each time then play a round with each
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
        updateDisplay("You lose the round! " + computerChoice + " beats " + humanChoice);
        computerChoice++;
    }
    else if (computerChoice === "rock" && humanChoice === "paper" || computerChoice === "paper" && humanChoice === "scissors" || computerChoice === "scissors" && humanChoice === "rock") {
        updateDisplay("You win the round! " + humanChoice + " beats " + computerChoice);
        humanChoice++;
    }

    else {
        updateDisplay("Round has tied. You both chose " + humanChoice);
    }
}

//
function updateDisplay(result) {
    
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));