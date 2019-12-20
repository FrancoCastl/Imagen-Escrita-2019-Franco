function setup() {
  createCanvas(640, 420);
  sliderD = createSlider(0, 200, 5, 1);
  sliderN = createSlider(0, 200, 5, 1);
  sliderF = createSlider(0, 200, 5, 1);
}

function draw() {
  background(220);
  var r = sliderN.value()
  var width = sliderD.value()
  var n = sliderF.value();
  var d = r * tan(r);
  var y = r * sin(r);
  var x = r * cos(r);
  var angle = PI * (x - y);
  rotate(0);
  background(129, 12, 900);
  for(var i = 0; i < width; i++){
    if(i <= n){stroke("green");}else{stroke("yellow");}
    var h = height - i%d;
    line(i, height, i, h);
    translate(0, i * 0.1);
    rotate(angle)
    fill(247, 120, 114)
    triangle(width, 0, 0, i, i, 0);
  }
}