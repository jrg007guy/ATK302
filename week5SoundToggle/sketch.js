var song1;

function preload() {
  song1 = loadSound('assets/Piano.mp3');
}

function setup() {
  // put setup code here
  createCanvas(720, 400);
}

function draw() {
  // put drawing code here

}

function mouseReleased() {

  if (song1.isplaying()){
    song1.pause();
  }
  else{
    song1.play();
  }
}
