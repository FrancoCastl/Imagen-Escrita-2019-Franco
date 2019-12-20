let t = 0;

function setup() {
  createCanvas(600, 400);
  cursor(CROSS);
  frameRate(25);
  rectMode(CENTER);
}

function draw() {
  background(340,174,220);
  
  var step = frameCount % 10/10*1.5;
  translate(110, 110);
  applyMatrix(1 / step, 0, 0, 1 / step, 0, 0);
  let numX = 27;
  let numY = 17; 
  
  let m = 30;    // margen
  
  let spx = (width - 2*m)/(numX - 1);
  let spy = (height - 2*m)/(numY - 1);
  
  for (let y = 0; y < numY; y++) {
    for (let x = 0; x < numX; x++) {
      

      let d = dist(mouseX, mouseY, m + x*spx, m + y*spy);
      let r = map(d, 0, width, 0, PI);
      
    
      
      push();
      translate(m + x*spx, m + y*spy); 
      rotate(r);
      rotate(r * 0.7);
      rotate(5); 
      fill(294,39)
      arc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);
      fill(59,121,77);
      quad(48, 37, 87, 20, 69, 63, 50, 76);
      pop();
    }
 }
}