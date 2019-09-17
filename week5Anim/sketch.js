var x = 0;
var xTwo = 0;
var y = 0;

function setup() {
  // put setup code here
  createCanvas(300, 300);
}

function draw() {
  // put drawing code here
  background(100);
  rect(x,height/2, 300, 50);
  x += 2 ;
if (x > width ) {
  x = -300 ;
}

text("VOTE", xTwo, 40) ;
xTwo += 5 ;

if (xTwo> 300) {
  xTwo = 0 ;
}
}
