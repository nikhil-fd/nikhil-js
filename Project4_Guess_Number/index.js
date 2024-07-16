//Guess Number Project Vdo Time Stamp--3:15:00-3:21:00

let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.getElementById("numguess");
const submit = document.querySelector("#btn");
const guessSlot = document.getElementById("prevGuess");
const remaining = document.getElementById("remainGuess");
const lowHigh = document.querySelector("#lowHigh");
const startOver = document.getElementById("finalResult");

const p = document.createElement("p");

let preGuess = [];
let numGuess = 1;
let playGame = true;

//here we are checking player is avilable or not to paly game
if (playGame) {
  submit.addEventListener("click", (e) => {
    //preventDefault() removeing any default value from input field
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

//🎁function1:
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    preGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

//🎁function2:
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`<font color="orange">Number is Too low</font>`);
  } else if (guess > randomNumber) {
    displayMessage(`<font color="pink">Number is Too High</font>`);
  }
}

//🎁function3:
function displayGuess(guess) {
  //below it cleans the value from inside input field
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

//🎁function4:
function displayMessage(msg) {
  lowHigh.innerHTML = `<h2>${msg}</h2>`;
}

//🎁function5:
function endGame() {
  //it cleans the value inside input field
  userInput.value = '';
  //it disableing the input field using input element's "disable" attribute
  userInput.setAttribute("disabled", "");
  //classList.add -- below we added class name as 'button' inside the created paragraph (p).
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

//🎁function6:
function newGame() {
const newGameBtn = document.querySelector("#newGame")
newGameBtn.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    preGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p) ;
    playGame = true;
});
}
