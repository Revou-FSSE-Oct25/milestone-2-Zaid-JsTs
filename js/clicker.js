let count = 0;
let timeLeft = 10;

const countText = document.getElementById("count");
const clickBtn = document.getElementById("clickBtn");
const resetBtn = document.getElementById("resetBtn");
const timerText = document.getElementById("timer");

countText.textContent = count;
timerText.textContent = `Time left: ${timeLeft}`;

// Timer
const timer = setInterval(function () {
    timeLeft--;
    timerText.textContent = `Time left: ${timeLeft}`;

    if (timeLeft === 0) {
        clearInterval(timer);
        clickBtn.disabled = true;
        alert(`Time's up! Your final score is ${count}`);
    }
}, 1000);

// Click button
clickBtn.addEventListener("click", function () {
    if (timeLeft > 0) {
        count++;
        countText.textContent = count;
    }
});

// Reset button
resetBtn.addEventListener("click", function () {
    location.reload(); 
});
