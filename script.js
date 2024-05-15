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

// prompt() the user to get their choice, and set it to a var playerChoice
// if the toLowerCase() of playerChoice is "rock" "paper" or "scissors" we can just return the toLowerCase() of playerChoice

function getHumanChoice() {
    let playerChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    if (playerChoice === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissors") {
        return playerChoice;
    }
    else {
        console.log("dumb stupid idiot");
        return "rock";
    }
}

var humanScore = 0, computerScore = 0;

// playround - take the human choice and computer choice

// if humanchoice = rock && computerchoice = paper OR humanchoice = paper && computerchoice = scissor OR humanchoice = scissor && computerchoice = rock

// same as above but for human win

// if tie, say tie




// playgame - loop 5 times, get computer choice and human choice each time then play a round with each
function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerChoice++;
        }
        else if (computerChoice === "rock" && humanChoice === "paper" || computerChoice === "paper" && humanChoice === "scissors" || computerChoice === "scissors" && humanChoice === "rock") {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
        }

        else {
            console.log("Tie. You both chose " + humanChoice)
        }
    }
    for (let j = 0; j <= 4; j++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}


playGame()