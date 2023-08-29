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
    return 'You win! Rock beats scissors.';
  } else if (player === 'paper' && computer === 'rock') {
    return 'You win! Paper beats rock.';
  } else if (player === 'scissors' && computer === 'paper') {
    return 'You win! Scissors beats paper.';
  } else if (player === 'rock' && computer === 'paper') {
    return 'You lose! Paper beats rock.';
  } else if (player === 'paper' && computer === 'scissors') {
    return 'You lose! Scissors beats paper.';
  } else if (player === 'scissors' && computer === 'rock') {
    return 'You lose! Rock beats scissors.';
  } else {
    return 'Invalid input.';
  }
}

console.log(playRound(playerPlay(), computerPlay()));
