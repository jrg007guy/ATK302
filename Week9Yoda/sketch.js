var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var maxCars = 5;
var yodaLeft, yodaRight, yoda;
var birds = [];

function setup() {

  createCanvas(800, 800);
  yodaLeft = loadImage("assets/yodaLeft.gif");
  yodaRight = loadImage("assets/yodaRight.gif");
  yoda = yodaLeft;

  birds[0] = loadImage("assets/bird1.png");
  birds[1] = loadImage("assets/bird2.png");
  birds[2] = loadImage("assets/bird3.png");


  //spawn cars
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }
  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  loadImage(CENTER);
}



function draw() {

  switch (myState) {
    case 0:
      background(100);
      fill('white');
      textSize(100);
      text("Click to Start!", 100, 100);
      break;
    case 1:
      game();
      timer++;
      if (timer > 600) {
        myState = 3;
        timer = 0;
      }
      break;
    case 2:
      background(100);
      fill('white');
      textSize(100);
      text("You won!", 300, 100);
      textSize(50);
      text("Click to Restart", 65, 600);
      resetTheGame();
      break;
    case 3:
      background(100);
      fill('white');
      textSize(100);
      text("You lost", 300, 100);
      textSize(50);
      text("Click to Restart", 65, 600);
      resetTheGame();
      break;
  }

}

// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.birdNum = 0;
  this.timer = 0;

  // methods
  this.display = function() {
    // // //cars
    // fill(this.r, this.g, this.b);
    // ellipse(this.pos.x, this.pos.y, 100, 50);

    image(birds[this.birdNum], this.pos.x - 55, this.pos.y - 45, 100, 100);

    this.timer++;
    if (this.timer > 20) {
      this.birdNum = this.birdNum +1;
      this.timer = 0;
    }

    if (this.birdNum > birds.length - 1) {
      this.birdNum = 0;
    }
  }


  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}



function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;
    case 2:
      myState = 0; //win state
      break;
    case 3:
      myState = 0; //lose sate
      break;
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) yoda = yodaLeft;
  if (keyCode === RIGHT_ARROW) yoda = yodaRight;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}

function resetTheGame() {
  cars = [];

  timer = 0;
  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car(i));
  }

}

function game() {
  background('teal');
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    myState = 2;
    timer = 0;
  }

  // draw the frog
  // fill('green');
  // ellipse(frogPos.x, frogPos.y, 60, 60);
  image(yoda, frogPos.x - 40, frogPos.y - 65, 90, 90);

  checkForKeys();

}
