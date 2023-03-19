function getComputerChoice() {
    const choice_list = ["Rock", "Paper", "Scissors"];
    return choice_list[Math.floor(Math.random() * choice_list.length)];
}