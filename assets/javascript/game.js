$(document).ready(function() {

// Start with a random number 19-120
// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript 
// helped me get the the random number gen for 19-120
//                Math.floor(Math.random() * (max - min +1) + min);
let randomNumber= Math.floor(Math.random() * (120 - 19 + 1) + 19);

// Each crystal will also have its own random number 1-12
let purplegem= Math.floor(Math.random() * 12) + 1;
let bluegem= Math.floor(Math.random() * 12) + 1;
let greengem= Math.floor(Math.random() * 12) + 1;
let redgem= Math.floor(Math.random() * 12) + 1;

// Defining global variables for wins and losses
let wins= 0;
let losses= 0;
let totalScore= 0;

// This will overwrite the text in the id totalScore with what is given in the variable
// totalScore
$('#totalScore').html(totalScore)


// These on click functions will make it so the if the total score = the random number generated
// by the RNGenerator then it will run a function called win and reset the game
$('#purplegem').on('click', function() {

    totalScore= totalScore + purplegem;
    $('#totalScore').html(totalScore);
    if (totalScore === randomNumber) {

        win();
        resetGame();

    } else if (totalScore > randomNumber) {

        // Otherwise, if the number goes over the random number, they will lose the game
        loss();
        reset();

    }

})

$('#bluegem').on('click', function() {

    totalScore= totalScore + bluegem;
    $('#totalScore').html(totalScore);
    if (totalScore === randomNumber) {

        win();
        resetGame();

    } else if (totalScore > randomNumber) {

        loss();
        reset();

    }

})

$('#greengem').on('click', function() {

    totalScore= totalScore + greengem;
    $('#totalScore').html(totalScore);
    if (totalScore === randomNumber) {

        win();
        resetGame();

    } else if (totalScore > randomNumber) {

        loss();
        reset();

    }

})

$('#redgem').on('click', function() {

    totalScore= totalScore + redgem;
    $('#totalScore').html(totalScore);
    if (totalScore === randomNumber) {

        win();
        resetGame();

    } else if (totalScore > randomNumber) {

        loss();
        reset();

    }

})

})