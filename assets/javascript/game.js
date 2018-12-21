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
    document.getElementById("usedLs").innerHTML = usedLetters;
    document.getElementById("pguesses").innerHTML = guesses;
}

function fauxboardCheck(guess) { //function to check html keyboard
    guessTicker = 0;
    usedLetters.push(guess);
    document.getElementById("usedLs").innerHTML = usedLetters;
    for (i = 0; i < randWord.length; i++) { //Checks random word for correct answers
        if (randWord[i] === guess) {
            answerArray[i] = guess;
            guessTicker++;
            document.getElementById("theword").innerHTML = answerArray.join(" ");
            
            if (answerArray.join('') === randWord) {
                wins++;
                document.getElementById("pwins").innerHTML = wins;
                alert("Congratulations! You've won! The word was: " + randWord + "!");
                hangman.attr("src", "assets/images/HangmanWin.png");
                newGame();
            }
        }
    }
    if (guessTicker <= 0) { //Checks to see if an answer was in the word array if not then incorrect guess is logged.
        guesses--;
        document.getElementById("pguesses").innerHTML = guesses;
        if (guesses === 6) {
            hangman.attr("src", "assets/images/Hangman1.png");
        } else if (guesses === 5) {
            hangman.attr("src", "assets/images/Hangman2.png");
        } else if (guesses === 4) {
            hangman.attr("src", "assets/images/Hangman3.png");
        } else if (guesses === 3) {
            hangman.attr("src", "assets/images/Hangman4.png");
        } else if (guesses === 2) {
            hangman.attr("src", "assets/images/Hangman5.png");
        } else if (guesses === 1) {
            hangman.attr("src", "assets/images/Hangman6.png");
        } else if (guesses === 0) {
            alert("GAME OVER! Sorry you didn't guess the word! The word was: " + randWord + ".");
            loses++;
            document.getElementById("ploses").innerHTML = loses;
            hangman.attr("src", "assets/images/Hangman7.png");
            newGame();
        }
    }

}

//Load info on html to display variables
window.onload = function loadDisplay(){
    document.getElementById("pwins").innerHTML = wins;
    document.getElementById("ploses").innerHTML = loses;
    document.getElementById("pguesses").innerHTML = guesses;
    document.getElementById("theword").innerHTML = answerArray.join(" ");
    hangman = $("#hangmanImg")

    //on click of the "keyboard" key, run the same check as on the real keyboard.
    $("#qkey").on("click", function() {
        fauxboardCheck("q");
    });

    $("#wkey").on("click", function() {
        fauxboardCheck("w");
    });

    $("#ekey").on("click", function() {
        fauxboardCheck("e");
    });

    $("#rkey").on("click", function() {
        fauxboardCheck("r");
    });

    $("#tkey").on("click", function() {
        fauxboardCheck("t");
    });

    $("#ykey").on("click", function() {
        fauxboardCheck("y");
    });

    $("#ukey").on("click", function() {
        fauxboardCheck("u");
    });

    $("#ikey").on("click", function() {
        fauxboardCheck("i");
    });

    $("#okey").on("click", function() {
        fauxboardCheck("o");
    });

    $("#pkey").on("click", function() {
        fauxboardCheck("p");
    });
        
    $("#akey").on("click", function() {
        fauxboardCheck("a");
    });
        
    $("#skey").on("click", function() {
        fauxboardCheck("s");
    });
        
    $("#dkey").on("click", function() {
        fauxboardCheck("d");
    });
        
    $("#fkey").on("click", function() {
        fauxboardCheck("f");
    });
        
    $("#gkey").on("click", function() {
        fauxboardCheck("g");
    });
        
    $("#hkey").on("click", function() {
        fauxboardCheck("h");
    });
        
    $("#jkey").on("click", function() {
        fauxboardCheck("j");
    });
        
    $("#kkey").on("click", function() {
        fauxboardCheck("k");
    });
        
    $("#lkey").on("click", function() {
        fauxboardCheck("l");
    });
        
    $("#zkey").on("click", function() {
        fauxboardCheck("z");
    });
        
    $("#xkey").on("click", function() {
        fauxboardCheck("x");
    });
        
    $("#ckey").on("click", function() {
        fauxboardCheck("c");
    });
        
    $("#vkey").on("click", function() {
        fauxboardCheck("v");
    });
        
    $("#bkey").on("click", function() {
        fauxboardCheck("b");
    });
        
    $("#nkey").on("click", function() {
        fauxboardCheck("n");
    });
        
    $("#mkey").on("click", function() {
        fauxboardCheck("m");
    });

};

//User uses the keyboard to guess a letter
document.onkeyup = function(event){
    var guess = event.key.toLowerCase();
    guessTicker = 0;
    if (event.keyCode >= 65 && event.keyCode <= 90){
        usedLetters.push(guess);
        document.getElementById("usedLs").innerHTML = usedLetters;
         
        for (i = 0; i < randWord.length; i++) { //Checks random word for correct answers
            if (randWord[i] === guess) {
                answerArray[i] = guess;
                guessTicker++;
                document.getElementById("theword").innerHTML = answerArray.join(" ");
                
                if (answerArray.join('') === randWord) {
                    wins++;
                    document.getElementById("pwins").innerHTML = wins;
                    alert("Congratulations! You've won! The word was: " + randWord + "!");
                    hangman.attr("src", "assets/images/HangmanWin.png");
                    newGame();
                }
            }
        }
        
        if (guessTicker <= 0) { //Checks to see if an answer was in the word array if not then incorrect guess is logged.
            guesses--;
            document.getElementById("pguesses").innerHTML = guesses;
            //images input
            if (guesses === 6) {
                hangman.attr("src", "assets/images/Hangman1.png");
            } else if (guesses === 5) {
                hangman.attr("src", "assets/images/Hangman2.png");
            } else if (guesses === 4) {
                hangman.attr("src", "assets/images/Hangman3.png");
            } else if (guesses === 3) {
                hangman.attr("src", "assets/images/Hangman4.png");
            } else if (guesses === 2) {
                hangman.attr("src", "assets/images/Hangman5.png");
            } else if (guesses === 1) {
                hangman.attr("src", "assets/images/Hangman6.png");
            } else if (guesses === 0) {
                alert("GAME OVER! Sorry you didn't guess the word! The word was: " + randWord + ".");
                loses++;
                document.getElementById("ploses").innerHTML = loses;
                hangman.attr("src", "assets/images/Hangman7.png");
                newGame();
            }
        }
    } else {
        alert("Please choose a letter!")
    }    
    
}





