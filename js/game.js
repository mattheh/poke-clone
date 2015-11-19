function processInput () {
  if (UP_KEY in keysDown) {
    background.setY(background.getY() + 2);
  }
  if (DOWN_KEY in keysDown) {
    background.setY(background.getY() - 2);
  }
  if (LEFT_KEY in keysDown) {
    background.setX(background.getX() + 2);
  }
  if (RIGHT_KEY in keysDown) {
    background.setX(background.getX() - 2);
  }

}

function updateGame ( modifier ) {
//console.log(keysDown)
};

function renderGame () {
  //ctx.drawImage(bgImage, 0, 0); // Background Image
  background.render();
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

var then = Date.now();
gameLoop();
