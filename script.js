// Global variables
const same = document.getElementById('same');
const history = document.getElementById('history');
const compSelectPara = document.getElementById('selections');

// Update wins
let playerWins = 0, computerWins = 0, currentWinner;
function updateWins() {
    winCount.innerHTML = `Computer: ${computerWins}` + '&nbsp &nbsp | &nbsp &nbsp' + `You: ${playerWins}`;
}

// Initialize Game
updateWins();
listenForButton();
compSelectPara.innerHTML = `Computer: ` + '&nbsp &nbsp | &nbsp &nbsp' + 'You:' + '&nbsp';

function listenForButton() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(button.id);
        });
    });
};

function computerPlay() {
    // random number to determine which one computer shoots out
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        if (currentWinner === 'computer') {
            playAudio("robot-muk");
        }
        return "✊";
    } else if (num === 1) {
        if (currentWinner === 'computer') {
            playAudio("robot-jji");
        }
        return "✌️";
    } else if (num === 2) {
        if (currentWinner === 'computer') {
            playAudio("robot-ppa");
        }
        return "🖐️";
    }
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    compSelectPara.innerHTML = `Computer: ${computerSelection}` + '&nbsp &nbsp | &nbsp &nbsp' + `You: ${playerSelection}`;

    // uses conditionals to play game
    if (playerSelection === "🖐️") {
        if (currentWinner === 'player') {
            playAudio("player-ppa");
        }
        if (computerSelection === "🖐️") {
            tie('🖐️');
        } else if (computerSelection === "✊") {
            win();
        } else {
            loss();
        }
    } else if (playerSelection === "✌️") {
        if (currentWinner === 'player') {
            playAudio("player-jji");
        }
        if (computerSelection === "✌️") {
            tie('✌️');
        } else if (computerSelection === "🖐️") {
            win();
        } else {
            loss();
        }
    } else if (playerSelection === "✊") {
        if (currentWinner === 'player') {
            playAudio("player-muk");
        }
        if (computerSelection === "✊") {
            tie('✊');
        } else if (computerSelection === "✌️") {
            win();
        } else {
            loss();
        }
    }
}

function tie(selection) {
    const result = document.createElement('p');
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
        same.textContent = `You both shot ${selection}. Shoot again!`;
    }
    history.insertBefore(result, history.firstChild);
}

function win() {
    currentWinner = 'player';
    same.textContent = '';
}

function loss() {
    currentWinner = 'computer';
    same.textContent = '';
}

function playAudio(choice) {
    const audio = document.getElementById(choice);
    audio.currentTime = 0;
    audio.play();
}