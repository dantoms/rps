function getComputerChoice() {
    let computerChoice
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        computerChoice = "ROCK";
    } 
    
    else if (randomNumber === 1) {
        computerChoice = "PAPER";
    }
    else {
        computerChoice = "SCISSORS";
    }

    return computerChoice
    
}
let computerChoice = getComputerChoice()
let playerChoice = getPlayerChoice
console.log("Computer: " + computerChoice + ". Player: " + playerChoice)