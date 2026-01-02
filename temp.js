//temp file is here to build out new js code piece by piece. Easier to test things
    // individually, can compare to main.js as I go, editing bits and pieces.
    //Figured out adding the playRound() to eventListener, arguments of humanChoice and getComputerChoice
    // to make the game play on button click. Next need to figure out how to get result to update after game.
    //May need to rewrite logic for playRound()

const hChoiceBtns = document.querySelectorAll("button");
const hSelection = document.getElementById("humanSelection");
const cSelection = document.getElementById("compSelection");
const score = document.getElementById("score");
const winners = document.getElementById("result");

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

score.textContent = `The score is Human: ${humanScore} to Computer: ${computerScore}`;

let humanChoice = "";
let computerChoice = "";

hChoiceBtns.forEach((button) => {
    button.addEventListener("click", () => {
        humanChoice = button.id;
        getComputerChoice();
        playRound(humanChoice, computerChoice);
        hSelection.textContent = `Human wields ${button.id}`;
        score.textContent = `The score is Human: ${humanScore =+ humanScore} to Computer: ${computerScore =+ computerScore}`;
        playGame();
        });
    });

let playGame = function() {
    if (humanScore == 5) {
        score.textContent = 'Human score is 5! You win!';
        winners.textContent = 'Choose your weapon to start again';
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        score.textContent = 'Computer score is 5! Computer wins!';
        winners.textContent = 'Choose your weapon to start again';
        humanScore = 0;
        computerScore = 0;
    } else {
        return
    }
};


let getComputerChoice = function() {
    const start = Math.floor(Math.random() * 3);
        if (start === 0) {
        result = "rock";
        } else if (start === 1) {
        result = "paper";
        } else {
        result = "scissors";
        }
        computerChoice = result;
    cSelection.textContent = `Computer wields ${result}`;
    return result;
}

let playRound = function playRound(hum, comp) {
    const win = "You win!";
    const lose = "You lose! Try again!";
    const tie = "Tie! Try again!";

    if (hum === comp) {
        console.log(tie);
        winners.textContent = `Tie! Try again!`;
        return tie;
    } else if (hum === 'rock' && comp === 'scissors') {
        console.log(win);
        winners.textContent = 'You win!';
        humanScore++;
        return win;
    } else if (hum === 'paper' && comp === 'rock') {
        console.log(win);
        winners.textContent = 'You win!';
        humanScore++;
        return win;
    } else if (hum === 'scissors' && comp === 'paper') {
        console.log(win);
        winners.textContent = 'You win!';
        humanScore++;
        return win;
    } else {
        console.log(lose);
        winners.textContent = 'You lose, try again!';
        computerScore++;

        return lose;
    }
};

    


// playRound();
