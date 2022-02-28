let computerPlay = ['scissors', 'paper', 'scissors'];
let computerSelection = computerPlay[Math.floor(Math.random() * computerPlay.length)]

console.log(computerSelection)

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection == computerSelection) {
    return "Tie! Try again!"

  }

  if (playerSelection == "rock" && computerSelection != "paper") {

    return `You win! ${playerSelection} beats ${computerSelection}`

  } else {

    return `You lose! ${computerSelection} beats ${playerSelection}`

  }
}

function game (playRound) {
  for (let i = 0; i < 5; i++) {

}
}

const playerSelection = window.prompt("Rock, paper, or scissors?");

console.log(playRound(playerSelection, computerSelection));
console.log(game(playRound));

//Write a function that plays a single round of Rock Paper Scissors.
//The function should take two parameters - the playerSelection and computerSelection
//return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
