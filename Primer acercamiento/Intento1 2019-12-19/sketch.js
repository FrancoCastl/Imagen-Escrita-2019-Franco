function setup() {
  createCanvas(400, 400);
}
function draw() {
  
  background(220);
  beginShape();
  vertex(96, 361); 
curveVertex(115, 369); 
curveVertex(110, 351); 
curveVertex(111, 322); 
curveVertex(111, 269); 
curveVertex(111, 241); 
curveVertex(109, 208); 
curveVertex(106, 170); 
curveVertex(103, 140); 
curveVertex(103, 113); 
curveVertex(104, 82); 
curveVertex(104, 48); 
curveVertex(113, 43); 
curveVertex(125, 43); 
vertex(141, 51); 
vertex(151, 71); 
vertex(154, 102); 
vertex(157, 136); 
vertex(158, 156); 
vertex(167, 174); 
vertex(172, 176); 
vertex(203, 178); 
vertex(224, 178); 
vertex(245, 178); 
vertex(260, 177); 
vertex(274, 181); 
vertex(284, 189); 
vertex(293, 212); 
vertex(298, 239); 
vertex(299, 276); 
vertex(293, 301); 
vertex(285, 318); 
vertex(274, 341); 
vertex(260, 355); 
vertex(242, 371); 
vertex(210, 375); 
vertex(177, 377); 
vertex(134, 379); 
vertex(114, 377); 
  endShape();
  speed = sin(millis()/180) * 90
   
  fill ( 120, 32, 145)
  
  circle (200, speed + 60, 80, 100)
   textSize(32);
fill(10, 100, 70)  
text('Smitty', 10, 30);
fill(210, 102, 153);
text('Werbenjagermanjensen', 10, 60);
fill(789182, 153, 51);
text('El número uno', 10, 90);
fill(10,110, 153)
  
}
function mousePressed() {
  console.log("vertex(" + mouseX + ", " + mouseY + ");");
}