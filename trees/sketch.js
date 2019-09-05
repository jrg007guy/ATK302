function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);

}

function draw() {
  background('#77aad4');
  noStroke();

  fill('#9e5618');
  triangle(100,114, 50,420, 150,420);

  fill('#2fd627');
  ellipse(100, 168, 200, 200);

  fill('#9e5618');
  triangle(300,114, 250,420, 350,420);

  fill('#2fd627');
  ellipse(300, 168, 200, 200);

  fill('#ffbf00');
  ellipse(700, 0, 200, 200);

  fill('#e6e6e6');
  ellipse(300, -50, 200, 200);

  fill('#e6e6e6');
  ellipse(200, -50, 200, 200);

  fill('#e6e6e6');
  ellipse(100, -50, 200, 200);

  fill('#e6e6e6');
  ellipse(50, -40, 200, 200);

  fill('#e6e6e6');
  ellipse(400, -50, 200, 200);

  fill('#e6e6e6');
  ellipse(500, -40, 200, 200);
  //
  // fill('#fc0303');
  // rect(81, 81, 63, 63);
  //
  // fill('#fc03ba');
  // quad(189, 18, 216, 18, 216, 360, 144, 360);
  //
  // fill('#4a03fc');
  // ellipse(252, 144, 72, 72);
  //
  // fill('#03fc56');
  // triangle(288, 18, 351, 360, 288, 360);
  //
  // fill('#fc8803');
  // arc(479, 300, 280, 280, PI, TWO_PI);

  fill ('black')
  text(mouseX + ',' + mouseY, 30,30)
}

function mouseReleased(){
  console.log(mouseX + ',' + mouseY, 30,30);
}
