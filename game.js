var fieldSize = 6;
var colors, answer;
var gameField = document.querySelector(".gameField");
var squares = document.querySelectorAll(".square");
var messageBox = document.querySelector(".message");
var colorBox = document.querySelector(".colorDisplay");
var menu = document.querySelector(".menu");
var header = document.querySelector(".header");
var restartButton = document.querySelector(".restart");
var easyMode = document.querySelector(".easy");
var normalMode = document.querySelector(".normal");
var hardMode = document.querySelector(".hard");
var prevMode = normalMode;


gameRestart();

restartButton.addEventListener("click", gameRestart);
easyMode.addEventListener("click", function() {
  if (prevMode != easyMode) {
    easyMode.classList.add("active");
    prevMode.classList.remove("active");
    prevMode = easyMode;
    fieldSize = 3;
    gameRestart();
  }
});
normalMode.addEventListener("click", function() {
  if (prevMode != normalMode) {
    normalMode.classList.add("active");
    prevMode.classList.remove("active");
    prevMode = normalMode;
    fieldSize = 6;
    gameRestart();
  }
});
hardMode.addEventListener("click", function() {
  if (prevMode != hardMode) {
    hardMode.classList.add("active");
    prevMode.classList.remove("active");
    prevMode = hardMode;
    fieldSize = 9;
    gameRestart();
  }
});

function gameRestart() {
  [messageBox, menu, header].forEach(elem => elem.style.background = "");
  cleanField();
  generateSquares();
  messageBox.innerText = "";
  colorBox.innerText = answer;
  //Click event listener
  squares.forEach(square => square.addEventListener("click", function(){
    if (this.style.background == answer) {
      squares.forEach(square => square.style.background = answer);
      messageBox.innerText = "You win!";
      [messageBox, menu, header].forEach(elem => elem.style.background = answer);
    }
  }));
}

function cleanField() {
  gameField.innerHTML = "";
}

function generateSquares() {
  colors = generateColors(fieldSize);
  answer = colors[Math.floor(Math.random() * fieldSize)];
  for (var i = 0; i < fieldSize; i++) {
    gameField.innerHTML += '<div class="square"></div>';
  }
  squares = document.querySelectorAll(".square");
  for (var i = 0; i < fieldSize; i++) {
    squares[i].style.background = colors[i];
  }
}

function generateColors(num) {
  var colors = [];
  for (var i = 0; i < num; i++) colors.push(randomColor());
  return colors;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256); //generate 'red' parameter
  var g = Math.floor(Math.random() * 256); //generate 'green' parameter
  var b = Math.floor(Math.random() * 256); //generate 'blue' parameter
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
