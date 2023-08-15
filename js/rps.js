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
            playerChoice = prompt("Rock, paper, or scissors?" , "");
            if(playerChoice === null){
                return alert("Game cancelled");
            }
            playerChoice = playerChoice.toLowerCase();
            if(playerChoice === "rock" || playerChoice === "paper" || 
            playerChoice === "scissors"){
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
                alert("You chose: " + playerChoice + "\nThe computer chose: " +
                computerChoice + "\nIt's a tie\nCurrent score is\nPlayer: " + 
                playerScore + "\nComputer: " + computerScore);
                break;
            // If player wins add 1 to their score and tell player
            case "win":
                alert("You chose: " + playerChoice + "\nThe computer chose: " +
                computerChoice +
                "\nYou won the round\nCurrent score is\nPlayer: " + 
                ++playerScore + "\nComputer: " + computerScore);
                break;
            // If computer wins add 1 to its score and tell player
            case "lose":
                alert("You chose: " + playerChoice + "\nThe computer chose: " +
                computerChoice +
                "\nYou lost the round\nCurrent score is\nPlayer: " + 
                playerScore + "\nComputer: " + ++computerScore);
                break;
        }
    }
    
    // Display message depending on game winner
    if(playerScore === 5){
        alert("Congratulations! You won the game!");
    }
    if(computerScore === 5){
        alert("Game Over!");
    }
}

game()