let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const previousGuessesSlot = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHighValue = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resultParas");

const createPara = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(event) {
        event.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100.");
    } else {
        prevGuess.push(guess);
        if (numGuess === 5) {
            displayGuess(guess);
            displayMessage("Game Over! Random number was " + randomNumber);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("You guessed it right");
        endGame();
    } else if (guess < randomNumber) {
        displayMessage("Number is too low");
    } else {
        displayMessage("Number is too high");
    }
}

function displayMessage(message) {
    lowOrHighValue.innerHTML = "<h2>" + message + "</h2>";
}

function displayGuess(guess) {
    userInput.value = '';
    previousGuessesSlot.innerHTML += guess + " ";
    numGuess++;
    lastResult.innerHTML = 6 - numGuess;
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener('click', function(event) {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        prevGuess = [];
        numGuess = 1;
        previousGuessesSlot.innerHTML = '';
        lastResult.innerHTML = 6 - numGuess;
        userInput.removeAttribute('disabled');
        startOver.removeChild(createPara);
        playGame = true;
    });
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    createPara.classList.add('button');
    createPara.innerHTML = '<h2 id="newGame">Start New Game</h2>';
    startOver.appendChild(createPara);
    playGame = false;
    newGame();
}

createPara.style.background="green"
createPara.style.height="45px"
createPara.style.width="500px"
createPara.style.border="2px solid black"
createPara.style.borderRadius="10px"

createPara.style.marginTop="20px"
createPara.style.display="flex"
createPara.style.justifyContent="center"
createPara.style.alignItems ="center"
createPara.style.padding ="2px 2px "

