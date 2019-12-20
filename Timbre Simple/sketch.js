function setup() {
  createCanvas(640, 420);
  background(220, 170, 255)
}

function draw() {
  //background(220);
}

function mousePressed() {
 stamp(mouseX, mouseY);
}

function stamp(x, y) {
  fill(233, 210, 5)
  ellipse (x, y, 10, 10);
  fill(133, 210, 155)
  quad(x, y, 86, 20, 69, 63, 30, 76);
}