function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice){
        case 0:
					return "Rock";

				case 1:
					return "Paper";

				case 2:
					return "Scissors";
    }
}



function play(playerChoice, computerChoice) {
  //Player win = 1, player loss = 0, tie = 2

  if (playerChoice == "Rock") {
    switch (computerChoice) {
      case "Rock":
        return 2;
      
      case "Paper":
        return 0;

      case "Scissors":
        return 1;
    }
  }

  if (playerChoice == "Paper") {
    switch (computerChoice) {
      case "Rock":
        return 1;
      
      case "Paper":
        return 2;

      case "Scissors":
        return 0;
    }
  }

  if (playerChoice == "Scissors") {
    switch (computerChoice) {
      case "Rock":
        return 0;
      
      case "Paper":
        return 1;

      case "Scissors":
        return 2;
    }
  }
}

function game() {
  let playerScore = 0;
  let cpuScore = 0;
  let gameCounter = 0;

  while (gameCounter < 5) {
    let result = play(prompt("Enter your selection, Rock, Paper, or Scissors"), getComputerChoice);

    switch (result) {

    }
  }
}