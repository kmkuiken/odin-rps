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
  playerHand.src = `../images/${playerChoice}.svg`;
  cpuHand.src = `../images/${cpuChoice}.svg`;
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

// Mouse over effect for the rock selector, changing the color to orange when over top
rock.addEventListener("mouseover", () => {
  rock.style.cssText = "background-color: #D5573B; border-color: #D5573B;";
  rockPhoto.style.cssText = "background-color: #D5573B; border-color: #D5573B;";
});
rock.addEventListener("mouseleave", () => {
  rock.style.cssText = "background-color: #F7ECE1; border-color: #F7ECE1;";
  rockPhoto.style.cssText = "background-color: #F7ECE1; border-color: #F7ECE1;";
});

// Mouse over effect for paper
paper.addEventListener("mouseover", () => {
  paper.style.cssText = "background-color: #D5573B; border-color: #D5573B;";
  paperPhoto.style.cssText = "background-color: #D5573B; border-color: #D5573B;";
});
paper.addEventListener("mouseleave", () => {
  paper.style.cssText = "background-color: #F7ECE1; border-color: #F7ECE1;";
  paperPhoto.style.cssText = "background-color: #F7ECE1; border-color: #F7ECE1;";
});

// Mouse over effect for scissors
scissors.addEventListener("mouseover", () => {
  scissors.style.cssText = "background-color: #D5573B; border-color: #D5573B;";
  scissorsPhoto.style.cssText = "background-color: #D5573B; border-color: #D5573B;";
});
scissors.addEventListener("mouseleave", () => {
  scissors.style.cssText = "background-color: #F7ECE1; border-color: #F7ECE1;";
  scissorsPhoto.style.cssText = "background-color: #F7ECE1; border-color: #F7ECE1;";
});

