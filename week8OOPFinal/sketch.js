var cars = [];
var maxCars = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car(i));
  }
}

function draw() {
      startPlay();

}

function startPlay() {
  background(100);

  // do some actions on the object
  for (var i = 0; i < cars.length; i++) {
    cars[i].move();
    cars[i].display();
    }
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
      fill(this.r, this.g, this.b);
      rect(this.pos.x, this.pos.y, 50, 20);

  }

}
