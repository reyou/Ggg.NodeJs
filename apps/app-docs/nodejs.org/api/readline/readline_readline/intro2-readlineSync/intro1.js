var readlineSync = require("readline-sync");

// Wait for user's response.
var userName = readlineSync.question("May I have your name? ");
console.log("Hi " + userName + "!");

// Handle the secret text (e.g. password).
var favFood = readlineSync.question("What is your favorite food? ", {});
console.log("Oh, " + userName + " loves " + favFood + "!");
