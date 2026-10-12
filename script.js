let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const playBtn = document.querySelector("#playAgain");
const roundResult = document.querySelector("#roundResult");
const playerDisplayScore = document.querySelector("#playerScore");
const computerDisplayScore = document.querySelector("#computerScore");


const choices = ["rock", "paper", "scissors"];


function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function showResult(result, humanChoice, computerChoice) {
    let message="";
    switch (result) {
        case "draw":
            message = `Same choice ${humanChoice}`;
            break;
        case "beat":
            humanScore++;
            message = `You win!  ${humanChoice} beats ${computerChoice}`;
            break;
        case "nobeat":
            computerScore++;
            message = `You loose!  ${computerChoice} beats ${humanChoice}`;
            break;
        default:
            message = "";
            break;
    }
    roundResult.textContent = message;
}

function updateScores() {
    playerDisplayScore.textContent = `You : ${humanScore}`;
    computerDisplayScore.textContent = `Computer : ${computerScore}`;
}

function setAttriuteButton(mode){
    if (mode === "reset") {
        playBtn.hidden = true;
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
    } else {
        playBtn.removeAttribute("hidden");
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
        
}

function chekGameOver() {
    if (humanScore == 5) {
        roundResult.classList.add('win');
        roundResult.textContent = "Congrats YOU WIN this game";
        gameOver = true;
        setAttriuteButton("");
    } else if (computerScore == 5) {
        roundResult.classList.add('lose');
        roundResult.textContent = "Sorry YOU Lose this game";
        gameOver = true;
        setAttriuteButton("");
    } 
}

function playRound(humanChoice){
    if (gameOver) return;

    const computerChoice = getComputerChoice();
    let result;

    if (humanChoice === computerChoice) {
        result = "draw";
    } else {
        result = (humanChoice == "rock" && computerChoice === "scissors")
        || (humanChoice == "paper" && computerChoice === "rock" ) 
        || (humanChoice == "scissors" && computerChoice === "paper" ) ? "beat" : "nobeat" ;
    }
    
    showResult(result, humanChoice, computerChoice);
    updateScores();
    chekGameOver();
}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    gameOver = false;
    setAttriuteButton('reset');
    updateScores();
    showResult();
    roundResult.classList.remove('win', 'lose');
}
rockBtn.addEventListener("click", ()=> playRound(rockBtn.value));
paperBtn.addEventListener("click", ()=> playRound(paperBtn.value));
scissorsBtn.addEventListener("click", ()=> playRound(scissorsBtn.value));

playBtn.addEventListener("click", resetGame);