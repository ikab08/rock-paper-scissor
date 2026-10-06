let humanScore = 0;
let computerScore = 0;

rockBtn = document.querySelector("#rock");
paperBtn = document.querySelector("#paper");
scissorsBtn = document.querySelector("#scissors");

roundResult = document.querySelector("#roundResult");
player = document.querySelector("#playerScore");
computer = document.querySelector("#computerScore");


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

function playRound(humanChoice){
        humanChoice = humanChoice.toUpperCase();
        let computerChoice = getComputerChoice().toUpperCase();
        let result;
        if (humanChoice === computerChoice) {
            result = "Same choice !"
        } else {
            if (humanChoice == "ROCK" && computerChoice == "PAPER") {
                result = "Paper beats Rock";
                computerScore++;
            } else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
                result = "Rock beats Scissors"
                humanScore++;
            }else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
                result = "Paper beats Rock";
                humanScore++;
            } else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
                result = "Scissors beats paper"
                computerScore++;
            }
            if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
                result = "Scissors beats paper";
                humanScore++;
            } else if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
                result = "Rock beats Scissors"
                computerScore++;
            }
        }
        // return result;
        // console.log(result);
            roundResult.style.color = "black";
            roundResult.innerHTML = result;
            player.innerHTML = 'You : '+humanScore;
            computer.innerHTML = 'Computer : '+computerScore;
        if (humanScore == 5) {
            roundResult.style.color = "green";
            roundResult.innerHTML = "Congrats YOU WIN this game";
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore == 5) {
            roundResult.style.color = "red";
            roundResult.innerHTML = "Sorry YOU Loose this game";
            humanScore = 0;
            computerScore = 0;
        } 

        
}

rockBtn.addEventListener("click", ()=> playRound(rockBtn.value));
paperBtn.addEventListener("click", ()=> playRound(paperBtn.value));
scissorsBtn.addEventListener("click", ()=> playRound(scissorsBtn.value));