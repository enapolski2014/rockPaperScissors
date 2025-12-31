/*
Logic for rockpaper scissors computer choice:
create function for getComputerChoice
assign a variable that = computer choice

computer choice runs when human choice is input into console

    Math.random returns number >= 0 and <= 1
    computer chooses 1 of three options
        if >= 0 and <= .33, return rock
        if > .33 and <= .66, return paper
        if > .66 and <= .99, return scissors

*/




/*
Logic for human choice:
create a funciton for getHumanChoice
Use prompt method to get human choice
Human choice will return one of the valid choices 
    depending on what the user inputs
User input needs case insensitivity

*/



/*
Declare player score variables
Create two new variables named humanScore and computerScore in the GLOBAL SCOPE
Initialize those variables with a value of 0
*/


/*

Logic to play a single round
Create function named playRound()
Compare humanChoice to computerChoice
Started with a number value comparison, that doesn't work
just directly compare inputs
if human input is paper and compIn is rock, win
    if humIn is paper and scissors, lose
    if humIn is paper and paper, tie
rise and repeat for all 3
    
*/

//WILL NEED TO REWRITE MUCH OF THE GAME LOGIC TO MAKE MORE SENSE. /THIS/ SHIT IS SPAGHETTI

const hChoiceBtns = document.querySelectorAll("button");
const hSelection = document.getElementById("humanSelection");
const cSelection = document.getElementById("compSelection");
const score = document.getElementById("score");
const winners = document.getElementById("result");

let humanScore = 0
let computerScore = 0


//  function playGame() {

    //changed this function to use buttons to get choices and display them
    let getHumanChoice = function() {
        hChoiceBtns.forEach((button) => {
            button.addEventListener("click", () => {
                hSelection.textContent = `Human selection is ${button.id}`;
                return(button.id);
            });
        });
    }
    // changed this function to use new consts
    let getComputerChoice = function() {
        const start = Math.floor(Math.random() * 3);
            if (start === 0) {
            result = "rock";
            } else if (start === 1) {
            result = "paper";
            } else {
            result = "scissors";
            }
        cSelection.textContent = `Computer selection is ${result}`;
        return result;
    }

    let playRound = function playRound(humanChoice, computerChoice) {
        const win = "You win!";
        const lose = "You lose! Try again!";
        const tie = "Tie! Try again!";
    
        if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log(win);
            result.textContent = `Rock beats scissors, you win!`;
            humanScore++;
            return win;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log(lose);
            result.textContent = `Paper beats rock, you lose!`;
            computerScore++;
            return lose;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log(win);
            result.textContent = `Paper beats rock, you win!`;
            humanScore++;
            return win;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log(lose);
            result.textContent = `Scissors beats paper, you lose!`;
            computerScore++;
            return lose;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log(win);
            result.textContent = `Scissors beats paper, you win!`;
            humanScore++;
            return win;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log(lose);
            result.textContent = `Rock beats scissors, you lose!`;
            computerScore++;
            return lose;
        } else if (humanChoice === computerChoice) {
            console.log(tie);
            result.textContent = `Tie! Try again!`;
            return tie;
        }
    }

playRound(getHumanChoice(), getComputerChoice());

/*    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(humanScore, computerScore);
        // console.log(humanChoice, computerChoice);
    } if (humanScore == 5) {
        alert("You win! Dominating victory!");
        return;
    } else if (computerScore == 5) {
        alert("You lose! Bad luck!");
        return;
    }   else if (humanScore > computerScore) {
        alert("You win! Congratulations!")
    } else if (humanScore < computerScore) {
        alert("You lose! Press F5 to try again!");
    } else if (humanScore === computerScore) {
        alert("Tie! Press F5 to try again!");
    } */
    
// } 


// playGame();


/*Game Logic:
Scores are initialized at zero to start
Need game to play until one player reaches 5
Repeat playRound() until humanScore or computerScore reaches 5
At 5, alert a winner, reset Score values to 0 to restart game
*/
