var score = 0;

function setup() {
  // put setup code here
  createCanvas(800, 500);
  textAlign(CENTER);
  background(0,150,150);
}

function draw() {
  // put drawing code here

text('Joe Gawlik', width / 2, width / 2);

ellipse(50, 60, 25, 25);
ellipse(50, 90, 50, 50);
ellipse(50, 150, 75, 75);
  // if (mouseIsPressed) {
  //   fill(random(255), random(255), random(255));
  //   ellipse(mouseX, mouseY, 50, 50);
  // } else {
  //   fill(random(255), random(255), random(255));
  //   rect(mouseX, mouseY, 50, 50);
  // }
  text(score, width / 3, width / 3);

}
function mouseReleased() {
    score++ ;
    fill(random(255), (0), (0));
    ellipse(mouseX, mouseY, 100, 100);
    fill(random(255), random(255), random(255));
    text('Joe Gawlik', mouseX, mouseY);
}
