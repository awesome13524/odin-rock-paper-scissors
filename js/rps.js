// Generate computer input
function getComputerChoice(){
    // Randomly generate number from 0 to 2
    const num = Math.floor(Math.random() * 3);

    // Return choice based on number
    switch(num){
        case 0: 
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Play a single round
// Take player input and computer input as parameters
function playRound(playerSelection, computerSelection){
    // Return result of game
    if(playerSelection === computerSelection){
        return `You and the computer chose ${playerSelection}. It's a tie.`
    }
    if(playerSelection === "rock"){
        switch(computerSelection){
            case "paper":
                computerScore++;
                return "You chose rock and the computer chose paper. " +
                "You lost the round.";
            case "scissors":
                playerScore++;
                return "You chose rock and the computer chose scissors. " +
                "You won the round.";
        }
    }
    if(playerSelection === "paper"){
        switch(computerSelection){
            case "rock":
                playerScore++;
                return "You chose paper and the computer chose rock. " +
                "You won the round.";
            case "scissors":
                computerScore++;
                return "You chose paper and the computer chose scissors. " +
                "You lost the round.";
        }
    }
    if(playerSelection === "scissors"){
        switch(computerSelection){
            case "rock":
                computerScore++;
                return "You chose scissors and the computer chose rock. " +
                "You lost the round.";
            case "paper":
                playerScore++;
                return "You chose scissors and the computer chose paper. " +
                "You won the round.";
        }
    }
}

function game(playerSelection){
    computerChoice = getComputerChoice();
    roundResult.textContent = playRound(playerSelection, computerChoice);
    score.textContent = 
    `Current score is Player: ${playerScore}, Computer: ${computerScore}`;
    if(playerScore === 5){
        roundResult.textContent = "Congratulations! You win!";
        score.textContent = 
        `Final score is Player: ${playerScore}, Computer: ${computerScore}.`
    }
    if(computerScore === 5){
        roundResult.textContent = "Game over! You lose!";
        score.textContent = 
        `Final score is Player: ${playerScore}, Computer: ${computerScore}.`
    }

}

let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;
const buttons = document.querySelectorAll("button");
const roundResult = document.querySelector("#roundResult");
const score = document.querySelector("#score");


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(playerScore === 5 || computerScore === 5){}
        else{
            game(button.id);
        }
    })
})