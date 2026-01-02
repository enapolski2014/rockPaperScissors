// Got almost all game logic working, just need to get a score of 5 for either player to 
    // remove the event listeners on the player choice buttons, or remove the buttons.
    // The reset button then needs to either add the event listener back or add the buttons back
    // 

let hChoiceBtns = document.querySelectorAll("button.hButton");
const hSelection = document.getElementById("humanSelection");
const cSelection = document.getElementById("compSelection");
const score = document.getElementById("score");
const winners = document.getElementById("result");
const game = document.getElementById("game");

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;



let humanChoice = "";
let computerChoice = "";

score.textContent = "Click Start to begin the game!";


let startButton = document.getElementById('start');
    start.addEventListener("click", () => {
        play();
        score.textContent = `The score is Human: ${humanScore} to Computer: ${computerScore}`;
        startButton.remove();
});



function play() {
    hChoiceBtns.forEach((button) => {
        button.addEventListener("click", () => {
            humanChoice = button.id;
            getComputerChoice();
            playRound(humanChoice, computerChoice);
            playGame();
            hSelection.textContent = `Human wields ${button.id}`;
            score.textContent = `The score is Human: ${humanScore =+ humanScore} to Computer: ${computerScore =+ computerScore}`;
        });
    });
}



function playGame() {

    if (humanScore === 5) {
        let container = document.getElementById('btnContainer');
        container.remove();
        score.style.fontSize = "1.6rem";
        score.textContent = 'Human score is 5! You win!';
        winners.style.fontSize = "1.6rem";
        winners.textContent = 'Press reset to start again!';
        reset();
    } else if (computerScore === 5) {
        let container = document.getElementById('btnContainer');
        container.remove();
        score.style.fontSize = "1.6rem";
        score.textContent = 'Computer score is 5! Computer wins!';
        winners.style.fontSize = "1.6rem";
        winners.textContent = 'Press reset to start again!';
        reset();
    } else {
        return
    }
};



function reset() {
    let reset = document.createElement("button");
    reset.textContent = "Reset";
    game.appendChild(reset);

    reset.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        score.textContent = `The score is Human: ${humanScore} to Computer: ${computerScore}`;
        score.style.fontSize = "1rem";
        hSelection.textContent = '';
        cSelection.textContent = '';
        winners.textContent = '';
        winners.style.fontSize = "1rem";
        game.removeChild(reset);

    });
    play();
    return;
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
