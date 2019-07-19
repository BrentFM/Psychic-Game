var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];
var alphabet = [];
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var computer = String.fromCharCode(letters = Math.floor(Math.random() * 26) + 97);


// On key pressed
document.onkeyup = function (event) {
  var guesses = event.key.toLowerCase();
  alphabet.push(guesses);


  // Data sending to HTML
  document.getElementById('wins').innerHTML = "Wins: " + wins;
  document.getElementById('losses').innerHTML = "Losses: " + losses;
  document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
  document.getElementById('alphabet').innerHTML = "Your guesses so far: " + alphabet;


  // Random number generator
      
    // Winning & losing
    if (guesses === computer) {
      wins++;
      guessesLeft = 9;
      computer = String.fromCharCode(letters = Math.floor(Math.random() * 26) + 97);
    }
    else {
      guessesLeft--;
    }
    if (guessesLeft === 0) {
      losses++;
      guessesLeft = 9;
  
  }
  console.log(computer);
  }
  