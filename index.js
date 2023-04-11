let playerScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll('.choices');
const scoresElement = document.querySelector('#scores');
scoresElement.innerText = "Let's play Rock, Paper, Scissors!";

choices.forEach((choice) => {
        choice.addEventListener('click', (event) => {
                game(event.target.innerText);
        });
});

const reset = document.querySelector('#btn-reset');
reset.addEventListener('click', function () {
        playerScore = 0;
        computerScore = 0;
        scoresElement.innerText = `Scores \nPlayer:${playerScore} - Computer:${computerScore}`;
});

function getComputerChoice() {
        let computerChoice;
        let randomNumber = Math.floor(Math.random() * 3);

        if (randomNumber === 0) {
                computerChoice = 'ROCK';
        } else if (randomNumber === 1) {
                computerChoice = 'PAPER';
        } else {
                computerChoice = 'SCISSORS';
        }

        return computerChoice;
}

function playRound(playerChoice, computerChoice) {
        //getComputerChoice();

        // Create set
        let winningPairs = new Set();
        // Add elements to the set
        winningPairs.add('ROCKSCISSORS');
        winningPairs.add('PAPERROCK');
        winningPairs.add('SCISSORSPAPER');

        if (computerChoice === playerChoice.toUpperCase()) {
                return;
        } else if (
                winningPairs.has(playerChoice.toUpperCase() + computerChoice)
        ) {
                playerScore++;
                return;
        } else {
                computerScore++;
                return;
        }
}

function game(playerChoice) {
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        scoresElement.innerText = `🫵 - ${playerChoice}\n🖥️ - ${computerChoice}\n
        Scores \nPlayer:${playerScore} - Computer:${computerScore}`;

        if (playerScore == 5 || computerScore == 5) {
                let winner;
                if (playerScore == 5) {
                        winner =
                                "You win. Whoop de fuckin' do. Is your mother proud of you?";
                } else {
                        winner =
                                'LOSER! Hey everyone, come and see how much of a loser this guy is!';
                }
                scoresElement.innerText = `Final Scores\nPlayer:${playerScore} - Computer:${computerScore}\n${winner}`;

                playerScore = 0;
                computerScore = 0;
        }
}
