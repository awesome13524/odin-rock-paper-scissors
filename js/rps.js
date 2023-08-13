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
        return "tie"
    }
    if(playerSelection === "rock"){
        switch(computerSelection){
            case "paper":
                return "lose";
            case "scissors":
                return "win";
        }
    }
    if(playerSelection === "paper"){
        switch(computerSelection){
            case "rock":
                return "win";
            case "scissors":
                return "lose";
        }
    }
    if(playerSelection === "scissors"){
        switch(computerSelection){
            case "rock":
                return "lose";
            case "paper":
                return "win";
        }
    }
}
// Play a 5 round game
function game(){
    // Initialize player and computer scores
    let playerScore = 0
    let computerScore = 0
    // Play rounds until either scores equals 5
    while(playerScore < 5 && computerScore < 5){
        // Prompt player for input until they input a proper value
        let keepGoing = true;
        let playerChoice;
        while(keepGoing){
            playerChoice = prompt("Rock, paper, or scissors?" , "").toLowerCase;
            if(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"){
                keepGoing = false;
            }
        }
        // Generate computer input
        let computerChoice = getComputerChoice();
        // Play a round
        let result = playRound(playerChoice, computerChoice)
        switch(result){
            //If tie tell player they tied the round
            case "tie":
                console.log("You chose: " + playerChoice);
                console.log("The computer chose: " + computerChoice);
                console.log("It's a tie");
                console.log("Current score is player: " + playerScore + " computer: " + computerScore);
                break;
            // If player wins add 1 to their score and tell player they won the round
            case "win":
                console.log("You chose: " + playerChoice);
                console.log("The computer chose: " + computerChoice);
                console.log("You won the round");
                ++playerScore;
                console.log("Current score is player: " + playerScore + " computer: " + computerScore);
                break;
            // If computer wins add 1 to its score and tell player they lost the round
            case "lose":
                console.log("You chose: " + playerChoice);
                console.log("The computer chose: " + computerChoice);
                console.log("You lost the round");
                ++computerScore;
                console.log("Current score is player: " + playerScore + " computer: " + computerScore);
                break;
        }
    }
    // Display message depending on game winner
    if(playerScore === 5){
        console.log("Congratulations! You won the game!")
    }
    if(computerScore === 5){
        console.log("Game Over!")
    }
}

console.log(game());