var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var maxCars = 5;

function setup() {

  createCanvas(800, 800);

  //spawn cars
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }
  frogPos = createVector(width/2, height-80) ;
  rectMode(CENTER) ;
  ellipseMode(CENTER) ;
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
      if (timer>600){
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


  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    ellipse(this.pos.x, this.pos.y, 100, 50);
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
      cars.splice(i, 1) ;
    }
  }

  if (cars.length == 0) {
    myState = 2;
    timer = 0;
  }

  // draw the frog
  fill('green') ;
  ellipse(frogPos.x, frogPos.y, 60, 60) ;
  checkForKeys() ;

}
