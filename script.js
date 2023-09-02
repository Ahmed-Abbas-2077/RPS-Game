let playerScore = 0;
let computerScore = 0;

let rps = ['rock', 'paper', 'scissors'];

function computerPlay() {
  let random = Math.floor(Math.random() * rps.length);
  return rps[random];
}

function playerPlay() {
  let playerSelection = prompt('Rock, Paper, or Scissors?');
  return playerSelection.toLowerCase();
}

function playRound(playerPlay, computerPlay) {
  let player = playerPlay;
  let computer = computerPlay;

  if (player === computer) {
    return "It's a tie!";
  } else if (player === 'rock' && computer === 'scissors') {
    playerScore++;
    return 'You win! Rock beats scissors.';
  } else if (player === 'paper' && computer === 'rock') {
    playerScore++;
    return 'You win! Paper beats rock.';
  } else if (player === 'scissors' && computer === 'paper') {
    playerScore++;
    return 'You win! Scissors beats paper.';
  } else if (player === 'rock' && computer === 'paper') {
    computerScore++;
    return 'You lose! Paper beats rock.';
  } else if (player === 'paper' && computer === 'scissors') {
    computerScore++;
    return 'You lose! Scissors beats paper.';
  } else if (player === 'scissors' && computer === 'rock') {
    computerScore++;
    return 'You lose! Rock beats scissors.';
  } else {
    return 'Invalid input.';
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(playerPlay(), computerPlay()));
    console.log('Player Score: ' + playerScore);
    console.log('Computer Score: ' + computerScore);
  }

  if (playerScore > computerScore) {
    return 'You win!';
  } else if (playerScore < computerScore) {
    return 'You lose!';
  } else {
    return "It's a tie!";
  }
}


document.addEventListener('DOMContentLoaded', () => {
  let choices = document.querySelectorAll('.choice');
  choices.forEach((choice) => {
    choice.addEventListener('click', () => {
      // we get the player's choice and the computer's choice and pass it to playRound() to determine the winner
      let player = choice.id;
      let computer = computerPlay();
      let result = playRound(player, computer);
      // we get the player's score and the computer's score and display it on the screen
      let playerScoreDisplay = document.querySelector('#user-score');
      let computerScoreDisplay = document.querySelector('#computer-score');
      let resultDisplay = document.querySelector('.result');
      playerScoreDisplay.textContent = playerScore;
      computerScoreDisplay.textContent = computerScore;
      if (result) {
        resultDisplay.textContent = result;
      }
      if (playerScore === 5) {
        resultDisplay.textContent = 'You have won!';
        resultDisplay.classList.add('won');
        playerScore = 0;
        computerScore = 0;
        choices.forEach((choice) => {
          choice.classList.add('disabled');
        });
      } else if (computerScore === 5) {
        resultDisplay.textContent = 'You have lost!';
        resultDisplay.classList.add('lost');
        playerScore = 0;
        computerScore = 0;
        choices.forEach((choice) => {
          choice.classList.add('disabled');
        });
      }
    });
  });
});

