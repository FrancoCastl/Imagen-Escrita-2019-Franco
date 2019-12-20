let img;

function preload() {
  img = loadImage('hand.jpg');
}

function setup() {
  createCanvas(640, 420);
  background(210, 230, 255);
  
}

function draw() {
  blendMode(DIFFERENCE)
}

function mousePressed() {
 stamp(mouseX, mouseY);
}

function stamp(x, y) {
  push();
    translate(-50,-50);
      image(img, x, y, 100, 100);
    pop();
}