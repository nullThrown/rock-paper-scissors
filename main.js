//what is it that we need to change? what is the functionality of this program.
//we need to change user and computer score based on who has won.
//we need to display who won the game
//we need to add functionality to each button(rock, paper, or scissors)
//we need to create a computer to run against
//

//main function-- an attack is chosen
//eventlisteners check placement of click and
//computer chooses an attack method based on a randomizing algorithm
//winner is determined and displayed to the screen
//counter adds either a point for user or comp or neither
var userScore = 0;
var computerScore = 0;
var playerChoice = '';
var computerChoiceVal = '';
var playerWin = true;
var result = '';
var userScore_span = document.getElementById('user-score');
var computerScore_span = document.getElementById('computer-score');
var winnerDisplay = document.getElementById('winner-display');
var choice = document.querySelector('.choice');


//function works
function computerChoice() {
  var rockPaperScissors = ['r', 'p', 's'];
  var computerChoiceNum = Math.floor(Math.random() * 3);
  computerChoiceVal = rockPaperScissors[computerChoiceNum];
}
choice.addEventListener('click', function(event) {
  var eventClicked = event.target;
  if (eventClicked.id === 'r') {
    playerChoice = 'r';
  } else if (eventClicked.id === 'p') {
    playerChoice = 'p';
  } else if (eventClicked.id === 's') {
    playerChoice = 's';
  }
  else{
    return;
  }

  computerChoice();
  game(playerChoice);
  changeWinnerDisplay();
  increaseScore();
});

function game(playerChoice) {
  playerWin = true;
  switch (playerChoice + computerChoiceVal) {
    case 'rs':
      result = "rock beats scissors, player Wins!";
      break;
    case 'pr':
      result = "paper beats rock, player Wins!";
      break;
    case 'sp':
      result = "scissors beats paper, player Wins!";
      break;

    case 'sr':
      result = "Rock beats scissors, computer Wins!";
      playerWin = false;
      break;
    case 'rp':
      result = "Paper beats rock, computer Wins!";
      playerWin = false;
      break;
    case 'ps':
      result = "Scissors beats paper, computer Wins!";
      playerWin = false;
      break;
    case 'rr':
      result = "Draw.";
      break;
    case 'pp':
      result = "Draw.";
      break;
    case 'ss':
      result = "Draw.";
      break;

  }
}

function changeWinnerDisplay() {
  document.getElementById('winner-display').innerHTML = result;
}

function increaseScore() {
  if (result.length === 5){}
  else if (playerWin === true) {
    userScore++;
    document.getElementById('user-score').innerHTML = userScore;
  } else if (playerWin === false) {
    computerScore++;
    document.getElementById('computer-score').innerHTML = computerScore;
  }

}
