function getComputerChoice() {
    const choice_list = ["rock", "paper", "scissors"];
    return choice_list[Math.floor(Math.random() * choice_list.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "Tie";
        }
        else if (computerSelection == "paper") {
            return "You win! Rock beats Paper"
        }
        else if (computerSelection == "scissors") {
            return "You lose! Scissors beats Rock"
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            return "Tie";
        }
        else if (computerSelection == "rock") {
            return "You win! Paper beats Rock";
        }
        else if (computerSelection == "scissors") {
            return "You lose! Scissors beats Paper";
        }
    }

    if (playerSelection == "scissors" || playerSelection == "scissor") {
        if (computerSelection == "scissors") {
            return "Tie";
        }
        else if (computerSelection == "paper") {
            return "You win! Scissors beats Paper";
        }
        else if (computerSelection == "rock") {
            return "You lose! Rock beats Scissors";
        }
    }

}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {

        playerSelection = prompt("Rock, Paper, Scissors");
        computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("win")) {
            playerScore++;
        }
        else if (result.includes("lose")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        return "Player wins\n" + playerScore + " - " + computerScore;
    }
    else if (playerScore < computerScore) {
        return "Computer Wins\n" + playerScore + " - " + computerScore;
    }
    else {
        return "Tie\n" + playerScore + " - " + computerScore;;
    }
}

console.log(game());