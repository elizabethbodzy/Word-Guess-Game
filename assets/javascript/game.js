var bands = ["beatles", "rolling stones", "the who", "led zeppelin", "grateful dead"];

var randomBand = "";
var lettersOfBand = [];
var letters = 0;
var lettersCorrect = [];
var wrongGuess = [];

var wins = 0;
var numberGuess = 9;


function Game() {

    var randomBand = bands[Math.floor(Math.random() * bands.length)];

    lettersOfBand = randomBand.split("");

    letters = lettersOfBand.length;

    for (var i = 0; i < letters; i++) {
        lettersCorrect.push("_");
    }

    document.getElementById("current-word").innerHTML = " " + lettersCorrect.join(" ");

    console.log(randomBand);
    console.log(lettersOfBand)
    console.log(letters)
    console.log(lettersCorrect)
}


    function checkLetters(letter) {
        var letterInBand = false;
            for (var i = 0; i < letters; i++) {
                if(randomBand[i] == letter) {
                letterInBand = true;
        }
    }
    if (letterInBand) {
        for (var i = 0; i < letters; i++) {
            if (randomBand[i] == letter) {
                lettersCorrect[i] = letter;
            }
        }
    }
    else {
        wrongGuess.push(letter);
        numberGuess--;
    }
    console.log(lettersCorrect);
}

function complete () {
    if (lettersOfBand.toString() == lettersCorrect.toString()) {
        wins++;
        reset()
        document.getElementById("wins-text").innerHTML = " " + wins;
    } else if (numberGuess === 0) {
        reset()
    }
    document.getElementById("current-word").innerHTML = " " + lettersCorrect.join(" ");
    document.getElementById("guess-remaining").innerHTML = " " + numberGuess;
}

Game () 

document.onkeyup = function (event) {
    var userGuess = event.key;
    // var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(userGuess);
    complete();
    document.getElementById("letters-guessed").innerHTML = " " + wrongGuess.join(" ");
}

function reset() {
    numberGuess = 9;
    wrongGuess = [];
    lettersCorrect = [];
    Game()
}











