let rps = ['rock', 'paper', 'scissors'];

function computerPlay() {
  let random = Math.floor(Math.random() * rps.length);
  return rps[random];
}

console.log(computerPlay());

function playerPlay() {
  let playerSelection = prompt('Rock, Paper, or Scissors?');
  return playerSelection.toLowerCase();
}

console.log(playerPlay());
