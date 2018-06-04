// Set the original variable 
var theOdds = prompt('What are the odds?'); 

// Checks for theOdds variable 
if (parseInt(theOdds) < 2) {
  document.write('<p>You see the error you\'ve made here...</p>'); 
} else if(isNaN(theOdds)) {
  document.write('<p>Would be good if you could put a number in here mate...</p>');
} else if (theOdds === '') {
  document.write('<p>You could at least try picking the odds mate...</p>'); 
} else {
    
    // Add other variables 
    var randomNumber = Math.floor(Math.random() * parseInt(theOdds)) + 1; 
    var playerGuess = prompt('Odds on 1-' + theOdds + '?'); 

    // Checks for playerGuess variable 
    if (randomNumber === parseInt(playerGuess)) {
      document.write('<p>Unlucky mate, we both picked ' + randomNumber + '.</p>'); 
    } else if (parseInt(playerGuess) > parseInt(theOdds)) {
      document.write('<p>Learn to count you eejit... 1-' + theOdds + ' only! Be like me and pick something like ' + randomNumber + '.</p>'); 
    } else if (playerGuess === '') {
      document.write('<p>Actually pick something you dumbass, I have so much better to do... You\'re clearly not that bright, so here\'s an example, ' + randomNumber + '.</p>'); 
    } else if(isNaN(playerGuess)) {
      document.write('<p>You picked a number for the first one mate, why you being a knob now...</p>');
    } 
    
    // Extra Stuff (for the lolz)
    if (parseInt(theOdds) > 9 && randomNumber === parseInt(playerGuess)) {
      document.write('<p>That was a ' + ((1 / parseInt(theOdds)) * 100) + '% chance we both picked ' + randomNumber + '. Luck not on your side is it?</p>'); 
    }

    // Failsafe else argument 
    else {
      document.write('<p>You got lucky this time, I picked ' + randomNumber + '.</p>'); 
    } 
  }
