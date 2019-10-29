var cars = [];
var frogPos;
var myState = 0;
var timer = 600;
var maxCars = 5;
var pokeBallLeft, pokeBallRight, pokeBall;
var pikas = [];
var pikachuWin, pikachuLose;
var x = 0;
var y = 700;
var jumpState = 0;
var jumpTimer = 0;
var song1;
let vid;
var Monoton;

var alpha, beta, gamma; // orientation data
var bunnyImage;
var xPosition = 0;
var yPosition = 0;
var x = 0; // acceleration data
var y = 0;
var z = 0;

function setup() {

  createCanvas(800, 800);
  Monoton = loadFont("Assets/Monoton.ttf");

  alpha = 0;
  beta = 0;
  gamma = 0;

  vid = createVideo(
    ['Assets/PokemonSong.mp4'], vidLoad);
  vid.size(800, 800);
  // song1 = loadSound('assets/pokemon.mp3');
  pokeBallLeft = loadImage("Assets/PokeBallLeft.png");
  pokeBallRight = loadImage("Assets/PokeBallRight.png");
  pokeBall = pokeBallLeft;

  pikas[0] = loadImage("Assets/Pika1.gif");
  pikas[1] = loadImage("Assets/Pika2.gif");
  pikas[2] = loadImage("Assets/Pika3.gif");
  pikas[3] = loadImage("Assets/Pika4.gif");

  pikachuWin = loadImage("Assets/PikachuWin.png");
  pikachuLose = loadImage("Assets/PikachuLose.png");

  //spawn cars
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }
  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  loadImage(CENTER);


}

function vidLoad() {
    vid.loop();
    vid.volume(.5);

}

function draw() {

  switch (myState) {
    case 0:
      background('teal');
      splashText();
      jump();
      break;
    case 1:
      game();
      vid.hide();
      timer--;
      if (timer < 1) {
        myState = 3;
        timer = 600;
      }
      break;
    case 2:
      background('blue');
      fill('white');
      textSize(100);
      text("You won!", 300, 100);
      textSize(50);
      text("Click to Restart", 65, 600);
      image(pikachuWin, 400, 400, 300, 300);
      resetTheGame();
      break;
    case 3:
      background('red');
      fill('white');
      textSize(100);
      text("You lost", 300, 100);
      textSize(50);
      text("Click to Restart", 65, 600);
      image(pikachuLose, 400, 400, 300, 300);
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

    image(pikas[this.birdNum], this.pos.x - 55, this.pos.y - 45, 100, 100);

    this.timer++;
    if (this.timer > 20) {
      this.birdNum = this.birdNum + 1;
      this.timer = 0;
    }

    if (this.birdNum > pikas.length - 1) {
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
  if (keyCode === LEFT_ARROW) pokeBall = pokeBallLeft;
  if (keyCode === RIGHT_ARROW) pokeBall = pokeBallRight;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}

function resetTheGame() {
  cars = [];

  timer = 600;
  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car(i));
  }

}

function game() {
  background('teal');
  fill('white');
  textSize(100);
  text(timer, 300, 100);
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 100) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    myState = 2;
    timer = 600;
  }

  // draw the frog
  // fill('green');
  // ellipse(frogPos.x, frogPos.y, 60, 60);
  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);

  push(); // before you use translate, rotate, or scale commands, push and then pop after

  translate(xPosition, yPosition); // move everything over by x, y

  rotate(radians(alpha)); // using alpha in here so it doesn't feel bad

  image(pokeBall, 0, 0, 90, 90);
  //  	rect(0, 0, 100, 100) ;
  pop();

  checkForKeys();

}

function splashText() {
  fill('white');
  rect(x + 100, y - 100, 450, 100);
  fill('black');
  textSize(35);
  text("Click To Start", x, y - 100);
  fill('yellow');
  textFont(Monoton, 60);
  text("Catch The Pikachus!", x, y - 500);
  fill('black');
  textFont('Helvetica', 30);
  text("Catch all the Pikachus before the timer runs out to win!", x+30, y - 200);
}

function jump() {
  switch (jumpState) {
    case 0:
      y++;
      jumpTimer++;
      if (jumpTimer >= 150) {
        jumpState++;
        jumpTimer = 0;
      }
      break;
    case 1:
      y--;
      jumpTimer++;
      if (jumpTimer >= 150) {
        jumpState++;
        jumpTimer = 0;
      }
      break;
    case 2:
      jumpTimer = 0;
      jumpState = 0;
      break;
  }
}

window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});
