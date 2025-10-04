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

const computerSelection = getComputerChoice();

const humanSelection = getHumanChoice();

function getComputerChoice() {
    const start = Math.floor(Math.random() * 3);
        if (start === 0) {
        result = "rock";
        } else if (start === 1) {
        result = "paper";
        } else {
        result = "scissors";
        }
    return result;
}
console.log(computerSelection);
/*
Logic for human choice:
create a funciton for getHumanChoice
Use prompt method to get human choice
Human choice will return one of the valid choices 
    depending on what the user inputs
User input needs case insensitivity

*/

function getHumanChoice() {
        let input = prompt("Choose your weapon!");
        let human = input.toLowerCase();
    return human;
}

console.log(humanSelection);

/*
Declare player score variables
Create two new variables named humanScore and computerScore in the GLOBAL SCOPE
Initialize those variables with a value of 0
*/

let humanScore = 0
let computerScore = 0

/*
Logic to play a single round
Create function named playRound()
Convert Rock, Paper, and Scissors to integers to make comparison easier
Compare humanChoice to computerChoice

    
*/

function playRound(humanChoice, computerChoice) {
    humanToInt(humanChoice);
    computerToInt(computerChoice);
        function humanToInt(humanString) {
            if (humanString === "rock") {
                result = 0;
                console.log(result);
                return humanVal = result;
            } else if (humanString === "paper") {
                result = 1;
                console.log(result);
                return humanVal = result;
            } else {
                result = 2;
                console.log(result);
                return humanVal = result;
            }
        }
        function computerToInt(computerString) {
            if (computerString === "rock") {
                result = 0;
                console.log(result);
                return computerVal = result;
            } else if (computerString === "paper") {
                result = 1;
                console.log(result);
                return computerVal = result;
            } else {
                result = 2;
                console.log(result);
                return computerVal = result;
            }
        }
    if (humanVal < computerVal) {
        alert("You lose! Try Again!")
        return;
        } else if (humanVal > computerVal) {
        alert("You win!");  
      return;
        } else {
        alert("Tie! Try again!")
        return;
        }

}
/* > and < comparisons don't work, because human rock will always lose.
        Need more direct comparisons between rock paper and scissors.
*/

playRound(humanSelection, computerSelection);