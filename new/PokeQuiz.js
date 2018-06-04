var questionsAndAnswers = [
  ["What is the Generation 5 grass starter Pokemon", "snivy"], 
  ["What is the box-art legendary from Pokemon Emerald", "rayquaza"], 
  ["What is Michael's favourate Pokemon", "delibird"], 
  ["What was the first Pokemon Game Freak ever created", "rhydon"], 
  ["Which real-world place was Alola based off", "hawaii"] 
  ["Which gen 1 Pokemon had the highest speed stat", "electrode"] 
]; 
var userAnswers = []; 
var totalQuestions = questionsAndAnswers.length; 
var answerCheck = ""; 
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}; 

for( i = 0; i < totalQuestions; i += 1 ){
  var removedQuestion = questionsAndAnswers.splice( Math.floor( Math.random() * questionsAndAnswers.length ), 1)
  userAnswers.push([prompt( removedQuestion[0][0] + "?" ).toLowerCase()])
  if ( userAnswers[i][0] === removedQuestion[0][1] ) {
    userAnswers[i].push(true); 
  } else {
    userAnswers[i].push(false);
  }; 
  var capitaliser = removedQuestion[0][1].capitalize(); 
  if ( userAnswers[i][1] ) { 
    answerCheck += "<div style=\"color:green;\"> Awesome! You guessed the answer to " + removedQuestion[0][0] + " correctly as " + capitaliser + ". </div>"; 
  } else {
    answerCheck += "<div style=\"color:red;\"> Incorrect! The answer to " + removedQuestion[0][0] + " was " + capitaliser + ". </div>"; 
  }; 
}

function print(message) {
  document.write(message);
}

print(answerCheck); 

///// List Pull
//
// var student = [
//   {Name: "Arkha", Track: "Bein' damn fine", Achievements: 100, Points: 28050,}, 
//   {Name: "Goobis", Track: "Underworld ting", Achievements: 28, Points: 12885,}, 
//   {Name: "StoopidSmexyAnhur", Track: "Impaling, Shifting Sands", Achievements: 2, Points: 2065,}, 
//   {Name: "BiteyMuttFen", Track: "Being a GoodBoi", Achievements: 15, Points: 405,}, 
//   {Name: "Joan", Track: "HTML, Big Woofer", Achievements: 58, Points: 22080,}, 
// ]; 
//
// print = function(message) {
//   document.write(message); 
// }; 
//
// for (var i = 0; i < student.length; i += 1) {
//   for (var p in student[i]) {
//     var fullList = "<ol>"; 
//     fullList += "<p>" + p + ": " + student[i][p] + "</p>";
//     fullList += "</ol>"; 
//     print(fullList); 
//   }; 
//   document.write("</br>")
// }; 

///// The Seizure Button 
//
// <body id="myBody">
// <button id="myHeading">Seizure Button</button>
// <p>Making a web page interactive</p>
// <p>This is a completely different line of text</p>
// <p>This is the third line of text which is completely different to the other lines of text</p>
// <p>This is a short line</p>
// </body>
// 
// const myHeading = document.getElementById('myHeading'); 
// const myBody = document.getElementById('myBody'); 
// const myPTags = document.getElementsByTagName('p') 
// const myEvenPTags = document.querySelectorAll('p:nth-child(even)') 
// let clicks = 0;
//
// function getRandomRgb() {
//     var num = Math.round(255 * Math.random());
//     var r = Math.floor(Math.random() * 256);
//     var g = Math.floor(Math.random() * 256);
//     var b = Math.floor(Math.random() * 256);
//     return 'rgb(' + r + ', ' + g + ', ' + b + ')';
// }
//
// myHeading.addEventListener('click', () => {myBody.style.backgroundColor = getRandomRgb();});
// myHeading.addEventListener('click', () => {clicks ++});
//
// for (let i = 0; i < myPTags.length; i++) {
// 	myHeading.addEventListener('click', () => {myPTags[i].style.color = getRandomRgb();});
//   myHeading.addEventListener('click', () => {myPTags[i].style.fontSize = (16 + clicks) + "px"});
//   myHeading.addEventListener('click', () => {myPTags[i].innerHTML += "!"});
//   myHeading.addEventListener('click', () => {myEvenPTags[i].style.backgroundColor = getRandomRgb();});
// }

///// Add to lists
//
// <html>
//   <head>
//     <title>JavaScript and the DOM</title>
//   </head>
//   <body>
//     <h1 id="myHeading">JavaScript and the DOM</h1>
//     <p>Making a web page interactive</p>    
//     <p>Things that are purple:</p>
//     <input></input>
//     <button>Confirm</button>
//     <ul class="johnson">
//       // Adds li tags automatically
//     </ul>
//   </body> 
// </html>
//
// let myHeading = document.querySelector('h1'); 
// const p = document.querySelectorAll('p'); 
// const myButton = document.querySelector('button'); 
// let myLiList = document.querySelector('.johnson'); 
//
// function addLi() {
//   let newLi = document.createElement('li'); 
//   let inputText = document.querySelector('input').value; 
//   newLi.innerText = inputText; 
//   myLiList.appendChild(newLi); 
//   return; 
// } 
//
// for (let i = 0; i < p.length; i++) {
// 	myButton.addEventListener('click', addLi); 
// }