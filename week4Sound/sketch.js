var song1;

function preLoad(){
  song1 = loadSound("assets/BOOM.mp3");
}

function setup() {
  // put setup code here
  createCanvas(800, 800);
  background(255,0,0);
  song1.play();

}

function draw() {
  // put drawing code here
}

function mouseReleased() {
  song1.stop();
}
