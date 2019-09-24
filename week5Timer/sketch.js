var myState = 5;

function setup() {
  // put setup code here
  createCanvas(720, 400);
}

function draw() {
  // put drawing code here
switch (myState) {
  case 0:
    background(random(255), random(255), random(255));
    text("case 0", 100, 100);
    if (myState = 1) {
      timer = timer - 1;
      myState = 5;
    }
    break;

  case 1:
    background(random(255), random(255), random(255));
    text("case 1", 100, 100);
    if (myState = 2) {
      timer = timer - 1;
      myState = 1;
    }
    break;

  case 2:
    background(random(255), random(255), random(255));
    text("case 2", 100, 100);
    if (myState = 3) {
      timer = timer - 1;
      myState = 2;
    }
    break;

  case 3:
    background(random(255), random(255), random(255));
    text("case 3", 100, 100);
    if (myState = 4) {
      myState = myState - 1;
      myState = 3;
    }
    break;

  case 4:
    background(random(255), random(255), random(255));
    text("case 4", 100, 100);
    if (myState >= 5) {
      myState = myState - 1;
      myState = 4;
    }
    break;
}
}
