// Create the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;//480

// Constants
var UP_KEY = 87; //   W
var LEFT_KEY = 65; // A
var DOWN_KEY = 83; // S
var RIGHT_KEY = 68; //D

// Load Assets
var bgImage;
bgImage = new Image();
bgImage.src = "assets/images/background.png";

// Instantiate Objects
var background = new backgroundObject(bgImage, 0, 0, 1080, 810);


// Add Input Handler
var keysDown = {};
addEventListener("keydown", function (e) {
  keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
  delete keysDown[e.keyCode];
}, false);

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
