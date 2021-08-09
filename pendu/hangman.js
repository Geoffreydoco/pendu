var wordsarray = ['apple', 'front', 'store', 'magic', 'paris', 'virus', 'drone', 'glove', 'where', 'salad'];
//generating random word
const wordtofind = wordsarray[Math.floor(Math.random() * 10)];
console.log(wordtofind)
const button = document.querySelector('#btn')
const trial = document.querySelector('.trial')
const input = document.getElementById("input")
let nbrtrial = 8
trial.innerHTML = "Remaining trial(s) : ".concat(nbrtrial)
let playersletter =''
let letter = 'letter'
let wincondition = 0

button.addEventListener('click', () => {
  //getting input from player
  document.getElementById('input').addEventListener('input', (e) => {
    playersletter = (e.target.value).toLowerCase()
  })
  for (i = 0; i < wordtofind.length; i++) {
    //comparing player input
    if (playersletter == wordtofind[i]) {
      const letterdom = document.querySelector("#".concat('letter', i, ""))
      // Dom filling good answer and wincondition stepping
      if (letterdom.innerHTML == "_"){
      letterdom.innerHTML = playersletter      
      wincondition = wincondition + 1
      }
    }
  }
  //countdown and losing condition
  nbrtrial = nbrtrial - 1
  trial.innerHTML = "Remaining trial(s) : ".concat(nbrtrial)
  if (nbrtrial == 0) {
    alert("No attempts remaining try again !")
    document.location.reload();
  }
  //Ending setup
  if (wincondition == 5) {
    alert("You found the Mysterious word. Congratulation !") 
    document.location.reload();   
  }
  // Clear value and autofocus
  input.value = "";
  input.focus();
})









// for (var i = 0; i < wordtofind.length; i++) {
//   console.log(wordtofind[i]);
//   var div = document.createElement("div");
//   var content = document.createTextNode(wordtofind[i]);
//   div.appendChild(content);
//   var currentDiv = document.getElementById('viewwordtofind');
//   document.body.insertBefore(div, currentDiv);
// }




