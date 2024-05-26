(function () {
  const userInput = document.querySelector("#user-input");
  const submitBtn = document.querySelector(".submit-btn");
  const playAgainBtn = document.querySelector(".play-again-btn");
  const resultMessage = document.querySelector(".result-message");
  const allGuesses = document.querySelector(".all-guesses");
  const guessForm = document.querySelector(".guess-form");

  let allGuessesArray = [];
  let count = 0;
  let computerNumber = generateRandomNumber();
  let alertMessages = generateNewResultMessages();

  // Function to generate random number
  function generateRandomNumber() {
    return Math.floor(Math.random() * 101);
  }

  // Function to update alert messages
  function generateNewResultMessages() {
    return [
      "Too low!",
      "Too high!",
      "You got it! Congrats",
      `You lost! The number was ${computerNumber}`,
    ];
  }

  // Function to handle user's guess
  function handleGuess(e) {
    e.preventDefault();
    playAgainBtn.disabled = true;

    const userInputValue = parseInt(userInput.value);

    if (count <= 10) {
      if (userInputValue < computerNumber) {
        resultMessage.innerText = alertMessages[0];
      } else if (userInputValue > computerNumber) {
        resultMessage.innerText = alertMessages[1];
      } else if (userInputValue === computerNumber) {
        resultMessage.innerText = alertMessages[2];
        playAgainBtn.disabled = false;
        submitBtn.disabled = true;
        userInput.disabled = true;
      }
      count++;
    }

    if (userInputValue !== computerNumber && count === 10) {
      resultMessage.innerText = alertMessages[3];
      playAgainBtn.disabled = false;
      submitBtn.disabled = true;
      userInput.disabled = true;
    }

    allGuessesArray.push(userInputValue);
    allGuesses.innerText = "Your guesses: " + allGuessesArray.join(", ");

    guessForm.reset();
    console.log(count);
  }

  // Function to reset game
  function resetGame() {
    computerNumber = Math.floor(Math.random() * 101);
    alertMessages = generateNewResultMessages();
    resultMessage.innerText = "";
    allGuesses.innerText = "";
    allGuessesArray = [];
    count = 0;
    guessForm.reset();
    playAgainBtn.disabled = true;
    submitBtn.disabled = false;
    userInput.disabled = true;
    userInput.disabled = false;
  }

  playAgainBtn.disabled = true;
  guessForm.addEventListener("submit", handleGuess);
  playAgainBtn.addEventListener("click", resetGame);
})();
