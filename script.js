console.log("Hello World");

// pick math random from 0-1, set it to a variable
// if number < 0.3 return rock
// if number greater than 0.3 and less than 0.6 return paper
// else return scissors

function getComputerChoice() {
    let i = Math.random()
    if (i < 0.3) {
        return "rock"
    }
    else if (i < 0.6) {
        return "paper"
    }
    else {
        return "scissors"
    }
        
}