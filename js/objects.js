function backgroundObject (image, x, y, width, height) {
  this.image = image;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  this.render = function () {
    ctx.drawImage(
        this.image,
        this.x,
        this.y
        );
  };

  this.setImage = function (path) {
    this.image.src = path
  };
  
  this.getX = function () {
    return this.x;
  };

  this.getY = function () {
    return this.y;
  };

  this.getWidth = function () {
    return this.width;
  };

  this.getHeight = function () {
    return this.height;
  };
  
  this.setX = function (new_x) {
    if (new_x <= 0 && new_x >= (canvas.width - this.width)) {
      this.x = new_x;
    };
  };

  this.setY = function (new_y) {
    if (new_y <= 0 && new_y >= (canvas.height - this.height)) {
      this.y = new_y;
    };
  };
  
  this.setWidth = function (new_width) {
    this.width = new_width;
  };

  this.setHeight = function (new_height) {
    this.height = new_height;
  };
  
};
