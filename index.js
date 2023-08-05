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

function game(playerChoice) {
  let playerScore = 0;
  let cpuScore = 0;

  let result = play(playerChoice, getComputerChoice());

  switch (result) {
    case 2:
      console.log("Tie");
      break;

    case 1:
      console.log("You Win!");
      playerScore++;
      break;

    case 0:
      console.log("Sorry, you lose.");
      cpuScore++;
      break;
  }


  if (playerScore > cpuScore) {
    console.log(`You win! \n${playerScore} - ${cpuScore}`);
    return;
  }

  if (playerScore < cpuScore) {
    console.log(`You lose :( \n${playerScore} - ${cpuScore}`);
    return;
  }

  if (playerScore == cpuScore) {
    console.log(`You tied :| \n${playerScore} - ${cpuScore}`);
    return;
  }
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener("click", game("rock"));
paper.addEventListener("click", game("paper"));
scissors.addEventListener("click", game("scissors"));