const quoteApp = {
    // tools
    button: document.getElementById("quoteBtn"),
    box: document.getElementById("quoteBox"),

    // DATA
    quotes: [
        "Simplicity is the ultimate sophistication.",
        "Less is more.",
        "Live simply, dream deeply.",
        "A simple life is a happy life.",
        "Focus on what truly matters.",
        "Minimal things, maximum peace.",
        "Simplify your life, amplify your happiness.",
        "Happiness begins with less."
    ],

    // rules
    showQuote() {
        const random = Math.floor(Math.random() * this.quotes.length);
        this.box.textContent = `"${this.quotes[random]}"`;
        this.button.classList.toggle("button");
    },

    // POWER
    init() {
        this.button.addEventListener("click", () => this.showQuote());
    }
};

quoteApp.init();
