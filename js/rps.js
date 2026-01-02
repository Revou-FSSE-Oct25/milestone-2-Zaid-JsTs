const gameState = {
    choices: ["rock", "paper", "scissors"],
    isGameOver: false
};

// Dom elements
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const restartBtn = document.getElementById("restartBtn");

const playerChoiceText = document.getElementById("playerChoice");
const computerChoiceText = document.getElementById("computerChoice");
const resultText = document.getElementById("result");

// Main game
function getComputerChoice () {
    const randomIndex = Math.floor(Math.random() * gameState.choices.length);
    return gameState.choices[randomIndex];
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();

    playerChoiceText.textContent = `You chose: ${playerChoice}`;
    computerChoiceText.textContent = `Computer chose: ${computerChoice}`;

    if (playerChoice === computerChoice) {
        resultText.textContent = "No way, it's a draw!🤝"
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock" ) ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      resultText.textContent = "Congratulations, you win! 🎉";  
    } else {
        resultText.textContent = "Unfortunately, you lose! 😢";
    }

    gameState.isGameOver = true;

    rockBtn.classList.add("disabled");
    paperBtn.classList.add("disabled");
    scissorsBtn.classList.add("disabled");
}

function handlePlayerChoice (choice) {
    if (gameState.isGameOver) return;
    playGame(choice);
}

rockBtn.addEventListener("click", () => handlePlayerChoice("rock"));
paperBtn.addEventListener("click", () => handlePlayerChoice("paper"));
scissorsBtn.addEventListener("click", () => handlePlayerChoice("scissors"));

// Reset game
function resetGame() {
  gameState.isGameOver = false;
  playerChoiceText.textContent = "";
  computerChoiceText.textContent = "";
  resultText.textContent = "";

  rockBtn.classList.remove("disabled");
  paperBtn.classList.remove("disabled");
  scissorsBtn.classList.remove("disabled");
}

// Reset button
restartBtn.addEventListener("click", resetGame);

