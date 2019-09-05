function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
  background( 255, 83, 13);
  fill(0);

  if (mouseIsPressed) {
    ellipse(50, 50, 50, 50);
  } else {
    rect(25, 25, 50, 50);
  }

  print(mouseIsPressed);
}
