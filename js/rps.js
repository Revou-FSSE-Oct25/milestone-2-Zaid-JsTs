const choices = ["rock", "paper", "scissors"];

// Dom elements

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const restartBtn = document.getElementById("restartBtn");

const playerChoiceText = document.getElementById("playerChoice");
const computerChoiceText = document.getElementById("computerChoice");
const resultText = document.getElementById("result");

function getComputerChoice () {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices [randomIndex];
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
}

rockBtn.addEventListener("click", function () {
    playGame("rock");
});

paperBtn.addEventListener("click", function () {
    playGame("paper");
});

scissorsBtn.addEventListener("click", function () {
    playGame("scissors");
});
restartBtn.addEventListener("click", function () {
    playerChoiceText.textContent = "";
    computerChoiceText.textContent = "";
    resultText.textContent = "";
});
