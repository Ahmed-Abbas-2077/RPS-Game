let rps = ['rock', 'paper', 'scissors'];

function computerPlay() {
  let random = Math.floor(Math.random() * rps.length);
  return rps[random];
}

console.log(computerPlay());
