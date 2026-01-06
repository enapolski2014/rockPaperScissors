// Got almost all game logic working, just need to get a score of 5 for either player to 
    // remove the event listeners on the player choice buttons, or remove the buttons.
    // The reset button then needs to either add the event listener back or add the buttons back
    // 

let hChoiceBtns = document.querySelectorAll("button.hButton");
const hSelection = document.getElementById("humanSelection");
const cSelection = document.getElementById("compSelection");
const score = document.getElementById("score");
const winners = document.getElementById("result");
const gameSpace = document.getElementById("game");

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;



let humanChoice = "";
let computerChoice = "";

score.textContent = "Click Start to begin the game!";


let startButton = document.getElementById('start');
    startButton.addEventListener("click", () => {
        play();
        score.textContent = `The score is Human: ${humanScore} to Computer: ${computerScore}`;
        startButton.remove();
        return;
});



function play() {
    hChoiceBtns.forEach((button) => {
        button.addEventListener("click", function game() {
            humanChoice = button.id;
            getComputerChoice();
            playRound(humanChoice, computerChoice);
            playGame();
            hSelection.textContent = `Human wields ${button.id}`;
            score.textContent = `The score is Human: ${humanScore =+ humanScore} to Computer: ${computerScore =+ computerScore}`;
            // The below code works to remove event listener but only for the button clicked
            //  that causes the win state or for buttons clicked after the win state is 
            //      achieved. Gotta find a way to make it get rid of all event listeners
            //          on all buttons once win state is achieved.
            if (humanScore >= 5 || computerScore >= 5) {
                hChoiceBtns.forEach((btn) => {
                    btn.removeEventListener("click", game);
                });
            };
        });
    });
};
   

//Checks to see if either player has reached score of 5, if they have, run reset().
// Haven't figured out a way to kill player buttons in this function yet.


function playGame() {
    if (humanScore == 5) {
        score.style.fontSize = "1.6rem";
        score.textContent = 'Human score is 5! You win!';
        winners.style.fontSize = "1.6rem";
        winners.textContent = 'Press reset to start again!';
        reset();
        return;
    } else if (computerScore == 5) {
        score.style.fontSize = "1.6rem";
        score.textContent = 'Computer score is 5! Computer wins!';
        winners.style.fontSize = "1.6rem";
        winners.textContent = 'Press reset to start again!';
        reset();
        return;
    } else {
        return
    }
};



// reset sets all variables back to how they should be at the beginning of the game. 
//  like refreshing the page, but without pressing F5. Cant figure out how to remove 
//      event listeners in this function, maybe actually need to remove buttons in playGame()
//          and then append them back in this function. FUUUUUUUUCK

function reset() {

    let reset = document.createElement("button");
    reset.textContent = "Reset";
    gameSpace.appendChild(reset);
    reset.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        score.textContent = `The score is Human: ${humanScore} to Computer: ${computerScore}`;
        score.style.fontSize = "1rem";
        hSelection.textContent = '';
        cSelection.textContent = '';
        winners.textContent = '';
        winners.style.fontSize = "1rem";
        gameSpace.removeChild(reset);
        play();
    });

    return;
};
    
// self explanatory function.

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
};

//playRound() checks between the two inputs to determine winner, increments score for the winner
// also updates text content

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

    



