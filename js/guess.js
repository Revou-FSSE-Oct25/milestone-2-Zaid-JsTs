const gameState = {
    secretNumber: Math.floor(Math.random() * 100) + 1,
    attempts: 0,
    maxAttempts: 5,
    isGameOver: false
};

// Get DOM Elements
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const restartBtn = document.getElementById("restartBtn")

function validateGuess(n) {
    return n >=1 && n <= 100;
}

function checkGuess(guess, secret) {
    if (guess === secret) return "correct";
    return guess > secret ? "high" : "low";
}

function showMessage(msg) {
    message.textContent = msg;
}

function handleGuess() {
    if (gameState.isGameOver) return;

    const userGuess = Number(guessInput.value);

    if (!validateGuess(userGuess)) {
        showMessage("Please, enter a valid number (1-100)");
        return;
    }

    gameState.attempts++;

    const result = checkGuess(userGuess, gameState.secretNumber);

    if (result === "correct") {
        showMessage("YEAAA!🎉, You guessed correctly!");
        endGame();
    }
    else if (gameState.attempts >= gameState.maxAttempts){
        showMessage(`Game Over!!!❌ Please Try again Later. The number was ${gameState.secretNumber}`);
        endGame();
    }
    else {
        showMessage(result === "high" ? "Try lower! 🔻" : "Try Higher! 🔺");
    }

    attemptsDisplay.textContent = `Attempts: ${gameState.attempts} / ${gameState.maxAttempts}`;
}

function endGame() {
  gameState.isGameOver = true;
  guessBtn.disabled = true;
  guessBtn.classList.add("disabled");
}

function resetGame() {
  gameState.secretNumber = Math.floor(Math.random() * 100) + 1;
  gameState.attempts = 0;
  gameState.isGameOver = false;

  guessBtn.disabled = false;
  guessBtn.classList.remove("disabled");

  showMessage("");
  attemptsDisplay.textContent = "";
  guessInput.value = "";
}

// Events
guessBtn.addEventListener("click", handleGuess);
restartBtn.addEventListener("click", resetGame);




