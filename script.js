let playerScore = 0;
let computerScore = 0;

let pScoreboard = document.querySelector('.p-count');
let cScoreboard = document.querySelector('.c-count');
let roundResult = document.querySelector('.result');

let playChoice;
let compChoice;

function computerChoice(){
  const computerOptions = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random()*3);
  compChoice = computerOptions[randomNum];
};

function throwRock(){
  playChoice = 'rock';
  computerChoice();
  game(playChoice, compChoice);
}
function throwPaper(){
  playChoice = 'paper';
  computerChoice();
  game(playChoice, compChoice);
}
function throwScissors(){
  playChoice = 'scissors';
  computerChoice();
  game(playChoice, compChoice);
}

function playerWins(){
  playerScore = playerScore + 1;
  roundResult.innerHTML = 'You Win!';
  pScoreboard.innerHTML = playerScore;
}
function computerWins(){
  computerScore = computerScore + 1;
  roundResult.innerHTML = 'You Loose, Try Again :)';
  cScoreboard.innerHTML = computerScore;
}


function game(playerChoice, computerChoice){
  console.log(playerChoice, computerChoice)
  if (playerChoice === 'rock' && computerChoice === 'paper'){
    computerWins();
  } else if (playerChoice === 'rock' && computerChoice === 'scissors'){
    playerWins();
  } else if (playerChoice === 'paper' && computerChoice === 'rock'){
    playerWins();
  } else if (playerChoice === 'paper' && computerChoice === 'scissors'){
    computerWins();
  } else if (playerChoice === 'scissors' && computerChoice === 'paper'){
    playerWins();
  } else if (playerChoice === 'scissors' && computerChoice === 'rock'){
    computerWins();
  } else {
    roundResult.innerHTML = 'Tie!';
  }
}

function resetGame() {
    playerScore = 0;
    pScoreboard.innerHTML = playerScore;
    computerScore = 0;
    cScoreboard.innerHTML = computerScore;
    roundResult.innerHTML = '';
}
