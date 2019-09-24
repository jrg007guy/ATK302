var myState = 0 ;
var myTimer = 0 ;

function setup() {
  // put setup code here
  createCanvas(720, 400);
}

function draw() {
  // put drawing code here

switch(myState) {

  case 0:
  background(0,0,255) ;
  text("case 0", 100, 100) ;
  myTimer++ ;
  if (myTimer > 200) {
    myTimer = 0 ;
    myState = 1 ;
  }

  break;

  case 1:
  background(0,255,0) ;
  text("case 1", 100, 100) ;
  myTimer++ ;
  if (myTimer > 200) {
    myTimer = 0 ;
    myState = 2 ;
  }
  break;

  case 2:
  background(255,0,0) ;
  text("case 2", 100, 100) ;
  myTimer++ ;
  if (myTimer > 200) {
    myTimer = 0 ;
    myState = 3 ;
  }
  break;

  case 3:
  background(150,150,0) ;
  text("case 3", 100, 100) ;
  myTimer++ ;
  if (myTimer > 200) {
    myTimer = 0 ;
    myState = 4 ;
  }
  break;

  case 4:
  background(0,150,150) ;
  text("case 4", 100, 100) ;
  myTimer++ ;
  if (myTimer > 200) {
    myTimer = 0 ;
    myState = 0 ;
  }
  break;
}

}
function mouseReleased() {

  myState+= 1;

  if (myState>4) {
    myState = 0;
  }

}
