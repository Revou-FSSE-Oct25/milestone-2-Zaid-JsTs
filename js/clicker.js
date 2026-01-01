const gameState = {
    count: 0,
    timeLeft: 10,
    isGameOver: false,
    timerId: null
};

// DOM
const countText = document.getElementById("count");
const clickBtn = document.getElementById("clickBtn");
const resetBtn = document.getElementById("resetBtn");
const timerText = document.getElementById("timer");

function updateUI() {
    countText.textContent = gameState.count;
    timerText.textContent = `Time left: ${gameState.timeLeft}s`;
}

updateUI();
startTimer();

// Timer
function startTimer () {
    gameState.timerId = setInterval(function () {
        if (gameState.timeLeft <= 0) {
            endGame();
            return;
        }

        gameState.timeLeft--;
        updateUI();
    }, 1000);
}

// Click button
function handleClick() {
    if (gameState.isGameOver) return;

    gameState.count++;
    updateUI();
}

// End Game
function endGame() {
    gameState.isGameOver = true;
    clearInterval(gameState.timerId);
    clickBtn.disabled = true;
    clickBtn.classList.add("disabled");
    alert(`Time is up! Your final score is ${gameState.count}`);
}

// Reset Game
function resetGame() {
    clearInterval(gameState.timerId);

    gameState.count = 0;
    gameState.timeLeft = 10;
    gameState.isGameOver = false;

    clickBtn.disabled = false;
    clickBtn.classList.remove("disabled");

    updateUI();
    startTimer();
}

// Init
updateUI();
startTimer();

// Events
clickBtn.addEventListener("click", handleClick);
resetBtn.addEventListener("click", resetGame);
