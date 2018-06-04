const myHeading = document.getElementById('myHeading');
const previousButton = document.getElementById('previousButton'); 
const resetButton = document.getElementById('resetButton'); 
const myBody = document.getElementById('myBody'); 
const myPTags = document.getElementsByTagName('p') 
const myEvenPTags = document.querySelectorAll('p:nth-child(even)') 
let clicks = 0; 
let previousBGColour = ["rgb(255,255,255)"]; 
let fakeArray = []; 
let previousPColour = [ createPArray() ]; 
let previousEvenPColour = [ createEvenPArray() ]; 
let exclamationMarks = ""; 

function minimumFontSize(theFontSize) {
		if (theFontSize < 0) {
    	clicks = 0; 
    } 
}

function displayResetButton() {
  if (clicks === 0) {
		resetButton.style.display = "none"; 
	} else {
		resetButton.style.display = "inline-block"; 
	}
}

function createPArray() {
	let rgbArray = []; 
	let totalPTags = myPTags.length; 
  for (let i = 0; i < totalPTags; i++) {
  	rgbArray.push("rgb(0, 0, 0)")
  }
  return rgbArray; 
}  

function createEvenPArray() {
	let rgbEvenArray = []; 
	let totalEvenPTags = myEvenPTags.length; 
  for (let i = 0; i < totalEvenPTags; i++) {
  	rgbEvenArray.push("rgb(255, 255, 255)")
  }
  return rgbEvenArray; 
}  

function clickablePreviousButton() {
  if (clicks === 0) {
    previousButton.style.filter = 'grayscale(100%)'; 
    previousButton.style.cursor = 'default'; 
    previousButton.disabled = true; 
  } else {
    previousButton.style.filter = 'grayscale(0%)';
    previousButton.style.cursor = 'pointer'; 
    previousButton.disabled = false; 
  }
} clickablePreviousButton(); 

function addExclamationMarks(text, number) {
	  var totalEMLength = exclamationMarks.length; 
    if (totalEMLength >= 0) {
    	text.innerHTML = text.innerHTML.substring(0, text.innerHTML.length - (totalEMLength - number)); 
    	text.innerHTML += exclamationMarks; 
    } else {
      text.innerHTML += exclamationMarks; 
    } 
}

function getRandomRgb() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

// Presetting colours 
myBody.style.backgroundColor = previousBGColour[0]; 

for (let i = 0; i < previousPColour[0].length; i++) {
  myPTags[i].style.color = previousPColour[0][i]; 
} 

for (let i = 0; i < previousEvenPColour[0].length; i++) {
  myEvenPTags[i].style.backgroundColor = previousEvenPColour[0][i]; 
} 

// Seizure Button 
myHeading.addEventListener('click', () => {
  clicks ++; 
	exclamationMarks += "!"; 
	displayResetButton(); 	
  clickablePreviousButton();
}); 
// Previous Colour Button 
previousButton.addEventListener('click', () => {
  clicks--; 
	exclamationMarks = exclamationMarks.slice(0, -1); 
  minimumFontSize(clicks); 
	displayResetButton();  
	clickablePreviousButton();
}); 

// Reset Button
resetButton.addEventListener('click', () => {
  clicks = 0;
  previousBGColour = ["rgb(255,255,255)"]; 
	previousPColour = [ createPArray() ]; 
  previousEvenPColour = [ createEvenPArray() ]; 
  for (let i = 0; i < myPTags.length; i++) {
  	myPTags[i].style.fontSize = (16 + clicks) + "px"; 
    myPTags[i].innerHTML = myPTags[i].innerHTML.substring(0, myPTags[i].innerHTML.length - exclamationMarks.length); 
  }
  myBody.style.backgroundColor = previousBGColour.pop(); 
  for (let i = 0; i < previousPColour[0].length; i++) {
    myPTags[i].style.color = previousPColour[0].pop(); 
		previousPColour[0].unshift(myPTags[i].style.color); 
  } 
  for (let i = 0; i < previousEvenPColour[0].length; i++) {
    myEvenPTags[i].style.backgroundColor = previousEvenPColour[0].pop(); 
		previousEvenPColour[0].unshift(myEvenPTags[i].style.backgroundColor); 
  } 
  exclamationMarks = ""; 
  displayResetButton(); 
	clickablePreviousButton(); 
}); 

// Setting colours, text and sizes on button click 
for (let i = 0; i < myPTags.length; i++) {
  myHeading.addEventListener('click', () => {
    myPTags[i].style.fontSize = (16 + clicks * 2) + "px"; 
    addExclamationMarks(myPTags[i], 1); 
  });
  previousButton.addEventListener('click', () => {
    myPTags[i].style.fontSize = (16 + clicks * 2) + "px"; 
    addExclamationMarks(myPTags[i], -1); 
  });
}

for (let i = 0; i < previousBGColour.length; i++) {
  myHeading.addEventListener('click', () => {
  	previousBGColour.push(myBody.style.backgroundColor);
		myBody.style.backgroundColor = getRandomRgb(); 
	});
	previousButton.addEventListener('click', () => {
  	myBody.style.backgroundColor = previousBGColour.pop(); 
    });
} 

for (let i = 0; i < previousPColour.length; i++) {
  ( (i) => {  
    myHeading.addEventListener('click', () => {
      for (let j = 0; j < previousPColour[i].length; j++) {
        fakeArray.push(myPTags[j].style.color); 
        myPTags[j].style.color = getRandomRgb(); 
      }
      previousPColour.push(fakeArray); 
      fakeArray = []; 
    }); 
  })(i); 
  ( (i) => {
    previousButton.addEventListener('click', () => {
      pTagColour = previousPColour.pop(); 
      for (let j = 0; j < pTagColour[i].length; j++) {
        myPTags[j].style.color = pTagColour[j]; 
      }
    }); 
  })(i);
}

for (let i = 0; i < previousEvenPColour.length; i++) {
	  ( (i) => {  
    myHeading.addEventListener('click', () => {
      for (let j = 0; j < previousEvenPColour[i].length; j++) {
        fakeArray.push(myEvenPTags[j].style.backgroundColor); 
        myEvenPTags[j].style.backgroundColor = getRandomRgb(); 
      }
      previousEvenPColour.push(fakeArray); 
      fakeArray = []; 
    }); 
  })(i); 
  ( (i) => {
    previousButton.addEventListener('click', () => {
      evenPTagColour = previousEvenPColour.pop(); 
      for (let j = 0; j < evenPTagColour[i].length; j++) {
        myEvenPTags[j].style.backgroundColor = evenPTagColour[j]; 
      }
    }); 
  })(i);
}





