var myState = 0;
var myTimer = 0;
var x = -1000;
var y = 0;
var xTwo = 0;
var yTwo = 700;
var ranClick = 255;
var ranClick2 = 255;
var ranClick3 = 255;
let img;
let img1;
let img2;
let img3;
let img4;
let img5;


function preload() {
  img = loadImage('assets/Club.png');
  img1 = loadImage('assets/Cup.png');
  img2 = loadImage('assets/Couch.png');
  img3 = loadImage('assets/Island.png');
  img4 = loadImage('assets/Winter.gif');
  img5 = loadImage('assets/City.png');
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here

  switch (myState) {
    case 0:
      image(img, 0, 0, windowWidth, windowHeight);
      myTimer++;
      scroll();
      timer();
      jump();
      yTwo--;
      break;

    case 1:
      image(img1, 0, 0, windowWidth, windowHeight);
      myTimer++;
      scroll();
      timer();
      jump();
      yTwo++;
      break;

    case 2:
      image(img2, 0, 0, windowWidth, windowHeight);
      myTimer++;
      scroll();
      timer();
      jump();
      yTwo--;
      break;

    case 3:
      image(img3, 0, 0, windowWidth, windowHeight);
      myTimer++;
      scroll();
      timer();
      jump();
      yTwo++;
      break;

    case 4:
      image(img4, 0, 0, windowWidth, windowHeight);
      myTimer++;
      scroll();
      timer();
      jump();
      yTwo--;
      break;

    case 5:
      image(img5, 0, 0, windowWidth, windowHeight);
      myTimer++;
      scroll();
      jump();
      yTwo++;

      if (myTimer >= 150) {
        myState = 0;
        myTimer = 0;
        background('black');
        xTwo = 0;
        yTwo = 700;
      }

      break;
  }

}

function mouseReleased() {
  myTimer = 0;
  ranClick = random(0, 255);
  ranClick2 = random(0, 255);
  ranClick3 = random(0, 255);
  myState += 1;
  background('black');

  if (myState > 5) {
    myState = 0;
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function timer() {
  if (myTimer >= 150) {
    myState++;
    myTimer = 0;
    background('black');
  }

}

function scroll() {
  fill(ranClick, ranClick2, ranClick3);
  rect(0, 15, 3000, 125);
  fill('black');
  rect(x, 25, 1000, 100);
  fill(ranClick, ranClick2, ranClick3);
  textSize(100);
  text("Joe Gawlik Portfolio", x + 10, 110);
  x += 4;
  if (x > width) {
    x = -1000;
  }

}

function jump() {
  fill('black');
  rect(xTwo - 50, yTwo - 50, 450, 100);
  fill(ranClick, ranClick2, ranClick3);
  textSize(50);
  text("Click to advance", xTwo, yTwo);
}
