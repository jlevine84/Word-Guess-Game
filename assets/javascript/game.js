var wins = 0;
var loses = 0;
var guesses = 7;
var usedLetters = [];
var guessTicker = 0;

//Set array for possible words and sets a random word to guess. Also sets the Answer Array to display for the user.
var theWords = ["centipede", "defender", "pacman", "galaga", "burgertime", "qbert", "gauntlet", "battlezone", "asteroids", "frogger", "tetris", "joust", "tempest", "rampage"];
var randWord = theWords[Math.floor(Math.random() * theWords.length)];
var answerArray = [];

console.log(randWord); //tester

for (a = 0; a < randWord.length; a++) {
    answerArray[a] = "_";
}

function newGame() {  //Resets the interface for a new game.
    answerArray = []; 
    usedLetters = [];
    guesses = 7;

    document.getElementById("theword").innerHTML = answerArray.join(" ")
    randWord = theWords[Math.floor(Math.random() * theWords.length)];
    for (a = 0; a < randWord.length; a++) {
        answerArray[a] = "_";
    }
    document.getElementById("theword").innerHTML = answerArray.join(" ");
    document.getElementById("guesses").innerHTML = usedLetters;
    document.getElementById("pguesses").innerHTML = guesses;
}

//Load info on html to display variables
window.onload = function loadDisplay(){
    document.getElementById("pwins").innerHTML = wins;
    document.getElementById("ploses").innerHTML = loses;
    document.getElementById("pguesses").innerHTML = guesses;
    document.getElementById("theword").innerHTML = answerArray.join(" ");
};

//User uses the keyboard to guess a letter
document.onkeyup = function(event){
    var guess = event.key.toLowerCase();
    guessTicker = 0;
    if (isNaN(guess)){
        usedLetters.push(guess);
        document.getElementById("guesses").innerHTML = usedLetters;
        for (i = 0; i < randWord.length; i++) { //Checks random word for correct answers
            if (randWord[i] === guess) {
                answerArray[i] = guess;
                guessTicker++;
                document.getElementById("theword").innerHTML = answerArray.join(" ");
                
                if (answerArray.join('') === randWord) {
                    wins++;
                    document.getElementById("pwins").innerHTML = wins;
                    alert("Congratulations! You've won! The word was: " + randWord + "!");
                    newGame();
                }
            }
        }
        if (guessTicker <= 0) { //Checks to see if an answer was in the word array if not then incorrect guess is logged.
            guesses--;
            document.getElementById("pguesses").innerHTML = guesses;

            if (guesses === 0) {
                alert("GAME OVER! Sorry you didn't guess the word! The word was: " + randWord + ".");
                newGame();
            }
        }
    } else {
        alert("Please choose a letter!")
    }    
    
}




