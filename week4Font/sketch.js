var Monoton;

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
  text("Hello World", 20, 100);
}
