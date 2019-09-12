var Monoton;
var x = 0;

function setup() {
  // put setup code here
  createCanvas(1000, 800);
  Monoton = loadFont("assets/Monoton.ttf");
}

function draw() {
  // put drawing code here
  background(100);
  textFont(Monoton, 120);
  fill('blue');
  text("Hello World", x, 100);
  x+=5;
  if (x > width) {
    x = 0;
  }
}
