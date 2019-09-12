var x = 0;
var y = 0;

function setup() {
  // put setup code here
  createCanvas(300, 300);
}

function draw() {
  // put drawing code here
  background(100);
  rect(x,height/2, 50, 50);
  x += 2 ;
if (x > width) {
  x = 0 ;
}
rect(width/2,y, 50, 50);
y += 2 ;
if (y > height) {
y = 0 ;
}
}
