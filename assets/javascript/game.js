var hangmanChoices = ["Master Chief", "Samus Aran", "Doom Slayer", "Arbiter", "thing5"];
var hangmanPick = hangmanChoices[Math.floor(Math.random() * hangmanChoices.length)];
var ansArr = [];
var $startBtn = document.getElementById("start-btn");
var $wins = document.getElementById("wins");
var $losses = document.getElementById("losses");
var $lettersGuessed = document.getElementById("guessed");
var $currentWord = document.getElementById("blank");
var $mulligans = document.getElementById("mulligans");

var guessedLetters = [];
var incorrectLetters = [];
var randomWordReplace = [];
var wordSelect = "";
var guessRemain = 12;
var wins = 0;
var losses = 0;
var gameActive = false;

function start() {
    gameActive = true;
    guessRemain = 12;
    guessedLetters = [];
    incorrectLetters = [];
    randomWordReplace = [];
    hangmanPick = hangmanChoices[Math.floor(Math.random() * hangmanChoices.length)];

    for (var i = 0; i < hangmanPick.length; i++) {
        if (hangmanPick[i] === " ") {
            randomWordReplace.push(" ");
        }
        else {
            randomWordReplace.push("_")
        }

        $mulligans.textContent = guessRemain;
        $lettersGuessed.textContent = incorrectLetters;
        $currentWord.textContent = randomWordReplace.join("");
    }

}


// for (var i = 0; i < hangmanPick.length; i++) {
// ansArr[i] = "_";
// }

var lettersLeft = hangmanPick.length;

$startBtn.addEventListener("click", start);

function guess(letter) {
    console.log(letter);


    for (var i = 0; i < hangmanPick.length; i++) {
        if (hangmanPick[i].toLowerCase() = letter.toLowerCase()) {
            randomWordReplace[i] = hangmanPick[i];
        }
    }
    $currentWord.textContent = randomWordReplace.join("");

}


document.onkeyup = function(event) {
    guess(event.key);

}
// <!-- Display wins and losses -->

// <!-- Make sure game knows win and loss parameters -->

// <!-- Show guesses remaining -->

// <!-- Create array of themed nouns to guess -->

// <!-- Have a noun chosen at random each game -->

// <!-- Create an if/else function that incorporates .include -->

// <!-- Have a max number of guesses for letters for each game -->

// <!-- Have "_" as a stand-in for each letter until it is guessed -->

// <!-- Use event.key for guesses -->

// <!-- Display all letters guessed during this game -->

// <!-- Do not allow double guessing for letters; pressing the same letter again should have no response -->

// <!-- If time, have an image that changes with each wrong guess to show hangman -->