let playerScore = 0;
let cpuScore = 0;
const display = document.querySelector(".result");
const score = document.querySelector(".score");
const playerHand = document.querySelector(".player img");
const cpuHand = document.querySelector(".cpu img");
const rock = document.querySelector(".rock");
const rockPhoto = document.querySelector(".rock img");
const paper = document.querySelector(".paper");
const paperPhoto = document.querySelector(".paper img");
const scissors = document.querySelector(".scissors");
const scissorsPhoto = document.querySelector(".scissors img");


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
  switch (playerChoice) {
    case "rock":
      playerHand.src = "https://kmkuiken.github.io/odin-rps/images/rock.svg";
      break;

    case "paper":
      playerHand.src = "https://kmkuiken.github.io/odin-rps/images/paper.svg";
      break;

    case "scissors":
      playerHand.src = "https://kmkuiken.github.io/odin-rps/images/scissors.svg";
  }
  
  playerHand.src = `https://kmkuiken.github.io/odin-rps/images/${playerChoice}.svg`;
  cpuHand.src = `https://kmkuiken.github.io/odin-rps/images/${cpuChoice}.svg`;
}

function game(playerChoice) {
  let cpuChoice = getComputerChoice();
  let result = play(playerChoice, cpuChoice);
  
  changeHand("rock", "rock");

  // Activates hand motion animation then removes it so it can be played again when
  // the function is called again
  playerHand.style.animation = "moveUpDown 1.1s";
  cpuHand.style.animation = "moveUpDown 1.1s";
  playerHand.onanimationend = () => {
    playerHand.style.setProperty("animation", "initial");
  };
  cpuHand.onanimationend = () => {
    cpuHand.style.setProperty("animation", "initial");
  };


  setTimeout( () => {
    switch (result) {
      case 2:
        display.textContent = "Tie";
        score.textContent = `SCORE: ${playerScore} - ${cpuScore}`;
        changeHand(playerChoice, cpuChoice);
        return;

      case 1:
        display.textContent = "You Win!";
        playerScore++;
        score.textContent = `SCORE: ${playerScore} - ${cpuScore}`;
        changeHand(playerChoice, cpuChoice);
        return;

      case 0:
        display.textContent = "Sorry, you lose.";
        cpuScore++;
        score.textContent = `SCORE: ${playerScore} - ${cpuScore}`;
        changeHand(playerChoice, cpuChoice);
        return;
    }
  }, 1000);
}

// Event listener for clicking each selection
rock.addEventListener("click", () => game("rock"));
paper.addEventListener("click", () => game("paper"));
scissors.addEventListener("click", () => game("scissors"));
