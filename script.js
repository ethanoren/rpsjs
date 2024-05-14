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


