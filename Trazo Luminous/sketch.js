let imagen;

function preload() {
  imagen = loadImage ("Franco Esponja.jpg");
  }

function setup() {
  createCanvas(701, 806);
  rectMode (CENTER);
  noLoop ();
}

let sp = 12

function draw() {
  background(220);
  noStroke();
  
  for (let y = 0; y < height; y += sp) {
    for (let x =0; x < width; x += sp) {
      let col = imagen.get(x,y);
      LeTrazo (x,y, col);
    }
  }
}


function LeTrazo (x,y, col) {
  let l = brightness (col);
  let n = round(map(l, 0, 255, 77, 90)); 
  let r = red(col);
  let g = green(col);
  let b = blue(col);
  for(let i = 0; i < n; i++){
    let nx = random(-sp, sp);
      let ny = random(-sp, sp);
  let c = color(4 + r,107 - g, 10 + b);  
  fill(c);
  ellipse (x + nx, y + ny, 17, 7);
    
  }
}