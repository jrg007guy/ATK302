var x = 0;
var y = 0;
function setup() {
  // put setup code here
  createCanvas(300, 300);

}

function draw() {
  // put drawing code here


  fill('red') ;
  rect(100, 100, 100, 100)

  fill('blue');
  text("beep", x, y) ;


}

function mouseReleased() {
  if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY <200))
  {
    x = (random(300));
    y = (random(300));
  console.log("beep");
}
}
