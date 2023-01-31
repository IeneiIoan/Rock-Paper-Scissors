let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let createDivAndRemove = (a) => {

    const container = document.getElementsByClassName('container');

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = a;
    content.style.color = "white";
    content.style.cssText = 'font-size: 40px; text-align: center;';

    container[0].appendChild(content);

    let remove = document.getElementById("remove");

    remove.addEventListener("click", () => {
    content.remove();
    });
}

let displayWins = (win) => {
    const container = document.getElementsByClassName('container');

    let win1 = win;

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = "Wins: " + win1;
    content.style.color = "white";
    content.style.cssText = 'font-size: 40px; text-align: center;';
        
    container[0].appendChild(content);

    let remove = document.getElementById("remove");
        
    remove.addEventListener("click", () => {
        content.remove(); 
    });
}

let displayLose = (lose) => {
    const container = document.getElementsByClassName('container');
            
    let lose1 = lose;

    const content = document.createElement('div');
    content.classList.add("content");
    content.textContent = "Lose: " + lose1;
    content.style.color = "white";
    content.style.cssText = 'font-size: 40px; text-align: center;';
            
    container[0].appendChild(content);

    let remove = document.getElementById("remove");
        
    remove.addEventListener("click", () => {
        content.remove(); 
    });
}

let getComputerChoice = () => {
    let randomComputerChoice = Math.random();
    let computerChoice = "";

    if (randomComputerChoice <= 0.33) {
        computerChoice = "rock";
    } else if (randomComputerChoice > 0.33 && randomComputerChoice <= 0.66) {
        computerChoice = "paper";
    } else if (randomComputerChoice > 0.66) {
        computerChoice = "scissors";
    } else {
        computerChoice = "Error";
    }

    return computerChoice;
}

let fight = (playerSelection) => {

    let computerSelection = getComputerChoice();

    createDivAndRemove("Computer choice: " + computerSelection);

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
    let lose = 0;
    let win = 0;
            
    rock.addEventListener("click", () => {
        playerSelection = "rock";
        let a = fight(playerSelection);
        
        createDivAndRemove();

        if ((a == "You win! Rock beats Scissors!") || (a == "You win! Paper beats Rock!") || (a == "You win! Scissors beats Paper!")) {
            win++;
        } else if ((a == "You lose! Paper beats Rock!") || (a == "You lose! Scissors beats Paper!") || (a == "You lose! Rock beats Scissors!")) {
            lose++;
        }

        displayWins(win);
        displayLose(lose);
        
        if ((win === 5) || (lose === 5)) {
            if (win === 5) {
                win = lose = 0;
                createDivAndRemove("You won!");
                createDivAndRemove(`Click on "Remove" to play again!`);
            } else if (lose === 5) {
                win = lose = 0;
                createDivAndRemove("You lost!");
                createDivAndRemove(`Click on "Remove" to play again!`);
            }
        } else {
            createDivAndRemove(`Press the button "Remove" to update!`);
        }
    });

    paper.addEventListener("click", () => {
        playerSelection = "paper";
        let a = fight(playerSelection);
    
        createDivAndRemove();

        if ((a == "You win! Rock beats Scissors!") || (a == "You win! Paper beats Rock!") || (a == "You win! Scissors beats Paper!")) {
            win++;
        } else if ((a == "You lose! Paper beats Rock!") || (a == "You lose! Scissors beats Paper!") || (a == "You lose! Rock beats Scissors!")) {
            lose++;
        }

        displayWins(win);
        displayLose(lose);
        
        if ((win === 5) || (lose === 5)) {
            if (win === 5) {
                win = lose = 0;
                createDivAndRemove("You won!");
                createDivAndRemove(`Click on "Remove" to play again!`);
            } else if (lose === 5) {
                win = lose = 0;
                createDivAndRemove("You lost!");
                createDivAndRemove(`Click on "Remove" to play again!`);
            }
        } else {
            createDivAndRemove(`Press the button "Remove" to update!`);
        }
    });
    

scissors.addEventListener("click", () => {
    playerSelection = "scissors";
        let a = fight(playerSelection);
    
        createDivAndRemove();

        if ((a == "You win! Rock beats Scissors!") || (a == "You win! Paper beats Rock!") || (a == "You win! Scissors beats Paper!")) {
            win++;
        } else if ((a == "You lose! Paper beats Rock!") || (a == "You lose! Scissors beats Paper!") || (a == "You lose! Rock beats Scissors!")) {
            lose++;
        }

        displayWins(win);
        displayLose(lose);
        
        if ((win === 5) || (lose === 5)) {
            if (win === 5) {
                win = lose = 0;
                createDivAndRemove("You won!");
                createDivAndRemove(`Click on "Remove" to play again!`);
            } else if (lose === 5) {
                win = lose = 0;
                createDivAndRemove("You lost!");
                createDivAndRemove(`Click on "Remove" to play again!`);
            }
        } else {
            createDivAndRemove(`Press the button "Remove" to update!`);
        }
    });
}

playRound();