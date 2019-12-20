
function setup() {
  createCanvas(500, 400, WEBGL);
  detailY = createSlider(2, 24, 6);
  detailY.position(10, height + 5);
  detailY.style('width', '80px')

}

function draw() {
  background(200);

  let numX = 12;
  let numY = 12;
  

  for (let y = 0; y < numY; y++) {
    for (let x = 0; x < numX; x++) {


        translate(-30, 20, -40);
      emissiveMaterial(60, 700, 150);
  push();
  rotateZ(frameCount * 0.07);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.07);
  rotateY(millis() / 1000);
  ellipsoid(30, 37, 40, 17, detailY.value());
  pop();

   
    


   }
  }
}