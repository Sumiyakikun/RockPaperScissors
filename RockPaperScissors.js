var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
 } 
else 
    if(computerChoice <= 0.67) {
        computerChoice = "paper";
 } 
else {
        computerChoice = "scissors";
 }
 
 var userChoice = prompt("What are you throwing down?").toLowerCase();
 
 var gameRPS = function(playerOne,playerTwo) {
    if (playerOne === "rock" | playerOne === "Rock" | playerOne === "ROCK") {
        if (playerTwo === "rock") {
            return("<p>Draw</p>");
        }
        if (playerTwo === "paper") {
            return("<p>CPU Wins!</p>");
        }
        else {
            return("<p>You Win!</p>");     
        }
    };
    if (playerOne === "paper" | playerOne === "Paper" | playerOne === "PAPER") {
        if (playerTwo === "rock") {
            return("<p>You Win!</p>");
        }
        if (playerTwo === "paper") {
            return("<p>Draw!</p>");
        }
        else {
            return("<p>CPU Wins!</p>");     
        }
    };
    if (playerOne === "scissors" | playerOne === "Scissors" | playerOne === "SCISSORS") {
        if (playerTwo === "rock") {
            return("<p>CPU Wins!</p>");
        }
        if (playerTwo === "paper") {
            return("<p>You Win!</p>");
        }
        else {
            return("<p>Draw!</p>");     
        }
    };

// Easter eggs m8888888
    if (playerOne === "spock" | playerOne === "Spock") {
        if (playerTwo === "rock") {
            return("<p>Live long and prosper brother!</p>");
        }
        if (playerTwo === "paper") {
            return("<p>Paper disproves Spock, sooo...</p>");
        }
        else {
            return("<img src='images/spockpuns.jpg'>");     
        }
	};
		
	if (playerOne === "michael is amazing" | playerOne === "Michael is amazing" | playerOne === "Michael is Amazing" | playerOne === "Michael Is Amazing" | playerOne === "MICHAEL IS AMAZING") {
        if (playerTwo === "rock") {
            return("<p>Nice try at flattery, but you still lose...</p>");
        }
        if (playerTwo === "paper") {
            return("<p>Nice try at flattery, but you still lose...</p>");
        }
        else {
            return("<p>Nice try at flattery, but you still lose...</p>");     
        } 
	};
		
	if (playerOne === "helpme") {
             window.open("linkrels/b/e/h/i/n/d/y/o/u/helpme.html", "_self");;
	};
		
	if (playerOne === "memes" | playerOne === "Memes" | playerOne === "MEMES" | playerOne === "MeMes" | playerOne === "meme" | playerOne === "Meme" | playerOne === "MEME" | playerOne === "MeMe") {
        if (playerTwo === "rock") {
            return("<img src='images/herecomedatmeme.jpg'>");
        }
        if (playerTwo === "paper") {
            return("<img src='images/dogememe.gif'><style>body{background-image:url('images/dogememe.gif')!important;background-repeat:repeat!important;}</style>");
        }
        else {
            return("<img src='images/jontronmeme.gif'>");     
        } 
	};
	
	if (playerOne === "dragon" | playerOne === "Dragon" | playerOne === "DRAGON" | playerOne === "Dragon Round" | playerOne === "Dragon round" | playerOne === "dragon round") {
        window.open("linkrels/DragonRound.html", "_self");
    };

    if (playerOne === "odds on" | playerOne === "oddson") {
         window.open("new/OddsOn.html", "_self");
    };	

// Failsafe - Validity checker		
	if (playerOne !== "rock" | playerOne !== "Rock" | playerOne === "ROCK" | playerOne !== "paper" | playerOne !== "Paper" | playerOne === "PAPER" | playerOne !== "scissors" | playerOne !== "Scissors" | playerOne === "SCISSORS" | playerOne !== "spock" | playerOne !== "Spock" | playerOne !== "michael is amazing" | playerOne !== "Michael is amazing" | playerOne !== "Michael is Amazing" | playerOne !== "Michael Is Amazing" | playerOne !== "MICHAEL IS AMAZING" | playerOne !== "helpme" | playerOne !== "memes" | playerOne !== "Memes" | playerOne !== "MEMES" | playerOne !== "MeMes" | playerOne !== "meme" | playerOne !== "Meme" | playerOne !== "MEME" | playerOne !== "MeMe" | playerOne !== "dragon" | playerOne !== "Dragon" | playerOne !== "DRAGON" | playerOne !== "Dragon Round" | playerOne !== "Dragon round" | playerOne !== "dragon round") {
		return("<p>" + userChoice + " Is Not A Valid Response!</p>");
	};
 };
document.write("<p>"+"You chose "+userChoice+" & the CPU chose "+computerChoice+"!</p>");
var theResult = gameRPS(userChoice,computerChoice);
document.write(theResult);