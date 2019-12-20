function setup() {
  createCanvas(620, 420);
}

function draw() {
  background(220, 152, 50);
  stroke(255);
  noFill();
  drawCircle(300, 200, 300)
}
function drawCircle (x, y, d) {
  ellipse(x, y, d);
  if (d > 2) {
  drawCircle(x + 17, y + 7, d * 0.7);
  drawCircle(x - 17, y - 7, d * 0.7);
  drawCircle(x, y + d * 0.7, d * 0.5);
  drawCircle(y - 5, d * 0.5);
  }
}