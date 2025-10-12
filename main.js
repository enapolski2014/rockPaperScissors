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
let tieCounter = 0

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

function playRound(humanChoice, computerChoice) {
    const win = "You win!"
    const lose = "You lose! Try again!"
    const tie = "Tie! Try again!"

    if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log(win);
        humanScore++;
        return win;
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log(lose);
        computerScore++;
        return lose;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log(win);
        humanScore++;
        return win;
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log(lose);
        computerScore++;
        return lose;
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log(win);
        humanScore++;
        return win;
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log(lose);
        computerScore++;
        return lose;
    } else {
        console.log(tie);
        return tie;
    }
}

/*when adding game logic, also add consecutive tie counter
if tie && tieCounter === 0, 
tiecounter++, and say "That's 1 tie!"
if tie && tieCounter > 0, 
tieCounter++ and say `That's ${tieCounter} ties in a row
if win || lose, tieCounter = 0
*/

// playRound(humanSelection, computerSelection);
console.log(humanScore, computerScore);