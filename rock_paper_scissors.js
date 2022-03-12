// rock_paper_scissors.js
// this program plays 5 rounds of rock paper rock_paper_scissors
// the program gets player input from a prompt
// then randomly selects r, p, or s for the computer
// then tabulates whether this was a win, lose, or draw for the player
// at the end of 5 rounds, it reports whether the winner = player, CPU, or tie
// *text commit

//function computerSelect(computerOptions) {
//  computerSelect = computerOptions[Math.floor(Math.random() *
//      computerOptions.length)];
//  return computerSelect;
//}


//need to addEventListener for all buttons

console.dir(document);

// we use the .forEach method to iterate through each button
document.getElementById("btn").addEventListener("click", userChooses);
//console.log(x);

function userChooses () {
  console.log(document.getElementById("btn").innerHTML);
}

//console.log(x);

function choice () {
  const options = ['scissors', 'paper', 'rock'];

  return options[Math.floor(Math.random() *
      options.length)];
}

function alertFunction() {
  alert(`You chose!`);
}

 function playRound() {
    //let playerSelection = window.prompt("Rock, paper, or scissors?");
    let playerSelection = 0;
    //console.log(document.querySelectorAll('#btn')[1].innerHTML);
    let computerSelection = choice();

    return console.log(determineWinner(playerSelection, computerSelection))
  }


function determineWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
      return "Tie! Try again!";
    }

    if (playerSelection === "rock" && computerSelection != "paper" ||
        playerSelection === "paper" && computerSelection != "scissors" ||
            playerSelection === "scissors" && computerSelection != "rock") {
      return `You win: ${playerSelection[1]} beats ${computerSelection}!`;
    } else {
      return `You lose: ${computerSelection} beats ${playerSelection[1]}!`;
    }

  }




playRound();


// function playGame () {
//   let player = 0;
//   let computer = 0;
//   let tie = 0;
//   const outcomeList = ['Player', 'Computer', 'Tie'];
//   const computerOptions = ['scissors', 'paper', 'rock'];

  // for (let roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++) {
  //   let computerSelection = computerOptions[Math.floor(Math.random() *
  //       computerOptions.length)];
  //   const playerSelection = window.prompt("Rock, paper, or scissors?");
  //   let outcome = playRound(playerSelection, computerSelection);
  //
  //   if (outcome.includes("You win!")) {
  //     player += 1;
  //   } else if (outcome.includes("You lose!")) {
  //     computer += 1;
  //   } else if (outcome.includes("Tie!")) {
  //     tie += 1;
  //   }
  //   //console.log([`player=${player}`, `computer=${computer}`, `tie=${tie}`]);
  //   outcome = playRound(playerSelection, computerSelection);
  //
  //   }
    //let finalTally = [player, computer, tie];
    //let winner = Math.max.apply(Math, finalTally);

    //if (finalTally[0] == finalTally[1]) {
    //  return "Tie.";
    //} else {
    //return `${outcomeList[finalTally.indexOf(winner)]} wins with ${winner}`;
    //}
//}

//console.log(playGame());
