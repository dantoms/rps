let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();
let winner = determineWinner();

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
        //console.log(playerChoice)
        playerChoice = prompt("Choose your weapon, warrior!\n\nRock, Paper or Scissors? ", "r");
    }

    if (playerChoice === "r") {
        playerChoice = "ROCK";
    }
    else if (playerChoice === "p") {
        playerChoice = "PAPER";
    }
    else {
        playerChoice = "SCISSORS";
    }

    return playerChoice;
}

function determineWinner() {
    // Create set
    let winningPairs = new Set();
    // Add elements to the set
    winningPairs.add("ROCKSCISSORS");
    winningPairs.add("PAPERROCK");
    winningPairs.add("SCISSORSPAPER");


    if (computerChoice === playerChoice) {
        return "It's a draw. You both lost!";
    }
    else if (winningPairs.has(playerChoice + computerChoice)) {
        return "You may have won the battle but you haven't won the war..."
    }
    else {
        return "LOSER! Hey everyone, come and se how much of a loser this guy is!"
    }

}

function playRound() {
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();
    winner = determineWinner();
    console.log("Computer: " + computerChoice + ". Player: " + playerChoice);
    console.log(winner);
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}

game()