let secretNumber = Math.floor(Math.random() * 100) +1;
const maxAttempts = 5;
let attempts = 0;

// Get DOM Elements
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const restartBtn = document.getElementById("restartBtn")

guessBtn.addEventListener("click", function() {
    const userGuess = Number(guessInput.value);

    // Input validation
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter the valid number! (1-100).";
        return;
    }

    // Increase attempts
    attempts++;

    // Conditional statements
    if (userGuess === secretNumber) {
        message.textContent = "Congratulations 🎉, You guessed correctly 🏆";
        guessBtn.disabled = true;
    } else if (attempts === maxAttempts) {
        message.textContent = `You have no attempts left. Try again later!. The correct number was ${secretNumber}.`;
        guessBtn.disabled = true;
    } else if (userGuess > secretNumber) {
        message.textContent = "Try again 😜, Lower than that number!🔻";
    } else {
        message.textContent = "Try again 😜, Higher than that number!🔺";
    }

    attemptsDisplay.textContent = `Attempts: ${attempts} / ${maxAttempts}`;
});

restartBtn.addEventListener("click", function () {
    // Reset game state
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    // Reset UI
    message.textContent = "";
    attemptsDisplay.textContent = "";
    guessInput.value = "";

    // Enable guess button again
    guessBtn.disabled = false;
});


