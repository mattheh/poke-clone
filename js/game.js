// Create the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;//480

var bgImage;


function loadAssets () {

  // Background image
  bgImage = new Image();
  bgImage.src = "assets/images/background.png";//800x480
};

function processInput () {

}

function updateGame ( modifier ) {

};

function renderGame () {
  ctx.drawImage(bgImage, 0, 0);
};

function gameLoop () {
  var now = Date.now();

  var delta = now - then;
  processInput ();
  updateGame ( delta / 1000 );
  renderGame ();

  then = now;

  requestAnimationFrame(gameLoop);

};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now();
loadAssets();
gameLoop();
