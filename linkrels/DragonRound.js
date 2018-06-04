var yourName = prompt("What is your name?"); 
var yourWeapon = prompt("What weapon do you choose?"); 
var evadeChance = Math.floor(Math.random() * 10 + 1); 
var slaying = true; 
var youHit = 1 + Math.floor(Math.random() * 100); 
var hitAccuracy = 80; 
var damageThisRound = Math.floor(Math.random() * 10 + 1); 
var totalDamage = 0; 
var dragonHealth = 150; 
var critValue = 1 + Math.floor(Math.random() * 100); 
var roundCounter = 0; 

var attackingPhase = function() {  
	  nameCheck(); 
	  weaponCheck(); 
	  critChance(); 
	  document.write("<p>" + yourName + " hit for " + damageThisRound + " damage!</p>");
	  totalDamage += damageThisRound; 
          if (totalDamage >= dragonHealth) {
              document.write("<p class='victory-message'>" + yourName + " killed the Dragon!</p>");
              slaying = false;
          } else {
              document.write("<p class='dragon-health'>The dragon has "+(dragonHealth-totalDamage)+" health left!</p>");
			  damageThisRound = Math.floor(Math.random() * 10 + 1); 
			  roundCounter = roundCounter + 1; 
        }
}; 

var dragonTypeGreeting = function() {
  if(yourName.indexOf(' and ') >= 0 | yourName.indexOf(' And ') >= 0){
	document.write("You encounter a fierce dragon!")
  }
  else if (yourName.indexOf(' Mun ') >= 0) {
	document.write("You encounter the God dragon!")
  }
  else if (yourName.indexOf('Bepe Demarco') >= 0) {
	document.write("You encounter an Elder dragon!")
  }
  else {
	document.write("You encounter a young dragon!")
  }
}; 

var nameCheck = function() {
  if(yourName.indexOf(' and ') >= 0 | yourName.indexOf(' And ') >= 0){
	damageThisRound = damageThisRound + Math.floor((Math.random() * 10) + 1)
	dragonHealth = 200;
  }
  else if (yourName.indexOf(' Mun ') >= 0) {
	damageThisRound = Math.floor((Math.random() * 1000) + 1);
	dragonHealth = 5000; 
  }
  else if (yourName.indexOf('Bepe Demarco') >= 0) {
	damageThisRound = damageThisRound + 20;
	dragonHealth = 500; 
	evadeChance = evadeChance + 2; 
	youHit = youHit + 10; 
	critValue = critValue - 45
  }
  else {
   damageThisRound = damageThisRound; 
  }
}; 

var weaponCheck = function() {
	if (yourWeapon === "Titans Bane" | yourWeapon === "Titans bane" | yourWeapon === "titans bane" | yourWeapon === "Titan's Bane" | yourWeapon === "Titan's bane" | yourWeapon === "titan's bane") {
		damageThisRound = damageThisRound + (Math.floor(damageThisRound * 0.33)); 
	} 
	else if (yourWeapon === "Fists" | yourWeapon === "fists" | yourWeapon === "Fist" | yourWeapon === "fist") {
		damageThisRound = damageThisRound - (Math.floor(damageThisRound * 0.5)); 
		evadeChance = evadeChance - 3; 
	} 
	else if (yourWeapon === "Qins Sais" | yourWeapon === "Qins sais" | yourWeapon === "qins sais" | yourWeapon === "Qin's Sais" | yourWeapon === "Qin's sais" | yourWeapon === "qin's sais") {
		damageThisRound = damageThisRound + (Math.floor(dragonHealth * 0.04)); 
		youHit = youHit + 5; 
	} 
	else if (yourWeapon === "Excalibur" | yourWeapon === "excalibur") {
		damageThisRound = damageThisRound + 5; 
		evadeChance = evadeChance + 1;
	} 	
	else if (yourWeapon === "Zodiac Spear" | yourWeapon === "Zodiac spear" | yourWeapon === "zodiac spear") {
		youHit = youHit - 10; 
	} 
	else if (yourWeapon === "Blow Torch" | yourWeapon === "Blow torch" | yourWeapon === "Blowtorch" | yourWeapon === "Blow-Torch" | yourWeapon === "Blow-torch") {
		damageThisRound = damageThisRound - (Math.floor(damageThisRound * 0.5)) + (roundCounter * 2); 
		if (youHit > hitAccuracy) {
			roundCounter = 0;
		}
	} 
	else if (yourWeapon === "Hermione's Wand" | yourWeapon === "Hermione's wand" | yourWeapon === "hermione's wand" | yourWeapon === "Hermiones Wand" | yourWeapon === "Hermiones wand" | yourWeapon === "hermiones wand") {
		damageThisRound = damageThisRound - 1 + (Math.floor(roundCounter * 1.5)); 
		if (youHit > hitAccuracy) {
			roundCounter = 0;
		}
	}		
	else if (yourWeapon === "Bow" | yourWeapon === "bow" | yourWeapon === "Long Bow" | yourWeapon === "Long bow" | yourWeapon === "long bow") {
		damageThisRound = damageThisRound * 3; 
		hitAccuracy = hitAccuracy - 10; 
		evadeChance = evadeChance - 2; 
		if (youHit > hitAccuracy) {
			roundCounter = 0; 
			hitAccuracy = 80; 
		}
	}
	else if (yourWeapon === "Deathbringer" | yourWeapon === "DeathBringer" | yourWeapon === "deathbringer") {
		critValue = critValue - 20; 
		if (critValue <= 5) {
			damageThisRound = damageThisRound * 2; 
		}
	}	
	else if (yourWeapon === "Wind Demon" | yourWeapon === "Winddemon" | yourWeapon === "winddemon" | yourWeapon === "Wind demon" | yourWeapon === "Wind Daemon" | yourWeapon === "Winddaemon" | yourWeapon === "wind daemon" | yourWeapon === "winddaemon" ) {
		critValue = critValue - 20; 
		evadeChance = evadeChance - 2; 
		if (critValue <= 5) {
			damageThisRound = damageThisRound + Math.floor(Math.random() * 10 + 1); 
		}
	}
	else {
		damageThisRound = damageThisRound; 
	} 
}; 

var critChance = function() {
	if (critValue <= 5) {
		damageThisRound = damageThisRound * 2; 
		document.write("<p>" + yourName + " got a Critical Hit!</p>"); 
		critValue = 1 + Math.floor(Math.random() * 100);
	}
	else {
		critValue = 1 + Math.floor(Math.random() * 100);
	}
}; 

document.write("<h1>"); 
dragonTypeGreeting(); 
document.write("</h1>"); 

while (slaying) {
  if (youHit <= hitAccuracy) {
    youHit = 1 + Math.floor(Math.random() * 100); 
    evadeChance = Math.floor(Math.random() * 10 + 1);
	attackingPhase(); 
  }
  else if (youHit > hitAccuracy && evadeChance <= 3) {
		document.write("<p>The dragon missed " + yourName + ", lucky you!</p>");
        youHit = 1 + Math.floor(Math.random() * 100); 
		evadeChance = Math.floor(Math.random() * 10 + 1);
		attackingPhase();  
  } 
  else if (youHit > hitAccuracy && evadeChance > 3) {
		document.write("<p class='death-message'>" + yourName + " missed and the dragon nommed them, woo for you!</p>");
		slaying = false;
  }
}
document.write("<p>Well then...</p>");