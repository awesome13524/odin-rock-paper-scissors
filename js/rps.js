// Generate computer input
function getComputerChoice(){
    // Randomly generate a number from 0 to 2
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
    // Return message depending on winner
}
// Play a 5 round game
function game(){
    // Initialize player and computer scores
    
    // Play rounds until either scores equals 5
    while(){
        // Prompt player for input until they input a proper value
        while(){

        }
        // Play a round
        switch(playRound()){
            //If it's a tie tell the player it's a tie

            // If the player wins add 1 to their score and tell the player they won the round

            // If the computer wins add 1 to its score and tell the player they lost the round
            
        }

    }
    // Display message depending on game winner
    switch(){

    }
}