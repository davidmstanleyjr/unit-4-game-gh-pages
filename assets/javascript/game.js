//create variables for everything that needs to be updated on-screen.
//create a random target score for each game.
//give value to each crystal.
//create onclicks that respond to the click of each crystal.
//create counters for each crystal that corresponds to the value of each crystal.
//create variable for random computer choices between 19-120.
//create win and loss logic and have the result print to either wins or losses.
//create logic that resets the game each time someone wins or loses.


//this is a function to generate random crystal numbers. I'm doing it in global scope so I can access it throughout my code.
function getRandomCrystalNumber() {
    return Math.floor((Math.random() * 12) + 1)
}

var wins = 0;
var losses = 0;
var score = 0;
var randomNumber = [];
var crystalNumbers = [getRandomCrystalNumber(), getRandomCrystalNumber(), getRandomCrystalNumber(), getRandomCrystalNumber()];
var computerChoice = Math.floor((Math.random() * 100) + 19);
$("#number-to-win-text").text("number to win: " + computerChoice);

//this is how i'm counting and incrementing new crystal numbers
var counter = 0;
var myIncrementer = crystalNumbers[Math.round(Math.random())];


// I made this function to reset after a win
function reset() {
    crystalNumbers = [getRandomCrystalNumber(), getRandomCrystalNumber(), getRandomCrystalNumber(), getRandomCrystalNumber()];
    computerChoice = Math.floor((Math.random() * 100) + 19);
    counter = 0;
    $("#number-to-win-text").text("number to win: " + computerChoice);
}

// I included win, loss and reset conditions in each type of crystal
$("#black-crystal").on("click", function () {
    counter += crystalNumbers[0];
    $("#score-text").text("your score is: " + counter);


    if (counter === computerChoice) {
        wins++; reset();
        $("#wins-text").text("wins: " + wins);
    }

    if (counter > computerChoice) {
        losses++; reset();
        $("#losses-text").text("losses: " + losses);
    }

});

$("#blue-crystal").on("click", function () {
    counter += crystalNumbers[1];
    $("#score-text").text("your score is: " + counter);


    if (counter === computerChoice) {
        wins++; reset();
        $("#wins-text").text("wins: " + wins);
    }

    if (counter > computerChoice) {
        losses++; reset();
        $("#losses-text").text("losses: " + losses);
    }

});

$("#purple-crystal").on("click", function () {
    counter += crystalNumbers[2];
    $("#score-text").text("your score is: " + counter);


    if (counter === computerChoice) {
        wins++; reset();
        $("#wins-text").text("wins: " + wins);
    }

    if (counter > computerChoice) {
        losses++; reset();
        $("#losses-text").text("losses: " + losses);
    }

});

$("#red-crystal").on("click", function () {
    counter += crystalNumbers[3];
    $("#score-text").text("your score is: " + counter);


    if (counter === computerChoice) {
        wins++; reset();
        $("#wins-text").text("wins: " + wins);
    }

    if (counter > computerChoice) {
        losses++; reset();
        $("#losses-text").text("losses: " + losses);
    }

});