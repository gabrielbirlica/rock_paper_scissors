const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay =  document.getElementById("playerScoreDisplay");
const computerScoreDisplay =  document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
   // Alegerea este facuta prin Math.random si este rontujita, 
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";
    // verifica daca este egalitate
  if (playerChoice === computerChoice) {
    result = "It's a tie";
    // swich care verifica ce a ales playerul si ce are calculatorul.
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "You Win" : "You lose";
        break;
      case "paper":
        result = computerChoice === "rock" ? "You Win" : "You lose";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "You Win" : "You lose";
        break;
    }
  }

  // Afiseaza ce a ales playerul/calculatorul si rezultatul
  playerDisplay.textContent = `Player Choices: ${playerChoice}`;
  computerDisplay.textContent = `Computer Choices: ${computerChoice}`
  resultDisplay.textContent = result;


  // prin metoda .remove scoate clasele greenText si redText de fiecare data cand se actualizeaza jocul
  resultDisplay.classList.remove("greenText","redText");


 // swich pentru actualizarea scorului si pentru afisarea uni text diferit. 
  switch(result){
    case "You Win":
        resultDisplay.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        break;
    case "You lose":
        resultDisplay.classList.add("redText");
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        break;
     }
}
