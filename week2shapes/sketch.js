function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(1440, 800);
  background('77aad4');
  noStroke();

  fill('#03c6fc');
  triangle(18, 18, 18, 360, 81, 360);

  fill('#fc0303');
  rect(81, 81, 63, 63);

  fill('#fc03ba');
  quad(189, 18, 216, 18, 216, 360, 144, 360);

  fill('#4a03fc');
  ellipse(252, 144, 72, 72);

  fill('#03fc56');
  triangle(288, 18, 351, 360, 288, 360);

  fill('#fc8803');
  arc(479, 300, 280, 280, PI, TWO_PI);
}
