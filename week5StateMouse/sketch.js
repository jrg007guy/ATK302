var myState = 0 ;

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
  break;

  case 1:
  background(0,255,0) ;
  text("case 1", 100, 100) ;
  break;

  case 2:
  background(255,0,0) ;
  text("case 2", 100, 100) ;
  break;
}

}


function mouseReleased() {

  myState+= 1;

  if (myState>2) {
    myState = 0;
  }

}
