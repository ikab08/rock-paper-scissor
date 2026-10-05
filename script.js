function getComputerChoice() {
    let randomNumber = Math.random();
    let computerChoice;
    if (randomNumber < 0.3) {
        computerChoice = "Rock";
    } else if (randomNumber <= 0.6) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    return(prompt("Enter you choice"));
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toUpperCase();
        computerChoice = computerChoice.toUpperCase();
        let result;
        if (humanChoice === computerChoice) {
            result = "Nobody win! Same choice"
        } else {
            if (humanChoice == "ROCK" && computerChoice == "PAPER") {
                result = "You loose! Paper beats Rock";
                computerScore++;
            } else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
                result = "You win! Rock beats Scissors"
                humanScore++;
            }else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
                result = "You win! Paper beats Rock";
                humanScore++;
            } else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
                result = "You loose! Scissors beats paper"
                computerScore++;
            }
            if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
                result = "You win! Scissors beats paper";
                humanScore++;
            } else if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
                result = "You loose! Rock beats Scissors"
                computerScore++;
            }
        }
        // return result;
        console.log(result);
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        console.log(`${i} / YOU : ${humanScore} - Computer ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Congrats YOU WIN");
    } else if (humanScore < computerScore) {
        console.log("Sorry YOU Loose");
    } else {
        console.log("It's tie")
    }
    
}

playGame();