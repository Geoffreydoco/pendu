
// //generating random word usi localarray

// var wordsarray = ['apple', 'front', 'store', 'magic', 'paris', 'virus', 'drone', 'glove', 'where', 'salad'];
// const wordtofind = wordsarray[Math.floor(Math.random() * wordsarray.length)];
// console.log(wordtofind);

//generating random word using api

var wordtofind;
fetchonapirandomword();
function fetchonapirandomword() {
const rndmwrd = fetch('https://raw.githubusercontent.com/RazorSh4rk/random-word-api/master/words.json')
  .then(response => response.json())
  .then(data => {wordtofind = (data[Math.floor(Math.random() * data.length)]
        )
        console.log(wordtofind);
        if (wordtofind.length>4 && wordtofind.length<8){
        rungame();}
        else {
          fetchonapirandomword();
        }
  });
}

//main function
function rungame(){
displayemptyword();
function displayemptyword() {
  for (var i = 0; i < wordtofind.length; i++) {
    // crée un nouvel élément div
    var newDiv = document.createElement("span");
    newDiv.setAttribute('id', `letter${i}`)
    // et lui donne un peu de contenu
    var newContent = document.createTextNode("_ ");
    // ajoute le nœud texte au nouveau div créé
    newDiv.appendChild(newContent);
    // ajoute le nouvel élément créé et son contenu dans le DOM
    var currentDiv = document.getElementById('viewword');
    document.body.insertBefore(newDiv, currentDiv);
  }
}
//objects declaration
const viewword = document.querySelector("#viewword")
const displayword = document.querySelector(".displayword")
const button = document.querySelector('#btn');
const input = document.getElementById("input");
const alertmessage = document.querySelector(".alert");
let playersletter = '';
let wincondition = 0;
//Display trials
let nbrtrial = wordtofind.length+2;
const trial = document.querySelector('.trial');
trial.innerHTML = "Remaining trial(s) : " + nbrtrial;
//getting input from player
input.addEventListener('input', (e) => {
  playersletter = (e.target.value).toLowerCase();
});
//Trial Main function
function turnround() {
  button.addEventListener('click', () => {
    if (playersletter) {
      for (i = 0; i < wordtofind.length; i++) {
        //comparing player input
        if (playersletter == wordtofind[i]) {
          const letterdom = document.querySelector("#".concat('letter', i));
          // Dom filling good answer and wincondition stepping
          if (letterdom.innerHTML == "_ ") {
            letterdom.innerHTML = playersletter;
            wincondition = wincondition + 1;
          }
        }
      }
      //countdown and losing condition
      nbrtrial = nbrtrial - 1;
      trial.innerHTML = "Remaining trial(s) : " + nbrtrial;
      if (nbrtrial == 0 && wincondition !== wordtofind.length) {
        alertmessage.classList.add("showlose");
        alertmessage.innerHTML = ("It's a shame ! The word to find was " + wordtofind.toUpperCase() + ". <br><br>Try again ! ! <br><br><br> Click to play again");
        alertmessage.addEventListener('click', () => {
          document.location.reload();
        });
      }
      //Ending setup
      if (wincondition == wordtofind.length) {
        alertmessage.classList.add("show");
        alertmessage.innerHTML = ("You're the boss. The Mysterious word was " + wordtofind.toUpperCase() + ". <br>Congratulation ! <br><br><br> Click to play again");
        alertmessage.addEventListener('click', () => {
          document.location.reload();
        });
      }
      // Clear value and autofocus
      playersletter = "";
      input.value = "";
      input.focus();
    }
  });
}
turnround();
//Alternate validation enter key
input.addEventListener("keyup", function (e) {
  if (e.code === 'Enter') {
    e.preventDefault();
    button.click();
  }
});
input.addEventListener("dblclick", function () {  
    button.click();
});
}











