
let symbolSize = 17;  //Tamaño
let streams = [];          //variable para las cadenas

function setup() {
  createCanvas(620, 420);
  let x = 0;             // Variables para la creación de cadenas
  for ( let i = 0; i <= width / symbolSize; i++) {
    let stream = new Stream();
    stream.generateSymbols(x, random(-500, 0)); //instruir para que genere los símbolos
    streams.push(stream);
    x += symbolSize
  }
  textSize(symbolSize);
}

function draw() {
  background(0, 120);
  streams.forEach(function(stream) {
    stream.render();
  });
  
}

function Symbol(x, y, speed, first) {
  this.x = x;
  this.y = y;
  this.value;
  this.speed = speed/ 4;
  this.switchInterval = round(random(2, 20));
  this.first = first; 
  
  this.setToRandomSymbol = function() {
    if (frameCount % this.switchInterval == 0) {
      this.value = String.fromCharCode(
      0x30A0 + round(random(0, 96))
    );
    }
    
  }
  
  this.rain = function() {
    this.y = (this.y >= height) ? 0 : this.y += this.speed;
  }
}

function Stream() {
  this.symbols = [];
  this.totalSymbols = round( random(5, 30));
  this.speed = random(5, 20)
  
  this.generateSymbols = function(x, y) {
   let first = round(random(0, 4)) == 1; //prob. de que brille más
   for (let i = 0; i <= this.totalSymbols; i++) { 
    symbol = new Symbol(x, y, this.speed, first);
    symbol.setToRandomSymbol();
    this.symbols.push(symbol);
    y -= symbolSize  //para que aparezca el siguiente simbolo arriba del otro
     first = false;
  }
 }
  
  this.render = function() {
    this.symbols.forEach(function(symbol) {
     if (symbol.first) {  //condición para el efecto de luz (solo el primer simbolo) 
       fill(250, 110, 100);
      } else {
      fill(255, 14, 14)
      }
      text(symbol.value, symbol.x, symbol.y);
      symbol.rain();
      symbol.setToRandomSymbol();
    });
  }
}