function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection == computerSelection) {
    return "Tie! Try again!"

  }

  if (playerSelection === "rock" && computerSelection != "paper" || playerSelection === "paper" && computerSelection != "scissors" || playerSelection === "scissors" && computerSelection != "rock") {
    return `You win! ${playerSelection} beats ${computerSelection}`
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`
  }
}

function game () {
  let player = 0;
  let computer = 0;
  let tie = 0;
  const outcome_list = ['Player', 'Computer', 'Tie'];

  for (let roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++) {
    let computerPlay = ['scissors', 'paper', 'rock'];
    let computerSelection = computerPlay[Math.floor(Math.random() * computerPlay.length)]
    const playerSelection = window.prompt("Rock, paper, or scissors?");
    let outcome = playRound(playerSelection, computerSelection);
    
    if (outcome.includes("You win!")) {
      player += 1;
    } else if (outcome.includes("You lose!")) {
      computer += 1;
    } else if (outcome.includes("Tie!")) {
      tie += 1;
    }

    console.log([`player=${player}`, `computer=${computer}`, `tie=${tie}`]);
    outcome = playRound(playerSelection, computerSelection);

    }
    let final_tally = [player, computer, tie];
    let winner = Math.max.apply(Math, final_tally);

    if (final_tally[0] == final_tally[1]) {
      return "Tie."
    } else {
    return `The winner is ${outcome_list[final_tally.indexOf(winner)]} with ${winner}`;
    }
}

console.log(game());
