let i = 10;
let col = {
  r: 70,
  g: 25,
  b: 7,
};


function setup() {
  createCanvas(600, 440);
  strokeWeight(1);
  noLoop();
}


function draw() {
  background(200);

  for (let i = 0; i < 10000; i++) {

    push();

    let posX = random(50, width - 50);
    let posY = random(50, height - 50);

    translate(posX, posY);

    rotate(random(TWO_PI));
    col.r = 47;
    col.g = random(20, 97);
    col.b = random(100, 70);
    stroke(col.r, col.g, col.b, 120);
    line(-20, 10, 20, 0);

    pop();

  }
}