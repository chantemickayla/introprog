var words = ["milkshake", "lollipops", "cars", "movies", "dolphins", "games", "shopping"];
var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;
var chances = 6;
// The game loop
while ((remainingLetters > 0) && (chances > 0)) {
    // Show the player their progress
    alert(answerArray.join(" "));
    // Get a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.").toLowerCase();
    if (guess === null) {
        // Exit the game loop
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else if (answerArray[answerArray.indexOf(guess)] === guess) {
        alert("Repeated the same character!");
        remainingLetters++;
    } else {
        // Update the game state with the guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
    chances--;
    // The end of the game loop
}
// Show the answer and congratulate the player
alert(answerArray.join(" "));
if (chances > 6) {
    alert("Good job! The answer was " + word);
} else {
    alert("Sorry that's the wrong answer! The answer was " + word);
}