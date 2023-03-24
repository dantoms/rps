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

function playRound(playerChoice, computerChoice) {

    //getComputerChoice();
    
    // Create set
    let winningPairs = new Set();
    // Add elements to the set
    winningPairs.add("ROCKSCISSORS");
    winningPairs.add("PAPERROCK");
    winningPairs.add("SCISSORSPAPER");


    if (computerChoice === playerChoice.toUpperCase()) {
        return "It's a draw. You both fuckin' stink!";
    }
    else if (winningPairs.has(playerChoice.toUpperCase() + computerChoice)) {
        playerScore++;
        return "You win. Whoop de fuckin' do. Is your mother proud of you?";
    }
    else {
        computerScore++;
        return "LOSER! Hey everyone, come and see how much of a loser this guy is!";
    }

}

function game() {
       for (let i = 0; i < 5; i++) {
        const playerChoice = "rOck";
        const computerChoice = getComputerChoice();
        console.log(`Game ${i}\nYOU:${playerChoice} === COMPUTER:${computerChoice}\n${playRound(playerChoice, computerChoice)}`);
        playRound(playerChoice, computerChoice)
    }

    console.log(`Final Scores \nPlayer:${playerScore} - Computer:${computerScore}`);
}

let playerScore = 0;
let computerScore = 0;
//const computerChoice = getComputerChoice();
//console.log(`p: ${playerChoice} === ${computerChoice}`);
//console.log(playRound(playerChoice, computerChoice));
game();