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