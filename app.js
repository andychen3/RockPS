//variables
let playerResult = 0;
let computerResult = 0;

//Queryselectors for elements 
const playerScore = document.querySelector('.playersScore');
const computerScore = document.querySelector('.computersScore');
const updateResults = document.querySelector('.results');
const whoWins = document.querySelector('.win-lose');
const rockButton = document.querySelector('.Rock');
const paperButton = document.querySelector('.Paper');
const scissorsButton = document.querySelector('.Scissors');

//Eventlisteners for user choices
function gameChoice (){
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () =>  playRound('paper'));
scissorsButton.addEventListener('click', () =>  playRound('scissors'));
}

//Possibly add a reset game after 5 rounds

// Win or lose function
function winLose () {
    if (playerResult == 5){
        whoWins.textContent = 'You Win!';
    } else if (computerResult == 5) {
        whoWins.textContent = 'You Lose!' ;
    }
}    

//Computer selection
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
      
//player selection function compared to computer choice
function playRound (playerSelection, computerSelection) {
computerSelection = computerPlay();

    if (playerSelection === computerSelection){
        updateResults.textContent = "It is a tie!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerResult++;
        playerScore.textContent = playerResult;
        updateResults.textContent = 'You chose rock | Computer chose scissors!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        computerResult++;
        computerScore.textContent = computerResult;
        updateResults.textContent = 'You chose rock | Computer chose paper!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerResult++;
        playerScore.textContent = playerResult;
        updateResults.textContent = 'You chose paper | Computer chose rock!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        computerResult++;
        computerScore.textContent = computerResult;
        updateResults.textContent = 'You chose paper | Computer chose scissors!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        computerResult++;
        computerScore.textContent = computerResult;
        updateResults.textContent = 'You chose scissors | Computer chose rock!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerResult++;
        playerScore.textContent = playerResult;
        updateResults.textContent = 'You chose scissors | Computer chose paper!';
    }
    winLose();
}

//start game
gameChoice();



