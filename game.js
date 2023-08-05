let playerScore = 0;
let cpuScore = 0;
const display = document.querySelector(".result");
const score = document.querySelector(".score");
const playerHand = document.querySelector(".player img");
const cpuHand = document.querySelector(".cpu img");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice){
        case 0:
					return "rock";

				case 1:
					return "paper";

				case 2:
					return "scissors";
    }
}



function play(playerChoice, computerChoice) {
  //Player win = 1, player loss = 0, tie = 2

  if (playerChoice == "rock") {
    switch (computerChoice) {
      case "rock":
        return 2;
      
      case "paper":
        return 0;

      case "scissors":
        return 1
    }
  }

  if (playerChoice == "paper") {
    switch (computerChoice) {
      case "rock":
        return 1
      
      case "paper":
        return 2

      case "scissors":
        return 0
    }
  }

  if (playerChoice == "scissors") {
    switch (computerChoice) {
      case "rock":
        return 0
      
      case "paper":
        return 1

      case "scissors":
        return 2
    }
  }
}

function changeHand(playerChoice, cpuChoice) {
  playerHand.src = `../images/${playerChoice}.svg`;
  cpuHand.src = `../images/${cpuChoice}.svg`;
}

function game(playerChoice) {
  let cpuChoice = getComputerChoice();
  let result = play(playerChoice, cpuChoice);

  switch (result) {
    case 2:
      display.textContent = `Tie. ${playerChoice} is the same as ${cpuChoice}`;
      score.textContent = `SCORE: ${playerScore} - ${cpuScore}`;
      changeHand(playerChoice, cpuChoice);
      return;

    case 1:
      display.textContent = `You Win! ${playerChoice} beats ${cpuChoice}!`;
      playerScore++;
      score.textContent = `SCORE: ${playerScore} - ${cpuScore}`;
      changeHand(playerChoice, cpuChoice);
      return;

    case 0:
      display.textContent = `Sorry, you lose. ${cpuChoice} beats ${playerChoice}.`;
      cpuScore++;
      score.textContent = `SCORE: ${playerScore} - ${cpuScore}`;
      changeHand(playerChoice, cpuChoice);
      return;
  }

}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => game("rock"));
paper.addEventListener("click", () => game("paper"));
scissors.addEventListener("click", () => game("scissors"));