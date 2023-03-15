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

    return computerChoice;
    
}

function getPlayerChoice() {
    let playerChoice
    while (playerChoice !== "r" && playerChoice !== "s" && playerChoice !== "p") {
        console.log(playerChoice)
        playerChoice = prompt("Choose your weapon, warrior!\n\nRock, Paper or Scissors? ", "r");
    }
    
    if (playerChoice === "r") {
        playerChoice = "ROCK"
    }
    else if (playerChoice === "p") {
        playerChoice = "PAPER"
    }
    else {
        playerChoice = "SCISSORS"
    }

    return playerChoice;
}

let computerChoice = getComputerChoice()
let playerChoice = getPlayerChoice()
console.log("Computer: " + computerChoice + ". Player: " + playerChoice)