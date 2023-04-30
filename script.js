let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function determineWinner(playerChoice, computerChoice) {
   
    /* Rock */

    if (playerChoice == "rock" && computerChoice == "rock") {
        return "Tie"
    }

    if (playerChoice == "rock" && computerChoice == "paper") {
        return "You lost!"
    }

    if (playerChoice == "rock" && computerChoice == "scissors") {
        return "You won!"
    }

    /* Paper */

    if (playerChoice == "paper" && computerChoice == "paper") {
        return "Tie"
    }

    if (playerChoice == "paper" && computerChoice == "scissors") {
        return "You lost!"
    }

    if (playerChoice == "paper" && computerChoice == "rock") {
        return "You won!"
    }

    /* Scissors */

    if (playerChoice == "scissors" && computerChoice == "scissors") {
        return "Tie"
    }

    if (playerChoice == "scissors" && computerChoice == "rock") {
        return "You lost!"
    }

    if (playerChoice == "scissors" && computerChoice == "paper") {
        return "You won!"
    }
}

function addScore(text) {
    if (text == "You won!") {playerScore++;}
    else if (text == "You lost!") {computerScore++}
}

function convertToEmoji(text) {
    if (text == "rock") return "👊";
    if (text == "paper") return "✋";
    if (text == "scissors") return "✌";
}

let buttons = document.querySelectorAll(".content button");
let text = document.querySelector(".text")
let pScore = document.querySelector(".player-score");
let pEmoji = document.querySelector(".player-emoji");
let cScore = document.querySelector(".computer-score");
let cEmoji = document.querySelector(".computer-emoji");
buttons.forEach(button => button.addEventListener("click", (e) => {
    playerChoice = e.target.className;
    computerChoice = getComputerChoice();
    let winner = determineWinner(playerChoice, computerChoice)
    text.textContent = winner;
    addScore(winner);
    pScore.textContent = "Player: " + playerScore;
    pEmoji.textContent = convertToEmoji(playerChoice)
    cScore.textContent = "Computer: " + computerScore;
    cEmoji.textContent = convertToEmoji(computerChoice)

    if (playerScore == 5 || computerScore == 5) {
        let modal = document.querySelector(".modal");
        let modalText = document.querySelector(".modal-text");
        let modalButton = document.querySelector(".modal-button");
        if (playerScore == 5) {
            modalText.textContent = "You Win!"
        } else {modalText.textContent = "You lose!";}
        modal.classList = "modal active";
        modalButton.addEventListener("click", () => {
            modal.classList.remove("active");
            playerScore = 0;
            computerScore = 0;
            pScore.textContent = "Player: 0";
            cScore.textContent = "Computer: 0";
            cEmoji.textContent = "👊";
            pEmoji.textContent = "👊";
        })
    }
}))



