var myState = 0;
var myTimer = 0;


function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background(100);

  switch (myState) {
    case 0:
      fill('blue');
      textSize(50);
      text("Knock Knock", width / 2, height / 2);
      myTimer++;

      if (myTimer >= 150) {
        myState++;
        myTimer = 0;
      }

      break;

    case 1:
      fill('red');
      textSize(50);
      text("Who's there?", width / 16, height / 2);
      myTimer++;

      if (myTimer >= 150) {
        myState++;
        myTimer = 0;
      }

      break;

    case 2:
      fill('blue');
      textSize(50);
      text("Merry.", width / 2, height / 2);
      myTimer++;

      if (myTimer >= 150) {
        myState++;
        myTimer = 0;
      }

      break;

      case 3:
        fill('red');
        textSize(50);
      text("Merry who?", width / 16, height / 2);
      myTimer++;

      if (myTimer >= 150) {
        myState++;
        myTimer = 0;
      }

      break;

      case 4:
        fill('blue');
        textSize(50);
      text("Merry Christmas!", width / 2, height / 2);
      myTimer++;

      if (myTimer >= 150) {
        myState = 0;
        myTimer = 0;
      }

      break;
      }

}
