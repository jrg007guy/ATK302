var bugs = []; // array of something
var glitchPos;
var myState = 0;
var timer = 0;
var Maxbugs = 4;


function setup() {
  // put setup code here
  createCanvas(800, 600);

  for (var i = 0; i < Maxbugs; i++) {
    bugs.push(new Bug(i));
  }
  glitchPos = createVector(width / 2, height / 2);
}



function draw() {

  switch (myState) {
    case 0:
      background(100);
      text("welcome", 100, 100);
      break;

    case 1:
      game();
      break;

    case 2:
      background(100);
      text("you won!", 100, 100);
      break;

    case 3:
      background(100);
      text("you lost!", 100, 100);
      break;

  }

}



function resetTheGame() {

  bugs = [];

  timer = 0;
  for (var i = 0; i < Maxbugs; i++) {
    bugs.push(new Bug(i));
  }

}



function game() {

  background(100);

  // iterate through all the cars and do stuff

  for (var i = 0; i < bugs.length; i++) {

    bugs[i].move();
    bugs[i].display();

    var distance = bugs[i].pos.dist(glitchPos); // get the distance btw two vectors

    if (distance < 50) {
      bugs.splice(i, 1); // take something out of the “cars” array
    }

  }



  // ellipse(frogPos.x, frogPos.y, 50, 50);

  // "DEBUGGING DOT!!!"
  // fill('red');
  // ellipse(glitchPos.x, glitchPos.y, 80, 80);

  push();
  translate(glitchPos.x-400, glitchPos.y-220);
  makeGlitch();
  pop();

  checkForKeys();



  if (bugs.length == 0) {

    myState = 2;

  }



  timer++;

  if (timer > 30 * 60) {

    myState = 3;

    timer = 0;

  }



}



function mouseReleased() {

  switch (myState) {

    case 0:

      myState = 1;

      break;

    case 2:

      myState = 0;

      break;

    case 3:

      myState = 0;

      break;

  }

  console.log("length of car array is " + bugs.length);

}





function checkForKeys() {

  // if a keyIsDown move the frog

  if (keyIsDown(LEFT_ARROW)) glitchPos.x = glitchPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) glitchPos.x = glitchPos.x + 5;
  if (keyIsDown(UP_ARROW)) glitchPos.y = glitchPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) glitchPos.y = glitchPos.y + 5;

  if (glitchPos.x > width) glitchPos.x = 0;
  if (glitchPos.x < 0) glitchPos.x = width;

}





// ***********************************

// DEFINE A CLASS CALLED CAR()



function Bug(num) {

  // constructor
  // properties are here
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-3, 3), random(-3, 3));
  this.wide = random(40, 80);
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.name = num;

  // methods

  this.move = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }



  this.display = function() {

    // "DEBUGGING DOT!!!"
    // fill('yellow');
    // ellipse(this.pos.x, this.pos.y, 80, 80);

    push(); // needed for translate command
    // this next command moves the thing
    translate(this.pos.x-130, this.pos.y-80);
    // this makes the bugs
    makeBug();

    pop();

  }
}

///  END OF BUG class



function makeGlitch() {

  fill(255);
  ellipse(400, 200, 50, 50);
  fill(20);
  quad(382, 194, 398, 196, 393, 202, 381, 200);
  fill(20);
  quad(402, 196, 402, 202, 417, 201, 419, 192)
  fill("red");
  quad(382, 228, 414, 228, 413, 271, 382, 272);
  fill(0);
  line(380, 236, 363, 244);
  line(412, 233, 433, 249);
  line(384, 271, 386, 289, 367, 289);
  line(406, 272, 409, 286, 392, 297);

}



function makeBug() {

  fill(10);
  ellipse(131, 75, 25, 25);
  fill('orange');
  ellipse(125, 73, 10, 10);
  ellipse(138, 70, 9, 9);
  fill(180);
  quad(166, 45, 205, 51, 188, 74, 143, 73);
  fill(180);
  quad(124, 78, 65, 82, 56, 53, 89, 48, 121, 70);
  stroke(10);
  line(127, 81, 116, 98);
  line(139, 84, 135, 104);

}
