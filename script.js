
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
    // uses conditionals to play game
    if (playerSelection === "ppa") {
        if (computerSelection === "ppa") {
            tie('ppa');
        } else if (computerSelection === "muk") {
            victory('ppa', 'muk');
        } else {
            loss('ppa', 'jji');
        }
    } else if (playerSelection === "jji") {
        if (computerSelection === "jji") {
            tie('jji');
        } else if (computerSelection === "ppa") {
            victory('jji', 'ppa');
        } else {
            loss('jji', 'muk')
        }
    } else if (playerSelection === "muk") {
        if (computerSelection === "muk") {
            tie('muk');
        } else if (computerSelection === "jji") {
            victory('muk', 'jji');
        } else {
            loss('muk', 'ppa');
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
    result.textContent = `It's a tie. You both shot ${selection}. Shoot again!`;
    results.appendChild(result);
}

function victory(playerSelection, computerSelection) {
    const results = document.getElementById('results');
    let result = document.createElement('p')
    result.textContent = `You win! Computer shot ${computerSelection}. ${playerSelection} beats ${computerSelection}.`;
    results.appendChild(result);

}

function loss(playerSelection, computerSelection) {
    const results = document.getElementById('results');
    let result = document.createElement('p')
    result.textContent = `You lose! Computer shot ${computerSelection}. ${playerSelection} loses to ${computerSelection}.`;
    results.appendChild(result);

}

listenForButton();

// Counting Wins.
let playerWins = 0, computerWins = 0;
const wins = document.getElementById('numOfWins');
countWins();
function countWins() {
    wins.textContent = `Player Wins: ${playerWins}.\nComputer Wins: ${computerWins}`;
}