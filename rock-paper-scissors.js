const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'scissors' || userInput === 'rock' || userInput === 'paper' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log(`The ${userInput} choice is invalid!`);
  }
};


const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random() * (0, 3));
  switch (computerChoice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
};


const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    console.log('Tie!');
  } else if (userChoice === 'bomb') {
    console.log('The user explodes all and won!!');
  } else if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return console.log('The user won!');
    } else {
      return console.log('The computer won!');
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return console.log('The user won!');
    } else {
      return console.log('The computer won!');
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return console.log('The user won!');
    } else {
      return console.log('The computer won!');
    }
  }
};


const playGame = () => {
  var userChoice = getUserChoice('bomb');
  var computerChoice = getComputerChoice();
  console.log(`User: ${userChoice} Computer: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}


playGame();
