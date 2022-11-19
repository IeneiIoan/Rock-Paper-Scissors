let getComputerChoice = () => {
    let randomComputerChoice = Math.random();
    let computerChoice = "";

    if (randomComputerChoice <= 0.33) {
        computerChoice = "Rock";
    } else if (randomComputerChoice > 0.33 && randomComputerChoice <= 0.66) {
        computerChoice = "Paper";
    } else if (randomComputerChoice > 0.66) {
        computerChoice = "Scissors";
    } else {
        computerChoice = "Error";
    }

    return computerChoice;
}


let fight = (playerSelection) => {
    let computer = getComputerChoice();

    const computerSelection = computer.toLowerCase();

    console.log(computer);

    const playerSelectionRandom = prompt("Please introduce the choice you want to battle with: ");

    playerSelection = playerSelectionRandom.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a draw!";
    } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        return "You lose! Paper beats Rock!";
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return "You win! Rock beats Scissors!";
    } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        return "You win! Paper beats Rock!";
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        return "You lose! Scissors beats Paper!";
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        return "You lose! Rock beats Scissors!";
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        return "You win! Scissors beats Paper!";
    } else {
        return "You enter a wrong choice!";
    }
}

let playRound = () => {

    let win = 0;
    let lose = 0;

    for (let i = 0; i < 5; i++) {
        let a = fight();

        if ((a == "You win! Rock beats Scissors!") || (a == "You win! Paper beats Rock!") || (a == "You win! Scissors beats Paper!")) {
            win++;
        } else if ((a == "You lose! Paper beats Rock!") || (a == "You lose! Scissors beats Paper!") || (a == "You lose! Rock beats Scissors!")) {
            lose++;
        } else {
            console.log("It's a draw!");
        }

        console.log(win);
        console.log(lose);
    }

    if (win > lose) {
        console.log("You win!");
    } else if (win < lose) {
        console.log("You lose!")
    } else if (win = lose){
        console.log("It's a draw")
    }

}

playRound();