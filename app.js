let playerResult = 0;
let computerResult = 0;
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const updateResults = document.querySelector('.results');
const whoWins = document.querySelector('.win-lose');
const rockButton = document.querySelector('.Rock');
const paperButton = document.querySelector('.Paper');
const scissorsButton = document.querySelector('.Scissors');


function gameChoice (){
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () =>  playRound('paper'));
scissorsButton.addEventListener('click', () =>  playRound('scissors'));
}


    //probably going to need a function after this to reset the game after five rounds. 
    //Also need to dom element this console.log into the screen 
    function winLose () {
        if (playerResult == 5){
            whoWins.textContent = 'You Win!';
        } else if (computerResult == 5) {
            whoWins.textContent = 'You Lose!' ;
        }
    }


function computerPlay () {
    let choice = Math.floor(Math.random()*3);
    if (choice === 0 ) {
        return(`rock`);
    } else if (choice === 1) {
        return(`scissors`);
    } else {
        return(`paper`);
    }
    
    }
    
    
    function playRound (playerSelection, computerSelection) {
    
    computerSelection = computerPlay();
    
    if (playerSelection === computerSelection){
        return("It is a tie!");
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerResult++;
        playerScore.textContent = playerResult;
        updateResults.textContent = 'You chose rock | computer chose scissors!';
        
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        computerResult++;
        computerScore.textContent = computerResult;
        updateResults.textContent = 'You chose rock | computer chose paper!';
        
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerResult++;
        playerScore.textContent = playerResult;
        updateResults.textContent = 'You chose paper | computer chose rock!';
        
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        computerResult++;
        computerScore.textContent = computerResult;
        updateResults.textContent = 'You chose paper | computer chose scissors!';
        
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        computerResult++;
        computerScore.textContent = computerResult;
        updateResults.textContent = 'You chose scissors | computer chose rock!';
        
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerResult++;
        playerScore.textContent = playerResult;
        updateResults.textContent = 'You chose scissors | computer chose paper!';
        
    }
    winLose();
    }

    gameChoice();



