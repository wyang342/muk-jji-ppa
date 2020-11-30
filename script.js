
function computerPlay() {
    // random number to determine which one computer shoots out
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "muk";
    } else if (num === 1) {
        return "jji";
    } else if (num === 2) {
        return "ppa";
    }
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    const compSelectPara = document.getElementById('selections');
    compSelectPara.textContent = `Computer: ${computerSelection}. Player: ${playerSelection}`;

    // uses conditionals to play game
    if (playerSelection === "ppa") {
        if (computerSelection === "ppa") {
            tie('ppa');
        } else if (computerSelection === "muk") {
            currentWinner = 'player';
        } else {
            currentWinner = 'computer';
        }
    } else if (playerSelection === "jji") {
        if (computerSelection === "jji") {
            tie('jji');
        } else if (computerSelection === "ppa") {
            currentWinner = 'player';
        } else {
            currentWinner = 'computer';
        }
    } else if (playerSelection === "muk") {
        if (computerSelection === "muk") {
            tie('muk');
        } else if (computerSelection === "jji") {
            currentWinner = 'player';
        } else {
            currentWinner = 'computer';
        }
    }
}

function listenForButton() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(button.id);
        });
    });
};

function tie(selection) {
    const results = document.getElementById('results');
    let result = document.createElement('p')
    if (currentWinner === 'player') {
        result.textContent = 'Player won!';
        playerWins++;
        updateWins();
        currentWinner = null;
    } else if (currentWinner === 'computer') {
        result.textContent = 'Computer won!';
        computerWins++;
        updateWins();
        currentWinner = null;
    } else {
        result.textContent = `You both shot ${selection}. Shoot again!`;
    }
    results.appendChild(result);
}

listenForButton();

// Counting Wins. Declaring global variables.
let playerWins = 0, computerWins = 0, currentWinner;
const wins = document.getElementById('numOfWins');
updateWins();
function updateWins() {
    wins.textContent = `Player Wins: ${playerWins}.\nComputer Wins: ${computerWins}`;
}
