var cars = [];
var maxCars = 50;
var frogPos;
var myState = 0;
var timer = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car(i));
  }
  frogPos = createVector(width / 2, height / 2);
}

function draw() {

  switch (myState) {
    case 0:
      background(100);
      text("Click to Start!", 100, 100);
      break;
    case 1:
      startPlay();
      break;
    case 2:
      background(100);
      text("You didn't get hit!", 100, 100);
      break;
    case 3:
      background(100);
      text("You got hit!", 100, 100);
      break;
  }
}

function resetPlay() {
  cars = [];
  timer = 0;
  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car(i));
  }
}

function startPlay() {
  background(100);

  // do some actions on the object
  for (var i = 0; i < cars.length; i++) {
    cars[i].move();
    cars[i].display();

    var distance = cars[i].pos.dist(frogPos);
    if (distance < 50) {
      cars.splice(i, 1);
    }
  }

//test dot
fill('red');
ellipse(frogPos.x, frogPos.y, 80, 80);

push();
translate(frogPos.x - 200, frogPos.y - 200);
makeFrog();
pop();

checkForKeys();

if (cars.length == 0) {
  mystate = 2;
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
}

function checkForKeys() {

  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

  if (frogPos.x > width) frogPos.x = 0;
  if (frogPos.x < 0) frogPos.x = width;
}

// Car class
function Car() {

  // constructor and attributes
  this.pos = createVector(width / 2, height / 2);
  this.vel = createVector(random(-6, 6), random(-6, 6));
  this.r = random(0, 255);
  this.g = random(0, 255);
  this.b = random(0, 255);

  // methods
  this.move = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;

    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }


  this.display = function() {

    //test dot
    fill('red');
    ellipse(this.x, this.y, 80, 80);


    push();
    translate(this.pos.x, this.pos.y);
      fill(this.r, this.g, this.b);
      rect(this.pos.x, this.pos.y, 50, 20);
    pop();
  }

}

function makeFrog() {
  fill('green');
  ellipse(200, 200, 50, 50);
}
