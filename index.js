#!/usr/bin/env node
import inquirer from "inquirer";
// 1) computer generate a random number
// 2) user input for guessing number
// 3) compare user input or computer generated number and show result - done
{
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    //console.log(randomNumber); if you uncommint answer is given you without guessing no before question
    const answer = await inquirer.prompt([
        {
            name: "userGuessedNumber",
            type: "number",
            message: "Please guess a number between 1-10:",
        },
    ]);
    if (answer.userGuessedNumber === randomNumber) {
        console.log("Congratulations! You guessed the right number.");
    }
    else {
        console.log("You guessed the wrong number.");
    }
}
